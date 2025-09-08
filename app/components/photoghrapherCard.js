import Image from "next/image";

const PhotographerCard = ({photographer}) => (
  <article className="flex flex-col items-center  w-1/3" >
    <div className="flex flex-col items-center">
        <div className="h-52 w-50 relative overflow-hidden rounded-full">
              <Image src={`/${photographer.portrait}`} fill alt={`${photographer.name}`} className="object-cover overflow-visible" />
    </div>
    <div className="flex flex-col items-center">
      <h2>{photographer.name}</h2>
      <h3>{photographer.city}, {photographer.country}</h3>
      <p className="text-xs">{photographer.tagline}</p>
      <p className="text-[#757575] text-xs">{photographer.price}€/jour</p>
    </div>
    </div>
  </article>
);

export default PhotographerCard;
