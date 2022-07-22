## Steps for setting up the project:

- Create a .env file copying .env.example, changing POSTGRES_USER and POSTGRES_PASSWORD to choosen user and password
- npm i
- npx prisma migrate dev
- if already have database:
- npx prisma db pull

### Run app:

- npm run start
  or
- npx nodemon app.ts

### Tests:

- npm run test

### APIUSAGE:

## routes:

# client :

    - GET "/client" => get all clients
    - POST "/client" => create a client. Params: name, cnpj and state

# process:

    - Selectors:
        -clientCNPJ: search for clients
        -isActive: : search for actives or inactives
        -text: : search for text on process' name
        -state: : search for state
        -gt: : search for value greater than
        -lt: : search for value smaller than

        ===>You can use these selectors for customizing the processes search


    - POST "/process" => create a process. Params: number, value (in cents), state, date (format: DD/MM/YYYY), isActive (true/false), clientCNPJ (created client)
    - GET "/process => search for processes
    - GET "/process/sum => sum processses' values
    - GET "/process/average => average processses' values
    - GET "/process/client => search processes separeted by clients
    - GET "/process/count => count the number of processes
