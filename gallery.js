document.addEventListener("DOMContentLoaded", async function () {
    const imageFolder = "images/gallery/";
    const galleryContainer = document.getElementById("gallery-container");
    
    try {
      // Fetch the JSON file
      const response = await fetch(imageFolder + "gallery.json");
      const data = await response.json();
  
      // Loop through image list and create image elements
      data.images.forEach(filename => {
        let img = document.createElement("img");
        img.src = `${imageFolder}${filename}`;
        img.alt = `Gallery image: ${filename}`;
        img.loading = "lazy"; // Lazy loading for performance
        img.classList.add("gallery-img");
  
        // Open lightbox on click
        img.addEventListener("click", () => openLightbox(`${imageFolder}${filename}`));
  
        galleryContainer.appendChild(img);
      });
    } catch (error) {
      console.error("Error loading gallery images:", error);
    }
  });
  
  // Lightbox functions
  function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-img");
  
    lightboxImage.src = imageSrc;
    lightbox.style.display = "flex";
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }