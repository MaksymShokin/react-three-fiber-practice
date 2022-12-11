import { Canvas } from '@react-three/fiber';
import './App.css';
import { Ball } from './components/Ball/Ball';

const App = () => {
  return (
    <div className='App'>
      <Canvas>
        <Ball />
        {/* <mesh>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh> */}
      </Canvas>
    </div>
  );
};

export default App;
