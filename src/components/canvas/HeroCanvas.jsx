import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import HeroScene from './HeroScene';

const HeroCanvas = () => {
  return (
    <div className="fixed inset-0 z-[-10] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
