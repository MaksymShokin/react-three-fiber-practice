import { DoubleSide } from 'three';

const verticesCount = 10 * 3;

const positions = new Float32Array(verticesCount * 3);

for (let i = 0; i < verticesCount; i++) {
  positions[i] = (Math.random() - 0.5) * 3;
}

export const CustomObject = () => {
  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshBasicMaterial color='red' side={DoubleSide} />
    </mesh>
  );
};
