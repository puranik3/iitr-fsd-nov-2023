## Getting started

-   Create a project folder (say `application`) and change directory to it.

```
cd application
```

-   From within the project folder

```
npm init -y
```

-   Install http-server

```
npm i -D http-server
```

-   Setup start script within package.json

```
"start": "http-server --port 8000 -c-1"
```

-   Run the server

```
npm start
```
