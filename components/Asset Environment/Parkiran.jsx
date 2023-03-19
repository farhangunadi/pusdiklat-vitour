import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon";

export function Parkiran(props) {
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
  const { nodes, materials } = useGLTF('./models/parkiran.glb')
  return (
    <group {...props} dispose={null} ref={ref} castShadow>
      <mesh geometry={nodes.Plane001.geometry} material={materials.besi} position={[10.44, 0.4, 0.31]} scale={0.53} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.002']} position={[0.54, 0.02, 0.38]} scale={[10.29, 5.95, 4.58]} />
      <group position={[0.54, 0.02, 0.38]} scale={[10.29, 5.95, 0.65]}>
        <mesh geometry={nodes.Plane003_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane003_2.geometry} material={materials['Material.008']} />
      </group>
      <mesh geometry={nodes.Plane004.geometry} material={materials.besi} position={[0.62, 0.4, 0.31]} scale={0.53} />
      <mesh geometry={nodes.Plane005.geometry} material={materials.besi} position={[-9.31, 0.4, 0.31]} scale={0.53} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials.besi} position={[10.44, 2.53, 0.3]} rotation={[Math.PI / 2, 0, 0]} scale={[0.06, 3.6, 0.06]} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials.besi} position={[3.1, 2.53, 0.3]} rotation={[Math.PI / 2, 0, 0]} scale={[0.06, 3.6, 0.06]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials.besi} position={[-4.18, 2.53, 0.3]} rotation={[Math.PI / 2, 0, 0]} scale={[0.06, 3.6, 0.06]} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials.besi} position={[-4.18, 2.53, 0.3]} rotation={[Math.PI / 2, 0, 0]} scale={[0.06, 3.6, 0.06]} />
      <mesh geometry={nodes.Circle001.geometry} material={materials['Material.007']} position={[-10.15, 2.63, 2.69]} rotation={[Math.PI / 2, 0, 0]} scale={[0.53, 0.66, 0.53]} />
      <mesh geometry={nodes.Circle002.geometry} material={materials['Material.007']} position={[-10.15, 2.63, -2.11]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-0.53, -0.67, -0.53]} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials.besi} position={[-9.31, 2.5, -3.84]} scale={0.05} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.005']} position={[-9.11, 0.55, -3.81]} scale={[0.53, 0.51, 0.17]} />
      <mesh geometry={nodes.pager.geometry} material={materials['Material.004']} position={[-11.86, 0.83, -3.72]} scale={0.05} />
      <group position={[11.35, 0.49, 2.34]} scale={[0.53, 0.5, 2.33]}>
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials['Material.009']} />
      </group>
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.005']} position={[10.91, 1.37, 4.67]} scale={[0.02, 0.07, 0.32]} />
      <mesh geometry={nodes.Circle003.geometry} material={materials['Material.007']} position={[10.87, 2.36, 2.4]} rotation={[Math.PI / 2, 0, 0]} scale={[0.52, 0.66, 0.53]} />
      <mesh geometry={nodes.Circle004.geometry} material={materials['Material.007']} position={[10.87, 2.05, 5.36]} rotation={[1.7, 0, 0]} scale={[0.51, 0.19, 0.53]} />
      <mesh geometry={nodes.Torus.geometry} material={materials['Material.008']} position={[11.93, 0.78, 4.68]} rotation={[0, 0, -Math.PI / 2]} scale={[0.04, 0.02, 0.03]} />
      <group position={[13.46, 0.49, -1.47]} rotation={[0, Math.PI / 2, 0]} scale={[0.53, 0.5, 2.33]}>
        <mesh geometry={nodes.Cube004_1.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube004_3.geometry} material={materials['Material.009']} />
      </group>
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.005']} position={[15.79, 1.37, -1.03]} rotation={[0, Math.PI / 2, 0]} scale={[0.02, 0.07, 0.32]} />
      <mesh geometry={nodes.Circle005.geometry} material={materials['Material.007']} position={[13.52, 2.36, -0.99]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.52, 0.66, 0.53]} />
      <mesh geometry={nodes.Circle006.geometry} material={materials['Material.007']} position={[16.47, 2.05, -0.99]} rotation={[Math.PI / 2, -0.13, -Math.PI / 2]} scale={[0.51, 0.19, 0.53]} />
    </group>
  )
}

useGLTF.preload('./models/parkiran.glb')
