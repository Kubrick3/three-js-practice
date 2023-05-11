import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Cakes from './Cakes'

function BananaCakes() {
    return (
    <Canvas camera={{ fov: 25, zoom: 0.8, position: [-30, 40, -35] } }>
      {/* <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} /> */}
      <Stage>
        <Cakes />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  );
}

export default BananaCakes;