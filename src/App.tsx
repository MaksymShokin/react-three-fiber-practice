import { Canvas } from '@react-three/fiber';
import './App.css';
import { Objects } from './components/Objects/Objects';
import { CustomObject } from './components/CustomObject/CustomObject';
import { Leva } from 'leva';

const App = () => {
  return (
    <div className='App'>
      <Leva collapsed />
      <Canvas
      // defaults
      // dpr={[1, 2]}
      // gl={{
      //   antialias: true
      // }}
      // camera={{
      //   fov: 45,
      //   near: 0.1,
      //   far: 200,
      //   position: [3, 2, 6]
      // }}
      >
        <Objects />
        {/* <CustomObject /> */}
        {/* <mesh>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh> */}
      </Canvas>
    </div>
  );
};

export default App;
