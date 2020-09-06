'use strict';
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optTagsListSelector = '.tags.list',
  optAuthorsListSelector = '.list authors';

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

function generateTitleLinks(customSelector = ''){

  /* (done) remove contents of titleList */
  const articleList = document.querySelector(optTitleListSelector);
  articleList.innerHTML = '';

  /* (done) for each article */

  const articles = document.querySelectorAll(optArticleSelector + customSelector);
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


function generateTags() {
   /* [NEW] create a new variable allTags with an empty array */
   let allTags = [];

  /* find all articles */

  const articleList = document.querySelector(optArticleSelector);

  /* START LOOP: for every article: */

  const articles =  document.querySelectorAll('.post');
  for (let article of articles) {
    /* find tags wrapper */
    
    const tagsWrapper = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */

    let html = ''
    
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    
    /* split tags into array */
    
    const articleTagsArray = articleTags.split(' ');
      
    /* START LOOP: for each tag */

    for(let tag of articleTagsArray){

      /* generate HTML of the link */

      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';

      /* add generated code to html variable */

      html = html + linkHTML;

      /* [NEW] check if this link is NOT already in allTags */
      if(allTags.indexOf(linkHTML) == -1){
        /* [NEW] add generated code to allTags array */
        allTags.push(linkHTML);
      }
       /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = allTags.join(' ');

    /* END LOOP: for every article: */
  }

  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');

  /* [NEW] add html from allTags to tagList */
  tagList.innerHTML = allTags.join(' ');

  addClickListenersToTags();
}

generateTags();

function tagClickHandler(event){
  
  /* prevent default action for this event */


  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href')
  
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */

  let activeTag = document.querySelectorAll('a.active[href^="#tag-"]')

  /* START LOOP: for each active tag link */
  for(let tag of activeTag){

    /* remove class active */
    tag.classList.remove('active'); 

  /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  let tagLinks = document.querySelectorAll('a[href="' + href + '"]')

  /* START LOOP: for each found tag link */
  for(let tag of tagLinks){

    /* add class active */
    tag.classList.add('active');

  /* END LOOP: for each found tag link */
  } 

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');

}

function addClickListenersToTags(){
  /* find all links to tags */
  const list = document.querySelectorAll('a[href^="#tag-"]');
  /* START LOOP: for each link */
  for (const tag of list) {
    /* add tagClickHandler as event listener for that link */
    tag.addEventListener('click', tagClickHandler);
  }
  /* END LOOP: for each link */
}

addClickListenersToTags();

function generateAuthors(){
  /* find all articles */
  const articleList = document.querySelector(optArticleSelector);

  /* START LOOP: for every article: */
  const articles =  document.querySelectorAll('.post');
  for (let article of articles) {

    /* find authors wrapper */
    const authorsWrapper = article.querySelector(optAuthorsListSelector);

    /* make html variable with empty string */
    let html = '';

    /* get name from data-author attribute */
    const articleAuthor = article.getAttribute('data-author');

    /* generate HTML of the link */
    const linkHTML = '<li><a href="#' + author-name + '"><span>' + author-name + '</span></a></li>';

    /* add generated code to html variable */
    html = html + linkHTML;

    /* insert HTML of all the links into the authors wrapper */
    authorsWrapper.innerHTML.join(' ');

  /* END LOOP: for every article: */
}
}

generateAuthors();


function addClickListenersToAuthors(){
  /* find all links to authors */
  const list = document.querySelectorAll('.author-name');
  /* START LOOP: for each link */
  for (const author of list) {
    /* add tagClickHandler as event listener for that link */
    tag.addEventListener('click', tagClickHandler);
  }
  /* END LOOP: for each link */
}

addClickListenersToAuthors();

//poki co skopiowalam funkcje poprzednia ale nie wiem jak ja dostosowac
function authorsClickHandler(event){
  
  /* prevent default action for this event */


  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href')
  
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */

  let activeTag = document.querySelectorAll('a.active[href^="#tag-"]')

  /* START LOOP: for each active tag link */
  for(let tag of activeTag){

    /* remove class active */
    tag.classList.remove('active'); 

  /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  let tagLinks = document.querySelectorAll('a[href="' + href + '"]')

  /* START LOOP: for each found tag link */
  for(let tag of tagLinks){

    /* add class active */
    tag.classList.add('active');

  /* END LOOP: for each found tag link */
  } 