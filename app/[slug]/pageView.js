"use client";
import Banner from "../components/banner";
import Image from "next/image";
const PageView = ({ photographer, medias }) => {
  console.log(medias);

  return (
    <>
      <Banner page={true} />
      <main className="pl-24 pr-24">
        <section className="flex justify-between items-center bg-[#FAFAFA] pl-10 pr-10 h-80">
          <article className="flex flex-col gap-5">
            <h1 className="text-6xl text-[#D3573C]">{photographer.name}</h1>
            <h3 className="text-2xl text-[var(--main-color)]">
              {photographer.city}, {photographer.country}
            </h3>
            <p className="text-lg text-[#525252]">{photographer.tagline}</p>
          </article>
          <button className="h-16 p-2.5 bg-[var(--main-color)] rounded-md text-white text-lg font-bold hover:bg-[#DB8876] hover:text-black">
            Contactez-moi
          </button>
          <div className="relative rounded-full h-52 w-52 overflow-hidden">
            <Image src={`/${photographer.portrait}`} fill alt="" className="object-cover overflow-visible" />
          </div>
        </section>
        <section className="flex gap-12 mb-5 mt-5">
          <h3 className="font-bold text-lg">Trier par</h3>
          <div
            className="bg-[var(--main-color)] text-lg text-white font-bold rounded-md p-5 shadow-xl/30"
          >
            <div className="bg-[var(--main-color)] flex w-44 text-lg text-white font-bold rounded-md">
              <h3 className="w-full pb-3">Popularité</h3>
              <Image src="/dropdown-bottom.svg" width={15} height={15} alt="" className="pb-3"/>
            </div>
            <h3 className="pb-3 pt-3 border-b-1 w-full border-t-1">Date</h3>
            <h3 className="pt-3">Titre</h3>
          </div>
        </section>

        <section className="flex flex-wrap justify-between">
          {medias.map((project, index) => {
            const col = index % 3;
            const align = col === 0 ? "items-start" : col === 1 ? "items-center" : "items-end";

            return (
              <article key={index} className={`flex flex-col ${align} w-1/3`}>
                <div className="relative h-75 w-87">
                  <Image src={`/${project.image}`} fill alt="" className="object-cover rounded-[5px]" />
                </div>
                <div className="flex justify-between w-87 pb-6 pt-2">
                  <h3 className="text-2xl text-[var(--main-color)]">{project.title}</h3>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default PageView;
