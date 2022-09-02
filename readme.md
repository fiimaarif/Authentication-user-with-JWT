## User Authentication with JWT using Express JS

### Install

```
npm install
```

### Database & Table

```sql
create database db_auth;

Create table users (
   id serial primary key,
   username varchar(50) not null,
   email varchar(50) not null unique,
   password varchar(100) not null
);

```

### Make .env File with This Template

```
APP_HOST=localhost
APP_PORT=8181
DB_DRIVER=postgresql //your database driver
DB_HOST=localhost //your database host
DB_PORT=5432 //your database port
DB_USER=username //your database user
DB_PASS=password //your database password
DB_NAME=db_auth //your database name

```

### API Spec

- Host: `localhost`
- Port: `8181`

#### Auth Login

- Request: `POST`
- Endpoint: `/auth/login`
- Body

```json
{
  "username": "fima",
  "password": "123456"
}
```

- Response:

```
{
  "token":"token"
}
```

#################################

#### Users

- Request: `POST`
- Endpoint: `/users`
- Body
  => Copy the token from login response => paste to Authorization > Token

```json
{
  "username": "fiimaarif",
  "email": "fiimaarif@gmail.com",
  "password": "123456"
}
```

- Request: `GET`
- Endpoint: `/users`
  => Copy the token from login response => paste to Authorization > Token

################################

- Request: `PUT`
- Endpoint: `/users`
  => Copy the token from login response => paste to Authorization > Token
- Body

```json
{
  "id": 37,
  "username": "fiimaarif edit",
  "email": "fiimaarif@gmail.com",
  "password": "123456"
}
```

###############################

- Request: `DELETE`
- Endpoint: `/users/1`
