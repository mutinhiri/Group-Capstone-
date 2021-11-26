function actorCounter(list) {
  const counter = document.getElementById('actor-count');
  counter.innerHTML = `Actor Count (${list.splice(-6).length})`;
}

module.exports = actorCounter;