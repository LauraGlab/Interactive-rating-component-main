const submitBtn = document.querySelector(".submit-btn");
const chosenRating = document.querySelectorAll(".circle");
const rateNumber = document.querySelector(".rate-number");
const firstPage = document.querySelector(".content");
const secondPage = document.querySelector(".thank-you");
const returnBtn = document.querySelector(".return-btn");

function rating(){

    chosenRating.forEach(rate => {
        if(rate.checked){
            rateNumber.textContent = rate.value;
            firstPage.style.display = "none";
            secondPage.style.display = "flex";
        }
    });
}  

function returnPage(){
    firstPage.style.display = "block";
    secondPage.style.display = "none";
}


submitBtn.addEventListener('click', rating);
returnBtn.addEventListener('click', returnPage);