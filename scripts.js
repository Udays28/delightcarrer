// navbar js
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// JavaScript to handle hover events
document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});


const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            if (popup) {
                popup.style.display = 'block';
            }
        });
    });

    function closePopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'none';
        }
    }
const testimonialsData = [
    {
      text: "The counseling services provided by [Your Counseling Center Name] have been incredibly helpful for me. I've gained valuable insights and support that have helped me navigate through challenging times in my academic and personal life. Highly recommend!",
      rating: 5,
      name: "John Doe"
    },
    {
      text: "I'm grateful for the compassionate guidance and understanding I received from the counselors at [Your Counseling Center Name]. Their expertise helped me develop coping strategies and regain confidence during a difficult period. Thank you!",
      rating: 4,
      name: "Jane Smith"
    },
    {
        text: "I'm grateful for the compassionate guidance and understanding I received from the counselors at [Your Counseling Center Name]. Their expertise helped me develop coping strategies and regain confidence during a difficult period. Thank you!",
        rating: 4,
        name: "Jane Smith"
      },
      {
        text: "I'm grateful for the compassionate guidance and understanding I received from the counselors at [Your Counseling Center Name]. Their expertise helped me develop coping strategies and regain confidence during a difficult period. Thank you!",
        rating: 4,
        name: "Jane Smith"
      },
      {
        text: "I'm grateful for the compassionate guidance and understanding I received from the counselors at [Your Counseling Center Name]. Their expertise helped me develop coping strategies and regain confidence during a difficult period. Thank you!",
        rating: 4,
        name: "Jane Smith"
      },
      {
        text: "I'm grateful for the compassionate guidance and understanding I received from the counselors at [Your Counseling Center Name]. Their expertise helped me develop coping strategies and regain confidence during a difficult period. Thank you!",
        rating: 4,
        name: "Jane Smith"
      },
      {
        text: "I'm grateful for the compassionate guidance and understanding I received from the counselors at [Your Counseling Center Name]. Their expertise helped me develop coping strategies and regain confidence during a difficult period. Thank you!",
        rating: 4,
        name: "Jane Smith"
      },
    {
      text: "Choosing [Your Counseling Center Name] was one of the best decisions I made for my mental well-being. The counselors provided a safe and non-judgmental space where I could freely express myself and work through my challenges. I couldn't be more satisfied with the support I received.",
      rating: 5,
      name: "Alice Johnson"
    }
  ];

  function createTestimonialCard(testimonial) {
    const testimonialCard = document.createElement('div');
    testimonialCard.classList.add('testimonial-card');
    testimonialCard.innerHTML = `
      <div class="testimonial-header">
        <span class="testimonial-name">${testimonial.name}</span>
      </div>
      <div class="testimonial-text">
        <p>${testimonial.text}</p>
      </div>
      <div class="testimonial-details">
        <span class="testimonial-rating">${generateStars(testimonial.rating)}</span>
      </div>
    `;
    return testimonialCard;
  }

  function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '★'; // Adding star character
    }
    return stars;
  }

  function showTestimonials(startIndex) {
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    testimonialsContainer.innerHTML = ''; // Clear existing testimonials

    const endIndex = Math.min(startIndex + 3, testimonialsData.length); // Ensure not to go beyond the data length
    for (let i = startIndex; i < endIndex; i++) {
      const testimonialCard = createTestimonialCard(testimonialsData[i]);
      testimonialsContainer.appendChild(testimonialCard);
    }
  }

  let currentIndex = 0;

  function nextTestimonials() {
    currentIndex += 3;
    if (currentIndex >= testimonialsData.length) {
      currentIndex = 0;
    }
    showTestimonials(currentIndex);
  }

  function prevTestimonials() {
    currentIndex -= 3;
    if (currentIndex < 0) {
      currentIndex = testimonialsData.length - (testimonialsData.length % 3 || 3);
    }
    showTestimonials(currentIndex);
  }

  function startSlideshow() {
    showTestimonials(currentIndex);
    setInterval(nextTestimonials, 5000); // Change set of slides every 5 seconds
  }

  startSlideshow();