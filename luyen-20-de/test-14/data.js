const questions = [
  {
    id: 1,
    question: "_______ you visit him, give him my best wishes.",
    options: ["Could", "Would", "Should", "Might"],
    correct: 2,
    explanation: "Cấu trúc đảo điều kiện: Should + S + V = If you visit him. Dịch: Nếu bạn có dịp thăm anh ấy, hãy gửi lời chúc tốt đẹp nhất của tôi."
  },
  {
    id: 2,
    question: "The beautiful woman has a busy _______ life.",
    options: ["society", "socialize", "social", "socializing"],
    correct: 2,
    explanation: "Tính từ 'social' bổ nghĩa cho danh từ 'life'. Dịch: Người phụ nữ xinh đẹp đó có một cuộc sống xã hội bận rộn."
  },
  {
    id: 3,
    question: "The patient who suffers from lung cancer is being injected with a special _______.",
    options: ["chemist", "chemistry", "chemical", "chemically"],
    correct: 2,
    explanation: "Chemical (danh từ): chất hóa học/thuốc. Dịch: Bệnh nhân bị ung thư phổi đang được tiêm một loại hóa chất đặc biệt."
  },
  {
    id: 4,
    question: "Today women do not have _______ they used to years ago.",
    options: [
      "as much children as",
      "as many children as",
      "as children as",
      "more children as"
    ],
    correct: 1,
    explanation: "Children là danh từ đếm được → dùng many. Cấu trúc so sánh: as many … as. Dịch: Ngày nay phụ nữ không có nhiều con như trước đây."
  },
  {
    id: 5,
    question: "_______ he insisted he was innocent, _______ they seemed to believe him.",
    options: [
      "The more/ the less",
      "More/ less",
      "The most/ the least",
      "Most/ least"
    ],
    correct: 0,
    explanation: "Cấu trúc so sánh kép: The more…, the less…. Dịch: Anh ấy càng khăng khăng mình vô tội thì họ càng ít tin anh ấy."
  },
  {
    id: 6,
    question: "The book _______ author is now being shown in the news has become a bestseller.",
    options: ["that", "which", "whose", "whom"],
    correct: 2,
    explanation: "Whose + N chỉ sự sở hữu. Dịch: Cuốn sách mà tác giả của nó hiện đang xuất hiện trên bản tin đã trở thành sách bán chạy."
  },
  {
    id: 7,
    question: "We postponed _______ any decision in the meeting.",
    options: ["make", "to make", "making", "made"],
    correct: 2,
    explanation: "Postpone + V-ing. Dịch: Chúng tôi đã hoãn việc đưa ra bất kỳ quyết định nào trong cuộc họp."
  },
  {
    id: 8,
    question: "“Go on, Susan! Apply the job,” the father.",
    options: [
      "The father invited Susan to apply the job.",
      "The father denied applying the job.",
      "The father encouraged Susan to apply the job.",
      "The father wanted Susan not to apply the job."
    ],
    correct: 2,
    explanation: "Go on! → lời khích lệ. Dịch: Người cha khuyến khích Susan nộp đơn xin việc."
  },
  {
    id: 9,
    question: "John wrote this novel, didn’t he?",
    options: [
      "This novel was written by John, didn’t he?",
      "This novel was written by John, wasn’t it?",
      "Did this novel be written by John, didn’t he?",
      "Did this novel be written by John, didn’t it?"
    ],
    correct: 1,
    explanation: "Câu bị động + câu hỏi đuôi: this novel → it → wasn’t it. Dịch: Cuốn tiểu thuyết này do John viết, đúng không?"
  },
  {
    id: 10,
    question: "Learning English _______ easy",
    options: [
      "says not to be",
      "said to be not",
      "is said be not",
      "is said not to be"
    ],
    correct: 3,
    explanation: "Cấu trúc bị động với 'say': S + is said + (not) to V. Dịch: Học tiếng Anh được cho là không dễ."
  },
  {
    id: 11,
    question: "I wish _______ at the seaside now.",
    options: ["I am", "if only I were", "I had been", "I were"],
    correct: 3,
    explanation: "Wish trái hiện tại: wish + S + were/V-ed. Dịch: Tôi ước mình đang ở bãi biển lúc này."
  },
  {
    id: 12,
    question: "Practice more and more _______ you can never speak English fluently.",
    options: ["and", "or", "in case", "if"],
    correct: 1,
    explanation: "Cấu trúc mệnh lệnh + or + kết quả xấu. Dịch: Hãy luyện tập nhiều hơn nếu không bạn sẽ không bao giờ nói tiếng Anh trôi chảy."
  },
  {
    id: 13,
    question: "She _______ be able to come on holiday next month if her parents give her permission.",
    options: ["will", "can", "could", "mustn’t"],
    correct: 0,
    explanation: "Câu điều kiện loại 1 → dùng will. Dịch: Cô ấy sẽ có thể đi nghỉ vào tháng tới nếu bố mẹ cho phép."
  },
  {
    id: 14,
    question: "We’re going to have _______ down.",
    options: [
      "knocked that wall",
      "knocking that wall",
      "that wall knocking",
      "that wall knocked"
    ],
    correct: 3,
    explanation: "Cấu trúc nhờ vả bị động: have + O + V3. Dịch: Chúng tôi sẽ cho người phá bức tường đó."
  },
  {
    id: 15,
    question: "I’ll buy a ticket as soon as I _______ my pocket money.",
    options: ["will get", "get", "would get", "got"],
    correct: 1,
    explanation: "Mệnh đề thời gian: as soon as + hiện tại đơn. Dịch: Tôi sẽ mua vé ngay khi tôi nhận được tiền tiêu vặt."
  },
  {
    id: 16,
    question: "Marina was _______ tears after the lesson, so I asked her what was wrong.",
    options: ["to", "at", "on", "in"],
    correct: 3,
    explanation: "Cụm cố định: in tears = khóc. Dịch: Marina khóc sau buổi học nên tôi hỏi cô ấy có chuyện gì."
  },
  {
    id: 17,
    question: "With the Gema XTI binoculars, users can _______ see objects that are more than 100 meters away.",
    options: ["ease", "easy", "easily", "easier"],
    correct: 2,
    explanation: "Trạng từ 'easily' bổ nghĩa cho động từ see. Dịch: Với ống nhòm Gema XTI, người dùng có thể dễ dàng nhìn thấy vật cách hơn 100 mét."
  },
  {
    id: 18,
    question: "Mother: Could you do me a favor?\t\t- Kate: _______.",
    options: [
      "No, thanks. I’m fine.",
      "Yes, that’s kind of you.",
      "Yes, sure.",
      "Yes, thank you."
    ],
    correct: 2,
    explanation: "Đáp lời nhờ vả → Yes, sure. Dịch: – Con có thể giúp mẹ một việc không? – Vâng, được ạ."
  },
  {
    id: 19,
    question: "We take _______ in doing the washing-up, cleaning the floor and watering the flowers.",
    options: ["turn", "out", "around", "turns"],
    correct: 3,
    explanation: "Cụm cố định: take turns = thay phiên nhau. Dịch: Chúng tôi thay phiên nhau rửa bát, lau sàn và tưới hoa."
  },
  {
    id: 20,
    question: "Her husband treated her badly. I’m surprised she _______ it for so long.",
    options: ["put up with", "put off", "put through", "put up"],
    correct: 0,
    explanation: "Put up with = chịu đựng. Dịch: Chồng cô ấy đối xử tệ. Tôi ngạc nhiên vì cô ấy đã chịu đựng điều đó lâu như vậy."
  },
{
    id: 21,
    passage: "In the United States of America, the national language is (21) _______ English. Four hundred years ago, some English people came to North America to live and they (22) _______ the English language to this country. Now in the USA, people (23) _______ American English. Most of the words are the (24) _______ in American and British English, but the Americans say some English words not as people (25_______ in England.",
    question: "In the United States of America, the national language is _______ English.",
    options: ["also", "like", "as well", "too"],
    correct: 0,
    explanation: "Cấu trúc đúng: also + danh từ.\n→ \"also English\" dùng để bổ sung thông tin.\nDịch: Ở Hoa Kỳ, ngôn ngữ quốc gia cũng là tiếng Anh."
  },
  {
    id: 22,
    passage: "In the United States of America, the national language is (21) _______ English. Four hundred years ago, some English people came to North America to live and they (22) _______ the English language to this country. Now in the USA, people (23) _______ American English. Most of the words are the (24) _______ in American and British English, but the Americans say some English words not as people (25_______ in England.",
    question: "Four hundred years ago, some English people came to North America to live and they _______ the English language to this country.",
    options: ["carried", "took", "brought", "had"],
    correct: 2,
    explanation: "Bring sth to somewhere: mang cái gì đến đâu.\nDịch: Họ đã mang tiếng Anh đến đất nước này."
  },
  {
    id: 23,
    passage: "In the United States of America, the national language is (21) _______ English. Four hundred years ago, some English people came to North America to live and they (22) _______ the English language to this country. Now in the USA, people (23) _______ American English. Most of the words are the (24) _______ in American and British English, but the Americans say some English words not as people (25_______ in England.",
    question: "Now in the USA, people _______ American English.",
    options: ["say", "speak", "talk", "tell"],
    correct: 1,
    explanation: "Speak + language: nói một ngôn ngữ.\nDịch: Hiện nay ở Mỹ, người ta nói tiếng Anh – Mỹ."
  },
  {
    id: 24,
    passage: "In the United States of America, the national language is (21) _______ English. Four hundred years ago, some English people came to North America to live and they (22) _______ the English language to this country. Now in the USA, people (23) _______ American English. Most of the words are the (24) _______ in American and British English, but the Americans say some English words not as people (25_______ in England.",
    question: "Most of the words are the _______ in American and British English.",
    options: ["various", "similar", "same", "like"],
    correct: 2,
    explanation: "The same + danh từ: giống nhau.\nDịch: Hầu hết các từ đều giống nhau trong tiếng Anh – Mỹ và tiếng Anh – Anh."
  },
  {
    id: 25,
    passage: "In the United States of America, the national language is (21) _______ English. Four hundred years ago, some English people came to North America to live and they (22) _______ the English language to this country. Now in the USA, people (23) _______ American English. Most of the words are the (24) _______ in American and British English, but the Americans say some English words not as people (25_______ in England.",
    question: "The Americans say some English words not as people _______ in England.",
    options: ["do", "say", "talk", "speak"],
    correct: 1,
    explanation: "Say words: nói từ.\nDịch: Người Mỹ phát âm một số từ tiếng Anh không giống cách người Anh nói."
  },
{
    id: 26,
    passage: "Staying in hotels and resorts has been a traditional part of travel since the beginning of mass tourism. But nowadays, many tourists want a more intimate experience. For this reason, they are choosing to “go native”. This often means staying in the kinds of places that local people inhabit. In big cities, you can try staying with the friend of a friend. You may end up sleeping on the couch or the floor, but the advantages outweigh the discomfort. The biggest plus is that you’ll be staying with a local and seeing the city from a local perspective.\n\nAnother option is house-swapping. Several websites allow you to connect with people who want to trade living situations. It’s usual to exchange emails about favourite places in the city before the swap, meaning you can have a truly local experience. But of course, you can only do this if you don't mind having strangers staying in your house.\n\nFor the more adventurous, staying in a native structure in an African village or a hut on the water in Vietnam or Thailand can be a real thrill. These might not even include plumbing or electricity, and that is part of the charm. The experience of dealing with oil lamps and carrying water really gives you a sense of how the people live.\n\nNo matter how unadventurous you feel, you might want to consider crossing hotels off your list. Getting to know the local way of life is most valuable part of travel. And what better way is there to do this than staying where the local people actually live?",
    question: "What is the passage mainly about?",
    options: [
      "Adventurous holiday activities",
      "Main tourist attractions in Asia",
      "New holiday accommodation trend",
      "World heritage sites"
    ],
    correct: 2,
    explanation: "Bài đọc tập trung vào xu hướng du lịch mới: không ở khách sạn mà ở cùng người bản địa, đổi nhà, sống như người địa phương.\n→ Dịch: Đoạn văn chủ yếu nói về xu hướng chỗ ở du lịch mới."
  },
  {
    id: 27,
    passage: "Staying in hotels and resorts has been a traditional part of travel since the beginning of mass tourism. But nowadays, many tourists want a more intimate experience. For this reason, they are choosing to “go native”. This often means staying in the kinds of places that local people inhabit. In big cities, you can try staying with the friend of a friend. You may end up sleeping on the couch or the floor, but the advantages outweigh the discomfort. The biggest plus is that you’ll be staying with a local and seeing the city from a local perspective.\n\nAnother option is house-swapping. Several websites allow you to connect with people who want to trade living situations. It’s usual to exchange emails about favourite places in the city before the swap, meaning you can have a truly local experience. But of course, you can only do this if you don't mind having strangers staying in your house.\n\nFor the more adventurous, staying in a native structure in an African village or a hut on the water in Vietnam or Thailand can be a real thrill. These might not even include plumbing or electricity, and that is part of the charm. The experience of dealing with oil lamps and carrying water really gives you a sense of how the people live.\n\nNo matter how unadventurous you feel, you might want to consider crossing hotels off your list. Getting to know the local way of life is most valuable part of travel. And what better way is there to do this than staying where the local people actually live?",
    question: "The word “they” in paragraph 1 refers to",
    options: [
      "local people",
      "tourists",
      "hotels",
      "resorts"
    ],
    correct: 1,
    explanation: "\"They are choosing to go native\" → they = many tourists.\nDịch: Vì lý do này, nhiều du khách đang chọn cách “sống như người bản địa”."
  },
  {
    id: 28,
    passage: "Staying in hotels and resorts has been a traditional part of travel since the beginning of mass tourism. But nowadays, many tourists want a more intimate experience. For this reason, they are choosing to “go native”. This often means staying in the kinds of places that local people inhabit. In big cities, you can try staying with the friend of a friend. You may end up sleeping on the couch or the floor, but the advantages outweigh the discomfort. The biggest plus is that you’ll be staying with a local and seeing the city from a local perspective.\n\nAnother option is house-swapping. Several websites allow you to connect with people who want to trade living situations. It’s usual to exchange emails about favourite places in the city before the swap, meaning you can have a truly local experience. But of course, you can only do this if you don't mind having strangers staying in your house.\n\nFor the more adventurous, staying in a native structure in an African village or a hut on the water in Vietnam or Thailand can be a real thrill. These might not even include plumbing or electricity, and that is part of the charm. The experience of dealing with oil lamps and carrying water really gives you a sense of how the people live.\n\nNo matter how unadventurous you feel, you might want to consider crossing hotels off your list. Getting to know the local way of life is most valuable part of travel. And what better way is there to do this than staying where the local people actually live?",
    question: "What is the biggest advantage of tourist’s going native?",
    options: [
      "It is cheaper than staying in other kinds of accommodation.",
      "It offers them opportunities to make new friends.",
      "It is more comfortable than staying in hotels and resorts.",
      "It enables them to experience the local lifestyle."
    ],
    correct: 3,
    explanation: "The biggest plus is seeing the city from a local perspective.\nDịch: Ưu điểm lớn nhất là giúp du khách trải nghiệm lối sống của người địa phương."
  },
  {
    id: 29,
    passage: "Staying in hotels and resorts has been a traditional part of travel since the beginning of mass tourism. But nowadays, many tourists want a more intimate experience. For this reason, they are choosing to “go native”. This often means staying in the kinds of places that local people inhabit. In big cities, you can try staying with the friend of a friend. You may end up sleeping on the couch or the floor, but the advantages outweigh the discomfort. The biggest plus is that you’ll be staying with a local and seeing the city from a local perspective.\n\nAnother option is house-swapping. Several websites allow you to connect with people who want to trade living situations. It’s usual to exchange emails about favourite places in the city before the swap, meaning you can have a truly local experience. But of course, you can only do this if you don't mind having strangers staying in your house.\n\nFor the more adventurous, staying in a native structure in an African village or a hut on the water in Vietnam or Thailand can be a real thrill. These might not even include plumbing or electricity, and that is part of the charm. The experience of dealing with oil lamps and carrying water really gives you a sense of how the people live.\n\nNo matter how unadventurous you feel, you might want to consider crossing hotels off your list. Getting to know the local way of life is most valuable part of travel. And what better way is there to do this than staying where the local people actually live?",
    question: "The word “charm” in paragraph 3 is closest in meaning to",
    options: [
      "safety",
      "attraction",
      "danger",
      "price"
    ],
    correct: 1,
    explanation: "Charm = attraction (sự hấp dẫn).\nDịch: Việc thiếu tiện nghi lại chính là một phần sức hấp dẫn của trải nghiệm."
  },
  {
    id: 30,
    passage: "Staying in hotels and resorts has been a traditional part of travel since the beginning of mass tourism. But nowadays, many tourists want a more intimate experience. For this reason, they are choosing to “go native”. This often means staying in the kinds of places that local people inhabit. In big cities, you can try staying with the friend of a friend. You may end up sleeping on the couch or the floor, but the advantages outweigh the discomfort. The biggest plus is that you’ll be staying with a local and seeing the city from a local perspective.\n\nAnother option is house-swapping. Several websites allow you to connect with people who want to trade living situations. It’s usual to exchange emails about favourite places in the city before the swap, meaning you can have a truly local experience. But of course, you can only do this if you don't mind having strangers staying in your house.\n\nFor the more adventurous, staying in a native structure in an African village or a hut on the water in Vietnam or Thailand can be a real thrill. These might not even include plumbing or electricity, and that is part of the charm. The experience of dealing with oil lamps and carrying water really gives you a sense of how the people live.\n\nNo matter how unadventurous you feel, you might want to consider crossing hotels off your list. Getting to know the local way of life is most valuable part of travel. And what better way is there to do this than staying where the local people actually live?",
    question: "Which of the following is mentioned in the passage?",
    options: [
      "Dealing with oil lamps is the most thrilling experience for tourists to Vietnam.",
      "Tourists to Thailand prefer staying in a native structure to staying in a hut.",
      "Staying with local people is more popular than staying in hotels and resorts.",
      "There are several websites used for house-swapping purposes."
    ],
    correct: 3,
    explanation: "Đoạn 2 nêu rõ: Several websites allow you to connect with people who want to trade living situations.\nDịch: Có một số trang web được dùng cho việc đổi nhà."
  }
];
