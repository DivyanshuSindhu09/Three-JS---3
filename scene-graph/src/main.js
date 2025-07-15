import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene()

const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial( {color : 0xff0000} )
)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial( {color : 'blue'} )
)

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial( {color : 'cyan'} )
)

cube1.position.x = 2
cube3.position.x = -2

group.position.y = 1

group.add(cube1)
group.add(cube2)
group.add(cube3)

const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

const sizes = {
  width : 800,
  height : 600
}

const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
scene.add(camera)
camera.position.z = 3

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)