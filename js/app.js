baguetteBox.run('.gallery');


// Search box JS function
function searchPhoto() {  
  const input = document.getElementById('search').value;
  const lowerCaseInput = input.toLowerCase();
  const image = document.getElementsByClassName('photo');
  for (let i = 0; i < image.length; i++) {  
    if (!image[i].innerHTML.toLowerCase().includes(lowerCaseInput)) {
      image[i].style.display = "none";
    }
    else {
      image[i].style.display = "block";
      image[i].style.width = "200px";
    }
  }
}


  
  
