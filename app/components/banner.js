import Image from "next/image";

const Banner = () => (
<header className="flex justify-between">
    <div className="h-12 relative w-52">
    <Image src="/logo.svg" fill alt="Logo fisheye" className="object-contain"/>
    </div>
    <h1 className="font-normal text-4xl text-[var(--main-color)]">Nos photographes</h1>
</header>
)

export default Banner;