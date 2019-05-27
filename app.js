banner             = document.querySelector('.banner')
  banner_images      = document.querySelectorAll('.banner img')
  // // banner_thumbs      = document.querySelectorAll('.banner .thumbs span')
  banner_left_arrow  = document.querySelector('.banner .fa-arrow-left')
  banner_right_arrow = document.querySelector('.banner .fa-arrow-right')
  len = document.querySelectorAll('.banner img').length - 1 

  banner_left_arrow.onclick = function() {
    var n = document.querySelector('.banner img.active').getAttribute('data-banner')
      
    n <= 0 ? n = len : n--

      for ( var i = 0 ; i <= len ; i++ ) {
          banner_images[i].classList.remove('active');
          // banner_thumbs[i].classList.remove('active');
      }

      banner_images[n].classList.add('active');
      // banner_thumbs[n].classList.add('active');
  }

  banner_right_arrow.onclick = function() {
      var n = document.querySelector('.banner img.active').getAttribute('data-banner')
      
      n >= len ? n = 0 : n++

      for ( var i = 0 ; i <= len ; i++ ) {
          
          banner_images[i].classList.remove('active');
          // banner_thumbs[i].classList.remove('active');
      }

      banner_images[n].classList.add('active');
      // banner_thumbs[n].classList.add('active');
  }