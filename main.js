//SHOW / HIDE NAV MENU

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none'
})

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none'
})

// Sidebar
// const menuItems = document.querySelectorAll('.menu-item');


// const changeActiveItem = () => {
//     menuItems.forEach(item => {
//         item.classList.remove('active');
//     });
// }

// menuItems.forEach(item => {
//     item.addEventListener('click', () => {
//         changeActiveItem();
//         item.classList.add('active');
//     })
// })

/*==================== SIDEBAR TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        target.classList.add('active')

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
    })
})




// RECIPE SECTION
const recipes = document.querySelectorAll('.recipe');
recipes.forEach(recipe => {

    recipe.addEventListener('click', () => {
        recipe.classList.toggle('open');


        const icon = recipe.querySelector('.recipe__icon i');
        if (icon.className === 'fa fa-plus') {
            icon.className = 'fa fa-minus'
        } else {
            icon.className = 'fa fa-plus'
        }

    })
})

// END OF RECIPE SECTION



// OPEN STAFF PROFILE

const staffs = document.querySelectorAll('.team__member');
const staffModal = document.querySelector('.open-staff');
const closeModal = document.querySelector('.close-btn')

const openStaffModal = () => {
    staffModal.style.display = 'grid';
}

const closeStaffModal = (e) => {
    if (e.target.classList.contains('open-staff')) {
        staffModal.style.display = 'none';
    }
}

staffs.forEach((staff) =>{
staff.addEventListener('click', openStaffModal)
});

staffModal.addEventListener('click', closeStaffModal);

closeModal.addEventListener('click', () =>{
    staffModal.style.display = 'none';
});


// Load products Mpdal

const assigns = document.querySelectorAll('.assign');
const loadModal = document.querySelector('.load-modal');
const closeLoad = document.querySelector('.close-load');

const openLoadModal = () => {
    loadModal.style.display = 'grid';
}

const closeLoadModal = (e) => {
    if (e.target.classList.contains('assign')) {
        loadModal.style.display = 'none';
    }
}

assigns.forEach((assign) =>{
assign.addEventListener('click', openLoadModal)
});

loadModal.addEventListener('click', closeLoadModal);

closeLoad.addEventListener('click', () =>{
    loadModal.style.display = 'none';
});