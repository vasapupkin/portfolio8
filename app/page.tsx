"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data";
import dynamic from "next/dynamic"
import Image from "next/image";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { LanguageContext } from "@/contexts/LanguageContext";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })

const Home = () => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');
  const [key, setKey] = useState(0);

  const changeLanguage = (lang: 'en' | 'de') => {
    setLanguage(lang);
    setKey(prevKey => prevKey + 1);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="absolute top-10 right-4 flex lg:flex-row md:flex-row flex-col space-y-2 lg:space-y-0 md:space-y-0 lg:space-x-2 md:space-x-2 z-50">
          <button 
            className="relative inline-flex h-8 w-8 overflow-hidden rounded-full p-[1px] focus:outline-none"
            onClick={() => changeLanguage('de')}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 backdrop-blur-3xl">
              <Image src="/german-flag.png" alt="German Flag" width={24} height={24} />
            </span>
          </button>
          <button 
            className="relative inline-flex h-8 w-8 overflow-hidden rounded-full p-[1px] focus:outline-none"
            onClick={() => changeLanguage('en')}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 backdrop-blur-3xl">
              <Image src="/usa-flag.png" alt="USA Flag" width={24} height={24} />
            </span>
          </button>
        </div>
        <div className="items-center" style={{height:'60vh', width:'100vh'}}> 
          <Scene/>
        </div>
        <div className="max-w-7xl w-full"> 
          <FloatingNav navItems={navItems} />  
          <Hero key={key} />
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </div> 
      </main>
    </LanguageContext.Provider>
  );
};

export default Home;
