import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { gsap } from "gsap/all";
import FullMoon from "./FullMoon";

const HeartSection = () => {
  const containerRef = useRef();

//   useEffect(() => {
//     const container = containerRef.current;

//     const scene = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       container.clientWidth / container.clientHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 20;

//     const ambientLight = new THREE.AmbientLight(0xffffff);
//     scene.add(ambientLight);

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(container.clientWidth, container.clientHeight);
//     container.appendChild(renderer.domElement);

//     const loader = new GLTFLoader();
//     loader.load("/assets/heart.glb", (gltf) => {
//       const heart = gltf.scene;

//       const hearts = [];

//       for (let i = 0; i < 10; i++) {
//         const clonedHeart = heart.clone();
//         hearts.push(clonedHeart);
//         scene.add(clonedHeart);
//         clonedHeart.position.set(0, 0, i * -1.5);
//         clonedHeart.scale.set(0.01, 0.01, 0.01);
//       }

//       gsap.registerPlugin();

//       const tl = gsap.timeline({ repeat: -1 });

//       tl.to(hearts, {
//         "scale.x": 1,
//         "scale.y": 1,
//         "scale.z": 1,
//         duration: 1,
//         ease: "power2.out",
//         stagger: 0.5,
//         // onComplete: () => {
//         //   const jsxComponent = <FullMoon />;
//         //   const jsxObject = new THREE.Object3D();
//         //   jsxObject.add(jsxComponent);
//         //   const lastHeart = hearts[hearts.length - 1];
//         //   lastHeart.add(jsxObject);
//         //   jsxObject.position.set(0, 0, 0);
//         // },
//       });
//     });

//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };
//     animate();
//   }, []);

  return (
    <div ref={containerRef} className="fit col">
      <h3>Every brief for us is an opportunity to</h3>
      <h2>Declutter Brand Communication</h2>
      <h2>Decipher Target Audience</h2>
      <h3>and deliver</h3>
      <h1>"BRAND LOVE"</h1>
    </div>
  );
};

export default HeartSection;
