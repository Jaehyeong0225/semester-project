
document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".image-gallery img");

    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            const overlay = document.createElement("div");
            overlay.className = "image-overlay";

            const largeImg = document.createElement("img");
            largeImg.src = this.src; 
            largeImg.alt = this.alt;

            overlay.addEventListener("click", function () {
                document.body.removeChild(overlay);
            });

            overlay.appendChild(largeImg);
            document.body.appendChild(overlay);
        });
    });
});
