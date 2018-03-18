# UI

### 1) Install Dependencies:

Prerequisite:node.js and npm
node.js

Ubuntu:
do not apt-get install nodejs! npm is known not to run on Node.js v4.2.6, which is what is installed by apt!
Instead:
```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
```

```
sudo apt-get install -y nodejs
```

OSX:  
```
brew install node
```
npm (node package manager) should be installed with node.js.
Check that both installed with
```
node -v
```
```
npm -v
```

then run an update and upgrade.

### 2) Further Installing Dependencies:
Inside the *react-backend* folder:
```
npm install
```
Inside the *react-backend/client* folder:
```
npm install
```

On Ubuntu:
If experiencing errors on 14 or 16, run
```
sudo ln -s /usr/bin/nodejs /usr/bin/node
```
and try again

### 3) Start Express Backend Server:
Inside the *react-backend* folder:
```
npm start
```
### 4) Start MongoDB

On a mac with homebrew you can start mongodb from the terminal:
```
brew services start mongodb

```

### 5) Start Client Server:
Inside the *react-backend/client* folder:
```
npm start
```

### 6) View Page at: http://localhost:3000/ or on Heroku Deployment
