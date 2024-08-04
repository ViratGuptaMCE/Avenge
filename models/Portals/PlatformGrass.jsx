import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const PlatformGrass = (props) => {
  const { nodes, materials } = useGLTF("/assets/portals/rock_platform.glb");
  // const gltf = useLoader(GLTFLoader, '/assets/portals/rock_platform.glb');

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Tex_0040_0_dds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Tex_0043_0_dds}
        />
      </group>
    </group>
  );
}

export default PlatformGrass