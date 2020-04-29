let current_room = "mailbox"

let oswaldFont

let mail

let v_1

let t_1 = "It is currently 8:00 p.m. on Halloween night.  You just got back home from work.  You are tired, and all you want is this day to be over.  You are by your mailbox.  Green - open mailbox"

// Blue - go inside

let t_2 = "You open the mailbox and expect that there is nothing in there.  You usually get your bills on Thursday and not on Monday.  To your surprise, there is an envelope in there.  A black envelope, you are puzzled by this envelope.  Red - open envelope, Blue - go inside"

let t_3 = "You decide to leave the black envelope in the mailbox.  As you walk up to your driveway, you hear rustling in your hedges.  You suspect it is that damn neighborhood cat crapping in your yard again.  You continue walking to your door.  As you start unlocking your door, you hear running behind you.  You try to turn around, but it is too late.  You died, and your body goes missing without a trace.  Did it have something to do with the black envelope? Green - mailbox"

let t_4 = "You open the letter slowly and suspiciously.  There is no stamp or return address on the envelope.  You suspect that this letter was hand-delivered.  As you open the envelope, you quickly check your surroundings.  There is nothing to be seen.  You grab a letter out of the envelope and read what it has to say.  It says MEET ME AT THE PARK AT MIDNIGHT.  Color escapes your face as you stand there, petrified.  BLUE - call cops, YELLOW - go to the park."

let t_5 = "You call the cops and talk with them for 15 minutes.  They tell you it is probably a prank and not to worry about it.  It is perhaps a couple of teens pranking you on Halloween. They hang up the phone as they are quite busy on Halloween night.  The cops reassure you but, at the same time, you are curious as to who will be at the park tonight at midnight.  RED - go to the park."

let t_6 = "You decided to go to the park to confront the teens who probably wrote the letter.  It is midnight, and no one is there.  You laugh and start to walk away.  You feel stupid for coming, and you begin to turn around to walk away.  Then you hear cracks in the bushes behind you. BLUE - run, GREEN - stand your ground."

let t_7 = "You decide to run away, and you fear for your life.  Your heart is pumping, you are sweating, and you are full of adrenaline.  As you are running, you hear something running behind you.  It is getting closer.  You make it to the main road, and you take a left turn down a street.  You climb a fence to evade the thing chasing you.  As you get over the fence, you hear something run past you. RED - stay in the backyard, YELLOW - take a peak over the fence."

let t_8 = "You decide to stand your ground.  The cracking noise is getting dangerously close to you.  Five seconds feels like an hour.  Suddendly you see a dark figure in the darkness.  A suited man emerges from the darkness and he is holding a gun. RED - fight, BLUE - Surrender."

let t_9 = "You stay in the backyard.  The homeowners hear you jump the fence.  They call the cops and arrest you for trespassing. GREEN - take a peak over the fence."

let t_10 = "You take a peak over the fence and see a dark figure run down the street.  BLUE - stay in backyard, RED - follow the figure."

let t_11 = "You try to fight the man but he shoots you during the struggle.  You should have surrendered.  GREEN - stand your ground"

let t_12 = "You surrender and he asks you where the money is.  RED - hand him your wallet, YELLOW - ask him what money."

let t_13 = "You hand him your wallet.  The gunman taks it and he says that is not the money I am talking about.  He pistol whips you and you are now unconicious."

let t_14 = "What money are you talking about?"

let t_15 = "Open Mailbox"

let t_16 = "Open Envelope"

let t_17 = "Go Inside"

let t_18 = "Call Cops"

let t_19 = "Go To The Park"

function preload() {

    oswaldFont = loadFont("o.ttf")

    mailbox = loadImage("mail.jpg")

    v_1 = loadSound("v_1.mp3")

}


function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(800, 600).parent('p5')

}

