import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Banana from "./Banana";

function BananaDesc() {
  return (
    <Canvas camera={{ fov: 25, zoom: 0.8 , position: [-30, 40, -35] }}>
      {/* <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} /> */}
      <Stage>
        <Banana args={[1.5,1.5,1.5]}/>
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default BananaDesc;
