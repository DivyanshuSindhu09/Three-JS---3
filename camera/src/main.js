import './style.css'
import * as THREE from 'three'
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls'

const canvas = document.querySelector('.webgl')

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
const material = new THREE.MeshBasicMaterial( {  color : 'green' } )
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
  width : 800,
  height : 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)



// const aspectRatio = sizes.width/ sizes.height
// const camera = new THREE.OrthographicCamera(-1*aspectRatio,1*aspectRatio,-1,1,0.1,100)
// left, right, top, bottom, near and far




// near and far parameters 
// inke beech wala object hi dikhega camere mein
// don't use extreme values
scene.add(camera)
camera.position.z = 3
// camera.position.x = 2
// camera.position.y = 2



const controls = new OrbitControls(camera, canvas)   
controls.enableDamping = true 
// smooth krne k liye damping -> update controls

const renderer = new THREE.WebGLRenderer({
  canvas
})
renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  // console.log('first')

  controls.update()
  // mesh.rotation.y = elapsedTime


  // mesh.rotation.x = elapsedTime

// updateCamera


      // camera.position.x = Math.sin(cursor.x * Math.PI * 2) *3
      // camera.position.z = Math.cos(cursor.x * Math.PI * 2) *3
      // camera.position.y = cursor.y * 9

// orbitControls


  camera.lookAt(mesh.position)


  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
