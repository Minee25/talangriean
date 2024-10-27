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

const subjectList = [
  {
    id: 1,
    title: "โอ๊ค, ฟาง, วีโก้",
    subject: [
      {
        day: "Mon",
        subject: [
          {
            subject: "Preparatory English",
            startTime: 3,
            hours: 2,
            code: "0041001",
            section: 57,
            location: "RN1-805",
            teacher: "Mr.Brian Akabagy Enyiawah",
            bg: "#f472b6cc",
            bgHover: "#BE185D",
            detail: [
              {
                imgUrl: "brian.jpg",
                department: "คณะสำนักศึกษาทั่วไป",
                subjectsTaught: "0041001",
                gmail: "123@msu.ac.th",
                tel: "043754300",
                classRoomLink: "https://classroom.google.com/c/Njk1NDM3MTI2MDEz"
              }
            ]
          },
          {
            subject: "Math for Computer System Design and ...",
            startTime: 6,
            hours: 3,
            code: "1204102",
            section: 1,
            location: "IT-412",
            teacher: "รศ.ดร.จันทิมา พลพินิจ",
          },
        ]
      },
      {
        day: "Tue",
        subject: [
          {
            subject: "Math for Computer System Design and ...",
            startTime: 2,
            hours: 3,
            code: "1204101",
            section: 3,
            location: "IT-413",
            teacher: "รศ.ดร.นัฐธริยา เหล่าประชา"
          },
          {
            subject: "Digital Society Legal and Ethics...",
            startTime: 6,
            hours: 2,
            code: "1204104",
            section: 2,
            location: "IT-412",
            teacher: "ผศ.ดร.สมนึก พ่วงพรพิทักษ์"
          },
        ]
      },
      {
        day: "Wed",
        subject: [
          {
            subject: "Problem Solving for Computer",
            startTime: 1,
            hours: 4,
            code: "1204103",
            section: 4,
            location: "IT-402",
            teacher: "ผศ.ดร.สำรวน เวียงสมุทร"
          },
          {
            subject: "Digital Literacy and Life for Transformation",
            startTime: 6,
            hours: 2,
            code: "0041022",
            section: 23,
            location: "SC1-300",
            teacher: "อ.กวีพจน์ บรรลือวงศ์",
            bg: "#f472b6cc",
            bgHover: "#BE185D",
          },
          {
            subject: "Cultural Management for Value Creation",
            startTime: 10,
            hours: 2,
            code: "0045008",
            section: 6,
            location: "EN301",
            teacher: "ผศ.ดร.เกรียงศักดิ์ บุญเที่ยง, อ.ทม เกตุวงศา, อ.ดร.ยุทธชัย เกราะแก้ว",
            bg: "#C3B1E1",
            bgHover: "#A068FF",
          },
        ]
      },
      {
        day: "Thu",
        subject: [
          {
            subject: "Creativity and Innovation Man...",
            startTime: 6,
            hours: 2,
            code: "0043002",
            section: 3,
            location: "RN1-310",
            teacher: "ผศ.ดร.นวลละออง อรรถรังสรรค์",
            bg: "#C2F784",
            bgHover: "#6EC207",
          },
          {
            subject: "Logical Thinking Based Problem...",
            startTime: 10,
            hours: 2,
            code: "0041025",
            section: 2,
            location: "RN1-409",
            teacher: "อ.ดร.วิชญา รัตนเมธาวี, อ.เลอศักดิ์ โพธิ์ทอง",
            bg: "#f472b6cc",
            bgHover: "#BE185D",
          },
        ]
      },
      {
        day: "Fri",
        subject: []
      },
    ]
  },
  {
    id: 2,
    title: "เอ",
    subject: [
      {
        day: "Mon",
        subject: [
          {
            subject: "Math for Computer System Design and ...",
            startTime: 2,
            hours: 3,
            code: "1204101",
            section: 1,
            location: "IT-411",
            teacher: "รศ.ดร.นัฐธริยา เหล่าประชา",
          },
          {
            subject: "Math for Computer System Design and ...",
            startTime: 6,
            hours: 3,
            code: "1204102",
            section: 1,
            location: "IT-412",
            teacher: "รศ.ดร.จันทิมา พลพินิจ",
          },
        ]
      },
      {
        day: "Tue",
        subject: [
          {
            subject: "Digital Society Legal and Ethics...",
            startTime: 1,
            hours: 2,
            code: "1204104",
            section: 1,
            location: "IT-412",
            teacher: "รศ.ดร.นัฐธริยา เหล่าประชา"
          },
          {
            subject: "Problem Solving for Computer",
            startTime: 6,
            hours: 4,
            code: "1204103",
            section: 3,
            location: "IT-402",
            teacher: "ผศ.ดร.สำรวน เวียงสมุทร"
          },
        ]
      },
      {
        day: "Wed",
        subject: [
          {
            subject: "Problem Solving for Computer",
            startTime: 6,
            hours: 2,
            code: "0041022",
            section: 23,
            location: "SC1-300",
            teacher: "อ.กวีพจน์ บรรลือวงศ์",
            bg: "#f472b6cc",
            bgHover: "#BE185D",
          },
          {
            subject: "Digital Literacy and Life for Transformation",
            startTime: 6,
            hours: 2,
            code: "0041022",
            section: 23,
            location: "SC1-300",
            teacher: "อ.กวีพจน์ บรรลือวงศ์",
            bg: "#f472b6cc",
            bgHover: "#BE185D",
          },
          {
            subject: "Cultural Management for Value Creation",
            startTime: 10,
            hours: 2,
            code: "0045008",
            section: 6,
            location: "EN301",
            teacher: "ผศ.ดร.เกรียงศักดิ์ บุญเที่ยง, อ.ทม เกตุวงศา, อ.ดร.ยุทธชัย เกราะแก้ว",
            bg: "#C3B1E1",
            bgHover: "#A068FF",
          },
        ]
      },
      {
        day: "Thu",
        subject: [
          {
            subject: "Creativity and Innovation Man...",
            startTime: 6,
            hours: 2,
            code: "0043002",
            section: 3,
            location: "RN1-310",
            teacher: "ผศ.ดร.นวลละออง อรรถรังสรรค์",
            bg: "#C2F784",
            bgHover: "#6EC207",
          },
          {
            subject: "Preparatory English",
            startTime: 3,
            hours: 2,
            code: "0041001",
            section: 50,
            location: "RN1-601",
            teacher: "จารย์ไรนะ",
            bg: "#f472b6cc",
            bgHover: "#BE185D",
          },
          {
            subject: "Logical Thinking Based Problem...",
            startTime: 10,
            hours: 2,
            code: "0041025",
            section: 2,
            location: "RN1-409",
            teacher: "อ.ดร.วิชญา รัตนเมธาวี, อ.เลอศักดิ์ โพธิ์ทอง",
            bg: "#f472b6cc",
            bgHover: "#BE185D",
          },
        ]
      },
      {
        day: "Fri",
        subject: []
      },
    ]
  },
  {
    id: 3,
    title: "ไนซ์",
    subject: [
      {
        day: "Mon",
        subject: [
          {
            subject: "Problem Solving for Computer",
            startTime: 1,
            hours: 4,
            code: "1204103",
            section: 1,
            location: "IT-402",
            teacher: "ผศ.ดร.สำรวน เวียงสมุทร"
          },
          {
            subject: "Math for Computer System Design and ...",
            startTime: 6,
            hours: 3,
            code: "1204102",
            section: 1,
            location: "IT-412",
            teacher: "รศ.ดร.จันทิมา พลพินิจ",
          },
        ]
      },
      {
        day: "Tue",
        subject: [
          {
            subject: "Math for Computer System Design and ...",
            startTime: 2,
            hours: 3,
            code: "1204101",
            section: 3,
            location: "IT-413",
            teacher: "รศ.ดร.นัฐธริยา เหล่าประชา"
          },
          {
            subject: "Digital Society Legal and Ethics...",
            startTime: 6,
            hours: 2,
            code: "1204104",
            section: 2,
            location: "IT-412",
            teacher: "ผศ.ดร.สมนึก พ่วงพรพิทักษ์"
          },
        ]
      },
      {
        day: "Wed",
        subject: [
          {
            subject: "Digital Literacy and Life for Transformation",
            startTime: 6,
            hours: 2,
            code: "0041022",
            section: 23,
            location: "SC1-300",
            teacher: "อ.กวีพจน์ บรรลือวงศ์",
            bg: "#f472b6cc",
            bgHover: "#BE185D",
          },
          {
            subject: "Cultural Management for Value Creation",
            startTime: 10,
            hours: 2,
            code: "0045008",
            section: 6,
            location: "EN301",
            teacher: "ผศ.ดร.เกรียงศักดิ์ บุญเที่ยง, อ.ทม เกตุวงศา, อ.ดร.ยุทธชัย เกราะแก้ว",
            bg: "#C3B1E1",
            bgHover: "#A068FF",
          },
        ]
      },
      {
        day: "Thu",
        subject: [
          {
            subject: "Preparatory English",
            startTime: 3,
            hours: 2,
            code: "0041001",
            section: 50,
            location: "RN1-601",
            teacher: "จารย์ไรนะ",
            bg: "#f472b6cc",
            bgHover: "#BE185D",
          },
          {
            subject: "Creativity and Innovation Man...",
            startTime: 6,
            hours: 2,
            code: "0043002",
            section: 3,
            location: "RN1-310",
            teacher: "ผศ.ดร.นวลละออง อรรถรังสรรค์",
            bg: "#C2F784",
            bgHover: "#6EC207",
          },
          {
            subject: "Logical Thinking Based Problem...",
            startTime: 10,
            hours: 2,
            code: "0041025",
            section: 2,
            location: "RN1-409",
            teacher: "อ.ดร.วิชญา รัตนเมธาวี, อ.เลอศักดิ์ โพธิ์ทอง",
            bg: "#f472b6cc",
            bgHover: "#BE185D",
          },
        ]
      },
      {
        day: "Fri",
        subject: []
      },
    ]
  },
  {
    id: 4,
    title: "ม่อน",
    subject: [
      {
        day: "Mon",
        subject: [
          {
            subject: "Math for Computer System Design and ...",
            startTime: 6,
            hours: 3,
            code: "1204102",
            section: 1,
            location: "IT-412",
            teacher: "รศ.ดร.จันทิมา พลพินิจ",
          },
        ]
      },
      {
        day: "Tue",
        subject: [
          {
            subject: "Math for Computer System Design and ...",
            startTime: 2,
            hours: 3,
            code: "1204101",
            section: 3,
            location: "IT-413",
            teacher: "รศ.ดร.นัฐธริยา เหล่าประชา"
          },
          {
            subject: "Digital Society Legal and Ethics...",
            startTime: 6,
            hours: 2,
            code: "1204104",
            section: 2,
            location: "IT-412",
            teacher: "ผศ.ดร.สมนึก พ่วงพรพิทักษ์"
          },
        ]
      },
      {
        day: "Wed",
        subject: [
          {
            subject: "Problem Solving for Computer",
            startTime: 1,
            hours: 4,
            code: "1204103",
            section: 4,
            location: "IT-402",
            teacher: "ผศ.ดร.สำรวน เวียงสมุทร"
          },
          {
            subject: "Preparatory English",
            startTime: 6,
            hours: 2,
            code: "0041001",
            section: 11,
            location: "RN1-509",
            teacher: "Kokiboon fukum",
            bg: "#f472b6cc",
            bgHover: "#BE185D",
          }, 
        ]
      },
      {
        day: "Thu",
        subject: [
          {
            subject: "โปรแกรมประยุกต์สำหรับงานดิจิทัล",
            startTime: 3,
            hours: 2,
            code: "0041024",
            section: 2,
            location: "SC2-102",
            teacher: "นภัสกร กรวยสวัสดิ์",
            bg: "#C2F784",
            bgHover: "#6EC207",
          },
          {
            subject: "คาราโอเกะ",
            startTime: 8,
            hours: 2,
            code: "2011132",
            section: 3,
            location: "MU300",
            teacher: "สัญชัย ด้วงบุ้ง",
            bg: "#f472b6cc",
            bgHover: "#BE185D",
          },
        ]
      },
      {
        day: "Fri",
        subject: [
          {
            subject: "ทักษะเเละชีวิตดิจิทัลเพื่อการเปลี่ยนเเปลง",
            startTime: 8,
            hours: 2,
            code: "0041022",
            section: 25,
            location: "SC1-100",
            teacher: "ธวัชวงศ์ ลาวัลย์",
            bg: "#C2F784",
            bgHover: "#6EC207",
          },
          {
            subject: "อาหารเเละเครื่องดื่มจากภูมิปัญญาพื้นบ้าน",
            startTime: 10,
            hours: 2,
            code: "0045010",
            section: 11,
            location: "SC2-107",
            teacher: "นิจฉรา ทูลธรรม",
            bg: "#f472b6cc",
            bgHover: "#BE185D",
          },
        ]
      },
    ]
  },
];