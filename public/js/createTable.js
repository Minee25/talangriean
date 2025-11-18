const ALL_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const time = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
  "17:00 - 18:00",
  "18:00 - 19:00",
];

// รวมวันจริง + วันว่าง
function fillEmptyDays(schedule) {
  return ALL_DAYS.map(dayName => {
    const exist = schedule.find(d => d.day === dayName);
    return exist ? exist : { day: dayName, classes: [] };
  });
}

// แปลงช่วงเวลา startTime + hours
function parseTimeRange(timeRange) {
  const [start, end] = timeRange.split("-");

  const startHour = parseInt(start.split(":")[0], 10);
  const endHour = parseInt(end.split(":")[0], 10);

  return {
    startTime: startHour - 7, // ช่องที่ 1 คือ 08:00 → 8 - 7 = 1
    hours: endHour - startHour,
  }
}

// คำนวณเวลาให้ทุก class
function autoCalc(subjectList) {
  subjectList.forEach(item => {
    item.schedule.forEach(day => {
      day.classes.forEach(cls => {
        const parsed = parseTimeRange(cls.time);
        cls.startTime = parsed.startTime;
        cls.hours = parsed.hours;
      });
    });
  });
}

function updateTable(index) {
  const tableContainerEl = document.getElementById("table-container");
  let tableContent = '';

  if (!subjectList[index]) {
    console.error("Selected subject is undefined.");
    return;
  }

  autoCalc(subjectList);

  // เติมวันว่างให้ครบ Mon-Sun
  let selectedSubject = fillEmptyDays(subjectList[index].schedule);

  selectedSubject.forEach((day, dayIndex) => {
    let dayContent = '';

    // วาดช่องเวลา
    for (let i = 1; i <= time.length; i++) {
      const subjectsHere = day.classes.filter(sub => sub.startTime === i);

      dayContent += `
        <span class="relative">
          <span style="${i == 5 || dayIndex == selectedSubject.length - 1 ? 'border-bottom-width: 0px;' : ""}" class="block w-24 h-24 p-2 border-l-2 border-b-2 border-black/10"></span>

          ${subjectsHere.length > 0 ? subjectsHere.map(subject => `
            <div class="absolute w-full h-full top-0">
              <div style="width: ${subject.hours * 100}%"
                class="relative h-full z-10 p-2 text-[10px] leading-[14px] font-normal">

                <div 
                  onclick="createModel({
                    img: '${escapeJS(subject.imgUrl)}',
                    name: '${escapeJS(subject.name)}',
                    thai: '${escapeJS(subject.nameThai)}',
                    room: '${escapeJS(subject.room)}',
                    code: '${escapeJS(subject.code)}',
                    section: '${escapeJS(subject.section)}',
                    teacher: '${escapeJS(subject.teacher)}',
                    classRoomLink: '${escapeJS(subject.classRoomLink)}'
                  })"
                  style="background: ${subject.bg};"
                  onmouseover="this.style.backgroundColor = '${subject.bgHover}'; this.style.color = '#FFFFFFF2';"
                  onmouseout="this.style.backgroundColor = '${subject.bg}'; this.style.color = '#000000';"
                  class="relative cursor-pointer rounded-lg overflow-hidden border-2 border-black/5 h-full w-full py-1 px-4 text-center text-black shadow-md transition-all duration-200">

                  <p class="text-nowrap text-ellipsis overflow-hidden">${subject.name}</p>
                  <p class="text-nowrap text-ellipsis overflow-hidden">${subject.nameThai}</p>
                  <p class="text-nowrap text-ellipsis overflow-hidden">${subject.code} sec ${subject.section}</p>
                  <p class="text-nowrap text-ellipsis overflow-hidden">${subject.room}</p>
                  <p class="text-nowrap text-ellipsis overflow-hidden">${subject.teacher.split(',')[0]}</p>

                  <div class="absolute w-10 h-10 top-[60%] right-0 rounded-full drop-shadow-pr-shadow-text"
                    style="background-color: ${subject.bgHover}55;"></div>
                  <div class="absolute w-10 h-10 bottom-[60%] left-0 rounded-full drop-shadow-pr-shadow-text"
                    style="background-color: ${subject.bgHover}55;"></div>
                </div>  
              </div>
            </div>
          `).join("") : ""}
        </span>
      `;
    }

    // แสดงชื่อวัน
    tableContent += `
      <span class="grid grid-flow-col">
        <span class="bg-[#253442] w-16 text-white border-b-2 border-black/10 flex items-center justify-center">
          ${day.day}
        </span>
        ${dayContent}
      </span>
    `;
  });

  // วาดตารางด้านบน (Header เวลา)
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
updateTable(dropdownSelected);

// Model popup
function createModel(subject) {
  Swal.fire({
    title: 'รายละเอียดวิชา',
    html: `
      <div style="display:flex;flex-direction:column;align-items:center;">
        <img src="./assets/img/teachers/${subject.img}" alt="Teacher Image" style="width: 120px; height: 120px; object-fit: cover; border-radius: 50%; border: 3px solid #ccc; margin-bottom: 10px;" onerror="this.onerror=null; this.src='./assets/img/omgcat-meme.gif';">
        <p style="margin:0 0 8px 0; color:#555;">${subject.teacher.replace(/, /g, '<br>')}</p>
        <hr style="width:100%;margin:8px 0;">
        <h2 style="font-size:1.1rem;font-weight:bold;margin-bottom:4px;">${subject.name}</h2>
        <p style="margin:0 0 4px 0;"><span style="font-weight:500;">${subject.thai}</span></p>
        <p style="margin:0 0 4px 0;">รหัสวิชา: <span style="font-weight:500;">${subject.code} sec ${subject.section}</span></p>
        <p style="margin:0 0 4px 0;">ห้อง: <span style="font-weight:500;">${subject.room}</span></p>
        <a href="${subject.classRoomLink}" target="_blank" style="color:#1976d2;text-decoration:underline;">ลิ้งค์คลาสรูม</a>
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
