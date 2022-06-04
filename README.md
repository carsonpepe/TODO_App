# TODO_App
CSC 307 Group Project - TODO App
Developers: Carson Pepe, Zack Soucek, ...
Code Linter: ESLint
Code Styler: Prettier
Variable Casing: lowerCamelCase
function bracketing{
   first bracket on same line
}
In depth Style Guide: https://airbnb.io/javascript/react/#basic-rules

Instalation Instructions, using VScode:
1. Install "Prettier" Extension: esbenp.prettier-vscode use default settings
   follow installation instructions, skipping "prettier resolution", as it has been done already,
   settings should be overwritten by the
2. Install "ESLint" extension: dbaeumer.vscode-eslint
3. Follow https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically
 tutorial for enabling automatic code formatting, starting from "Formatting code automatically"
 
 # For the Developers
 ### Workflow
 When you want to work on a new work item:
 1. Click into that work item and on the right hand side, select 'create branch'.
 2. Give your new remote branch a descriptive title, such as 'pepe-add-todo-frontend'.
 3. On your local, run `git pull` or `git fetch`. This will make your new remote branch visible. 
 4. Then, run `git branch pepe-add-todo-frontend`, where the branch name matches the remote branch's name that you just created. This new local branch should automatically be tracking from your remote branch with the same name. 
 6. Now, when you 'git add', 'git commit', and 'git push', these will ONLY update your remote repository.
 7. After a push, you can open github and there will be an option at the top displaying that you just pushed changes to your remote branch, with a button that allows you to create a pull request from that branch. If you're done with your work item, have tested your changes in your branch locally (the same changes that you pushed to your remote), and are ready to have your code review, make a pull request for it.
 8. After people have reviewed it, resolve any merge conflicts and then merge it to the main branch. This step is very intuitive with git's UI.

### Database
In /todo-app-backend folder, download .env file that contains MONGODB cridentials. (Find this file in our discord chat).   



File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------|---------|----------|---------|---------|-----------------------------------
All files     |   76.19 |       40 |      90 |   76.19 |
 category.js  |     100 |      100 |     100 |     100 |
 services.js  |   71.01 |       40 |      90 |   71.01 | 37,42,56-58,69-75,112-128,142-143 
 settings.js  |     100 |      100 |     100 |     100 | 
 todo_item.js |     100 |      100 |     100 |     100 | 
 user.js      |     100 |      100 |     100 |     100 | 
--------------|---------|----------|---------|---------|-----------------------------------