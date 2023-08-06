function event(message) {
    alert(message);
}

function checkAddress(fieldId) {
    var val = document.getElementById(fieldId).value;
    if (val === "") {
    alert("Email address required.");
    }
}
    