import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//Scene
const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
	color: "#ffffff",
});

//to mesh ecerything together
const mesh = new THREE.Mesh(geometry, material);

// to put the mesh into the scene

scene.add(mesh);
