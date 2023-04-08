import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { useCustomization } from "./Context/Customization";
import { useState } from "react";
import { useTexture } from "@react-three/drei";

export const FLOOR_HEIGHT = 0.69;
export const NB_FLOORS = 3;

export function Chairs(props) {
  const { nodes, materials } = useGLTF("/Models/Chairs.glb");
  const [buttonsClicked] = useState(false);
  const ref = useRef();
  const tl = useRef();
  const first = useRef();
  const second = useRef();
  const third = useRef();
  const scroll = useScroll();
  const { chairColor, couchColor, loungeChairColor } = useCustomization();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    if (!buttonsClicked) {
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
          x: -2,
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
          x: -0.65,
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
          y: -0.8,
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
  }, [buttonsClicked]);

  const red = new THREE.Color("red");
  const beige = new THREE.Color("beige");
  const yellow = new THREE.Color("yellow");
  const speckled = materials["Material.008"];

  const ChairFabric = useTexture({
    map: "/Textures/Fabric_035_basecolor.jpg",
    normalMap: "/Textures/Substance_Graph_Normal.jpg",
    roughnessMap: "/Textures/Substance_Graph_Roughness.jpg",
    aoMap: "/Textures/Fabric_035_ambientOcclusion.jpg",
  });

  ChairFabric.map.repeat.set(1, 1);
  ChairFabric.map.wrapS = ChairFabric.map.wrapT = THREE.RepeatWrapping;
  ChairFabric.normalMap.repeat.set(1, 1);
  ChairFabric.normalMap.wrapS = ChairFabric.normalMap.wrapT = THREE.RepeatWrapping;
  ChairFabric.roughnessMap.repeat.set(1, 1);
  ChairFabric.roughnessMap.wrapS = ChairFabric.roughnessMap.wrapT = THREE.RepeatWrapping;
  ChairFabric.aoMap.repeat.set(1, 1);
  ChairFabric.aoMap.wrapS = ChairFabric.aoMap.wrapT = THREE.RepeatWrapping;

  const ChairLeather = useTexture({
    map: "/Textures/Leather_006_COLOR.jpg",
    normalMap: "/Textures/Leather_006_NORM.jpg",
    roughnessMap: "/Textures/Leather_006_ROUGH.jpg",
    aoMap: "/Textures/Leather_006_OCC.jpg",
  });

  ChairLeather.map.repeat.set(3, 3);
  ChairLeather.map.wrapS = ChairLeather.map.wrapT = THREE.RepeatWrapping;
  ChairLeather.normalMap.repeat.set(3, 3);
  ChairLeather.normalMap.wrapS = ChairLeather.normalMap.wrapT = THREE.RepeatWrapping;
  ChairLeather.roughnessMap.repeat.set(3, 3);
  ChairLeather.roughnessMap.wrapS = ChairLeather.roughnessMap.wrapT = THREE.RepeatWrapping;
  ChairLeather.aoMap.repeat.set(3, 3);
  ChairLeather.aoMap.wrapS = ChairLeather.aoMap.wrapT = THREE.RepeatWrapping;

  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      scale={[0.3, 0.3, 0.3]}
      position={[0, 0, 0]}
    >
      <group ref={first}>
        <group rotation={[-1.48, 0, Math.PI / 1.5]} position={[0.75, -0.5, 0]}>
          <mesh geometry={nodes.Cube015.geometry} castShadow receiveShadow>
            <meshStandardMaterial
              {...chairColor === "Fabric" ? ChairFabric : ChairLeather}
            />
          </mesh>
          <mesh
            geometry={nodes.Cube015_1.geometry}
            material={materials["Material.001"]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Cube015_2.geometry}
            material={materials["Material.002"]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Cube015_3.geometry}
            material={materials["Material.003"]}
            castShadow
            receiveShadow
          />
        </group>
      </group>

      <group ref={second}>
        <group position={[0, 3, 0]}>
          <mesh
            geometry={nodes.Cube002.geometry}
            material={materials.Metal}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Cube002_1.geometry}
            material={materials.Wood}
            castShadow
            receiveShadow
          />
          <mesh geometry={nodes.Cube002_2.geometry} castShadow receiveShadow>
            <meshStandardMaterial
              {...couchColor === "Red" ? { color: red } : { color: beige }}
            />
          </mesh>
          <mesh
            geometry={nodes.Cube002_3.geometry}
            material={materials["Leather.001"]}
            castShadow
            receiveShadow
          />
        </group>
      </group>

      <group ref={third}>
        <group position={[-0.13, 5.5, -0.65]}>
          <mesh
            geometry={nodes.Cylinder003_1.geometry}
            material={materials["Material.005"]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Cylinder003_2.geometry}
            material={materials["Material.004"]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Cylinder003_3.geometry}
            material={materials["Material.006"]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Cylinder003_4.geometry}
            material={materials["Material.007"]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Cylinder003_5.geometry}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial
            {...loungeChairColor === "Speckled" ? speckled : { color: yellow }}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Models/Chairs.glb");
