// controls.js
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { camera, renderer } from "./three";

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;

export default controls;
