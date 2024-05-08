"use client"

import context from '@/context/context';
import Link from 'next/link';

import { useEffect, useContext, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import Image from 'next/image';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.css"

const ProjectOne = () => {
    return (
        <div className="w-full flex-shrink-0">
            <Image width={962} height={504}  src="/Images/Projects/wizeAdminDashboard.png" className="w-full" alt='Admin dashboard wize'/>
            <div className="bg-secondary p-5 pt-10 sm:p-10 pr-5">
                <p className='h-[120px] overflow-hidden'> Wize Consult : Design, Admin Dashboard, Student portal, CMS </p>
                <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden"> Empower your consultancy with a website that puts you in control. The user-friendly admin dashboard allows seamless content management. From updating services and team profiles to posting insightful articles, the platform ensures that your website remains current and reflective of your evolving consultancy offerings. </p>
                <Link href="/project/1" target='_blank'><button className="py-5 font-bold text-ternary uppercase text-[15px] sm:text-[20px]">Project details</button></Link>
            </div>
        </div>
    )
}
const ProjectTwo = () => {
    return (
        <div className="w-full flex-shrink-0">
            <Image width={962} height={504} src="/Images/Projects/pokemon.png" className="w-full"  alt='Pokemon'/>
            <div className="bg-secondary p-10 pr-5">
                <p className='h-[120px] overflow-hidden'> Pokemon : Light/Dark mode, Poke API implementation </p>
                <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden"> As a passionate developer, I am thrilled to showcase my creation – a dynamic and engaging Pokemon website that brings the magical world of Pokemon to life! Let&apos;s take a closer look at what makes this project stand out:</p>
                <Link href="/project/2" target='_blank'><button className="py-5 font-bold text-ternary uppercase text-[15px] sm:text-[20px]">Project details</button></Link>
            
            </div>
        </div>
    )
}
const ProjectThree = () => {
    return (
        <div className="w-full flex-shrink-0">
            <Image width={962} height={504} src="/Images/Projects/threeJS.png" className="w-full" alt='Three js'/>
            <div className="bg-secondary p-10 pr-5">
                <p className='h-[120px] overflow-hidden'> Virtual wear-on glasses prototype- Three.JS/Mediapipe </p>
                <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden">Developed to unlock the gateway to augmented reality fashion with GlassWear, a prototype designed to redefine how we interact with virtual garments. Seamlessly blending the boundaries between the physical and digital worlds, GlassWear offers users a glimpse into the future of personalized style and expression.</p>
                <Link href="/project/3" target='_blank'><button className="py-5 font-bold text-ternary uppercase text-[15px] sm:text-[20px]">Project details</button></Link>
            </div>
        </div>
    )
}
const ProjectFour = () => {
    return (
        <div className="w-full flex-shrink-0">
            <Image width={962} height={504} src="/Images/Projects/designersHub.png" className="w-full"  alt='Designers hub'/>
            <div className="bg-secondary p-10 pr-5">
                <p className='h-[120px] overflow-hidden'> Designers Hub: Elevating Interior Designing to Artistry </p>
                <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden"> Transforming a vision into reality is at the core of my interior design websites. Through a powerful admin dashboard, the admin has the ability to customize every aspect of their website, ensuring it reflects their unique style and brand identity. From color schemes and fonts to layout arrangements, the possibilities are endless. </p>
                <Link href="/project/4" target='_blank'><button className="py-5 font-bold text-ternary uppercase text-[15px] sm:text-[20px]">Project details</button></Link>
            </div>
        </div>
    )
}
const ProjectFive = () => {
    return (
        <div className="w-full flex-shrink-0">
            <Image width={962} height={504} src="/Images/Projects/funtasticEvents.png" className="w-full" alt='Funtastic events'/>
            <div className="bg-secondary p-10 pr-5">
                <p className='h-[120px] overflow-hidden'> Event-Book : Event sorting, listing via location and End user&apos;s perspective </p>
                <p className="mt-5 text-[20px] mb-10 text-[rgb(200,200,200)] h-[85px] overflow-hidden">Explore the future of event management with EventBooker, a cutting-edge platform designed to cater to the unique needs of both administrators and event organizers. Let&apos;s dive into the distinctive features that make this project stand out: </p>
                <Link href="/project/5" target='_blank'><button className="py-5 font-bold text-ternary uppercase text-[15px] sm:text-[20px]">Project details</button></Link>
            
            </div>
        </div>
    )
}

const Projects = () => {
    const slider = useRef<any>(null);
    const sliderMid = useRef<any>(null);
    const sliderSml = useRef<any>(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

    const settingsMid = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
    }

    const settingsSmall = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }

    const contextContainer = useContext(context);
    const [threshold,setThreshold]=useState(0.8);

    const { ref, inView } = useInView({
        threshold: threshold,
    });

    useEffect(()=>{
        if(window.innerWidth>400) setThreshold(0.8);
        else setThreshold(0.5)
    },[]) 

    useEffect(() => {
        if (inView) contextContainer.setActiveNav(4);
    }, [inView])


    return (
        <section ref={ref} id="projects">
            <div className="flex sm:items-center flex-col sm:flex-row sm:justify-between">
                <div>
                    <p className="text-ternary" data-aos="fade-right"> Here are some of my </p>
                    <h5 data-aos="fade-right"> Projects </h5>
                </div>
                <div className="flex gap-5 mt-5 sm:mt-0">
                    <div className="bg-ternary p-5 cursor-pointer bg-opacity-80 hover:bg-opacity-100" onClick={() => {
                        slider?.current?.slickPrev()
                        sliderMid?.current?.slickPrev()
                        sliderSml?.current?.slickPrev()
                    }}>
                        <FaArrowLeft className="text-primary text-[20px]" />
                    </div>
                    <div className="bg-ternary p-5 cursor-pointer bg-opacity-80 hover:bg-opacity-100" onClick={() => {
                        slider?.current?.slickNext()
                        sliderMid?.current?.slickNext()
                        sliderSml?.current?.slickNext()
                    }}>
                        <FaArrowRight className="text-primary text-[20px]" />
                  </div>
                </div> 
            </div>
            <div className="mt-14 hidden xl:block">
                <Slider ref={slider} {...settings}>
                    <ProjectOne />
                    <ProjectTwo />
                    <ProjectThree />
                    <ProjectFour />
                    <ProjectFive />
                </Slider>
            </div>
            <div className="mt-14 hidden md:block xl:hidden">
                <Slider ref={sliderMid} {...settingsMid}>
                    <ProjectOne />
                    <ProjectTwo />
                    <ProjectThree />
                    <ProjectFour />
                    <ProjectFive />
                </Slider>
            </div>
            <div className="mt-14 block md:hidden">
                <Slider ref={sliderSml} {...settingsSmall}>
                    <ProjectOne />
                    <ProjectTwo />
                    <ProjectThree />
                    <ProjectFour />
                    <ProjectFive />
                </Slider>
            </div>
        </section>
    )
}
export default Projects;