
# NodeJS Seed Project

MVC NodeJS Seed Project with MongoDB, Mongoose, APIs, Webhooks, and Cron-jobs.


## Instalação

clone the **nodejs-seed-project** with yarn

```bash
  git clone https://github.com/biruelrick/nodejs-seed-project.git
```

install yarn components
```bash
  yarn
```
## Autores

- [@biruelrick](https://www.github.com/biruelrick)


## Deploy

Run the project

```bash
  yarn dev
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env


```bash
# 'myappname' - this is a name of my current application.
# Yes, You can use this project to more than one application creating
# a special data for each app. To connect for each project, just change the 
# name on 'APPLICATION_CODE'
```

`APPLICATION_CODE: myappname`

`NODE_ENV: dev`

`PORT: 8010`

`MONGOOSE_DEBUG: true`

`# ABOUT: Application custom configuration`

`MYAPPNAME_APP: myappname`

`MYAPPNAME_APP_NAME: My App Name Application`

`MYAPPNAME_MONGO_URI: mongodb://localhost/myappnameDB`

```bash
# repeat the keys above if you have more than one project
```
## Stack


**Back-end:** Node, Express, Mongoose

**Database:** MongoDB v6

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

