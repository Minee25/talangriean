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
    title: "โอ๊ค, A, ไนซ์, วีโก้, ม่อน",
    subject: [
      {
        day: "Mon",
        subject: [
          {
            subject: "Mathematics for Computer Science 2",
            startTime: 2,
            hours: 3,
            code: "1204105",
            section: 1,
            location: "IT-412",
            teacher: "อ.ดร.พรทิวา ปะวะระ",
            bg: "#D5E6FF",
            bgHover: "#000080",
            detail: [
              {
                imgUrl: "pornntiwa.png",
                gmail: "pornntiwa.p@msu.ac.th",
                tel: "043-719800 ต่อ 5001, 06-3635-5044",
                classRoomLink: "#"
              }
            ]
          },
          {
            subject: "Laws and Everyday Rights",
            startTime: 10,
            hours: 2,
            code: "0044004",
            section: 9,
            location: "RN1-410",
            teacher: "ผศ.ศักดิ์ชาย สุนทรธนาภิรมย์, ผศ.อมรเทพ เมืองแสน, อ.ดร.อธิเมศร์ อมรสัมฤทธิ์โชติ",
            bg: "#85b6ff",
            bgHover: "#4c83d3",
            detail: [
              {
                imgUrl: "",
                gmail: "",
                tel: "",
                classRoomLink: "#"
              }
            ]
          },
        ]
      },
      {
        day: "Tue",
        subject: [
          {
            subject: "Principles of Computer Programming",
            startTime: 1,
            hours: 4,
            code: "1204107",
            section: 1,
            location: "IT-402",
            teacher: "ผศ.ดร.สำรวน เวียงสมุทร",
            bg: "#D5E6FF",
            bgHover: "#000080",
            detail: [
              {
                imgUrl: "ผศ.ดร.สำรวน-เวียงสมุทร.jpg",
                gmail: "panida.s@msu.ac.th",
                tel: "5365, 5003",
                classRoomLink: "#"
              }
            ]
          },
          {
            subject: "Food and Exercise for Health and Beauty",
            startTime: 10,
            hours: 2,
            code: "0042005",
            section: 2,
            location: "SC1-100",
            teacher: "ผศ.ดร.กภ. กู้เกียรติ ทุดปอ, อ.ปิยเชษฐ์ ตะสิงห์",
            bg: "#fca311cc",
            bgHover: "#d97706",
            detail: [
              {
                imgUrl: "",
                department: "",
                subjectsTaught: "",
                gmail: "",
                tel: "",
                classRoomLink: "#"
              }
            ]
          },
        ]
      },
      {
        day: "Wed",
        subject: [
          {
            subject: "Probability and Applied Statistics for Computer Science",
            startTime: 2,
            hours: 3,
            code: "1204106",
            section: 2,
            location: "IT-511",
            teacher: "อ.ดร.นัฐธริยา เหล่าประชา",
            bg: "#D5E6FF",
            bgHover: "#000080",
            detail: [
              {
                imgUrl: "นัฐธริยา.jpeg",
                gmail: "natthariya.l@msu.ac.th",
                tel: "5365, 5003",
                classRoomLink: "#"
              }
            ]
          },
          {
            subject: "Wisdom for Life Quality",
            startTime: 8,
            hours: 2,
            code: "0045003",
            section: 4,
            location: "SC2-107",
            teacher: "รศ.ดร.ชนิดาพร ตุ้มปี่สุวรรณ, รศ.ดร.บังอร กองอิ้ม",
            bg: "#d6aef7",
            bgHover: "#9b4cc4",
            detail: [
              {
                imgUrl: "",
                department: "",
                subjectsTaught: "",
                gmail: "",
                tel: "",
                classRoomLink: "#"
              }
            ]
          },
          {
            subject: "Design Thinking",
            startTime: 10,
            hours: 2,
            code: "0043001",
            section: 5,
            location: "RN1-409",
            teacher: "อ.สันทนา ภิรมย์เกียรติ",
            bg: "#c2f784",
            bgHover: "#4ADE80",
            detail: [
              {
                imgUrl: "",
                department: "",
                subjectsTaught: "",
                gmail: "",
                tel: "",
                classRoomLink: "#"
              }
            ]
          },
        ]
      },
      {
        day: "Thu",
        subject: [
          {
            subject: "Life Skills",
            startTime: 3,
            hours: 2,
            code: "0042008",
            section: 1,
            location: "RN1-710",
            teacher: "อ.ดร.วันทกาญจน์ สีมาโรฤทธิ์การ์ด, ผศ.ดร.สุดารัตน์ ถนนแก้ว",
            bg: "#fca311cc",
            bgHover: "#d97706",
            detail: [
              {
                imgUrl: "",
                department: "",
                subjectsTaught: "",
                gmail: "",
                tel: "",
                classRoomLink: "#"
              }
            ]
          },
          {
            subject: "Communicative English",
            startTime: 6,
            hours: 2,
            code: "0041002",
            section: 48,
            location: "RN1-604",
            teacher: "อ.ธานิศา ศรีสังข์",
            bg: "#f9a1d8cc",
            bgHover: "#9b0f45",
            detail: [
              {
                imgUrl: "",
                department: "",
                subjectsTaught: "",
                gmail: "",
                tel: "",
                classRoomLink: "#"
              }
            ]
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
    title: "ฟาง",
    subject: [
      {
        day: "Mon",
        subject: [
          {
            subject: "Mathematics for Computer Science 2",
            startTime: 2,
            hours: 3,
            code: "1204105",
            section: 1,
            location: "IT-412",
            teacher: "อ.ดร.พรทิวา ปะวะระ",
            bg: "#D5E6FF",
            bgHover: "#000080",
            detail: [
              {
                imgUrl: "pornntiwa.png",
                gmail: "pornntiwa.p@msu.ac.th",
                tel: "043-719800 ต่อ 5001, 06-3635-5044",
                classRoomLink: "#"
              }
            ]
          },
          {
            subject: "Laws and Everyday Rights",
            startTime: 10,
            hours: 2,
            code: "0044004",
            section: 9,
            location: "RN1-410",
            teacher: "ผศ.ศักดิ์ชาย สุนทรธนาภิรมย์, ผศ.อมรเทพ เมืองแสน, อ.ดร.อธิเมศร์ อมรสัมฤทธิ์โชติ",
            bg: "#85b6ff",
            bgHover: "#4c83d3",
            detail: [
              {
                imgUrl: "",
                gmail: "",
                tel: "",
                classRoomLink: "#"
              }
            ]
          },
        ]
      },
      {
        day: "Tue",
        subject: [
          {
            subject: "Principles of Computer Programming",
            startTime: 1,
            hours: 4,
            code: "1204107",
            section: 1,
            location: "IT-402",
            teacher: "ผศ.ดร.สำรวน เวียงสมุทร",
            bg: "#D5E6FF",
            bgHover: "#000080",
            detail: [
              {
                imgUrl: "ผศ.ดร.สำรวน-เวียงสมุทร.jpg",
                gmail: "panida.s@msu.ac.th",
                tel: "5365, 5003",
                classRoomLink: "#"
              }
            ]
          },
          {
            subject: "Food and Exercise for Health and Beauty",
            startTime: 10,
            hours: 2,
            code: "0042005",
            section: 2,
            location: "SC1-100",
            teacher: "ผศ.ดร.กภ. กู้เกียรติ ทุดปอ, อ.ปิยเชษฐ์ ตะสิงห์",
            bg: "#fca311cc",
            bgHover: "#d97706",
            detail: [
              {
                imgUrl: "",
                department: "",
                subjectsTaught: "",
                gmail: "",
                tel: "",
                classRoomLink: "#"
              }
            ]
          },
        ]
      },
      {
        day: "Wed",
        subject: [
          {
            subject: "Probability and Applied Statistics for Computer Science",
            startTime: 2,
            hours: 3,
            code: "1204106",
            section: 2,
            location: "IT-511",
            teacher: "อ.ดร.นัฐธริยา เหล่าประชา",
            bg: "#D5E6FF",
            bgHover: "#000080",
            detail: [
              {
                imgUrl: "นัฐธริยา.jpeg",
                gmail: "natthariya.l@msu.ac.th",
                tel: "5365, 5003",
                classRoomLink: "#"
              }
            ]
          },
          {
            subject: "Wisdom for Life Quality",
            startTime: 8,
            hours: 2,
            code: "0045003",
            section: 4,
            location: "SC2-107",
            teacher: "รศ.ดร.ชนิดาพร ตุ้มปี่สุวรรณ, รศ.ดร.บังอร กองอิ้ม",
            bg: "#d6aef7",
            bgHover: "#9b4cc4",
            detail: [
              {
                imgUrl: "",
                department: "",
                subjectsTaught: "",
                gmail: "",
                tel: "",
                classRoomLink: "#"
              }
            ]
          },
          {
            subject: "Design Thinking",
            startTime: 10,
            hours: 2,
            code: "0043001",
            section: 5,
            location: "RN1-409",
            teacher: "อ.สันทนา ภิรมย์เกียรติ",
            bg: "#c2f784",
            bgHover: "#4ADE80",
            detail: [
              {
                imgUrl: "",
                department: "",
                subjectsTaught: "",
                gmail: "",
                tel: "",
                classRoomLink: "#"
              }
            ]
          },
        ]
      },
      {
        day: "Thu",
        subject: [
          {
            subject: "Life Skills",
            startTime: 3,
            hours: 2,
            code: "0042008",
            section: 1,
            location: "RN1-710",
            teacher: "อ.ดร.วันทกาญจน์ สีมาโรฤทธิ์การ์ด, ผศ.ดร.สุดารัตน์ ถนนแก้ว",
            bg: "#fca311cc",
            bgHover: "#d97706",
            detail: [
              {
                imgUrl: "",
                department: "",
                subjectsTaught: "",
                gmail: "",
                tel: "",
                classRoomLink: "#"
              }
            ]
          },
          {
            subject: "Communicative English",
            startTime: 6,
            hours: 2,
            code: "0041002",
            section: 1,
            location: "RN1-510",
            teacher: "ผศ.ดร.กิตติพงษ์ ประพันธ์",
            bg: "#f9a1d8cc",
            bgHover: "#9b0f45",
            detail: [
              {
                imgUrl: "",
                department: "",
                subjectsTaught: "",
                gmail: "",
                tel: "",
                classRoomLink: "#"
              }
            ]
          },
          {
            subject: "Religion and Reasoning for Living",
            startTime: 8,
            hours: 2,
            code: "0044007",
            section: 9,
            location: "RN1-507",
            teacher: "รศ.ดร.อภิญวัฒน์ โพธิ์สาน",
            bg: "#85b6ff",
            bgHover: "#4c83d3",
            detail: [
              {
                imgUrl: "",
                department: "",
                subjectsTaught: "",
                gmail: "",
                tel: "",
                classRoomLink: "#"
              }
            ]
          },
        ]
      },
      {
        day: "Fri",
        subject: []
      },
    ]
  },
  { undefined },
  { undefined }
];