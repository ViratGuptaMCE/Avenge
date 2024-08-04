"use client";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, useHelper } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useEffect, useRef, useState } from "react";
import ModernModel from "../Portals/ModernPortal";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

// // import { SpotLightHelper } from "three";
// import { useHelper } from "@react-three/drei";

// function SpotLightWithHelper() {
//   const lightRef = React.useRef();
//   useHelper(lightRef, SpotLightHelper, "cyan");

//   return (
//     <spotLight
//       ref={lightRef}
//       position={[5, 5, 5]}
//       angle={0.3}
//       penumbra={1}
//       intensity={2}
//       castShadow
//     />
//   );
// }

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/assets/IronMan85/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={4} position={[0, -4.4, -2]} />
    </>
  );
};

const Lights = ({ Beamcolor }) => {
  const rectLightRef = useRef(null);

  useHelper(rectLightRef, RectAreaLightHelper, `hsl(${Beamcolor}, 100%, 50%)`);
  const lightRef = useRef();
  // useHelper(lightRef, SpotLightHelper, "cyan");

  return (
    <>
      <rectAreaLight
        ref={rectLightRef}
        width={2}
        height={2}
        color={`hsl(${Beamcolor}, 100%, 50%)`}
        intensity={20}
        position={[-0.1, 0, -10]}
        rotation={[0, Math.PI, 0]}
      />
      <directionalLight
        castShadow
        position={[0, 1, -1]}
        intensity={20}
        color={`hsl(${Beamcolor}, 100%, 50%)`}
      />
      <spotLight
        ref={lightRef}
        position={[0, -0.1, -20]}
        angle={0.1} // Narrow angle for a circular effect
        penumbra={2}
        intensity={2000}
        castShadow
      />
      <directionalLight castShadow={true} position={[0, 1, 2]} intensity={5} />
    </>
  );
};

export default function Iron3D() {
  const [colour, setColour] = useState(1);

  useEffect(() => {
    setColour(colour + 1);
  });

  return (
    <div className="App h-[100vh]">
      <Canvas shadows>
        <Suspense fallback={null}>
          {/* <SpotLightWithHelper /> */}
          <Model />
          {/* <mesh position={[0, 0, -9]}>
            <sphereGeometry args={[1, 12, 12]} />
            <meshStandardMaterial color="cyan" />
          </mesh> */}

          {/* <hemisphereLight
            skyColor="#b1e1ff"
            groundColor={"#000000"}
            intensity={2}
          /> */}

          <Lights Beamcolor={colour} />
          {/* <ambientLight intensity={10} /> */}
          <ModernModel
            rotation={[0, -Math.PI / 2, 0]}
            position={[-18, 0, -8]}
          />
          {/* <SpotLightBeam /> */}
          <OrbitControls />
          <Environment
            files="/hdrs/night.hdr"
            background
            backgroundBlurriness={0.5}
            backgroundRotation={[0, Math.PI / 2, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// function SpotLightBeam() {
//   RectAreaLightUniformsLib.init();
//   const rectLight = new THREE.RectAreaLight(0xffffff, 2, 1, 1);
//   rectLight.position.set(0, 0, 0);
//   const scene = new THREE.Scene();
//   scene.add(rectLight);
//   const rectLightHelper = new RectAreaLightHelper(rectLight);
//   scene.add(rectLightHelper);
//   // scene.add(spotLightHelper);

//   return <primitive object={rectLight} />;
// }
