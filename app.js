const titles = ["Web Developer", "JavaScript Enthusiast", "AI/ML Learner", "Cloud Practitioner"];
let titleIndex = 0;
let charIndex = 0;
let isTyping = true; // To determine if we are typing or deleting

function typeTitle() {
    const currentTitle = titles[titleIndex];

    if (isTyping) {
        if (charIndex < currentTitle.length) {
            document.getElementById("title").innerHTML += currentTitle.charAt(charIndex);
            charIndex++;
            setTimeout(typeTitle, 200); // 200 ms delay for typing
        } else {
            // After typing the full title, switch to deleting
            isTyping = false;
            setTimeout(typeTitle, 1000); // Wait for 1 second before starting to delete
        }
    } else {
        if (charIndex > 0) {
            document.getElementById("title").innerHTML = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeTitle, 100); // 100 ms delay for deleting
        } else {
            // After deleting the full title, switch to the next title
            isTyping = true;
            titleIndex = (titleIndex + 1) % titles.length; // Move to the next title
            charIndex = 0; // Reset character index for the next title
            setTimeout(typeTitle, 500); // Wait for 0.5 seconds before starting to type the next title
        }
    }
}

window.onload = typeTitle;
