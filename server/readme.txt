# Project launch sequence of actions
# Project environment variables: Visual Studio (code editor) , node.js (server) , postman (run api) , MongoDb (data storage) , cloudinary (image storing)

1.  <!-- Full Source Code , E-commerce platform -->
    https://github.com/Bruttix/FashionShop

2. Under project directories , /client frontend/ and /dashboard/ and /server/ you need to DELETE each (3) "package-lock.json" files and also any node_modules directories.
(because when you type npm install in the next few steps, it will re-establish this lock.json file by reading your package.json files and re-populate a new node_modules directory)

3. change directory into /server/ and install these libraries with these two commands:
    - npm install bcryptjs dotenv express express-async-handler jsonwebtoken mongoose morgan
    - npm install -D concurrently nodemon

4. Under the /server/ directory there should be your .env file , if not then contact source developer

5.  open 3 developer powershell terminals , for each respective directory , change each terminal into /client frontend/ and /dashboard/ 
    and /server/ ; then type the commands below into each terminal to update the projects node_modules
    - npm install
    - npm start
