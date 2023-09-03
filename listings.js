'use strict';

function dropdownMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
  }
  
  window.onclick = function(click) {
    if (!click.target.matches('.dropbtn')) {
        var dropdownItem = document.getElementsByClassName('dropdown-content');
            var correctItem;
            for (var i = 0; i < dropdownItem.length; i++){
                correctItem = dropdownItem[i];
                if (correctItem.classList.contains('show')){
                    correctItem.classList.remove('show');
                }
            }
    }
  }

const numbers = document.querySelectorAll('.link');

numbers.forEach((element, i) => {
    element.addEventListener('click', () =>{
        numbers.forEach(element => element.classList.remove('active'));
        element.classList.add('active');
    });
});

const numItems = Array.from(document.querySelectorAll('.link'));
const NUM_SIZE = numItems.length;

const leftBtn = document.querySelector('.leftbtn');
const rightBtn = document.querySelector('.rightbtn');

leftBtn.addEventListener('click', swipe);
rightBtn.addEventListener('click', swipe);


function swipe(e){
    const currentPage = document.querySelector('.link.active');
    const currentIndex = numItems.indexOf(currentPage);

    let nextIndex;

    if(e.currentTarget.classList.contains('leftbtn')){
        if(currentIndex === 0){
            nextIndex = NUM_SIZE - 1;
        }
        else{
            nextIndex = currentIndex - 1;
        }
    }
    else{
        if(currentIndex === NUM_SIZE - 1){
            nextIndex = 0;
        }
        else{
            nextIndex = currentIndex + 1;
        }
    }

    numItems[nextIndex].classList.add('active');
    currentPage.classList.remove('active');
    numItems[currentIndex].classList.remove('active');
}