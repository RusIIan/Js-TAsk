const form = document.querySelector(".form");
const blogBodyInput = document.querySelector(".blog-input");
const authorInput = document.querySelector(".author-input");
const numberInput = document.querySelector(".number-input");
const emailInput = document.querySelector(".email-input");
// validation
const blogBodyValidation = document.querySelector(".blog-validation");
const authorValidation = document.querySelector(".author-validation");
const numberValidation = document.querySelector(".number-validation");
const emailValidation = document.querySelector(".email-validation");

const image = document.createElement('img');
image.setAttribute("src", "https://crocoder.dev/icon.png");
image.style.width = "150px";
image.style.marginLeft = "110px";
const frm = document.querySelector(".form");
frm.prepend(image);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (blogBodyInput.value=="") {
        blogBodyValidation.classList.remove("disable");
        blogBodyInput.classList.add("invalid-input");
    }
    else
    {
        blogBodyValidation.classList.add("disable");  
        blogBodyInput.classList.remove("invalid-input");
    }

    if (authorInput.value == "") {
      authorValidation.classList.remove("disable");
      authorInput.classList.add("invalid-input");
    }
    else {
      authorValidation.classList.add("disable");
      authorInput.classList.remove("invalid-input");
    }

    if (
      numberInput.value == "") {
      numberValidation.classList.remove("disable");
      numberInput.classList.add("invalid-input");
    }
    else{
       numberValidation.classList.add("disable");
       numberInput.classList.remove("invalid-input");
     }

    if (emailInput.value == "") {
      emailValidation.classList.remove("disable");
      emailInput.classList.add("invalid-input");
    }
    else {
      emailValidation.classList.add("disable");
      emailInput.classList.remove("invalid-input");
    }
})