function setup() {
  createCanvas(600, 600, WEBGL);
  cam1 = createCamera();
  cam1.move(100, 100, 100)
  cam1.lookAt(0,0,0)
  cam1.upY = -1;
}

function drawPebbles() {
  // get viewing direction
  const u = getU();

  clickable().forEach((v) => {
    push();
    const t = createVector(v[0], v[1], v[2]).mult(100);
    translate(t);
    if (isHovering(u, t, 40)) {
      fill(220, 0, 0);
    } else {
      fill(220);
    }
    sphere(40);
    pop();
  });

  configuration.clicked.forEach((v) => {
    push();
    const t = createVector(v[0], v[1], v[2]).mult(100);
    translate(t);
    normalMaterial();
    box(95);
    pop();
  });
}

function draw() {
  background(240);
  noStroke();

  orbitControl();

  // Lighting
  lights();
  lights();
  pointLight(200, 200, 200, -2101, -100, 360);
  pointLight(255, 255, 255, 200, -100, -360);

  // Draw 3D Coordinates
  gizmo();

  drawPebbles();
}

function mousePressed() {
  const u = getU();
  clickable().forEach((v) => {
    const t = createVector(v[0], v[1], v[2]).mult(100);
    if (isHovering(u, t, 40)) {
      const newConfiguration = click(configuration, v);
      if (newConfiguration != configuration) {
        configuration = newConfiguration;
        _clickable = null;
      }
    }
  });
}
