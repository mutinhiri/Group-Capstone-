function actorCounter(list) {
  const counter = document.getElementById('actor-count');
  counter.innerHTML = `Actor Count (${list.splice(-27).length})`;
}

module.exports = actorCounter;