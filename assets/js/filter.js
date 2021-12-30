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

var foods = [
  {
    name: "TUNA SAUCE",
    img: [
      "../../assets/img/food4_1-removebg-preview.png",
      "../../assets/img/food9_1.png",
    ],
    price: 90,
    type: "Savory",
    vote: "4.9",
    level: "#1",
    brand: "The Pilot",
    description:
      "With high nutritional content and delicious taste, it has long been a favorite food of many women as ingredients.",
  },
  {
    id: 11,
    name: "HOT DOG",
    img: [
      "../../assets/img/food5-removebg-preview.png",
      "../../assets/img/food6_1-removebg-preview.png",
    ],
    price: 20,
    type: "Savory",
    vote: "4.7",
    level: "#2",
    brand: "The Pilot",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
  {
    name: "BARBECUE",
    img: [
      "../../assets/img/food7_1-removebg-preview.png",
      "../../assets/img/food8_1-removebg-preview.png",
    ],
    price: 25,
    type: "Savory",
    vote: "4.5",
    brand: "The Pilot",
    level: "#3",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
  {
    name: "PORK RIB",
    img: ["../../assets/img/food14_1.png", "../../assets/img/food14_2.png"],
    price: 70,
    type: "Savory",
    vote: "4.2",
    brand: "The Pilot",
    level: "#4",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
  {
    name: "BLUEBERRY",
    img: [
      "../../assets/img/food8_2.png",
      "../../assets/img/food6_1-removebg-preview.png",
    ],
    price: 105,
    type: "Dessert",
    vote: "4.5",
    brand: "The Pilot",
    level: "#5",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
  {
    name: "CHICKEN SALAD",
    img: [
      "../../assets/img/food8_1-removebg-preview.png",
      "../../assets/img/food5-removebg-preview.png",
    ],
    price: 195,
    type: "Savory",
    vote: "4.7",
    brand: "The Pilot",
    level: "#6",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
  {
    name: "PUDDING",
    img: [
      "../../assets/img/food7_1-removebg-preview.png",
      "../../assets/img/food6_2-removebg-preview.png",
    ],
    price: 195,
    type: "Dessert",
    vote: "4.1",
    brand: "The Pilot",
    level: "#7",
    description:
      "Pushing the boundaries of barrel-aged stouts is in our DNA, and with that, we brought to life our first-ever cola-inspired variant.",
  },
];
var renderProducts = products;
var perPage = 6;
var pages = Math.ceil(renderProducts.length / perPage);
var currentPage = 1;
var start = 0;
var end = perPage;

$(window).scroll(function(){
  var sticky = $('.header-inner_nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

// pagination and result filter
renderItem();
function renderItem() {
  $(".filter-product-results").html("");
  renderProducts.forEach((prd, index) => {
    if (index >= start && index < end) {
      var productCardItem = `
      <div class="filter-col filter-col-4 currProduct product-card_item m-filter-col-half">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div class="product-like">
          <input class="emotion" type="checkbox" name="" id="${prd.id}item" value="${prd.id}">
          <label for="${prd.id}item" class="like">
            <i class='bx bx-heart'></i>
          </label>
          <label for="${prd.id}item" class="dislike">
            <i class='bx bxs-heart' ></i>
          </label>
        </div>
      <a class="product-filter__card" id="${prd.id}">
          <div class="product-filter-card__top">
              <img class="product-filter-img-infront" src="${prd.img[1]}" class="img-prd" alt="">
              <img class="product-filter-img-behind" src="${prd.img[0]}" class="img-prd" alt="">
          </div>
          
          <div class="product-filter-card__bottom">
              <div class="product-filter-card__name product-card_title">${prd.name}</div>
              <div class="product-filter-card__price product-card_price">${prd.price}$</div>
          </div>
          <div class="add-to-cart"></div>
      </a>
    </div>
      `;
      $(".filter-product-results").append(productCardItem);
    }

  });
  renderBtnPagination();
  movePage();
}

function renderBtnPagination() {
  pages = Math.ceil(renderProducts.length / perPage);
  $(".box-btnPage").html('');
  if(pages > 0){
    // prev pagination button
    if (currentPage > 1) {
      $(".box-btnPage").append(`
        <nav class="mx-auto">
        <ul class="pagination-filter" style="margin-top: 2rem">
        <li class="page-item page-item-prev">
            <a class="page-link btn-prev"><i class="fas fa-fast-backward"></i></a>
          </li>
        </ul>
        </nav>
      `);
    }else{
      $(".box-btnPage").html('');
      $(".box-btnPage").append(`
        <nav class="mx-auto">
        <ul class="pagination-filter" style="margin-top: 2rem">
        <li class="page-item page-item-prev disable-btn disabled">
        <a class="page-link btn-prev"><i class="fas fa-fast-backward"></i></a>
        </li>
        </ul>
        </nav>
      `);
    }
  
    // create pagination button
    for (let i = 0; i < pages; i++) {
      if(currentPage == i + 1){
        $(".pagination-filter").append(`
        <li class="page-item">
        <a class="page-link active" onclick ="changePage(${i + 1})"> ${i + 1} </a>
        </li>
        `);
      }else {
        $(".pagination-filter").append(`
        <li class="page-item">
        <a class="page-link" onclick ="changePage(${i + 1})"> ${i + 1} </a>
        </li>
        `);
      }
    }
  
    // next pagination button
    if(currentPage < pages){
      $(".pagination-filter").append(`
      <li class="page-item page-item-next">
      <a class="page-link btn-next" > <i class="fas fa-fast-forward"></i> </a>
      </li>
      `);
    }else {
      $(".pagination-filter").append(`
      <li class="page-item page-item-next disable-btn disabled">
      <a class="page-link btn-next" > <i class="fas fa-fast-forward"></i> </a>
      </li>
      `);
    }
  }
}

movePage();

function movePage() {
  $(".btn-next").click(function(){
    currentPage++;
    if(currentPage <= pages){
      start = (currentPage - 1) * perPage;
      end = currentPage * perPage;
      renderItem();
      emotionStatuts();
    }else {
      currentPage = pages;
    }
  })
  
  $(".btn-prev").click(function() {
    currentPage--;
    if(currentPage >= 1){
        start = (currentPage - 1) * perPage;
        end = currentPage * perPage;
      renderItem();
      emotionStatuts();
    }else {
      currentPage = 1;
    }
  })
}

function changePage(current) {
  currentPage = current;
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
    renderItem();
    emotionStatuts();
}

//****************** */ render slider
products.forEach((prd, index) => {
  // slider top
  var sliderImgs = `
       <div name="${prd.name}" class="slider-image-inner item">
            <div class="box-image">
            <img src="${prd.img[1]}"alt=""/>
            </div>
            <div class="box-text">
                <p class="level-popular">${prd.level}</p>
                <p class="prd-name">${prd.type}</p>
                <p class="prd-name">${prd.name}</p>
            </div>
       </div>
    `;
  if (index === 3) {
    sliderImgs = `
       <div name="${prd.name}" class="slider-image-inner item active">
            <div class="box-image">
            <img src="${prd.img[1]}"alt=""/>
            </div>
            <div class="box-text">
                <p class="level-popular">${prd.level}</p>
                <p class="prd-name">${prd.type}</p>
                <p class="prd-name">${prd.name}</p>
            </div>
       </div>
    `;
  }
  // ****************slider right-description
  var descriptions = `
    <div id="" class="description">
      <a>
      <div class="card" style="width: 18rem;">
      <div class="card-body">
      <p class="card-title">Over View</p>
      <p class="mb-2">
          <span>${prd.vote}</span>    
          <span><i class='bx bxs-star'></i></span>
      </p>
      <p class="card-text" style="font-weight: bold; text-transform: uppercase">${prd.name}</p>
      <p class="card-text" style="font-weight: bold">${prd.brand}</p>
      <p class="card-text">${prd.description}</p>
      <span><i class='bx bxs-like'></i></span>
      <span ><i class='bx bxs-dislike' ></i></span>
      </div>
      </div>
      </a>
    </div>
    `;

  if (index === 3) {
    descriptions = `
    <div id="" class="description active">
      <a>
      <div class="card" style="width: 18rem;">
      <div class="card-body">
      <p class="card-title">Over View</p>
      <p class="mb-2">
          <span>${prd.vote}</span>    
          <span><i class='bx bxs-star'></i></span>
      </p>
      <p class="card-text" style="font-weight: bold; text-transform: uppercase">${prd.name}</p>
      <p class="card-text" style="font-weight: bold">${prd.brand}</p>
      <p class="card-text">${prd.description}</p>
      <span><i class='bx bxs-like'></i></span>
      <span ><i class='bx bxs-dislike' ></i></span>
      </div>
      </div>
      </a>
    </div>
    `;
  }

  // slider card-bottom
  var sliderCards = `
        <div class = "box-card">
            <div class="card-item" data-id="${prd.id}">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div><img src="${prd.img[1]}"alt=""/></div>
                <p class="card-item-name">${prd.name}</p>
                <div class="product-like">
                <input class="emotion" type="checkbox" name="" id="${prd.id}slider" value="${prd.id}">
                <label for="${prd.id}slider" class="like">
                  <i class='bx bx-heart'></i>
                </label>
                <label for="${prd.id}slider" class="dislike">
                  <i class='bx bxs-heart' ></i>
                </label>
              </div>
            </div>
        </div>
    `;

  if (index === 3) {
    sliderCards = `
        <div class = "box-card">
            <div class="card-item color" data-id="${prd.id}">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div><img src="${prd.img[1]}"alt=""/></div>
                <p class="card-item-name">${prd.name}</p>
                <div class="product-like">
                <input class="emotion" type="checkbox" name="" id="${prd.id}slider" value="${prd.id}">
                <label for="${prd.id}slider" class="like">
                  <i class='bx bx-heart'></i>
                </label>
                <label for="${prd.id}slider" class="dislike">
                  <i class='bx bxs-heart' ></i>
                </label>
              </div>
            </div>
        </div>
    `;
  }

  $(".filter-slider-image").append(sliderImgs);
  $(".filter-slider-description").append(descriptions);
  $(".owl-carousel").append(sliderCards);
});

// slider
$(document).ready(function () {
  $(".owl-carousel.carousel-slider-card").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    nav: false,
    startPosition: 1,
    autoplay: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1230: {
        items: 4,
      },
      2000: {
        items: 5,
      },
      2560: {
        items: 5,
      },
    },
  });

  //get current item in slider:
  const owl = $(".owl-carousel");
  var index;
  owl.on("changed.owl.carousel", function (e) {
    if (e.item) {
      index = e.item.index - 1;
      var count = e.item.count;
      if (index > count) {
        index -= count;
      }
      if (index <= 0) {
        index += count;
      }
      // return index;
    }

    // render slider-image-inner:
    var items = $(".item");
    $(".item").each(function (indexi, item) {
      $(items[indexi]).removeClass("active");
      if (indexi + 1 == index) {
        $(items[indexi]).addClass("active");
        var cardItems = $(".card-item");
        for (let i = 0; i < cardItems.length; i++) {
          $(cardItems[i]).removeClass("color");
          var cardItemName = $($(cardItems)[i])
            .children(".card-item-name")
            .text();
          var itemName = $($(items[indexi])).attr("name");
          if (cardItemName === itemName) {
            $(cardItems[i]).addClass("color");
          }
        }
      }
    });

    var descriptions = $(".description");
    $(".description").each(function (indexi, item) {
      $(descriptions[indexi]).removeClass("active");
      if (indexi + 1 === index) {
        $(descriptions[indexi]).addClass("active");
      }
    });
  });
});

// **********filter-content**************
function handleFilterNav() {
  var types = [];
  var brands = [];
  products.forEach((item) => {
    types.push(item.type);
    brands.push(item.brand);
  });

  // get type of food:
  foods.forEach((item) => {
    types.push(item.type);
  });

  //get unique of brands:
  var distinctBrands = [];
  brands.forEach((type) => {
    type = type.trim();
    distinctBrands.push(type.split(",")[0]);
  });
  var uniqueBrands = distinctBrands
    .map((item) => item)
    .filter((value, index, self) => self.indexOf(value) === index);

  uniqueBrands.forEach((item) => {
    // brand filter
    var filterItem = `
    <div class="filter-item">
    <input type="radio" name="brand" id="${item}brand" value="${item}" />
    <label for="${item}brand">${item}</label>
    </div> 
  `;
    $(".box-filter-brand").append(filterItem);
  });

  //get unique of types:
  var distinct = [];
  types.forEach((type) => {
    type = type.trim();
    distinct.push(type.split(",")[0]);
  });
  var uniques = distinct
    .map((item) => item)
    .filter((value, index, self) => self.indexOf(value) === index);

  //render uniques:
  uniques.forEach((type) => {
    var filterContentHead = `
    <label for="${type}" class="filter-nav-item">
    <input type="radio" name="type" value ="${type}" id="${type}" style="display:none">
    <div class="filter-nav-item_content">
      <div class="filter-nav-item-content_img"><span></span></div>
      <div class="filter-nav-item-content_title">${type}</div>
    </div>
    <div class="arrow-left"></div>
    <div class="arrow-right"></div>
    <div class="arrow-notactive"></div>
  </label>
    `;
    $(".filter-content-head").append(filterContentHead);
  });
}
handleFilterNav();


// ************heart
var favoriteList = JSON.parse(localStorage.getItem("favourite")) || [];

emotionStatuts();
setEmotion();
renderFav();

function emotionStatuts() {
  $(".emotion").each(function () {
      var item = $(this).val();
      if (favoriteList.includes(item)) {
        $(this).prop("checked", true);
      } else {
        $(this).prop("checked", false);
      }
    });
}


function setEmotion() {
    $('.emotion').click(function () {
      var item = $(this).val();
      if ($(this).prop("checked") == true) {
        favoriteList.push(item);
        emotionStatuts();
        localStorage.setItem("favourite", JSON.stringify(favoriteList));
      } else {
        favoriteList = favoriteList.filter((ele) => ele != item);
        emotionStatuts();
        localStorage.setItem("favourite", JSON.stringify(favoriteList));
      }
      renderFav();
    });
}

function renderFav() {
  $(".favourite-list").html("");
  favoriteList = favoriteList.filter(function(item, pos){
    return favoriteList.indexOf(item) == pos;
  })
  products.forEach((item) => {
    favoriteList.forEach((favouriteEl) => {
      if (item.id == favouriteEl) {
        var favouriteEle = `
                <a onclick="toDetail(${item.id})">
                <div class="favourite-item">
                    <div class="favourite-item_img">
                      <img src="${item.img[1]}" alt="">
                    </div>
                    <div class="favourite-item_name">${item.name}</div>
                  </div>
                </a>
                `;
      }
      $(".favourite-list").append(favouriteEle);
    });
  });
}
end;

//************* filter product*********
var type = "";
var min = 0;
var max = 9999;
var brand = "";

$(".filter-nav-item").each(function () {
  $(this).click(function () {
    $(".filter-nav-item").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
  });
 
});

function filterNavActive() {
  $('input[name="type"]').each(function () {
    if ($(this).prop("checked") == true) {
      $(this).parents(".filter-nav-item").addClass("active");
    }
  });
}

function renderFilterProduct() {
  renderProducts = products.filter((item) => {
    if (item.price <= max && item.price >= min && item.type.includes(type) && item.brand.includes(brand)) {
      return item;
    }
  });
    renderItem();
}

// filter by price
$('input[name="price"]').each(function () {
  $(this).click(function () {
    $($('input[name="type"]')[0]).prop("checked", true);
    filterNavActive();
    max = $(this).attr("max");
    min = $(this).attr("min");
    renderFilterProduct();
  });
});

// filter by type

$('input[name="type"]').each(function () {
  $(this).click(function () {
    type = $(this).val();
    renderFilterProduct();
  });
});

//filter by brand
$('input[name="brand"]').each(function () {
  $(this).click(function () {
    $($('input[name="type"]')[0]).prop("checked", true);
    brand = $(this).val();
    renderFilterProduct();
  });
});

// open filter box
$('.filter-btn_mobile').click(function(){
  $('.filter-product-item').addClass('active');
})

//close filter box 
$('.filter-overlay').click(function(){
  $('.filter-product-item').removeClass('active');
})

$('.close-filter').click(function(){
  $('.filter-product-item').removeClass('active');
})


//move to detail page
$('.product-filter__card').click(function (e) {
  e.preventDefault();
  localStorage.setItem('detail',$(this).attr('id'));
  window.location.href = window.location.pathname.slice(0, window.location.pathname.length-11) + 'detail.html'
})

// reload
function reload(){
  location.reload();
}

//search result

function moveDetail(id){
  console.log('none')
    localStorage.setItem('detail',id);
    window.location.href = window.location.pathname.slice(0, window.location.pathname.length-11) + 'detail.html'
}

$('.box-card .card-item').on('click', function(){
  localStorage.setItem('detail',$(this).attr('data-id'));
  window.location.href = window.location.pathname.slice(0, window.location.pathname.length-11) + 'detail.html'
})


//search products
const filter = document.getElementById('search-input-filter');
filter.addEventListener('keyup', (e) => filterData(e.target.value));

const listItems = document.querySelectorAll('.search-result_item');

function filterData(searchTerm) {
  if(searchTerm == ''){
    $('.search-result_list').html('');
  }else{
    $('.search-result_list').html('');
    products.forEach(product => {
      if(product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        $('.search-result_list').append(`
        <div class="search-result_item" id="${product.id}" onclick="moveDetail(${product.id})">
        <img src="${product.img[0]}"><span>${product.name}</span>
        </div>
        `)
      }
      
    })
  }
}

function showResult() {
  $('.filter-search_result').css('display', 'block');
  $('.search-icon-filter').css('color','var(--yellow)');
}

$('#search-input-filter').focusout(function() {
  // $('.filter-search_result').css('display', 'none');
  $('.search-icon-filter').css('color','var(--lightwhite)')
})