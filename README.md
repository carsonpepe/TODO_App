# TODO_App
CSC 307 Group Project - TODO App
Developers: Carson Pepe, Zack Soucek, Sean Tomer, Nathan Orloff, Philip pang

**Project Blurb:**
This app is a small TODO list web application, that has multiple views for different displays of information
It will display your todos in both a unified list as well as filterable calendar modes bsed on categories. 
Notifications are also built into the TODO item spec, and would be able to be enabled in a full version.

As it is, the app does not do a whole lot, but it is not version 1.0 for a reason

**UI Prototype:**
https://www.figma.com/file/LNOiPhYxFD7oHrYkMiMiZU/DODO-Pro?node-id=5%3A3
Date Updated: Apr 27, 2022

**Dev Environment setup below**

**Diagrams**
https://app.diagrams.net/?state=%7B%22ids%22:%5B%221U0_lHX7q4Oe3fkJfzarrw3nbaRAWpvQ8%22%5D,%22action%22:%22open%22,%22userId%22:%22107898074962629828158%22,%22resourceKeys%22:%7B%7D%7D

https://app.diagrams.net/#G11gmUhTwxRj_cHQ84JnJtbaG7myRYFvEI
(both availible in /docs/)

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
