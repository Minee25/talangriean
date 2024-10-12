// Function to update table content based on the selected subject
function updateTable(index) {
  const tableContainerEl = document.getElementById("table-container");
  let tableContent = '';

  const selectedSubject = subjectList[index].subject; // Get subjects based on selection

  selectedSubject.forEach((day, index) => {
    let dayContent = ''; 
    for (let i = 1; i <= 11; i++) {
      dayContent += `
        <span class="relative">
          <span style="${i == 5 ? 'border-bottom-width: 0px;' : ""} ${index == subjectList.length ? "border-bottom-width: 0px" : ""}" class="block w-24 h-20 p-2 border-l-2 border-b-2 border-black/10"></span>
          ${day.subject.some(subject => subject.startTime === i) ?
          day.subject
              .filter(subject => subject.startTime === i)
              .map(subject => `
                <div class="absolute w-full h-full top-0">
                  <div style="width: ${subject.hours * 100}%" class="relative h-full z-10 p-2 text-[11px] leading-[14px] font-normal">
                    <div
                      onclick="${null}"
                      style="background: ${subject.bg};"
                      onmouseover="this.style.backgroundColor = '${subject.bgHover}'; this.style.color = '#FFFFFFF2';"
                      onmouseout="this.style.backgroundColor = '${subject.bg}'; this.style.color = '#000000';"
                      class="relative bg-[#FFF8D2] text-black cursor-pointer rounded-lg overflow-hidden border-2 border-black/10 h-full w-full p-1 text-center shadow-md hover:bg-[#FFD700] transition-all duration-200">
                      <p class="text-nowrap text-ellipsis overflow-hidden">${subject.subject}</p>
                      <p class="text-nowrap text-ellipsis overflow-hidden">${subject.code} sec ${subject.section}</p>
                      <p class="text-nowrap text-ellipsis overflow-hidden">${subject.location}</p>
                      <p class="text-nowrap text-ellipsis overflow-hidden">${subject.teacher}</p>
                    </div>
                  </div>
                </div>
              `).join('')
          : ""}
        </span>`;
    }

    tableContent += `
      <span class="grid grid-flow-col">
        <span class="bg-[#253442] w-16 text-white border-b-2 border-black/10 flex items-center justify-center">${day.day}</span>
        ${dayContent}
      </span>`;
  });

  tableContainerEl.innerHTML = `
    <div id="table" class="rounded-2xl overflow-hidden min-h-[4rem] max-w-[1124] bg-white/60 shadow-xl border-2 border-white/80 text-black/50">
      <div class="grid grid-flow-col text-center">
        <span class="bg-[#FFC736] w-16"></span>
        ${time.map(item => `
          <span class="bg-[#FFC736] w-24 p-2 border-2 border-t-0 border-r-0 border-black/10 text-[12px]">${item}</span>
        `).join('')}
      </div>
      ${tableContent}
    </div>
  `;
}

// Initialize the table with the default selection
updateTable(dropdownSelected);