"use client";

import React, { useState, useEffect } from 'react';

const HomeSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className="h-screen flex flex-col items-center justify-center bg-gunmetal text-white">
            <h2 className={`text-3xl font-bold text-tiffany-blue mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Welcome to ACM @ Northeastern
            </h2>
            <p className={`text-center max-w-md transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                We are a community of computing enthusiasts at Northeastern University. Join us for workshops, networking events, and more!
            </p>
        </section>
    );
}

export default HomeSection;
