$(".input_text").focus(function () {
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function () {
    $(this).prev('.fa').removeclass('glowIcon')
})

function checkName(fieldId) {
    if (document.getElementById(fieldId).value === "") {
        alert("UserName required.");
    }
}

function checkPass(fieldId) {
    if (document.getElementById(fieldId).value === "") {
        alert("Password required.");
    }
}
// function checkBoth(fieldClass) {
//     if (document.getElementsByClassName(fieldClass).value === "") {
//         alert("Please enter your Username and Password")
//     }
// }