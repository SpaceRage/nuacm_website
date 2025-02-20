"use client";

import React, { useState, useEffect } from "react";

const TypewriterText = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);

    return <span>{displayedText}</span>;
};

const HomeSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className="h-screen flex flex-col items-center justify-center bg-gunmetal text-white bg-cover bg-center"
        style={{
            backgroundImage: `url('/IMG_5367.JPG')`, // ✅ Use template literals for correct syntax
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh",
            opacity: "0.8",
        }}
        
        >
            <div className="flex flex-col items-center justify-center bg-gunmetal bg-opacity-80 p-8 rounded-lg">
                <h2 className={`text-3xl font-bold text-tiffany-blue mb-4 transition-opacity text-center duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    Welcome to ACM @ Northeastern
                </h2>
                <p className={`text-center max-w-md transition-opacity duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    <TypewriterText text="Code. Collaborate. Create." speed={100} />
            </p>
            </div>
        </section>
    );
};

export default HomeSection;
