const fs = require('fs');
const path = require('path');
const THREE = require('three');
const { STLLoader } = require('three-stdlib');
const { GLTFExporter } = require('three-stdlib');

// Polyfill DOM globals for Three.js Node environment
if (typeof global.window === 'undefined') {
  global.window = global;
}

const stlDir = path.join(__dirname, 'models', 'meshes_rs');
const stlLoader = new STLLoader();

function loadSTL(filename) {
  const filePath = path.join(stlDir, filename);
  const buffer = fs.readFileSync(filePath);
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  const geometry = stlLoader.parse(arrayBuffer);
  geometry.computeVertexNormals();
  return geometry;
}

// 1. Official Brand Materials
const cncMetalMat = new THREE.MeshStandardMaterial({
  name: 'CNCMetal',
  color: 0xE2E8F0,
  roughness: 0.25,
  metalness: 0.72
});
const motorMat = new THREE.MeshStandardMaterial({
  name: 'MotorBlack',
  color: 0x232323,
  roughness: 0.32,
  metalness: 0.75
});
const baseBlackMat = new THREE.MeshStandardMaterial({
  name: 'BaseBlack',
  color: 0x232323,
  roughness: 0.32,
  metalness: 0.75
});
const badgeYellowMat = new THREE.MeshStandardMaterial({
  name: 'SeeedLimeGreen',
  color: 0x99DA00,
  roughness: 0.35,
  metalness: 0.0
});

// 2. Build Hierarchy
const rootGroup = new THREE.Group();
rootGroup.name = 'ReBotArmRoot';

const baseLinkGroup = new THREE.Group();
baseLinkGroup.name = 'base_link';
rootGroup.add(baseLinkGroup);

const j1Node = new THREE.Group();
j1Node.name = 'joint1_node';
j1Node.position.set(-0.0003428, -0.0009868, 0.075);
baseLinkGroup.add(j1Node);

const j1AxisGroup = new THREE.Group();
j1AxisGroup.name = 'joint1_axis';
j1Node.add(j1AxisGroup);

const link1Group = new THREE.Group();
link1Group.name = 'link1';
j1AxisGroup.add(link1Group);

const j2Node = new THREE.Group();
j2Node.name = 'joint2_node';
j2Node.position.set(0.020343, 0.027237, 0.07);
j2Node.quaternion.set(-0.7071081, 0, 0, 0.7071055);
link1Group.add(j2Node);

const j2AxisGroup = new THREE.Group();
j2AxisGroup.name = 'joint2_axis';
j2Node.add(j2AxisGroup);

const link2Group = new THREE.Group();
link2Group.name = 'link2';
j2AxisGroup.add(link2Group);

const j3Node = new THREE.Group();
j3Node.name = 'joint3_node';
j3Node.position.set(-0.236, 0, 0);
link2Group.add(j3Node);

const j3AxisGroup = new THREE.Group();
j3AxisGroup.name = 'joint3_axis';
j3Node.add(j3AxisGroup);

const link3Group = new THREE.Group();
link3Group.name = 'link3';
j3AxisGroup.add(link3Group);

const j4Node = new THREE.Group();
j4Node.name = 'joint4_node';
j4Node.position.set(0.228, -0.072746, 0.0045);
link3Group.add(j4Node);

const j4AxisGroup = new THREE.Group();
j4AxisGroup.name = 'joint4_axis';
j4Node.add(j4AxisGroup);

const link4Group = new THREE.Group();
link4Group.name = 'link4';
j4AxisGroup.add(link4Group);

const j5Node = new THREE.Group();
j5Node.name = 'joint5_node';
j5Node.position.set(0.087, -0.048, -0.03075);
j5Node.quaternion.set(-0.7071081, 0, 0, 0.7071055);
link4Group.add(j5Node);

const j5AxisGroup = new THREE.Group();
j5AxisGroup.name = 'joint5_axis';
j5Node.add(j5AxisGroup);

const link5Group = new THREE.Group();
link5Group.name = 'link5';
j5AxisGroup.add(link5Group);

const j6Node = new THREE.Group();
j6Node.name = 'joint6_node';
j6Node.position.set(0.0365, 0, 0.048);
j6Node.quaternion.set(0, 0.7071081, 0, 0.7071055);
link5Group.add(j6Node);

const j6AxisGroup = new THREE.Group();
j6AxisGroup.name = 'joint6_axis';
j6Node.add(j6AxisGroup);

