import PageView from "./pageView";
import { getPhotographer } from "../lib/prisma-db";


const Page = async ({ params }) => {
  const dataPhotographer = await getPhotographer(parseInt(params.slug))

  return (
    <PageView photographer={dataPhotographer}/>    
  );
};
export default Page;
