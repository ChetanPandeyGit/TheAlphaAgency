import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { gsap } from 'gsap';
import stat from '/assets/stats.svg'
import creative from '/assets/creativenirvana.svg'
import marketing from '/assets/marketingnirvana.svg'
import tech from '/assets/technirvana.svg'

const Nirvana = () => {
  // const svgRef = useRef();

  // const handleLoad = (group) => {
  //   gsap.to(group.rotation, { y: Math.PI * 2, duration: 4, repeat: -1, ease: 'none' });
  // };

  // const onLoad = (data) => {
  //   const { paths } = data;

  //   const group = new THREE.Group();
  //   group.scale.multiplyScalar(0.1);
  //   group.rotation.x = Math.PI;

  //   for (let i = 0; i < paths.length; i++) {
  //     const path = paths[i];

  //     const material = new THREE.MeshBasicMaterial({
  //       color: path.color,
  //       side: THREE.DoubleSide,
  //       depthWrite: false,
  //     });

  //     const shapes = path.toShapes(true);
  //     for (let j = 0; j < shapes.length; j++) {
  //       const shape = shapes[j];
  //       const geometry = new THREE.BufferGeometry(shape);
  //       const mesh = new THREE.Mesh(geometry, material);
  //       group.add(mesh);
  //     }
  //   }

  //   if (svgRef.current) {
  //     svgRef.current.add(group);
  //     handleLoad(group);
  //   }
  // };

  return (
    // <Canvas>
    //   <group ref={svgRef} position={[0, 0, 0]}>
    //     <SVGLoader onLoad={onLoad} path="/assets/stats.svg" />
    //   </group>
    // </Canvas>
    <div className="fit nir">
      <img src={stat} alt="stat" />
      <img src={creative} alt="stat" />
      <img src={marketing} alt="stat" />
      <img src={tech} alt="stat" />
    </div>
  );
};

export default Nirvana;
