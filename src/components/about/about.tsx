"use client"

import context from '@/context/context';

import { useEffect, useContext, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import Image from 'next/image';

import "./about.css";

const About = () => {
    const contextContainer = useContext(context);
    const [threshold,setThreshold]=useState(0);

    const { ref, inView } = useInView({
        threshold: threshold,
    });

    useEffect(()=>{
        if(window.innerWidth>1023) setThreshold(0.8);
        else if(window.innerWidth>=768 && window.innerWidth<=1023) setThreshold(0.7);
        else setThreshold(0.2);
    },[])

    useEffect(() => {
        if (inView) contextContainer.setActiveNav(1);
    }, [inView])

    return (
        <section ref={ref}>
            <div id="about" className="bg-secondary relative p-20 pl-10 pr-10 lg:pl-20 lg:pr-20 ">
                <div className="absolute top-[-30px] left-0 h-[90px] w-[90px] bg-ternary"></div>
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
                    <div className="lg:flex-1">
                        <p className="text-ternary text-left" data-aos="fade-right"> - Education </p>
                        <ol>
                            <li data-aos="fade-right">Secondary School Leaving Certificate (SLC), GEMS School </li>
                            <li data-aos="fade-right">Higher Secondary Education (11th and 12th Grade), Himalayan White House, specializing in Physics, Science </li> 
                            <li data-aos="fade-right">Bachelor&apos;s Degree in Software Engineering (Expected Graduation 2024), NCIT, affiliated with Pokhara University </li>
                        </ol>
                        <p className="text-ternary mt-10" data-aos="fade-right"> - Techstack </p>
                        <div className='expertise gap-10 mt-5 flex flex-wrap text-white' data-aos="fade-right">
                            <a href="https://react.dev/" target="_blank"><FaReact className="hover:text-[#5ed3f3]"/></a>
                            <a href="https://nodejs.org/en" target="_blank"><IoLogoNodejs className="hover:text-[#509941]"/></a>
                            <a href="https://www.mongodb.com" target="_blank"><SiMongodb className="hover:text-[#48a23a]"/></a>
                            <a href="https://nextjs.org/" target="_blank"><SiNextdotjs className="hover:text-[#000000]"/></a>
                            <a href="https://git-scm.com/" target="_blank"><FaGitAlt className="hover:text-[#e94e31]"/></a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-20">
                        <div className="border-2 border-ternary w-full" data-aos="fade-left">
                            <Image height={640} width={640} src="/Images/myPhoto.jpg" className="w-full" alt='My picture'/>
                        </div>  
                    </div>
                </div>

                <div className="absolute bottom-[-150px] left-[50%] bg-ternary h-[150px] w-[20px]" data-aos="fade-up" />
            </div>
        </section>
    )
}
export default About;