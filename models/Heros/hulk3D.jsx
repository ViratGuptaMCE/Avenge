"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { useGLTF, useAnimations, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GreenPortal from "../Portals/GreenPortal";
import PlatformGrass from "../Others/PlatformGrass";

const Model = (props) => {
  const groupRef = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/heros/hulk.glb");
  const { actions } = useAnimations(animations, groupRef);
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => action.play());
    }
  }, [actions]);
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={490.71}
        >
          <group
            name="89a0edea80c643ed8969a44ecbfabaf6fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="ST_Ent_Hulk">
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={
                        materials["3DFEE2D464B36A2CF6339AE6DEABE501946879A5"]
                      }
                      skeleton={nodes.Object_7.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default function Hulk3D(props) {
  // const groupRef = useRef();
  // const { nodes, materials, animations } = useGLTF("/assets/hulk/hulk.glb");
  // const { actions } = useAnimations(animations, groupRef)
  return (
    <div className="App h-[100vh]">
      <Canvas shadows>
        <Suspense fallback={null}>
          <ambientLight intensity={7}/>
          <OrbitControls />
          <GreenPortal rotation={[0, Math.PI, 0]} />
          <PlatformGrass scale={0.018} position={[70, -92.6, 120]} rotation={[0,Math.PI/2,0] } />
          <Model position={[0, -3.7, -2]} />
          <directionalLight position={[0,1,1]} color={"black"} intensity={20}/>
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
