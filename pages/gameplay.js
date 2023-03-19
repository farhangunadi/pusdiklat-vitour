import React from "react";
import { Sky, Stars, Cloud, Environment, Html } from "@react-three/drei";
import { BaseScene } from "../components/ui/BaseScene";
import BaseCharacter from "../components/ui/BaseCharacter";
import Box from "../components/basic_compt/Box";
import { Vegetation } from "../components/Scene/Vegetation";
import styles from "../styles/Gameplay.module.css";
import { JalanLowPoly } from "../components/Asset Environment/JalanLowPoly";
import { useState, useEffect } from "react";
import { Building } from "../components/Scene/Building";

function Gameplay() {
  const [data, setdata] = useState(null);

  function dataText() {
    setData("Hello World");
  }

  return (
    <div className={styles.container}>
      <BaseScene>
        <JalanLowPoly position={[0, 0, 5]} />
        <Building />
        <Vegetation />
        {/* <Html position={[0, 0, 0]} style={{ color: 'red', fontSize: '48px' }}>
        <h1>Hello World!</h1>
        </Html> */}

        <BaseCharacter
          controls
          position={[-15,5,8]}
          args={[1.5]}
          color="yellow"
          rotation= {[0,Math.PI,0]}
        />
        <Sky sunPosition={[0, 1, 0]} azimuth={0.25} inclination={0} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <Environment files="./environment/ehingen_hillside_2k.hdr" />
      </BaseScene>
      {/* {data && <div className="popup-text">{data}</div>} */}
      <div className={styles.dot} />
      <div className={styles.back}>
        <a href="/" className={styles.backBtn}>Back</a>
      </div>
    </div>
  );
}

export default Gameplay;
