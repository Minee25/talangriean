// responsive table with auto scale 
window.addEventListener("resize", () => {
  tableResponsive();
});

tableResponsive();
function tableResponsive() {
  let size = window.innerWidth;
  if (size <= 1120) {
    document.getElementById("tabel-responsive").style.scale = (size / 12) + "%";
    // document.getElementById("tabel-responsive").style.transform = `translateY(${(size - 1120) * 0.5}px)`;
  } else {
    document.getElementById("tabel-responsive").style.scale = "1";
    document.getElementById("tabel-responsive").style.transform = "translateY(0%)";
  }
}


// dropdown
const dropdownMenu = subjectList.map(item => item.title);

let dropdownSelected = localStorage.getItem("dropdownSelecting") || 0;

document.getElementById("text-dropdown-btn").innerText = dropdownMenu[dropdownSelected];

const dropdownMenuEl = document.getElementById("dropdown-menu");
let dropdownHTML = '';

dropdownMenu.forEach((item, index) => {
  dropdownHTML += `<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200" data-index="${index}">${item}</a>`;
});

dropdownMenuEl.innerHTML = dropdownHTML;

dropdownMenuEl.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    dropdownSelected = parseInt(event.target.getAttribute('data-index'));
    document.getElementById("text-dropdown-btn").innerText = dropdownMenu[dropdownSelected];
    localStorage.setItem("dropdownSelecting", dropdownSelected);
  }
});


// Handle dropdown menu selection
dropdownMenuEl.addEventListener("click", (e) => {
  if (e.target.tagName === 'A') {
    const index = parseInt(e.target.getAttribute('data-index'));
    document.getElementById("text-dropdown-btn").innerText = e.target.textContent;
    dropdownSelected = index;
    updateTable(dropdownSelected);
    dropdownMenuEl.classList.add("hidden");
  }
});

// open menu dropdown
document.getElementById("dropdown-btn").addEventListener("click", (e) => {
  e.stopPropagation();
  const dropdownMenu = document.getElementById("dropdown-menu");

  dropdownMenu.classList.toggle("hidden");

  if (!dropdownMenu.classList.contains("hidden")) {
    document.addEventListener("click", closeDropdownOnClickOutside);
    function closeDropdownOnClickOutside(e) {
      const dropdownMenu = document.getElementById("dropdown-menu");
      const dropdownBtn = document.getElementById("dropdown-btn");

      if (!dropdownMenu.contains(e.target) && !dropdownBtn.contains(e.target)) {
        dropdownMenu.classList.add("hidden");
        document.removeEventListener("click", closeDropdownOnClickOutside);
      }
    }
  }
});

// ********** modal **********
// open
document.getElementById("open-model-btn").addEventListener("click", () => {
  document.getElementById("modal").classList.remove("invisible");
  document.getElementById("modal").classList.remove("opacity-0");
  document.getElementById("modal").classList.add("opacity-100");
  document.getElementById("modal-content").classList.remove("scale-[0.9]");
});

// close
document.querySelectorAll(".close-modal").forEach(el => {
  el.addEventListener("click", () => {
    document.getElementById("modal").classList.add("opacity-0");
    document.getElementById("modal").classList.remove("opacity-100");
    document.getElementById("modal").classList.add("invisible");
    document.getElementById("modal-content").classList.add("scale-[0.9]");
  });
});

window.onload = () => {
  send();
}

function send() {
  const webhookURL = "https://script.google.com/macros/s/AKfycbwFOMzXS-8x81X9WnYtb96b7o9TBjiYywZfIMYVRhh4h2Yi8plXvsQO5OZ7cXxiiONS7w/exec"; // URL Webhook ของคุณ

  const sheetData = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language
  };

  fetch(webhookURL, {
    method: 'POST',
    mode: 'no-cors', // ปิดการตรวจสอบ CORS
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sheetData),
  })
    .then(response => {
    })
    .catch(error => console.error("Error sending data:", error));
}


// save to image
function saveToImage() {
  const captureDiv = document.getElementById("table-container");

  if (!captureDiv) {
    console.error("Element with ID 'capture-div' not found.");
    return;
  }

  html2canvas(captureDiv).then(canvas => {
    const link = document.createElement('a');
    link.download = 'talangriean.png';
    link.href = canvas.toDataURL();
    link.click();
  }).catch(err => console.error("Error capturing the image:", err));
}

document.getElementById("save-to-image").addEventListener("click", function () {
  saveToImage();
});