// your code here
// Add an event listener for the button click
document.getElementById("button").addEventListener("click", function () {
  // Retrieve input values
  const name = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value.trim();

  // Validate inputs
  if (!name || !year) {
    alert("Please fill in both the name and year fields.");
    return;
  }

  // Construct the updated URL
  const baseURL = "https://localhost:8080/";
  const updatedURL = `${baseURL}?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

  // Display the updated URL in the h3 element
  document.getElementById("url").textContent = updatedURL;
});
