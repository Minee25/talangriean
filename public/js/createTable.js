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
  subjectList.forEach((item, index) => {
    item.schedule.forEach(day => {
      day.classes.forEach(cls => {
        const parsed = parseTimeRange(cls.time);
        cls.startTime = parsed.startTime;
        cls.hours = parsed.hours;

        // ใส่ id เข้าไปใน class
        cls.subjectIndex = index;
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
                  onclick="createModel(${subject.subjectIndex}, '${escapeJS(day.day)}', '${escapeJS(subject.time)}')"
                  style="background: ${subject.bg};"
                  onmouseover="this.style.backgroundColor = '${subject.bgHover}'; this.style.color = '#FFFFFFF2';"
                  onmouseout="this.style.backgroundColor = '${subject.bg}'; this.style.color = '#000000';"
                  class="relative cursor-pointer rounded-lg overflow-hidden border-2 border-black/5 h-full w-full py-1 px-4 text-center text-black shadow-md transition-all duration-200">

                  <p class="text-nowrap text-ellipsis overflow-hidden">${subject.name}</p>
                  <p class="text-nowrap text-ellipsis overflow-hidden">${subject.nameThai}</p>
                  <p class="text-nowrap text-ellipsis overflow-hidden">${subject.code} sec ${subject.section}</p>
                  <p class="text-nowrap text-ellipsis overflow-hidden">${subject.room}</p>
                  <p class="text-nowrap text-ellipsis overflow-hidden">${subject.teacher ? subject.teacher.split(',')[0] : ''}</p>

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
function createModel(id, dayName, timeRange) { 
  const subjectObj = subjectList[id];
  
  if (!subjectObj) {
    console.error("ไม่พบวิชาที่ระบุด้วย index:", id);
    return;
  }

  // ค้นหาคลาสเฉพาะที่ถูกคลิกตามวันและเวลา
  let classData = null;
  if (dayName && timeRange) {
    const daySchedule = subjectObj.schedule.find(d => d.day === dayName);
    if (daySchedule && daySchedule.classes) {
      classData = daySchedule.classes.find(c => c.time === timeRange);
    }
  }

  // ย้อนกลับไปยังคลาสแรกหากไม่พบคลาสที่เฉพาะเจาะจง
  if (!classData) {
    for (const day of subjectObj.schedule || []) {
      if (day.classes && day.classes.length > 0) {
        classData = day.classes[0];
        break;
      }
    }
  }

  if (!classData) {
    console.error("ไม่พบข้อมูลคลาสในวิชา");
    return;
  }

  // รับค่าทั้งหมดด้วย fallback
  const teacher = classData.teacher || '';
  const teacherDisplay = teacher ? teacher.replace(/, /g, '<br>') : 'ไม่ระบุ';
  const img = classData.img || 'omgcat-meme.gif';
  const name = classData.name || 'ไม่ระบุ';
  const nameThai = classData.nameThai || classData.thai || 'ไม่ระบุ';
  const code = classData.code || 'ไม่ระบุ';
  const section = classData.section || '';
  const room = classData.room || 'ไม่ระบุ';
  const classRoomLink = classData.classRoomLink || '#';
  const links = classData.links || [];

  Swal.fire({
    title: 'รายละเอียดวิชา',
    html: `
      <div style="display:flex;flex-direction:column;align-items:center;">
        ${img ? `<img src="./assets/img/${img}" alt="Teacher Image" style="width: 120px; height: 120px; object-fit: cover; border-radius: 50%; border: 3px solid #ccc; margin-bottom: 10px;" onerror="this.onerror=null;">` : ''}
        <p style="margin:0 0 8px 0; color:#555;">${teacherDisplay}</p>
        <hr style="width:100%;margin:8px 0;">
        <h2 style="font-size:1.1rem;font-weight:bold;margin-bottom:4px;">${name}</h2>
        <p style="margin:0 0 4px 0;"><span style="font-weight:500;">${nameThai}</span></p>
        <p style="margin:0 0 4px 0;">รหัสวิชา: <span style="font-weight:500;">${code}${section ? ` sec ${section}` : ''}</span></p>
        <p style="margin:0 0 4px 0;">ห้อง: <span style="font-weight:500;">${room}</span></p>
        ${classRoomLink !== '#' ? `<a href="${classRoomLink}" target="_blank" style="color:#1976d2;"><i class="fa-solid fa-link"></i> <span style="text-decoration:underline;">ลิ้งค์คลาสรูม</span></a>` : ''}
        ${links && links.length > 0
          ? `
            <div style="margin-top:8px;display:flex;flex-direction:column;gap:4px;">
              ${links
                .map(
                  (l) => `
                    <a href="${l}" target="_blank" style="color:#1976d2;text-decoration:underline;">
                      ${(() => {
                        // ตรวจสอบแพลตฟอร์มจากลิงก์เพื่อแสดงชื่อ
                        const url = l.toLowerCase();

                        if (url.includes("facebook.com/groups")) {
                          return `<span style="display:inline-flex;align-items:center;gap:6px;"><i class="fa-brands fa-facebook"></i> <span style="text-decoration:underline;">Facebook Group</span></span>`;
                        }
                        if (url.includes("facebook.com")) {
                          return `<span style="display:inline-flex;align-items:center;gap:6px;"><i class="fa-brands fa-facebook"></i> <span style="text-decoration:underline;">Facebook</span></span>`;
                        }
                        if (url.includes("line.me") || url.includes("line.app")) {
                          return `<span style="display:inline-flex;align-items:center;gap:6px;"><i class="fa-brands fa-line"></i> <span style="text-decoration:underline;">LINE</span></span>`;
                        }
                        if (url.includes("youtube.com") || url.includes("youtu.be")) {
                          return `<span style="display:inline-flex;align-items:center;gap:6px;"><i class="fa-brands fa-youtube"></i> <span style="text-decoration:underline;">YouTube</span></span>`;
                        }
                        return `<span style="display:inline-flex;align-items:center;gap:6px;"><i class="fa-solid fa-link"></i> <span style="text-decoration:underline;">ลิ้งค์อื่นๆ</span></span>`;
                      })()}
                    </a>
                  `
                )
                .join("")}
            </div>
          `
          : ""
        }
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
