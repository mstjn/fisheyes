import Image from "next/image";
import Link from "next/link";

const PhotographerCard = ({ photographer }) => (
  <article className="flex flex-col items-center  w-1/3">
    <Link href="#" className="flex flex-col items-center">
      <div className="h-52 w-50 relative overflow-hidden rounded-full">
        <Image src={`/${photographer.portrait}`} fill alt="" className="object-cover overflow-visible" />
      </div>
      <h2>{photographer.name}</h2>
    </Link>

    <div className="flex flex-col items-center">
      <p className="text-base text-[var(--main-color)]">
        {photographer.city}, {photographer.country}
      </p>
      <p className="text-xs">{photographer.tagline}</p>
      <p className="text-[#757575] text-xs">{photographer.price}€/jour</p>
    </div>
  </article>
);

export default PhotographerCard;
