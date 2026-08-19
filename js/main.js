function changeImage(image) {
    document.getElementById("modalImage").src = image;
}
// Reservation Form Validation

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        if (name.length < 3) {
            alert("Please enter a valid name.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email.");
            return;
        }

        if (phone.length < 10) {
            alert("Please enter a valid phone number.");
            return;
        }

        alert("🎉 Table Reserved Successfully!");

        reservationForm.reset();

    });

}
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});