import { useBox } from "@react-three/cannon";
import {Text, Html} from "@react-three/drei";
import { useState, useEffect } from "react";

const BaseBox = ({ ...props }) => {
  const [textpopup, setTextpopup] = useState(false);
  const [data, setData] = useState(null);

  function popupText(data) {
    setData(data);
  }

  useEffect(() => {
    function handleClickOutside() {
      setData(null);
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 1,
    onCollide: (e) => {
      console.log(e);
    },
    ...props,
  }));

  return (
    <>
      <mesh castShadow position={props.position} ref={ref}>
      <boxGeometry args={props.args} />
      <meshStandardMaterial color={props.color} />
    </mesh>
    {/* {data && (
         <Html distanceFactor={10} >
         <div className="content">
           hello <br />
           world
         </div>
       </Html>
      )} */}
    </>
  );
};

export default BaseBox;
