
// ==========================================
// SRI VENUGOPALAKRISHNA TEMPLE WEBSITE
// JavaScript Full Code
// ==========================================


// 1. MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        if (navMenu) {
            navMenu.classList.remove("active");
        }
    });
});


// 2. SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId && targetId.length > 1) {
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});


// 3. GALLERY IMAGE ZOOM
const galleryImages = document.querySelectorAll(".gallery img");

let currentImageIndex = 0;

const imageList = Array.from(galleryImages);

function createGalleryPopup() {
    if (document.getElementById("galleryPopup")) {
        return;
    }

    const popup = document.createElement("div");

    popup.id = "galleryPopup";

    popup.innerHTML = `
        <span class="gallery-close">&times;</span>
        <span class="gallery-prev">&#10094;</span>
        <img id="popupImage" src="" alt="Temple Gallery Image">
        <span class="gallery-next">&#10095;</span>
    `;

    document.body.appendChild(popup);

    const closeBtn = popup.querySelector(".gallery-close");
    const prevBtn = popup.querySelector(".gallery-prev");
    const nextBtn = popup.querySelector(".gallery-next");

    closeBtn.addEventListener("click", closeGallery);

    prevBtn.addEventListener("click", function () {
        changeGalleryImage(-1);
    });

    nextBtn.addEventListener("click", function () {
        changeGalleryImage(1);
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            closeGallery();
        }
    });
}


// Open gallery image
function openGallery(index) {
    if (imageList.length === 0) {
        return;
    }

    currentImageIndex = index;

    createGalleryPopup();

    const popup = document.getElementById("galleryPopup");
    const popupImage = document.getElementById("popupImage");

    popupImage.src = imageList[currentImageIndex].src;
    popup.style.display = "flex";

    document.body.style.overflow = "hidden";
}


// Change gallery image
function changeGalleryImage(direction) {
    if (imageList.length === 0) {
        return;
    }

    currentImageIndex =
        (currentImageIndex + direction + imageList.length)
        % imageList.length;

    document.getElementById("popupImage").src =
        imageList[currentImageIndex].src;
}


// Close gallery popup
function closeGallery() {
    const popup = document.getElementById("galleryPopup");

    if (popup) {
        popup.style.display = "none";
    }

    document.body.style.overflow = "";
}


// Add click event to gallery images
galleryImages.forEach(function (image, index) {
    image.style.cursor = "pointer";

    image.addEventListener("click", function () {
        openGallery(index);
    });
});


// Keyboard controls for gallery
document.addEventListener("keydown", function (event) {
    const popup = document.getElementById("galleryPopup");

    if (!popup || popup.style.display !== "flex") {
        return;
    }

    if (event.key === "Escape") {
        closeGallery();
    }

    if (event.key === "ArrowLeft") {
        changeGalleryImage(-1);
    }

    if (event.key === "ArrowRight") {
        changeGalleryImage(1);
    }
});


// 4. WHATSAPP BOOKING
// Replace this number with the temple's confirmed WhatsApp number.
const templeWhatsAppNumber = "91XXXXXXXXXX";

function bookOnWhatsApp() {
    const message =
        "வணக்கம்! ஸ்ரீ வேணுகோபாலகிருஷ்ணர் ஆலயத்தில் பூஜை தொடர்பாக விவரம் தெரிந்து கொள்ள விரும்புகிறேன்.";

    if (templeWhatsAppNumber.includes("X")) {
        alert("கோவிலின் WhatsApp எண்ணை Website-ல் சேர்க்க வேண்டும்.");
        return;
    }

    const whatsappURL =
        "https://wa.me/" +
        templeWhatsAppNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}


// Connect WhatsApp buttons
document.querySelectorAll(".whatsapp-booking").forEach(function (button) {
    button.addEventListener("click", bookOnWhatsApp);
});


// 5. CURRENT YEAR IN FOOTER
const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 6. BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

console.log("Sri Venugopalakrishna Temple Website Loaded Successfully!");
