import { Canvas } from '@react-three/fiber';
import './App.css';
import { Objects } from './components/Objects/Objects';
import { CustomObject } from './components/CustomObject/CustomObject';
import { Leva } from 'leva';
import { Color } from 'three';

const App = () => {
  return (
    <div className='App'>
      <Leva collapsed />
      <Canvas
        onCreated={state => {
          // ways to set background color
          // state.scene.background = new Color('green')
          // state.gl.setClearColor('orange')
        }}
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
        <color args={['ivory']} attach='background' />
      </Canvas>
    </div>
  );
};

export default App;
