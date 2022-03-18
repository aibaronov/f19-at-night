//Step 1: Grab your element
const input = document.querySelector("#input-bar")
const button = document.querySelector("button");
//Step 2: Write your functionality
function postThing(){
    let thing = {
        text: input.value
    };
    axios.post("http://locahost:4005/yo", thing)
    .then((res) => {
        alert(res.data);
    }).catch((err) =>{
        console.log(err);
    });
}


console.log(input.value);
//Step 3: Use addEventListener to combine them
button.addEventListener("click", postThing)