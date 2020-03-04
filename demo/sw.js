self.addEventListener('install', function (event) {
    console.log('SW installed');
    event.waitUntil(caches.open('static')
        .then(function (cache) {
            cache.addAll([
                '/',
                '/index.html',
                '/assets/css/index.css',
                '/assets/css/carousel.css',
                '/assets/pic1.jpg',
                '/assets/pic2.jpg',
                '/assets/pic3.jpg',
                '/assets/pic4.jpg',
                '/assets/pic5.jpg',
                '/assets/search-icon.png',
            ])
        }))

})


self.addEventListener('activate', function () {
    console.log('SW activated');
})

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(res => {
                if (res) {
                    return res;
                } else {
                    return fetch(event.request);
                }
            })
    )
})