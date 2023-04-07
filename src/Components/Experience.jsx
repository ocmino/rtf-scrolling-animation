import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { AncientStructure } from "../AncientStructure";
import { CoffeeMachines } from "../CoffeeMachines";
import { Overlay } from "../Overlay";
import { DeLonghi } from "../DeLonghi";
import { Chairs } from "../Chairs";

export const Experience = () => {
  return (
    <>
     <Environment preset="sunset" />
      <spotLight intensity={0.5} position={[0.5, 0, 1]} castShadow 
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
      />
      <mesh position={[0, 0, -0.25]} receiveShadow castShadow>
        <planeBufferGeometry args={[100, 100]} />
        <meshStandardMaterial color="white" transparent opacity={0.9} />
      </mesh>
      <OrbitControls enablePan={false} enableZoom={false} />
      <ScrollControls pages={3} damping={0.01}>
        <Overlay />
        <Chairs />
      </ScrollControls>
    </>
  );
};
