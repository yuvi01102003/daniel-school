// menu bar and change into cancle action ====================================================
function toggleNavMenu() {
  var navList = document.getElementById("nav_list");
  var handpress = document.getElementById("handpress");
  // Toggle menu icon between hamburger and cancel
  if (handpress.src.includes("handburgermenu.png")) {
    handpress.src = "/IMAGES/cancle btn.png";
  } else {
    handpress.src = "/IMAGES/handburgermenu.png";
  }
  navList.classList.toggle("show");
}

//copy rights year update actions
document.getElementById("copyright-year").textContent =
  new Date().getFullYear();

// ================================================= HOME PAGE gallary slider actions ===========================
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
let currentIndex = 0;
let sliderInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentIndex = index;
}

function nextSlide() {
  let next = (currentIndex + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  let prev = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function startSlider() {
  sliderInterval = setInterval(nextSlide, 4000);
}

function stopSlider() {
  clearInterval(sliderInterval);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  stopSlider();
  startSlider();
});
prevBtn.addEventListener("click", () => {
  prevSlide();
  stopSlider();
  startSlider();
});
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    stopSlider();
    startSlider();
  });
});

showSlide(0);
startSlider();

// gallary section

const sliderData = {
  "republic-day": [
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753113183/republic_day-2_si1mez.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753113184/republic_day-1_rub27h.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753113185/republic_day-12_cvf6no.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753113184/republic_day-11_kt3ix1.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753113187/republic_day-4_jynfpr.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753113184/republic_day-5_nuhpot.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753113184/republic_day-6_uhgkon.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753113187/republic_day-7_ggywai.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753113188/republic_day-9_smjis8.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753113183/republic_day-10_pdx7zu.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753113186/republic_day-3_ltp9wj.jpg",
  ],
  graduation: [
    // Add graduation images here
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753168109/VRS_4042_li4ka8.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753168107/VRS_3971_ap4wie.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753168060/VRS_3948_iywcnm.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753168108/VRS_3983_kvnyuv.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753168109/VRS_4050_l6yi6l.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753168110/VRS_4061_tjsxet.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753168110/VRS_4057_nmwzvx.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753168112/VRS_4066_kzy0jf.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753168111/VRS_4064_lcx3je.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753168109/VRS_3998_o08s8w.jpg",
  ],
  xmas: [
    // Add Christmas images here
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753169178/VRS_3003_cays3b.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753169179/VRS_3100_nklx4d.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753169183/VRS_3110_qeblex.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753169178/VRS_3000_vhwdvq.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753169191/VRS_3332_lffskl.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753169190/VRS_3331_htizhq.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753169188/VRS_3254_vajozq.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753169188/VRS_3253_n0xh30.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753169186/VRS_3238_tzgawc.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753169187/VRS_3246_wd21rp.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753169184/VRS_3225_y7jb09.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753169185/VRS_3231_qlmt6z.jpg",
    "https://res.cloudinary.com/ddq9ws2kl/image/upload/v1753169177/VRS_2971_lycdzy.jpg",
  ],
};

// Store interval references to clear on modal open
const sliderIntervals = {};

