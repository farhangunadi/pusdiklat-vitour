import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon";

export function Wisma2(props) {
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
  const { nodes, materials } = useGLTF('./models/wisma2.glb')
  return (
    <group {...props} dispose={null} ref={ref} castShadow >
      <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} scale={[9.25, 1, 1]} />
      <mesh geometry={nodes.Plane001.geometry} material={nodes.Plane001.material} scale={[9.25, 1, 1]} />
      <group scale={[9.25, 1, 1]}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane002_3.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane002_4.geometry} material={materials['Material.006']} />
      </group>
      <group scale={[9.25, 1, 1]}>
        <mesh geometry={nodes.Plane003_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane003_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane003_3.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane003_4.geometry} material={materials['Material.006']} />
      </group>
      <mesh geometry={nodes.Plane004.geometry} material={nodes.Plane004.material} position={[0, 0.22, -7.33]} rotation={[-Math.PI, 0, -Math.PI]} scale={[9.25, 1, 1]} />
      <group scale={[9.25, 1, 1]}>
        <mesh geometry={nodes.Plane005_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane005_2.geometry} material={materials['Material.005']} />
      </group>
      <group position={[0, 0, 0.52]} scale={[9.25, 1, 1.19]}>
        <mesh geometry={nodes.Plane006_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane006_2.geometry} material={materials['Material.005']} />
      </group>
      <group position={[0, -0.03, 0]} scale={[9.25, 1, 1]}>
        <mesh geometry={nodes.Plane007_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane007_2.geometry} material={materials['Material.005']} />
      </group>
      <mesh geometry={nodes.Plane008.geometry} material={nodes.Plane008.material} scale={[9.25, 1, 1]} />
      <mesh geometry={nodes.Plane009.geometry} material={materials['Material.003']} scale={[9.25, 1, 1]} />
      <group position={[0, 0, -11.26]} rotation={[0, 0, -Math.PI]} scale={[-9.25, -1, -1]}>
        <mesh geometry={nodes.Plane010_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane010_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane010_3.geometry} material={materials['Material.004']} />
      </group>
      <mesh geometry={nodes.Text.geometry} material={materials['Material.007']} position={[5.55, 1.96, 1.29]} rotation={[Math.PI / 2, 0, 0]} scale={0.17} />
      <mesh geometry={nodes.Text001.geometry} material={materials['Material.007']} position={[-5.57, 1.96, -6.95]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.17} />
      <mesh geometry={nodes.Plane011.geometry} material={materials['Material.008']} position={[0, 0, -4.87]} scale={[3.55, 1, 8.08]} />
    </group>
  )
}

useGLTF.preload('./models/wisma2.glb')
