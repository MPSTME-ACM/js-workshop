document.addEventListener('DOMContentLoaded', function() {
  const popupOverlay = document.getElementById('popup-overlay');
  const myPopup = document.getElementById('my-popup');
  const closePopupBtn = document.getElementById('close-popup');

  // Show the popup and overlay when the page loads
  popupOverlay.style.display = 'block';
  myPopup.style.display = 'block';

  // Hide the popup and overlay when the close button is clicked
  closePopupBtn.addEventListener('click', function() {
    popupOverlay.style.display = 'none';
    myPopup.style.display = 'none';
  });

  // Optionally, hide the popup when clicking outside of it (on the overlay)
  popupOverlay.addEventListener('click', function() {
    popupOverlay.style.display = 'none';
    myPopup.style.display = 'none';
  });
});