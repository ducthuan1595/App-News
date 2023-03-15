'use strict'

// selected elements
const newsContainer = document.getElementById('news-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const pageNum = document.getElementById('page-num');

console.log(userArr)
// get data news setting from current user

let selected = 'General';
let pageSize = 5;
let totalResults;

userArr.find(user => {
    // setting news page
    if(user.username === currentUser.username) {
    selected = user.newsCategory;
    pageSize = user.pageSize;
    }
})
console.log(selected, pageSize)

// get news list API
const getNews = async(category, page, pageSize)=> {
    try{
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=8e2147db571a49ba886a60c54bec983a`);
      const data = await res.json();
      // console.log(data);
      if(data.status === 'ok' && data.articles.length > 0) {
        totalResults = data.totalResults;
        displayNewsList(data);
      }else {
        throw new Error(`Wrong something!`);
      }
    }catch(e){
      alert(`${e}`)
    }
}
getNews(selected, 1, pageSize);

// display news list
const displayNewsList = (data) => {

  let html = '';
  data.articles.map(news => {
    html = html + `
    <div class="card mb-3" style="">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src=${news.urlToImage ? news.urlToImage : '../css/imgs/Image_not_available.png'}
          class="card-img"
          alt=${news.title}>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text">${news.description}</p>
          <a href=${news.url}
            class="btn btn-primary">View</a>
        </div>
      </div>
    </div>
  </div>
    `
  })
  const news = newsContainer.innerHTML = html;
}

// Handle even next page
const handleNextPage = () => {
  let num = 1;
  // Khi đang ở Page số 1 thì nút "Previous" sẽ bị ẩn đi.
  if(num < 2) {
    btnPrev.style.display = 'none';
  }
  // next page
  btnNext.addEventListener('click', ()=> {
    const numPage = ++num;
    if(numPage > 1) {
      btnPrev.style.display = 'block';
    }
    // next page
    getNews(selected, numPage, pageSize);
    pageNum.innerText = numPage;
    const totalPage = Math.ceil(totalResults / pageSize);
  // Khi đang ở Page cuối thì nút "Next" sẽ bị ẩn đi.
    totalPage === numPage ? btnNext.style.display = 'none': btnNext.style.display = 'block';
  });
  // prev page
  btnPrev.addEventListener('click', ()=> {
    const numPage = --num;
  // Khi đang ở Page số 1 thì nút "Previous" sẽ bị ẩn đi.
    if(numPage < 2) {
      btnPrev.style.display = 'none';
    }
    // prev page
    getNews(selected, numPage, pageSize);
    pageNum.innerText = numPage;
  })

}
handleNextPage();