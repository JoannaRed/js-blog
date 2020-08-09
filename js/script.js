'use strict';

const titleClickHandler = function(event) {
  event.preventDefault();
  const clickedElement = this;
  
  /*[DONE] remove class 'active' from all article links  */
    
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  
  /* [DONE] add class 'active' to the clicked link */
  
  clickedElement.classList.add('active');
  
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .active');
  
  for(let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  
  /* [done ] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  
  const targetArticle = document.querySelector(articleSelector);

  /* [DONE]  add class 'active' to the correct article */
  targetArticle.classList.add('active');
}
  
const links = document.querySelectorAll('.titles a');
  
for(let link of links){
  link.addEventListener('click', titleClickHandler );

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

  /* (done) remove contents of titleList */

  document.querySelectorAll(optTitleListSelector).innerHTML = ''

  /* (done) for each article */

  const articles =  document.querySelectorAll('.post');
  
  for(let article of articles){
    link.addEventListener('click', titleClickHandler );

  /* get the article id */

    const articleId = clickedElement.getAttribute('id');

  /* find the title element */

    
  /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

  /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML)
  
    /* insert link into titleList */
  
  const titleList =
  let d1 = document.getElementById('href');
  d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');   /*nie mam zielonego pojecia...............*/
} 

//tutaj sie poddaje bo nie mam zielonego pojecia co mam dalej zrobic. Zreszta polowa tego projektu to pisanie po omacku..... :((((

generateTitleLinks();

function generateTags(){
/* (done) find all articles */

const articles = document.querySelectorAll('.post');

/* (done ?) START LOOP: for every article: */

for(let article of articles){
  link.addEventListener('click', titleClickHandler );

  /* (done) find tags wrapper */

  let wrapperlist = article.querySelectorAll('.post-tags')

  /* (done) make html variable with empty string */

  let HTML = '<li><a href="#' + articleId + '"><span>' '</span></a></li>';
  console.log(linkHTML)

  /* (done) get tags from data-tags attribute */

  const articleTags = article.getAttribute('.data-tags');

  /* split tags into array */

  const articleTagsArray = articleTags.split(' ');

  /* START LOOP: for each tag */

  for(let tag of articleTagsArray){
  /* generate HTML of the link */
    
  /* add generated code to HTML variable */
    
   }

   /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

/* END LOOP: for every article: */
}

generateTags();






}