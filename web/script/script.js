// form validatation 
function validateForm() {

    event.preventDefault();
    if (document.myForm.name.value == "") {
        msg0.innerHTML = 'UPS! Du manger at udfylde noget';
        document.myForm.name.focus();
        return false;
    } else {
        msg0.innerHTML = '';
    }

    if (document.myForm.email.value == "") {
        msg1.innerHTML = 'UPS! Angiv email korrekt';
        document.myForm.email.focus();
        return false;
    } else {
        msg1.innerHTML = '';
    }
    if (document.myForm.number.value == "") {
        msg2.innerHTML = 'UPS! Du manger at udfylde noget';
        document.myForm.number.focus();
        return false;
    } else {
        msg2.innerHTML = '';
    }
    confirm("Tak for din indsendelse! ");
    window.location.reload();
    return (true);
}

function maxLength() {
    if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
    type = "number"
    maxlength = "8"
};



function validateEmail() {
    var emailID = document.myForm.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID")
        document.myForm.email.focus();
        return false;
    }
    return (true);
}