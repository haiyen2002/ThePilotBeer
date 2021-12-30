function closeMobileNav() {
    $('.header-nav_right').removeClass('active')
}

function openMobileNav() {
    $('.header-nav_right').addClass('active')
}

$(window).scroll(function(){
    var sticky = $('.header-inner_nav'),
        scroll = $(window).scrollTop();
    if (scroll >= 80) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('.goTop').removeClass("hide");
      } else {
        $('.goTop').addClass("hide");
      }
  });

// go top
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//load account
const user = JSON.parse(localStorage.getItem('logged'));

if(user){
  const account = JSON.parse(localStorage.getItem('account'))
  let name = account.name.split(' ');
  $('.btn.btn-login').replaceWith(`
    <div class="user-name">
      <img src="${account.avatar}" alt="" />
      <span>${name[name.length-1]}</span>
      <ul class="user-action-log">
        <li>
          <a href="#">
          <i class='bx bx-info-circle'></i> Account
          </a>
        </li>
        <li>
          <a onclick="logOut()">
          <i class='bx bx-log-out-circle'></i> Log out  
          </a>
        </li>
      </ul>
    </div>
  `)
}

function logOut(){
  localStorage.removeItem("logged");
  const currHref = window.location.href;
  const currPath = currHref.substring(currHref.lastIndexOf('/') + 1);
  currPath === 'index.html' ? window.location.href="./views/pages/login.html" : window.location.href ="./login.html"
  
}

//go to detail with heart
function toDetail(id){
  const currHref = window.location.href
  localStorage.setItem('detail',id);
  const currPath = currHref.substring(currHref.lastIndexOf('/') + 1);
  currPath === 'index.html' ?  window.location.href = window.location.pathname.slice(0, window.location.pathname.length-11) + '/views/pages/detail.html'
                : window.location.href = currHref.substr(0,currHref.lastIndexOf('/') + 1) + 'detail.html'
}