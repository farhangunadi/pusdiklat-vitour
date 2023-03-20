import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon";
import { Info } from '../basic_compt/Info';

export function GdKenyamanan(props) {
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
  const { nodes, materials } = useGLTF('./models/gedungkenyamanan.glb')
  return (
    <group {...props} dispose={null} ref={ref} castShadow>
      <group position={[0, 1.26, 0]} scale={[3.62, 1, 3.62]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials['Material.001']} />
      </group>
      <mesh geometry={nodes.Cube001.geometry} material={materials.Material} position={[0, 1.26, 0]} scale={[3.62, 1, 3.62]} />
    </group>
  )
}

useGLTF.preload('./models/gedungkenyamanan.glb')
