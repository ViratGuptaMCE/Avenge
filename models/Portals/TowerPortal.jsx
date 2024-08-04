import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function TowerPortal(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/portals/Tower.glb')
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.play();
      });
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="E6_0">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.MAT_Metal}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.MAT_LIGHT_1}
                />
              </group>
              <group name="E2_1" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.MAT_Metal}
                />
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.MAT_LIGHT_1}
                />
              </group>
              <group name="E3_2" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.MAT_Metal}
                />
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials.MAT_LIGHT_1}
                />
              </group>
              <group name="E4_3" rotation={[1.571, 0, 0]}>
                <mesh
                  name="Object_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.MAT_Metal}
                />
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.MAT_LIGHT_1}
                />
              </group>
              <group name="E5_4" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.MAT_Metal}
                />
                <mesh
                  name="Object_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials.MAT_LIGHT_1}
                />
              </group>
              <group name="E1_5" position={[0.022, -0.205, 0.033]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.MAT_Metal}
                />
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.MAT_LIGHT_1}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/portals/Tower.glb')
