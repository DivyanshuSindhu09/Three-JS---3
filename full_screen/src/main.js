import * as THREE from 'three'
import './style.css'
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls'

console.log(OrbitControls)
// cursor
const cursor = {
  x: 0,
  y: 0
}

window.addEventListener('mousemove', (event) => {

  cursor.x = (event.clientX / sizes.width) - 0.5
  cursor.y =  (event.clientY / sizes.height) - 0.5
})

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color : 'red'})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
  width : 800,
  height : 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/ sizes.height)
camera.position.z = 3
scene.add(camera)

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas
})

renderer.setSize(sizes.width, sizes.height)

const controls = new OrbitControls(camera, canvas)   
controls.enableDamping = true 


const tick = () => {
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(tick)
}

tick()