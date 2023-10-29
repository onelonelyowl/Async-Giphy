require('dotenv').config();
// Print out value of API key stored in .env file
async function getImages(query){ // returns an image from a giphy search
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const json = await fetch(endpoint)
    const processed = await json.json()
    return await processed
}
async function getRandomImages(query){ // this function returns a random image of the first 25 in the search
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const json = await fetch(endpoint)
    const processed = await json.json()
    const randomNumber = Math.floor(Math.random() * 25)
    return processed["data"][0]["url"]
}
async function getSpecificImage(query, index){ // this function returns a random image of the first 25 in the search
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const json = await fetch(endpoint)
    const processed = await json.json()
    return processed["data"][index]["url"]
}
async function helperFunction(){
    let images = [];
    for(let i = 0; i < 25; i++){
        const result = await getSpecificImage("dog", i)
        images.push(result)
    }
    return images
}
async function helperFunctionSingular(){
    const promise = await getImages("dog")
    // promise.then((value) => {return value})
    if(promise) {
        return promise["data"][0]["url"]
    }
}
console.log(helperFunctionSingular())
// console.log(getImages("dog"))