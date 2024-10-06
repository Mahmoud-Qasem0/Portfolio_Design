// Date updating in Footer
let year = document.getElementById("year");

year.innerHTML = new Date().getFullYear();



// Scroll To Top Button

function scrollToTop() {
  window.scrollTo(0, 0);
}
/* <span class="scroll-arrow" onclick="scrollToTop()"><i class="fa-solid fa-arrow-up"></i></span> */
/*
.scroll-arrow {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 35px;
    right: 35px;
    background-color: var(--main-color);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    cursor: pointer;
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    animation: up 2s infinite;
    -webkit-animation: up 2s infinite;
}
@keyframes up {
    100%, 0% {
        transform: translateY(15px);
        -webkit-transform: translateY(15px);
        -moz-transform: translateY(15px);
        -ms-transform: translateY(15px);
        -o-transform: translateY(15px);
    }
    50% {
        transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
}
}*/