const link6Group = new THREE.Group();
link6Group.name = 'link6';
j6AxisGroup.add(link6Group);

const gripperEndNode = new THREE.Group();
gripperEndNode.name = 'gripper_end_node';
gripperEndNode.position.set(0, 0, 0.16621);
gripperEndNode.quaternion.set(0.7071055, 0.0000026, 0.7071081, -0.0000026);
link6Group.add(gripperEndNode);

const gripperEndGroup = new THREE.Group();
gripperEndGroup.name = 'gripper_end';
gripperEndNode.add(gripperEndGroup);

const gripperLeftNode = new THREE.Group();
gripperLeftNode.name = 'gripper_left_node';
gripperLeftNode.position.set(-0.041939, -0.0000734, 0);
gripperLeftNode.quaternion.set(0.5, -0.5, 0.5000018, 0.4999982);
gripperEndGroup.add(gripperLeftNode);

const gripperLeftGroup = new THREE.Group();
gripperLeftGroup.name = 'gripper_left';
gripperLeftNode.add(gripperLeftGroup);

const gripperRightNode = new THREE.Group();
gripperRightNode.name = 'gripper_right_node';
gripperRightNode.position.set(-0.041939, 0.0000734, 0);
gripperRightNode.quaternion.set(-0.5, -0.5, -0.5000018, 0.4999982);
gripperEndGroup.add(gripperRightNode);

const gripperRightGroup = new THREE.Group();
gripperRightGroup.name = 'gripper_right';
gripperRightNode.add(gripperRightGroup);

function addMesh(filename, material, parentGroup) {
  console.log(`Loading STL: ${filename}...`);
  const geo = loadSTL(filename);
  const mesh = new THREE.Mesh(geo, material);
  mesh.name = path.basename(filename, '.STL');
  parentGroup.add(mesh);
}

// Load and attach meshes
addMesh('base_link.STL', baseBlackMat, baseLinkGroup);
addMesh('link1.STL', cncMetalMat, link1Group);

addMesh('motor_2_3.STL', motorMat, link2Group);
addMesh('cnc2.STL', cncMetalMat, link2Group);
addMesh('pla2_black.STL', motorMat, link2Group);
addMesh('pla2_green.STL', badgeYellowMat, link2Group);

addMesh('cnc3.STL', cncMetalMat, link3Group);
addMesh('motor_4.STL', motorMat, link3Group);
addMesh('pla3_black_without_seeed_badge.STL', motorMat, link3Group);
addMesh('pla3_green.STL', badgeYellowMat, link3Group);

addMesh('cnc4.STL', cncMetalMat, link4Group);
addMesh('motor_5.STL', motorMat, link4Group);

addMesh('cnc5.STL', cncMetalMat, link5Group);
addMesh('motor_6.STL', motorMat, link5Group);
addMesh('pla5_green.STL', badgeYellowMat, link5Group);
addMesh('link6.STL', motorMat, link6Group);

addMesh('pla7_green.STL', badgeYellowMat, gripperEndGroup);
addMesh('cnc7.STL', cncMetalMat, gripperEndGroup);
addMesh('motor_7.STL', motorMat, gripperEndGroup);

addMesh('cnc_left.STL', cncMetalMat, gripperLeftGroup);
addMesh('pla_left.STL', badgeYellowMat, gripperLeftGroup);
addMesh('cnc_right.STL', cncMetalMat, gripperRightGroup);
addMesh('pla_right.STL', badgeYellowMat, gripperRightGroup);

console.log('Exporting scene to GLB...');
const exporter = new GLTFExporter();
exporter.parse(
  rootGroup,
  (gltf) => {
    const buf = Buffer.from(gltf);
    const outputPath1 = path.join(__dirname, 'models', 'rebot_arm.glb');
    const outputPath2 = path.join(__dirname, 'models', 'rebot_arm_simple.glb');
    fs.writeFileSync(outputPath1, buf);
    fs.writeFileSync(outputPath2, buf);
    console.log(`Successfully generated ${outputPath1} (${(buf.length / 1024 / 1024).toFixed(2)} MB)!`);
    console.log(`Successfully generated ${outputPath2} (${(buf.length / 1024 / 1024).toFixed(2)} MB)!`);
  },
  (err) => {
    console.error('Error exporting GLB:', err);
  },
  { binary: true }
);

