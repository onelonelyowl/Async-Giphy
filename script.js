/*
let loginForm = document.getElementById("loginForm")
let formResult;
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let searchQuery = document.getElementById("searchparams")
    if(searchQuery == "") throw "search query empty"
    else{
        formResult = searchQuery
    }
})
*/
const form = document.querySelector('form')
let query = ''
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(form)   
  query = formData.get("searchbox")}
)

async function getImages(query){ // returns an image from a giphy search
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${insert_api_key_here}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const json = await fetch(endpoint)
    const processed = await json.json()
    return processed["data"][0]["images"]["original"]["url"]
}
async function helperFunctionSingular(){
    await getSpecificImage("dog", i).then(value => value)
    return value
}

const displayImage = () => {
    const button = document.querySelector("button")
    const output = (document.getElementById("output"))
    button.addEventListener("click", async () => {
        const url = await getImages(query).then((value) => {return value})
        output.src = url
        button.innerHTML = "image displayed"
    })
}
displayImage()


// const output = document.querySelector("")
/*
async function setImage(){
    const url = await getImages("dogs")
    const output = document.getElementById("output")
    output.src = url
}

button.addEventListener("click", function() {
    () => setImage()
})
*/