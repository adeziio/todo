# A simple to-do list
## 1. GET 
### https://todo-adeziio.vercel.app/list
### https://todo-adeziio.vercel.app/add?item=
### https://todo-adeziio.vercel.app/delete?id=&item=
### https://todo-adeziio.vercel.app/update?id=&item=

## 2. POST 
### https://todo-adeziio.vercel.app/add
### body = {
    "item": <string>
}
### https://todo-adeziio.vercel.app/delete 
### body = {
    "id": <integer>,
    "item": <string>
}
### https://todo-adeziio.vercel.app/update
### body = {
    "id": <integer>,
    "item": <string>
}

# Additional Notes:
### GET and POST /delete has the option to use either "id" or "item". However, if both values are present, "id" will take precedence over "item".
### GET and POST /update required values for both "id" and "item".
