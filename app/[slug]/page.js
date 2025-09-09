const Page = async ({params}) => {
    const slug = await params
    console.log(slug.slug);
    
    return (
        <div>{slug.slug}</div>
    )
}
export default Page;