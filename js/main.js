//------------overlay-------------
window.addEventListener("load", () => {
    const overlayStart = document.querySelector(".overlayAll");
    const leftStart = document.querySelector(".overlayAll__left");
    const rightStart = document.querySelector(".overlayAll__right");
    const loadingText = document.querySelector(".overlayAll p");
    setTimeout(() => {
        loadingText.style.opacity = "0";
    }, 300);
    setTimeout(() => {
        leftStart.style.width = "0";
        rightStart.style.width = "0";
    }, 1000);
    setTimeout(() => {
        overlayStart.style.display = "none";
        console.log("done");
    }, 1700);
});

//------------typing-------------

const spanDynamicText = document.querySelector(".home__animation-dynamic");
const spanCursor = document.querySelector(".home__animation-cursor");
let words = [];
words = ["I'm Krystian Kałwik ... ", "I'm Frontend Developer ..."];

const typingText = () => {
    let i = 0;
    let timer;

    const typingEffect = () => {
        let word = words[i].split("");
        const loopTyping = () => {
            if (word.length > 0) {
                spanDynamicText.textContent += word.shift();
            } else {
                deletingEffect();
                return false;
            }
            timer = setTimeout(loopTyping, 200);
        }
        loopTyping();
    }

    const deletingEffect = () => {
        let word = words[i].split("");
        const loopDeleting = () => {
            if (word.length > 0) {
                word.pop();
                spanDynamicText.textContent = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                typingEffect();
                return false;
            }
            timer = setTimeout(loopDeleting, 100);
        }
        setTimeout(loopDeleting, 1000);
    }
    typingEffect();

    const cursorVisibility = () => {
        spanCursor.classList.toggle("active");
    }

    setInterval(cursorVisibility, 500);
}

typingText();

//------------hamburger-------------

document.querySelector('.menu-opener').addEventListener('click',function()
{
	document.querySelector('.menu-opener').classList.toggle("active");
	document.querySelector('.menu-opener-inner').classList.toggle("active");
    document.querySelector('.menu').classList.toggle("active");
});