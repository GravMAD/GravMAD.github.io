function updateOverallVideo() {
    const taskValue = document.getElementById('overall-menu-tasks').value.replace(/ /g, "_");
    const instanceValue = document.getElementById('overall-menu-instances').value;

    // Base paths for each category of video
    const basePaths = {
        'voxposer': './static/video/voxposer/',
        'act3d': './static/video/act3d/',
        '3dda': './static/video/3dda/',
        'gravmad': './static/video/gravmad/',
    };

    // Update each video source according to its base path
    for (const [category, basePath] of Object.entries(basePaths)) {
        const videoElement = document.getElementById(`${category}-video`);
        const sourceElement = videoElement.querySelector('source');
        sourceElement.src = `${basePath}${taskValue}_demo_${instanceValue}.mp4`;
        videoElement.load(); // Reload video with new source
    }
}


function updateSingleVideo() {
    const taskValue = document.getElementById('single-menu-tasks').value.replace(/ /g, "_");
    const instanceValue = document.getElementById('single-menu-instances').value;

    // Base path for the single-task video
    const basePath = './static/video/base_gravmad/';

    // Update the video source for the single-task video
    const videoElement = document.getElementById('multi-task-result-video');
    const sourceElement = videoElement.querySelector('source');
    sourceElement.src = `${basePath}${taskValue}_demo_${instanceValue}.mp4`;
    videoElement.load(); // Reload video with new source
}