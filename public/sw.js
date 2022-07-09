let cacheData = "MyAppCache";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/static/js/main.7dd794ba.js',
                '/static/css/main.ac19865a.css',
                '/static/css/main.56bafd35.css',
                '/static/js/main.0766d5a8.js',
                '/static/css/main.4a87bccc.css',
                '/manifest.json',
                '/static/media/Background7.2ed50cea59e8cc231adf.jpg',
                '/static/media/Background5.ee6aed90144fb9cc8818.jpg',
                '/static/media/BloodyScreenBG.5772cdb53134222a9d7a.png',
                '/static/media/Immunocalypse-icon.dceaed6ad5d9ab2c4b58.png',
                '/static/media/GameName.0d09f05d07afcaedcada.png',
                '/static/media/GameName2.4bfe94a4fa08b5486a03.png',
                '/static/media/Gallary2.8d1b8720043b2c4b7426.png',
                '/static/media/Gallary3.774e5b61fc43bb44208c.png',
                '/static/media/Gallary4.57e6e710c531ca0db947.png',
                '/static/media/Insta.e9857db10ca57d66ad36.png',
                '/static/media/Immunocalypse2-Icon.bdad6b135d75e6552b06.png',
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
//var condition=navigator.onLine?'online':'offline';
    this.addEventListener("fetch", (event) => {
        //if(condition==='offline'){
            //console.log("Offline");
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
            })


        )
    //}
    })