import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { gsap } from "gsap";

const FullMoon = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const loader = new GLTFLoader();
    loader.load(
      "/assets/moon.glb",
      (gltf) => {
        const moon = gltf.scene;
        scene.add(moon);

        const tl = gsap.timeline({ repeat: -1 });
        tl.to(moon.rotation, {
          y: Math.PI * 2,
          duration: 50,
          ease: "linear",
        });
      } );

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div ref={containerRef} className="fit">
      <h1 id="attaindigital">ATTAIN DIGITAL </h1>
      <br />
      <h1 id="nirvana">NIRVANA</h1>
    </div>
  );
};

export default FullMoon;
