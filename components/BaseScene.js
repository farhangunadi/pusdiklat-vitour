import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import {
    BakeShadows,
    OrbitControls,
    Stage,
    Stats,
  } from "@react-three/drei";
import styles from "../styles/Info.module.css";


export const BaseSceneInfo = ({ children }) => {
  return (
    <div className={styles.content3d}>
      <Canvas
        // style={{ height: "100vh",width:"50vh", marginLeft: "2em" }}
        shadows
        camera={{ position: [20, 5, 10], fov: 50, near: 1 }}
        className={styles.canvasInfo}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Physics gravity={[0, -9.8, 0]}>
              {children}
            </Physics>
          </Stage>
          <BakeShadows />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
};
