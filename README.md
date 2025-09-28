# Installation Instructions ###
## MySQL database:
- ensure mysql is running and that the `exercise` database exists
- import `db.sql` with `mysql -u {username} -p exercise < backup.sql`
- export password to env variable DB_PASSWORD `export DB_PASSWORD="secret"`

## Java App:
- navigate to directory `spring-boot`
- run with maven `./mvnw spring-boot:run`

## React App:
- navigate to directory `React/my-app`
- install depedencies with
`npm install`
- run the dev server with
`npm run dev`
