function toggleMenu() {

const navbar = document.querySelector(".navbar");

navbar.classList.toggle("active");

}

document.querySelectorAll(".navbar a").forEach(function(link) {

link.addEventListener("click", function() {

    document.querySelector(".navbar").classList.remove("active");

});

});

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(function(entries) {

entries.forEach(function(entry) {

    if (entry.isIntersecting) {

        const counter = entry.target;

        const target = Number(counter.getAttribute("data-target"));

        let current = 0;

        const increment = Math.ceil(target / 80);

        function updateCounter() {

            current += increment;

            if (current >= target) {

                counter.innerText = target;

            } else {

                counter.innerText = current;

                requestAnimationFrame(updateCounter);

            }

        }

        updateCounter();

        observer.unobserve(counter);

    }

});

}, {
threshold: 0.5
});

counters.forEach(function(counter) {

observer.observe(counter);

});
