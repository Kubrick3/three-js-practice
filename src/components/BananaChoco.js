import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Choco from './Choco'

function BananaChoco() {
    return (
    <Canvas camera={{ fov: 25, position: [-30, 40, -35] } }>
      {/* <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} /> */}
      <Stage>
        <Choco/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  );
}

export default BananaChoco;