document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;

        if (name === "" || email === "") {
            alert("Please enter your name and email.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been received. We will contact you soon.");

        form.reset();
    });

});
