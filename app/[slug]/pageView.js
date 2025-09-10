"use client";
import Banner from "../components/banner";
import Image from "next/image";
const PageView = ({photographer}) => {
  return (
    <>
      <Banner page={true} />
      <main className="pl-24 pr-24">
        <section className="flex justify-between items-center bg-[#FAFAFA] pl-10 pr-10 h-80">
            <article className="flex flex-col gap-5">
                <h1 className="text-6xl text-[#D3573C]">{photographer.name}</h1>
                <h3 className="text-2xl text-[var(--main-color)]">{photographer.city}, {photographer.country}</h3>
                <p className="text-lg text-[#525252]">{photographer.tagline}</p>
            </article>
            <button className="h-16 p-2.5 bg-[var(--main-color)] rounded-sm text-white text-xl font-bold">Contactez-moi</button>
            <div className="relative rounded-full h-52 w-52 overflow-hidden">
                <Image src={`/${photographer.portrait}`} fill alt="" className="object-cover overflow-visible"/>
            </div>
        </section>
      </main>
    </>
  );
};

export default PageView;
