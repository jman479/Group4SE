Sequence of actions to set-up the localhost developer environment:

# Project environment set-up variables: 
Visual Studio (code editor) , 
node.js (server) , 
postman (run api) ,
MongoDb (data storage) , 
cloudinary (image storing) ,
Heroku (dns hosting)

1. Github source code main branch -->

    https://github.com/jman479/Group4SE/tree/main/FashionShop

2. After opening the project in your code editor -> Check under the project directories , /client frontend/ and /dashboard/ and /server/ and
   you need to DELETE each (3) "package-lock.json" files if listed and any “node-modules directory” listed.
   (because when you type npm install in the next few steps, it will re-establish this lock.json file by reading your package.json files)

3. change directory into the /server/ directory and install these libraries with these two commands:
    -  npm install bcryptjs dotenv express express-async-handler jsonwebtoken mongoose morgan
    -  npm install -D concurrently nodemon

4. Under the /server/ directory there should be your .env file which holds developer related private fields/tokens , if this file doesn’t exist, contact the source developer.

5.  open 3 developer powershell terminals , for each respective directory , change each terminal into the current project /client frontend/ and /dashboard/ and /server/ ; 
    then type the commands below into each terminal which will update the projects node_modules and package-lock.json
    -  npm install
    -  npm start

6.  Now from here onwards, in our project within the /server/ you can launch by typing the command below
   -   npm run server
    Now from here onwards, in our project /client frontend/ and /dashboard/  directories type the command below to run your developer local builds. 
   -   npm start
   
