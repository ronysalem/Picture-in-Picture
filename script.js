const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt the user to select a media stream, pass to video elemnt , then play
async function selectMediaStream (){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata=()=>{
            videoElement.play();
        }
    }catch(error) {
        // error here
    }
}
button.addEventListener('click',async ()=>{
    // Disable Button
    button.disabled =true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled=false;
});
// onload
selectMediaStream();