import React, { useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";

const PartialMoon = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new Scene();

    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;
    camera.position.y = 25;

    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#000000");
    canvasRef.current.appendChild(renderer.domElement);

    const ambientLight = new AmbientLight(0x000005);
    scene.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 10, -20);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load("/assets/moon.glb", (gltf) => {
      const moon = gltf.scene;
      moon.scale.set(5,5,5)
      scene.add(moon);

      gsap.to(moon.rotation, {
        x: -Math.PI * 2,
        duration: 50,
        repeat: -1,
        ease: "linear",
      });

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    });
  }, []);

  return <div ref={canvasRef} className="fit">
    <h1 id="alpha">THE    ALPHA    AGENCY</h1>
  </div>;
};

export default PartialMoon;
