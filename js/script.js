const titleClickHandler = function(event){
  console.log('Link was clicked!')
  /*console.log('clic', event );*/

  /*[DONE] remove class 'active' from all article links  */
  
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* [IN PROGRESS] add class 'active' to the clicked link */

  const clickedElement = this;
  console.log('clickedElement:', clickedElement);
  console.log('clickedElement (with plus): ' + clickedElement);

  const clickedElement = function(){
  activeLink.classList.add('active')};

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.titles a');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
}

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler );
}



