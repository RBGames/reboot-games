const viewer = document.getElementById('viewer');
const viewerImg = document.getElementById('viewer-img');
const viewerLabel = document.getElementById('viewer-label');

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    viewerImg.src = img.src;
    viewerLabel.textContent = img.dataset.label || '';
    viewer.style.display = 'flex';
  });
});

viewer.addEventListener('click', (e) => {
  if (e.target === viewer) {
    viewer.style.display = 'none';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    viewer.style.display = 'none';
  }
});
