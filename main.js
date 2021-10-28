status1 = ""
img = ""

function preload() {
    img = loadImage("dog_cat.jpg")
}

function setup(){
    canvas = createCanvas(640,420)
    canvas.center()
    objectdetector = ml5.objectDetector('cocossd', modelloaded)
    document.getElementById("status1").innerHTML = "status:detecting objects";
}

function draw() {
    image(img,0,0,640,420)
    /*fill("red")
    text("dog",85,75)
    noFill()
    stroke("blue") 
    rect(30,60,450,350)

    fill("Red")
    text("cat", 350, 100)
    noFill()
    stroke("black")
    rect(300,80,275,300)*/
}

function modelloaded() {
    console.log("cocossd model has been loaded correctly")
    status1 = true
    objectdetector.detect(img,gotresults)
}

function gotresults(error, results) {
    if(error) {
        console.log(error)
    }
    else(console.log(results)
    )
}