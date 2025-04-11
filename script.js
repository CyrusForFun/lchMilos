/* 全局樣式 */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    overflow: hidden;
    height: 100vh;
}

/* 視圖容器 */
.view {
    display: none;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.view.active {
    display: flex;
}

/* 導覽列樣式 */
#navbar {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #333;
    padding: 10px 0;
}

#navbar button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #4CAF50;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#navbar button:hover {
    background-color: #45a049;
}

/* 標題樣式 */
h1 {
    margin: 20px 0;
    color: #333;
    font-size: 24px;
    text-align: center;
}

/* 畫布樣式 */
canvas {
    background-color: #222;
    display: block;
    border: 1px solid #555;
    margin-top: 20px;
}

/* 遊戲模態框 */
#gameModal, #endModal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1000;
}

#gameModal p, #endModal p {
    font-size: 20px;
    margin: 10px 0;
}

#gameModal button, #endModal button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#gameModal button:hover, #endModal button:hover {
    background-color: #45a049;
}
