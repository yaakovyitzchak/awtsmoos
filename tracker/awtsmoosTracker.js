// B"H
const video = document.getElementById('video');
const start = document.getElementById('start');
const track = document.getElementById('track');

let model;

start.onclick = async () => {
    // Load the model
    model = await facemesh.load({maxFaces: 1});

    const stream = await navigator.mediaDevices.getUserMedia({video: true});
    video.srcObject = stream;
    video.play();
    // Once the video can play through, enable the track button
    video.oncanplay = () => {
        track.disabled = false;
    };
};

track.onclick = () => {
    trackFace();
};

function trackFace() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    setInterval(async () => {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas on each frame
        context.drawImage(video, 0, 0, video.width, video.height);
        const predictions = await model.estimateFaces(
            canvas
        );

        if (predictions.length > 0) {
            predictions.forEach(prediction => {
                const keypoints = prediction.scaledMesh;

                // Draw the keypoints for each detected face.
                for (let i = 0; i < keypoints.length; i++) {
                    const x = keypoints[i][0];
                    const y = keypoints[i][1];

                    context.beginPath();
                    context.arc(x, y, 1, 0, 2 * Math.PI);
                    context.fillStyle = "red";
                    context.fill();
                }
            });
        }
    }, 100);
}
