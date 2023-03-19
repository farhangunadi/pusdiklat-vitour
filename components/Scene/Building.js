import React from 'react'
import { Gate } from '../Asset Environment/GatePusdiklat';
import { GdPelayanan } from '../Asset Environment/GdPelayananLowPoly';
import { Joglo } from '../Asset Environment/JogloLowpoly';
import { MasjidLowPoly } from "../Asset Environment/MasjidLowPoly";
import { Parkiran } from '../Asset Environment/Parkiran';
import { SportCenter } from "../Asset Environment/Sportcenter";
import { Wisma } from '../Asset Environment/Wisma1';
import { Wisma2 } from '../Asset Environment/Wisma2';
import { Info } from '../basic_compt/Info';

export const Building = () => {
  return (
    <group>
        <MasjidLowPoly position={[190,0,-51]} rotation={[0,Math.PI,0]} />
        <SportCenter position={[180,0,-20]} />
        {/* <Joglo position={[140,0,-28.1]} scale={0.3} /> */}
        <Gate position={[-8,0,15]} rotation={[0,Math.PI,0]} scale={0.5} />
        <GdPelayanan position={[83,0,-31]} scale={1.5} />
        <Parkiran position={[79,0,-61]} scale={1.7} />
        <Wisma position={[129,0,-50.5]} rotation={[0,Math.PI,0]} scale={0.9} />
        <Wisma position={[167,0,-37]} rotation={[0,Math.PI/2,0]} scale={0.7} />
        <Wisma position={[166,0,-13]} rotation={[0,Math.PI/2,0]} scale={0.9} />
        <Wisma2 position={[141,0,-8.8]} rotation={[0,Math.PI,0]} />
        <Wisma2 position={[117.7,0,-8.8]} rotation={[0,Math.PI,0]} />
        {/* <Info /> */}
        <Info position={[65,0,-20]} positionInfo={[65,2.5,-20]} scale={0.5} info="Gedung Pelayanan" />
        <Info position={[125,0,-28]} positionInfo={[125,2.5,-28]} scale={0.5} info="Joglo" />
        <Info position={[79,0,-55]} positionInfo={[79,2.5,-55]}  scale={0.5} info="Tempat Parkir" />
        <Info position={[194,0,-50]} positionInfo={[194,2.5,-50]}  scale={0.5} info="Masjid" />
        <Info position={[177,0,-20]} positionInfo={[177,2.5,-20]}  scale={0.5} info="Sport Center" />
        <Info position={[129,0,-53]} positionInfo={[129,2.5,-53]}  scale={0.5} info="Wisma A" />
        <Info position={[170,0,-37]} positionInfo={[170,2.5,-37]}  scale={0.5} info="Wisma B" />
        <Info position={[169,0,-13]} positionInfo={[169,2.5,-13]} scale={0.5} info="Wisma C" />
        <Info position={[141,0,2]} positionInfo={[141,2.5,2]} scale={0.5} info="Wisma D" />
        <Info position={[117.7,0,2]} positionInfo={[117.7,2.5,2]} scale={0.5} info="Wisma E" />
    </group>
  )
}
