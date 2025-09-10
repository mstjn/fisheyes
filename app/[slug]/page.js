import PageView from "./pageView";
import { getPhotographer, getAllMediasForPhotographer } from "../lib/prisma-db";

const Page = async ({ params }) => {
  const p = await params;
  const dataPhotographer = await getPhotographer(parseInt(p.slug));
  const mediasForPhotographer = await getAllMediasForPhotographer(parseInt(p.slug));

  return <PageView photographer={dataPhotographer} medias={mediasForPhotographer} />;
};
export default Page;
