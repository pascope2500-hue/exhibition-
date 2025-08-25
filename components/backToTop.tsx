'use client';
import { useEffect } from "react";
import { Button } from "./ui/button";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
    useEffect(() => {
        const handleScroll = () => {
            const button = document.getElementById("back-to-top");
            if (button) {
                button.style.display = window.scrollY > 300 ? "block" : "none";
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <Button id="back-to-top" className="fixed bottom-8 right-4 hidden bg-green-600 text-white hover:bg-gray-700 z-50 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <FaArrowUp className="mr-1 ml-1" />
        </Button>
    )
}