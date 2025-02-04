document.addEventListener("DOMContentLoaded", async function () {
  const imageFolder = "images/gallery/optimized/"; // Adjust this if needed
  const galleryContainer = document.getElementById("gallery-container");
  
  try {
    // Fetch the JSON file listing your optimized images
    const response = await fetch(imageFolder + "gallery.json");
    const data = await response.json();

    data.images.forEach(filename => {
      // Create the square gallery item container
      const item = document.createElement("div");
      item.classList.add("gallery-item");
      
      // Create the image element
      const img = document.createElement("img");
      img.src = `${imageFolder}${filename}`;
      img.alt = `Gallery image: ${filename}`;
      img.loading = "lazy";

      // Open lightbox on click
      item.addEventListener("click", () => openLightbox(`${imageFolder}${filename}`));

      item.appendChild(img);
      galleryContainer.appendChild(item);
    });
  } catch (error) {
    console.error("Error loading gallery images:", error);
  }
});

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}
