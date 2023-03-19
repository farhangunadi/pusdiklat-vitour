import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, Text, Billboard, Plane } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function Info(props) {
  const [info, setInfo] = useState(null);
  const [handle, setHandle] = useState(false);

  function handleClickOutside(info) {
    setInfo(info);
  }

  useEffect(() => {
    function handleClickOutside(info) {
      setInfo(null);
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    console.log(info);
  });

  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 1,
    args: props.args,
    position: props.position,
    scale: props.scale,
    rotation: props.rotation,
    ...props,
  }));
  const [refInfo] = useBox((index) => ({
    type: "Static",
    mass: 2,
    args: props.argsInfo,
    position: props.positionInfo,
  }));

  const { nodes, materials, animations } = useGLTF("./models/info.glb");
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    actions?.rotateAnimation.play();
  });

  const textProps = {
    color: "black",
    fontSize: 1.5,
    font: "https://fonts.googleapis.com/css2?family=Roboto",
    maxWidth: 500,
    lineHeight: 1.5,
    background: "white",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <group
        ref={ref}
        {...props}
        dispose={null}
        castShadow
        onPointerOver={handleClickOutside}
        onPointerOut={() => {
          setInfo(null);
        }}
      >
        <group name="Scene">
          <group
            name="Cylinder"
            position={[0, 1.85, 0]}
            rotation={[Math.PI / 2, 0, 0.08]}
            scale={1.29}
          >
            <mesh
              name="Cylinder_1"
              geometry={nodes.Cylinder_1.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Cylinder_2"
              geometry={nodes.Cylinder_2.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              name="Cylinder_3"
              geometry={nodes.Cylinder_3.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              name="Cylinder_4"
              geometry={nodes.Cylinder_4.geometry}
              material={materials["Material.003"]}
            />
          </group>
        </group>
      </group>
      <group ref={refInfo} {...props}>
        {info && (
          <>
            {/* <mesh>
          <Text
            color="black"
            anchorX="center"
            anchorY="middle"
            rotation={[0, Math.PI / -2, 0]}
            {...textProps}
          >
            {props.info}
          </Text>
          </mesh> */}
            <Billboard
              follow={true}
              lockX={false}
              lockY={false}
              lockZ={false} // Lock the rotation on the z axis (default=false)
            >
              <Text
                color="white"
                {...textProps}
                fontSize={1}
              >
                {props.info}
              </Text>
              <Plane args={[10, 2]} material-color="#ff8e0d" />
            </Billboard>
          </>
        )}
      </group>
    </>
  );
}

useGLTF.preload("./models/info.glb");
