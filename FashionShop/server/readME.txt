/* Server directory instructions */
1. Make sure you have Node.js installed.
2. Under the /server/ directory there should be your .env file which holds developer related private fields/tokens , if this file doesn’t exist, contact the source developer.
3. change directory into the /server/ directory and install these libraries with these two commands:
    -  npm install bcryptjs dotenv express express-async-handler jsonwebtoken mongoose morgan
    -  npm install -D concurrently nodemon
3.  open developer powershell terminal
    -  npm run server
