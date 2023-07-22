# API - BEGO

```sh
npm install
npm start
```
Variables de entorno

```sh
PORT = 8080
MONGO_URI = 'mongodb://localhost:27017/bego'
JWT_KEY = 'bego_2023'
API_KEY_GOOGLE = 'AIzaSyCR8ltHdVfFOaytkvLgLbcvg8py5cXUWEo'
```

# Endpoints
### Register-user
### POST
```sh
localhost:8080/api/auth/register
```
### Body
```sh
{
    "email": "user@mail.com",
    "password": "12345678"
}
```
### Login-user
### POST
```sh
localhost:8080/api/auth/login
```
### Body
```sh
{
    "email": "user@mail.com",
    "password": "12345678"
}
```
### Respuesta
```sh
{
    "status": 200,
    "statusMsg": "Success",
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGJjMjMzMzgyOThkMjY5OWFlY2ZiZWIiLCJlbWFpbCI6Im1hdXJpY2lvQG1haWwuY29tIiwiaWF0IjoxNjkwMDUxMzk0fQ.CNLThPay0Ch9Z4tulKnP2DXnQzAAkBxcgm-IcXxVXrU"
}
```
### Create-Route
### POST
```sh
localhost:8080/api/route/:idPointA/:idPointB
```
### Respuesta
```sh
{
    "status": 200,
    "statusMsg": "Success",
    "data": {
        "route": "from: Puerto Madero, CABA | to: Parador - Centro Recreativo Camioneros Río Negro",
        "_id": "64bc2a9429d901f45be21d24",
        "createdAt": "2023-07-22T19:14:28.960Z",
        "updatedAt": "2023-07-22T19:14:28.960Z"
    }
}
```

### Get-Coordinates-By-Place-Id
### GET
```sh
localhost:8080/api/route/:placeIdPointA/:placeIdPointB
```
### Respuesta
```sh
{
    "status": 200,
    "statusMsg": "Success",
    "data": {
        "route": "from: Puerto Madero, CABA | to: Parador - Centro Recreativo Camioneros Río Negro",
        "_id": "64bc2a9429d901f45be21d24",
        "createdAt": "2023-07-22T19:14:28.960Z",
        "updatedAt": "2023-07-22T19:14:28.960Z"
    }
}
```

### Get-Distance-By-Place-Id
### GET
```sh
localhost:8080/api/route/distance/:placeIdPointA/:placeIdPointB
```
### Respuesta
```sh
{
    "status": 200,
    "statusMsg": "Success",
    "data": "1,446 km"
}
```

### Get-All-Routes
### GET
```sh
localhost:8080/api/route
```
### Respuesta
```sh
{
    "status": 200,
    "statusMsg": "Success",
    "data": [
        {
            "_id": "64bbff55dcecf784c1ed52a4",
            "route": "from: Cristo Redentor, Las Heras, Mendoza | to: Parador - Centro Recreativo Camioneros Río Negro",
            "createdAt": "2023-07-22T16:09:57.494Z",
            "updatedAt": "2023-07-22T16:09:57.494Z"
        },
        {
            "_id": "64bc2a6a29d901f45be21d1e",
            "route": "from: Parador - Centro Recreativo Camioneros Río Negro | to: Puerto Madero, CABA",
            "createdAt": "2023-07-22T19:13:46.545Z",
            "updatedAt": "2023-07-22T19:13:46.545Z"
        },
        {
            "_id": "64bc2a9429d901f45be21d24",
            "route": "from: Puerto Madero, CABA | to: Parador - Centro Recreativo Camioneros Río Negro",
            "createdAt": "2023-07-22T19:14:28.960Z",
            "updatedAt": "2023-07-22T19:14:28.960Z"
        }
    ]
}
```

### Get-Route-By-Id
### GET
```sh
localhost:8080/api/route/:routeId
```
### Respuesta
```sh
{
    "status": 200,
    "statusMsg": "Success",
    "data": {
        "_id": "64bbfedea6ee1e80166d1358",
        "route": "from: Cristo Redentor, Las Heras, Mendoza | to: Parador - Centro Recreativo Camioneros Río Negro",
        "createdAt": "2023-07-22T16:07:58.501Z",
        "updatedAt": "2023-07-22T16:07:58.501Z"
    }
}
```

### Create-Order
### POST
```sh
localhost:8080/api/order
```
### Respuesta
```sh
{
    "status": 200,
    "statusMsg": "Success",
    "data": {
        "type": "prueba 3",
        "description": "descripcion de prueba 3",
        "route": [
            "64bc2a9429d901f45be21d24"
        ],
        "status": "in progress",
        "truck": [],
        "_id": "64bc2b1d29d901f45be21d30",
        "createdAt": "2023-07-22T19:16:45.198Z",
        "updatedAt": "2023-07-22T19:16:45.198Z"
    }
}
```

### Add-Truck-To-Order
### POST
```sh
localhost:8080/api/order/add-truck/:truckId/:orderId
```
### Respuesta
```sh
{
    "status": 200,
    "statusMsg": "Success",
    "data": {
        "_id": "64bc26d50a184fbe4d7f491d",
        "type": "prueba 1",
        "description": "descripcion de prueba 1",
        "route": [
            {
                "_id": "64bbff55dcecf784c1ed52a4",
                "route": "from: Cristo Redentor, Las Heras, Mendoza | to: Parador - Centro Recreativo Camioneros Río Negro",
                "createdAt": "2023-07-22T16:09:57.494Z",
                "updatedAt": "2023-07-22T16:09:57.494Z"
            }
        ],
        "status": "planning",
        "truck": [
            {
                "_id": "647e7fd008f76ab0e20a6c9c"
            }
        ],
        "createdAt": "2023-07-22T18:58:29.736Z",
        "updatedAt": "2023-07-22T18:58:29.736Z"
    }
}
```

### Get-Order-By-Id
### GET
```sh
localhost:8080/api/order/:orderId
```
### Respuesta
```sh
{
    "status": 200,
    "statusMsg": "Success",
    "data": {
        "_id": "64bc26d50a184fbe4d7f491d",
        "type": "prueba 1",
        "description": "descripcion de prueba 1",
        "route": [
            {
                "_id": "64bbff55dcecf784c1ed52a4",
                "route": "from: Cristo Redentor, Las Heras, Mendoza | to: Parador - Centro Recreativo Camioneros Río Negro",
                "createdAt": "2023-07-22T16:09:57.494Z",
                "updatedAt": "2023-07-22T16:09:57.494Z"
            }
        ],
        "status": "in progress",
        "truck": [
            {
                "_id": "647e7fd008f76ab0e20a6c9c",
                "model": "Kenworth T680",
                "make": "Lochbuie",
                "year": 2019,
                "color": "red",
                "transportWeight": 62500,
                "created_at": 1686011670
            }
        ],
        "createdAt": "2023-07-22T18:58:29.736Z",
        "updatedAt": "2023-07-22T19:04:46.663Z"
    }
}
```

### Get-All-Orders
### GET
```sh
localhost:8080/api/order
```

### Update-Status-Order
### PUT
```sh
localhost:8080/api/order/status
```
### Body
```sh
{
    "status": "complete"
}
```
