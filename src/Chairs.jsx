import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

export const FLOOR_HEIGHT = 0.69
export const NB_FLOORS = 3;

export function Chairs(props) {
  const { nodes, materials } = useGLTF('/Models/Chairs.glb')

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

      //First chair postion and rotation
      tl.current.to(
        first.current.position,
        {
          duration: 2,
          y: 2.9,
          x: -2
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

      //Second chair postion and rotation
      tl.current.to(
        second.current.position,
        {
          duration: 2,
          x: -0.65
        },
        0
        );

        tl.current.to(
          second.current.rotation,
          {
            duration: 2,
            y: Math.PI / 2.5,
          },
          0
          );

      //Third chair postion and rotation
      tl.current.to(
        third.current.position,
        {
          duration: 2,
          x: 0.7,
          y: -0.1
        },
        0
        );

        tl.current.to(
          third.current.rotation,
          {
            duration: 2,
            y: Math.PI / 2.5,
          },
          0
          );




       }
    );


  return (
    <group {...props} dispose={null} ref={ref} scale={[0.3, 0.3, 0.3]} position={[0, 0, 0]}>

<group ref={first} >
      <group rotation={[-1.48, 0, Math.PI / 1.5]} position={[0.75, -0.5, 0]}>
        <mesh geometry={nodes.Cube015.geometry} material={materials.Fabric} castShadow receiveShadow/>
        <mesh geometry={nodes.Cube015_1.geometry} material={materials['Material.001']} castShadow receiveShadow/>
        <mesh geometry={nodes.Cube015_2.geometry} material={materials['Material.002']} castShadow receiveShadow/>
        <mesh geometry={nodes.Cube015_3.geometry} material={materials['Material.003']} castShadow receiveShadow/>
      </group>
      </group>

      <group ref={second} >
      <group position={[0, 3, 0]}>
        <mesh geometry={nodes.Cube002.geometry} material={materials.Metal} castShadow receiveShadow/>
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.Wood} castShadow receiveShadow/>
        <mesh geometry={nodes.Cube002_2.geometry} material={materials.Leather} castShadow receiveShadow/>
        <mesh geometry={nodes.Cube002_3.geometry} material={materials['Leather.001']} castShadow receiveShadow/>
      </group>
      </group>

      <group ref={third} >
      <group position={[-0.13, 4.8, -0.65]}>
        <mesh geometry={nodes.Cylinder003_1.geometry} material={materials['Material.005']} castShadow receiveShadow/>
        <mesh geometry={nodes.Cylinder003_2.geometry} material={materials['Material.004']} castShadow receiveShadow/>
        <mesh geometry={nodes.Cylinder003_3.geometry} material={materials['Material.006']} castShadow receiveShadow/>
        <mesh geometry={nodes.Cylinder003_4.geometry} material={materials['Material.007']} castShadow receiveShadow/>
        <mesh geometry={nodes.Cylinder003_5.geometry} material={materials['Material.008']} castShadow receiveShadow/>
      </group>
        </group>
      
    </group>
  )
}

useGLTF.preload('/Models/Chairs.glb')
