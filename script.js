// 簡單的視圖切換邏輯
function switchView(viewId) {
    const views = document.querySelectorAll('.view');
    views.forEach(view => view.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');

    // 開始或結束遊戲
    if (viewId === 'snakeGame') {
        startGame();
    } else {
        stopGame();
    }
}

// 遊戲邏輯
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const boxSize = 25;
const rows = canvas.width / boxSize;
const cols = canvas.height / boxSize;
let snake = [{ x: 10, y: 10 }];
let food = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
let direction = "RIGHT";
let gameInterval = null;

// 更新遊戲邏輯
function updateGame() {
    let head = { ...snake[0] };

    if (direction === "UP") head.y -= 1;
    if (direction === "DOWN") head.y += 1;
    if (direction === "LEFT") head.x -= 1;
    if (direction === "RIGHT") head.x += 1;

    // 撞牆或撞到自己
    if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows ||
        snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        stopGame();
        alert("遊戲結束！");
        return;
    }

    snake.unshift(head);

    // 吃到食物
    if (head.x === food.x && head.y === food.y) {
        food = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
    } else {
        snake.pop();
    }
}

// 繪製遊戲畫面
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 畫蛇
    snake.forEach(segment => {
        ctx.fillStyle = "#4CAF50";
        ctx.fillRect(segment.x * boxSize, segment.y * boxSize, boxSize, boxSize);
    });

    // 畫食物
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);
}

// 遊戲循環
function gameLoop() {
    updateGame();
    drawGame();
}

// 開始遊戲
function startGame() {
    snake = [{ x: 10, y: 10 }];
    direction = "RIGHT";
    food = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
    if (!gameInterval) gameInterval = setInterval(gameLoop, 150);
}

// 停止遊戲
function stopGame() {
    clearInterval(gameInterval);
    gameInterval = null;
}

// 監聽鍵盤輸入
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
});
