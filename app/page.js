import { getAllMediasForPhotographer, getPhotographer, getAllPhotographers, updateNumberOfLikes } from "./lib/prisma-db.js";
import Banner from "./components/banner.js";
import PhotographerCard from "./components/photoghrapherCard.js";

export default async function Page() {
  const allPhotographers = await getAllPhotographers();
  console.log(allPhotographers);

  return (
    <>
      <Banner />
      <main>
        <PhotographerCard />
      </main>
    </>
  );
}
