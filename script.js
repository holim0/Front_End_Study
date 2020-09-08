var menu = document.querySelector('.menu');

var cur;

function clickHandler(e){

    if(cur){
        cur.classList.remove('menu-active');
    }
    e.target.classList.add('menu-active');
    cur=e.target;
}

menu.addEventListener('click', clickHandler);
