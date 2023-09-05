let btn=document.getElementById("btn");
const url="https://jsonplaceholder.typicode.com/users";
let name=document.getElementById("name");
let lastName=document.getElementById("lastname");
let date=document.getElementById("date")

btn.addEventListener("click", {
    fetch(url, {
        method:"POST",
        body: JSON.stringify(data)
    })
})
