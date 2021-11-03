# authjwt
A api for authenticate using jwt, typescript and typeorm.

## Requests to api examples:
### POST /users
This is request for the store new user in database
```bash
$ curl http://localhost:3000/users
```
```js
{
  "email": String, 
  "password": String
}
```

### POST /auth
This is request for authenticate an user in api, returns json containing user id and email and jwt to origin of request
```bash
$ curl http://localhost:3000/auth
```
```js
{
  "email": String, 
  "password": String
}
```

### GET /users
This is request for get id from user, is protected route for middleware of authentication
```bash
$ curl http://localhost:3000/users
```
```js
{
  // Send jwt token with Token Bearer in request
}
```

