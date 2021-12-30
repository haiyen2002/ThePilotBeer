var productsHome = [
  {
    id: 1,
    name: "CORONA EXTRA",
    img: ["./assets/img/LaChula-1-300x300-removebg-preview.png","./assets/img/prd_1_1-removebg-preview.png" ],
    price: 50,
    type: "BEER",
    vote: "4.9",
    level: "#1",
    brand: "Dead Pony",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
  {
    id: 2,
    name: "GUINESS",
    img: ["./assets/img/ClausthalerOriginal-600x400-removebg-preview.png","./assets/img/prd_10_2-removebg-preview.png"],
    price: 20,
    type: "BEER",
    vote: "4.7",
    level: "#2",
    brand: "Heniken",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
  {
    id: 3,
    name: "DEAD PONY",
    img: ["./assets/img/deadpony-removebg-preview.png","./assets/img/prd3_2-removebg-preview.png"],
    price: 25,
    type: "BEER",
    vote: "4.5",
    brand: "Dead Pony",
    level: "#3",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
  {
    id: 4,
    name: "Nirvana Organic",
    img: ["./assets/img/NirvanaOrganicPaleAle-removebg-preview.png","./assets/img/prd_4_2-removebg-preview.png"],
    price: 70,
    type: "BEER",
    vote: "4.2",
    brand: "Dead Pony",
    level: "#4",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
  {
    id: 5,
    name: "SKOOL",
    img: ["./assets/img/skoll-removebg-preview.png","./assets/img/prd_4_1-removebg-preview.png"],
    price: 105,
    type: "BEER",
    vote: "4.5",
    brand: "Dead Pony",
    level: "#5",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
  {
    id: 6,
    name: "Brewdog Nanny",
    img: ["./assets/img/Brewdog_NannyState_Alcohol_Free-removebg-preview.png","./assets/img/prd_6_2-removebg-preview.png"],
    price: 195,
    type: "BEER",
    vote: "4.7",
    brand: "Alcohol SaBeCo",
    level: "#6",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
  {
    id: 7,
    name: "Komodin",
    img: ["./assets/img/heineken-zero-600x600_1800x1800-removebg-preview.png","./assets/img/prd_7_2-removebg-preview.png"],
    price: 195,
    type: "BEER",
    vote: "4.1",
    brand: "Alcohol SaBeCo",
    level: "#7",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
  {
    id: 8,
    name: "Tiger",
    img: ["./assets/img/Krombacher-1-removebg-preview.png","./assets/img/prd_8_2__2_-removebg-preview.png"],
    price: 200,
    type: "BEER",
    brand: "Alcohol SaBeCo",
    vote: "4.9",
    level: "#8",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },

  {
    id: 9,
    name: "GRIMM",
    img: ["./assets/img/venus.png","./assets/img/prd_9_2-removebg-preview.png"],
    price: 200,
    type: "BEER",
    brand: "Alcohol SaBeCo",
    vote: "4.0",
    level: "#9",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
];

productsHome.forEach(item => {
    var itemProduct = `
    <div class="popular-product_item">
    <div class="product-detail">
      <div class="product-detail_title">${item.name}</div>
      <div class="product-detail_origin">${item.brand}</div>
      <div class="product-like">
          <span class="vote-rating">${item.vote}</span>
          <div class="vote-action">
            <input class="emotion" type="checkbox" name="" id="${item.id}">
            <label for="${item.id}" class="like">
              <i class='bx bx-heart'></i>
            </label>
            <label for="${item.id}" class="dislike">
              <i class='bx bxs-heart' ></i>
            </label>
          </div>
        </div>
      <div class="product-detail_volume">
        <div class="product-detail-volume_inner">
            <div class="product-volume_item">0.5L</div>
            <div class="product-volume_item">1L</div>
        </div>
      </div>
      <div class="product-detail_name">${item.type}</div>
      <div class="product-detail_buy">
        <button class="btn" data-id="${item.id}">
          Buy Now
        </button>
      </div>
    </div>
    <div class="product-image">
      <img src="${item.img[1]}" alt="">
    </div>
  </div>
    `
    $('.popular-product_list').append(itemProduct);
})

// slider
$('.popular-product_list.owl-carousel').owlCarousel({
  loop:true,
  margin:50,
  nav:true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplay: 3000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})


// favourite
var favoriteList = JSON.parse(localStorage.getItem('favourite')) || [];

favoriteList.forEach(el => {
  $('.emotion').each(function (){
    var item = $(this).attr('id');
    if(item == el){
      $(this).prop('checked',true);
    }
  })
})

$('.emotion').each(function () {
    $(this).click(function () {
        var item = $(this).attr('id');
        if($(this).prop('checked') == true){
            favoriteList.push(item);
            localStorage.setItem('favourite', JSON.stringify(favoriteList));
            renderFav();
        }else {
          favoriteList = favoriteList.filter(ele => ele != item );
          localStorage.setItem('favourite', JSON.stringify(favoriteList));
          renderFav();
        }
    })
})
renderFav();

function renderFav(){
    $('.favourite-list').html('');
    productsHome.forEach(item => {
        favoriteList.forEach(favouriteEl => {
            if(item.id == favouriteEl){
                var favouriteEle = `
                <a onclick="toDetail(${item.id})">
                <div class="favourite-item">
                    <div class="favourite-item_img">
                      <img src="${item.img[1]}" alt="">
                    </div>
                    <div class="favourite-item_name">${item.name}</div>
                  </div>
                </a>
                `
            }
            $('.favourite-list').append(favouriteEle)
        })
    })
}
// end;
// statistics
var statusStatistics = true;

const statistics = {
  happCustomer: 7254,
  awardsWon: 1276,
  workingMembers: 386,
  branches:123
}

function countNumber(name,n){
  var initialValue = n - 70;
  var count = setInterval(plusNumber, 100);
  function plusNumber(){
      if (initialValue > n + 1){
          clearInterval(count)
      }else{
          initialValue++;
          $(name).text(initialValue)
      }
  }
}

function runStatistics(){
  countNumber('.first',statistics.happCustomer);
  countNumber('.second',statistics.awardsWon);
  countNumber('.third',statistics.workingMembers);
  countNumber('.fourth',statistics.branches);
}

window.onscroll = function() {statisticsEvent()};
function statisticsEvent() {
    var statisticsLocation = $('.statistics').offset().top;
    var scrollLocation = document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollLocation + 700 >= statisticsLocation && statusStatistics){
        runStatistics();
        statusStatistics = false;
    }
}
// testimonial

const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)

// loading page
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(opaciting, 30)

function opaciting() {
  load++

  if (load > 99) {
    clearInterval(int);
    $('.loading-page').css('display','none')
  }

  bg.style.opacity = scale(load, 0, 100, 1, 0)
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}


// go to detail
$('.product-detail_buy .btn').on('click', function(e){
  e.preventDefault();
  localStorage.setItem('detail',$(this).attr('data-id'));
  // console.log(window.location.pathname)
  window.location.href = window.location.pathname.slice(0, window.location.pathname.length-11) + '/views/pages/detail.html'
})
