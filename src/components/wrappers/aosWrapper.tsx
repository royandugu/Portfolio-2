"use client"

import { useEffect } from "react";

import Aos from "aos";

import "aos/dist/aos.css";

const AosWrapper = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    useEffect(() => {
        Aos.init({ duration: 800, once: true })
    }, []);

    return (
        <>
            <div className="overflow-x-hidden">
                {children}
            </div>
        </>
    )
}
export default AosWrapper;