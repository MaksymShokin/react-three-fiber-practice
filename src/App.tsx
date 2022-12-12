import { Canvas } from '@react-three/fiber';
import './App.css';
import { Objects } from './components/Objects/Objects';
import { CustomObject } from './components/CustomObject/CustomObject';

const App = () => {
  return (
    <div className='App'>
      <Canvas>
        <Objects />
        <CustomObject />
        {/* <mesh>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh> */}
      </Canvas>
    </div>
  );
};

export default App;
