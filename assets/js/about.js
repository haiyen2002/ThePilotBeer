// on scroll animation

let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let elToShow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add('start')
        } else {
            item.classList.remove('start')
        }
    })

    scroll(loop)
}

loop()

// favourite
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

var favoriteList = JSON.parse(localStorage.getItem('favourite')) || [];

favoriteList.forEach(el => {
  $('.emotion').each(function (){
    var item = $(this).attr('id');
    if(item == el){
      $(this).prop('checked',true);
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