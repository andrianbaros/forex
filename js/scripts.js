document.addEventListener("DOMContentLoaded", () => {
  // Toggle Dark Mode
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      const body = document.body;
      body.classList.toggle("light-mode");
      body.classList.toggle("dark-mode");
      const icon = document.querySelector("#dark-mode-toggle i");
      if (icon) {
        icon.classList.toggle("fa-toggle-on");
        icon.classList.toggle("fa-toggle-off");
      }
    });
  }

  // Language Selector
  const languageSelector = document.getElementById("language");
  if (languageSelector) {
    languageSelector.addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
      const translations = {
        en: {
          heroTitle: "Welcome to Learning Together Exness ID",
          heroText: "Join our community and enjoy exclusive benefits as a VIP member.",
          ctaButton: "Join Now",
          productsTitle: "Benefits of Studying With Us",
          footerText: "© All rights reserved.",
        },
        id: {
          heroTitle: "Selamat Datang di Belajar Forex Bersama Exness ID",
          heroText: "Bergabunglah dengan komunitas kami dan nikmati berbagai keuntungan eksklusif sebagai anggota VIP.",
          ctaButton: "Bergabung Sekarang",
          productsTitle: "keuntungan Belajar Dengan Kami",
          footerText: "© Hak cipta dilindungi.",
        },
      };

      const content = translations[selectedLanguage];
      document.getElementById("hero-title").textContent = content.heroTitle;
      document.getElementById("hero-text").textContent = content.heroText;
      document.getElementById("cta-button").textContent = content.ctaButton;
      document.getElementById("products-title").textContent = content.productsTitle;
      document.getElementById("footer-text").textContent = content.footerText;
    });
  }
  

  // Modal functionality
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const closeButton = document.querySelector(".close-button");

  if (modal && modalImage && closeButton) {
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
  } else {
    console.error("Modal atau elemen terkait tidak ditemukan.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const closeButton = document.querySelector(".close-button");

  if (modal && modalImage && closeButton) {
    // Event listener untuk gambar di "Products"
    document.querySelectorAll(".product-image").forEach((image) => {
      image.addEventListener("click", () => {
        modalImage.src = image.src; // Atur sumber gambar modal
        modal.classList.remove("hidden"); // Tampilkan modal
      });
    });

    // Event listener untuk gambar di "Steps"
    document.querySelectorAll(".step-image").forEach((image) => {
      image.addEventListener("click", () => {
        modalImage.src = image.src; // Atur sumber gambar modal
        modal.classList.remove("hidden"); // Tampilkan modal
      });
    });

    // Event listener untuk menutup modal
    closeButton.addEventListener("click", () => {
      modal.classList.add("hidden"); // Sembunyikan modal
    });

    // Tutup modal jika area luar modal diklik
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  } else {
    console.error("Modal atau elemen terkait tidak ditemukan.");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  if (modal) {
    modal.classList.remove("show"); // Pastikan modal tidak terlihat
    modal.classList.add("hidden"); // Pastikan modal disembunyikan
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.getElementById("cta-button");

  if (ctaButton) {
    ctaButton.addEventListener("click", (event) => {
      event.preventDefault(); // Mencegah navigasi default
      const stepsSection = document.getElementById("steps");
      if (stepsSection) {
        stepsSection.scrollIntoView({
          behavior: "smooth", // Animasi gulir halus
          block: "start", // Mulai dari bagian atas
        });
      }
    });
  }
});