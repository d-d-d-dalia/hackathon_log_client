document.addEventListener('DOMContentLoaded', () => {
    alert("HEYY!")
    const endPoint = 'http://localhost:3000/api/v1/coders'
    fetch(endPoint)
        .then(res => res.json())
        .then (function(json){
            const coder = new Coder(json);
            console.log('hey!')
        })
})

class Coder {

    constructor(coder) {
        this.name = coder.name;
        this.language = coder.language;
    }

}