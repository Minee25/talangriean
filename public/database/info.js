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
    title: "โอ๊ค, A, ไนซ์, วีโก้",
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
                classRoomLink: "https://classroom.google.com/c/NzI3MTgzMDk2NDQx"
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
                imgUrl: "ศักดิ์ชาย สุนทรธนาภิรมย์.jpg",
                gmail: "Sakchai.s@msu.ac.th, Amorntep.m@msu.ac.th, Jatepiwint.a@msu.ac.th",
                tel: "",
                classRoomLink: "https://classroom.google.com/c/NzI4ODg0MTk2NTky"
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
                classRoomLink: "https://classroom.google.com/c/NzI4ODg0MTk2NTky"
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
                imgUrl: "กู้เกียรติ ทุดปอ.jpg", 
                gmail: "kukiat.t@msu.ac.th",
                tel: "085-5029788",
                classRoomLink: "https://classroom.google.com/c/NzI4ODgxMjczNTY1"
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
                classRoomLink: "https://classroom.google.com/c/NzI3MTgzNjY5NDg0"
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
                imgUrl: "ชนิดาพร ตุ้มปี่สุวรร.jpeg", 
                gmail: "ctumpeesuwan@yahoo.com",
                tel: "043-754245",
                classRoomLink: "https://classroom.google.com/c/NzI4ODg1MDY4NTUx"
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
                imgUrl: "สันทนา ภิรมย์เกียรติ.png", 
                gmail: "santana.p@msu.ac.th",
                tel: "",
                classRoomLink: "https://classroom.google.com/c/NzI4ODgxNjYxMjc1"
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
            teacher: "อ.ดร.วันทกาญจน์ สีมาโรฤทธิ์ การ์ด, ผศ.ดร.สุดารัตน์ ถนนแก้ว",
            bg: "#fca311cc",
            bgHover: "#d97706",
            detail: [
              {
                imgUrl: "วันทกาญจน์ สีมาโรฤทธิ์ การ์ด.jpg", 
                gmail: "wantakan.s@msu.ac.th",
                tel: "043-719800 ext. *7302,*6174",
                classRoomLink: "https://classroom.google.com/c/NzI4ODc5MDIwMDUw"
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
                imgUrl: "ธานิศา ศรีสังข์.jpg", 
                gmail: "",
                tel: "",
                classRoomLink: "https://classroom.google.com/c/NzI4ODc3MDM3NjM0"
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
                classRoomLink: "https://classroom.google.com/c/NzI3MTgzMDk2NDQx"
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
                imgUrl: "ศักดิ์ชาย สุนทรธนาภิรมย์.jpg",
                gmail: "Sakchai.s@msu.ac.th, Amorntep.m@msu.ac.th, Jatepiwint.a@msu.ac.th",
                tel: "",
                classRoomLink: "https://classroom.google.com/c/NzI4ODg0MTk2NTky"
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
                classRoomLink: "https://classroom.google.com/c/NzI4ODg0MTk2NTky"
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
                imgUrl: "กู้เกียรติ ทุดปอ.jpg", 
                gmail: "kukiat.t@msu.ac.th",
                tel: "085-5029788",
                classRoomLink: "https://classroom.google.com/c/NzI4ODgxMjczNTY1"
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
                classRoomLink: "https://classroom.google.com/c/NzI3MTgzNjY5NDg0"
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
                imgUrl: "ชนิดาพร ตุ้มปี่สุวรร.jpeg", 
                gmail: "ctumpeesuwan@yahoo.com",
                tel: "043-754245",
                classRoomLink: "https://classroom.google.com/c/NzI4ODg1MDY4NTUx"
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
                imgUrl: "สันทนา ภิรมย์เกียรติ.png", 
                gmail: "santana.p@msu.ac.th",
                tel: "",
                classRoomLink: "https://classroom.google.com/c/NzI4ODgxNjYxMjc1"
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
            teacher: "อ.ดร.วันทกาญจน์ สีมาโรฤทธิ์ การ์ด, ผศ.ดร.สุดารัตน์ ถนนแก้ว",
            bg: "#fca311cc",
            bgHover: "#d97706",
            detail: [
              {
                imgUrl: "วันทกาญจน์ สีมาโรฤทธิ์ การ์ด.jpg", 
                gmail: "wantakan.s@msu.ac.th",
                tel: "043-719800 ext. *7302,*6174",
                classRoomLink: "https://classroom.google.com/c/NzI4ODc5MDIwMDUw"
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
                imgUrl: "กิตติพงษ์ ประพันธ์.jpeg", 
                gmail: "kittiphong.p@msu.ac.th",
                tel: "043-754-321 ถึง 40 ต่อ 4825, 4826",
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
                imgUrl: "อภิญวัฒน์ โพธิ์สาน.jpeg", 
                gmail: "apinyawat.p@msu.ac.th",
                tel: "043-754-321 ต่อ 4827",
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
    title: "ม่อน",
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
                classRoomLink: "https://classroom.google.com/c/NzI3MTgzMDk2NDQx"
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
                classRoomLink: "https://classroom.google.com/c/NzI4ODg0MTk2NTky"
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
                imgUrl: "กู้เกียรติ ทุดปอ.jpg", 
                gmail: "kukiat.t@msu.ac.th",
                tel: "085-5029788",
                classRoomLink: "https://classroom.google.com/c/NzI4ODgxMjczNTY1"
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
                classRoomLink: "https://classroom.google.com/c/NzI3MTgzNjY5NDg0"
              }
            ]
          },
          {
            subject: "Cultural Tourism",
            startTime: 6,
            hours: 2,
            code: "0045009",
            section: 1,
            location: "RN1-806",
            teacher: "อ.ดร.เยาวภา นียากร",
            bg: "#d6aef7",
            bgHover: "#9b4cc4",
            detail: [
              {
                imgUrl: "เยาวภา นียากร.jpg", 
                gmail: "yaowapha.n@msu.ac.th",
                tel: "043-719800 ext. *7302,*6174",
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
            subject: "Religion and Reasoning for Living",
            startTime: 3,
            hours: 2,
            code: "0044007",
            section: 2,
            location: "RN1-710",
            teacher: "ผศ.ดร.ประภัสสร บุษหมั่น, ผศ.ดร.ธัชชัย จิตรนันท์",
            bg: "#85b6ff",
            bgHover: "#4c83d3",
            detail: [
              {
                imgUrl: "ประภัสสร บุษหมั่น.jpg", 
                gmail: "prapassorn.c@msu.ac.th",
                tel: "043754333 ต่อ 1835  มือถือ 08-1592-5295",
                classRoomLink: "#"
              }
            ]
          },
          {
            subject: "Life Skills",
            startTime: 6,
            hours: 2,
            code: "0042008",
            section: 2,
            location: "RN1-710",
            teacher: "อ.บวรพจน์ ชมภูนุช, ผศ.ดร.สุดารัตน์ ถนนแก้ว",
            bg: "#fca311cc",
            bgHover: "#d97706",
            detail: [
              {
                imgUrl: "บวรพจน์ ชมภูนุช.jpg", 
                gmail: "bovornpot.c@msu.ac.th ",
                tel: "043-721764",
                classRoomLink: "#"
              }
            ]
          },
          {
            subject: "Design Thinking",
            startTime: 8,
            hours: 2,
            code: "0043001",
            section: 8,
            location: "RN1-604",
            teacher: "รศ.ดร.ชัยสิทธิ์ สิทธิเวช",
            bg: "#c2f784",
            bgHover: "#4ADE80",
            detail: [
              {
                imgUrl: "สันทนา ภิรมย์เกียรติ.png", 
                gmail: "santana.p@msu.ac.th",
                tel: "",
                classRoomLink: "https://classroom.google.com/c/NzI4ODgxNjYxMjc1"
              }
            ]
          },
        ]
      },
      {
        day: "Fri",
        subject: [
          {
            subject: "Communicative English",
            startTime: 6,
            hours: 2,
            code: "0041002",
            section: 28,
            location: "RN1-507",
            teacher: "อ.ก่อกิจบุญ ฟูคำ",
            bg: "#f9a1d8cc",
            bgHover: "#9b0f45",
            detail: [
              {
                imgUrl: "ก่อกิจบุญ ฟูคำ.jpeg", 
                gmail: "kokitboon.s@msu.ac.th",
                tel: "",
                classRoomLink: "#"
              }
            ]
          },
        ]
      },
    ]
  },
  {},
];