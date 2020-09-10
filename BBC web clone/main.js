(() => {

    const actions = {

        birdFlies(key) {
            
            if(key){
                document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth}px)`;
                console.log(key);
            }else{
                console.log(key);
                document.querySelector('[data-index="2"] .bird').style.transform =`translateX(-100%)`;
            }
        },

        birdFlies2(key) {
            
            if(key){
                document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, ${-window.innerHeight *0.7}px)`;
            }else{
                document.querySelector('[data-index="5"] .bird').style.transform = `translateX(-100%)`;
            }
        }

        
    };

    const stepElems= document.querySelectorAll('.step');
    const graphicElems = document.querySelectorAll('.graphic-item');
    let cur = graphicElems[0];
    let ioidx;
    

    const io = new IntersectionObserver((entries, observer)=>{
        ioidx = entries[0].target.dataset.index * 1;
    });



    for(let i = 0; i<stepElems.length; i++){
        io.observe(stepElems[i]);
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
        
    }

    function activate(action){
        cur.classList.add('visible');
        if(action){
            actions[action](true);
        }
        
    }

    function inacti(action){
        cur.classList.remove('visible');
        if(action){
            actions[action](false);
        }
    }
    
    window.addEventListener('scroll', ()=>{
        let step;
        let boundingRect;

        for(let i = ioidx-1; i< ioidx+2; i++){

            step = stepElems[i];
            if(!step) continue;
            boundingRect = step.getBoundingClientRect();
            
            if(boundingRect.top > window.innerHeight *0.1 
                && boundingRect.top< window.innerHeight * 0.8){
                    
                    inacti();
                    cur = graphicElems[step.dataset.index];
                    activate(cur.dataset.action);
            }


        }
    });
    activate();

})();