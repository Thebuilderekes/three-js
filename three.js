// three.js
import * as THREE from "three";

const canvas = document.querySelector("canvas");
export const title = document.querySelector(".title");
export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	0.1,
	100
);

camera.position.z = 20;
scene.add(camera);

export const renderer = new THREE.WebGLRenderer({ canvas });
export const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);
