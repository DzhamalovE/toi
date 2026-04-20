function sendData() {
    fetch("http://127.0.0.1:5000/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            status: document.getElementById("status").value
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").innerText = "Рақмет!";
    });
}
