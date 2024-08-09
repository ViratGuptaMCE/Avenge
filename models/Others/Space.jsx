import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Space(props) {
  const { nodes, materials } = useGLTF("/assets/items/space.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials[".003"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}
