"use client";
import { useState, useEffect } from "react";
import Banner from "../../components/banner";
import Image from "next/image";
import { createPortal } from "react-dom";
import ModalContact from "../../components/modalContact";
import ModaleCarrousel from "@/app/components/modalCarrousel";

const PageView = ({ photographer, medias, updateLikes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCarrousel, setShowCarrousel] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [items, setItems] = useState(medias);
  const [likes, setLikes] = useState();
  const [selected, setSelected] = useState("Date");

  // sorting functions
  const sortByDate = () => {
    const datedItems = [...items].sort((a, b) => new Date(a.date) - new Date(b.date));
    setItems(datedItems);
    setSelected("Date");
    setIsOpen(false);
  };

  const sortByTitle = () => {
    const titledItems = [...items].sort((a, b) => a.title.localeCompare(b.title));
    setItems(titledItems);
    setSelected("Titre");
    setIsOpen(false);
  };

  const sortByLikes = () => {
    const likedItems = [...items].sort((a, b) => b.likes - a.likes);
    setItems(likedItems);
    setSelected("Popularité");
    setIsOpen(false);
  };

  const options = ["Popularité", "Date", "Titre"];
  useEffect(() => {
    const total = items.reduce((acc, it) => acc + (it.likes || 0), 0);
    setLikes(total);
  }, [items]);

  // liked function
  const onLike = async (id, nb) => {
    const prev = items;

    setItems((cur) => cur.map((m) => (m.id === id ? { ...m, likes: m.likes + 1 } : m)));

    try {
      await updateLikes(id, nb + 1);
    } catch (e) {
      setItems(prev);
      console.error(e);
    }
  };

  const openCarousel = (media) => {
    setSelectedMedia(media);
    setShowCarrousel(true);
  };

  // modal gestion
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setShowModal(false);
        setShowCarrousel(false);
      }
    }
    if (showModal || showCarrousel) {
      window.addEventListener("keydown", handleEscape);
    }
    if (showModal || showCarrousel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [showModal, showCarrousel]);

  return (
    <>
      <Banner page={true} showCarrousel={showCarrousel} showModal={showModal} />
      <main className="pl-24 pr-24" aria-hidden={showModal ? "true" : "false"} {...(showModal || showCarrousel ? { inert: true } : {})}>
        <section aria-labelledby="photographer-heading" className="flex justify-between items-center bg-[#FAFAFA] pl-10 pr-10 h-80">
          <article className="flex flex-col gap-5">
            <h1 id="photographer-heading" className="text-6xl text-[#D3573C]">
              {photographer.name}
            </h1>
            <p className="text-2xl text-[var(--main-color)]">
              {photographer.city}, {photographer.country}
            </p>
            <p className="text-lg text-[#525252]">{photographer.tagline}</p>
          </article>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            aria-label="Contact Me"
            className="h-16 p-2.5 bg-[var(--main-color)] rounded-md text-white text-lg font-bold hover:bg-[#DB8876] hover:text-black"
          >
            Contactez-moi
          </button>
          {showModal && createPortal(<ModalContact closeModal={() => setShowModal(false)} name={photographer.name} />, document.body)}
          <div className="relative rounded-full h-52 w-52 overflow-hidden">
            <Image src={`/${photographer.portrait}`} fill alt={`Portrait de ${photographer.name}`} className="object-cover overflow-visible" />
          </div>
        </section>
        <section aria-labelledby="sorting-heading" className="flex mb-10 mt-5 gap-5 relative">
          <label id="sorting-heading" className="font-bold text-lg">
            Trier par
          </label>

          <div className="flex flex-col cursor-pointer">
            <button
              onMouseDown={(e) => e.preventDefault()}
              id="sort-button"
              type="button"
              aria-expanded={isOpen}
              aria-haspopup="listbox"
              aria-controls="sort-popup"
              aria-labelledby="sort-button-label"
              className={`flex items-center justify-between w-44 ${isOpen ? "rounded-t-md" : "rounded-md"} p-5 font-bold text-lg text-white bg-[var(--main-color)]`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span id="sort-button-label" className="truncate">
                {selected}
              </span>
              <img src={isOpen ? "/dropdown-bottom.svg" : "/dropdown.svg"} width="15" height="15" aria-hidden="true" alt=""/>
            </button>

            <ul
              role="listbox"
              id="sort-popup"
              aria-labelledby="sorting-heading"
              className={isOpen ? "shadow-xl absolute top-17 z-1 w-44 rounded-b-md bg-[var(--main-color)] pl-5 pr-2 pb-2" : "hidden"}
            >
              {options
                .filter((opt) => opt !== selected) 
                .map((opt) => {
                  const handleAction = opt === "Date" ? sortByDate : opt === "Titre" ? sortByTitle : sortByLikes;
                  return (
                    <li
                      key={opt}
                      aria-selected={selected === opt}
                      role="option"
                      aria-label={`Trier par ${opt}`}
                      tabIndex={0}
                      onClick={handleAction}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleAction();
                        }
                      }}
                      className="py-3 border-t  w-full text-left font-bold text-lg text-white"
                    >
                      {opt}
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>

        <section role="list" aria-label="Galerie des médias" className="flex flex-wrap ">
          {showCarrousel &&
            createPortal(<ModaleCarrousel closeModal={() => setShowCarrousel(false)} media={selectedMedia} medias={medias} />, document.body)}
          <aside
            role="region"
            className="bg-[#DB8876] z-10 w-96 h-20 fixed bottom-0 right-8 rounded-t flex justify-between items-center p-5 text-2xl font-medium"
          >
            <div className="flex gap-2">
              <p>{likes}</p> <Image src="/black-heart.svg" width={20} height={20} alt="" aria-hidden="true" />
            </div>
            <p>{photographer.price}€ / jour</p>
          </aside>
          {items.map((project, index) => {
            const col = index % 3;
            const align = col === 0 ? "items-start" : col === 1 ? "items-center" : "items-end";

            return (
              <figure role="listitem" key={index} className={`flex flex-col ${align} w-1/3`}>
                {project.image ? (
                  <button
                    type="button"
                    aria-label={`${project.title}`}
                    onClick={() => openCarousel({ id: project.id, image: project.image, video: project.video, title: project.title })}
                    className="relative h-75 w-[95%]"
                  >
                    <Image src={`/${project.image}`} fill alt={`Image de ${project.title}`} className="object-cover rounded-[5px]" />
                  </button>
                ) : (
                  <button
                    type="button"
                    aria-label={`${project.title}`}
                    onClick={() => openCarousel({ id: project.id, image: project.image, video: project.video, title: project.title })}
                    className="relative h-75 w-[95%]"
                  >
                    <video
                      className="absolute inset-0 object-cover h-full w-full rounded-[5px]"
                      src={`/${project.video}`}
                      tabIndex={-1}
                      aria-hidden="true"
                      preload="metadata"
                    ></video>
                  </button>
                )}

                <figcaption className="flex justify-between w-[95%] pb-6 pt-2">
                  <p className="text-2xl text-[var(--main-color)]">{project.title}</p>
                  <button type="button" className="flex gap-2 items-center" aria-label={`appuyer pour aimer, actuellement ${project.likes} likes`} onClick={() => onLike(project.id, project.likes)}>
                    <p className="text-[var(--main-color)] font-medium text-2xl" >{project.likes}</p>
                    <Image src="/heart.svg" width={20} height={20} alt="" aria-hidden="true" />
                  </button>
                </figcaption>
              </figure>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default PageView;
