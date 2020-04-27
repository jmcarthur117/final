let me

function preload() {

  me = loadImage("me.jpg")

}

function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(800, 600).parent('p5')

}

function draw() {

    background(200)

    //HUD
    fill(100,100,100)

    //choice 1
    fill(255,0,0)
    rect(0,0,400,300)

    //choice 2
    fill(0,128,0)
    rect(400,0,400,300)

    //choice 3
    fill(0, 0, 255)
    rect(0, 300, 400, 300)

    //choice 4
    fill(255,255,0)
    rect(400, 300, 400, 300)

    // image(me, mouseX, mouseY, me.width/4, me.height/4)

}

function mouseClicked() {

    print(int(mouseX), int(mouseY))

    if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 300) {
        print("Clicked red button")
    }

    if (mouseX > 400 && mouseX < 800 && mouseY > 0 && mouseY < 300) {
        print("Clicked green button")
    }

    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 600) {
        print("Clicked blue button")
    }

    if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 600) {
        print("Clicked yellow button")
    }

}
