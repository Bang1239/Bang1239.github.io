const uploadInput = document.getElementById('upload');
const profileImg = document.getElementById('profile-img');

uploadInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    profileImg.src = e.target.result;
  };

  reader.readAsDataURL(file);
});
