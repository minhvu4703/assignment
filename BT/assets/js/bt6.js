function validateForm() {
    var registerForm = document.forms['registerForm'];
    var userNameElm = registerForm['username'];
    var passwordElm = registerForm['password'];
    var re_passwordElm = registerForm['re_password']
    var status = true;
    if (userNameElm.value == "") {
        userNameElm.style.border = "1px solid red";
        userNameElm.style.borderRadius = "3px";
        document.getElementById("usernameError").style.display = "inline";
        status = false;
    } else {
        userNameElm.style.border = "1px solid #ccc";
        userNameElm.style.borderRadius = "3px";
        document.getElementById("usernameError").style.display = "none";
        status = true;
    }

    if (passwordElm.value == "") {
        passwordElm.style.border = "1px solid red";
        passwordElm.style.borderRadius = "3px";
        document.getElementById("passwordError").style.display = "inline";
        status = false;
    } else {
        passwordElm.style.border = "1px solid #ccc";
        passwordElm.style.borderRadius = "3px";
        document.getElementById("passwordError").style.display = "none";
        status = true;
    }

    if (re_passwordElm.value == "") {
        re_passwordElm.style.border = "1px solid red";
        re_passwordElm.style.borderRadius = "3px";
        document.getElementById("re_passwordError").style.display = "inline";
        status = false;
    } else {
        re_passwordElm.style.border = "1px solid #ccc";
        re_passwordElm.style.borderRadius = "3px";
        document.getElementById("re_passwordError").style.display = "none";
        status = true;
    }

    // if (status == true) {
    //     // Validate username, password account
    //     if (userNameElm.value == "admin" && passwordElm.value == "123456") {
    //         //xử lý chuyển trang
    //         status = true;
    //     } else {
    //         //thông báo lỗi
    //         document.getElementById("loginError").style.display = "block";
    //         status = false;
    //     }
    // }
    return status;
}