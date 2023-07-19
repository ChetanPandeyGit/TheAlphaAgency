import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { gsap } from "gsap";

const HalfAndBrain = () => {
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
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(
      "/assets/moonhalf.glb",
      (moonGltf) => {
        const moon = moonGltf.scene;
        moon.rotation.y = Math.PI / 2; 
        scene.add(moon);

        const tl = gsap.timeline({ onComplete: showBrains });
        tl.to(moon.rotation, {
          y: 1.5 * Math.PI,
          duration: 2,
          ease: "linear",
        });
        tl.to(moon.scale, {
          x: 0.001,
          y: 0.001,
          z: 0.001,
          duration: 0.1,
          ease: 'power2.inOut',
        });
      });

    const leftBrainLoader = new GLTFLoader();
    const rightBrainLoader = new GLTFLoader();

    function showBrains() {
      leftBrainLoader.load(
        "/assets/brainleft.glb",
        (leftBrainGltf) => {
          const leftBrain = leftBrainGltf.scene;
           leftBrain.rotation.y = Math.PI; 
           convertToWireframe(leftBrain)
          scene.add(leftBrain);
          leftBrain.scale.set(0.01, 0.01, 0.01);
          gsap.to(leftBrain.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "power2.out",
          });
        });

      rightBrainLoader.load(
        "/assets/brainright.glb",
        (rightBrainGltf) => {
          const rightBrain = rightBrainGltf.scene;
           rightBrain.position.x = -1;
           convertToWireframe(rightBrain)
          scene.add(rightBrain);
          rightBrain.scale.set(0.01, 0.01, 0.01);
          gsap.to(rightBrain.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "power2.out",
          });
        });
    }

    function convertToWireframe(object) {
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const wireframeGeometry = new THREE.WireframeGeometry(child.geometry);
          const wireframeMaterial = new THREE.LineBasicMaterial({
            color: 0x000000,
          });
          const wireframe = new THREE.LineSegments(
            wireframeGeometry,
            wireframeMaterial
          );
          wireframe.renderOrder = 1;
          child.add(wireframe);
        }
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <div ref={containerRef} className="fit" >
       <h3 id="mix">we are a mix of right brain - left brain</h3>
      <h1 id="solution">"SOLUTIONISTS"</h1>
      <h3 id="who">who revel in problems & challenges </h3>
      <h3 id="as">as therein lies the way to nirvana for our soul.</h3>
  </div>;
};

export default HalfAndBrain;
