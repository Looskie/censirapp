document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('loaded');
});

var c = document.getElementById('submit');
if(c) {
  c.addEventListener('click', function() {
    document.body.classList.remove('loaded');
    document.body.classList.add('hide');
  });
}
