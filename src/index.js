document.addEventListener("DOMContentLoaded",()=>{
console.log('%c HI', 'color: firebrick')

//one
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
 fetch(imgUrl)
 .then((resp)=>resp.json())
 .then((data)=>{
    data.message.forEach(imagUrl => {
        const image = document.createElement("image")
        img.src= imagUrl
        document.getElementById("dog-image-container").appendChild(image)

    });
 })
 //two
 const breedUrl = "https://dog.ceo/api/breeds/list/all";
 fetch(breedUrl)
 .then((resp)=>resp.json())
 .then((data)=>{
    const dogBreeds= Object.keys(data.message);
    const breedList = document.getElementById("dog-breeds")
    dogBreeds.forEach((dogBreeds)=>{
        const li = document.createElement("li")
        li.textContent=dogBreeds;
        breedList.appendChild(li)
    })
 })
 //three
 document.getElementById("dog-breeds").addEventListener("click",(event)=>{
    if(event.target.tagName === "LI"){
    event.target.style.color= "red"}
 })
 //four
 document.getElementById("breed-dropdown").addEventListener("change", (event) =>{
    const selectedLetter = event.target.value;
    const breedList = document.getElementById("dog-breeds");
    const breedItems = breedList.getElementsByTagName("li");
    for (let i = 0; i < breedItems.length; i++) {
        const breedName = breedItems[i].textContent;
        if (breedName.startsWith(selectedLetter)) {
            breedItems[i].style.display = "list-item"; 
        } else {
            breedItems[i].style.display = "none"; 
        }
    }
});
})
