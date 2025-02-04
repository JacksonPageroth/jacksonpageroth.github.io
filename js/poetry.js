document.addEventListener("DOMContentLoaded", function () {
  const poetryContent = document.getElementById("poetry-content");

  fetch('data/poetry.json')
    .then(response => response.json())
    .then(data => {
      data.poems.forEach(file => {
        const fileExtension = file.split('.').pop().toLowerCase();
        const displayName = file.replace(/_/g, ' ').replace(/\.[^/.]+$/, "");

        const poemDiv = document.createElement('div');
        poemDiv.classList.add('poem');

        const poemTitle = document.createElement('h3');
        poemTitle.innerText = displayName;
        poemDiv.appendChild(poemTitle);

        const iframe = document.createElement('iframe');
        iframe.width = "100%";
        iframe.height = "500px";
        iframe.style.border = "none";

        const fileUrl = `${window.location.origin}/poetry/${file}`;

        if (fileExtension === 'pdf') {
          iframe.src = fileUrl;
        } else if (fileExtension === 'docx') {
          iframe.src = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`;
        }

        poemDiv.appendChild(iframe);
        poetryContent.appendChild(poemDiv);
      });
    })
    .catch(error => console.error('Error loading poetry JSON:', error));
});