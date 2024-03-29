document.addEventListener('DOMContentLoaded', () => {
    coderIndex()
    showCoder()
})

function coderIndex() {
    const endPoint = 'http://localhost:3000/api/v1/coders'
    fetch(endPoint)
        .then(res => res.json())
        .then (json => {
            //console.log(json)
            json.forEach(function(coder){
                const newCoder = new Coder(coder)
                //console.log(newCoder)
                document.getElementById('coders-list').innerHTML += newCoder.formatCoder()
            })
        })
}

 function showCoder() {
    alert('hey!')
    const endPoint = `http://localhost:3000/api/v1/coders/dataset.id`
    fetch(endPoint)
        .then(res =>res.json())
        .then(json => {
            console.log(json)
        })
 }

class Coder {
    constructor(coder) {
        this.id = coder.id
        this.name = coder.name;
        this.language = coder.language;
        this.hackathons = coder.hackathons;
    }

    formatCoder(){
        const formattedCoder =
            `<ul> Name: <a href='#' onclick='showCoder()' data-id=${this.id}> ${this.name} </a> - Language: ${this.language} </ul>`
        return formattedCoder
    }

    formatCoderDetails(){
        //this would have the coder's name, and language, AND all of the coder's hackathons
    }
}

//total of 3 ajax requests

//2 get requests in this project:
    //1) get index (array of coder objects) to /coders
    //2) get show (1 coder object) to /coders/:id; 
    //and this object will have nested inside it, an array of the hackathons it has_many of

//1 post request in this project:
    // post to create action to make either a hackathon or make a coder in our back end


//NEXT STEPS

//1) compose showCoder() to fetch a coder instance and pass the json to our constructor to make a js object which we would then
// call formatCoderDetails() on.
        //need to get dataset.id on line 22 to actually be dynamic

        //note: we need to check our routes
//2) build a show view
//3) on that show view, also render the many hackathons for the has_many requirement