import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon";


export function Gate(props) {
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
  const { nodes, materials } = useGLTF('./models/gatePusdiklat.glb')
  return (
    <group {...props} dispose={null} ref={ref} castShadow>
      <group scale={[9.84, 1, 4.65]}>
        <mesh geometry={nodes.Plane007.geometry} material={materials.wall} />
        <mesh geometry={nodes.Plane007_1.geometry} material={materials['wall more grey']} />
        <mesh geometry={nodes.Plane007_2.geometry} material={materials.glass} />
        <mesh geometry={nodes.Plane007_3.geometry} material={materials['Material.011']} />
      </group>
      <group position={[0, -2.5, 0]} scale={[9.84, 1.3, 4.65]}>
        <mesh geometry={nodes.Plane008.geometry} material={materials.wall} />
        <mesh geometry={nodes.Plane008_1.geometry} material={materials['wall more grey']} />
        <mesh geometry={nodes.Plane008_2.geometry} material={materials.glass} />
      </group>
      <mesh geometry={nodes.Plane002.geometry} material={nodes.Plane002.material} position={[27.57, 0, -4.18]} />
      <group position={[21.62, 8.18, 4.38]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={2.15}>
        <mesh geometry={nodes.Text_1.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Text_2.geometry} material={materials['Material.013']} />
      </group>
      <group position={[21.8, 6.98, 4.1]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.52}>
        <mesh geometry={nodes.Text001_1.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.Text001_2.geometry} material={materials['Material.013']} />
      </group>
      <mesh geometry={nodes.Vert.geometry} material={nodes.Vert.material} position={[21.35, 9.01, -4.16]} />
      <group position={[2.44, 13.17, -0.01]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.97}>
        <mesh geometry={nodes.uploads_files_1889991_Train001.geometry} material={materials['Train Atlas']} />
        <mesh geometry={nodes.uploads_files_1889991_Train001_1.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.uploads_files_1889991_Train001_2.geometry} material={materials.glass} />
        <mesh geometry={nodes.uploads_files_1889991_Train001_3.geometry} material={materials['Material.016']} />
        <mesh geometry={nodes.uploads_files_1889991_Train001_4.geometry} material={materials['Material.017']} />
      </group>
      <group position={[29.43, 0.08, -0.01]} scale={5.03}>
        <mesh geometry={nodes.Circle_1.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Circle_2.geometry} material={materials.wall} />
      </group>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.018']} position={[15.02, 10.67, 3.6]} scale={0.45} />
      <mesh geometry={nodes.Circle001.geometry} material={materials['Material.019']} position={[29.43, -0.02, -0.01]} scale={5.03} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.018']} position={[15.02, 10.67, -3.86]} scale={0.45} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.018']} position={[7.7, 10.67, 3.6]} scale={0.45} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials['Material.018']} position={[0.41, 10.67, 3.6]} scale={0.45} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials['Material.018']} position={[-6.94, 10.67, 3.6]} scale={0.45} />
      <mesh geometry={nodes.Cylinder005.geometry} material={materials['Material.018']} position={[7.7, 10.67, -3.8]} scale={0.45} />
      <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.018']} position={[0.45, 10.67, -3.8]} scale={0.45} />
      <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.018']} position={[-6.81, 10.67, -3.8]} scale={0.45} />
      <mesh geometry={nodes.Torus001.geometry} material={nodes.Torus001.material} position={[15.21, 13.63, 3.69]} scale={0.11} />
      <mesh geometry={nodes.Torus002.geometry} material={materials.chain} position={[15.17, 13.63, 3.41]} rotation={[0, Math.PI / 2, 0]} scale={0.11} />
      <mesh geometry={nodes.Torus003.geometry} material={materials.chain} position={[7.88, 13.63, 3.41]} rotation={[0, Math.PI / 2, 0]} scale={0.11} />
      <mesh geometry={nodes.Torus004.geometry} material={materials.chain} position={[0.53, 13.63, 3.41]} rotation={[0, Math.PI / 2, 0]} scale={0.11} />
      <mesh geometry={nodes.Torus005.geometry} material={materials.chain} position={[15.17, 13.63, -4]} rotation={[0, Math.PI / 2, 0]} scale={0.11} />
      <mesh geometry={nodes.Torus006.geometry} material={materials.chain} position={[7.92, 13.63, -4]} rotation={[0, Math.PI / 2, 0]} scale={0.11} />
      <mesh geometry={nodes.Torus007.geometry} material={materials.chain} position={[0.66, 13.63, -4]} rotation={[0, Math.PI / 2, 0]} scale={0.11} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.020']} position={[-0.13, 3.38, 19.71]} rotation={[Math.PI, -1.18, Math.PI]} scale={[1, 0.58, 0.76]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.020']} position={[-0.13, 3.38, -21.7]} scale={[1, 0.58, 0.76]} />
    </group>
  )
}

useGLTF.preload('./models/gatePusdiklat.glb')
