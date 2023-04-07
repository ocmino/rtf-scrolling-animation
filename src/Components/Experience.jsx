import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Overlay } from "../Overlay";
import { Chairs } from "../Chairs";

export const Experience = () => {
  
  return (
    <>
     <Environment preset="sunset" />
      <spotLight intensity={1} position={[0.5, 0, 1]} castShadow 
      shadow-mapSize-width={1024*2}
      shadow-mapSize-height={1024*2}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
      />
      <mesh position={[0, 0, -0.25]} receiveShadow castShadow visible={false}>
        <planeBufferGeometry args={[100, 100]} />
        <meshStandardMaterial color="lightblue" transparent opacity={0.9} />
      </mesh>
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      <ScrollControls pages={3} damping={0.01}>
        <Overlay />
        <Chairs />
      </ScrollControls>
    </>
  );
};
