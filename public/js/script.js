// auto scale

// window.addEventListener("resize", () => {
//   let size = window.innerWidth;
//   document.getElementById("table").style.scale = size + "%";
// });
 

// dropdown
const dropdownMenu = [
  { id: 1, title: "โอ๊ค, ฟาง, วีโก้" },
  { id: 2, title: "เอ" },
  { id: 3, title: "ไนซ์" }
];

// Set default text on button
let dropdownSelected = document.getElementById("text-dropdown-btn").innerText = dropdownMenu[0].title; // Default to first item 

// menu in dropdown 
dropdownMenu.forEach((item, index) => {
  // create menu from dropdownMenu array  
  const dropdownEl = `<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200" data-index="${index}">${item.title}</a>`;

  document.getElementById("dropdown-menu").innerHTML += dropdownEl;
});

// Add event listeners after creating all elements
document.getElementById("dropdown-menu").addEventListener("click", (e) => {
  if (e.target.tagName === 'A') {
    document.getElementById("text-dropdown-btn").innerText = e.target.textContent;
    document.getElementById("dropdown-menu").classList.add("hidden"); 
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
