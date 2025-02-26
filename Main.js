function submitInfo() {
    let userName = document.getElementById("name").value;
    alert(`Thanks, ${userName}! Proceed to the next form.`);
}

function calculatePrice() {
    let seat = document.getElementById("seat").value;
    let age = document.getElementById("age").value;
    
    let prices = {
        "VIP": 3500,
        "High": 2400,
        "Middle": 1000,
        "Low": 500
    };
    
    let discounts = {
        "Student": 0.97,
        "Regular": 1.00,
        "Senior": 0.80,
        "government" : 0.30,
        "VIP2" : 0.10
    };
    
    let basePrice = prices[seat];
    let finalPrice = basePrice * discounts[age];
    alert(`Your ticket price is ${finalPrice.toFixed(2)}. Proceed to the next section.`);
}

function printTicket() {
    document.getElementById("ticketImage").style.display = "block";
}

function buyMoreTickets() {
    location.reload();
}
