(() => {
    const cheat = (async () => {
        try {
            let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
            if (stateNode.state.stage === "prize") {
                const players = Object.entries(await new Promise(r => stateNode.props.liveGameController.getDatabaseVal("c", c => c && r(c))) || []).filter(x => x[0] != stateNode.props.client.name).sort((a, b) => b[1].g - a[1].g)[0]?.[1]?.g || 0;
                let max = 0; index = -1;
                for (let i = 0; i < stateNode.state.choices.length; i++) {
                    const { type, val } = stateNode.state.choices[i];
                    let value = stateNode.state.gold;
                    switch (type) {
                        case "gold": value = stateNode.state.gold + val || stateNode.state.gold; break;
                        case "multiply":
                        case "divide": value = Math.round(stateNode.state.gold * val) || stateNode.state.gold; break;
                        case "swap": value = players || stateNode.state.gold;
                        case "take": value = stateNode.state.gold + players * val || stateNode.state.gold;
                    }
                    if ((value || 0) <= max) continue;
                    max = value, index = i + 1;
                }
                document.querySelector(`div[class^='styles__choice${index}']`).click();
            }
        } catch { }
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/gold/autoChoose.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        for (let i = 0; i < data.length; i += 4) {
            let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let iframe = document.querySelector("iframe");
        const [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);
        if (parseInt(time) <= 1693429947447 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => (img.src = null, cheat());
})();