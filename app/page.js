import { getAllPhotographers } from "./lib/prisma-db.js";
import Banner from "./components/banner.js";
import PhotographerCard from "./components/photoghrapherCard.js";

export default async function Page() {
  const allPhotographers = await getAllPhotographers();

  return (
    <>
      <Banner page={false} />
      <main className="flex flex-wrap justify-between gap-y-15">
        {allPhotographers.map((photographer, index) => {
          const col = index % 3; // 0 = gauche, 1 = milieu, 2 = droite
          const align = col === 0 ? "items-start" : col === 1 ? "items-center" : "items-end";

          return <PhotographerCard key={index} photographer={photographer} align={align}/>;
        })}
      </main>
    </>
  );
}
