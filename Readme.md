# Game Project Setup and Execution Guide

## Prerequisites
- Web server (e.g., Apache, Nginx) with PHP support
- PHP installed on your machine
- Web browser (Google Chrome, Mozilla Firefox, etc.)

## Step 1: Download the Project Files
1. Download the project files from the source or repository.
2. Unzip the folder. 

## Step 2: Set Up the Web Server
1. Install and set up a web server with PHP support on your machine. If you already have a web server installed, skip this step.
2. Place the project files in the appropriate directory of your web server (e.g., `htdocs` for XAMPP, `www` for WAMP).

## Step 3: Start the Web Server
1. Start the web server. Refer to the documentation of your specific web server for instructions on how to start it.
2. Ensure that the web server is running and accessible by opening your web browser and entering `http://localhost` in the address bar. If you see the default server page or a similar indication that the server is running, you're good to proceed.

## Step 4: Access the Game in the Browser
1. Open your web browser and enter the following URL in the address bar: `http://localhost/path/to/project/index.html`.  for example I am running the project on: `http://localhost/Card_Game/index.html`

   Replace `path/to/project` with the actual path to the project directory on your web server.

## Step 5: Play the Game
1. Once the game is loaded in the browser, you should see a playing card image and game buttons.
2. Click on the "Start Game" button to begin.
3. Guess whether the next card will be higher, lower, or the same as the current card by clicking the corresponding button.
4. If your guess is correct, you will be notified, and a new card will be displayed. Keep guessing to complete the game.
5. If your guess is incorrect, the game will end, and you will be notified.
6. To restart the game, click the "Restart" button.

Congratulations! You have successfully set up and played the game project.

**Note 1:** If you encounter any issues during the setup or execution, ensure that your web server and PHP are properly configured and running correctly. Additionally, check for any error messages displayed in the browser's developer console or the web server's log files for troubleshooting purposes.

**Note 2:**  I've written PHP codes just to fetch data from the API the rest of the server-side codes are written in javascript for implementing the Game logic and functionalities, and the front-end layouts stacks are HTML5, SASS, Bootstrap.

<img width="1440" alt="Screenshot 2023-07-04 at 11 44 58" src="https://github.com/Djefson/cardgame/assets/58703612/c977955a-c2c6-46d9-9c44-a93a9155aae6">




