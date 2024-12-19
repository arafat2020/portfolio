import React from 'react';
import { motion } from "framer-motion";
import { FiCodesandbox } from "react-icons/fi";


function Transition() {
    return (
        <motion.div
            initial={{
                x: "100%",
                width: "100%",
            }}
            animate={{
                x: "0",
                width: "0",
            }}
            exit={{
                width: ["0%", "100%", "0%"], // Animate to 100% width first, then shrink to 0%
                x: ["0%", "0%", "0%"], // x stays static during the exit animation
            }}
            transition={{
                width: {
                    delay: 0.2,
                    duration: 0.8, // Adjust duration to cover both animations smoothly
                    ease: "easeInOut",
                },
                x: {
                    delay: 0.2,
                    duration: 0.8, // Match `x` duration with `width` for consistency
                    ease: "easeInOut",
                },
            }}
            className="fixed w-screen h-screen top-0 bottom-0 right-full z-[999999] bg-slate-800 flex items-center justify-around"
        >
            <FiCodesandbox className="w-[100px] h-[100px] text-rose-500 animate-ping"/>
        </motion.div>
    );
}

export default Transition;
