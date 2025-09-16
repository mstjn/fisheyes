"use client";
import { useState } from "react";
import Banner from "../../components/banner";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import ModalContact from "../../components/modalContact";
import ModaleCarrousel from "@/app/components/modalCarrousel";
import { useEffect, useRef } from "react";

const PageView = ({ photographer, medias, updateLikes}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCarrousel, setShowCarrousel] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [items, setItems] = useState(medias);

  const onLike = async (id,nb) => {
    
    const prev = items;
   
    setItems((cur) => cur.map(m => m.id === id ? { ...m, likes: m.likes + 1 } : m));

    try {
      await updateLikes(id, nb+1); 
    } catch (e) {
      setItems(prev);
      console.error(e);
    }
  };

  console.log(medias);
  

  const openCarousel = (media) => {
    setSelectedMedia(media);
    setShowCarrousel(true);
  };

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
          <h3 id="sorting-heading" className="font-bold text-lg">
            Trier par
          </h3>

          <div className="flex flex-col">
            <button
              onMouseDown={(e) => e.preventDefault()}
              id="sort-button"
              type="button"
              aria-expanded={isOpen}
              aria-haspopup="listbox"
              aria-labelledby="sorting-heading sort-button-label"
              className={
                isOpen
                  ? "flex items-center justify-between w-44 rounded-t-md p-5 font-bold text-lg text-white bg-[var(--main-color)]"
                  : "flex items-center justify-between w-44 rounded-md p-5 font-bold text-lg text-white bg-[var(--main-color)]"
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              <span id="sort-button-label" className="truncate">
                Popularité
              </span>
              <img src={isOpen ? "/dropdown-bottom.svg" : "/dropdown.svg"} width="15" height="15" alt="" aria-hidden="true" />
            </button>

            <ul
              id="sort-popup"
              aria-labelledby="sorting-heading"
              className={isOpen ? "shadow-xl absolute top-17 z-1 w-44 rounded-b-md bg-[var(--main-color)] pl-5 pr-2 pb-2" : "hidden"}
            >
              <li role="option" tabIndex={0} className="py-3 border-b border-t w-full text-left font-bold text-lg text-white">
                Date
              </li>
              <li role="option" tabIndex={0} className="pt-3 pb-3 w-full text-left font-bold text-lg text-white">
                Titre
              </li>
            </ul>
          </div>
        </section>

        <section role="list" aria-label="Galerie des médias" className="flex flex-wrap ">
          {showCarrousel &&
            createPortal(<ModaleCarrousel closeModal={() => setShowCarrousel(false)} media={selectedMedia} medias={medias} />, document.body)}
          {items.map((project, index) => {
            const col = index % 3;
            const align = col === 0 ? "items-start" : col === 1 ? "items-center" : "items-end";

            return (
              <figure role="listitem" key={index} className={`flex flex-col ${align} w-1/3`}>
                {project.image ? (
                  <button
                    onClick={() => openCarousel({ id: project.id, image: project.image, video: project.video, title: project.title })}
                    className="relative h-75 w-[95%]"
                  >
                    <Image src={`/${project.image}`} fill alt={`Image de ${project.title}`} className="object-cover rounded-[5px]" />
                  </button>
                ) : (
                  <button
                    onClick={() => openCarousel({ id: project.id, image: project.image, video: project.video, title: project.title })}
                    className="relative h-75 w-[95%]"
                  >
                    <video className="absolute inset-0 object-cover h-full w-full rounded-[5px]" src={`/${project.video}`}></video>
                  </button>
                )}

                <figcaption className="flex justify-between w-[95%] pb-6 pt-2">
                  <p className="text-2xl text-[var(--main-color)]">{project.title}</p>
                  <button className="flex gap-2 items-center"  onClick={() => onLike(project.id, project.likes)}>
                    <p className="text-[var(--main-color)] font-medium text-2xl ">{project.likes}</p>
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
