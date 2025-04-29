// Get the DOM elements
const bikesInput = document.getElementById('bikes');
const carsInput = document.getElementById('cars');
const calculateBtn = document.querySelector("button");

const emissionsOutput = document.getElementById('emissions');
const areaOutput = document.getElementById('area');
const loadOutput = document.getElementById('load');
const revenueOutput = document.getElementById('revenue');

// Event listener for the Calculate button
calculateBtn.addEventListener('click', function() {
  const bikes = parseInt(bikesInput.value);
  const cars = parseInt(carsInput.value);

  // Check if inputs are valid
  if (isNaN(bikes) || isNaN(cars) || bikes < 0 || cars < 0) {
    alert('Please fill out all the fields with valid numbers.');
    return;
  }

  // Perform the calculations
  const emissionsSaved = calculateEmissionsSaved(bikes, cars);
  const areaRequired = calculateAreaRequired(bikes, cars);
  const loadRequired = calculateLoadRequired(bikes, cars);
  const potentialRevenue = calculatePotentialRevenue(bikes, cars);

  // Update the results on the page
  emissionsOutput.textContent = emissionsSaved.toFixed(2);
  areaOutput.textContent = areaRequired.toFixed(2);
  loadOutput.textContent = loadRequired.toFixed(2);
  revenueOutput.textContent = potentialRevenue.toFixed(2);
});

// Sample calculation functions

function calculateEmissionsSaved(bikes, cars) {
  // Assuming basic calculations for emissions saved (example data)
  const bikeEmissionFactor = 0.15; // kg CO2 per bike saved
  const carEmissionFactor = 0.50; // kg CO2 per car saved
  return (bikes * bikeEmissionFactor + cars * carEmissionFactor);
}

function calculateAreaRequired(bikes, cars) {
  // Example formula for space required (just as a placeholder)
  const bikeArea = 30; // sq.ft per bike
  const carArea = 100; // sq.ft per car
  return (bikes * bikeArea + cars * carArea);
}

function calculateLoadRequired(bikes, cars) {
  // Example formula for load required
  const bikeLoad = 1.5; // amps per bike
  const carLoad = 5; // amps per car
  return (bikes * bikeLoad + cars * carLoad);
}

function calculatePotentialRevenue(bikes, cars) {
  // Example formula for annual revenue (just a placeholder)
  const revenuePerBike = 3000; // ₹ per bike
  const revenuePerCar = 10000; // ₹ per car
  return (bikes * revenuePerBike + cars * revenuePerCar);
}
