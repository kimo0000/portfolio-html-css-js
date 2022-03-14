/* js header */
function showMobile () {
    const btn  = document.querySelector('.acceil__btn');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll(' a');
    
    btn.addEventListener('click', () => {
        header.classList.toggle('show_nav');
    });
        links.forEach(link => {
            link.addEventListener('click', () => {
                header.classList.remove('show_nav');
            });
        })
}

showMobile();


/* js portfolio tab */
function filtercard () {
    const tabs = document.querySelectorAll('.ul__portfolio li a');
    const cards = document.querySelectorAll('.porfolio__card .card');

    const resetActive = () => {
       tabs.forEach(tab => {
           tab.classList.remove('active');
       })
    }


    const showCard = (tab) => {
        cards.forEach(card => {
            let filter = card.getAttribute('data_category');

            if (tab === 'all') {
                card.classList.remove('show');
                return
            }

            filter !== tab ? card.classList.add('show') : card.classList.remove('show');
        })
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
           e.preventDefault();
           let filter = tab.getAttribute('data_filter');
           showCard(filter);
           resetActive();
           tab.classList.add('active');
        })
    })

   
}

filtercard();

/* js portfolio modal */

function modalOverlay () {
   const links = document.querySelectorAll('.card_link');
   const modals = document.querySelectorAll('.modal');
   const btns = document.querySelectorAll('.modal_close')

   const modalOver = () => {
       modals.forEach(modal => {
           modal.classList.remove('showModal');
       })
   }

   links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelector(`[id = ${link.dataset.id}]`).classList.add('showModal');
      })
   })

   btns.forEach(btn => {
       btn.addEventListener('click', () => {
           modalOver();
       })
   })
}

modalOverlay();

/* effet */

const observerSection = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');

/* effet section */
    sections.forEach((section, index) => {
        console.log(index)
        section.style.opacity = 0;
        section.style.transition = 'all 1.5s ease';
    })

    let sectionObsevers = new IntersectionObserver (function (entryes, observer) {
        entryes.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                console.log(elem);
                elem.style.opacity = 1;
            }
        })
    })

    sections.forEach(section => {
        sectionObsevers.observe(section);
    });

/* effet skills */
   skills.forEach(skill => {
       skill.style.width = 0;
       skill.style.transition = 'all 1.5s';
   })

   let skillsObservers = new IntersectionObserver (function (entryes, observer) {
        entryes.forEach(entry => {
            if(entry.isIntersecting){
                let elem = entry.target;
                elem.style.width = elem.dataset.width + '%';
            }
        })
   })

   skills.forEach(skill => {
       skillsObservers.observe(skill);
   })

}

observerSection();