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
 1. Create a new _remote_ branch with a descriptive title (e.g. backend-pepe-add-todo)
 2. Then, create a local branch on your computer with the same branch name
 3. Work on the new feature/user story/work item in your local repository. Now, when you 'git add', 'git commit', and 'git push', these will ONLY update your remote repository.
 4. 

### Database
In /todo-app-backend folder, create a .env file with this:

```
MONGO_USER=powerpang
MONGO_PWD=PFp2eUnWoVkvICMh
MONGO_DB=DODOpro
MONGO_CLUSTER=dodopro.xf4oe.mongodb.net
```
Then, in /todo-app-backend/.gitignore, add `.env` to the file and save.
   
