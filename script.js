const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Cannot wait to see you on Feb 15, Love you - Vyshnav <3 .";
    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDBna2lkYjFha3R1NzRwaTM0b3l6OWU2NmxzYzdhbGhkeWNiajllZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qca5DjHlDzhrW/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";
});

// Function to move the No button randomly
function moveNoButton() {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to keep the button inside the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Generate random positions
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    // Apply new position
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Move No button on desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// Move No button on mobile touch
noBtn.addEventListener("touchstart", moveNoButton);
