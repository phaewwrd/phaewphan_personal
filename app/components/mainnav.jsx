'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Drawer from "./drawer"


export default function MainNav() {
    const router = useRouter();
  const [isTrue, setIsTrue] = useState(false)

  const hdlShowContact = () =>{
    setIsTrue(!isTrue)
  }

  const goToHome = () =>{
    router.push('/')
  }
  const goToProjects = () =>{
    router.push('/project')
  }
  const goToContact = () =>{
    router.push('/contact')
  }
 
  return (
    <div>
      <div className="bg-slate-50 w-full h-20 flex max-sm:flex-col max-sm:place-items-start justify-between items-center px-10 max-sm:pt-5  ">
        <div className='flex max-sm:flex-col max-sm:gap-2 gap-20 '>
        {/* logo */}
        <div className="text-xl  font-semibold cursor-pointer" onClick={goToHome}>software developer</div>
        <div className='flex gap-10'>
        {/* projects */}
        <div className="cursor-pointer text-slate-900 max-sm:hidden text-lg"
      onClick={goToProjects} >projects</div>
        {/* contact me */}
        {/* <div className="cursor-pointer text-slate-900 text-lg"
      onClick={goToContact} >contact me</div> */}
        </div>
        </div>
        {/* name */}
        <div className="text-slate-700 cursor-pointer max-sm:hidden" onClick={hdlShowContact}>Phaewphan W</div>
        
     {
      isTrue &&
      <Drawer/>
     }
      </div>
    </div>
  );
}
