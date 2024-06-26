"use client"

import context from '@/context/context';

import { useEffect, useContext, useRef } from 'react';
import Image from 'next/image';

const HowIWork=()=>{
    const contextContainer=useContext(context);
    const ref=useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
                contextContainer.setActiveNav(2)
            }
          });
        }, { threshold: 0.2}); 
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }, []);

    return(
        <section ref={ref} id="howIWork" data-aos="fade-right">
            <h5 ref={ref} className="text-center"> How I Work <span className="text-ternary">?</span></h5>
            <div className="flex flex-col md:flex-row items-center gap-20 mt-20">
                <div className="flex-1 w-1/2" data-aos="fade-right">
                    <Image width={748.75606} height={544} src="./Images/collaboration.svg" className='w-full' alt='Requirement analysis svg'/>
                </div>
                <div className="flex-1" data-aos="fade-left">
                    <p className="text-[rgb(200,200,200)]"> - Requirement Analysis </p>
                    <p className="mt-10"> This phase is a bridge between your vision and my execution. It involves comprehensive communication, understanding, and documentation of the your needs, preferences, and constraints. </p>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center gap-20 mt-20">
                <div className="flex-1" data-aos="fade-right">
                    <p className="text-[rgb(200,200,200)]"> - Design </p>
                    <p className="mt-10"> Here I translate gathered requirements into tangible design elements, including system architecture, user interfaces, data models, and workflows. Ensure alignment with stakeholder expectations and industry best practices.</p>
                </div>
                <div className="w-1/2" data-aos="fade-left">
                    <Image width={748.75606} height={544} src="./Images/design.svg" className='w-full' alt='Design svg'/>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-20 mt-20">
                <div className="w-1/2" data-aos="fade-right">
                    <Image width={748.75606} height={544} src="./Images/coding.svg" className='w-full' alt='Coding svg'/>
                </div>
                <div className="flex-1" data-aos="fade-left">
                    <p className="text-[rgb(200,200,200)]"> - Coding </p>
                    <p className="mt-10"> The Coding Phase marks the transition from conceptualization and planning to the actual implementation of the designed system. Here I translate the detailed design specifications into functional code, following best practices and coding standards.</p>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center gap-20 mt-20">
                <div className="flex-1" data-aos="fade-right">
                    <p className="text-[rgb(200,200,200)]"> - Testing </p>
                    <p className="mt-10"> Here I execute test cases to validate that the system functions according to the specified requirements and user expectations. Verify correctness, completeness, and accuracy of system behavior across diverse scenarios.</p>
                </div>
                <div className="w-1/2" data-aos="fade-left">
                    <Image width={748.75606} height={544} src="./Images/testing.svg" className='w-full' alt='Testing svg'/>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-20 mt-20">
                <div className="w-1/2" data-aos="fade-right">
                    <Image width={748.75606} height={544} src="./Images/review.svg" className='w-full' alt='Review svg'/>
                </div>
                <div className="flex-1" data-aos="fade-left">
                    <p className="text-[rgb(200,200,200)]"> - Deployement </p>
                    <p className="mt-10"> The moment we enter the coding phase, the site will be live for you to constantly analyze the development and notify for any further changes. After all the testing, validation and verification, the final product will be deployed. </p>
                </div>
            </div>
        </section>
    )
}
export default HowIWork;