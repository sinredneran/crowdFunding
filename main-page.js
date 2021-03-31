/***************  JQUERY ****************************/
/* FOR C H E C K B O X E S   RESET*/
$(".checkbox").prop('checked', false);
$(".CB").prop('checked', false);
/**************** JQUERY ***************************/

function closeModelContainer(item) {
    item.classList.remove('show');
    outModal.classList.remove('noScroll-Body');
    $(".checkbox").prop('checked', false);
    $(".CB").prop('checked', false);
}

function openModelContainer(item) {
    item.classList.add('show');
    outModal.classList.add('noScroll-Body');
}

const bkmarked = () => {
    let bookmarked = document.querySelector(".bookmark");
    let bkpara = document.querySelector(".bookmarkPara");
    bookmarked.classList.toggle("btnBookmarked");
    bkpara.classList.toggle("bkm-ed");
    if (bkpara.classList.contains("bkm-ed")) {
        bkpara.innerText = "Bookmarked";
    }
    else {
        bkpara.innerText = "Bookmark";
    }
}


/* for whole Modal and its background*/

const open = document.querySelector(".open");
const close = document.querySelector(".close");
const bgModal = document.querySelector(".bgModal");
const outModal = document.body; //ITS FOR WHOLE BODY OF A PAGE

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', () => {
        openModelContainer(bgModal);
    })
});

close.addEventListener('click', () => {
    closeModelContainer(bgModal);
});
//
/* for completion success part*/

const successCont = document.querySelector(".bgThanks");
const successClose = document.querySelector(".gotIt");

document.querySelectorAll('.continue').forEach(item => {
    item.addEventListener('click', () => {
        successCont.classList.add('show');
        bgModal.classList.remove('show');
    })
});
successClose.addEventListener('click', () => {
    closeModelContainer(successCont);
    closeModelContainer(bgModal);
});

// BUTTONS AND MODAL PLEDGE'S CHECKBOXES

let mm = document.querySelectorAll('.modalPledge');
let allRewardBtn = document.querySelectorAll('.reward_btn');

for (let i = 0; i < allRewardBtn.length; i++) {
    let btnID = `#${allRewardBtn[i].getAttribute('id').toString()}`;
    let mmID = `#${mm[i].getAttribute('id').toString()}`;

    document.querySelector(btnID).addEventListener('click', () => {
        document.querySelector(mmID).children[0].checked = true;
    });
}
//
let burger = document.querySelector('.burger');
let burgerClose = document.querySelector('.burgerClose');
let nav = document.querySelector('.nav2');

burger.addEventListener('click', () => {
    burger.classList.toggle('burgerClose');
});

