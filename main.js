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

//Sizes
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

//Camera
//camera with field of view 45, and aspect ratio 800/600 clipping point of between 0.1 and 100
const camera = new THREE.PerspectiveCamera(
	45,
	sizes.width / sizes.height,
	0.1,
	100
);
//this makes sure that the camerais moved so that the spereand the scene do not overlap. the higher the position vaue, the clos the camera and the larger the sphere appears.
camera.position.z = 20;
scene.add(camera);

//light
const light = new THREE.PointLight(0xff0000, 1, 100);
// this is to set the position of the light along the x, y and z axis
light.position.set(0, 10, 10);
scene.add(light);

//renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//Resize
window.addEventListener("resize", function () {
	console.log(this.window.innerWidth);
	//update sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// update camera

	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
	renderer.render(scene, camera);
	window.requestAnimationFrame(loop);
};

loop();
