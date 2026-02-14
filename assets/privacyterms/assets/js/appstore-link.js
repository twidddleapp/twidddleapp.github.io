(function () {
  // TODO: Replace with your real App Store URL once you have it.
  // Example: const APP_STORE_URL = "https://apps.apple.com/app/id1234567890";
  const APP_STORE_URL = "";

  function handleClick(e) {
    if (!APP_STORE_URL) {
      e.preventDefault();
      alert("Twidddle is launching soon. Add your App Store URL in assets/js/appstore-link.js");
      return;
    }
    window.location.href = APP_STORE_URL;
  }

  const top = document.getElementById("appStoreBtnTop");
  const cta = document.getElementById("appStoreBtnCta");
  [top, cta].forEach((btn) => {
    if (!btn) return;
    btn.setAttribute("href", APP_STORE_URL || "#");
    btn.addEventListener("click", handleClick);
  });
})();