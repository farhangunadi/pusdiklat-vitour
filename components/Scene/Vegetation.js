import React, {useMemo} from 'react';
import { TreeLP3 } from '../basic_compt/TreeLP3';
import { PohonLowPoly } from "../Asset Environment/Tree_lowpoly";
import BaseBox from '../basic_compt/Box';
import Box from "../basic_compt/Box"
import { Cloud } from '../basic_compt/Cloud';
import { TreeLP1 } from '../basic_compt/TreeLP1';

export const Vegetation = () => {
    
  return (
    <group>
      <group>
        <Cloud position={[
          Math.random() * 50 - 25,
          10,
          Math.random() * 50 - 25,
        ]}/>
        <Cloud position={[
          Math.random() * 50 - 25,
          10,
          Math.random() * 50 - 25,
        ]}/>
        <Cloud position={[
          Math.random() * 50 - 25,
          10,
          Math.random() * 50 - 25,
        ]}/>
        <Cloud position={[
          Math.random() * 50 - 25,
          10,
          Math.random() * 50 - 25,
        ]}/>
        <Cloud position={[
          Math.random() * 50 - 25,
          10,
          Math.random() * 50 - 25,
        ]}/>
        <Cloud position={[
          Math.random() * 50 - 25,
          10,
          Math.random() * 50 - 25,
        ]}/>
        <Cloud position={[
          Math.random() * 50 - 25,
          10,
          Math.random() * 50 - 25,
        ]}/>
        <Cloud position={[
          Math.random() * 50 - 25,
          10,
          Math.random() * 50 - 25,
        ]}/>
      </group>
      <group>
        <Box position={[106,0,27]} args={[230, 10, 2]} />
        <Box position={[106,0,-80]} args={[230, 10, 2]} />
        <Box position={[-8,0,-80]} args={[2, 10, 170]} />
        <Box position={[210,0,-8]} args={[2, 10, 170]} />
      </group>
       <group>
       <PohonLowPoly position={[5,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[10,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[15,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[20,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[25,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[30,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[35,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[40,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[45,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[50,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[55,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[60,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[65,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[70,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[75,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[80,0,13]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[85,0,13]} args={[0.5,10,0.5]} scale={5} />
       </group>
       <group>
       <PohonLowPoly position={[10,0,3]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[15,0,3]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[20,0,3]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[25,0,3]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[30,0,3]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[35,0,3]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[40,0,3]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[45,0,3]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[50,0,3]} args={[0.5,10,0.5]} scale={5} />
       </group>
       <group>
       <PohonLowPoly position={[10,0,-10]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[15,0,-10]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[20,0,-10]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[25,0,-10]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[30,0,-10]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[35,0,-10]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[40,0,-10]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[45,0,-10]} args={[0.5,10,0.5]} scale={5} />
       <PohonLowPoly position={[50,0,-10]} args={[0.5,10,0.5]} scale={5} />
       </group>
       <group>
        <TreeLP1 position={[0,0,0]} />
        <TreeLP1 position={[10,0,-30]} />
        <TreeLP1 position={[20,0,-30]} />
        <TreeLP1 position={[20,0,-20]} />
        <TreeLP1 position={[10,0,-20]} />
        <TreeLP1 position={[65,0,-40]} scale={0.7} />
        <TreeLP3 position={[128,0,-25]} scale={0.3} />
        <TreeLP3 position={[126,0,-25]} scale={0.3} />
        <TreeLP3 position={[124,0,-25]} scale={0.3} />
        <TreeLP3 position={[122,0,-25]} scale={0.3} />
        <TreeLP3 position={[120,0,-25]} scale={0.3} />
        <TreeLP3 position={[118,0,-25]} scale={0.3} />
        <TreeLP3 position={[116,0,-25]} scale={0.3} />
        <TreeLP3 position={[114,0,-25]} scale={0.3} />
        <TreeLP3 position={[112,0,-25]} scale={0.3} />
        <TreeLP3 position={[128,0,-31]} scale={0.3} />
        <TreeLP3 position={[126,0,-31]} scale={0.3} />
        <TreeLP3 position={[124,0,-31]} scale={0.3} />
        <TreeLP3 position={[122,0,-31]} scale={0.3} />
        <TreeLP3 position={[120,0,-31]} scale={0.3} />
        <TreeLP3 position={[118,0,-31]} scale={0.3} />
        <TreeLP3 position={[116,0,-31]} scale={0.3} />
        <TreeLP3 position={[114,0,-31]} scale={0.3} />
        <TreeLP3 position={[112,0,-31]} scale={0.3} />
       </group>
       <group>
        <BaseBox args={[33,0.1,4]} position={[125,0,-28]} color="grey"  />
        <BaseBox args={[3.1,0.1,34]} position={[110,0,-28.5]} color="grey"  />
        <BaseBox args={[40,0.1,3]} position={[130,0,-13]} color="grey"  />
        <BaseBox args={[40,0.1,3]} position={[130,0,-38]} color="grey"  />
        <BaseBox args={[3,0.1,34]} position={[150,0,-28.5]} color="grey"  />
       </group>
    </group>
  )
}
