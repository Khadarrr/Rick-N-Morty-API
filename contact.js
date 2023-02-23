const formEL = document.querySelector("#js-form");
const nameEl = document.querySelector("#js-name");
const emailEL = document.querySelector("#js-email");
const addressEl = document.querySelector("#js-address");
const subjectEL = document.querySelector("#js-subject");


nameEl.addEventListener("blur", (event) => {
    const name = event.target.value.trim();
    const minLengthRegex = /[a-zA-Z]{0.10}/;

    if (minLengthRegex.test(name)) {
        event.target.classList.add("is-success");
        event.target.classList.remove("is-error");
    } else {
        event.target.classList.add("is-error");
        event.target.classList.remove("is-success");
    }
});

subjectEL.addEventListener("blur", (event) => {
    const subject = event.target.value.trim();
    const subjectRegex = /[a-zA-Z]{0.10}/;

    if (subjectRegex.test(email)) {
        event.target.classList.add("is-success");
        event.target.classList.remove("is-error");
    } else {
        event.target.classList.add("is-error");
        event.target.classList.remove("is-success");
    }
});

emailEL.addEventListener("blur", (event) => {
    const email = event.target.value.trim();
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (emailRegex.test(email)) {
        event.target.classList.add("is-success");
        event.target.classList.remove("is-error");
    } else {
        event.target.classList.add("is-error");
        event.target.classList.remove("is-success");
    }
});

addressEl.addEventListener("blur", (event) => {
    const name = event.target.value.trim();
    const addressRegex = /[a-zA-Z0-9]{0.25}/;

    if (addressRegex.test(name)) {
        event.target.classList.add("is-success");
        event.target.classList.remove("is-error");
    } else {
        event.target.classList.add("is-error");
        event.target.classList.remove("is-success");
    }
});


formEL.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const name = nameEl.value;
    const email = emailEL.value;
    const address = addressEl.value;
    const subject = subjectEL.value;
    
    if (name === "") {
        alert("innvalid name");
        return;
    }
    
    if (subject === "") {
        alert("innvalid")
        return;
    }
    
    if (email === "") {
        alert("innvalid email");
        return;
    }
    
    if (address === "") {
        alert("innvalid address");
        return;
    }


    alert("Form sendt");
});    