document.addEventListener('DOMContentLoaded', () => {
    const reviews = [
        { source: 'Trustpilot', rating: 4.2, reviews: '45k Reviews', stars: 5, starColor: 'green' },
        { source: 'Capterra', rating: 4.1, reviews: '18k Reviews', stars: 4, starColor: 'orange' }
    ];

    const menuToggle = document.getElementById('menuToggle');
    const menuToggleMain = document.getElementById('menuToggleMain');
    const menu = document.getElementById('menu');

    const toggleMenu = () => {
        menu.classList.toggle('translate-x-0');
        menu.classList.toggle('-translate-x-full');
    };

    menuToggle.addEventListener('click', toggleMenu);
    menuToggleMain.addEventListener('click', toggleMenu);

    const reviewsContainer = document.getElementById('reviewsContainer');

    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'bg-white shadow-md rounded-md p-4 second-box';

        let starsHTML = '';
        for (let i = 0; i < review.stars; i++) {
            starsHTML += `<span class="text-${review.starColor}-500">★</span>`;
        }

        reviewDiv.innerHTML = `
            <div class="flex items-center mt-2">
                <div class="flex space-x-1">
                    ${starsHTML}
                </div>
            </div>
            
            <div class="flex items-center mt-2">
                <p class="text-gray-800 ml-2">${review.rating}/5</p>
                <p class="text-gray-600"> &nbsp;(${review.reviews})</p>
            </div>

            <div class="flex items-center space-x-2">
                <img src="/assets/img/${review.source}.png" alt="${review.source}" class="w-8">
                <div>
                    <p class="text-gray-800 font-semibold">${review.source}</p>
                </div>
            </div>
        `;

        reviewsContainer.appendChild(reviewDiv);
    });
});
