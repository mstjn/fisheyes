"use client";
import { useState } from "react";
import Banner from "../components/banner";
import Image from "next/image";
import Link from "next/link";

const PageView = ({ photographer, medias }) => {
  console.log(medias);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Banner page={true} />
      <main className="pl-24 pr-24">
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
            aria-label="Contact Me"
            className="h-16 p-2.5 bg-[var(--main-color)] rounded-md text-white text-lg font-bold hover:bg-[#DB8876] hover:text-black"
          >
            Contactez-moi
          </button>
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
              <li role="option" tabIndex={-1} className="py-3 border-b border-t w-full text-left font-bold text-lg text-white">
                Date
              </li>
              <li role="option" tabIndex={-1} className="pt-3 pb-3 w-full text-left font-bold text-lg text-white">
                Titre
              </li>
            </ul>
          </div>
        </section>

        <section role="list" aria-label="Galerie des médias" className="flex flex-wrap ">
          {medias.map((project, index) => {
            const col = index % 3;
            const align = col === 0 ? "items-start" : col === 1 ? "items-center" : "items-end";

            return (
              <figure role="listitem" key={index} className={`flex flex-col ${align} w-1/3`}>
                <div className="relative h-75 w-[95%]">
                  {project.image ? (
                    <Link href="#">
                      <Image src={`/${project.image}`} fill alt={`Image de ${project.title}`} className="object-cover rounded-[5px]" />
                    </Link>
                  ) : (
                    <Link href="#">
                      <video src={`/${project.video}`}></video>
                    </Link>
                  )}
                </div>
                <div className="flex justify-between w-[95%] pb-6 pt-2">
                  <figcaption className="text-2xl text-[var(--main-color)]">{project.title}</figcaption>
                </div>
              </figure>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default PageView;
