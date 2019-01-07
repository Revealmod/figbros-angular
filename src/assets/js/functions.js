function handleLogin() {
    $.post("http://api.sh.dev.figbros.com/login", {
        username: $("#login-username").val(),
        password: $("#login-password").val()
    }, (data) => {
        if (data.success) {
            console.log("Login succeeded! Multipass URL: ");
            console.log(data.url);
        } else {
            console.log("Login failed with reason: ");
            console.log(data.info);
        }
    }, "json");

    return false;
}