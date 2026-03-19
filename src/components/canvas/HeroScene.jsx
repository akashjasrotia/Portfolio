import { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Custom hook to track theme colors responsive to the `.light` class swap
const useThemeColors = () => {
  const [colors, setColors] = useState({
    dark: '#0a0a0a',
    light: '#f0f0f0',
    accent: '#ccff00',
    isLightMode: false
  });

  useEffect(() => {
    const updateColors = () => {
      const root = getComputedStyle(document.documentElement);
      setColors({
        dark: root.getPropertyValue('--color-dark').trim() || '#0a0a0a',
        light: root.getPropertyValue('--color-light').trim() || '#f0f0f0',
        accent: root.getPropertyValue('--color-accent').trim() || '#ccff00',
        isLightMode: document.documentElement.classList.contains('light')
      });
    };
    
    updateColors();
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          updateColors();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return colors;
};

const HeroScene = () => {
  const groupRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });
  const theme = useThemeColors();

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Mouse tracking and Scroll interaction
  useFrame(() => {
    // Smoothly interpolate mouse position
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, targetMouse.current.x, 0.05);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, targetMouse.current.y, 0.05);

    if (groupRef.current) {
      // Gentle parallax effect with mouse
      groupRef.current.position.x = mouse.current.x * 1.5;
      groupRef.current.position.y = mouse.current.y * 1.5;
      
      // Scroll interaction: rotate the group as user scrolls
      const scrollY = window.scrollY;
      groupRef.current.rotation.y = scrollY * 0.001 + mouse.current.x * 0.2;
      groupRef.current.rotation.x = scrollY * 0.0005 + mouse.current.y * 0.2;
    }
  });

  // Generate random positions for small floating accent particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 40; i++) {
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 25;
      const z = (Math.random() - 0.5) * 20;
      const scale = Math.random() * 0.2 + 0.1;
      temp.push({ position: [x, y, z], scale });
    }
    return temp;
  }, []);

  return (
    <>
      {/* Lighting for a futuristic and premium look */}
      <ambientLight intensity={0.4} color={theme.dark} />
      <directionalLight position={[10, 10, 5]} intensity={2} color={theme.accent} />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#00f0ff" />
      <pointLight position={[0, -5, 5]} intensity={0.5} color={theme.accent} />
      
      {/* Dynamic Background Stars */}
      <Stars radius={50} depth={50} count={2500} factor={4} saturation={0} fade speed={1.5} />
      
      {/* Main floating abstract objects */}
      <group ref={groupRef}>
        {/* Distorted central object */}
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <mesh position={[3, 1, -2]}>
            <torusKnotGeometry args={[1.8, 0.5, 128, 32]} />
            <MeshDistortMaterial 
              color={theme.dark} 
              envMapIntensity={1} 
              clearcoat={1} 
              clearcoatRoughness={0.1} 
              metalness={0.9} 
              roughness={0.1} 
              speed={2} 
              distort={0.4} 
              transparent={true}
              opacity={theme.isLightMode ? 0.05 : 1}
            />
          </mesh>
        </Float>
        
        {/* Wireframe secondary object */}
        <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
          <mesh position={[-4, -1, -3]}>
            <icosahedronGeometry args={[2.5, 1]} />
            <meshStandardMaterial color="#00f0ff" wireframe opacity={theme.isLightMode ? 0.05 : 0.5} transparent />
          </mesh>
        </Float>

        {/* Small accent object */}
        <Float speed={3} rotationIntensity={1.5} floatIntensity={3}>
          <mesh position={[4, -3, 1]} scale={0.6}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color={theme.accent} wireframe opacity={theme.isLightMode ? 0.05 : 0.6} transparent />
          </mesh>
        </Float>

        {/* Floating background particles */}
        {particles.map((props, i) => (
          <Float key={i} speed={Math.random() * 2 + 1} rotationIntensity={Math.random() * 2} floatIntensity={Math.random() * 2}>
            <mesh position={props.position} scale={props.scale}>
              <icosahedronGeometry args={[1, 0]} />
              <meshBasicMaterial 
                color={i % 2 === 0 ? theme.accent : '#00f0ff'} 
                opacity={theme.isLightMode ? 0.02 : 0.15} 
                transparent 
                wireframe 
              />
            </mesh>
          </Float>
        ))}
      </group>
    </>
  );
};

export default HeroScene;
