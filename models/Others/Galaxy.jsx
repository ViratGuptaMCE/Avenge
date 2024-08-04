import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Galaxy(props) {
  const { nodes, materials } = useGLTF("/assets/galaxy.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

