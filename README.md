# Quiz App
1. Home Page (`index.html`, `index.css`, `index.js`)
![Screenshot (344)](https://github.com/dineshkumar1495/Quiz_app/assets/94850695/396b669f-ebdf-4c5e-9de9-1aad329abd91)


The home page serves as the entry point for users and allows them to set their preferences before starting the quiz.

- index.html: This HTML file contains the layout and components for the home page. It includes dropdown menus for selecting quiz categories and difficulty levels, as well as "Play" and "High Scores" buttons.

- index.css: The CSS file defines the styling for the home page. It determines the appearance of buttons, dropdowns, and labels.

- index.js: JavaScript code manages user interactions on the home page. It handles the selection of quiz categories and difficulty level, stores these preferences in local storage, and triggers navigation to the game page when the user clicks the "Play" button.

2. Game Page (`game.html`, `game.css`, `game.js`)
![Screenshot (346)](https://github.com/dineshkumar1495/Quiz_app/assets/94850695/a1b38c7d-7b93-45fc-99aa-2fe13a083d46)


The game page presents quiz questions to the user and tracks their progress and score.

- game.html: This HTML file structures the game page. It includes a progress bar, a question display area, and answer choices.

- game.css: CSS styles the game page, determining the appearance of questions, answer choices, and the progress bar. It also defines visual cues for correct and incorrect answers.

- game.js: JavaScript logic governs the gameplay on this page. It fetches quiz questions from an API, randomizes them, and displays them to the user. It also handles user interactions, such as selecting answers, tracking the score, and advancing to the next question.

3. High Scores Page (`highscores.html`, `highscores.css`, `highscores.js`)
![Screenshot (349)](https://github.com/dineshkumar1495/Quiz_app/assets/94850695/44db0114-b458-46d6-9c93-5db67b819966)


The high scores page displays the top scores achieved by players.

- highscores.html: The HTML file structures the high scores page. It contains a list of high scores and a "Go Home" button.

- highscores.css: CSS defines the appearance of high score entries and any hover effects.

- highscores.js: JavaScript logic manages the storage and retrieval of high scores from local storage. It sorts and displays the top scores, allowing users to see their performance relative to others.

4. Conclusion

In conclusion, the quiz app consists of three main pages: the home page, the game page, and the high scores page. Each page has a specific role in the app's functionality, from setting user preferences to presenting questions, tracking scores, and displaying high scores. The JavaScript code in each page handles user interactions and data management to provide an engaging quiz experience.

