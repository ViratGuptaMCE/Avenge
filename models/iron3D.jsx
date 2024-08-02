'use client'
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/assets/IronMan85/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={4} position={[0,-4,-2] } />
    </>
  );
};

export default function Iron3D() {
  return (
    <div className="App h-[100vh]">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment
            files="/hdrs/cave.hdr"
            background
            backgroundRotation={[0, Math.PI / 2, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
