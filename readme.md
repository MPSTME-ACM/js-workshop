# JavaScript Foundations: A Self-Paced Learning Path

Welcome to the ACM's JavaScript learning workshop. This guide is designed to take you from the absolute basics to building your first few projects.

The goal is not to rush, but to understand the core concepts thoroughly. Take your time with each module, experiment with the code, and don't hesitate to ask questions.

---

## Learning Modules & Resources

This path is structured to build your knowledge step-by-step. Use the following resources to learn the concepts in each module.

### Core Learning Resources

* **Primary Video Course (English):** [JavaScript Tutorial for Beginners by freeCodeCamp (3.5 Hours)](https://www.youtube.com/watch?v=PkZNo7MFNFg)
* **Primary Video Course (Hindi):** [JavaScript Crash Course by CodeWithHarry (3.5 Hours)](https://www.youtube.com/watch?v=hKB-YGF14SY)
    * _Note: Both video courses cover the same core concepts and are approximately 3.5 hours long. Please watch the one you are most comfortable with._
* **Reference & Examples w/ Live Testing:** [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
* **In-Depth Reading:** [The Modern JavaScript Tutorial](https://javascript.info/)

---

### The Path

**Module 1: The Absolute Basics**
* **Topics:** What is JavaScript? Basic Syntax, Variables, Comments, and Data Types.
* **Goal:** Understand how to write basic JavaScript and store information.

**Module 2: Logic and Control Flow**
* **Topics:** Operators (Arithmetic, Comparison), Conditional Statements (`if/else`, `switch`).
* **Goal:** Learn how to make decisions in your code.

**Module 3: Working with Collections**
* **Topics:** Arrays, `for` loops, `while` loops.
* **Goal:** Understand how to handle lists of data and repeat actions.

**Module 4: Reusable Code**
* **Topics:** Functions, Parameters, Arguments, `return`.
* **Goal:** Learn to write clean, reusable blocks of code.

**Module 5: Interacting with the Browser**
* **Topics:** The DOM (Document Object Model), Selecting Elements (`querySelector`), Event Handling (click, mouseover), Manipulating HTML and CSS.
* **Goal:** Make your web pages interactive.

---

## Projects

Once you are comfortable with the learning modules, apply your knowledge by building these projects. They are listed in order of increasing difficulty. For each project, you will find a `script.js` file which contains only the algorithm. Your task is to write the code that implements the algorithm.

1.  **Distance Conversion Tool:** A utility to convert values between km, m, and cm.
2.  **Digital Clock:** A live clock that displays the current time.
3.  **Random Color Changer:** An app that changes the background color on a button click.
4.  **To-Do List:** A list where you can add and remove tasks.
5.  **Simple Calculator:** A basic calculator that can perform simple arithmetic.

---

## Getting Started with Projects

To share your work and get feedback, we will use the standard **Fork & Pull Request** workflow. This is a fundamental skill when working on a collaborative team.

**Step 1: Fork the Repository**
* Navigate to the main ACM repository on GitHub.
* Click the **"Fork"** button in the top-right corner. This creates your own personal copy of the repository under your GitHub account.

**Step 2: Clone Your Forked Repository**
* On your GitHub account, go to the repository you just forked.
* Click the green **"< > Code"** button and copy the HTTPS or SSH URL.
* Open your terminal or command prompt and run the following command to download it to your computer:
    `git clone <your_forked_repository_url>`

**Step 3: Work on the Projects**
* Navigate into the cloned folder: `cd <repository_folder_name>`
* Open the folder in your code editor (like VS Code).
* Choose a project, open its `script.js` file, and start writing the code to implement the algorithm.

**Step 4: Save and Push Your Changes**
* Once you've made progress or completed a project, you need to save your work back to your forked repository on GitHub.
* Run these commands in your terminal from the project directory:
    ```bash
    # Stage your changes
    git add .

    # Commit your changes with a descriptive message
    git commit -m "Completed the Distance Converter project"

    # Push the changes to your fork on GitHub
    git push origin main
    ```

**Step 5: Create a Pull Request**