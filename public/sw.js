let cacheData = "IMMUNOWRLDCache";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/css/main.904412c4.css',
                '/static/js/main.bf4f645e.js',
                '/static/media/Background5.ee6aed90144fb9cc8818.jpg',
                '/static/media/Background7.2ed50cea59e8cc231adf.jpg',
                '/static/media/BloodyScreenBG.5772cdb53134222a9d7a.png',
                '/static/media/Immunocalypse-icon.dceaed6ad5d9ab2c4b58.png',
                '/static/media/GameName.0d09f05d07afcaedcada.png',
                '/static/media/GameName2.4bfe94a4fa08b5486a03.png',
                '/static/media/Gallary2.8d1b8720043b2c4b7426.png',
                '/static/media/Gallary3.774e5b61fc43bb44208c.png',
                '/static/media/Gallary4.57e6e710c531ca0db947.png',
                '/static/media/Insta.e9857db10ca57d66ad36.png',
                '/static/media/Immunocalypse2-Icon.bdad6b135d75e6552b06.png',
                '/manifest.json',
                '/Immunocalypse2-Icon.png',
                '/Immunocalypse2-Iconb.png',
                '/Immunocalypse2-Iconc.png',
                '/index.html',
                '/',
                "/Home",
                "/Demo"

            ])
        })
    )
})
    this.addEventListener("fetch", (event) => {
        if (!navigator.onLine) {
            console.log("Offline");
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
            })


        )
    }
    })