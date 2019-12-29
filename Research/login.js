function loginInit() {
    let loginStatus = 0;
    try {
        loginStatus = document.cookie.split("login=")[1].split(";")[0];
    } catch (e) {
        document.cookie = "login=0";
        loginStatus = 0;
    }

    if (loginStatus == 0) {
        document.location.href = "index.html";
    }
}

loginInit();