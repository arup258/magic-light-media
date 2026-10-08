/* =========================================================
   Magic Light Media — site scripts (no dependencies)
   ========================================================= */

// WhatsApp number used by every "Contact Now" / WhatsApp button
var WHATSAPP_NUMBER = "916295467991";

function openWhatsApp(message) {
  var text = message || "Hi Magic Light Media, I would like to know more about your services.";
  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text), "_blank", "noopener");
}

/* ---------- Service galleries ---------- */
var GALLERIES = {
  Advertising: [
    { type: "video", src: "assets/video/Script 01.mp4" },
    { type: "video", src: "assets/video/script 2 .mp4" },
    { type: "video", src: "assets/video/Chandras Chandraboti_ TV Commercial Final .mp4" },
    "assets/img/post/16.jpg",
    "assets/img/post/17.jpg",
    "assets/img/post/22.jpg",
    "assets/img/post/24.jpg"
  ],

  portrait: [
    "assets/img/post/portrait7.jpg",
    "assets/img/post/portrait8.jpg",
    "assets/img/post/portrait9.jpg",
    "assets/img/post/portrait10.jpg",
    "assets/img/post/portrait11.jpg",
    "assets/img/post/portrait12.jpg",
    "assets/img/post/portrait13.png",
    "assets/img/post/portrait14.png",
    "assets/img/post/portrait15.png",
    "assets/img/post/portrait1.jpg",
    "assets/img/post/portrait2.png",
    "assets/img/post/portrait3.png",
    "assets/img/post/portrait4.png",
    "assets/img/post/portrait5.png",
    "assets/img/post/portrait6.jpg"
  ],

  product: [
    "assets/img/post/product14.jpg",
    "assets/img/post/product16.jpg",
    "assets/img/post/product18.jpg",
    "assets/img/post/product15.jpg",
    "assets/img/post/product19.jpg",
    "assets/img/post/product20.jpg",
    "assets/img/post/product21.jpg",
    "assets/img/post/product22.jpg",
    "assets/img/post/product23.jpg",
    "assets/img/post/product24.jpg",
    "assets/img/post/product25.jpg",
    "assets/img/post/product26.jpg",
    "assets/img/post/product27.jpg",
    "assets/img/post/product28.jpg",
    "assets/img/post/product29.jpg",
    "assets/img/post/product30.jpg",
    "assets/img/post/product31.jpg",
    "assets/img/post/product32.jpg",
    "assets/img/post/product33.jpg",
    "assets/img/post/product7.jpg",
    "assets/img/post/product8.jpg",
    "assets/img/post/product9.jpg",
    "assets/img/post/product10.jpg",
    "assets/img/post/product11.jpg",
    "assets/img/post/product12.jpg",
    "assets/img/post/product13.jpg",
    "assets/img/post/product1.jpeg",
    "assets/img/post/product2.jpeg",
    "assets/img/post/product3.jpeg",
    "assets/img/post/product4.jpeg",
    "assets/img/post/product5.jpeg",
    "assets/img/post/product6.jpeg",
    "assets/img/post/53.JPG",
    "assets/img/post/54.JPG",
    "assets/img/post/55.JPG",
    "assets/img/post/56.JPG",
    "assets/img/post/57.JPG",
    "assets/img/post/58.JPG",
    "assets/img/post/product34.JPG",
    "assets/img/post/product35.JPG",
    "assets/img/post/product36.JPG",
    "assets/img/post/product37.JPG",
    "assets/img/post/product38.JPG",
    "assets/img/post/product39.JPG",
    "assets/img/post/product40.png"
  ],

  documentary: [
    "assets/img/post/documentary1.jpg",
    "assets/img/post/documentary2.jpg",
    "assets/img/post/documentary3.jpg",
    "assets/img/post/documentary4.jpg",
    "assets/img/post/documentary5.jpg",
    "assets/img/post/documentary6.jpg",
    "assets/img/post/documentary13.jpeg",
    "assets/img/post/documentary8.jpg",
    "assets/img/post/documentary9.jpg",
    "assets/img/post/documentary10.jpg",
    "assets/img/post/documentary11.jpg",
    "assets/img/post/documentary12.jpg"
  ],

  magazine: [
    "assets/img/post/7.jpg",
    "assets/img/post/8.jpg",
    "assets/img/post/14.jpg",
    "assets/img/post/15.jpg",
    "assets/img/post/16.jpg",
    "assets/img/post/17.jpg",
    "assets/img/post/18.jpg",
    "assets/img/post/21.jpg",
    "assets/img/post/22.jpg",
    "assets/img/post/24.jpg",
    "assets/img/post/25.jpg",
    "assets/img/post/31.jpg",
    "assets/img/post/33.jpg",
    "assets/img/post/34.jpg",
    "assets/img/post/41.jpg",
    "assets/img/post/42.jpg",
    "assets/img/post/43.jpg",
    "assets/img/post/49.jpg",
    "assets/img/post/51.jpg",
    "assets/img/post/52.jpg",
    "assets/img/post/magazine1.jpg",
    "assets/img/post/magazine2.jpg",
    "assets/img/post/magazine3.jpg",
    "assets/img/post/magazine4.jpg",
    "assets/img/post/magazine5.jpg",
    "assets/img/post/magazine6.jpg"
  ],

  corporate: [
    "assets/img/post/corporate7.jpg",
    "assets/img/post/corporate8.jpg",
    "assets/img/post/corporate9.jpg",
    "assets/img/post/corporate10.jpg",
    "assets/img/post/corporate11.jpg",
    "assets/img/post/corporate12.jpg",
    "assets/img/post/corporate13.jpg",
    "assets/img/post/corporate14.jpg",
    "assets/img/post/corporate15.jpg",
    "assets/img/post/corporate16.jpg",
    "assets/img/post/corporate17.jpg",
    "assets/img/post/corporate18.jpg",
    "assets/img/post/corporate19.jpg",
    "assets/img/post/corporate20.jpg",
    "assets/img/post/corporate21.JPG",
    "assets/img/post/corporate22.jpg",
    "assets/img/post/corporate23.jpg",
    "assets/img/post/corporate24.jpg",
    "assets/img/post/corporate25.jpg",
    "assets/img/post/corporate26.jpg",
    "assets/img/post/corporate27.JPG",
    "assets/img/post/corporate28.JPG",
    "assets/img/post/corporate29.JPG",
    "assets/img/post/corporate30.JPG",
    "assets/img/post/corporate31.JPG",
    "assets/img/post/corporate32.JPG",
    "assets/img/post/corporate33.JPG",
    "assets/img/post/corporate34.JPG",
    "assets/img/post/corporate35.JPG",
    "assets/img/post/corporate36.JPG",
    "assets/img/post/corporate37.JPG",
    "assets/img/post/corporate38.JPG",
    "assets/img/post/corporate39.JPG",
    "assets/img/post/corporate40.JPG",
    "assets/img/post/corporate41.JPG",
    "assets/img/post/corporate42.JPG",
    "assets/img/post/corporate43.JPG"
  ]
};

