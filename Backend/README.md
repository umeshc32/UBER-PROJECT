# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, checks if the user already exists, hashes the password, and creates a new user in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

### Request Body:
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success:
- **Status Code: 201**
- **Body:**
  ```json
  {
    "token": "JWT_TOKEN_HERE",
    "user": {
      "_id": "USER_ID_HERE",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Errors:
- **Status Code: 400**
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### User Already Exists:
- **Status Code: 400**
- **Body:**
  ```json
  {
    "message": "User already exist"
  }
  ```

### Example Request:
```sh
curl -X POST http://localhost:4000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to log in an existing user. It validates the input data, checks if the user exists, compares the password, and returns a JSON Web Token (JWT) and the user details upon successful login.

### Request Body:
The request body should be a JSON object with the following fields:

- `email`: A valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success:
- **Status Code: 200**
- **Body:**
  ```json
  {
    "token": "JWT_TOKEN_HERE",
    "user": {
      "_id": "USER_ID_HERE",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Errors:
- **Status Code: 400**
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Invalid Credentials:
- **Status Code: 401**
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Example Request:
```sh
curl -X POST http://localhost:4000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

# User Profile Endpoint

## Endpoint: `/users/profile`

### Method: GET

### Description:
This endpoint is used to get the profile of the currently authenticated user. It requires a valid JWT token.

### Responses:

#### Success:
- **Status Code: 200**
- **Body:**
  ```json
  {
    "_id": "USER_ID_HERE",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
  ```

#### Unauthorized:
- **Status Code: 401**
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Example Request:
```sh
curl -X GET http://localhost:4000/users/profile \
-H "Authorization: Bearer JWT_TOKEN_HERE"
```

# User Logout Endpoint

## Endpoint: `/users/logout`

### Method: GET

### Description:
This endpoint is used to log out the currently authenticated user. It clears the authentication token from cookies and adds it to a blacklist.

### Responses:

#### Success:
- **Status Code: 200**
- **Body:**
  ```json
  {
    "message": "Logged out"
  }
  ```

### Example Request:
```sh
curl -X GET http://localhost:4000/users/logout \
-H "Authorization: Bearer JWT_TOKEN_HERE"
```

# Captain Endpoints Documentation

# Captain Registration Endpoint

## Endpoint: `/captains/register`

### Method: POST

### Description:
Registers a new captain with vehicle details. Returns JWT token upon successful registration.

### Request Body:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "captain@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```
