function updateInteractive() {
    const selectMenu = document.getElementById('interactive-menu');
    const selectedValue = selectMenu.value;

    const videoSources = {
        "close-jar-banana": "static/valuemap/close_jar_banana.mp4",
        "open-drawer-small": "static/valuemap/open_drawer_small.mp4",
        "meat-on-grill": "static/valuemap/meat_on_grill.mp4",
        "push-buttons-light": "static/valuemap/push_buttons_light.mp4"
    };

    const iframeSources = {
        "close-jar-banana": ["static/valuemap/close_jar_banana_map1.html", "static/valuemap/close_jar_banana_map2.html"],
        "open-drawer-small": ["static/valuemap/open_drawer_small_map1.html", "static/valuemap/open_drawer_small_map2.html"],
        "meat-on-grill": ["static/valuemap/meat_on_grill_map1.html", "static/valuemap/meat_on_grill_map2.html"],
        "push-buttons-light": ["static/valuemap/push_buttons_light_map1.html"]
    };

    const videoElement = document.getElementById('interactive-video');
    videoElement.src = videoSources[selectedValue];
    videoElement.load();

    const iframeContainer = document.getElementById('iframe-container');
    iframeContainer.innerHTML = ''; // Clear existing columns

    iframeSources[selectedValue].forEach((src, index) => {
        const column = document.createElement('div');
        column.className = 'column has-text-centered';

        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.width = "100%";
        iframe.height = "300";
        iframe.frameBorder = "0";

        const p = document.createElement('p');
        p.innerText = `Interactive GravMap ${index + 1}`; // Dynamic label based on index
        p.style.textAlign = "center";

        column.appendChild(iframe);
        column.appendChild(p);
        iframeContainer.appendChild(column);
    });
}
