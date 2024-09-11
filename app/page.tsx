"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic"
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
         <div className="h-screen w-screen "> 
           <Scene/>
           </div>
      <div className="max-w-7xl w-full"> 
      <FloatingNav navItems={navItems} />  
   
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
    </div> 
    </main>
  );
};

//className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 "
// bg-black-100
export default Home;
