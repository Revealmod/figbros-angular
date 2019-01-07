function handleLogin() {
    $.post("http://api.sh.dev.figbros.com/login", {
        username: $("#login-username").text(),
        password: $("#login-password").text()
    }, (data) => {
        if (data.success) {
            console.log("Login succeeded! Multipass URL: " + data.url);
        } else {
            console.log("Login failed with reason: " + data.info);
        }
    }, "json");

    return false;
}