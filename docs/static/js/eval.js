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


// Dictionary for task names and their captions
const taskCaptions = {
    "close_jar": ["close the silver jar. (success)", "pick up the lid from the table and put it on the navy jar. (success)", "screw on the cyan jar lid. (success)", "grasping the lid, lift it from the table and use it to seal the white jar. (success)", "screw on the yellow jar lid. (success)"],
    "open_drawer": ["open the bottom drawer. (success)", "open the top drawer. (success)", "grip the bottom handle and pull the bottom drawer open. (success)", "slide the middle drawer open. (success)", "grip the middle handle and pull the middle drawer open. (fail)"],
    "meat_off_grill": ["take the steak off the grill. (success)", "pick up the chicken and place it next to the grill. (success)", "remove the chicken from the grill and set it down to the side. (fail)", "pick up the chicken and place it next to the grill. (success)", "take the steak off the grill. (success)"],
    "slide_block_to_color_target": ["slide the block to orange target. (success)", "slide the block onto the green square. (success)", "push the block until it is sitting on top of the magenta target. (success)", "slide the block towards the blue plane. (success)", "cover the yellow target with the block by pushing the block in its direction. (fail)"],
    "put_item_in_drawer": ["put the item in the middle drawer. (success)", "put the block away in the bottom drawer. (fail)", "open the top drawer and place the block inside of it. (success)", "leave the block in the middle drawer. (success)", "put the block away in the bottom drawer. (success)"],
    "push_buttons": ["push the maroon button, then push the green button, then push the teal button. (success)", "press the maroon button, then press the blue button. (success)", "push down the button with the maroon base, then the green one, then the navy one. (success)", "push the maroon button, then push the blue button, then push the orange button. (fail)", "press the maroon button, then press the green button. (success)"],
    "stack_blocks": ["stack 2 red blocks. (success)", "place 3 of the gray cubes on top of each other. (success)", "pick up and set down 3 violet blocks on top of each other. (fail)", "build a tall tower out of 2 purple cubes. (success)", "arrange 3 teal blocks in a vertical stack on the table top. (success)"],
    "place_cups": ["place 1 cup on the cup holder. (success)", "move 2 cups from the table to the mug tree. (fail)", "pick up 3 mugs and slide their handles onto the cup holder spokes. (fail)", "pick up one cup and slide its handle onto a spoke on the mug holder. (fail)", "place 3 cups on the cup holder. (fail)"],
    "place_wine_at_rack_location": ["stack the wine bottle to the right of the rack. (success)", "slide the bottle onto the left part of the rack. (success)", "put the wine on the middle. (success)", "leave the wine on the right section of the shelf. (success)", "grasp the bottle and put it away on the middle. (fail)"],
    "light_bulb_in": ["screw in the cyan light bulb. (success)", "screw the light bulb from the white holder into the lamp. (fail)", "pick up the light bulb from the magenta stand, lift it up to just above the lamp, then screw it down into the lamp in a clockwise fashion. (success)", "put the light bulb from the white casing into the lamp. (success)", "screw in the orange light bulb. (success)"],
    "insert_onto_square_peg": ["put the ring on the purple spoke. (success)", "slide the ring onto the azure colored spoke. (success)", "place the ring onto the black spoke. (success)", "slide the ring onto the olive colored spoke. (fail)", "place the ring onto the red spoke. (success)"],
    "stack_cups": ["stack the other cups on top of the cyan cup. (success)",  "put the remaining two cups on top of the violet cup. (success)", "pick up and set the cups down into the gray cup. (success)", "keeping the silver cup on the table, stack the other two onto it. (success)", "stack the other cups on top of the olive cup. (fail)"]
};

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

    // Update the title based on the selected task and instance
    const titleElement = document.getElementById('video-title');
    titleElement.innerHTML = `<strong>${taskCaptions[taskValue][instanceValue - 1]}</strong>`; // Use innerHTML to maintain bold
}