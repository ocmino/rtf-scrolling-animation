import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { AncientStructure } from "../AncientStructure";
import { CoffeeMachines } from "../CoffeeMachines";
import { Overlay } from "../Overlay";
import { DeLonghi } from "../DeLonghi";

export const Experience = () => {
  return (
    <>
      <Environment preset="sunset" />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={20}
      />
      <spotLight
        position={[-10, -10, -10]}
        angle={0.15}
        penumbra={1}
        intensity={10}
      />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <ScrollControls pages={3} damping={0.01}>
        <Overlay />
        <DeLonghi />
      </ScrollControls>
    </>
  );
};
