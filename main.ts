let req = ""
let myTextSprite: fancyText.TextSprite = null
let datareq = ""
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("view page"),
miniMenu.createMenuItem("create page")
)
let answer  = ''
const ws = new WebSocket("wss://eager-terms-jump.loca.lt")
control.runInParallel(function() {
    console.log(`connecting to wss://eager-terms-jump.loca.lt`)

    
    ws.onerror = () => console.log("error connecting to server, it may be offline.")
    ws.onmessage = (msg) => {
        gottenanswer = true
        const data = msg.data;
        console.log(`[Recieved] ${data}`)
        answer = `${data}`
    }
    ws.onopen = () => {
        
        //ws.send(msg);
        console.log(`connected`);
    }
})
game.consoleOverlay.setVisible(true)

namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240
}
scene.setBackgroundColor(13)

let gottenanswer = false
myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
    if (selectedIndex == 0) {
        datareq = "/pages/" + game.askForString("what is the title?", 24)
        gottenanswer = false
        ws.send(datareq)
        pauseUntil(() => gottenanswer)
        myTextSprite = fancyText.create(answer, 300, 15, fancyText.serif_small)
        if (answer.includes("https://")) {
            answer = answer.substr(1, answer.length-2)
            web.open(answer)
            console.log("link opening")
            console.log(answer)
        }
        
    }
    if (selectedIndex == 1) {
        gottenanswer = true
        req = "n/pages/" + game.askForString("what is the title?", 12) + ">" + game.askForString("sentence 1", 24) + game.askForString("sentence 2", 24) + game.askForString("sentence 3", 24)
        ws.send(req)
    }
    myMenu.close()
})
if (!(blockSettings.exists("savedusername"))){
    
}
game.onUpdateInterval(5000, function() {
    ws.send("tick")
})