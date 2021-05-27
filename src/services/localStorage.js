function save(ref, item) {
  localStorage.setItem(ref, JSON.stringify(item));
}

function fetch(ref) {
  const item = localStorage.getItem(ref);
  return JSON.parse(item);
}

export { save, fetch };