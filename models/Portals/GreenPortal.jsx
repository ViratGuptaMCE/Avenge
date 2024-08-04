import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const GreenPortal = (props) => {
  const gltf = useLoader(GLTFLoader, '/assets/portals/GreenPortal.glb');

  return (
    <>
      <primitive object={gltf.scene} scale={1} position={[0, -2.4, -5]} {...props} />
    </>
  );
}

export default GreenPortal