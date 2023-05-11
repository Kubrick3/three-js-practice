import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Donut from "./Donut"

function BananaDonut() {
    return (
    <Canvas camera={{ fov: 25, zoom: 0.8 , position: [-30, 40, -35] } }>
      {/* <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} /> */}
      <Stage>
        <Donut />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  );
}

export default BananaDonut;