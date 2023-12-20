const countEl = document.getElementById("count");

function increment() {
  let count = parseInt(countEl.textContent);
  count++;
  countEl.textContent = count;
}

function decrement() {
  let count = parseInt(countEl.textContent);
  count--;
  countEl.textContent = count;
}
