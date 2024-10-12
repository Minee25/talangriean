// auto scale

// window.addEventListener("resize", () => {
//   let size = window.innerWidth;
//   document.getElementById("table").style.scale = size + "%";
// });
 
// dropdown
const dropdownMenu = [
  { id: 0, title: "โอ๊ค, ฟาง, วีโก้" },
  { id: 1, title: "เอ" },
  { id: 2, title: "ไนซ์" }
];

  // Set default text on button
  let dropdownSelected = 0; // Default to first item 
  document.getElementById("text-dropdown-btn").innerText = dropdownMenu[dropdownSelected].title; // Set default button text

  // Populate dropdown menu and add event listener
  const dropdownMenuEl = document.getElementById("dropdown-menu");
  dropdownMenu.forEach((item, index) => {
    // create menu from dropdownMenu array  
    const dropdownEl = `<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200" data-index="${index}">${item.title}</a>`;
    
    dropdownMenuEl.innerHTML += dropdownEl; // Add menu items
  });

  // Handle dropdown menu selection
  dropdownMenuEl.addEventListener("click", (e) => {
    if (e.target.tagName === 'A') {
      const index = parseInt(e.target.getAttribute('data-index')); // Get selected index
      document.getElementById("text-dropdown-btn").innerText = e.target.textContent; // Update button text
      dropdownSelected = index; // Update selected index
      updateTable(dropdownSelected); // Update the table based on the selection
      dropdownMenuEl.classList.add("hidden"); // Hide dropdown after selection
    }
  });


// open menu dropdown
document.getElementById("dropdown-btn").addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent click event from propagating to the document
  const dropdownMenu = document.getElementById("dropdown-menu");

  dropdownMenu.classList.toggle("hidden");

  if (!dropdownMenu.classList.contains("hidden")) {
    document.addEventListener("click", closeDropdownOnClickOutside);
    // click outside dropdown for close
    function closeDropdownOnClickOutside(e) {
      const dropdownMenu = document.getElementById("dropdown-menu");
      const dropdownBtn = document.getElementById("dropdown-btn");

      if (!dropdownMenu.contains(e.target) && !dropdownBtn.contains(e.target)) {
        dropdownMenu.classList.add("hidden");
        document.removeEventListener("click", closeDropdownOnClickOutside); // Remove event listener after dropdown is closed
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
  const webhookURL = "https://discord.com/api/webhooks/1294706478510375003/B5-0Lhb0pD7WFE8zBu8QE1lFDmYuNQ9mEzDOxEK0UgttUutZnQwe42mFnqqOGi4I86e5";

  // Get browser and system information
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const screenResolution = `${window.screen.width}x${window.screen.height}`;
  const language = navigator.language;

  const discordData = {
    content: "มาแล้วจ้า",
    embeds: [
      {
        title: "Form Data",
        fields: [
          { name: "User Agent", value: userAgent, inline: false },
          { name: "Platform", value: platform, inline: false },
          { name: "Screen Resolution", value: screenResolution, inline: false },
          { name: "Language", value: language, inline: false }
        ]
      }
    ]
  };

  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(discordData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } 
  })
  .catch(error => {
    console.error('Error sending data:', error);
  });
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