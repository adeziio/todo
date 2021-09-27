# A simple to-do list. 
## 1. GET https://todo-adeziio.vercel.app/list
## 2. POST https://todo-adeziio.vercel.app/add
### body = {
    "item": <string>
}
## 3. POST https://todo-adeziio.vercel.app/delete
### body = {
    "id": <integer>
}
## 4. POST https://todo-adeziio.vercel.app/update
### body = {
    "id": <integer>,
    "item": <string>
}
