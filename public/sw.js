let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/static/media/Background5.ee6aed90144fb9cc8818.jpg',
                '/static/media/BloodyScreenBG.bf7d753ee003a641d083.png',
                '/static/media/Immunocalypse-icon.dceaed6ad5d9ab2c4b58.png',
                '/static/media/GameName.0d09f05d07afcaedcada.png',
                '/static/media/GameName2.4bfe94a4fa08b5486a03.png',
                '/static/media/Gallary2.8d1b8720043b2c4b7426.png',
                '/static/media/Gallary3.774e5b61fc43bb44208c.png',
                '/static/media/Gallary4.57e6e710c531ca0db947.png',
                '/static/media/Insta.e9857db10ca57d66ad36.png',
                '/static/media/Immunocalypse2-Icon.bdad6b135d75e6552b06.png',
                '/Immunocalypse2-Icon.png',
                '/index.html',
                '/',
                "/Home"

            ])
        })
    )
})
this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((resp) => {
            if (resp) {
                return resp
            }
        })


    )
})