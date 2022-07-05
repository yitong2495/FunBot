document.getElementById("btn").addEventListener("click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("text-container").textContent =
                data.activity;
        });
});
