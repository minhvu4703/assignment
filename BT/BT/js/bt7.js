function validateForm() {
    var loginForm = document.form['loginForm'];
    var usernameElm = login.form['username'];
    var passwordElm = login.form['password'];
    var status = true;

    if (usernameElm.value == "") {
        usernameElm.style.border = "ipx solid red"
        usernameElm.style.borderRadius = "3px"
        document.getElementById("usernameError").style.display = "inline"
        status = false;
    } else {
        usernameElm.style.border = "ipx solid #ccc"
        usernameElm.style.borderRadius = "3px"
        document.getElementById("usernameError").style.display = "none"
        status = true;
    }

    if (passwordElm.value == "") {
        passwordElm.style.border = "ipx solid red"
        passwordElm.style.borderRadius = "3px"
        document.getElementById("passwordError").style.display = "inline"
        status = false;
    } else {
        usernameElm.style.border = "ipx solid #ccc"
        usernameElm.style.borderRa = "3px"
        document.getElementById("passwordError").style.display = "none"
        status = true;
    }
    // Validate username, password,
    if (status == true) {
        if (usernameElm.value == "admin" && passwordElm.value == "123456") {
            //xử lý chuyển trang
            status = true;
        } else {
            // thông báo lỗi
            document.getElementById("LoginError").style.display = "block"
            status = false;
        }
    }
    return status;
}