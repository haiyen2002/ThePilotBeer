var products = [
  {
    id: 1,
    name: "CORONA EXTRA",
    img: [
      "../../assets/img/LaChula-1-300x300-removebg-preview.png",
      "../../assets/img/prd_1_1-removebg-preview.png",
    ],
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
    img: [
      "../../assets/img/ClausthalerOriginal-600x400-removebg-preview.png",
      "../../assets/img/prd_10_2-removebg-preview.png",
    ],
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
    img: [
      "../../assets/img/deadpony-removebg-preview.png",
      "../../assets/img/prd3_2-removebg-preview.png",
    ],
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
    img: [
      "../../assets/img/NirvanaOrganicPaleAle-removebg-preview.png",
      "../../assets/img/prd_4_2-removebg-preview.png",
    ],
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
    img: [
      "../../assets/img/skoll-removebg-preview.png",
      "../../assets/img/prd_4_1-removebg-preview.png",
    ],
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
    img: [
      "../../assets/img/Brewdog_NannyState_Alcohol_Free-removebg-preview.png",
      "../../assets/img/prd_6_2-removebg-preview.png",
    ],
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
    img: [
      "../../assets/img/heineken-zero-600x600_1800x1800-removebg-preview.png",
      "../../assets/img/prd_7_2-removebg-preview.png",
    ],
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
    img: [
      "../../assets/img/Krombacher-1-removebg-preview.png",
      "../../assets/img/prd_8_2__2_-removebg-preview.png",
    ],
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
    img: [
      "../../assets/img/venus.png",
      "../../assets/img/prd_9_2-removebg-preview.png",
    ],
    price: 200,
    type: "BEER",
    brand: "Alcohol SaBeCo",
    vote: "4.0",
    level: "#9",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
];

//get detail image
const detailId = localStorage.getItem("detail");
products.forEach((product) => {
  if (product.id === parseInt(detailId)) {
    // $('.zoom-img').css('background-image',`url('${product.img[1]}')`);
    $(".detail-main-img img").attr("src", product.img[1]);
    $(".detail-name").text(product.name);
    $("title").text(product.name);
    $(".detail-price").text("$" + product.price);
    $(".detail-desc").text(product.description);

    product.img.forEach((imgItem) => {
      $(".img-list").append(`
        <div class="detail-img_item">
          <img src="${imgItem}" alt="">
        </div>
      `);
    });
  }
});

//render slider more discovery
products.forEach((product) => {
  var productItem = `
    <div class="product-card_item">
    <div class="product-like">
        <input class="emotion" type="checkbox" name="" id="${product.id}">
        <label for="${product.id}" class="like">
          <i class='bx bx-heart'></i>
        </label>
        <label for="${product.id}" class="dislike">
          <i class='bx bxs-heart' ></i>
        </label>
      </div>
    <a href="" class="product-filter__card" id="${product.id}">
        <div class="product-filter-card__top">
            <img class="product-filter-img-infront" src="${product.img[1]}" class="img-prd" alt="">
            <img class="product-filter-img-behind" src="${product.img[0]}" class="img-prd" alt="">
        </div>
        
        <div class="product-filter-card__bottom">
            <div class="product-filter-card__name product-card_title">${product.name}</div>
            <div class="product-filter-card__price product-card_price">${product.price}$</div>
        </div>
        <div class="add-to-cart"></div>
    </a>
  </div>
    `;
  $(".popular-product_list").append(productItem);
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: false,
    startPosition: 1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

//select quantity
var currQuantity = 1;
$(".quantity-show").text(currQuantity);

function plus(n) {
  currQuantity = parseInt($(".quantity-show").text());
  currQuantity += n;
  if (currQuantity < 1) {
    $(".quantity-show").text(1);
  } else {
    $(".quantity-show").text(currQuantity);
  }
}

// pure image zoom
const zoomer = document.querySelector(".zoomer");
const wrapImg = document.querySelector(".zoomer .image");
const result = document.querySelector(".zoomer .result");
const size = 3;

wrapImg.addEventListener("mousemove", function (e) {
  result.classList.remove('hide')

  const img = wrapImg.querySelector("img");
  let x = (e.offsetX / this.offsetWidth) * 100;
  let y = (e.offsetY / this.offsetHeight) * 100;

  // move result
  let posX = e.pageX - zoomer.offsetLeft;
  let posY = e.pageY - zoomer.offsetTop;
  result.style.cssText = `
			background-image: url(${img.src});
			background-size: ${img.width * size}px ${img.height * size}px;
			background-position : ${x}% ${y}%;
			left: ${posX - 100}px;
			top: ${posY - 100}px;
		`;
});

wrapImg.addEventListener("mouseleave", function (e) {
  result.style = ``;
  result.classList.add('hide')
});

// change detail item
$(".product-filter__card").click(function (e) {
  localStorage.setItem("detail", $(this).attr("id"));
  location.reload();
});

//select img
$(".detail-img_item").click(function () {
  var src = $(this).children("img").attr("src");
  $(".zoom-img").css("background-image", `url('${src}')`);
  $(".detail-main-img img").attr("src", src);
});

// ad slider
const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1)*500}px`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

// favourite
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
    products.forEach(item => {
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

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
function handleOrder () {
  const prdName = $(".detail-name").text();
  const prdQuantity = parseInt($(".quantity-show").text());
  const prdPrice = parseInt($(".detail-price").text().split("$")[1]);
  const totalPrice = parseInt(prdQuantity * prdPrice)
  const image = $(".detail-main-img img").attr('src');
  const date = new Date();


  $(".modal-content_order").html("")
  const boxOrder = `
   <div class= "box-order_container">
      <div class ="shopping-cart">
        <img src=${image}>
       <div class="text-group">
        <p>Type: ${$(".detail-brand").text()}</p>
          <div>
            <p>Name: ${prdName}</p>
            <p>Quantity: ${prdQuantity}</p>
            <p>Total Price: ${totalPrice}$</p>
          </div>
       </div>
      </div>
      
      <div class="payment-details">
        <div class="payment_nav">
          <div class="payment-nav_top"></div>
          <div class="payment-nav_botttom"></div>
          <div class="payment-nav_item"></div>
          <div class="payment-nav_item active"></div>
          <div class="payment-nav_item"></div>
        </div>
        <div class="card-content">
              <p class="card-title">Card Details</p>
              <div class="select-card-type">
                  <p>Select Card Type</p>
                  <span><i class='bx bxl-mastercard'></i></span>
                  <span><i class="fab fa-cc-paypal"></i></span>
                  <span><i class='bx bxl-visa'></i></span>
              </div>
              <div class ="fill-card-inf">
                  <p>Card Number</p>
                  <input >
                  <div class ="fill-date">
                      <div>
                        <p>Expiry Date</p>
                        <input type="date" value="${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}">
                      </div>
                      <div>
                        <p>CVV</p>
                        <input>
                      </div>
                  </div>
              </div>
        </div>
        <button>Checkout</button>
      </div>
   </div>
  `
  $(".modal-content_order").append(boxOrder)

  modal.style.display = "block";
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// handleOrder();

// click on "x" close:
const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}