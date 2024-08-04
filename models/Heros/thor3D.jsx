'use client'

import { Environment, OrbitControls,useGLTF } from '@react-three/drei';
import { Canvas,  useThree } from '@react-three/fiber'
import React, { Suspense, useEffect } from 'react'
import StonePortal from '../Portals/StonePortal';


const Model = (props) => {
  const { nodes, materials } = useGLTF("/assets/Thor/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.MFF_iOS_HER_TOD_AVE_B}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.MFF_iOS_HER_TOD_AVE_W}
        />
      </group>
    </group>
  );
}

function CustomCamera() {
  const { camera } = useThree();
  camera.fov = 75;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 1;
  camera.far = 1000;

  useEffect(() => {
    camera.position.set(0, 0, 5);
  }, [camera]);

  return null;
}

const Thor3D = () => {
  return (
    <div className="App h-[100vh]">
      <Canvas shadows>
        <CustomCamera />
        <Suspense fallback={null}>
          <group position={[0, 0, -12]}>
            <Model position={[-0.8, 0.2, 0]} scale={1.5} />
            
            <ambientLight intensity={2} />
            <OrbitControls/>
            <StonePortal
              scale={0.12}
              position={[0, -7.1, 0]}
              rotation={[0, Math.PI / 2, 0]}
            />
          </group>
          <Environment
            files="/hdrs/cloudy.hdr"
            background
            backgroundBlurriness={0}
            backgroundRotation={[0, Math.PI / 2, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Thor3D