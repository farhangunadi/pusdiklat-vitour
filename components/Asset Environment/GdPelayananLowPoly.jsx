import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon";

export function GdPelayanan(props) {
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
  const { nodes, materials } = useGLTF('./models/GdPelayananLowPoly.glb')
  return (
    <group {...props} dispose={null} ref={ref} castShadow>
      <group position={[3.18, 0, 1.48]} rotation={[Math.PI, 0, Math.PI]} scale={[5.96, 1.14, 4.77]}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Plane_4.geometry} material={materials['Material.024']} />
      </group>
      <mesh geometry={nodes.atap.geometry} material={nodes.atap.material} position={[3.18, 0, 1.48]} rotation={[Math.PI, 0, Math.PI]} scale={[5.96, 1.14, 5.1]} />
      <group position={[8.55, 0.54, 1.48]} rotation={[0, -Math.PI / 2, 0]} scale={[5.96, 0.91, 4.77]}>
        <mesh geometry={nodes.Plane004_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Plane004_2.geometry} material={materials.genteng} />
        <mesh geometry={nodes.Plane004_3.geometry} material={materials.Material} />
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.002']} position={[2.82, 1.28, 5.18]} rotation={[Math.PI, 0, Math.PI]} scale={[0.08, 1.26, 0.28]} />
      <mesh geometry={nodes.pilar_lobby.geometry} material={materials['Material.009']} position={[3.18, 0, -0.58]} rotation={[Math.PI, 0, Math.PI]} scale={[5.96, 1.14, 4.77]} />
      <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[0.78, 0.08, 5.39]} rotation={[Math.PI, 0, Math.PI]} scale={0.25} />
      <group position={[3.18, 0, 1.48]} rotation={[Math.PI, 0, Math.PI]} scale={[5.96, 1.14, 4.77]}>
        <mesh geometry={nodes.Plane001_1.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.010']} />
      </group>
      <mesh geometry={nodes.pilar_lobby001.geometry} material={materials['Material.009']} position={[-5.81, 0, -5.53]} rotation={[Math.PI, 0, Math.PI]} scale={[5.96, 1.14, 4.77]} />
      <group position={[-5.81, 0, 0.01]} rotation={[Math.PI, 0, Math.PI]} scale={[5.96, 1.14, 4.77]}>
        <mesh geometry={nodes.Plane006_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Plane006_2.geometry} material={materials['Material.010']} />
      </group>
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.013']} position={[3.18, 0, 1.58]} rotation={[Math.PI, 0, Math.PI]} scale={[5.89, 1.12, 4.71]} />
      <group position={[11.01, 1.31, -8.24]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.97, 0.61, 0.73]}>
        <mesh geometry={nodes.Plane008.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Plane008_1.geometry} material={materials['Material.007']} />
      </group>
      <group position={[10.52, 1.31, 10.19]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.97, -0.61, -0.73]}>
        <mesh geometry={nodes.Plane010.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Plane010_1.geometry} material={materials['Material.007']} />
      </group>
      <mesh geometry={nodes.Plane005.geometry} material={nodes.Plane005.material} position={[3.18, 0, 1.48]} rotation={[Math.PI, 0, Math.PI]} scale={[5.96, 1.14, 4.77]} />
      <mesh geometry={nodes.Plane006.geometry} material={nodes.Plane006.material} position={[3.18, 0, 1.8]} rotation={[-Math.PI, 0, 0]} scale={[-5.96, -1.14, -4.77]} />
      <mesh geometry={nodes.Circle001.geometry} material={materials.genteng} position={[16.3, 4.73, 6.35]} rotation={[1.93, 0, 3.14]} scale={0.08} />
      <mesh geometry={nodes.Circle002.geometry} material={materials.genteng} position={[14.82, 4.69, -3.06]} rotation={[-1.72, 0, 0]} scale={-0.08} />
      <mesh geometry={nodes.Circle003.geometry} material={materials.genteng} position={[-0.95, 4.99, 9.8]} rotation={[Math.PI / 2, 0.28, -Math.PI / 2]} scale={0.08} />
      <mesh geometry={nodes.Circle004.geometry} material={materials['Material.005']} position={[-0.92, 3.21, 10.5]} rotation={[-Math.PI / 2, 0.16, -Math.PI / 2]} scale={[-0.08, -0.04, -0.04]} />
      <mesh geometry={nodes.Circle005.geometry} material={materials['Material.005']} position={[16.24, 3.2, 6.28]} rotation={[-1.67, 0, 0]} scale={[-0.07, -0.04, -0.04]} />
      <mesh geometry={nodes.Circle006.geometry} material={materials['Material.005']} position={[16.24, 3.2, -3.03]} rotation={[1.67, 0, -3.14]} scale={[0.07, 0.04, 0.04]} />
      <mesh geometry={nodes.Plane007.geometry} material={nodes.Plane007.material} position={[9.45, 0.1, 1.6]} rotation={[Math.PI, 0, Math.PI]} scale={[1.64, 0.17, 3.39]} />
      <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} position={[10.79, 3.33, 1.76]} rotation={[Math.PI, 0, Math.PI]} scale={0.05} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.006']} position={[17.45, 6.34, 21.9]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.17, 0.04, 0.26]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.006']} position={[16.27, 4.48, 6.28]} rotation={[Math.PI, 0, Math.PI]} scale={[0.17, 0.17, 0.01]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.006']} position={[16.21, 3.49, -3]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.17, -0.04, -0.26]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.006']} position={[16.13, 4.54, -3]} rotation={[-Math.PI, 0, 0]} scale={[-0.17, -0.17, -0.01]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.006']} position={[-0.9, 3.64, -6.64]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[-0.17, -0.04, -0.31]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.006']} position={[-0.9, 4.86, -6.56]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.17, -0.19, -0.01]} />
      <group position={[-8.74, 3.15, 8.59]} rotation={[Math.PI, 0, Math.PI]} scale={[0.19, 0.19, 0.09]}>
        <mesh geometry={nodes.Cube009_1.geometry} material={materials['Material.016']} />
        <mesh geometry={nodes.Cube009_2.geometry} material={materials['Material.015']} />
      </group>
      <mesh geometry={nodes.Text.geometry} material={materials.Material} position={[-8.65, 2.97, 4.24]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.45} />
      <mesh geometry={nodes.Plane009.geometry} material={materials['Material.026']} position={[4.21, 0.13, 1.68]} rotation={[Math.PI, 0, Math.PI]} scale={[3.6, 2.96, 3.78]} />
    </group>
  )
}

useGLTF.preload('./models/GdPelayananLowPoly.glb')
