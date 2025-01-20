// Toggle Dark Mode
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  const icon = document.querySelector("#dark-mode-toggle i");
  icon.classList.toggle("fa-toggle-off");
  icon.classList.toggle("fa-toggle-on");
});

// Language Selector
document.getElementById("language").addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  const translations = {
    en: {
      heroTitle: "Welcome to Trabar Exness ID",
      heroText: "Join our community and enjoy exclusive benefits as a VIP member.",
      ctaButton: "Join Now",
      productsTitle: "Our Cheesecakes",
      footerText: "© 2025 Cheesecake Delight. All rights reserved.",
    },
    id: {
      heroTitle: "Selamat Datang di Trabar Exness ID",
      heroText: "Bergabunglah dengan komunitas kami dan nikmati berbagai keuntungan eksklusif sebagai anggota VIP.",
      ctaButton: "Bergabung Sekarang",
      productsTitle: "Produk Cheesecake Kami",
      footerText: "© 2025 Cheesecake Delight. Hak cipta dilindungi.",
    },
  };

  const content = translations[selectedLanguage];
  document.getElementById("hero-title").textContent = content.heroTitle;
  document.getElementById("hero-text").textContent = content.heroText;
  document.getElementById("cta-button").textContent = content.ctaButton;
  document.getElementById("products-title").textContent = content.productsTitle;
  document.getElementById("footer-text").textContent = content.footerText;
});
// Modal functionality
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.querySelector(".close-button");

// Event listener for image click
document.querySelectorAll(".product-image").forEach((image) => {
  image.addEventListener("click", () => {
    modalImage.src = image.src; // Set modal image source
    modal.classList.remove("hidden"); // Show modal
  });
});

// Event listener for close button
closeButton.addEventListener("click", () => {
  modal.classList.add("hidden"); // Hide modal
});

// Close modal when clicking outside of the modal content
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});
