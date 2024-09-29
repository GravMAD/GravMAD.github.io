function updateInteractive() {
    const selectMenu = document.getElementById('interactive-menu');
    const selectedValue = selectMenu.value;

    // 预定义视频和iframe的路径
    const videoSources = {
        "close-jar-banana": "static/valuemap/close_jar_banana.mp4",
        "close-drawer": "static/videos/n10_open_drawer_2.mp4",
        "get-napkin": "media/videos/get-napkin.mp4",
        "open-bottle": "media/videos/open-bottle.mp4",
        "turn-on-light": "media/videos/turn-on-light.mp4"
    };

    const iframeSources = {
        "close-jar-banana": "./static/valuemap/close_jar_banana_map1.html",
        "close-drawer": "media/interactive/close-drawer.html",
        "get-napkin": "media/interactive/get-napkin.html",
        "open-bottle": "media/interactive/open-bottle.html",
        "turn-on-light": "media/interactive/turn-on-light.html"
    };

    // 更新视频源
    const videoElement = document.getElementById('interactive-video');
    videoElement.src = videoSources[selectedValue];
    videoElement.load();

    // 更新iframe源
    const firstIframe = document.getElementById('interactive-html-1');
    const secondIframe = document.getElementById('interactive-html-2');

    firstIframe.src = iframeSources[selectedValue];
    secondIframe.src = iframeSources[selectedValue]; // 假设两个iframe需要显示相同内容，根据需要可分别指定不同路径
}