import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ButtonPortal = (props) => {
  const gltf = useLoader(GLTFLoader,'/assets/portals/button_portal.glb')
  return (
    <>
      <primitive object={gltf.scene} {...props} />
    </>
  )
}

export default ButtonPortal