function createSlider(trackId, images) {
  const track = document.getElementById(trackId);
  if (!track) return;
  let idx = 0;
  let interval = null;

  function render() {
    track.innerHTML = "";
    if (!images.length) {
      track.innerHTML =
        '<p style="color:#888;text-align:center;width:100%;">No images available.</p>';
      return;
    }
    const img = document.createElement("img");
    img.className = "slider-img";
    img.src = images[idx];
    img.alt = "Event Image";
    img.loading = "lazy";
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      showSliderModal(images[idx], trackId);
    });
    track.appendChild(img);
  }

  function updateBtns() {
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === images.length - 1;
  }

  function nextImage() {
    if (!images.length) return;
    idx = (idx + 1) % images.length;
    render();
    updateBtns();
  }

  function prevImage() {
    if (!images.length) return;
    idx = (idx - 1 + images.length) % images.length;
    render();
    updateBtns();
  }

  const wrapper = track.parentElement;
  const prevBtn = wrapper.querySelector(".prev");
  const nextBtn = wrapper.querySelector(".next");

  prevBtn.onclick = () => {
    prevImage();
    resetInterval();
  };
  nextBtn.onclick = () => {
    nextImage();
    resetInterval();
  };

  // Swipe support for mobile
  let startX = null;
  track.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) startX = e.touches[0].clientX;
  });
  track.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    if (endX - startX > 40) {
      prevImage();
      resetInterval();
    } else if (startX - endX > 40) {
      nextImage();
      resetInterval();
    }
    startX = null;
  });

  // Add smooth transition to slider images
  function setTransition(enable) {
    const img = track.querySelector(".slider-img");
    if (img) {
      img.style.transition = enable ? "opacity 0.5s" : "none";
    }
  }

  function renderWithTransition(newIdx) {
    const img = track.querySelector(".slider-img");
    if (img) {
      setTransition(true);
      img.style.opacity = "0";
      setTimeout(() => {
        idx = newIdx;
        render();
        setTimeout(() => {
          const newImg = track.querySelector(".slider-img");
          if (newImg) {
            setTransition(true);
            newImg.style.opacity = "1";
          }
        }, 10);
      }, 500);
    } else {
      idx = newIdx;
      render();
      setTimeout(() => {
        const newImg = track.querySelector(".slider-img");
        if (newImg) {
          setTransition(true);
          newImg.style.opacity = "1";
        }
      }, 10);
    }
  }

  function startInterval() {
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
      if (document.getElementById("slider-modal").classList.contains("show"))
        return;
      renderWithTransition((idx + 1) % images.length);
    }, 3000);
    sliderIntervals[trackId] = interval;
  }

  function resetInterval() {
    startInterval();
  }
  render();
  updateBtns();
  startInterval();
}

// Modal logic
function showSliderModal(imgSrc, trackId) {
  const modal = document.getElementById("slider-modal");
  const modalImg = document.getElementById("slider-modal-img");
  modalImg.src = imgSrc;
  modalImg.alt = "Event Image";
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
  // Pause all sliders
  for (const key in sliderIntervals) {
    clearInterval(sliderIntervals[key]);
  }
}
function hideSliderModal() {
  const modal = document.getElementById("slider-modal");
  const modalImg = document.getElementById("slider-modal-img");
  modal.classList.remove("show");
  modalImg.src = "";
  document.body.style.overflow = "";
  // Resume all sliders
  document.querySelectorAll(".slider-track").forEach((track) => {
    const id = track.id;
    if (sliderData[id.replace("slider-", "")]) {
      createSlider(id, sliderData[id.replace("slider-", "")]);
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  createSlider("slider-republic-day", sliderData["republic-day"]);
  createSlider("slider-graduation", sliderData["graduation"]);
  createSlider("slider-xmas", sliderData["xmas"]);
  // Modal close logic
  document.getElementById("slider-modal-close").onclick = hideSliderModal;
  document.getElementById("slider-modal").onclick = function (e) {
    if (e.target === this) hideSliderModal();
  };
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") hideSliderModal();
  });
});

// -----------------------------------------------------------------------

$(document).ready(function () {
  $("[unique-script-id='w-w-dm-id'] .img .desc").hide();

  $("[unique-script-id='w-w-dm-id'] .img").mouseenter(function (item) {
    $("[unique-script-id='w-w-dm-id'] .img .overlay").removeClass(
      "overlay-visible"
    );
    $("[unique-script-id='w-w-dm-id'] .img .desc").hide();
    $("#" + $(item.currentTarget).attr("id") + " .overlay").addClass(
      "overlay-visible"
    );
    $("#" + $(item.currentTarget).attr("id") + " .desc").show();
    console.log(item.currentTarget);
  });
  $("[unique-script-id='w-w-dm-id'] .tab").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $("[unique-script-id='w-w-dm-id'] .img").show("5000");
    } else {
      $("[unique-script-id='w-w-dm-id'] .img")
        .not("." + value)
        .hide("5000");
      $("[unique-script-id='w-w-dm-id'] .img")
        .filter("." + value)
        .show("5000");
    }
  });

  $("[unique-script-id='w-w-dm-id'] .tab").click(function () {
    $(this).addClass("tab-active").siblings().removeClass("tab-active");
  });
});
