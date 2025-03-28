/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Janis Zeps (https://sketchfab.com/zeps9001)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/autonomous-robot-sweeper-0d285c3d015a4573ae1100d298935cb9
Title: Autonomous Robot Sweeper
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
import { Object3D } from 'three'

interface ModelProps {
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number | [number, number, number]
  animation?: string
  [key: string]: unknown
}

// GLTF nodes with geometry and skeleton properties
interface GLTFNode extends Object3D {
  geometry?: THREE.BufferGeometry
  skeleton?: THREE.Skeleton
}

// GLTF nodes collection
interface GLTFNodes {
  [key: string]: GLTFNode
}

export function Model(props: ModelProps) {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials, animations } = useGLTF('/models/autonomous_robot_sweeper.glb')
  const { actions } = useAnimations(animations, group)
  
  // Cast nodes to the correct type for TypeScript
  const typedNodes = nodes as unknown as GLTFNodes

  // Play animation when component mounts
  useEffect(() => {
    // Get all animation names
    if (actions && Object.keys(actions).length > 0) {
      const animationNames = Object.keys(actions)
      console.log('Available animations:', animationNames)
      
      // Use the animation specified in props, or the first available animation
      const animationToPlay = props.animation && actions[props.animation] 
        ? props.animation 
        : animationNames[0]
      
      if (actions[animationToPlay]) {
        actions[animationToPlay].reset().fadeIn(0.5).play()
      }
      
      return () => {
        // Cleanup animation on unmount
        if (actions[animationToPlay]) {
          actions[animationToPlay].fadeOut(0.5)
        }
      }
    }
  }, [actions, props.animation])
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="64d1ef9beccb46059d069faacb3fa6fafbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="body_low"
                  position={[0, -8.918, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="body_low_sweeper_0"
                    castShadow
                    receiveShadow
                    geometry={typedNodes.body_low_sweeper_0.geometry}
                    material={materials.sweeper}
                  />
                  <mesh
                    name="body_low_glass_0"
                    castShadow
                    receiveShadow
                    geometry={typedNodes.body_low_glass_0.geometry}
                    material={materials.glass}
                  />
                </group>
                <group
                  name="sweepers_low"
                  position={[0, -8.918, 113.565]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="sweepers_low_sweeper_0"
                    castShadow
                    receiveShadow
                    geometry={typedNodes.sweepers_low_sweeper_0.geometry}
                    material={materials.sweeper}
                  />
                </group>
                <group
                  name="backWheel_low"
                  position={[0, 15.895, -216.952]}
                  rotation={[1.125, 0, 0]}
                  scale={100}>
                  <mesh
                    name="backWheel_low_sweeper_0"
                    castShadow
                    receiveShadow
                    geometry={typedNodes.backWheel_low_sweeper_0.geometry}
                    material={materials.sweeper}
                  />
                </group>
                <group
                  name="frontAxel_low"
                  position={[0, 25.478, 12.612]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="frontAxel_low_sweeper_0"
                    castShadow
                    receiveShadow
                    geometry={typedNodes.frontAxel_low_sweeper_0.geometry}
                    material={materials.sweeper}
                  />
                </group>
                <group
                  name="frontWheel_low"
                  position={[0, -8.918, 105.334]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="frontWheel_low_sweeper_0"
                    castShadow
                    receiveShadow
                    geometry={typedNodes.frontWheel_low_sweeper_0.geometry}
                    material={materials.sweeper}
                  />
                </group>
                <group
                  name="bar_low"
                  position={[0, 0, -165.953]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="bar_low_sweeper_0"
                    castShadow
                    receiveShadow
                    geometry={typedNodes.bar_low_sweeper_0.geometry}
                    material={materials.sweeper}
                  />
                </group>
                <group
                  name="topCamera_low"
                  position={[0, 173.53, -86.903]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="topCamera_low_sweeper_0"
                    castShadow
                    receiveShadow
                    geometry={typedNodes.topCamera_low_sweeper_0.geometry}
                    material={materials.sweeper}
                  />
                </group>
                <group
                  name="brushRight"
                  position={[-50.484, 21.958, 21.239]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="brushLeft"
                  position={[80.677, -8.918, 122.037]}
                  rotation={[-Math.PI / 2, 0, -0.209]}
                  scale={100}
                />
                <group
                  name="light"
                  position={[37.354, 155.637, -132.402]}
                  rotation={[-1.826, 0.135, 0.307]}
                  scale={100}
                />
                <group
                  name="Armature"
                  position={[-50.168, 34.883, 21.396]}
                  rotation={[Math.PI / 2, 0, -Math.PI]}
                  scale={28.405}>
                  <group name="Object_23">
                    <primitive object={typedNodes._rootJoint} />
                    <skinnedMesh
                      name="Object_26"
                      geometry={typedNodes.Object_26.geometry}
                      material={materials.sweeper}
                      skeleton={typedNodes.Object_26.skeleton}
                    />
                    <group
                      name="Object_25"
                      position={[-50.484, 21.958, 21.239]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="eyes"
                  position={[-0.004, 134.144, 6.321]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={2.033}>
                  <mesh
                    name="eyes_blueLight_0"
                    castShadow
                    receiveShadow
                    geometry={typedNodes.eyes_blueLight_0.geometry}
                    material={materials.blueLight}
                  />
                </group>
                <group
                  name="Armature001"
                  position={[50.506, 34.883, 21.396]}
                  rotation={[Math.PI / 2, 0, -Math.PI]}
                  scale={28.405}>
                  <group name="Object_32">
                    <primitive object={typedNodes._rootJoint_1} />
                    <skinnedMesh
                      name="Object_35"
                      geometry={typedNodes.Object_35.geometry}
                      material={materials.sweeper}
                      skeleton={typedNodes.Object_35.skeleton}
                    />
                    <group
                      name="Object_34"
                      position={[80.677, -8.918, 122.037]}
                      rotation={[-Math.PI / 2, 0, -0.209]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="spinningLight"
                  position={[36.816, 151.755, -131.427]}
                  rotation={[-1.838, 0.138, 0.038]}
                  scale={8.473}>
                  <group name="Armature003" position={[0, -0.028, 0]} rotation={[0, 0, -2.762]}>
                    <group name="Object_40">
                      <primitive object={typedNodes._rootJoint_2} />
                      <skinnedMesh
                        name="Object_43"
                        geometry={typedNodes.Object_43.geometry}
                        material={materials.safety_light}
                        skeleton={typedNodes.Object_43.skeleton}
                      />
                      <skinnedMesh
                        name="Object_44"
                        geometry={typedNodes.Object_44.geometry}
                        material={materials.sweeper}
                        skeleton={typedNodes.Object_44.skeleton}
                      />
                      <group
                        name="Object_42"
                        position={[37.354, 155.637, -132.402]}
                        rotation={[-1.826, 0.135, 0.307]}
                        scale={100}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="light001"
                  position={[-36.948, 155.644, -132.376]}
                  rotation={[-1.819, -0.129, 0.239]}
                  scale={100}
                />
                <group
                  name="spinnigLight2"
                  position={[-36.419, 151.755, -131.427]}
                  rotation={[-1.831, -0.126, -0.034]}
                  scale={8.473}>
                  <group name="Armature002" position={[0, -0.028, 0]} rotation={[0, 0, -2.762]}>
                    <group name="Object_50">
                      <primitive object={typedNodes._rootJoint_3} />
                      <skinnedMesh
                        name="Object_53"
                        geometry={typedNodes.Object_53.geometry}
                        material={materials.safety_light}
                        skeleton={typedNodes.Object_53.skeleton}
                      />
                      <skinnedMesh
                        name="Object_54"
                        geometry={typedNodes.Object_54.geometry}
                        material={materials.sweeper}
                        skeleton={typedNodes.Object_54.skeleton}
                      />
                      <group
                        name="Object_52"
                        position={[-36.948, 155.644, -132.376]}
                        rotation={[-1.819, -0.129, 0.239]}
                        scale={100}
                      />
                    </group>
                  </group>
                </group>
                <group name="Torus" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    name="Torus_blueLight_0"
                    castShadow
                    receiveShadow
                    geometry={typedNodes.Torus_blueLight_0.geometry}
                    material={materials.blueLight}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/autonomous_robot_sweeper.glb')
