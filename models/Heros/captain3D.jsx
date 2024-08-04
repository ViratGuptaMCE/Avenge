'use client'
import React, { Suspense } from 'react'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function Model(props) {
  const { nodes, materials } = useGLTF('/assets/Captain.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -5.03, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['platform_Material_#143_0'].geometry}
          material={materials.Material_143}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['platform_Material_#118_0'].geometry}
          material={materials.Material_118}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['platform_Material_#117_0'].geometry}
          material={materials.Material_117}
        />
      </group>
      <group position={[-14.184, 85.704, 7.186]} rotation={[Math.PI, -0.105, 0]} scale={21.762}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Object002_Material_#110_0'].geometry}
          material={materials.Material_110}
          position={[0, 3.907, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Object005_Material_#109_0'].geometry}
          material={materials.Material_109}
          position={[0, 3.907, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rdmobj001_wire_204204204_0.geometry}
          material={materials.wire_204204204}
          position={[0, 3.907, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['rdmobj002_Material_#106_0'].geometry}
          material={materials.Material_106}
          position={[0, 3.907, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['rdmobj004_Material_#113_0'].geometry}
          material={materials.Material_113}
          position={[0, 3.907, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['rdmobj005_Material_#105_0'].geometry}
          material={materials.Material_105}
          position={[0, 3.907, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['rdmobj006_Material_#112_0'].geometry}
          material={materials.Material_112}
          position={[0, 3.907, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['rdmobj008_Material_#108_0'].geometry}
          material={materials.Material_108}
          position={[0, 3.907, 0]}
        />
      </group>
      <group position={[-15.402, 125.186, 71.464]} rotation={[0.922, 0.596, -3.049]} scale={0.789}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['rdmobj003_Material_#101_0'].geometry}
          material={materials.Material_101}
          position={[1.603, -0.179, -1.489]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['rdmobj00_Material_#102_0'].geometry}
          material={materials.Material_102}
          position={[1.603, -0.179, -1.489]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['mjolnir_Material_#99_0'].geometry}
        material={materials.Material_99}
        position={[-24.863, 154.127, -27.383]}
        rotation={[-0.598, 0.143, 0.797]}
        scale={63.143}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['text_Material_#156_0'].geometry}
        material={materials.Material_156}
        position={[0, 0.027, 112.416]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['light1_Material_#157_0'].geometry}
        material={materials.Material_157}
        position={[-4.508, 94.102, -129.746]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['light2_Material_#158_0'].geometry}
        material={materials.Material_158}
        position={[-81.353, 112.441, 0]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={0.956}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['light3_Material_#158_0'].geometry}
        material={materials.Material_158}
        position={[72.391, 121.984, 0]}
        rotation={[0, Math.PI / 4, 0]}
        scale={0.884}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['light4_Material_#159_0'].geometry}
        material={materials.Material_159}
        position={[-17.997, 177.921, 8.938]}
        rotation={[-0.484, 0, 0]}
        scale={[0.369, 0.072, 0.277]}
      />
    </group>
  )
}

const Captain3D = () => {
  return (
    <div className="App h-[100vh]">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Model scale={0.02} position={[0, -2, 0]} />
          <directionalLight intensity={20} position={[0, 2, 3]} />
          <ambientLight intensity={2} />
          <OrbitControls />
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

export default Captain3D