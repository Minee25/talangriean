// Function to update table content based on the selected subject
function updateTable(index) {
  const tableContainerEl = document.getElementById("table-container");
  let tableContent = '';

  // Check if subjectList[index] is defined
  if (!subjectList[index]) {
    console.error("Selected subject is undefined.");
    return; // Exit the function if the subject is not found
  }

  const selectedSubject = subjectList[index].subject; // Get subjects based on selection

  selectedSubject.forEach((day, index) => {
    let dayContent = '';
    for (let i = 1; i <= 11; i++) {
      dayContent += `
        <span class="relative">
          <span style="${i == 5 ? 'border-bottom-width: 0px;' : ""} ${index == subjectList.length ? "border-bottom-width: 0px" : ""}" class="block w-24 h-20 p-2 border-l-2 border-b-2 border-black/10"></span>
          ${day.subject && Array.isArray(day.subject) && day.subject.some(subject => subject.startTime === i) ?
          day.subject
            .filter(subject => subject.startTime === i)
            .map(subject =>
              `
                <div class="absolute w-full h-full top-0">
                  <div style="width: ${subject.hours * 100}%" class="relative h-full z-10 p-2 text-[11px] leading-[14px] font-normal">
                    <div 
                      onclick="createModel('${subject.detail && subject.detail[0] ? subject.detail[0].imgUrl : ""}', '${subject.subject}', '${subject.teacher}', '${subject.detail && subject.detail[0] ? subject.detail[0].department : ""}', '${subject.detail && subject.detail[0] ? subject.detail[0].subjectsTaught : ""}', '${subject.detail && subject.detail[0] ? subject.detail[0].tel : ""}', '${subject.detail && subject.detail[0] ? subject.detail[0].gmail : ""}', '${subject.detail && subject.detail[0] ? subject.detail[0].classRoomLink : ""}')"
                      style="background: ${subject.bg};"
                      onmouseover="this.style.backgroundColor = '${subject.bgHover}'; this.style.color = '#FFFFFFF2';"
                      onmouseout="this.style.backgroundColor = '${subject.bg}'; this.style.color = '#000000';"
                      class="relative bg-[#FFF8D2] text-black cursor-pointer rounded-lg overflow-hidden border-2 border-black/10 h-full w-full p-1 text-center shadow-md hover:bg-[#FFD700] transition-all duration-200">
                      <p class="text-nowrap text-ellipsis overflow-hidden">${subject.subject}</p>
                      <p class="text-nowrap text-ellipsis overflow-hidden">${subject.code} sec ${subject.section}</p>
                      <p class="text-nowrap text-ellipsis overflow-hidden">${subject.location}</p>
                      <p class="text-nowrap text-ellipsis overflow-hidden">${subject.teacher}</p>

                      <div class="absolute w-10 h-10 top-1/2 right-0 transition-all duration-200 translate-x-[30%] rounded-full drop-shadow-pr-shadow-text bg-[#ffd90057]"></div>
                      <div class="absolute w-10 h-10 bottom-1/2 left-0 transition-all duration-200 translate-x-[-30%] rounded-full drop-shadow-pr-shadow-text bg-[#ffd90057]"></div>
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



// create model
function createModel(subjectImgUrl, subjectSubject, subjectTeacher, subjectDepartment, subjectSubjectsTaught, subjectTel, subjectGmail, subjectClassRoomLink) {
  document.getElementById("model-detail").classList.remove("hidden");

  document.getElementById("model-detail").innerHTML = `
  <div id="model-detail-bg" class="bg-[#0000004d] absolute duration-300 w-full h-full top-0 left-0"></div>
  <div id="model-detail-content" class="relative duration-300 ease-out z-10 bg-[#ffffffe2] rounded-lg p-4 shadow-lg w-full min-h-full flex flex-col justify-center items-center">
    <button id="close-model" class="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 hover:bg-gray-300 rounded-lg" onclick="closeModel()">
      <svg class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <div class="flex flex-col items-center min-h-full justify-center">
      <h1 class="text-2xl font-bold mb-4 text-center">รายละเอียดวิชา</h1> 
      <img src="./assets/img/teachers/${subjectImgUrl}" alt="Teacher Image" class="w-48 h-48 object-cover border-4 border-gray-300 rounded-full mb-4 shadow-md" onerror="this.onerror=null; this.src='./assets/img/omgcat-meme.gif';">
      <p class="text-base text-gray-600">${subjectTeacher}</p>
      <hr class="my-4 border-t border-gray-600 w-full">
      <h2 class="text-lg font-semibold mb-1 text-gray-800">${subjectSubject}</h2> 
      <p class="text-base text-gray-600 mb-2">ภาควิชา: <span class="font-medium">${subjectDepartment}</span></p>
      <p class="text-base text-gray-600 mb-2">วิชาที่สอน: <span class="font-medium">${subjectSubjectsTaught} </span></p>
      <p class="text-base text-gray-600 mb-2">Gmail: <span class="font-medium">${subjectGmail}</span></p>   
      <p class="text-base text-gray-600 mb-2">โทรศัพท์: <span class="font-medium">${subjectTel}</span></p>  
      <a href="${subjectClassRoomLink}" target="_blank" class="text-base underline text-blue-600 hover:text-blue-700">ลิ้งค์คลาสรูม</a>
    </div>
  </div>
  `;

  document.getElementById("model-detail-bg").addEventListener("click", (e) => {
    closeModel();
  });

  document.getElementById("model-detail-content").style.scale = "0";
  document.getElementById("model-detail-bg").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("model-detail-content").style.scale = "1";
    document.getElementById("model-detail-bg").style.opacity = "1";
  }, 100);
}



// close the model
function closeModel() {
  document.getElementById("model-detail-content").style.scale = "1";
  document.getElementById("model-detail-bg").style.opacity = "1";
  setTimeout(() => {
    document.getElementById("model-detail-content").style.scale = "0";
    document.getElementById("model-detail-bg").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("model-detail").classList.add("hidden");
    }, 200);
  }, 100);
}




