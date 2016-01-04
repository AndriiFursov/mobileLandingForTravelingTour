/*------------------------------------*\
    #SECTION-TOUR-REQUEST*
    Scripts for tour request pop-up 
\*------------------------------------*/
/* 
 * Functions:
 *
 * checkForm () - Function to check tour-request form
 *
*/

function checkForm () {
/*
 * Function to check tour-request form
*/

    var clientName    = document.forms[0].elements["client-name"],
        clientPhone   = document.forms[0].elements["client-phone"],
        clientEmail   = document.forms[0].elements["client-email"],
        clientComment = document.forms[0].elements["client-comment"],
        nameRegExp    = /^[А-Яа-яЁёA-Za-z\s]+$/,
        phoneRegExp   = /^[0-9\s\(\)\+\-]+$/,
        emailRegExp   = /[^@]+@[^@]+\.[a-zA-Z]{2,6}/,
        commentRegExp = /^[0-9А-Яа-яЁёA-Za-z\s\,\.\/\'\"\?\-\!]+$/,
        flag          = true;
    
    if (clientName.value === "") {
        clientName.style.border = "1px solid #db4437";
        clientName.style.boxShadow = "0 0 10px #db4437";
        flag = false;
    } else if (clientName.value.search(nameRegExp) === -1) {
        clientName.style.border = "1px solid #db4437";
        clientName.style.boxShadow = "0 0 10px #db4437";
        flag = false;
    } else {
        clientName.style.border = "";
        clientName.style.boxShadow = "";
    }
    
    if (clientPhone.value === "") {
        clientPhone.style.border = "1px solid #db4437";
        clientPhone.style.boxShadow = "0 0 10px #db4437";
        flag = false;
    } else if (clientPhone.value.search(phoneRegExp) === -1) {
        clientPhone.style.border = "1px solid #db4437";
        clientPhone.style.boxShadow = "0 0 10px #db4437";
        flag = false;
    } else {
        clientPhone.style.border = "";
        clientPhone.style.boxShadow = "";
    }

    if (clientEmail.value !== "") {
        if (clientEmail.value.search(emailRegExp) === -1) {
            clientEmail.style.border = "1px solid #db4437";
            clientEmail.style.boxShadow = "0 0 10px #db4437";
            flag = false;
        } else {
            clientEmail.style.border = "";
            clientEmail.style.boxShadow = "";
        }
    }

    if (clientComment.value !== "") {
        if (clientComment.value.search(commentRegExp) === -1) {
            clientComment.style.border = "1px solid #db4437";
            clientComment.style.boxShadow = "0 0 10px #db4437";
            flag = false;
        } else {
            clientComment.style.border = "";
            clientComment.style.boxShadow = "";
        }
    }
    
    return flag;
}
