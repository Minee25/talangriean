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
          <span style="${i == 5 || index == selectedSubject.length - 1 ? 'border-bottom-width: 0px;' : ""}" class="block w-24 h-24 p-2 border-l-2 border-b-2 border-black/10"></span>
          ${day.subject && Array.isArray(day.subject) && day.subject.some(subject => subject.startTime === i) ?
          day.subject
            .filter(subject => subject.startTime === i)
            .map(subject =>
              `
                <div class="absolute w-full h-full top-0">
                  <div style="width: ${subject.hours * 100}%" class="relative h-full z-10 p-2 text-[10px] leading-[14px] font-normal">
                    <div 
                      onclick="createModel(
                        '${escapeJS(subject.detail && subject.detail[0] ? subject.detail[0].imgUrl : "")}',
                        '${escapeJS(subject.subject)}',
                        '${escapeJS(subject.subjectThai)}',
                        '${escapeJS(subject.location)}',
                        '${escapeJS(subject.code)}',
                        '${escapeJS(subject.section)}',
                        '${escapeJS(subject.teacher)}',
                        '${escapeJS(subject.detail && subject.detail[0] ? subject.detail[0].department : "")}',
                        '${escapeJS(subject.detail && subject.detail[0] ? subject.detail[0].subjectsTaught : "")}',
                        '${escapeJS(subject.detail && subject.detail[0] ? subject.detail[0].tel : "")}',
                        '${escapeJS(subject.detail && subject.detail[0] ? subject.detail[0].gmail : "")}',
                        '${escapeJS(subject.detail && subject.detail[0] ? subject.detail[0].classRoomLink : "")}')"
                      style="background: ${subject.bg};"
                      onmouseover="this.style.backgroundColor = '${subject.bgHover}'; this.style.color = '#FFFFFFF2';"
                      onmouseout="this.style.backgroundColor = '${subject.bg}'; this.style.color = '#000000';"
                      class="relative bg-[#FFF8D2] text-black cursor-pointer rounded-lg overflow-hidden border-2 border-black/5 h-full w-full py-1 px-4 text-center shadow-md hover:bg-[#FFD700] transition-all duration-200">
                      <p class="text-nowrap text-ellipsis overflow-hidden">${subject.subject}</p>
                      <p class="text-nowrap text-ellipsis overflow-hidden">${subject.subjectThai}</p>
                      <p class="text-nowrap text-ellipsis overflow-hidden">${subject.code} sec ${subject.section}</p>
                      <p class="text-nowrap text-ellipsis overflow-hidden">${subject.location}</p>
                      <p class="text-nowrap text-ellipsis overflow-hidden">${subject.teacher.split(',')[0]}</p>

                      <div class="absolute w-10 h-10 top-[60%] right-0 transition-all duration-200 translate-x-[40%] rounded-full drop-shadow-pr-shadow-text" style="background-color: ${subject.bgHover}55;"></div>
                      <div class="absolute w-10 h-10 bottom-[60%] left-0 transition-all duration-200 translate-x-[-40%] rounded-full drop-shadow-pr-shadow-text" style="background-color: ${subject.bgHover}55;"></div>
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
function createModel(subjectImgUrl, subjectSubject, subjectThai, subjectLocation, subjectCode, subjectSection, subjectTeacher, subjectDepartment, subjectSubjectsTaught, subjectTel, subjectGmail, subjectClassRoomLink) {
  Swal.fire({
    title: 'รายละเอียดวิชา',
    html: `
      <div style="display:flex;flex-direction:column;align-items:center;">
        <img src="./assets/img/teachers/${subjectImgUrl}" alt="Teacher Image" style="width: 120px; height: 120px; object-fit: cover; border-radius: 50%; border: 3px solid #ccc; margin-bottom: 10px;" onerror="this.onerror=null; this.src='./assets/img/omgcat-meme.gif';">
        <p style="margin:0 0 8px 0; color:#555;">${subjectTeacher.replace(/, /g, '<br>')}</p>
        <hr style="width:100%;margin:8px 0;">
        <h2 style="font-size:1.1rem;font-weight:bold;margin-bottom:4px;">${subjectSubject}</h2>
        <p style="margin:0 0 4px 0;"><span style="font-weight:500;">${subjectThai}</span></p>
        <p style="margin:0 0 4px 0;">รหัสวิชา: <span style="font-weight:500;">${subjectCode} sec ${subjectSection}</span></p>
        <p style="margin:0 0 4px 0;">ห้อง: <span style="font-weight:500;">${subjectLocation}</span></p>
        <a href="${subjectClassRoomLink}" target="_blank" style="color:#1976d2;text-decoration:underline;">ลิ้งค์คลาสรูม</a>
      </div>
    `,
    showCloseButton: true,
    showConfirmButton: false,
    width: 400,
    background: '#ffffffe2',
    customClass: {
      popup: 'swal2-rounded'
    }
  });
} 

function escapeJS(str) {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r');
}
