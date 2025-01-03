// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';

// export default function Globe({ selectedLocation }) {
//   const mountRef = useRef(null);
//   const [countryName, setCountryName] = useState('');

//   useEffect(() => {
//     // Initialize Scene, Camera, Renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       70,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Create a Sphere Geometry for the Globe
//     const geometry = new THREE.SphereGeometry(5, 32, 32);
//     const textureLoader = new THREE.TextureLoader();
//     const texture = textureLoader.load('../images/globe.png'); // Add the Earth texture image in the public folder
//     const material = new THREE.MeshBasicMaterial({ map: texture });
//     const globe = new THREE.Mesh(geometry, material);
//     scene.add(globe);

//     // Position Camera
//     camera.position.z = 10;

//     // Create a glowing line (representing a path from one country to another)
//     const materialLine = new THREE.LineBasicMaterial({
//       color: 0x00ff00,
//       opacity: 0.8,
//     });

//     let points = [
//       new THREE.Vector3(1, 0, 0), // Start point (e.g., USA)
//       new THREE.Vector3(5, 0, 0), // End point (e.g., India)
//     ];

//     const geometryLine = new THREE.BufferGeometry().setFromPoints(points);
//     const line = new THREE.Line(geometryLine, materialLine);
//     scene.add(line);

//     // Function to update the glowing line's movement based on selectedLocation
//     let timer = 0;
//     const animateLine = () => {
//       timer += 0.01;
//       if (selectedLocation) {
//         setCountryName(selectedLocation); // Change to the selected country
//       }

//       // Update the position of the second point in the line based on timer
//       const position = line.geometry.attributes.position;
//       position.setXY(1, 5 * Math.sin(timer), 5 * Math.cos(timer)); // Move line's end point dynamically
//       position.needsUpdate = true; // Mark the position attribute as needing update
//     };

//     // Animation Loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       globe.rotation.y += 0.002; // Rotate globe
//       animateLine(); // Animate line movement
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Clean up on unmount
//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//     };
//   }, [selectedLocation]);

//   return (
//     <div ref={mountRef} style={{ width: '100vw', height: '100vh', background: 'black' }}>
//       <div
//         style={{
//           position: 'absolute',
//           top: '20px',
//           left: '20px',
//           color: 'white',
//           fontSize: '24px',
//         }}
//       >
//         {countryName && <p>Moving to: {countryName}</p>}
//       </div>
//     </div>
//   );
// }
