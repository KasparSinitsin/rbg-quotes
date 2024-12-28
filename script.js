// Array of quotes
const quotes = [
    "Whatever you choose to do, leave tracks. That means don’t do it just for yourself. You will want to leave the world a little better for your having lived.",
    "I pray that I may be all that my mother would have been had she lived in an age when women could aspire and achieve and daughters are cherished as much as sons.",
    "A constitution, as important as it is, will mean nothing unless the people are yearning for liberty and freedom.",
    "Fight for the things that you care about. But do it in a way that will lead others to join you.",
    "I'm a very strong believer in listening and learning from others.",
    "The emphasis must be not on the right to abortion but on the right to privacy and reproductive control.",
    "A gender line... helps to keep women not on a pedestal, but in a cage.",
    "Real change, enduring change, happens one step at a time.",
    "I’m sometimes asked, 'When will there be enough [women on the supreme court]?' And I say 'When there are nine.' People are shocked. But there’d been nine men, and nobody’s ever raised a question about that.",
    "Women belong in all places where decisions are being made. It shouldn’t be that women are the exception.",
    "I would like to be remembered as someone who used whatever talent she had to do her work to the very best of her ability. And to help repair tears in her society, to make things a little better through the use of whatever ability she has…",
    "When contemplated in its extreme, almost any power looks dangerous.",
    "If you want to be a true professional, do something outside yourself.",
    "I don’t say women’s rights — I say the constitutional principle of the equal citizenship stature of men and women.",
    "Women will have achieved true equality when men share with them the responsibility of bringing up the next generation.",
    "I didn’t change the Constitution; the equality principle was there from the start. I just was an advocate for seeing its full realization.",
    "The decision whether or not to bear a child is central to a woman’s life, to her wellbeing and dignity. It’s a decision she must make for herself.",
    "Reacting in anger or annoyance will not advance one’s ability to persuade.",
  ];
  
  // Function to get a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Display a random quote and enable the "Copy" button
document.getElementById("generateQuote").addEventListener("click", () => {
  const quoteDisplay = document.getElementById("quote");
  const copyButton = document.getElementById("copyQuote");

  quoteDisplay.textContent = getRandomQuote();

  // Enable the "Copy" button
  copyButton.disabled = false;
  copyButton.classList.remove("bg-green-800",
    "text-gray-500", 
    "cursor-not-allowed");
  copyButton.classList.add("bg-gray-600",
    "text-white", 
    "hover:bg-green-600");
});

// Copy the quote to clipboard and show toast message
document.getElementById("copyQuote").addEventListener("click", () => {
  const quoteDisplay = document.getElementById("quote").textContent;

  navigator.clipboard
    .writeText(quoteDisplay)
    .then(() => {
      showToast("Quote copied!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      showToast("Failed to copy the quote.");
    });
});

// Function to show a toast message
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;

  // Show the toast
  toast.classList.remove("hidden");
  toast.classList.add("show");

  // Hide the toast after 2 seconds
  setTimeout(() => {
    toast.classList.add("hidden");
    toast.classList.remove("show");
  }, 2000);
}