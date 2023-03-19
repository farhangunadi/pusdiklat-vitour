import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon";

export function Wisma(props) {
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
  const { nodes, materials } = useGLTF('./models/wisma1.glb')
  return (
    <group {...props} dispose={null} ref={ref} castShadow>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.003']} position={[-0.04, 0.03, 1.36]} scale={[5.35, 22.12, 11.12]} />
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.001']} position={[6.08, 1.58, -5.15]} rotation={[0, Math.PI / 2, 0]} scale={0.06} />
      <group position={[8.93, 0.08, -5.14]} scale={[2.99, 0.6, 4.48]}>
        <mesh geometry={nodes.Plane011.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Plane011_1.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Plane011_2.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Plane011_3.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane011_4.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-8.9, 0.08, -5.14]} rotation={[-Math.PI, 0, 0]} scale={[-2.99, -0.6, -4.48]}>
        <mesh geometry={nodes.Plane002.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Plane002_3.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane002_4.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/wisma1.glb')
