import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Popsicle from './Popsicle'

function BananaPop() {
    return (
    <Canvas camera={{ fov: 25, position: [-30, 40, -35] } }>
      {/* <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} /> */}
      <Stage>
        <Popsicle />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  );
}

export default BananaPop;