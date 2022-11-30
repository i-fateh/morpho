function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let morphoMove = document.getElementsByTagName('img');
let morphoContainer = document.getElementById('container');
let title = document.getElementById('title');
let body = document.body;
let colors = ['#c0392b' , '#033134', '#17944b', '#8e44ad', '#174e72', '#2c3e50']
let fonts = ["Courier New, Courier, monospace", "Impact,Charcoal,sans-serif", "Verdana, Geneva, Tahoma, sans-serif", 
"Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
]
const interval = setInterval(() => {
   
    body.style.backgroundColor = colors[getRandomInt(5)]
    document.getElementById('blob1').style.width = `${getRandomInt(1300)}px`
    document.getElementById('blob1').style.height = `${getRandomInt(1300)}px`
    document.getElementById('blob1').style.transform = `rotate(${getRandomInt(360)}deg)`

    document.getElementById('blob2').style.width = `${getRandomInt(1500)}px`
    document.getElementById('blob2').style.height = `${getRandomInt(1500)}px`
    document.getElementById('blob2').style.transform = `rotate(${getRandomInt(360)}deg)`

    document.getElementById('blob3').style.width = `${getRandomInt(1300)}px`
    document.getElementById('blob3').style.height = `${getRandomInt(1300)}px`
    document.getElementById('blob3').style.transform = `rotate(${getRandomInt(360)}deg)`

    morphoContainer.style.borderTopLeftRadius = `${getRandomInt(300)}px`
    morphoContainer.style.borderBottomRightRadius = `${getRandomInt(300)}px`
    Array.from(morphoMove).map(x => x.style.clipPath = `polygon(${getRandomInt(50)}% ${getRandomInt(0)}%, ${getRandomInt(100)}% ${getRandomInt(100)}%, ${getRandomInt(0)}% ${getRandomInt(100)}%)`)
    Array.from(morphoMove).map(x => x.style.width = `${getRandomInt(1150)}px`)
    Array.from(morphoMove).map(x => x.style.height = `${getRandomInt(1150)}px`)
  }, 3000);
  () => clearInterval(interval);