import PageView from "./pageView";
import { getPhotographer, getAllMediasForPhotographer, updateNumberOfLikes } from "../../lib/prisma-db";


const Page = async ({ params }) => {
  const p = await params;
  const dataPhotographer = await getPhotographer(parseInt(p.slug));
  const mediasForPhotographer = await getAllMediasForPhotographer(parseInt(p.slug));

   async function updateLikes(id, nb) {
    "use server";
    await updateNumberOfLikes(id, nb); 
  }

  return <PageView photographer={dataPhotographer} medias={mediasForPhotographer} updateLikes={updateLikes}/>;
};
export default Page;
