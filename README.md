# blog-backend

This project was generated with Nest JS

## Installation
 clone the repository

###  Repository
  git clone https://github.com/josepootargaez/blog-back.git

## Technical specifications of the environment

* **Node** - `v16`
* **Docker** - `v20.10.17`
* **Typescript** - `v4.7.4`
* **@nestjs/cli** - ` "^v9.0.0`

## environment variables for database sql Server
  ### .env
    PORT_SERVER=4000
    URL_HOST=http://localhost
    SQL_SERVER_HOST= sql-server-db
    SQL_SERVER_PORT= 1433
    SQL_SERVER_USER= sa
    SQL_SERVER_PASSWORD= MiContrasena2022!
    SQL_SERVER_DATABASE=blog
    
## Install by Docker
  ### required Docker
  
    docker-compose up --build
  * **Server Listen port 4000**



## Optional Install server
* **install package**
    `npm install`
Run `npm start ` for a dev server. Navigate to `http://localhost:4000/`


## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
