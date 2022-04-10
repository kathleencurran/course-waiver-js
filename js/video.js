var video = document.querySelector(".video");

// all the buttons
playButton = document.querySelector("#play");
pauseButton = document.querySelector("#pause");
slowerButton = document.querySelector("#slower");
speedUpButton = document.querySelector("#faster");
skipButton = document.querySelector("#skip");

muteButton = document.querySelector("#mute");
volumeSlider = document.querySelector("#slider");

vintageButton = document.querySelector("#vintage");
originalButton = document.querySelector("#orig");

// window.addEventListener("load", function () {
//   console.log("Good job opening the window");
// });

// ~~~~~~Play/Pause video~~~~~~~
playButton.addEventListener("click", function () {
  console.log("Play Video");
  video.play();

  document.querySelector("#volume").innerHTML = volumeSlider.value;
});

pauseButton.addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

// ~~~~~~~~~~~~~~ Slowing Down/Speeding Up ~~~~~~~~~~~~~~~~`

let fivePC;

slowerButton.addEventListener("click", function () {
  fivePC = video.playbackRate * 0.05;
  video.playbackRate -= fivePC;
  console.log("slowing down to playback of ", video.playbackRate);
});

speedUpButton.addEventListener("click", function () {
  fivePC = video.playbackRate * 0.05;
  video.playbackRate += fivePC;
  console.log("speeding up to ", video.playbackRate);
});

// ~~~~~~~~~~~~~~ Muting/Unmuting ~~~~~~~~~~~~~~
muteButton.addEventListener("click", function () {
  if (video.muted == false) {
    video.muted = true;
    muteButton.innerHTML = "Unmute";
    console.log("muted");
  } else {
    video.muted = false;
    muteButton.innerHTML = "Mute";
    console.log("unmuted");
  }
});

// ~~~~~~~~~~~~~~ Skip Button ~~~~~~~~~~~~~~
skipButton.addEventListener("click", function () {
  console.log("original time", video.currentTime);
  video.currentTime += 15;
  console.log("new time", video.currentTime);

  if (video.currentTime >= video.duration) {
    video.loop = true;
    video.currentTime = 0;
    console.log("new time", video.currentTime);
    console.log("back to the beginning");
  }
});

// ~~~~~~~~~~~~~~ Volume Slider ~~~~~~~~~~~~~~
volumeSlider.addEventListener("change", function (e) {
  console.log(e.target.value);
  let volume = e.target.value;

  document.querySelector("#volume").innerHTML = volume;
  video.volume = volume / 100;
  console.log(video.volume);
});

//~~~~~~~~~~~~~~ Styling Changes ~~~~~~~~~~~~~~
vintageButton.addEventListener("click", function () {
  video.classList.add("oldSchool");
});

originalButton.addEventListener("click", function () {
  video.classList.remove("oldSchool");
});
