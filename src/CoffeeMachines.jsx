import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

export const FLOOR_HEIGHT = 0.68  ;
export const NB_FLOORS = 3;

export function CoffeeMachines(props) {
  const { nodes, materials } = useGLTF("./Models/CoffeeMachines.glb");
  const ref = useRef();
  const tl = useRef();
  const first = useRef();
  const second = useRef();
  const third = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );

    // FIRST MACHINE ROTATION
    tl.current.to(
      first.current.rotation,
      {
        duration: 1,
        y: Math.PI / -2,
      },
      0
    );

    // SECOND MACHINE ROTATION
    tl.current.to(
      second.current.rotation,
      {
        duration: 1,
        y: Math.PI / 2,
      },
      0.1
    ); 

    //SECOND MACHINE POSITION
    tl.current.to(
      second.current.position,
      {
        duration: 1,
        z: -0.25,
      },
      0.1
    );
    
    // THIRD MACHINE ROTATION
    tl.current.to(
      third.current.rotation,
      {
        duration: 1,
        y: Math.PI / -3,
      },
      0.7
    );

    // THIRD MACHINE POSITION
    tl.current.to(
      third.current.position,
      {
        duration: 1,
        x: 0.2,
        y: -0.5
      },
      0.7
    );
  }, []);

  return (
    <group {...props} dispose={null} ref={ref} position={[0, -0.2, 0]}>
      <group position={[0, 1.7, 0]}>
        <group ref={third}>
          <mesh
            geometry={nodes.Cylinder006.geometry}
            material={materials.BlackMatte}
          />
          <mesh
            geometry={nodes.Cylinder006_1.geometry}
            material={materials["BlackShine.Logo"]}
          />
          <mesh
            geometry={nodes.Cylinder006_2.geometry}
            material={materials["BlackMatte.Logo"]}
          />
          <mesh
            geometry={nodes.Cylinder006_3.geometry}
            material={materials.BlackShine}
          />
          <mesh
            geometry={nodes.Cylinder006_4.geometry}
            material={materials.ClearPlastic}
          />
          <mesh
            geometry={nodes.Cylinder006_5.geometry}
            material={materials.Water}
          />
        </group>
      </group>

      <group position={[0, 0.8, 0]} rotation={[0, Math.PI / 2, 0]}>
        <group ref={second}>
          <mesh
            geometry={nodes.Cube001.geometry}
            material={materials["bottom body paint"]}
          />
          <mesh
            geometry={nodes.Cube001_1.geometry}
            material={materials["main chrome"]}
          />
          <mesh
            geometry={nodes.Cube001_2.geometry}
            material={materials["top buttons"]}
          />
          <mesh
            geometry={nodes.Cube001_3.geometry}
            material={materials["cupholder chrome"]}
          />
          <mesh
            geometry={nodes.Cube001_4.geometry}
            material={materials["air pump plastic"]}
          />
          <mesh
            geometry={nodes.Cube001_5.geometry}
            material={materials.amblem}
          />
          <mesh
            geometry={nodes.Cube001_6.geometry}
            material={materials["top boddy paint"]}
          />
          <mesh
            geometry={nodes.Cube001_7.geometry}
            material={materials["bottom glossy plastic"]}
          />
          <mesh
            geometry={nodes.Cube001_8.geometry}
            material={materials["plastic watter tank"]}
          />
          <mesh
            geometry={nodes.Cube001_9.geometry}
            material={materials.plastic}
          />
        </group>
      </group>

      <group position={[0.25, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <group ref={first}>
          <mesh
            geometry={nodes.Main.geometry}
            material={materials.Red_Coffee_Machine}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Models/CoffeeMachines.glb");
