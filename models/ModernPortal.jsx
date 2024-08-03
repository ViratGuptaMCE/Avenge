import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ModernModel(props) {
  const { nodes, materials } = useGLTF('/assets/portals/sci-fi_portal.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.outside_ring002_rings_0.geometry}
          material={materials.rings}
          position={[-56.678, 4.435, -1786.221]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fuse_box004_platform_0.geometry}
          material={materials.platform}
          position={[-1196.907, -418.782, -2399.392]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

