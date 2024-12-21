"use client"
import React, { useState } from 'react'
import { SiHomebridge } from "react-icons/si";
import { IoIdCardOutline } from "react-icons/io5";
import { VscGithubProject } from "react-icons/vsc";
import { GrServices } from "react-icons/gr";
import { IoIosContacts } from "react-icons/io";


import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';



function FloatingNav() {
  const path = usePathname()
  const [name, setName] = useState("")
  interface LinkProp {
    name: string,
    icon: React.ReactNode
    href: string
  }
  
  const Links: LinkProp[] = [
    {
      name: "Home",
      icon: <SiHomebridge
        className='w-10 h-10 text-slate-400 p-1' />,
      href: "/"
    },
    {
      name: "About Me",
      icon: <IoIdCardOutline className='w-10 h-10 text-slate-400 p-1' />,
      href: "/about"
    },
    {
      name: "Projects",
      icon: <VscGithubProject className='w-10 h-10 text-slate-400 p-1' />,
      href: "/project"
    },
    {
      name: "My Service",
      icon: <GrServices className='w-10 h-10 text-slate-400 p-1' />,
      href: "/services"
    },
    {
      name: "Contacts",
      icon: <IoIosContacts className='w-10 h-10 text-slate-400 ' />,
      href: "/contacts"
    }
  ]
  return (
    <div className='absolute z-[999] flex sm:flex-col justify-around sm:justify-normal sm:space-y-3 p-3 xsm:p-6 sm:p-2 sm:top-1/2 transform sm:-translate-y-1/2 sm:right-6 w-full sm:w-auto bottom-0 right-0 bg-slate-800/50 sm:rounded-full h-fit'>
      {
        Links.map(link => (
          <Link key={link.name} href={link.href}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    onMouseEnter={() => setName(link.name)}
                    onMouseLeave={() => setName("")}
                    className={cn('transition duration-200 rounded-full',
                      name === link.name && "scale-125 bg-slate-950/3=40",
                      name!== link.name && "scale-95 opacity-55",
                      name === "" && "scale-100 opacity-100",
                      path === link.href && "border-[2px] border-rose-500 bg-slate-900"
                    )}
                  >
                    {link.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  {link.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        ))
      }
    </div>
  )
}

export default FloatingNav