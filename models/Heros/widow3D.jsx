'use client'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TowerPortal } from '../Portals/TowerPortal'
import { Galaxy } from '../Others/Galaxy'

const Model = (props) => {
  const gltf = useLoader(GLTFLoader, "/assets/black/black_widow.glb")
  
  return (
    <>
      <primitive object={gltf.scene} {...props} />
    </>
  )
}

const Widow3D = () => {
  return (
    <div className="App h-[100vh]">
      <Canvas>
        <Suspense>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
          <OrbitControls />
          <group position={[0, -5, 0]}>
            <Model />
            <ambientLight intensity={4} />
            <TowerPortal scale={4} position={[0, -0.75, -3]} />
            <directionalLight
              intensity={20}
              position={[0, 10, -2]}
              color={"#F9DEB9"}
            />
            <Galaxy scale={100} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Widow3D