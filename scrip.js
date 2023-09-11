let form=document.getElementById("form");
let name=document.getElementById("name");
let lastName=document.getElementById("lastname");
let date=document.getElementById("date");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        body: JSON.stringify({
            'Nombre': name.value,
            'Apellido': lastName.value,
            'Fecha de nacimiento': date.value,
        }),
        headers:{
            "content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
});