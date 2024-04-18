document.getElementById('ExKMC').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'block';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'none';
});

document.getElementById('ICOT').addEventListener('click', function() {
    document.getElementById('ICOT_resultiframe').src = 'ICOT_result.html';
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'block';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'none';
});

document.getElementById('ExShallow').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'block';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'none';
});

document.getElementById('K-means+CART').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'block';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'none';
});

document.getElementById('Recall').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'block';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'none';
});
document.getElementById('F1-score').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'block';
    document.getElementById('Precision_result').style.display = 'none';
});
document.getElementById('Precision').addEventListener('click', function() {
    document.getElementById('ExKMC_result').style.display = 'none';
    document.getElementById('ICOT_result').style.display = 'none';
    document.getElementById('ExShallow_result').style.display = 'none';
    document.getElementById('K-means+CART_result').style.display = 'none';
    document.getElementById('Recall_result').style.display = 'none';
    document.getElementById('F1-score_result').style.display = 'none';
    document.getElementById('Precision_result').style.display = 'block';
});


// Get the result2 container and its child image
const result2Container = document.getElementById('ExKMC_result');
const result2Image = result2Container.querySelector('img');

// Set initial scale factor
let scale = 1;

// Function to handle zooming in
function zoomIn() {
    scale += 0.1; // Increase scale factor
    result2Image.style.transform = `scale(${scale})`; // Apply scale transformation to the image
}

// Function to handle zooming out
function zoomOut() {
    scale -= 0.1; // Decrease scale factor
    // Ensure scale factor does not go below 1 (original size)
    scale = Math.max(1, scale);
    result2Image.style.transform = `scale(${scale})`; // Apply scale transformation to the image
}

// Add event listeners for mouse wheel events to zoom in and out
result2Container.addEventListener('wheel', function(event) {
    event.preventDefault(); // Prevent default scroll behavior
    if (event.deltaY < 0) {
        // Zoom in when scrolling up
        zoomIn();
    } else {
        // Zoom out when scrolling down
        zoomOut();
    }
});

// Add event listeners for touch gestures to zoom in and out
let touchStartDistance = 0;

result2Container.addEventListener('touchstart', function(event) {
    if (event.touches.length === 2) {
        // Store initial distance between two touch points
        touchStartDistance = Math.hypot(
            event.touches[0].clientX - event.touches[1].clientX,
            event.touches[0].clientY - event.touches[1].clientY
        );
    }
});

result2Container.addEventListener('touchmove', function(event) {
    if (event.touches.length === 2) {
        // Calculate current distance between two touch points
        const touchMoveDistance = Math.hypot(
            event.touches[0].clientX - event.touches[1].clientX,
            event.touches[0].clientY - event.touches[1].clientY
        );

        // Determine zoom direction based on change in distance
        if (touchMoveDistance > touchStartDistance) {
            zoomIn();
        } else {
            zoomOut();
        }

        // Update start distance for next touch move event
        touchStartDistance = touchMoveDistance;
    }
});
