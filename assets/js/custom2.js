addSimMessageHandler("web", (data) => {
    switch(data.action) {
        case "open":
            const url = data.url;
            window.open(url, "_blank");
            break;
    }                    
})
