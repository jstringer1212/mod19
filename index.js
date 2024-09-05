const names = ['Alice', 'Bob', 'Carol'];
const occupations = ['Writer', 'Programmer', 'Teacher'];
const prices = [30, 50, 70];
const freelancers = [
    {name: 'Alice', occupation: 'Writer', price: 30},
    {name: 'Bob', occupation: 'Teacher', price: 70}];
const avPrice = [50];
const addFreelancerIntervalId = setInterval(addFreelancer, 2000);

// initial render
render();
PriceAv();

// create additional table rows
function render() {
    const freelancerstable = document.querySelector("#freelancers");
        const freelancerrows = freelancers.map((freelancer) => {
        const row = document.createElement("tr");
        row.innerHTML = 
        `<td>${freelancer.name}</td>
        <td> ${freelancer.occupation}</td>
        <td> $${freelancer.price}</td>`;
        return row;
    });
    freelancerstable.replaceChildren(...freelancerrows);    
}

// calc average price
function PriceAv() {
    const average = document.querySelector("#average");
    const total = avPrice.reduce((sum, price) => sum + price, 0);
    const averageprice = (total / avPrice.length);
    average.innerHTML = `<div>Average price: $${averageprice.toFixed(2)}</div>`;
}

// randomize data in table rows
function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    freelancers.push({ name, occupation, price });
    avPrice.push(price);
    render();
    PriceAv();
}


// stop button
function stopAddingFreelancers() {
    clearInterval(addFreelancerIntervalId);
}

document.querySelector("#stopButton").addEventListener("click", stopAddingFreelancers);
