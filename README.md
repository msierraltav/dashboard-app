# Receipts App

App to test node , react and  

## How to install 

### In your system

if you want to run it in your system simply clone the code and  then  execute: 

cd dashboard-app
npm install
npm start 

### Docker containers

If you want to run it in inside a container just run 

cd dashboard-app

docker build . -t dashboard-app

docker run -p 3000:3000 -d dashboard-app

then go to http://localhost:3000/ in your browser.

to stop the container just execute docker ps to get the CONTAINER ID 
and execute docker kill <container-id>
