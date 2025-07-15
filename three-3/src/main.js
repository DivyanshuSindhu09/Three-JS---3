import './style.css'
import * as THREE from 'three'
// objects -> position, scale, rotation, quaternion ; camera, mesh are inherited from object
// we can change all these before render but not after render

console.log(THREE)

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial( {color : 0xff0000} )
const mesh = new THREE.Mesh(geometry, material)
// scale
mesh.scale.x=2
mesh.scale.y=1/2
mesh.scale.z = 1/2

// mesh.scale.set(1,1,1)


// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1

// sari positions ek sath update krne ke liye
mesh.position.set(0.7, -0.6, 1)

scene.add(mesh)

// Axes helper
const axesHelper = new THREE.AxesHelper(3)
// 3 -> length of axes
scene.add(axesHelper)

const sizes = {
  width : 800,
  height : 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
scene.add(camera)
camera.position.z = 3

const canvas = document.querySelector('.webgl')
console.log(canvas)

const renderer = new THREE.WebGLRenderer({
  canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


// distance between center of scene and object postition
console.log(mesh.position.length())

// distance between camera and object
console.log(mesh.position.distanceTo(camera.position))

// we can check distance form any random vector too
console.log(mesh.position.distanceTo(new THREE.Vector3(1,2,3)))

mesh.position.normalize()
// normalize will reduce the vector length to 1
console.log(mesh.position.length())
