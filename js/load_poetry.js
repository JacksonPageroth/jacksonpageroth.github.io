document.addEventListener("DOMContentLoaded", function () {
  const poetryContent = document.getElementById("poetry-content");

  fetch('poetry.json')
    .then(response => response.json())
    .then(data => {
      data.poems.forEach(file => {
        const fileExtension = file.split('.').pop().toLowerCase();
        const poemLink = document.createElement('a');
        poemLink.href = `poetry/${file}`;
        poemLink.target = "_blank";
        
        // Remove extension and replace underscores with spaces
        const displayName = file.replace(/_/g, ' ').replace(/\.[^/.]+$/, "");
        
        poemLink.innerText = displayName;
        poemLink.classList.add('poem-link');
        
        const poemDiv = document.createElement('div');
        poemDiv.classList.add('poem');
        poemDiv.appendChild(poemLink);
        
        poetryContent.appendChild(poemDiv);
      });
    })
    .catch(error => console.error('Error loading poetry JSON:', error));
});