(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var body = document.body;
  var openLayers = 0;

  function lockScroll() {
    openLayers++;
    body.classList.add("no-scroll");
  }
  function unlockScroll() {
    openLayers = Math.max(0, openLayers - 1);
    if (!openLayers) body.classList.remove("no-scroll");
  }

  function pauseVideos(root) {
    root.querySelectorAll("video").forEach(function (v) { v.pause(); });
  }

  /* ---------- Header: scrolled state + back-to-top ---------- */
  var header = document.querySelector(".site-header");
  var toTop = document.querySelector(".to-top");

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("is-scrolled", y > 40);
    if (toTop) toTop.classList.toggle("is-visible", y > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var panel = document.querySelector(".nav-panel");
  var backdrop = document.querySelector(".nav-backdrop");
  var navOpen = false;

  function setNav(open) {
    if (!toggle || !panel || open === navOpen) return;
    navOpen = open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    panel.classList.toggle("is-open", open);
    if (backdrop) backdrop.classList.toggle("is-open", open);
    open ? lockScroll() : unlockScroll();
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () { setNav(!navOpen); });
    if (backdrop) backdrop.addEventListener("click", function () { setNav(false); });
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setNav(false); });
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) setNav(false);
    });
  }

  /* ---------- Active nav link ---------- */
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-menu a").forEach(function (a) {
    if ((a.getAttribute("href") || "").toLowerCase() === page) {
      a.classList.add("is-active");
      a.setAttribute("aria-current", "page");
    }
  });

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Marquees: duplicate items for a seamless loop ---------- */
  document.querySelectorAll(".marquee-track").forEach(function (track) {
    Array.prototype.slice.call(track.children).forEach(function (item) {
      var clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.setAttribute("tabindex", "-1");
      clone.dataset.clone = "true";
      track.appendChild(clone);
    });
  });

  /* ---------- Media viewer (lightbox) ---------- */
  var viewer = document.getElementById("viewer");
  var stage = viewer && viewer.querySelector(".viewer-stage");
  var countEl = viewer && viewer.querySelector(".viewer-count");
  var prevBtn = viewer && viewer.querySelector(".viewer-prev");
  var nextBtn = viewer && viewer.querySelector(".viewer-next");
  var viewList = [];
  var viewIndex = 0;
  var viewerOpen = false;

  function renderViewer() {
    var item = viewList[viewIndex];
    stage.innerHTML = "";
    var el;
    if (item.type === "video") {
      el = document.createElement("video");
      el.src = item.src;
      el.controls = true;
      el.autoplay = true;
      el.playsInline = true;
    } else {
      el = document.createElement("img");
      el.src = item.src;
      el.alt = item.alt || "";
    }
    stage.appendChild(el);
    var many = viewList.length > 1;
    prevBtn.hidden = !many;
    nextBtn.hidden = !many;
    countEl.textContent = many ? (viewIndex + 1) + " / " + viewList.length : "";
  }

  function openViewer(list, index) {
    if (!viewer || !list.length) return;
    viewList = list;
    viewIndex = index || 0;
    renderViewer();
    if (!viewerOpen) {
      viewer.classList.add("is-open");
      viewerOpen = true;
      lockScroll();
    }
    viewer.querySelector(".modal-close").focus();
  }

  function closeViewer() {
    if (!viewerOpen) return;
    pauseVideos(stage);
    stage.innerHTML = "";
    viewer.classList.remove("is-open");
    viewerOpen = false;
    unlockScroll();
  }

  function stepViewer(dir) {
    viewIndex = (viewIndex + dir + viewList.length) % viewList.length;
    renderViewer();
  }

  if (viewer) {
    viewer.querySelector(".modal-close").addEventListener("click", closeViewer);
    prevBtn.addEventListener("click", function () { stepViewer(-1); });
    nextBtn.addEventListener("click", function () { stepViewer(1); });
    viewer.addEventListener("click", function (e) {
      if (e.target === viewer || e.target === stage) closeViewer();
    });

    // Swipe left / right on touch screens
    var startX = null;
    viewer.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    viewer.addEventListener("touchend", function (e) {
      if (startX === null || viewList.length < 2) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) stepViewer(dx < 0 ? 1 : -1);
      startX = null;
    });
  }

  /* ---------- Recent work items open the viewer ---------- */
  var workItems = Array.prototype.slice.call(document.querySelectorAll(".work-item"));
  var originals = workItems.filter(function (el) { return !el.dataset.clone; });
  var workList = originals.map(function (el) {
    var video = el.querySelector("video");
    var img = el.querySelector("img");
    return video
      ? { type: "video", src: el.dataset.src || video.currentSrc || video.src }
      : { type: "image", src: img.src, alt: img.alt };
  });
  workItems.forEach(function (el, i) {
    el.addEventListener("click", function () {
      openViewer(workList, i % originals.length);
    });
  });

  /* ---------- Service gallery modal ---------- */
  var gModal = document.getElementById("galleryModal");
  var gGrid = document.getElementById("galleryImages");
  var gTitle = document.getElementById("galleryTitle");
  var gCount = document.getElementById("galleryCount");
  var galleryOpen = false;
  var lastFocus = null;

  function openGallery(key, title) {
    var items = GALLERIES[key];
    if (!gModal || !items) return;

    gGrid.innerHTML = "";
    gTitle.textContent = title || key;

    var images = [];
    var photoCount = 0;
    var videoCount = 0;

    items.forEach(function (raw) {
      var item = typeof raw === "string" ? { type: "image", src: raw } : raw;

      if (item.type === "video") {
        videoCount++;
        var wrap = document.createElement("div");
        var video = document.createElement("video");
        video.src = item.src + "#t=0.1";
        video.controls = true;
        video.playsInline = true;
        video.preload = "metadata";
        wrap.appendChild(video);
        gGrid.appendChild(wrap);
        return;
      }

      photoCount++;
      var index = images.length;
      images.push({ type: "image", src: item.src, alt: (title || key) + " " + (index + 1) });

      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", "View image " + (index + 1));
      var img = document.createElement("img");
      img.src = item.src;
      img.alt = (title || key) + " " + (index + 1);
      img.loading = "lazy";
      img.decoding = "async";
      btn.appendChild(img);
      btn.addEventListener("click", function () { openViewer(images, index); });
      gGrid.appendChild(btn);
    });

    var parts = [];
    if (photoCount) parts.push(photoCount + (photoCount === 1 ? " photo" : " photos"));
    if (videoCount) parts.push(videoCount + (videoCount === 1 ? " film" : " films"));
    gCount.textContent = parts.join(" · ");

    gModal.querySelector(".gallery-scroll").scrollTop = 0;
    lastFocus = document.activeElement;
    gModal.classList.add("is-open");
    galleryOpen = true;
    lockScroll();
    gModal.querySelector(".modal-close").focus();
  }

  function closeGallery() {
    if (!galleryOpen) return;
    pauseVideos(gGrid);
    gModal.classList.remove("is-open");
    galleryOpen = false;
    unlockScroll();
    if (lastFocus) lastFocus.focus();
  }

  if (gModal) {
    gModal.querySelector(".modal-close").addEventListener("click", closeGallery);
    document.querySelectorAll("[data-gallery]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var card = btn.closest(".service-card");
        var heading = card && card.querySelector("h3");
        openGallery(btn.dataset.gallery, heading ? heading.textContent.trim() : "");
      });
    });
  }

  /* ---------- WhatsApp buttons ---------- */
  document.querySelectorAll("[data-whatsapp]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var service = btn.dataset.whatsapp;
      openWhatsApp(service
        ? "Hi Magic Light Media, I'm interested in your " + service + " service."
        : undefined);
    });
  });

  /* ---------- Keyboard ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (viewerOpen) closeViewer();
      else if (galleryOpen) closeGallery();
      else setNav(false);
    } else if (viewerOpen && viewList.length > 1) {
      if (e.key === "ArrowRight") stepViewer(1);
      if (e.key === "ArrowLeft") stepViewer(-1);
    }
  });

  /* ---------- Contact form (Web3Forms, submitted without leaving the page) ---------- */
  var form = document.querySelector("form[data-ajax]");
  if (form && window.fetch && window.FormData) {
    var status = form.querySelector(".form-status");
    var submit = form.querySelector("button[type=submit]");
    var label = submit.innerHTML;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      submit.disabled = true;
      submit.innerHTML = "Sending&hellip;";
      status.className = "form-status";

      fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            status.textContent = "Thank you! Your message has been sent. We'll get back to you soon.";
            status.className = "form-status is-success";
            form.reset();
          } else {
            throw new Error(data.message || "Something went wrong.");
          }
        })
        .catch(function () {
          status.textContent = "Sorry, your message could not be sent. Please try again or contact us on WhatsApp.";
          status.className = "form-status is-error";
        })
        .then(function () {
          submit.disabled = false;
          submit.innerHTML = label;
        });
    });
  }
})();
