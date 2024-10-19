import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Text, Html } from '@react-three/drei';

const Model = () => {
  // Load your GLTF model from the public folder
  const { scene, animations } = useGLTF('/untitled.gltf'); // Adjust the path to your model
  const modelRef = useRef();
  const { actions } = useAnimations(animations, modelRef);

  // Activate the model's animation
  React.useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]].play(); // Play the first available animation
    }
  }, [actions]);

  // Rotate the model continuously
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.006; // Rotate the model around the Y-axis
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1.8} position={[0, -4, 2]} />;
};

const AnimatedText = () => {
  const textRef = useRef();

  // Animate the 3D text (rotate and move it)
  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.01; // Rotate the text around the Y-axis
      textRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5; // Up and down motion
    }
  });

  return (
    <Text
      ref={textRef}
      position={[0, 1, 0]} // Position the text above the model
      fontSize={0.8}
      color="red"
      anchorX="center"
      anchorY="middle"
    >
AMOL❤️‍🔥
    </Text>
  );
};

const ModelWrapper = () => {
    return (
      <Canvas camera={{ position: [0, -20, 85], fov: 20 }}> {/* Adjusted camera position and FOV */}
        <ambientLight intensity={3.8} />
        <directionalLight intensity={10} position={[0, 0, 5]} />
        <pointLight intensity={1} position={[-10, -10, -10]} />
  
        {/* Render your loaded model */}
        <Suspense fallback={<Html><div>Loading model...</div></Html>}>
          <Model />
          <AnimatedText /> {/* 3D animated text */}
        </Suspense>
  
        <OrbitControls enablePan={true} enableZoom={true} />
      </Canvas>
    );
  };
  
export default ModelWrapper;
