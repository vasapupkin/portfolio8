"use client"

import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls } from "@react-three/drei"
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

function Loader() {
  const { progress, active } = useProgress()
//{progress.toFixed(1)} % loaded
  return <Html center>          <TextGenerateEffect
            words="Please Wait"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          /></Html>
}

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}  className="z-10  pt-36">  
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        {/* <ScrollControls damping={0.5} pages={2}> */}
          <Model />

        {/* </ScrollControls> */}
      </Suspense>
    </Canvas>
  )
}
