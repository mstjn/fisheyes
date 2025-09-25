import Image from "next/image";
import { useMemo, useState } from "react";

const ModaleCarrousel = ({ closeModal, media, medias }) => {
  // retrieve the index of the media
  const startIndex = useMemo(() => {
    return medias.findIndex((p) => p.id === media.id);
  }, [medias, media]);
  const [index, setIndex] = useState(startIndex);
  
  // sorting functions
  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + medias.length) % medias.length);
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % medias.length);
  };
  
  return (
    <div role="dialog" aria-label="image closeup view" className="z-50 inset-0 fixed bg-white overflow-auto flex flex-col items-center justify-center">
      <div className="flex justify-center items-center gap-8 w-full h-[80vh] relative">
        <button type="button" aria-label="Previous image" onClick={() => prev(medias)}>
          <Image src="/left.svg" width={48} height={48} aaria-hidden="true" alt="" className="cursor-pointer z-10" />
        </button>

        <div className="relative w-[60%] h-full flex">
          {medias[index].image ? (
            <Image src={`/${medias[index].image}`} alt={medias[index].title} fill tabIndex="0" className="object-contain" priority />
          ) : (
            <video tabIndex="0" aria-label={`Vidéo : ${medias[index].title}`} preload="metadata" controls className="max-h-full max-w-full rounded">
              <source src={`/${medias[index]?.video}`} type="video/mp4" />
              Ton navigateur ne supporte pas la lecture vidéo.
            </video>
          )}
        </div>
        <button type="button" aria-label="Next image" onClick={() => next(medias)}>
          <Image src="/right.svg" width={48} height={48} aria-hidden="true" alt="" className="cursor-pointer z-10" />
        </button>
      </div>

      <p className="text-2xl text-[var(--main-color)]">{medias[index].title}</p>

      <button onClick={closeModal} type="button" aria-label="Close diaglog" className="absolute top-4 right-4 w-10 h-10">
        <Image src="/croix-rouge.svg" fill alt="" aria-hidden="true" className="object-contain" />
      </button>
    </div>
  );
};

export default ModaleCarrousel;
