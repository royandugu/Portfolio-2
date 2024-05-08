"use client"

import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";

import Link from "next/link";

import context from "@/context/context";

import "./hero.css";

const Hero = () => {
    const contextContainer=useContext(context);

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(()=>{
        if(inView) contextContainer.setActiveNav(0);
    },[inView])

    return (
        <section ref={ref} id="hero" className="hero relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between pt-40 md:pt-64 pb-10">
                <div> 
                    <h1 data-aos="fade-right"> Royan</h1>
                    <h1 data-aos="fade-right" className="leading-[50px]"> Dugu. </h1>
                    <div className="mt-10 h-[10px] bg-ternary lineAnimation" data-aos="fade-right" />
                    <div className="iconContainer mt-10 md:mt-32 flex gap-5" data-aos="fade-up">
                        <a href="https://www.facebook.com/royandugu123/" target="_blank"><FaFacebookSquare /></a>
                        <a href="https://wa.me/9779864460627" target="_blank"><FaWhatsapp /></a>
                        <a href="https://github.com/royandugu" target="_blank"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/royan-dugu-6b7035251/" target="_blank"><FaLinkedinIn /></a>
                    </div>
                </div>
                <div className="mt-20 md:mt-0 md:w-1/2 md:pl-20">
                    <p className="text-[rgb(200,200,200)]" data-aos="fade-left"> - Introduction </p>
                    <h5 className="mt-6 leading-[50px] brk1:leading-[60px]" data-aos="fade-left"> Welcome to my World of Web Development Excellence </h5>
                    <p className="mt-6 text-[rgb(200,200,200)]" data-aos="fade-left"> With years of hands-on experience in the dynamic realm of web development, I specialize in creating robust, scalable, and visually stunning web applications.</p>
                    <Link href="./resume.pdf" download={"resume.pdf"} target="_blank"><p className="text-ternary cursor-pointer mt-11 underline" data-aos="fade-up"> Download CV </p></Link>
                </div>
            </div>
            <div className="absolute z-[-1] hidden md:block bottom-0 left-[15%] opacity-10 w-[40%] animateTopDown">
                <img src="./Images/myCartoonMin.png" className="w-full" alt="My cartoon"/>
            </div>
            <div className="absolute z-[-1] top-[20%] block md:hidden left-[15%] opacity-10 w-full">
                <img src="./Images/myCartoonMin.png" className="w-full" alt="My cartoon"/>
            </div>
        </section>
    )
}
export default Hero;