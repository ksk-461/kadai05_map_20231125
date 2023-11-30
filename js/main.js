(g => {
    var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__",
    m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}),
        r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => {
            await (a = m.createElement("script"));
            e.set("libraries", [...r] + "");
            for (k in g) e.set(k.replace(/[A-Z]/g, t =>
                "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q);
            a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
            d[q] = f; a.onerror = () =>
                h = n(Error(p + " could not load."));
            a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a)
        }))
        ; d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))
})({
    key: Akey,
});

// 初期化、マップの追加
async function initMap() {
    // 必要なライブラリーの読込
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 43.06051, lng: 141.35372 }, //札幌市大通中心に
        mapId: Mid, //隠す必要ある？
    });


    const infoWindow = new InfoWindow(); // infoWindoの生成

    // マーカーの生成
    tourStops.forEach(({ position, id, icon, name, door, restroom, url }, i) => {
        const pin = new PinElement({
            glyph: id, //idをマーカーに表示
        });
        const marker = new AdvancedMarkerElement({
            position,
            map,
            title: `<div class="info">
                        <img class="icon" src="${icon}">
                        <p>${id}</p>
                        <h2>${name}</h2>
                        <p>ドア: ${door}（進行方向）</p>
                        <p>トイレ： ${restroom}</p>
                        <p><a href=${url}>駅構内図</a></p>
                    </div>`,
            content: pin.element,
        });

        // クリックイベント
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.title);
            infoWindow.open(marker.map, marker);
        });
    });
}

initMap();