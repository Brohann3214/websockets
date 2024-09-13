
game.consoleOverlay.setVisible(true)
control.runInParallel(function () {
    console.log(`connecting to wss://make-com.ddns.net:443`)

    // string tests
    const ws = new WebSocket("wss://make-com.ddns.net:443")
    ws.onerror = () => console.log("error")
    ws.onmessage = (msg) => {
        const data = msg.data;
        console.log(`[Recieved] ${data}`)
    }
    ws.onopen = () => {
        const msg = "no ip is working";
        ws.send(msg);
        console.log(`[Sent] ${msg}`);
    }
})
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240
}
scene.setBackgroundColor(11)
