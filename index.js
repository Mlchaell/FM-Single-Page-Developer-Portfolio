const nameField = document.getElementById("name-input");
const emailField = document.getElementById("email-input");
const msgField = document.getElementById("message-input");
const btn = document.getElementById("sub-btn");

// Error types
// name, email, msg
function errHandler(errType, field) {
    let errMsg = document.getElementById(errType + "-err");

    if (errType !== "email" && field.target.value.length <= 0) {
        errMsg.classList.remove("hidden");
        field.target.classList.add("error");
    } else {
        errMsg.classList.add("hidden") 
        field.target.classList.remove("error");
    }

    if (errType === "email" && !field.target.checkValidity() || field.target.value.length <= 0) {
        errMsg.classList.remove("hidden");
        field.target.classList.add("error"); 
    } else {
        errMsg.classList.add("hidden");
        field.target.classList.remove("error"); 
    }
}

nameField.addEventListener("focusout", e => {
    errHandler("name", e)
});

emailField.addEventListener("focusout", e => {
    errHandler("email", e)
});

msgField.addEventListener("focusout", e => {
    errHandler("msg", e)
});

btn.addEventListener("submit", e => {
    e.preventDefault();
});