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
 
  return (
    <div>
      <div className="bg-slate-50 w-full h-16 flex justify-between items-center px-10">
        {/* logo */}
        <div className="text-xl font-semibold">software developer</div>
        {/* name */}
        <div className="text-slate-700" onClick={hdlShowContact}>Phaewphan W</div>
     {
      isTrue &&
      <Drawer/>
     }
      </div>
    </div>
  );
}
