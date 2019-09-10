document.addEventListener('DOMContentLoaded', () => {
    alert("HEYY!")
    const endPoint = 'http://localhost:3000/api/v1/coders'
    fetch(endPoint)
        .then(res => res.json())
        .then (json => {
            json.forEach(function(coder){
                const newCoder = new Coder(coder)
                document.getElementById('coders-list').innerHTML = newCoder.name
                console.log(newCoder.name)
                //newCoder.formatCoder()
                //this is just here to confirm the existence of the formatCoder function
            })
        })
})

class Coder {
    constructor(coder) {
        this.name = coder.name;
        this.language = coder.language;
        this.hackathons = coder.hackathons;
    }

    formatCoder(){
        console.log('testing')

    }



}

//NEXT STEPS
//list of coders - requires us to create more coders in the db
//put the rest of the coder's info on the DOM
//extract all of this functionality into formatCoder so that it is
//reusable in another context, and call formatCoder on our new coder object