const copyButtons = document.querySelectorAll(".copy-button");
const textToCopyElements = document.querySelectorAll(".text-to-copy");
const popup = document.getElementById("copy-popup");

copyButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const textToCopy = textToCopyElements[index].textContent;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        // Show a success message
        popup.classList.add("show");
        setTimeout(() => {
          popup.classList.remove("show");
        }, 1000); // Hide after 2 seconds
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  });
});
