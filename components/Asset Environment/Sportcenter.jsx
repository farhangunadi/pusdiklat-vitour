import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon";


export function SportCenter(props) {
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
  const { nodes, materials } = useGLTF('./models/sportcenter.glb')
  return (
    <group {...props} dispose={null} ref={ref} castShadow>
      <group position={[7.79, -0.02, 8.32]} rotation={[0, 0, -Math.PI]} scale={[-9.66, -0.58, -14.64]}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.Circle.geometry} material={materials['Material.004']} position={[7.79, 5.91, 6.07]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[9.38, 0.49, 6.34]} />
      <mesh geometry={nodes.Plane002.geometry} material={nodes.Plane002.material} position={[8.86, 0.59, -6.13]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.06, 0.39, 0.39]} />
      <mesh geometry={nodes.Plane003.geometry} material={nodes.Plane003.material} position={[-1.81, 0.59, -4.75]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.05, 0.39, 0.39]} />
      <mesh geometry={nodes.Plane004.geometry} material={nodes.Plane004.material} position={[-1.25, 0.59, 18.17]} rotation={[Math.PI / 2, 0, 0]} scale={[0.05, 0.39, 0.39]} />
      <mesh geometry={nodes.Circle001.geometry} material={materials['Material.004']} position={[7.79, 5.91, 6.39]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[9.38, 0.49, 6.34]} />
    </group>
  )
}

useGLTF.preload('./models/sportcenter.glb')
