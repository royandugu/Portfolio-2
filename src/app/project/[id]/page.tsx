import Link from "next/link"

import { MdOutlineTurnLeft } from "react-icons/md";
import { ProjectFiveDescription, ProjectThreeDescription, ProjectFourDescription, ProjectOneDescription, ProjectTwoDescription } from "@/components/projects/indvDescription/indvDescription";

const projectDescription = [
    {
        banner: "/Images/Projects/banners/Scholarship-min.jpg",
        subtitle: "Wize Consult",
        title: "Design, Admin Dashboard, Student portal and CMS"
    },
    {
        banner:"/Images/Projects/banners/pokemon.jpg",
        subtitle:"Pokemon",
        title:"Light/Dark mode, Poke API implementation"
    },
    {
        subtitle:"Virtual wear-on glasses",
        title:"Prototype- Three.JS / Mediapipe"
    },
    {
        banner:"/Images/Projects/banners/designersHub.jpg",
        subtitle:"Designers Hub",
        title:"Elevating Interior Designing to Artistry"
    },
    {
        banner:"/Images/Projects/banners/eventBook.webp",
        subtitle:"Event-Book",
        title:"Event sorting, listing via location and End user's perspective"
    }
]


const Page = ({ params }: { params: { id: string } }) => {
    return (
        <>

            <div style={{ background: `url(${projectDescription[parseInt(params.id) - 1]?.banner})`, backgroundSize: "cover" }}>
                <div className="bg-[rgba(0,0,0,.7)] flex justify-center pt-96 pb-10">
                    <div className="px-5 sm:px-0">
                        <p className="text-ternary"> {projectDescription[parseInt(params.id) - 1]?.subtitle} </p>
                        <h5 className="max-w-4xl"> {projectDescription[parseInt(params.id) - 1]?.title} </h5>
                    </div>
                </div>
            </div>
            <Link href="/" className="bg-ternary bg-opacity-80 hover:bg-opacity-100 p-3 cursor-pointer fixed top-[20px] left-[20px]">
                <MdOutlineTurnLeft className="text-primary text-[30px] animateArrowUpDown" />
            </Link>
            {params.id === "1" ? <ProjectOneDescription/> : params.id === "2" ?<ProjectTwoDescription/> : params.id === "3" ? <ProjectThreeDescription/>: params.id === "4" ? <ProjectFourDescription/> : <ProjectFiveDescription/> }
        </> 
    )
}
export default Page;