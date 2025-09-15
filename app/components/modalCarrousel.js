import Image from "next/image";

const ModaleCarrousel = ({ closeModal, media }) => {
  return (
    <div className="z-50 inset-0 fixed bg-white overflow-auto flex flex-col items-center justify-center">
      <div className="flex justify-center items-center gap-8 w-full h-[80vh] relative">
        {/* Flèche gauche */}
        <Image src="/left.svg" width={48} height={48} alt="Précédent" className="cursor-pointer z-10" />

        <div className="relative w-[60%] h-full">
          <Image
            src={media.src}
            alt={media.title ?? ""}
            fill
            className="object-contain rounded"
            priority
          />
        </div>

        <Image src="/right.svg" width={48} height={48} alt="Suivant" className="cursor-pointer z-10" />
      </div>

      <p className="text-2xl text-[var(--main-color)]">{media.title}</p>

      <button
        onClick={closeModal}
        className="absolute top-4 right-4 w-10 h-10"
      >
        <Image
          src="/croix-rouge.svg"
          fill
          alt="Fermer"
          className="object-contain"
        />
      </button>
    </div>
  );
};

export default ModaleCarrousel;
