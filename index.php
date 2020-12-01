<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clock</title>
    <link rel="stylesheet" href="css/clock.css">
    <link rel="stylesheet" href="css/frontend.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
</head>
<body>
    <div class="wrapper">
        <div id="gameStarter" onclick="gameStart()">
            <div id="gameStarterInfo">Click somewhere to start the game</div>
        </div>
        <div class="pauseGame">
            <div class="pauseGameInfo"></div>
        </div>
        <div class="openOptions"></div>
        <div class="options">
            <div class="closeOptions"></div>
            <div class="optionsText">Hello! 🤩</div>
        </div>
        <div class="top">
            <div class="timeLeft"></div>
            <div class="moves"></div>
        </div>
        <div class = "bottom">
            <div class="timeLeft"></div>
            <div class="moves"></div>
        </div>
    </div>
    <script src="scripts/clock.js"></script>
    <script src="scripts/frontend.js"></script>
</body>
</html>
