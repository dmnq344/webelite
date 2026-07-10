/* ============================================================
   EXPERT ISOLATION — Scène 3D « Maison thermique »
   Maison nordique procédurale, neige, coupe isolante,
   caméra chorégraphiée par le scroll (GSAP ScrollTrigger).
   ============================================================ */

import * as THREE from './vendor/three.module.js';

const canvas = document.getElementById('scene3d');
if (canvas) init(canvas);

function init(canvas) {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 680px)').matches;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch (e) {
    canvas.remove();
    return;
  }
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = !isMobile;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0a1322, 16, 46);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);

  /* ---------- Lumières ---------- */
  const hemi = new THREE.HemisphereLight(0x3a5a8c, 0x0c1220, 0.55);
  scene.add(hemi);

  // Lumière d'appoint côté caméra (lisibilité des versants enneigés)
  const fillLight = new THREE.DirectionalLight(0x5f7fae, 0.4);
  fillLight.position.set(10, 5, 12);
  scene.add(fillLight);

  const moonLight = new THREE.DirectionalLight(0x9fc4ff, 1.05);
  moonLight.position.set(-9, 13, 6);
  if (!isMobile) {
    moonLight.castShadow = true;
    moonLight.shadow.mapSize.set(1024, 1024);
    moonLight.shadow.camera.left = -12;
    moonLight.shadow.camera.right = 12;
    moonLight.shadow.camera.top = 12;
    moonLight.shadow.camera.bottom = -12;
    moonLight.shadow.camera.far = 40;
    moonLight.shadow.bias = -0.002;
  }
  scene.add(moonLight);

  // Chaleur intérieure — monte pendant la coupe isolante
  const innerLight = new THREE.PointLight(0xffab52, 0.35, 12, 1.6);
  innerLight.position.set(0, 1.6, 0);
  scene.add(innerLight);

  // Lueur chaude du porche
  const porchLight = new THREE.PointLight(0xffb668, 0.5, 6, 2);
  porchLight.position.set(0.9, 1.6, 2.1);
  scene.add(porchLight);

  /* ---------- Textures utilitaires (canvas) ---------- */
  function radialTexture(inner, outer, stops) {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    (stops || [[0, inner], [1, outer]]).forEach(([o, col]) => g.addColorStop(o, col));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }
  const softDot = radialTexture(null, null, [
    [0, 'rgba(255,255,255,1)'],
    [0.35, 'rgba(255,255,255,0.9)'],
    [1, 'rgba(255,255,255,0)'],
  ]);
  const warmGlow = radialTexture(null, null, [
    [0, 'rgba(255,190,110,0.95)'],
    [0.4, 'rgba(255,150,70,0.35)'],
    [1, 'rgba(255,140,60,0)'],
  ]);
  const coldGlow = radialTexture(null, null, [
    [0, 'rgba(230,242,255,1)'],
    [0.3, 'rgba(180,215,255,0.5)'],
    [1, 'rgba(140,190,255,0)'],
  ]);

  /* ---------- Sol enneigé ---------- */
  const groundGeo = new THREE.CircleGeometry(40, 64);
  {
    const pos = groundGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i);
      const d = Math.hypot(x, y);
      if (d > 4.5) {
        pos.setZ(i, Math.sin(x * 0.7) * Math.cos(y * 0.6) * 0.22 * Math.min(1, (d - 4.5) / 4));
      }
    }
    groundGeo.computeVertexNormals();
  }
  const ground = new THREE.Mesh(
    groundGeo,
    new THREE.MeshStandardMaterial({ color: 0xb6c7e8, roughness: 1, metalness: 0 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  /* ---------- Maison ---------- */
  const house = new THREE.Group();
  scene.add(house);

  const W = 4, D = 3, H = 2.4, BASE = 0.22;
  const ROOF_HW = 2.55, ROOF_H = 1.55, ROOF_D = 3.5;
  const wallTop = BASE + H;

  const shellMats = []; // matériaux estompés pendant la coupe

  function shellMat(opts) {
    const m = new THREE.MeshStandardMaterial(Object.assign({ transparent: true, opacity: 1 }, opts));
    shellMats.push(m);
    return m;
  }

  // Fondation
  const baseMesh = new THREE.Mesh(
    new THREE.BoxGeometry(W + 0.3, BASE, D + 0.3),
    new THREE.MeshStandardMaterial({ color: 0x2a3550, roughness: 0.95 })
  );
  baseMesh.position.y = BASE / 2;
  baseMesh.castShadow = true;
  house.add(baseMesh);

  // Murs
  const walls = new THREE.Mesh(
    new THREE.BoxGeometry(W, H, D),
    shellMat({ color: 0x3d4e78, roughness: 0.9, flatShading: true })
  );
  walls.position.y = BASE + H / 2;
  walls.castShadow = true;
  house.add(walls);

  // Pignons (triangles avant/arrière sous le toit)
  const gableShape = new THREE.Shape();
  gableShape.moveTo(-W / 2, 0);
  gableShape.lineTo(W / 2, 0);
  gableShape.lineTo(0, ROOF_H - 0.06);
  gableShape.closePath();
  const gableGeo = new THREE.ShapeGeometry(gableShape);
  const gableMat = shellMat({ color: 0x37476e, roughness: 0.9, side: THREE.DoubleSide });
  const gableF = new THREE.Mesh(gableGeo, gableMat);
  gableF.position.set(0, wallTop, D / 2 - 0.001);
  house.add(gableF);
  const gableB = gableF.clone();
  gableB.position.z = -D / 2 + 0.001;
  gableB.rotation.y = Math.PI;
  house.add(gableB);

  // Toit — prisme triangulaire
  const roofShape = new THREE.Shape();
  roofShape.moveTo(-ROOF_HW, 0);
  roofShape.lineTo(ROOF_HW, 0);
  roofShape.lineTo(0, ROOF_H);
  roofShape.closePath();
  const roofGeo = new THREE.ExtrudeGeometry(roofShape, { depth: ROOF_D, bevelEnabled: false });
  roofGeo.translate(0, 0, -ROOF_D / 2);
  const roofMat = shellMat({ color: 0x1b2440, roughness: 0.85, flatShading: true });
  const roof = new THREE.Mesh(roofGeo, roofMat);
  roof.position.y = wallTop;
  roof.castShadow = true;
  house.add(roof);

  // Neige sur les versants
  const slopeAngle = Math.atan2(ROOF_H, ROOF_HW);
  const slopeLen = Math.hypot(ROOF_HW, ROOF_H) + 0.25;
  const snowMat = shellMat({ color: 0xdde8fa, roughness: 1, flatShading: true });
  [-1, 1].forEach((side) => {
    const slabGeo = new THREE.BoxGeometry(slopeLen, 0.12, ROOF_D + 0.2);
    slabGeo.translate(0, 0.1, 0);
    const slab = new THREE.Mesh(slabGeo, snowMat);
    slab.rotation.z = side * slopeAngle;
    slab.position.set(-side * ROOF_HW / 2, wallTop + ROOF_H / 2, 0);
    slab.castShadow = true;
    house.add(slab);
  });

  // Cheminée + capuchon de neige
  const chimney = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 1.5, 0.5),
    shellMat({ color: 0x53405c, roughness: 0.95 })
  );
  chimney.position.set(1.25, wallTop + ROOF_H * 0.55 + 0.55, -0.6);
  chimney.castShadow = true;
  house.add(chimney);
  const chimneyCap = new THREE.Mesh(
    new THREE.BoxGeometry(0.6, 0.1, 0.6),
    snowMat
  );
  chimneyCap.position.copy(chimney.position).y += 0.8;
  house.add(chimneyCap);

  // Porte + fenêtres émissives
  const warmWinMat = new THREE.MeshBasicMaterial({ color: 0xffc069 });
  const doorMat = new THREE.MeshStandardMaterial({ color: 0x8a4f2d, roughness: 0.7 });

  const door = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 1.28), doorMat);
  door.position.set(0.9, BASE + 0.64, D / 2 + 0.012);
  house.add(door);

  const windowGlows = [];
  function addWindow(wdt, hgt, x, y, z, ry) {
    const win = new THREE.Mesh(new THREE.PlaneGeometry(wdt, hgt), warmWinMat);
    win.position.set(x, y, z);
    win.rotation.y = ry;
    house.add(win);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: warmGlow, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.55, fog: false
    }));
    glow.scale.setScalar(Math.max(wdt, hgt) * 2.4);
    glow.position.set(x, y, z).add(new THREE.Vector3(Math.sin(ry) * 0.25, 0, Math.cos(ry) * 0.25));
    house.add(glow);
    windowGlows.push(glow.material);
  }
  addWindow(0.65, 0.8, -1.0, BASE + 1.35, D / 2 + 0.012, 0);
  addWindow(0.5, 0.62, -0.05, BASE + 1.45, D / 2 + 0.012, 0);
  addWindow(0.7, 0.8, W / 2 + 0.012, BASE + 1.4, -0.4, Math.PI / 2);
  addWindow(0.7, 0.8, -W / 2 - 0.012, BASE + 1.4, 0.5, -Math.PI / 2);
  // Œil-de-bœuf du pignon
  const gableWin = new THREE.Mesh(new THREE.CircleGeometry(0.17, 20), warmWinMat);
  gableWin.position.set(0, wallTop + 0.62, D / 2 + 0.014);
  house.add(gableWin);

  /* ---------- Cœur isolant (révélé par la coupe) ---------- */
  const insulationMat = new THREE.MeshStandardMaterial({
    color: 0xff8a3c, emissive: 0xff7a2e, emissiveIntensity: 1.4,
    transparent: true, opacity: 0, roughness: 0.6,
  });
  const insulation = new THREE.Mesh(new THREE.BoxGeometry(W - 0.35, H - 0.25, D - 0.35), insulationMat);
  insulation.position.y = BASE + H / 2;
  house.add(insulation);

  const atticShape = new THREE.Shape();
  atticShape.moveTo(-ROOF_HW + 0.5, 0);
  atticShape.lineTo(ROOF_HW - 0.5, 0);
  atticShape.lineTo(0, ROOF_H - 0.42);
  atticShape.closePath();
  const atticGeo = new THREE.ExtrudeGeometry(atticShape, { depth: D - 0.5, bevelEnabled: false });
  atticGeo.translate(0, 0, -(D - 0.5) / 2);
  const attic = new THREE.Mesh(atticGeo, insulationMat);
  attic.position.y = wallTop + 0.02;
  house.add(attic);

  // Ossature (montants de bois)
  const studGroup = new THREE.Group();
  const studMat = new THREE.MeshStandardMaterial({
    color: 0xd9a05a, transparent: true, opacity: 0, roughness: 0.8,
  });
  const studGeo = new THREE.BoxGeometry(0.07, H, 0.07);
  for (let x = -W / 2 + 0.2; x <= W / 2 - 0.1; x += 0.62) {
    [-1, 1].forEach((s) => {
      const stud = new THREE.Mesh(studGeo, studMat);
      stud.position.set(x, BASE + H / 2, s * (D / 2 - 0.06));
      studGroup.add(stud);
    });
  }
  for (let z = -D / 2 + 0.55; z <= D / 2 - 0.3; z += 0.62) {
    [-1, 1].forEach((s) => {
      const stud = new THREE.Mesh(studGeo, studMat);
      stud.position.set(s * (W / 2 - 0.06), BASE + H / 2, z);
      studGroup.add(stud);
    });
  }
  house.add(studGroup);

  /* ---------- Fumée de cheminée ---------- */
  const puffs = [];
  for (let i = 0; i < 7; i++) {
    const p = new THREE.Sprite(new THREE.SpriteMaterial({
      map: softDot, color: 0xbcc8de, transparent: true, opacity: 0, depthWrite: false,
    }));
    p.userData.seed = Math.random() * 100;
    scene.add(p);
    puffs.push(p);
  }

  /* ---------- Sapins ---------- */
  const treeMat = new THREE.MeshStandardMaterial({ color: 0x15293d, roughness: 0.95, flatShading: true });
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x33261e, roughness: 1 });
  function makeTree(scale) {
    const t = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.11, 0.5, 6), trunkMat);
    trunk.position.y = 0.25;
    t.add(trunk);
    [[0.85, 1.15, 0.9], [0.62, 0.95, 1.55], [0.4, 0.78, 2.1]].forEach(([r, h, y]) => {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), treeMat);
      cone.position.y = y;
      cone.castShadow = true;
      t.add(cone);
    });
    t.scale.setScalar(scale);
    return t;
  }
  const treeSpots = [
    [-6.5, -3.5, 1.4], [-8.5, 1.5, 1.7], [-5.5, 4.5, 1.1], [7.5, -2.5, 1.5],
    [9, 2.5, 1.9], [6, 5, 1.2], [-11, -6, 2.1], [11.5, -6.5, 1.8],
    [-4, -8, 1.3], [4.5, -9, 1.6], [13, 6, 2.2], [-13, 5.5, 2.0],
  ];
  treeSpots.forEach(([x, z, s]) => {
    const tree = makeTree(s);
    tree.position.set(x, 0, z);
    tree.rotation.y = (x * 7 + z * 13) % Math.PI;
    scene.add(tree);
  });

  /* ---------- Lampadaire chaleureux ---------- */
  const lamp = new THREE.Group();
  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.035, 0.05, 2.3, 8),
    new THREE.MeshStandardMaterial({ color: 0x232c42, roughness: 0.8 })
  );
  pole.position.y = 1.15;
  lamp.add(pole);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 10), new THREE.MeshBasicMaterial({ color: 0xffd9a0 }));
  bulb.position.y = 2.35;
  lamp.add(bulb);
  const lampGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: warmGlow, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.8, fog: false,
  }));
  lampGlow.scale.setScalar(1.7);
  lampGlow.position.y = 2.35;
  lamp.add(lampGlow);
  const lampLight = new THREE.PointLight(0xffc887, 0.7, 7, 2);
  lampLight.position.y = 2.3;
  lamp.add(lampLight);
  lamp.position.set(5.9, 0, 1.3);
  scene.add(lamp);

  /* ---------- Lune + étoiles ---------- */
  const moon = new THREE.Sprite(new THREE.SpriteMaterial({
    map: coldGlow, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.95, fog: false,
  }));
  moon.scale.setScalar(8);
  moon.position.set(-44, 26, -20);
  scene.add(moon);
  const moonHalo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: coldGlow, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.17, fog: false,
  }));
  moonHalo.scale.setScalar(20);
  moonHalo.position.copy(moon.position);
  scene.add(moonHalo);

  {
    const starCount = 260;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 40 + Math.random() * 50;
      starPos[i * 3] = Math.cos(theta) * r;
      starPos[i * 3 + 1] = 8 + Math.random() * 45;
      starPos[i * 3 + 2] = Math.sin(theta) * r;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
      map: softDot, color: 0xcfe0ff, size: 0.5, transparent: true, opacity: 0.75,
      depthWrite: false, fog: false, sizeAttenuation: true,
    }));
    scene.add(stars);
  }

  /* ---------- Neige qui tombe ---------- */
  const SNOW_N = isMobile ? 550 : 1400;
  const snowPos = new Float32Array(SNOW_N * 3);
  const snowVel = new Float32Array(SNOW_N);
  const snowPhase = new Float32Array(SNOW_N);
  for (let i = 0; i < SNOW_N; i++) {
    snowPos[i * 3] = (Math.random() - 0.5) * 44;
    snowPos[i * 3 + 1] = Math.random() * 18;
    snowPos[i * 3 + 2] = (Math.random() - 0.5) * 44;
    snowVel[i] = 0.7 + Math.random() * 1.4;
    snowPhase[i] = Math.random() * Math.PI * 2;
  }
  const snowGeo = new THREE.BufferGeometry();
  snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
  const snow = new THREE.Points(snowGeo, new THREE.PointsMaterial({
    map: softDot, color: 0xeaf2ff, size: 0.11, transparent: true, opacity: 0.85,
    depthWrite: false, sizeAttenuation: true,
  }));
  scene.add(snow);

  /* ---------- État piloté par le scroll ---------- */
  const view = {
    x: 7.3, y: 3.1, z: 10.9,     // position caméra
    tx: -3.1, ty: 1.5, tz: 0,    // cible du regard
    cut: 0,                      // coupe isolante 0..1
    glow: 0,                     // surcroît de chaleur (CTA)
  };
  const lookAt = new THREE.Vector3();
  const mouse = { x: 0, y: 0, cx: 0, cy: 0 };

  // En portrait, on recule la caméra pour garder la maison entière et discrète
  let aspectZoom = 1;
  function computeAspectZoom() {
    const a = window.innerWidth / window.innerHeight;
    aspectZoom = a < 0.65 ? 1.75 : a < 0.9 ? 1.45 : a < 1.2 ? 1.2 : 1;
  }
  computeAspectZoom();

  function applyView() {
    camera.position.set(
      view.x * aspectZoom + mouse.cx * 0.55,
      view.y + (aspectZoom - 1) * 1.4 + mouse.cy * 0.3,
      view.z * aspectZoom
    );
    lookAt.set(view.tx, view.ty, view.tz);
    camera.lookAt(lookAt);

    const c = view.cut;
    shellMats.forEach((m) => {
      m.opacity = 1 - c * 0.94;
      m.depthWrite = m.opacity > 0.7;
    });
    insulationMat.opacity = c;
    insulationMat.emissiveIntensity = 1.1 + c * 1.3 + view.glow * 0.6;
    studMat.opacity = c * 0.95;
    innerLight.intensity = 0.35 + c * 2.6;
    porchLight.intensity = 0.5 + view.glow * 0.9;
    windowGlows.forEach((g) => { g.opacity = 0.55 + view.glow * 0.35; });
  }

  /* ---------- Chorégraphie du scroll ---------- */
  const KEYFRAMES = [
    { sel: '#services',     v: { x: -6.8, y: 3.5, z: 7.8,  tx: 0,    ty: 1.5, tz: 0,    cut: 0, glow: 0 } },
    { sel: '#thermique',    v: { x: 2.7,  y: 2.3, z: 7.6,  tx: -1.0, ty: 1.4, tz: 0,    cut: 1, glow: 0 } },
    { sel: '#processus',    v: { x: 0.6,  y: 10.4, z: 5.2, tx: 0,    ty: 1.0, tz: -0.5, cut: 0, glow: 0 } },
    { sel: '#realisations', v: { x: -9.6, y: 4.6, z: 11.0, tx: 0,    ty: 1.6, tz: 0,    cut: 0, glow: 0 } },
    { sel: '#soumission',   v: { x: 0.2,  y: 2.5, z: 10.2, tx: 0,    ty: 1.7, tz: 0,    cut: 0, glow: 1 } },
  ];

  function setupScroll() {
    if (!(window.gsap && window.ScrollTrigger)) return;
    window.gsap.registerPlugin(window.ScrollTrigger);

    KEYFRAMES.forEach(({ sel, v }) => {
      const el = document.querySelector(sel);
      if (!el) return;
      window.gsap.to(view, {
        ...v,
        ease: 'none',
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'top 18%',
          scrub: 0.9,
        },
      });
    });

    // Entrée en scène au chargement
    window.gsap.from(view, {
      z: view.z + 3.2, y: view.y + 1.1, duration: 2.2, ease: 'power3.out',
    });
  }

  /* ---------- Souris (parallaxe) ---------- */
  if (!isMobile && !prefersReduced) {
    window.addEventListener('pointermove', (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  /* ---------- Boucle ---------- */
  const clock = new THREE.Clock();
  let paused = false;
  document.addEventListener('visibilitychange', () => { paused = document.hidden; });

  function tick() {
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    // Neige
    const pos = snowGeo.attributes.position.array;
    for (let i = 0; i < SNOW_N; i++) {
      pos[i * 3 + 1] -= snowVel[i] * dt;
      pos[i * 3] += (Math.sin(t * 0.7 + snowPhase[i]) * 0.35 + 0.18) * dt;
      if (pos[i * 3 + 1] < 0) {
        pos[i * 3 + 1] = 18;
        pos[i * 3] = (Math.random() - 0.5) * 44;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 44;
      }
      if (pos[i * 3] > 22) pos[i * 3] = -22;
    }
    snowGeo.attributes.position.needsUpdate = true;

    // Fumée
    puffs.forEach((p, i) => {
      const cycle = ((t * 0.28 + i / puffs.length) % 1);
      p.position.set(
        chimney.position.x + Math.sin(t * 0.6 + p.userData.seed) * 0.22 + cycle * 0.5,
        chimney.position.y + 0.9 + cycle * 2.6,
        chimney.position.z + Math.cos(t * 0.5 + p.userData.seed) * 0.18
      );
      const s = 0.35 + cycle * 1.1;
      p.scale.setScalar(s);
      p.material.opacity = 0.3 * Math.sin(cycle * Math.PI) * (1 - view.cut * 0.6);
    });

    // Scintillement des fenêtres + halo lampadaire
    warmWinMat.color.setHSL(0.085, 1, 0.66 + Math.sin(t * 2.3) * 0.02);
    lampGlow.material.opacity = 0.72 + Math.sin(t * 3.1) * 0.08;

    // Parallaxe souris (lissée)
    mouse.cx += (mouse.x - mouse.cx) * 0.05;
    mouse.cy += (mouse.y - mouse.cy) * 0.05;

    applyView();
    renderer.render(scene, camera);
  }

  function loop() {
    if (!paused) tick();
    requestAnimationFrame(loop);
  }

  /* ---------- Resize ---------- */
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    computeAspectZoom();
  });

  /* ---------- Démarrage ---------- */
  applyView();
  if (prefersReduced) {
    // Rendu statique, respect du mouvement réduit
    tick();
    renderer.render(scene, camera);
  } else {
    setupScroll();
    loop();
  }
}
