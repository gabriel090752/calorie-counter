const textBox = document.getElementById("textBoxId")
const form = document.getElementById("form")
const apiKey = "58b5086ad0c24393a8ed607ecb348aef"


form.addEventListener("submit",(event) => {
    event.preventDefault()
    const query = textBox.value
    const endPoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=2`
    fetch(endPoint)
        .then(res => res.json())
        .then(data => console.log(data))
})
// fetch(apiRequest)
//     .then(request => request.json)
//     // .then(test => console.log(test))


