function run() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let msg = document.getElementById("msg").value

    // ==============
    document.getElementById("name").style.border = ""
    document.getElementById("nameValid").innerHTML = ""

    document.getElementById("email").style.border = ""
    document.getElementById("emailValid").innerHTML = ""

    document.getElementById("msg").style.border = ""
    document.getElementById("msgValid").innerHTML = ""
    // ==============

    let isValid = true

    if (name === "") {
        document.getElementById("name").style.border = "1px solid red"
        document.getElementById("nameValid").innerHTML = "This filed requied"
        isValid = false
    }

    if (email === "") {
        document.getElementById("email").style.border = "1px solid red"
        document.getElementById("emailValid").innerHTML = "This filed requied"
        isValid = false
    }

    if (msg === "") {
        document.getElementById("msg").style.border = "1px solid red"
        document.getElementById("msgValid").innerHTML = "This filed requied"
        isValid = false
    }

    if (isValid) {

        let data = {
            name: name,
            email: email,
            msg: msg
        }
        console.log(data)

        alert("Your Form Has Been Submited Thankyou")

        document.getElementById("name").value =""
        document.getElementById("email").value =""
        document.getElementById("msg").value =""
    }
}