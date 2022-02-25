// create Canva

const canvas = document.querySelector("#tetris-canvas");
const context = canvas.getContext("2d");

context.scale(20, 20);

const createTBricksInMatrix = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0],
];

function drawBricks() {
  drawMatrix(player.matrix, player.position);
  context.fillStyle = "#0000";
  context.fillRect(0, 0, canvas.Width, canvas.height);
}

function drawMatrix(createTBricksInMatrix, offset) {
  createTBricksInMatrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle = "purple";
        context.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
}

let dropCount = 0;
let dropInterval = 1000;

let lastTime = 0;
function updateTheProcess(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;
  console.log(deltaTime);

  dropCount += deltaTime;
  if (dropCount > dropInterval) {
    player.position.y++;
    dropCount = 0;
  }

  drawBricks();
  requestAnimationFrame(updateTheProcess);
}
const player = {
  position: { x: 5, y: 5 },
  matrix: createTBricksInMatrix,
};

updateTheProcess();
