let scene, camera, renderer;

const init = () => {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    45,
    30000
  );
  camera.position.set(-900, -200, -900);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  let controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.minDistance = 500;
  controls.maxDistance = 1500;
  let array = [];
  let texture_ngx = new THREE.TextureLoader().load("negz.jpg");
  let texture_ngz = new THREE.TextureLoader().load("posz.jpg");
  let texture_ngup = new THREE.TextureLoader().load("posy.jpg");
  let texture_ngdn = new THREE.TextureLoader().load("negy.jpg");
  let texture_ngrt = new THREE.TextureLoader().load("posx.jpg");
  let texture_nglt = new THREE.TextureLoader().load("negx.jpg");

  array.push(new THREE.MeshBasicMaterial({ map: texture_ngx }));
  array.push(new THREE.MeshBasicMaterial({ map: texture_ngz }));
  array.push(new THREE.MeshBasicMaterial({ map: texture_ngup }));
  array.push(new THREE.MeshBasicMaterial({ map: texture_ngdn }));
  array.push(new THREE.MeshBasicMaterial({ map: texture_ngrt }));
  array.push(new THREE.MeshBasicMaterial({ map: texture_nglt }));

  for (let i = 0; i < 6; i++) array[i].side = THREE.BackSide;
  let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
  let skybox = new THREE.Mesh(skyboxGeo, array);
  scene.add(skybox);
  animate();
};

const animate = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

init();
