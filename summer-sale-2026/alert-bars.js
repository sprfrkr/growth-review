/**
 * Inline countdown for Site Notification alert-global mockups.
 * Production paste: same data-af-countdown attribute + this script in notification html.
 */
(function () {
  function formatRemaining(ms) {
    var d = Math.max(0, ms);
    var days = Math.floor(d / 86400000);
    var hrs = Math.floor((d % 86400000) / 3600000);
    var mins = Math.floor((d % 3600000) / 60000);
    var secs = Math.floor((d % 60000) / 1000);
    return days + "d " + hrs + "h " + mins + "m " + secs + "s";
  }

  function tick(el) {
    var end = Date.parse(el.getAttribute("data-af-countdown"));
    if (!end) return;
    var value = el.querySelector(".af-countdown__value");
    if (!value) return;
    var remaining = end - Date.now();
    value.textContent = remaining > 0 ? formatRemaining(remaining) : "0d 0h 0m 0s";
    if (remaining > 0) {
      setTimeout(function () {
        tick(el);
      }, 1000);
    }
  }

  function init() {
    var nodes = document.querySelectorAll("[data-af-countdown]");
    for (var i = 0; i < nodes.length; i++) {
      tick(nodes[i]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
