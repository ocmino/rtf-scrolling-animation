
import { Canvas } from '@react-three/fiber';
import {Experience} from './Components/Experience';
import './App.css';

function App() {
  return (
    <div className="App">
      <Canvas camera={{
        fov: 5,
        position: [0, 0, 5],
      }}>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
