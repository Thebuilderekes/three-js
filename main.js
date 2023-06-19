import * as THREE from "three";
import gsap from "gsap";
import { scene, camera, renderer, sizes } from "./three";
import controls from "./controls";

const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({ color: "#ffffff" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const light = new THREE.PointLight(0xfacade, 1, 100);
light.position.set(0, 10, 50);
scene.add(light);

window.addEventListener("resize", function () {
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
	renderer.render(scene, camera);
	window.requestAnimationFrame(loop);
	controls.update();
};

loop();

// gsap
const t1 = gsap.timeline({ defaults: { duration: 2 } });
t1.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
t1.fromTo("nav", { y: "-100%" }, { y: "0%" });
t1.fromTo("title", { y: "-100%" }, { y: "0%" });
