import './style.css'
import  * as THREE from 'three'

// the purpose of requestAnimationFrame is to call the function provided on the next frame 

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial( {color : 'red'} )
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
  width : 800,
  height : 600 
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas
})

renderer.setSize(sizes.width, sizes.height)
// adaption to the frame rate

let time = Date.now()
// another approach
const clock = new THREE.Clock()


// animations 

const tick = () => {
  const currentTime = Date.now()
  const deltaTime = currentTime - time
  time = currentTime

  // console.log(deltaTime)
  

  const elapsedTime = clock.getElapsedTime()
  // console.log(elapsedTime)

  // update objects
  // mesh.position.x += 0.001 * deltaTime


  // mesh.position.y = Math.sin(elapsedTime)
  // mesh.position.x = Math.cos(elapsedTime)

  camera.position.y = Math.sin(elapsedTime)
  camera.position.x = Math.cos(elapsedTime)
  camera.lookAt(mesh.position)
  

  // renderer
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()