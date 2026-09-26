const envelope = document.getElementById("envelope");
const instruction = document.getElementById("instruction");

// =========================
// ENVELOPE
// =========================

envelope.addEventListener("click", function () {


envelope.classList.toggle("open");

if (envelope.classList.contains("open")) {

    instruction.textContent = "💙 Your letter is open";

} else {

    instruction.textContent =
        "💌 Tap the envelope to open your letter";

}


});

// =========================
// OPEN IMAGE
// =========================

function openImage(imageSrc, event) {


// Stop the envelope from opening/closing
event.stopPropagation();

const lightbox =
    document.getElementById("imageLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

lightboxImage.src = imageSrc;

lightbox.classList.add("show");


}

// =========================
// CLOSE IMAGE
// =========================

function closeImage(event) {


event.stopPropagation();

const lightbox =
    document.getElementById("imageLightbox");

lightbox.classList.remove("show");


}

// =========================
// CLICK OUTSIDE PHOTO
// =========================

document.getElementById("imageLightbox").addEventListener(
"click",
function (event) {


    if (event.target === this) {

        closeImage(event);

    }

}


);
