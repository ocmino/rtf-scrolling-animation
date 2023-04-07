import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

export const FLOOR_HEIGHT = 1  ;
export const NB_FLOORS = 3;

export function DeLonghi(props) {
  const { nodes, materials } = useGLTF('/Models/DeLonghi.glb')

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

      //first floor postion and rotation
      tl.current.to(
        first.current.position,
        {
          duration: 2,
          y: 1.35,
          x: -0.2
        },
        0
        );

        tl.current.to(
          first.current.rotation,
          {
            duration: 2,
            y: Math.PI / -2.5,
          },
          0
          );

      //Second floor postion and rotation
      tl.current.to(
        second.current.position,
        {
          duration: 2,
          x: -0.3
        },
        0
        );

        tl.current.to(
          second.current.rotation,
          {
            duration: 2,
            y: Math.PI /2.5,
          },
          0
          );

          //Third floor postion and rotation
          tl.current.to(
            third.current.position,
            {
              duration: 2,
              x: 0.2
            },
            0
            );

            tl.current.to(
              third.current.rotation,
              {
                duration: 2,
                y: Math.PI / -3,
              },
              0
              );


       }
    );

    
  return (
    <group {...props} dispose={null} ref={ref} style={{ margin: 0, padding: 0 }}>

<group ref={first} position={[0.15, 0, 0]}>
      <mesh geometry={nodes.Cube009.geometry} material={materials['bottom body paint.001']} />
      <mesh geometry={nodes.Cube009_1.geometry} material={materials['main chrome.001']} />
      <mesh geometry={nodes.Cube009_2.geometry} material={materials['top buttons.001']} />
      <mesh geometry={nodes.Cube009_3.geometry} material={materials['cupholder chrome.001']} />
      <mesh geometry={nodes.Cube009_4.geometry} material={materials['air pump plastic.001']} />
      <mesh geometry={nodes.Cube009_5.geometry} material={materials['amblem.001']} />
      <mesh geometry={nodes.Cube009_6.geometry} material={materials['top boddy paint.001']} />
      <mesh geometry={nodes.Cube009_7.geometry} material={materials['bottom glossy plastic.001']} />
      <mesh geometry={nodes.Cube009_8.geometry} material={materials['plastic watter tank.001']} />
      <mesh geometry={nodes.Cube009_9.geometry} material={materials['plastic.001']} />
      </group>

      <group ref={second} position={[0, 0.9, 0]}>
      <mesh geometry={nodes.Cube011.geometry} material={materials['bottom body paint.001']} />
      <mesh geometry={nodes.Cube011_1.geometry} material={materials['main chrome.001']} />
      <mesh geometry={nodes.Cube011_2.geometry} material={materials['top buttons.001']} />
      <mesh geometry={nodes.Cube011_3.geometry} material={materials['cupholder chrome.001']} />
      <mesh geometry={nodes.Cube011_4.geometry} material={materials['air pump plastic.001']} />
      <mesh geometry={nodes.Cube011_5.geometry} material={materials['amblem.001']} />
      <mesh geometry={nodes.Cube011_6.geometry} material={materials['top boddy paint.001']} />
      <mesh geometry={nodes.Cube011_7.geometry} material={materials['bottom glossy plastic.001']} />
      <mesh geometry={nodes.Cube011_8.geometry} material={materials['plastic watter tank.001']} />
      <mesh geometry={nodes.Cube011_9.geometry} material={materials['plastic.001']} />
      </group>

      <group ref={third} position={[0, 0.9, 0]}>
      <mesh geometry={nodes.Cube012.geometry} material={materials['bottom body paint.001']} />
      <mesh geometry={nodes.Cube012_1.geometry} material={materials['main chrome.001']} />
      <mesh geometry={nodes.Cube012_2.geometry} material={materials['top buttons.001']} />
      <mesh geometry={nodes.Cube012_3.geometry} material={materials['cupholder chrome.001']} />
      <mesh geometry={nodes.Cube012_4.geometry} material={materials['air pump plastic.001']} />
      <mesh geometry={nodes.Cube012_5.geometry} material={materials['amblem.001']} />
      <mesh geometry={nodes.Cube012_6.geometry} material={materials['top boddy paint.001']} />
      <mesh geometry={nodes.Cube012_7.geometry} material={materials['bottom glossy plastic.001']} />
      <mesh geometry={nodes.Cube012_8.geometry} material={materials['plastic watter tank.001']} />
      <mesh geometry={nodes.Cube012_9.geometry} material={materials['plastic.001']} />
      </group>

    </group>
  )
}

useGLTF.preload('/DeLonghi.glb')
