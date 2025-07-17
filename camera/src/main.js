import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial( {  color : 'green' } )
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
  width : 800,
  height : 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
scene.add(camera)
camera.position.z = 3

const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
  canvas
})
renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  // console.log('first')
  mesh.rotation.y = elapsedTime
  mesh.rotation.x = elapsedTime
  mesh.position.x = Math.sin(elapsedTime)
  mesh.position.y = Math.cos(elapsedTime)
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
