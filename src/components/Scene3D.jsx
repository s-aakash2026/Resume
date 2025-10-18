import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'

function AnimatedSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.4}
      />
    </Sphere>
  )
}

function Scene3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#ec4899" />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}

export default Scene3D