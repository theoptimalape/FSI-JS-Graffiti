let header = document.querySelector("#page-header")
header.style.textAlign = "left"


let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

let dogNames = document.querySelectorAll(".dog-name")
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = "left"
}

let footerTxt = document.querySelector(".footer")
footerTxt.style.color = "blue"

let flip = document.querySelectorAll(".dog-image")
for(let i = 0; i < flip.length; i++){
    flip[i].style.transform = 'scaleY(-1)'
}
// Select some elements...