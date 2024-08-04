/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: chengzijieczj (https://sketchfab.com/chengzijieczj)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/european-and-american-game-scencemagic-portal-31182bdc05dd40ddbc7f284297e8f225
Title: European and American game scence~Magic portal
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function StonePortal(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/assets/portals/stone-portal.glb'
  )
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.timeScale = 0.5;
        action.play();
      });
    }
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="lowfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane001"
                  position={[13.833, 81.136, -7.069]}
                  rotation={[0, -1.571, 0]}>
                  <mesh
                    name="Plane001_shi_aiStandardSurface1SG_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001_shi_aiStandardSurface1SG_0.geometry}
                    material={materials.shi_aiStandardSurface1SG}
                  />
                </group>
                <group
                  name="Sphere001"
                  position={[12.262, 25.99, -5.056]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Sphere001__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere001__0.geometry}
                    material={materials.Sphere001__0}
                  />
                  <group name="polySurface1" position={[-12.262, -5.056, -25.99]}>
                    <mesh
                      name="polySurface1_shi_aiStandardSurface4SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface1_shi_aiStandardSurface4SG_0.geometry}
                      material={materials.shi_aiStandardSurface4SG}
                    />
                  </group>
                  <group name="polySurface2" position={[-12.262, -5.056, -25.99]}>
                    <mesh
                      name="polySurface2_shi_aiStandardSurface4SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface2_shi_aiStandardSurface4SG_0.geometry}
                      material={materials.shi_aiStandardSurface4SG}
                    />
                  </group>
                  <group name="shi_Group31753" position={[-12.262, -5.056, -25.99]}>
                    <mesh
                      name="shi_Group31753_shi_aiStandardSurface4SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shi_Group31753_shi_aiStandardSurface4SG_0.geometry}
                      material={materials.shi_aiStandardSurface4SG}
                    />
                  </group>
                  <group name="shi_Group31754" position={[-12.262, -5.056, -25.99]}>
                    <mesh
                      name="shi_Group31754_shi_aiStandardSurface4SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shi_Group31754_shi_aiStandardSurface4SG_0.geometry}
                      material={materials.shi_aiStandardSurface4SG}
                    />
                  </group>
                  <group name="shi_Group31756" position={[-12.262, -5.056, -25.99]}>
                    <mesh
                      name="shi_Group31756_shi_aiStandardSurface4SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shi_Group31756_shi_aiStandardSurface4SG_0.geometry}
                      material={materials.shi_aiStandardSurface4SG}
                    />
                  </group>
                  <group name="shi_Group31757" position={[-12.262, -5.056, -25.99]}>
                    <mesh
                      name="shi_Group31757_shi_aiStandardSurface4SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shi_Group31757_shi_aiStandardSurface4SG_0.geometry}
                      material={materials.shi_aiStandardSurface4SG}
                    />
                  </group>
                  <group name="shi_Group21994" position={[-12.262, -5.056, -25.99]}>
                    <mesh
                      name="shi_Group21994_shi_aiStandardSurface2SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shi_Group21994_shi_aiStandardSurface2SG_0.geometry}
                      material={materials.shi_aiStandardSurface2SG}
                    />
                  </group>
                  <group name="shi_Group31758" position={[-12.262, -5.056, -25.99]}>
                    <mesh
                      name="shi_Group31758_shi_aiStandardSurface2SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shi_Group31758_shi_aiStandardSurface2SG_0.geometry}
                      material={materials.shi_aiStandardSurface2SG}
                    />
                  </group>
                  <group name="shi_Group31759" position={[-12.262, -5.056, -25.99]}>
                    <mesh
                      name="shi_Group31759_shi_aiStandardSurface2SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shi_Group31759_shi_aiStandardSurface2SG_0.geometry}
                      material={materials.shi_aiStandardSurface2SG}
                    />
                  </group>
                  <group name="shi_Group31755" position={[-12.262, -5.056, 34.875]}>
                    <mesh
                      name="shi_Group31755_shi_aiStandardSurface2SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shi_Group31755_shi_aiStandardSurface2SG_0.geometry}
                      material={materials.shi_aiStandardSurface2SG}
                    />
                  </group>
                  <group name="shi_Group31760" position={[-12.262, -5.056, -39.749]}>
                    <mesh
                      name="shi_Group31760_shi_aiStandardSurface2SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shi_Group31760_shi_aiStandardSurface2SG_0.geometry}
                      material={materials.shi_aiStandardSurface2SG}
                    />
                  </group>
                  <group name="shi_Group31761" position={[-12.262, -5.056, -25.99]}>
                    <mesh
                      name="shi_Group31761_shi_aiStandardSurface2SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shi_Group31761_shi_aiStandardSurface2SG_0.geometry}
                      material={materials.shi_aiStandardSurface2SG}
                    />
                  </group>
                  <group name="shi_Group31762" position={[-12.262, -5.056, -25.99]}>
                    <mesh
                      name="shi_Group31762_shi_aiStandardSurface2SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shi_Group31762_shi_aiStandardSurface2SG_0.geometry}
                      material={materials.shi_aiStandardSurface2SG}
                    />
                  </group>
                  <group name="shi_Group31763" position={[-12.262, -5.056, -25.99]}>
                    <mesh
                      name="shi_Group31763_shi_aiStandardSurface2SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shi_Group31763_shi_aiStandardSurface2SG_0.geometry}
                      material={materials.shi_aiStandardSurface2SG}
                    />
                  </group>
                  <group name="shi_Group31764" position={[-12.262, -5.056, -25.99]}>
                    <mesh
                      name="shi_Group31764_shi_aiStandardSurface2SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shi_Group31764_shi_aiStandardSurface2SG_0.geometry}
                      material={materials.shi_aiStandardSurface2SG}
                    />
                  </group>
                  <group name="shi_Group31765" position={[-12.262, -5.056, -25.99]}>
                    <mesh
                      name="shi_Group31765_shi_aiStandardSurface2SG_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shi_Group31765_shi_aiStandardSurface2SG_0.geometry}
                      material={materials.shi_aiStandardSurface2SG}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

