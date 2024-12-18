import React from 'react'
import { motion } from "framer-motion"

function Transition() {
    return (
        <motion.div
            initial={{
                x: "100%",
                width: "100%"
            }}
            animate={{
                x: "0",
                width: "0"
            }}
            exit={{
                x:["0%","100%"],
                width:["0%","100%"]
            }}
            transition={{
                delay:.2,
                duration:.6
            }}
            className='fixed w-screen h-screen top-0 bottom-0 right-full z-[999999] bg-slate-950'
        />
    )
}

export default Transition