function draw() {

    background(0, 0, 0)

    print(current_room)

    //choice 1 - red
    fill(138,3,3)
    rect(0,400,400,100)

    //choice 2 - green
    fill(0,100,0)
    rect(400,400,400,100)

    //choice 3 - blue
    fill(10, 10, 44)
    rect(0, 500, 400, 100)

    //choice 4 - yellow
    fill(99,99,59)
    rect(400, 500, 400, 100)


    if (current_room == "mailbox") {

        fill(255, 255, 255)
        textFont(oswaldFont)
        textSize(24)
        text(t_1, 50, 50, 700, 550)
        text(t_15,530,460)
        v_1.play()

        // image(mail, 800, 0, 100, 100)
        //...

    }

    if (current_room == "open mailbox") {

        fill(255, 255, 255)
        text(t_2, 50, 50, 700, 550)
        text(t_16,130, 460)
        text(t_17,130, 560)

    }

    if (current_room == "go inside") {

        fill(255, 255, 255)
        text(t_3, 50, 50, 700, 550)

    }

    if (current_room == "open envelope") {

        fill(255, 255, 255)
        text(t_4, 50, 50, 700, 550)
        text(t_18,130, 560)
        text(t_19,530,560)

    }

    if (current_room == "call cops") {

        fill(255, 255, 255)
        text(t_5, 50, 50, 700, 550)

    }

    if (current_room == "go to the park") {

        fill(255, 255, 255)
        text(t_6, 50, 50, 700, 550)

    }

    if (current_room == "run") {

        fill(255, 255, 255)
        text(t_7, 50, 50, 700, 550)

    }

    if (current_room == "stand your ground") {

        fill(255, 255, 255)
        text(t_8, 50, 50, 700, 550)

    }

    if (current_room == "stay in backyard") {

        fill(255, 255, 255)
        text(t_9, 50, 50, 700, 550)

    }

    if (current_room == "peak fence") {

        fill(255, 255, 255)
        text(t_10, 50, 50, 700, 550)

    }

    if (current_room == "fight") {

        fill(255, 255, 255)
        text(t_11, 50, 50, 700, 550)

    }

    if (current_room == "surrender") {

        fill(255, 255, 255)
        text(t_12, 50, 50, 700, 550)

    }

    if (current_room == "hand wallet") {

        fill(255, 255, 255)
        text(t_13, 50, 50, 700, 550)

    }

    if (current_room == "what money") {

        fill(255, 255, 255)
        text(t_14, 50, 50, 700, 550)

    }

}

function mouseClicked() {

    print(int(mouseX), int(mouseY))

    if (mouseX > 0 && mouseX < 400 && mouseY > 400 && mouseY < 500) {
        print("RED")

        if (current_room == "open mailbox") {
            current_room = "open envelope"
        }

        if (current_room == "call cops") {
            current_room = "go to the park"
        }

        if (current_room == "run") {
            current_room = "stay in backyard"
        }

        if (current_room == "stand your ground") {
            current_room = "fight"
        }

        if (current_room == "surrender") {
            current_room = "hand wallet"
        }

    }

    if (mouseX > 400 && mouseX < 800 && mouseY > 400 && mouseY < 500) {
        print("GREEN")

        if (current_room == "mailbox") {
            current_room = "open mailbox"
        }

        if (current_room == "go inside") {
            current_room = "mailbox"
        }

        if (current_room == "go to the park") {
            current_room = "stand your ground"
        }

        if (current_room == "stay in backyard") {
            current_room = "peak fence"
        }

        if (current_room == "fight") {
            current_room = "stand your ground"
        }

    }

    if (mouseX > 0 && mouseX < 400 && mouseY > 500 && mouseY < 600) {
        print("BLUE")

        if (current_room == "mailbox") {
            current_room = "go inside"
        }

        if (current_room == "open mailbox") {
            current_room = "go inside"
        }

        if (current_room == "open envelope") {
            current_room = "call cops"
        }

        if (current_room == "go to the park") {
            current_room = "run"
        }

        if (current_room == "stand your ground") {
            current_room = "surrender"
        }

        if (current_room == "peak fence") {
            current_room = "stay in backyard"
        }


    }

    if (mouseX > 400 && mouseX < 800 && mouseY > 500 && mouseY < 600) {
        print("YELLOW")

        if (current_room == "open envelope") {
            current_room = "go to the park"
        }

        if (current_room == "run") {
            current_room = "peak fence"
        }

        if (current_room == "surrender") {
            current_room = "what money"
        }

    }

}
