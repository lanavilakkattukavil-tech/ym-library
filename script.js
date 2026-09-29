
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












    const foundBooks = books.filter(function(book) {

        return (
            book.title.toLowerCase().includes(searchInput) ||
            book.author.toLowerCase().includes(searchInput) ||
            book.subject.toLowerCase().includes(searchInput)
        );

    });


    if (foundBooks.length > 0) {

        result.innerHTML =
            "📚 Found: " +
            foundBooks.map(function(book) {

                return book.title +
                    " — " +
                    book.author;

            }).join("<br>");

    } else {

        result.innerText =
            "Sorry, no matching book was found.";

    }




