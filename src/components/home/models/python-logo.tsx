import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

const  PythonLogo = (props:GroupProps)=>{
  const { nodes, materials } = useGLTF('/models/python.glb')
  return (
    <Float floatIntensity={1}>
        <group {...props} dispose={null}>
        <mesh
            geometry={nodes.Python_Python_0.geometry}
            material={materials.Python}
            // rotation={[-Math.PI / 2, 0, 0]}
            // scale={100}
        />
        <ambientLight intensity={1} />
        </group>
    </Float>
  )
}

useGLTF.preload('/models/python.glb')
export default PythonLogo;