'use strict';
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

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

function generateTitleLinks(){

  /* (done) remove contents of titleList */
  const articleList = document.querySelector(optTitleListSelector);
  articleList.innerHTML = '';

  /* (done) for each article */

  const articles =  document.querySelectorAll('.post');
  for(let article of articles){
    // link.addEventListener('click', titleClickHandler);

    /* get the article id */

    const articleId = article.getAttribute('id');

    /* find the title element */

    
    /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
  
    /* insert link into titleList */
    articleList.innerHTML = articleList.innerHTML + linkHTML;
  }

  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler );
  }

} 

generateTitleLinks();

function generateTags(){
  /* find all articles */

  const articleList = document.querySelector(optArticleSelector);

    /* START LOOP: for every article: */

    const articles =  document.querySelectorAll('.post');
      for(let article of articles){}

    /* find tags wrapper */
    
    const tagsWrapper = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */

    let html = ''
    
    /* get tags from data-tags attribute */

    const articleTags = article.querySelectorAll('.data-tags');
    
    /* split tags into array */
    
    const articleTagsArray = articleTags.split(' ');
      
      /* START LOOP: for each tag */

      for(let tag of articleTagsArray){

      /* generate HTML of the link */

      const linkHTML = '<li><a href="#tag-' + articleTags + '"><span>' '</span></a></li>';


      /* add generated code to html variable */

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}
}
generateTags();