
var reveals = document.querySelectorAll('.hidden');

// Create a new Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        // Check if the element is intersecting the viewport
        if (entry.isIntersecting) {
            // Add the 'show' class to reveal the element
            entry.target.classList.add('show');
        } else {
            // Optionally, you can remove the 'show' class if needed
            entry.target.classList.remove('show');
        }
    });
});

// Observe all elements with the class '.hidden'
reveals.forEach(el => observer.observe(el));


// Select all elements with the class '.hidden1'
var reveals1 = document.querySelectorAll('.hidden1');

// Create a new Intersection Observer
const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        // Check if the element is intersecting the viewport
        if (entry.isIntersecting) {
            // Add the 'show1' class to reveal the element
            entry.target.classList.add('show1');
        } else {
            // Optionally, you can remove the 'show1' class if needed
            entry.target.classList.remove('show1');
        }
    });
});


// Observe all elements with the class '.hidden1'
reveals1.forEach(el => observer1.observe(el));




// Select all elements with the class '.hidden1'
var reveals2 = document.querySelectorAll('.hidden2');

// Create a new Intersection Observer
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        // Check if the element is intersecting the viewport
        if (entry.isIntersecting) {
            // Add the 'show1' class to reveal the element
            entry.target.classList.add('show2');
        } else {
            // Optionally, you can remove the 'show1' class if needed
            entry.target.classList.remove('show2');
        }
    });
});


// Observe all elements with the class '.hidden1'
reveals2.forEach(el => observer2.observe(el));




















function jumpToSection(sectionId) {
    // Get the section element by its ID
    const section = document.getElementById(sectionId);

    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });
}


// JavaScript
const counterUp = window.counterUp.default;

const callback = entries => {
    entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            if (el.classList.contains('counter')) {
                const value = parseInt(el.textContent.trim(), 10);
                const options = {
                    duration: 1500,
                    delay: 16,
                };
                if (value > 160) {
                    counterUp(el, options);
                } else {
                    el.textContent = value;
                }
            }
            el.classList.add('is-visible');
        }
    });
}

const IO = new IntersectionObserver(callback, { threshold: 1 });

document.querySelectorAll('.counter').forEach(el => {
    IO.observe(el);
});

// Add event listener to the button
document.getElementById('showAnotherCounterButton').addEventListener('click', function() {
    const anotherCounterDiv = document.querySelector('.text22.another-counter');
    if (anotherCounterDiv) {
        anotherCounterDiv.style.display = 'block'; // Show the counter div when the button is clicked
    }
});
