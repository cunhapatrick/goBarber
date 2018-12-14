# Initial Steps to build a simmilar project

1. Run `$ yarn init -y` to build the package.json of the project.
2. Open package.json and add the following script

```
"scripts":{
  "start": "nodemon src/index.js -e js"
}
```

3. `$ yarn nodemon sequelize-cli eslint -D && yarn eslint --init`
4. `$ yarn bcryptjs express express-session session-file-store pug mysql2 multer`
5. `$ yarn sequelize init` and configure the created files

## Database

The project is using postgres as database storage

## Sequelize

The ORM module to manipulate the database, migrations and seeds without using raw sql and

## Multer

Module responsable to manage the upload of files

## Session-file-store

Module responsable to manager and generate temporary fisical json file to store active sessions of users inside the server

## View

### Structure

1. auth -> views of login and register user
2. layout -> layout template pattern of most views
3. partials -> portion of view components are storage here (Ex: header,footer, etc...)
4. general -> the rest of the view remain inside the root of view directory

# Initial Configuration

1. `$ yarn`
2. cp and change the .env.example to .env and put the db credentials on the file
3. `$ yarn sequelize-cli db:migrate`
4. `$ yarn start`
