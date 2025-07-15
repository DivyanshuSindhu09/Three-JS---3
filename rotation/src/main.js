// rotation & quaternion -> updatning one will automatic update another
// it is not vector it is euler
// jis axis mein rotate krna h us axis se object mein ek stick daal ke imagine kro
// quaternion is more mathematical way 
// lookAt -> rotates the object so that its -z faces the target you provides
// mesh.position is a vector 3

import './style.css'
import * as THREE from 'three'

const scene  = new THREE.Scene()

const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial( {color : 'gray'} )
const mesh = new THREE.Mesh(geometry, material)
mesh.scale.set(2,0.5,0.5)
// mesh.rotateY(0.5)
// both gave same results
// value of these axes is represented in radian, Pi
// 1 PI = half rotation 

// to control rotation like xyz yzx zxy

mesh.rotation.reorder('YZX')

const pi = Math.PI

mesh.rotation.y = pi/4

mesh.rotateX(pi/2)

// mesh.rotation.z = Math.PI / 2
// mesh.rotateX(Math.PI)
scene.add(mesh)

const sizes = {
  width : 800,
  height : 600
}

const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height )
camera.position.z = 3
scene.add(camera)
camera.lookAt(mesh.position)

const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
  canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene ,camera)