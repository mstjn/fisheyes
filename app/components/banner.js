import Image from "next/image";
import Link from "next/link";

const Banner = ({page}) => (
<header className="flex justify-between">
    <Link href="/" className="h-12 relative w-52">
    <Image src="/logo.svg" fill alt="Fisheye Home Page" className="object-contain"/>
    </Link>
    <h1 className="font-normal text-4xl text-[var(--main-color)]" style={{ display: page ? "none" : "block" }} >Nos photographes</h1>
</header>
)

export default Banner;