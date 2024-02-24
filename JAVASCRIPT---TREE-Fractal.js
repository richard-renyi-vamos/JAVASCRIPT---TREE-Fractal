const canvas = document.getElementById('treeCanvas');
const ctx = canvas.getContext('2d');

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function drawTree(x1, y1, angle, depth, branchLength) {
  if (depth === 0) return;

  const x2 = x1 + Math.cos(angle * Math.PI / 180) * depth * branchLength;
  const y2 = y1 + Math.sin(angle * Math.PI / 180) * depth * branchLength;

  drawLine(x1, y1, x2, y2);

  drawTree(x2, y2, angle - document.getElementById('angle').value, depth - 1, branchLength * 0.7);
  drawTree(x2, y2, angle + document.getElementById('angle').value, depth - 1, branchLength * 0.7);
}

function generateTree() {
  clearCanvas();
  const depth = document.getElementById('depth').value;
  const angle = 90;
  const length = document.getElementById('length').value;
  drawTree(canvas.width / 2, canvas.height, -90, depth, length / depth);
}

generateTree();
