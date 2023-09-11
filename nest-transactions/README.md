## Environment Variables
The application requires an environment file for configuration. Please send an email to erikwasmosy98@gmail.com to request the .env file. Once you've obtained the file, place it in the root directory of the nest-transactions application.
Installing Dependencies
After cloning the repository and setting up the environment file, you need to install the application dependencies. Run the following command:
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Authentication
To authenticate and start interacting with authenticated endpoints, you can use the login endpoint. The credentials for this example application are:
* username: erwaen
* password: 12345678

Here is the example of how to login:
```bash
curl -d '{"username": "erwaen", "password": "12345678"}' -H "Content-Type: application/json" -X POST http://localhost:3000/auth/login
```

This will return a JSON response with a token field. This is your authentication token, which you need to include in the Authorization header of your subsequent requests to access routes that require authentication.

The Authorization header should look like this:

```Authorization: Bearer your-token-here```

Remember to replace your-token-here with the actual token you received from the login response.

For example, if you want to get the authenticated user's profile, you can use the GET /auth/profile endpoint:

```bash
curl -H "Authorization: Bearer your-token-here" -H "Content-Type: application/json" -X GET http://localhost:3000/auth/profile
```

## API Endpoints
### Authentication
| Endpoint       | HTTP Method | Description                          |
|----------------|-------------|--------------------------------------|
| `/auth/login`  | POST        | Sign in to the application           |
| `/auth/profile`| GET         | Get profile of the authenticated user|

### User Management

| Endpoint           | HTTP Method | Description                          |
|--------------------|-------------|--------------------------------------|
| `/users`           | GET         | Get all users                        |
| `/users/:id`       | GET         | Get a user by their ID               |
| `/users`           | POST        | Create a new user                    |
| `/users/:id`       | PATCH       | Update an existing user by their ID  |
| `/users/:id`       | DELETE      | Delete a user by their ID            |

### Transaction Management

| Endpoint                  | HTTP Method | Description                            |
|---------------------------|-------------|----------------------------------------|
| `/transactions`           | GET         | Get all transactions                   |
| `/transactions/:id`       | GET         | Get a transaction by its ID            |
| `/transactions`           | POST        | Create a new transaction               |
| `/transactions/:id`       | PATCH       | Update an existing transaction by its ID|
| `/transactions/:id`       | DELETE      | Delete a transaction by its ID          |