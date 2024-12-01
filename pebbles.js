let configuration = {
  pebbles: [[0, 0, 0]],
  clicked: [],
};

let _clickable = null;

let selected;

function eq(u, v) {
  return u[0] == v[0] && u[1] == v[1] && u[2] == v[2];
}

function has(array, v) {
  return array.filter((el) => eq(el, v)).length > 0;
}

function click(config, v) {
  if (!has(config.pebbles, v)) return config;
  if (has(config.clicked, v)) return config;
  let newConfig = JSON.parse(JSON.stringify(config));
  const neighbors = [
    [v[0] + 1, v[1], v[2]],
    [v[0], v[1] + 1, v[2]],
    [v[0], v[1], v[2] + 1],
  ];
  neighbors.forEach((n) => {
    newConfig = click(newConfig, n);
  });
  if (neighbors.some((n) => has(newConfig.pebbles, n))) {
    return config;
  }
  neighbors.forEach((n) => {
    newConfig.pebbles.push(n);
  });
  newConfig.pebbles = newConfig.pebbles.filter((u) => !eq(u, v));
  newConfig.clicked.push(v);
  return newConfig;
}

function clickable() {
  if (_clickable) return _clickable;
  _clickable = configuration.pebbles
    .filter((v) => !has(configuration.clicked, v))
    .filter((v) => {
      const newConfig = click(configuration, v);
      return newConfig != configuration;
    });
  return _clickable;
}
