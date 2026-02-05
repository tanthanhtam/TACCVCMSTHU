const questions = [
{
id: 1,
question: "I’m going to _______ by the dentist next week.",
options: ["have my teeth checked", "check my teeth", "get checked my teeth", "have checked my teeth"],
correct: 0,
explanation: "Cấu trúc nhờ vả: have + O + V3. Dịch: Tôi sẽ đi kiểm tra răng bởi nha sĩ vào tuần sau."
},
{
id: 2,
question: "The idea of working at home is moving nearer to _______ a reality.",
options: ["become", "the becoming", "becoming", "to become"],
correct: 2,
explanation: "To là giới từ → theo sau là V-ing. Dịch: Ý tưởng làm việc tại nhà đang dần trở thành hiện thực."
},
{
id: 3,
question: "I’m tired of eating spaghetti, I wish they _______ change the menu!",
options: ["did", "could", "should", "would"],
correct: 3,
explanation: "Wish + would: mong người khác thay đổi. Dịch: Tôi ước họ sẽ thay đổi thực đơn."
},
{
id: 4,
question: "The doctor said, “I’ll be back tomorrow.” The doctor said that he ______.",
options: [
"would be back the following day",
"will be back tomorrow",
"will come back again",
"must come back the next day"
],
correct: 0,
explanation: "Tường thuật: will → would; tomorrow → the following day. Dịch: Bác sĩ nói rằng ông sẽ quay lại vào ngày hôm sau."
},
{
id: 5,
question: "Take some more money _______ it costs more than you think.",
options: ["in case", "provided", "whether", "otherwise"],
correct: 0,
explanation: "In case: phòng khi. Dịch: Hãy mang thêm tiền phòng khi nó tốn nhiều hơn bạn nghĩ."
},
{
id: 6,
question: "The rock is _______ for us to climb. We’ll never make it.",
options: ["too difficult", "difficult too", "difficult enough", "enough clever"],
correct: 0,
explanation: "Too + adj + to V: quá … để. Dịch: Tảng đá quá khó để leo."
},
{
id: 7,
question: "That girl is quite cheerful _______ being very ill.",
options: ["in spite of", "despite of", "instead of", "even though"],
correct: 0,
explanation: "In spite of + V-ing/N. Dịch: Cô ấy khá vui vẻ mặc dù đang rất ốm."
},
{
id: 8,
question: "I remember quite clearly _______ the door before I left.",
options: ["to lock", "to locking", "the locking of", "locking"],
correct: 3,
explanation: "Remember + V-ing: nhớ đã làm. Dịch: Tôi nhớ rõ là đã khóa cửa trước khi đi."
},
{
id: 9,
question: "The most serious cause of pollution is the _______ of industry.",
options: ["develop", "development", "developmental", "developed"],
correct: 1,
explanation: "The + noun. Dịch: Nguyên nhân nghiêm trọng nhất của ô nhiễm là sự phát triển của công nghiệp."
},
{
id: 10,
question: "I saw a lot of new people at the party, _______ seemed familiar.",
options: ["which", "that", "some of that", "some of whom"],
correct: 3,
explanation: "Some of whom dùng cho người. Dịch: Tôi thấy nhiều người mới, một vài người trong số họ trông quen."
},
{
id: 11,
question: "Although several methods have been applied, the water seems to be _______.",
options: ["more than polluted", "so as polluted", "more as polluted", "more and more polluted"],
correct: 3,
explanation: "So sánh kép: more and more + adj. Dịch: Nước có vẻ ngày càng ô nhiễm."
},
{
id: 12,
question: "Everybody congratulated him on his successful journey to explore the Everest.",
options: [
"His successful journey to explore the Everest was congratulated on him.",
"His successful journey was congratulated on him to explore the Everest.",
"He was congratulated on his successful journey to explore the Everest.",
"He was congratulated by anybody on his successful journey to explore the Everest."
],
correct: 2,
explanation: "Bị động đúng: be congratulated on. Dịch: Anh ấy được chúc mừng về chuyến thám hiểm thành công."
},
{
id: 13,
question: "Are you fond of the job they have offered you?",
options: [
"Are you fond of the job which has been offered to you?",
"Have they offered you the job that you are fond of?",
"Are you fond of the job has been offered to you?",
"Have you been fond of the job which has offered to you?"
],
correct: 0,
explanation: "Mệnh đề quan hệ bị động đúng. Dịch: Bạn có thích công việc đã được đề nghị cho bạn không?"
},
{
id: 14,
question: "You should be aware _______.",
options: [
"of how your eating is related with your stress level",
"how your eating is related with your stress level",
"of how is your eating related with your stress level",
"is how your eating is related with your stress level"
],
correct: 0,
explanation: "Aware of + mệnh đề gián tiếp. Dịch: Bạn nên nhận thức được việc ăn uống liên quan thế nào đến mức độ căng thẳng."
},
{
id: 15,
question: "At first I was very angry _______ his behaviors but later when he apologized _______ doing like that I forgave him.",
options: ["in/ from", "at/ for", "on/ in", "of/ with"],
correct: 1,
explanation: "Angry at; apologize for. Dịch: Ban đầu tôi rất giận hành vi của anh ấy nhưng sau khi anh xin lỗi tôi đã tha thứ."
},
{
id: 16,
question: "I can go _______ my own. You needn’t come _______ me.",
options: ["on/ with", "though/ about", "up/ over", "for/ to"],
correct: 0,
explanation: "On my own; come with. Dịch: Tôi có thể đi một mình, bạn không cần đi cùng."
},
{
id: 17,
question: "The airhostess asked the passengers to do _______ the seat-belt before the plane took _______.",
options: ["up/ off", "on/ away", "over/ in", "for/ up"],
correct: 0,
explanation: "Do up: thắt; take off: cất cánh. Dịch: Tiếp viên yêu cầu hành khách thắt dây an toàn trước khi máy bay cất cánh."
},
{
id: 18,
question: "I have to send _______ a tow truck because my car broke _______.",
options: ["for/ down", "under/ of", "up/ into", "in/ off"],
correct: 0,
explanation: "Send for; break down. Dịch: Tôi phải gọi xe kéo vì xe tôi bị hỏng."
},
{
id: 19,
question: "I do not like football, _______ my brother can play football very well.",
options: ["as", "and", "while", "or"],
correct: 2,
explanation: "While: diễn tả sự đối lập. Dịch: Tôi không thích bóng đá trong khi anh tôi chơi rất giỏi."
},
{
id: 20,
question: "Customer: Could you help me to send this document to my office by fax? Clerk: _______.",
options: ["Certainly.", "That’s right.", "Excuse me!", "Don’t worry."],
correct: 0,
explanation: "Certainly dùng để đồng ý lịch sự. Dịch: Chắc chắn rồi."
},
  {
    id: 21,
    passage: "Easter Island is a small triangle of rock situated in the Pacific Ocean. It’s about 2,000 miles from the nearest city. Easter Island is (21) _______ for its statues. Hundreds of these huge, stone faces can be (22) _______ all over the island. Who made them? How did they move these giant pieces of rock? What happened to the people who lived there? Studies show that people (23) _______ arrived on the island about 1600 years ago. They had a very advanced culture. They made many objects and they had their own written language. However, the number of people on the island grew and grew (24) _______ it reached about 10,000 people. Soon there were too many people and there wasn’t (25) _______ food to eat.",
    question: "Easter Island is _______ for its statues.",
    options: ["important", "interesting", "famous", "fascinating"],
    correct: 2,
    explanation: "Be famous for: nổi tiếng vì."
  },
  {
    id: 22,
    passage: "Easter Island is a small triangle of rock situated in the Pacific Ocean. It’s about 2,000 miles from the nearest city. Easter Island is (21) _______ for its statues. Hundreds of these huge, stone faces can be (22) _______ all over the island. Who made them? How did they move these giant pieces of rock? What happened to the people who lived there? Studies show that people (23) _______ arrived on the island about 1600 years ago. They had a very advanced culture. They made many objects and they had their own written language. However, the number of people on the island grew and grew (24) _______ it reached about 10,000 people. Soon there were too many people and there wasn’t (25) _______ food to eat.",
    question: "Hundreds of these huge, stone faces can be _______ all over the island.",
    options: ["looked", "found", "situated", "located"],
    correct: 1,
    explanation: "Found: được tìm thấy."
  },
  {
    id: 23,
    passage: "Easter Island is a small triangle of rock situated in the Pacific Ocean. It’s about 2,000 miles from the nearest city. Easter Island is (21) _______ for its statues. Hundreds of these huge, stone faces can be (22) _______ all over the island. Who made them? How did they move these giant pieces of rock? What happened to the people who lived there? Studies show that people (23) _______ arrived on the island about 1600 years ago. They had a very advanced culture. They made many objects and they had their own written language. However, the number of people on the island grew and grew (24) _______ it reached about 10,000 people. Soon there were too many people and there wasn’t (25) _______ food to eat.",
    question: "Studies show that people _______ arrived on the island about 1600 years ago.",
    options: ["once", "first", "just", "already"],
    correct: 1,
    explanation: "First arrived: lần đầu đến."
  },
  {
    id: 24,
    passage: "Easter Island is a small triangle of rock situated in the Pacific Ocean. It’s about 2,000 miles from the nearest city. Easter Island is (21) _______ for its statues. Hundreds of these huge, stone faces can be (22) _______ all over the island. Who made them? How did they move these giant pieces of rock? What happened to the people who lived there? Studies show that people (23) _______ arrived on the island about 1600 years ago. They had a very advanced culture. They made many objects and they had their own written language. However, the number of people on the island grew and grew (24) _______ it reached about 10,000 people. Soon there were too many people and there wasn’t (25) _______ food to eat.",
    question: "The number of people grew and grew _______ it reached about 10,000.",
    options: ["so", "until", "although", "because"],
    correct: 1,
    explanation: "Until: cho đến khi."
  },
  {
    id: 25,
    passage: "Easter Island is a small triangle of rock situated in the Pacific Ocean. It’s about 2,000 miles from the nearest city. Easter Island is (21) _______ for its statues. Hundreds of these huge, stone faces can be (22) _______ all over the island. Who made them? How did they move these giant pieces of rock? What happened to the people who lived there? Studies show that people (23) _______ arrived on the island about 1600 years ago. They had a very advanced culture. They made many objects and they had their own written language. However, the number of people on the island grew and grew (24) _______ it reached about 10,000 people. Soon there were too many people and there wasn’t (25) _______ food to eat.",
    question: "There wasn’t _______ food to eat.",
    options: ["many", "some", "too", "enough"],
    correct: 3,
    explanation: "Enough + noun: đủ."
  },
{
  id: 26,
  passage: "Notting Hill Carnival takes place in London every August bank holiday, and is the most colourful and largest street event in the UK. The festival celebrates the traditions of the Afro-Caribbean community, who emigrated to England from the West Indies in the 1950s. They brought with them the Caribbean idea of the carnival, with colourful costumes, processions, steel bands and street dancing. Preparations for the carnival start many months in advance. Costumes need to be made, and floats built, ready for the carnival street procession. Steel bands practise traditional Caribbean music on instruments built from used oil barrels. Just before the festival, the streets are decorated with yellow, green and red streamers, and amplifying devices are set in place, to carry the rhythmic sounds over the roar of the London traffic. The carnival is celebrated over three days, and is full of music and colour. Processions of steel and brass bands, floats, and dancers in colourful costumes make their way through the narrow London streets, watched by tens of thousands of people. The streets are lined with stalls selling tropical fruits, such as fresh mangoes, watermelons and pineapples. Everyone dances - young and old, black and white - and even the policemen on duty take part in the fun. For these three days in August, a little Caribbean magic touches the streets of London.",
  question: "What’s the writer’s main purpose in writing the text?",
  options: [
    "to encourage people to celebrate the traditions of black people",
    "to talk about problems with the Afro-Caribbean community",
    "to recommend people spend more time outdoors",
    "to understand and describe the Notting Hill Carnival"
  ],
  correct: 3,
  explanation: "Toàn bài mang tính mô tả lễ hội → describe the Notting Hill Carnival."
},
{
  id: 27,
  passage: "Notting Hill Carnival takes place in London every August bank holiday, and is the most colourful and largest street event in the UK. The festival celebrates the traditions of the Afro-Caribbean community, who emigrated to England from the West Indies in the 1950s. They brought with them the Caribbean idea of the carnival, with colourful costumes, processions, steel bands and street dancing. Preparations for the carnival start many months in advance. Costumes need to be made, and floats built, ready for the carnival street procession. Steel bands practise traditional Caribbean music on instruments built from used oil barrels. Just before the festival, the streets are decorated with yellow, green and red streamers, and amplifying devices are set in place, to carry the rhythmic sounds over the roar of the London traffic. The carnival is celebrated over three days, and is full of music and colour. Processions of steel and brass bands, floats, and dancers in colourful costumes make their way through the narrow London streets, watched by tens of thousands of people. The streets are lined with stalls selling tropical fruits, such as fresh mangoes, watermelons and pineapples. Everyone dances - young and old, black and white - and even the policemen on duty take part in the fun. For these three days in August, a little Caribbean magic touches the streets of London.",
  question: "According to the passage, Notting Hill Carnival",
  options: [
    "takes place every Bank Holiday",
    "is held annually in August",
    "is organized by the Bank of England",
    "is held at the beginning of August"
  ],
  correct: 1,
  explanation: "Đoạn 1: takes place every August bank holiday → hàng năm vào tháng 8."
},
{
  id: 28,
  passage: "Notting Hill Carnival takes place in London every August bank holiday, and is the most colourful and largest street event in the UK. The festival celebrates the traditions of the Afro-Caribbean community, who emigrated to England from the West Indies in the 1950s. They brought with them the Caribbean idea of the carnival, with colourful costumes, processions, steel bands and street dancing. Preparations for the carnival start many months in advance. Costumes need to be made, and floats built, ready for the carnival street procession. Steel bands practise traditional Caribbean music on instruments built from used oil barrels. Just before the festival, the streets are decorated with yellow, green and red streamers, and amplifying devices are set in place, to carry the rhythmic sounds over the roar of the London traffic. The carnival is celebrated over three days, and is full of music and colour. Processions of steel and brass bands, floats, and dancers in colourful costumes make their way through the narrow London streets, watched by tens of thousands of people. The streets are lined with stalls selling tropical fruits, such as fresh mangoes, watermelons and pineapples. Everyone dances - young and old, black and white - and even the policemen on duty take part in the fun. For these three days in August, a little Caribbean magic touches the streets of London.",
  question: "During the Notting Hill Carnival",
  options: [
    "the participants decorate the streets with colourful streamers",
    "preparations start early in the morning",
    "music and colour fill the streets of London",
    "traffic is banned from the streets"
  ],
  correct: 2,
  explanation: "Đoạn giữa: full of music and colour → music and colour fill the streets."
},
{
  id: 29,
  passage: "Notting Hill Carnival takes place in London every August bank holiday, and is the most colourful and largest street event in the UK. The festival celebrates the traditions of the Afro-Caribbean community, who emigrated to England from the West Indies in the 1950s. They brought with them the Caribbean idea of the carnival, with colourful costumes, processions, steel bands and street dancing. Preparations for the carnival start many months in advance. Costumes need to be made, and floats built, ready for the carnival street procession. Steel bands practise traditional Caribbean music on instruments built from used oil barrels. Just before the festival, the streets are decorated with yellow, green and red streamers, and amplifying devices are set in place, to carry the rhythmic sounds over the roar of the London traffic. The carnival is celebrated over three days, and is full of music and colour. Processions of steel and brass bands, floats, and dancers in colourful costumes make their way through the narrow London streets, watched by tens of thousands of people. The streets are lined with stalls selling tropical fruits, such as fresh mangoes, watermelons and pineapples. Everyone dances - young and old, black and white - and even the policemen on duty take part in the fun. For these three days in August, a little Caribbean magic touches the streets of London.",
  question: "The writer claims that",
  options: [
    "the carnival has been organized since at least the 1950s",
    "tens of thousands of people prepare the carnival",
    "the dancers wear special colourful costumes",
    "only black people dance in the carnival"
  ],
  correct: 2,
  explanation: "Đoạn 2 & 3: dancers in colourful costumes."
},
{
  id: 30,
  passage: "Notting Hill Carnival takes place in London every August bank holiday, and is the most colourful and largest street event in the UK. The festival celebrates the traditions of the Afro-Caribbean community, who emigrated to England from the West Indies in the 1950s. They brought with them the Caribbean idea of the carnival, with colourful costumes, processions, steel bands and street dancing. Preparations for the carnival start many months in advance. Costumes need to be made, and floats built, ready for the carnival street procession. Steel bands practise traditional Caribbean music on instruments built from used oil barrels. Just before the festival, the streets are decorated with yellow, green and red streamers, and amplifying devices are set in place, to carry the rhythmic sounds over the roar of the London traffic. The carnival is celebrated over three days, and is full of music and colour. Processions of steel and brass bands, floats, and dancers in colourful costumes make their way through the narrow London streets, watched by tens of thousands of people. The streets are lined with stalls selling tropical fruits, such as fresh mangoes, watermelons and pineapples. Everyone dances - young and old, black and white - and even the policemen on duty take part in the fun. For these three days in August, a little Caribbean magic touches the streets of London.",
  question: "Although the carnival celebrates black British traditions,",
  options: [
    "everyone seems to participate in it",
    "only Caribbean people take part in it",
    "it is becoming popular among white people recently",
    "people from all over the world come to watch it"
  ],
  correct: 0,
  explanation: "Everyone dances – young and old, black and white."
}
];
