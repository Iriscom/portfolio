// Плавное открытие изображения на новой странице
document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery-item img');
  
    galleryImages.forEach(img => {
      img.addEventListener('click', function () {
        // Логика для открытия увеличенного изображения
        window.open(this.src, '_blank');
      });
    });
  });
  