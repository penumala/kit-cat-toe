## Tic Tac Toe Game

### Project : Developed Tic Tac Toe Game leveraging the technologies, programming concepts that i have learned so far as part of SEI course.

### Tech Stack:
1. JavaScript
2. HTML
3. CSS

### Devlopemt Enviroment:
1. Visual Studio Code

### Version Control:
1. GIT Repo
2. GIT HUB

### MVP:
* As a user, I should be able to start a new tic tac toe game
 * As a user, I should be able to click on a square to add X first and then O, and so on
 * As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
* As a user, I should not be able to click the same square twice
* As a user, I should be shown a message when I win, lose or tie
* As a user, I should not be able to continue playing once I win, lose, or tie
* As a user, I should be able to play the game again without refreshing the page

### Approach :
1. Invisioned basic layout with 3x3 grid
2. Two buttons to start game and Reset the game
1. Created user layout using HTML
1. Styled the page using CSS
### JS Script:
1. Created an array to track playerclicks
2. Array to track winning combos
3. Winning Logi function: captured userclicks into an array and compared that with the 
4. wincombo array. once the winner is determined display the winner on the screen.
5. Draw Logic: created a bullion to capature win status if win status is true, display winner, if not Draw game message.

### How it works:

1. Upon launch of the Game in a web browser .
2. User is rendered with a UI with Game Heading and a 3x3 grid and two buttons, New Game and Reset Game.
3. New Game : By clicking new game button user is met with a message "Player X Go -First!" X can click any where in the grid will be populated with an X.
4. After x's turn , message for next player turn will be displayed.

5. At this point player 2 turn. player 2's can click anywhere in the open cell it will be populated with an O.
6. Any player matches vertical, horizontal or diagonal X or O first will be declared the winner.
7. Click Reset button to reset the board.


### Acknowledgets/References:
* Google Search
* Stackover flow