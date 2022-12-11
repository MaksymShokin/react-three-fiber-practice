export const Ball = () => {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial color='red' wireframe />
    </mesh>
  );
};
