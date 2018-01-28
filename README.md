# UI

### 1) Install Dependencies:
Inside the *react-backend* folder:
```
$npm install
```
Inside the *react-backend/client* folder:
```
$npm install
```

On Ubuntu:
If experiencing errors on 14 or 16, run 
```
sudo ln -s /usr/bin/nodejs /usr/bin/node
```
and try again

### 2) Start Express Backend Server:
Inside the *react-backend* folder:
```
$PORT=3001 node bin/www
```
On Windows:
```
>set PORT=3001
>node bin/www
```

### 3) Start Client Server:
Inside the *react-backend/client* folder:
```
$npm start
```

### 4) View Page at: http://localhost:3000/
