Tic Tac Toe Game

Project : Developed Tic Tac Toe Game leveraging the technologies, programming concepts that i have learned so far as part of SEI course.

Tech Stack:
1.JavaScript
2.HTML
3.CSS

Devlopemt Enviroment:
-Visual Studio Code

Version Control:
1.GIT Repo
2.GIT HUB

MVP:
As a user, I should be able to start a new tic tac toe game
As a user, I should be able to click on a square to add X first and then O, and so on
As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
As a user, I should not be able to click the same square twice
As a user, I should be shown a message when I win, lose or tie
As a user, I should not be able to continue playing once I win, lose, or tie
As a user, I should be able to play the game again without refreshing the page

Approach :
-Invisioned basic layout with 3x3 grid
---Two buttons to start game and Reset the game
Created user layout using HTML
-Styled the page using CSS
-JS Script:
-Created an array to track playerclicks
-Array to track winning combos
-Winning Logi function: captured userclicks into an array and compared that with the -wincombo array. once the winner is determined display the winner on the screen.
-Draw Logic: created a bullion to capature win status if win status is true, display -winner, if not Draw game message.

How it works:

-Upon launch of the Game in a web browser .
-User is rendered with a UI with Game Heading and a 3x3 grid and two buttons, New Game and Reset Game.
-New Game : By clicking new game button user is met with a message "Player X Go -First!" X can click any where in the grid will be populated with an X.
-After x's turn , message for next player turn will be displayed.

- At this point player 2 turn. player 2's can click anywhere in the open cell it will be populated with an O.
  -Any player matches vertical, horizontal or diagonal X or O first will be declared the winner.
  -Click Reset button to reset the board.
