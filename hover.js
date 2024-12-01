function distance(a, b) {
  return dist(a.x, a.y, a.z, b.x, b.y, b.z);
}

function isHovering(u, v, r) {
  let c = createVector(cam1.eyeX, cam1.eyeY, cam1.eyeZ);
  const d = distance(c, v);
  const un = u.copy().normalize();
  return distance(v, un.mult(d).add(c)) < r;
}

function getU() {
  // Pan: Cam rotation about y-axis (Left Right)
  let azimuth = -atan2(cam1.eyeZ - cam1.centerZ, cam1.eyeX - cam1.centerX);

  // Tilt: Cam rotation about z-axis (Up Down)
  let zenith = -atan2(
    cam1.eyeY - cam1.centerY,
    dist(cam1.eyeX, cam1.eyeZ, cam1.centerX, cam1.centerZ)
  );

  // f is a scaling factor (depends on canvas size and camera perspective settings)
  let f = (height * 4.3) / 5;
  let u = [-1, (mouseY - height / 2) / f, -(mouseX - width / 2) / f];

  let R = math.multiply(Rz(-zenith), Ry(azimuth));
  u = math.multiply(u, R);
  u = createVector(u._data[0], u._data[1], u._data[2]);
  return u;
}
