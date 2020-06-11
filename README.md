# admin-web-portal-mern

Full-stack MERN application for admin web portal CalPlug

### Deployed on

https://admin-web-portal-mern.herokuapp.com/

### Install the application on localhost

Download the application and unzip it or run the following command in the terminal

    git clone https://github.com/payamdowlatyari/admin-web-portal-mern.git

Make sure you have 'node' installed on your computer

Then follow the steps
and
run the following commands:

    cd admin-web-portal-mern 
    npm install
    cd client 
    npm install

Finally go back to the root directory
and run:

    npm run dev

Now you must see the following messages: 

Server up and running on port 5000 !

        MongoDB successfully connected
        Project is running at http://0.0.0.0:3000/
        webpack output is served from 
        Content not from webpack is served from *******/admin-web-portal-mern/client/public
        404s will fallback to /
    Starting the development server...

    Compiled successfully!
    
    You can now view client in the browser.

      http://localhost:3000


### Setup the MongoDB database

Currently the application points to the CalPlug server at 

    mongoURI: 'mongodb://calplug:CfUgyeT56yG2yHmm@cpmqtt1.calit2.uci.edu:27017/'

In order to change the mongoURI string, you would need to modify the following file

    'config/keys.js'

