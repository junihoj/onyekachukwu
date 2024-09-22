"use client"
import React, { Suspense } from 'react';
import { Canvas, Vector3 } from '@react-three/fiber';
import CanvasLoader from '../global/canvas-loader';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { TextHoverEffect } from '../ui/text-hover-effect';
import HackerRoom from './models/hacker-room';
import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '@/constants';
import Target from './models/target';
import ReactLogo from './models/react-logo';
import Rings from './models/rings';
import Cube from './models/cube';
import HeroCamera from './hero-camera';
import { Button } from '../ui/button';
import PythonLogo from './models/python-logo';

type Props = {}

const Hero = (props: Props) => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    const controls = useControls('HackerRoom', {
        rotation: [0, 280, 0],
        scale: {
            value: 0.063,
            min: 0,
            max: 1
        },
        position: [0, 0, 0]
    })
    const targetControl = useControls('Target', {
        rotation: [0, 280, 0],
        scale: {
            value: 0.063,
            min: 0,
            max: 1
        },
        position: [0, 0, 0]
    })
    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Onyeka <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient text-center">Building Products & Brands</p>
                <p className="hero_tag text-gray_gradient text-center">Transforming Ideas To Reality</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/* <Leva /> */}
                <Canvas className='w-full h-full '>
                    <Suspense fallback={<CanvasLoader />}>

                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition as Vector3} rotation={[0.1, -Math.PI, 0]} />
                        </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition as Vector3} />
                            <ReactLogo position={sizes.reactLogoPosition as Vector3} />
                            <Rings position={sizes.ringPosition} />
                            <Cube position={sizes.cubePosition} />
                            <PythonLogo 
                                position={targetControl.position} 
                                // rotation={targetControl.rotation} 
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={targetControl.scale}
                            />
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex justify-center">
                <a href="#about" className="w-fit">
                    <Button>
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        Let's work together
                    </Button>
                </a>
            </div>
        </section>
    )
}

export default Hero;