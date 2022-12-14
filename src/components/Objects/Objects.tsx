import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';
import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial
} from '@react-three/drei';
import styles from './objects.module.css';
import font from '../../assets/bangers-v20-latin-regular.woff';
import { useControls, button } from 'leva';

export const Objects = () => {
  const sphereRef = useRef<Mesh>(null);
  const boxRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);

  const { cubeScale, cubeVisible } = useControls('cube', {
    cubeScale: {
      value: 1,
      min: 1,
      max: 7,
      step: 0.5
    },
    cubeVisible: true,
    clickMe: button(() => {
      console.log('clicked');
    }),
    select: { options: ['x', 'y', 'z'] },
    range: {
      min: 0,
      max: 10,
      value: [4, 5]
    }
  });

  const { spherePosition, color } = useControls('sphere', {
    spherePosition: {
      value: { x: -2, y: 0 },
      joystick: 'invertY',
      step: 0.01
    },
    color: 'orange'
  });

  useFrame((state, delta) => {
    // if (boxRef?.current?.rotation) {
    //   boxRef.current.rotation.y += delta;
    // }

    const angle = state.clock.elapsedTime;

    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);

    // if (groupRef?.current?.rotation) {
    //   groupRef.current.rotation.y += delta;
    // }
  });

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <group ref={groupRef}>
        {/* <PivotControls anchor={[0, 0, 0]} depthTest={false}> */}
        <mesh
          position={[spherePosition.x, spherePosition.y, 0]}
          ref={sphereRef}
        >
          <sphereGeometry />
          <meshStandardMaterial color={color} />
          {/* <Html
            position={[0.5, 0, 0]}
            center
            distanceFactor={8}
            wrapperClass={styles.label}
            occlude={[boxRef]}
          >
            This is a Sphere
          </Html> */}
        </mesh>
        {/* </PivotControls> */}

        {/* <TransformControls position-x={2}> */}
        <mesh
          position-x={2}
          visible={cubeVisible}
          ref={boxRef}
          scale={cubeScale}
        >
          <boxGeometry />
          <meshStandardMaterial color='brown' />
        </mesh>
        {/* </TransformControls> */}
      </group>

      <mesh rotation-x={-Math.PI * 0.5} scale={10} position={[0, -1, 0]}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={1024}
          mirror={0.75}
          color='greenyellow'
        />
        {/* <meshStandardMaterial color='green' /> */}
      </mesh>

      <Float speed={2} floatIntensity={3}>
        <Text
          font={font}
          fontSize={1}
          color='salmon'
          position-y={2}
          maxWidth={2}
          textAlign='center'
        >
          I love R3F
        </Text>
      </Float>
    </>
  );
};
