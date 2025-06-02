let btns = document.querySelectorAll('.btn-dropdown');
    let dropbox = document.querySelectorAll('.dropbox');
    let droplist = document.querySelectorAll('.droplist');
    let actives = document.querySelectorAll('.dropbox.active');
  btns.forEach((btn, posicao) => {
      btn.addEventListener('click', function() {
        droplist.forEach((dropdown, index) => {
          if (index === posicao) {
            dropdown.classList.toggle('active');
          } 
          else if (dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
          }
        });
      });
    });