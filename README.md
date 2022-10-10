# Climate Data Explorer
![Climate Data Explorer cover image](https://github.com/wo1vin/climatedataexplorer/blob/main/public/assets/cover.png?raw=true)

# Introduction
This project is a work in progress.
This platfom identifies and brings together important data from sources that go beyond national statistics. The Climate Data Explorer enables decision makers, climate experts, businesses, and citizens to leverage data to address all aspects of the climate crisis.

---

# Devs 
- Fork this repo
- Clone it to your local machine
- Create a .env file with the following variables:
    - `DB_STRING =` set the value to a MongoDB Connection String with the user and password fields replaced. Make your own or contact me.
    - `PORT = 3000` (value doesn't matter)
- On the terminal in the folder with the project, run `npm install`
- After install, type either `npm run start` or `node server` to start the app
- If no errors were logged, you can open a browser tab and go to `http://localhost:3000/` to view the project.
- If you plan to publish the code remember to add the .env file to .gitignore

Happy Coding!