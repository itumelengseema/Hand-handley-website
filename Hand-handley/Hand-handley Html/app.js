const manu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-manu');
const Landing = document.querySelector('.title')
const Gallery = document.querySelector('.Gallery')
const AboutUS = document.querySelector('.AboutUS')
const AboutImg = document.querySelector('.img-responsive-Gallery');

manu.addEventListener('click', function () {
    manu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

gsap.from(".title", { duration: 3, x: -200 });
gsap.from(".AboutUS", { duration: 3, y: 200, rotation: 360 });


gsap.to(".img-responsive-Gallery", 1, {
    scale: 0.1,
    y: 60,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut",
    delay: 0.5,
    stagger: {
        amount: 1.5,
        grid: "auto",
        from: "center"
    }
});


gsap.to(".img-responsive-Gallery ", 1, {
    scale: 0.1,
    y: 60,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut",
    delay: 0.5,
    stagger: {
        amount: 1.5,
        grid: "auto",
        from: "center"
    }
});
console.log('hi')
//contact for validating

$(document).ready(function () {
    $('.contact-us-btn').click(function (event) {
        event.preventDefault()
        console.log('Clicked button')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status').val()
        statusElm.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>email is valid </div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>email is not </div>')
        }

        if (subject.length > 2) {
            statusElm.append('<div>Subject is valid </div>')
        } else { statusElm.append('<div>Subject is not </div>') }

        if (message.length >= 10) {
            statusElm.append('<div>Message is valid </div>')
        } else { statusElm.append('<div>Message is not </div>') }
    })
}
)