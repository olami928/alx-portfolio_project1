let no = document.querySelector(".adviceno")
let auth = document.querySelector(".author")
let change = document.querySelector(".change")

change.addEventListener("click", getAdvice)

async function getAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    no.innerHTML = "ADVICE #"+data.sli.id;
    auth.innerHTML ='"'+data.slip.author+'"';
}