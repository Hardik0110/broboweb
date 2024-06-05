/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 websiteAssets1.glb
*/

import React, { useRef } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, SSAO, Bloom} from '@react-three/postprocessing'
import { motion } from 'framer-motion-3d'

export function HeroDisplay({isToggle, props}) {
  const ref = useRef()
  const { nodes, materials } = useGLTF('/websiteAssets1.glb')
  const variants = {
    initial: {
      x: -201, y:-100, z:-300, 
      rotateY:(-45* Math.PI)/180
    },
    rotate:{
      x:0, y:-5, z:0, rotateY:(-20* Math.PI)/180
    }
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 50
    ref.current.rotation.y = (-15 + Math.sin(t / 1.5)) / 20
  })
  
  return (
    <motion.group ref={ref}  {...props} dispose={null} 
        // rotation={[0, 45* Math.PI/180,0]} 
        initial={"initial"}
        animate={"rotate"}
        transition={{
          duration:1,
        }}
        variants={variants}
        >
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.003']} position={[-4.51, 3.79, 0]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials.metal} position={[-3.51, 1.86, 3.13]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.black} position={[-4.73, 5.44, 0.66]} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials.PLASTIC} position={[-5.51, 4.77, -0.37]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.PLASTIC} position={[-5.51, 5.66, -0.37]} />
      <group position={[-4.8, 4.51, -3.69]} rotation={[Math.PI, -0.85, Math.PI]}>
        <mesh geometry={nodes.Cylinder019.geometry} material={materials.black} />
        <mesh geometry={nodes.Cylinder019_1.geometry} material={materials['red light']} />
        <mesh geometry={nodes.Cylinder019_2.geometry} material={materials.green} />
        <mesh geometry={nodes.Cylinder019_3.geometry} material={materials.window_glass} />
        <mesh geometry={nodes.Cylinder019_4.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-5.09, 4.47, 3.55]} rotation={[0, 0.29, 0]}>
        <mesh geometry={nodes.Cube016_1.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube016_2.geometry} material={materials['red light']} />
        <mesh geometry={nodes.Cube016_3.geometry} material={materials['Mouse pad']} />
        <mesh geometry={nodes.Cube016_4.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube016_5.geometry} material={materials.green} />
      </group>
      <mesh geometry={nodes.Cube006.geometry} material={materials.drawers} position={[-5.04, 1.05, -4.23]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Mouse pad']} position={[-3.79, 3.9, 0.62]} />
      <mesh geometry={nodes.Cylinder005.geometry} material={materials.black} position={[-5, 4.09, 0.42]} rotation={[2.37, -1.07, 0.85]} />
      <group position={[-3.75, 4.01, 0.62]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube018_1.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube018_2.geometry} material={materials.window_glass} />
      </group>
      <group position={[-3.99, 4.18, 1.41]}>
        <mesh geometry={nodes.Cube099_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube099_2.geometry} material={materials.wall} />
        <mesh geometry={nodes.Cube099_3.geometry} material={materials.window_glass} />
        <mesh geometry={nodes.Cube099_4.geometry} material={materials.Material} />
      </group>
      <group position={[-3.68, 3.94, -0.78]} rotation={[0, 0.21, 0]}>
        <mesh geometry={nodes.Cube176.geometry} material={materials['red light']} />
        <mesh geometry={nodes.Cube176_1.geometry} material={materials.green} />
        <mesh geometry={nodes.Cube176_2.geometry} material={materials.black} />
      </group>
      <mesh geometry={nodes.Cube009.geometry} material={materials['Material.003']} position={[-5.86, 7.69, 0.05]} />
      <group position={[-6.45, 10.05, 2.19]}>
        <mesh geometry={nodes.Cube178.geometry} material={materials['Material.020']} />
        <mesh geometry={nodes.Cube178_1.geometry} material={materials['Material.002']} />
        <EffectComposer smaa>
            <Bloom intensity={50}/>
            <SSAO />
          </EffectComposer>
      </group>
      <mesh geometry={nodes.Cube013.geometry} material={materials.black} position={[-5.82, 7.99, 3.77]} />
      <group position={[-5.74, 8.16, 3.91]}>
        <mesh geometry={nodes.Cube182.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube182_1.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube182_2.geometry} material={materials['Material.011']} />
      </group>
      <group position={[-5.74, 8.16, 3.77]}>
        <mesh geometry={nodes.Cube183.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube183_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Cube183_2.geometry} material={materials['Material.011']} />
      </group>
      <group position={[-5.74, 8.16, 3.64]}>
        <mesh geometry={nodes.Cube184.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube184_1.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Cube184_2.geometry} material={materials['Material.011']} />
      </group>
      <group position={[-5.74, 8.16, 3.51]}>
        <mesh geometry={nodes.Cube185.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube185_1.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube185_2.geometry} material={materials['Material.011']} />
      </group>
      <group position={[-5.74, 8.16, 3.27]} rotation={[0.31, 0, 0]}>
        <mesh geometry={nodes.Cube186.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube186_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Cube186_2.geometry} material={materials['Material.011']} />
      </group>
      <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.009']} position={[-5.83, 8.07, -3.21]} />
      <mesh geometry={nodes.Icosphere.geometry} material={materials.window_glass} position={[-5.81, 8.64, -3.21]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Mouse pad']} position={[0.53, 3.18, 0.55]} />
      <mesh geometry={nodes.Cylinder007.geometry} material={materials.metal} position={[0.56, 1.79, 0.54]} />
      <mesh geometry={nodes.Cylinder008.geometry} material={materials.metal} position={[0.55, 0.47, 1.13]} rotation={[-1.02, 0.03, -0.01]} />
      <mesh geometry={nodes.Cylinder009.geometry} material={materials.metal} position={[0.54, 0.21, 1.61]} rotation={[0, 0.77, -Math.PI / 2]} />
      <mesh geometry={nodes.Cylinder011.geometry} material={materials.metal} position={[-0.4, 0.21, 0.05]} rotation={[0, -1.12, -Math.PI / 2]} />
      <mesh geometry={nodes.Cylinder012.geometry} material={materials.metal} position={[1.4, 0.21, -0.06]} rotation={[0, 0.62, -Math.PI / 2]} />
      <mesh geometry={nodes.Cube019.geometry} material={materials.drawers} position={[-5.04, 1.05, 4.09]} />
      <group position={[-4.67, 4.04, 2.13]} rotation={[0, 0.48, 0]}>
        <mesh geometry={nodes.Cube190.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube190_1.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Cube190_2.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.Cube190_3.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.Cube190_4.geometry} material={materials['Material.016']} />
        <mesh geometry={nodes.Cube190_5.geometry} material={materials['Material.017']} />
      </group>
      <mesh  geometry={nodes.Text.geometry} material={materials['Material.005']} position={[-6.41, 7.99, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.screen} position={[-4.73, 5.44, 0.66]} />
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube192.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube192_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube193.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube193_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube194.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube194_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube195.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube195_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube196.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube196_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube197.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube197_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube198.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube198_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube199.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube199_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube200.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube200_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube201.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube201_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube202.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube202_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube203.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube203_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube204.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube204_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube205.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube205_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube206.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube206_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube207.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube207_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube208.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube208_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube209.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube209_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube210.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube210_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube211.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube211_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube212.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube212_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube213.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube213_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube214.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube214_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube215.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube215_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube216.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube216_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube217.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube217_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube218.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube218_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube219.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube219_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube220.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube220_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube221.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube221_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube222.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube222_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube223.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube223_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube224.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube224_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube225.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube225_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube226.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube226_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube227.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube227_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube228.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube228_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube229.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube229_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube230.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube230_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube231.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube231_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube232.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube232_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube233.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube233_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube234.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube234_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube235.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube235_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube236.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube236_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube237.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube237_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube238.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube238_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube239.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube239_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube240.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube240_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube241.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube241_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube242.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube242_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube243.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube243_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube244.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube244_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube245.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube245_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube246.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube246_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube247.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube247_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube248.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube248_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube249.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube249_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube250.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube250_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube251.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube251_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube252.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube252_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube253.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube253_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube254.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube254_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube255.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube255_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube256.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube256_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube257.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube257_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube258.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube258_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube259.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube259_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube260.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube260_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube261.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube261_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube262.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube262_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube263.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube263_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube264.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube264_1.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube265.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube265_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube266.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube266_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube267.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube267_1.geometry} material={materials.green} />
      </group>
      <group position={[-3.98, 4.12, 1.41]} rotation={[0, 0, -0.2]}>
        <mesh geometry={nodes.Cube268.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube268_1.geometry} material={materials['Material.002']} />
      </group>
      <mesh geometry={nodes.Cube099.geometry} material={materials['Material.002']} position={[-6.25, 3.6, 0.1]} />
      <group position={[-6.45, 10.05, 0.45]}>
        <mesh geometry={nodes.Cube271.geometry} material={materials['Material.020']} />
        <mesh geometry={nodes.Cube271_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-6.45, 10.05, -1.31]}>
        <mesh geometry={nodes.Cube272.geometry} material={materials['Material.020']} />
        <mesh geometry={nodes.Cube272_1.geometry} material={materials['Material.002']} />
      </group>
    </motion.group>
  )
}

useGLTF.preload('/websiteAssets1.glb')
