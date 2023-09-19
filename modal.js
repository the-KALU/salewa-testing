

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