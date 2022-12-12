import { extend, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

export const Ball = () => {
  const boxRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);

  const { gl, camera } = useThree();
  useFrame((_, delta) => {
    if (boxRef?.current?.rotation) {
      boxRef.current.rotation.y += delta;
    }

    // if (groupRef?.current?.rotation) {
    //   groupRef.current.rotation.y += delta;
    // }
  });

  return (
    <>
      {/*       
      // @ts-ignore */}
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color='orange' />
        </mesh>
        <mesh position-x={2} ref={boxRef}>
          <boxGeometry />
          <meshStandardMaterial color='brown' />
        </mesh>
      </group>

      <mesh rotation-x={-Math.PI * 0.5} scale={10} position={[0, -1, 0]}>
        <planeGeometry />
        <meshStandardMaterial color='green' />
      </mesh>
    </>
  );
};
