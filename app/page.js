import { getAllMediasForPhotographer, getPhotographer, getAllPhotographers, updateNumberOfLikes  } from './lib/prisma-db.js'
 
export default async function Page() {
  const allPhotographers = await getAllPhotographers()
  console.log(allPhotographers);

  return (
   <div></div>
  )
}