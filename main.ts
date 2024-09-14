
game.consoleOverlay.setVisible(true)
control.runInParallel(function () {
    console.log(`connecting to wss://arcade-rtdb-default-rtdb.firebaseio.com`)

    // string tests
    const ws = new WebSocket("wss://arcade-rtdb-default-rtdb.firebaseio.com")
    ws.onerror = () => console.log("error")
    ws.onmessage = (msg) => {
        const data = msg.data;
        console.log(`[Recieved] ${data}`)
    }
    ws.onopen = () => {
        const msg = "fiya-based";
        ws.send(msg);
        console.log(`[Sent] ${msg}`);
    }
})
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240
}
scene.setBackgroundColor(11)
