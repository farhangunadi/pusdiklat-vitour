/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/pohon.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon";

export function TreeLP1(props) {
  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 1,
    args: props.args,
    position: props.position,
    scale: props.scale,
    rotation: props.rotation,
    onCollide: (e) => {
      console.log(e);
    },
    ...props,
  }));
  const { nodes, materials } = useGLTF('./models/treeLP1.glb')
  return (
    <group {...props} dispose={null} ref={ref} castShadow>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} position={[0, 0.69, 0]} scale={0.62} />
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.002']} position={[0, 7.07, 0]} scale={[3.28, 4.01, 3.28]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} position={[0, 0.51, -5.38]} scale={0.48} />
      <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.003']} position={[0, 5.17, -5.38]} scale={[2.51, 2.4, 2.51]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.001']} position={[-4.48, 0.44, -1.28]} scale={0.41} />
      <mesh geometry={nodes.Sphere002.geometry} material={materials['Material.004']} position={[-4.48, 4.2, -1.28]} scale={[2.13, 2.16, 2.13]} />
    </group>
  )
}

useGLTF.preload('./models/treeLP1.glb')
