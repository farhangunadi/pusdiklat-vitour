import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon";

export function MasjidLowPoly(props) {
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
  const { nodes, materials } = useGLTF('./models/masjidLowPoly.glb')
  return (
    <group {...props} dispose={null} ref={ref} castShadow>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.003']} position={[5.52, 0.54, -2.28]} scale={[0.99, 0.94, 0.99]} />
      <group position={[5.52, 0.54, -2.28]} scale={[0.99, 0.94, 0.99]}>
        <mesh geometry={nodes.Plane001_1.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.012']} />
      </group>
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.003']} position={[5.52, 0.51, -2.28]} scale={[0.99, 0.94, 0.99]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.007']} position={[-1.16, 0.54, -5.72]} scale={0.1} />
      <mesh geometry={nodes.Plane003.geometry} material={materials['Material.006']} position={[5.52, 0.54, -2.28]} scale={[0.99, 0.94, 0.99]} />
      <mesh geometry={nodes.Plane004.geometry} material={materials['Material.008']} position={[-4.01, 3.88, -0.78]} rotation={[0, 0, 0.09]} scale={[3.71, 0.63, 7.64]} />
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} position={[-4.01, 4.15, 14.76]} rotation={[0, 0, 0.09]} scale={[0.63, 0.14, 0.63]} />
      <mesh geometry={nodes.Plane005.geometry} material={materials['Material.006']} position={[5.52, 0.54, -2.28]} scale={[0.99, 0.94, 0.99]} />
      <mesh geometry={nodes.Circle002.geometry} material={materials['Material.001']} position={[11.61, 5.66, -2.52]} rotation={[1.09, 0, Math.PI]} scale={[0.34, 0.32, 0.3]} />
      <mesh geometry={nodes.Circle003.geometry} material={materials['Material.001']} position={[9.79, 3.93, -2.3]} rotation={[-Math.PI / 2, 0.43, Math.PI / 2]} scale={[-0.3, -0.36, -0.31]} />
      <mesh geometry={nodes.Circle004.geometry} material={materials['Material.001']} position={[2.24, 3.93, -2.3]} rotation={[Math.PI / 2, 0.43, Math.PI / 2]} scale={[0.3, 0.36, 0.31]} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.001']} position={[5.99, 5.96, -2.31]} rotation={[-0.01, 0.71, 1.6]} scale={0.12} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.Material} position={[5.97, 6.18, -2.23]} scale={1.07} />
      <mesh geometry={nodes.Cone.geometry} material={materials.Material} position={[5.97, 6.96, -2.23]} scale={0.22} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.Material} position={[9.25, 2.97, 4.48]} rotation={[0, Math.PI / 2, 0]} scale={[0.3, 0.11, 0.4]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.010']} position={[1.27, 0.89, -7.41]} scale={[1.32, 0.91, 0.63]} />
      <group position={[0.98, 0.1, -2.62]} scale={14.04}>
        <mesh geometry={nodes.Plane007_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane007_2.geometry} material={materials['Material.005']} />
      </group>
      <mesh geometry={nodes.Plane006.geometry} material={materials['Material.011']} position={[2.5, 0.54, -22.03]} rotation={[0, Math.PI / 2, 0]} scale={[0.99, 0.94, 0.99]} />
      <mesh geometry={nodes.Plane008.geometry} material={materials['Material.004']} position={[5.52, 0.54, -2.28]} scale={[0.99, 0.94, 0.99]} />
      <group position={[6.28, 1.51, -6.61]} scale={[1, 0.97, 0.22]}>
        <mesh geometry={nodes.Cube004_1.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials['Material.009']} />
      </group>
      <group position={[2.51, 1.51, -6.61]} scale={[1, 0.97, 0.22]}>
        <mesh geometry={nodes.Cube005_1.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube005_2.geometry} material={materials['Material.009']} />
      </group>
      <group position={[1.05, 1.51, -4.62]} rotation={[0, Math.PI / 2, 0]} scale={[0.87, 0.97, 0.22]}>
        <mesh geometry={nodes.Cube006_1.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube006_2.geometry} material={materials['Material.009']} />
      </group>
      <group position={[1.05, 1.51, 0.54]} rotation={[0, Math.PI / 2, 0]} scale={[0.86, 0.97, 0.22]}>
        <mesh geometry={nodes.Cube007_1.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube007_2.geometry} material={materials['Material.009']} />
      </group>
      <group position={[0.94, 1.49, -2.24]} rotation={[-Math.PI, 0, 0]} scale={[-0.07, -0.95, -0.91]}>
        <mesh geometry={nodes.Cube008_1.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube008_2.geometry} material={materials['Material.009']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/masjidLowPoly.glb')
