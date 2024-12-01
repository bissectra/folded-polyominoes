// Rotation matrix for rotation about x-axis
function Rx(th) {
  return math.matrix([
    [1, 0, 0],
    [0, cos(th), -sin(th)],
    [0, sin(th), cos(th)],
  ]);
}

// Rotation matrix for rotation about y-axis
function Ry(th) {
  return math.matrix([
    [cos(th), 0, -sin(th)],
    [0, 1, 0],
    [sin(th), 0, cos(th)],
  ]);
}

// Rotation matrix for rotation about z-axis
function Rz(th) {
  return math.matrix([
    [cos(th), sin(th), 0],
    [-sin(th), cos(th), 0],
    [0, 0, 1],
  ]);
}
