'use client'

import React, { Suspense } from 'react'
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import ButtonPortal from '../Portals/ButtonPortal';

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "/assets/hawk/hawkeye.glb"
  );
  // const bodyMap = useLoader(TextureLoader,'/assets/hawk/Body_S2.png')

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.MFF_iOS_HER_CBA_CWA_A}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.MFF_iOS_HER_CBA_CWA_B}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.MFF_iOS_HER_CBA_CWA_W}
        />
      </group>
    </group>
  );
}

const Hawk3D = () => {
  return (
    <div className="App h-[100vh]">
      <Canvas>
        <Suspense>
          <Model scale={2} position={[0, -1, 0]} />
          <ButtonPortal scale={4} position={[0,-1.8,0] } />
          <ambientLight intensity={12} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Hawk3D