import Image from "next/image";
import { useMemo, useState } from "react";

const ModaleCarrousel = ({ closeModal, media, photos }) => {
  // retrieve the index of the media
  const startIndex = useMemo(() => {
    return photos.findIndex((p) => p.src === media.src);
  }, [photos, media]);
  const [index, setIndex] = useState(startIndex);

  // sorting functions
  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div className="z-50 inset-0 fixed bg-white overflow-auto flex flex-col items-center justify-center">
      <div className="flex justify-center items-center gap-8 w-full h-[80vh] relative">
        <button onClick={() => prev(photos)}>
          <Image src="/left.svg" width={48} height={48} alt="Précédent" className="cursor-pointer z-10" />
        </button>

        <div className="relative w-[60%] h-full">
          <Image src={`/${photos[index].src}`} alt="" fill className="object-contain rounded" priority />
        </div>
        <button onClick={() => next(photos)}>
          <Image src="/right.svg" width={48} height={48} alt="Suivant" className="cursor-pointer z-10" />
        </button>
      </div>

      <p className="text-2xl text-[var(--main-color)]">{photos[index].title}</p>

      <button onClick={closeModal} className="absolute top-4 right-4 w-10 h-10">
        <Image src="/croix-rouge.svg" fill alt="Fermer" className="object-contain" />
      </button>
    </div>
  );
};

export default ModaleCarrousel;
