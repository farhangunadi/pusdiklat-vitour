import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon";
import { Info } from '../basic_compt/Info';

export function JogloLowPoly(props) {
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
  const { nodes, materials } = useGLTF('./models/jogloLowPolyNew.glb')
  return (
    <group {...props} dispose={null} ref={ref} castShadow>
      <group position={[-8.5, 2.71, 0.26]} scale={[18.38, 13.29, 16.63]}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane_4.geometry} material={materials['Material.005']} />
      </group>
      <group position={[-8.5, 3.07, 0.26]} scale={[15.15, 10.95, 13.72]}>
        <mesh geometry={nodes.Plane001_1.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Plane001_3.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Plane001_4.geometry} material={materials['Material.010']} />
      </group>
      <group position={[-8.42, 19.06, 0.24]} scale={[22.36, 22.36, 19.97]}>
        <mesh geometry={nodes.Plane002.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials['Material.008']} />
      </group>
      <mesh geometry={nodes.lantai.geometry} material={materials['Material.005']} position={[-8.5, 2.74, 0.26]} scale={[18.38, 13.29, 16.63]} />
      <mesh geometry={nodes.rooftile.geometry} material={materials['Material.008']} position={[-32, 20.11, -21.32]} rotation={[1.22, 0, 0]} scale={[0.54, 0.55, 0.55]} />
      <mesh geometry={nodes.diagonal_rooftile.geometry} material={materials['Material.008']} position={[-7.03, 15.32, -31.35]} rotation={[1.3, 0.16, -0.81]} scale={3.49} />
      <mesh geometry={nodes.Cone.geometry} material={materials['Material.008']} position={[-8.22, 32.77, 0.27]} scale={[0.35, 0.59, 0.2]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.009']} position={[-11.05, 8.5, -0.14]} scale={[11.32, 0.59, 2.71]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.009']} position={[-0.5, 8.43, 1.8]} scale={[0.59, 0.36, 0.57]} />
    </group>
  )
}

useGLTF.preload('./models/jogloLowPolyNew.glb')
