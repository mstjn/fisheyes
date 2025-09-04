import Image from "next/image";

const PhotographerCard = () => (
  <article className="flex flex-col items-center w-52 h-80 justify-between">
    <div className="w-full h-52 relative">
      <Image src="/img.png" fill alt="" className="rounded-full" />
    </div>
    <div className="flex flex-col items-center">
      <h2>Mimi Keel</h2>
      <h3>London, UK</h3>
      <p className="text-xs">Voir le beau dans le quotidien</p>
      <p className="text-[#757575] text-xs">400€/jour</p>
    </div>
  </article>
);

export default PhotographerCard;
