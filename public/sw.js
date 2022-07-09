let cacheData = "MyAppCache";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/.*\\.js',
                '/static/css/.*\\.css',
                '/static/media/.*\\.png',
                '/static/media/.*\\.jpg',
                'https:.*/static/js/.*\\.js',
                'https:.*/static/css/.*\\.css',
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