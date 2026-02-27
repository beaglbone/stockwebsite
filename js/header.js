// Live ticker
function populateTicker() {
  const ticker = document.getElementById("liveTicker");
  if (!ticker) return;

  const data = [
    { symbol: "NIFTY 50", value: "22,456.80", change: "+0.70%" },
    { symbol: "BANKNIFTY", value: "47,892.45", change: "-0.49%" },
    { symbol: "SENSEX", value: "73,745.60", change: "+0.56%" }
  ];

  ticker.innerHTML = data
    .map(
      i => `
      <span class="inline-flex items-center mx-6">
        <span class="font-semibold">${i.symbol}</span>
        <span class="ml-2">${i.value}</span>
        <span class="ml-2 ${
          i.change.startsWith("+") ? "text-green-400" : "text-red-400"
        }">${i.change}</span>
      </span>`
    )
    .join("");
}

// Mobile menu
document.addEventListener("click", e => {
  if (e.target.closest("#mobileMenuBtn")) {
    document.getElementById("mobileMenu")?.classList.toggle("hidden");
  }
});

populateTicker();
