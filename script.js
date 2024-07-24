document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in the previous month
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').innerText = `Hi ${name}, your age is ${years} years, ${months} months, and ${days} days.`;
});
