# Game Project Setup and Execution Guide

## Prerequisites
- Web server (e.g., Apache, Nginx) with PHP support
- PHP installed on your machine
- Web browser (Google Chrome, Mozilla Firefox, etc.)

## Step 1: Download the Project Files
1. Download the project files from this repository: https://github.com/Djefson/cardgame
2. Unzip the project folder 
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

**Note 2:**  I have written PHP codes just to test if is suitable for this project in times of logical coding, therefore I've decided to use only javscript as the perfect  working server script language for this genre, because by including AJAX = Asynchronous JavaScript and XML the game logic have started to be more complex and erroneous, don't mind if you doesn't want to follow all instructions above just click the  `index.html` file the project will run pefectly, but I advise you to follow  all steps above for the reason that Xampp/Appache server have an impact in some project sections design layouts.
