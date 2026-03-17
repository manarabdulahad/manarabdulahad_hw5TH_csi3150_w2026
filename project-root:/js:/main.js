// Initial load: show all cars when the page opens
window.onload = function() {
    displayCars(usedCars);
};

function displayCars(cars) {
    const container = document.getElementById("carContainer");
    const noResults = document.getElementById("noResults");
    
    container.innerHTML = ""; // Clear current cars

    if (cars.length === 0) {
        noResults.innerText = "No cars match your criteria. Please try again."; [cite: 15]
        return;
    }

    noResults.innerText = "";

    cars.forEach(car => {
        // Create the product card. Note the path to images/ folder.
        container.innerHTML += `
            <div class="car-card">
                <img src="images/${car.make}.png" alt="${car.make}" onerror="this.src='images/default.png'">
                <div class="car-info">
                    <h3>${car.year} ${car.make} ${car.model}</h3>
                    <p>Mileage: ${car.mileage.toLocaleString()} miles</p>
                    <p>Color: ${car.color}</p>
                    <p class="price">$${car.price.toLocaleString()}</p>
                </div>
            </div>
        `;
    });
}

function filterCars() {
    // Get values from the HTML inputs
    const minYear = document.getElementById("minYear").value;
    const maxYear = document.getElementById("maxYear").value;
    const maxMileage = document.getElementById("maxMileage").value;
    const maxPrice = document.getElementById("maxPrice").value;
    const make = document.getElementById("make").value;
    const color = document.getElementById("color").value;

    // Filter logic [cite: 14]
    const filtered = usedCars.filter(car => {
        return (!minYear || car.year >= parseInt(minYear)) &&
               (!maxYear || car.year <= parseInt(maxYear)) &&
               (!maxMileage || car.mileage <= parseInt(maxMileage)) &&
               (!maxPrice || car.price <= parseInt(maxPrice)) &&
               (!make || car.make === make) &&
               (!color || car.color === color);
    });

    displayCars(filtered);
}