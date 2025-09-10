import { getAllPhotographers } from "./lib/prisma-db.js";
import Banner from "./components/banner.js";
import PhotographerCard from "./components/photoghrapherCard.js";

export default async function Page() {
  const allPhotographers = await getAllPhotographers();

  return (
    <>
      <Banner page={false} />
      <main className="flex flex-wrap justify-between gap-y-15 mt-7">
        {allPhotographers.map((photographer, index) => {
          return <PhotographerCard key={index} photographer={photographer}/>;
        })}
      </main>
    </>
  );
}
