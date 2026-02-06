const questions = [
  {
    id: 1,
    question: "Thank you very much for your donation, Mr. Robinson.” 	“_______.”",
    options: [
      "Delighted I was able to help",
      "I see.",
      "You are right",
      "You can say that again."
    ],
    correct: 0,
    explanation: "Đáp lại lời cảm ơn lịch sự. Dịch: “Rất vui vì tôi có thể giúp được.”"
  },
  {
    id: 2,
    question: "The cuisine of France is _______.",
    options: [
      "more famous than that of England",
      "famous than the cuisine of England",
      "more famous than which of England",
      "as famous than that of England"
    ],
    correct: 0,
    explanation: "So sánh hơn: more + adj + than + that of. Dịch: Ẩm thực Pháp nổi tiếng hơn ẩm thực Anh."
  },
  {
    id: 3,
    question: "Do you get tired _______ answering the same questions every day?\n- No, I am interested _______ my work.",
    options: ["through/ about", "of/ in", "from/ on", "for/ to"],
    correct: 1,
    explanation: "Cụm cố định: tired of, interested in. Dịch: Bạn có mệt vì phải trả lời cùng những câu hỏi mỗi ngày không? – Không, tôi hứng thú với công việc của mình."
  },
  {
    id: 4,
    question: "What _______ when the accident _______?",
    options: [
      "have you been doing/ occurs",
      "are you doing/ will occur",
      "will you be going/ has occurred",
      "were you doing/ occurred"
    ],
    correct: 3,
    explanation: "Quá khứ tiếp diễn + quá khứ đơn. Dịch: Bạn đang làm gì khi tai nạn xảy ra?"
  },
  {
    id: 5,
    question: "They _______ be away for the weekend but I am not sure.",
    options: ["needn’t", "shouldn’t", "must", "might"],
    correct: 3,
    explanation: "Might = khả năng không chắc chắn. Dịch: Họ có thể đi vắng vào cuối tuần nhưng tôi không chắc."
  },
  {
    id: 6,
    question: "If he _______ more time, he _______ decorating the baby’s room before she was born.",
    options: [
      "has/ will have finished",
      "had/ would finish",
      "had had/ would have finished",
      "had had/ would finish"
    ],
    correct: 2,
    explanation: "Câu điều kiện loại 3. Dịch: Nếu anh ấy có nhiều thời gian hơn, anh ấy đã hoàn thành việc trang trí phòng em bé trước khi cô bé chào đời."
  },
  {
    id: 7,
    question: "The club president _______ seriously ill.",
    options: [
      "is said",
      "is said to be",
      "is said for being",
      "is said being"
    ],
    correct: 1,
    explanation: "Cấu trúc bị động kép: be said to + V. Dịch: Chủ tịch câu lạc bộ được cho là bị ốm nặng."
  },
  {
    id: 8,
    question: "He asked me _______.",
    options: [
      "where we could meet the following day",
      "where if we could meet tomorrow",
      "that where we could meet the following day",
      "where can we meet tomorrow"
    ],
    correct: 0,
    explanation: "Câu gián tiếp + lùi thì + đổi trạng từ thời gian. Dịch: Anh ấy hỏi tôi chúng tôi có thể gặp nhau vào ngày hôm sau ở đâu."
  },
  {
    id: 9,
    question: "Her boss promised _______ her a raise because she never minds _______ the night shift.",
    options: [
      "offering/ work",
      "offered/ to work",
      "to offer/ working",
      "offer/ worked"
    ],
    correct: 2,
    explanation: "Promise to + V / mind + V-ing. Dịch: Sếp của cô ấy hứa sẽ tăng lương cho cô ấy vì cô ấy không bao giờ ngại làm ca đêm."
  },
  {
    id: 10,
    question: "What’s the name of the person _______ first landed on the moon?",
    options: ["which", "who", "whose", "whom"],
    correct: 1,
    explanation: "Who dùng cho người làm chủ ngữ. Dịch: Tên của người đầu tiên đặt chân lên mặt trăng là gì?"
  },
  {
    id: 11,
    question: "_______ Tom broke the window; he did not feel guilty about it.",
    options: ["Although", "Because", "Despite", "In spite of"],
    correct: 0,
    explanation: "Although + mệnh đề. Dịch: Mặc dù Tom làm vỡ cửa sổ, anh ấy không cảm thấy có lỗi."
  },
  {
    id: 12,
    question: "John got to work early _______ he could finish the report before the meeting.",
    options: ["in order to", "in order that", "so as to", "such that"],
    correct: 1,
    explanation: "In order that + mệnh đề. Dịch: John đến chỗ làm sớm để anh ấy có thể hoàn thành báo cáo trước cuộc họp."
  },
  {
    id: 13,
    question: "Frankly speaking, _______ makes us very happy.",
    options: [
      "how are you here",
      "what are you here",
      "you are here",
      "that you are here"
    ],
    correct: 3,
    explanation: "That-clause làm chủ ngữ. Dịch: Nói thật lòng thì việc bạn có mặt ở đây khiến chúng tôi rất vui."
  },
  {
    id: 14,
    question: "Do not use time and money _______.",
    options: ["care", "careful", "careless", "carelessly"],
    correct: 3,
    explanation: "Trạng từ bổ nghĩa cho động từ use. Dịch: Đừng sử dụng thời gian và tiền bạc một cách bất cẩn."
  },
  {
    id: 15,
    question: "The concert was performed by _______.",
    options: [
      "an exciting new band French",
      "a new French exciting band",
      "an exciting new French band",
      "a French exciting new band"
    ],
    correct: 2,
    explanation: "Thứ tự tính từ: opinion → size → age → origin. Dịch: Buổi hòa nhạc được biểu diễn bởi một ban nhạc Pháp mới và đầy sôi động."
  },
  {
    id: 16,
    question: "Would you like to drink something?\t\t- _______.",
    options: [
      "No, thanks.",
      "I drank tea.",
      "I like coffee better than tea.",
      "I am full."
    ],
    correct: 0,
    explanation: "Từ chối lịch sự lời mời. Dịch: Không, cảm ơn."
  },
  {
    id: 17,
    question: "Economics is not taught at high school, _______?",
    options: ["isn’t it", "is it", "are they", "does it"],
    correct: 1,
    explanation: "Câu trần thuật phủ định → đuôi khẳng định. Dịch: Kinh tế học không được dạy ở trường cấp ba, phải không?"
  },
  {
    id: 18,
    question: "_______, he has become very skillful in the trade.",
    options: [
      "Being train for two years",
      "Been trained for two years",
      "After having trained for two years",
      "After having been trained for two years"
    ],
    correct: 3,
    explanation: "After having been + V3 (bị động). Dịch: Sau khi được đào tạo trong hai năm, anh ấy đã trở nên rất thành thạo trong nghề."
  },
  {
    id: 19,
    question: "I cannot swim very well _______.",
    options: [
      "and neither my sister can",
      "and neither can my sister",
      "and so my sister can",
      "and so can my sister"
    ],
    correct: 1,
    explanation: "Neither + đảo trợ động từ. Dịch: Tôi không bơi giỏi, và chị tôi cũng vậy."
  },
  {
    id: 20,
    question: "_______, I would take the opportunity to talk to the boss today.",
    options: [
      "I were you",
      "If I were you",
      "If I had been you",
      "Had I been you"
    ],
    correct: 1,
    explanation: "Câu điều kiện loại 2 (lời khuyên). Dịch: Nếu tôi là bạn, tôi sẽ nhân cơ hội nói chuyện với sếp hôm nay."
  },
  {
    id: 21,
    passage: "Many thousands of children have (21) _______ in their homes. As a result, some children died. The most common accidents are with fire and hot water. Small children often (22) _______ pots of boiling water on the stove. The pots fall over and the hot water falls on the children and burns them. Some children like to play with fire. They enjoy striking matches or throwing things on a fire to make it burn brightly. If a fire gets too big, it gets out of control. Then the house (23) _______ fire. It is very dangerous to play with matches. When a child strikes a match, the flame soon burns near his fingers. Then he (24) _______ the match on the floor. Many houses catch fire in this way. Some kinds of clothing burn very (25) _______. Many children have been badly burned because they have stood too near a fire and their clothing has suddenly caught fire.",
    question: "Many thousands of children have (21) _______ in their homes.",
    options: ["died", "fallen", "accidents", "fainted"],
    correct: 2,
    explanation: "Cấu trúc: have + noun. 'Accidents' là danh từ phù hợp sau 'have'.\n→ Dịch câu: Hàng chục nghìn trẻ em đã gặp tai nạn trong chính ngôi nhà của mình."
  },
  {
    id: 22,
    passage: "Many thousands of children have (21) _______ in their homes. As a result, some children died. The most common accidents are with fire and hot water. Small children often (22) _______ pots of boiling water on the stove. The pots fall over and the hot water falls on the children and burns them. Some children like to play with fire. They enjoy striking matches or throwing things on a fire to make it burn brightly. If a fire gets too big, it gets out of control. Then the house (23) _______ fire. It is very dangerous to play with matches. When a child strikes a match, the flame soon burns near his fingers. Then he (24) _______ the match on the floor. Many houses catch fire in this way. Some kinds of clothing burn very (25) _______. Many children have been badly burned because they have stood too near a fire and their clothing has suddenly caught fire.",
    question: "Small children often (22) _______ pots of boiling water on the stove.",
    options: ["reach", "touch", "hold", "approach"],
    correct: 0,
    explanation: "Reach: với tới (hành động thường gây tai nạn cho trẻ nhỏ).\n→ Dịch câu: Trẻ nhỏ thường với tới những nồi nước sôi trên bếp."
  },
  {
    id: 23,
    passage: "Many thousands of children have (21) _______ in their homes. As a result, some children died. The most common accidents are with fire and hot water. Small children often (22) _______ pots of boiling water on the stove. The pots fall over and the hot water falls on the children and burns them. Some children like to play with fire. They enjoy striking matches or throwing things on a fire to make it burn brightly. If a fire gets too big, it gets out of control. Then the house (23) _______ fire. It is very dangerous to play with matches. When a child strikes a match, the flame soon burns near his fingers. Then he (24) _______ the match on the floor. Many houses catch fire in this way. Some kinds of clothing burn very (25) _______. Many children have been badly burned because they have stood too near a fire and their clothing has suddenly caught fire.",
    question: "Then the house (23) _______ fire.",
    options: ["catches", "burns", "sets", "makes"],
    correct: 0,
    explanation: "Cụm cố định: catch fire = bốc cháy.\n→ Dịch câu: Sau đó ngôi nhà bốc cháy."
  },
  {
    id: 24,
    passage: "Many thousands of children have (21) _______ in their homes. As a result, some children died. The most common accidents are with fire and hot water. Small children often (22) _______ pots of boiling water on the stove. The pots fall over and the hot water falls on the children and burns them. Some children like to play with fire. They enjoy striking matches or throwing things on a fire to make it burn brightly. If a fire gets too big, it gets out of control. Then the house (23) _______ fire. It is very dangerous to play with matches. When a child strikes a match, the flame soon burns near his fingers. Then he (24) _______ the match on the floor. Many houses catch fire in this way. Some kinds of clothing burn very (25) _______. Many children have been badly burned because they have stood too near a fire and their clothing has suddenly caught fire.",
    question: "Then he (24) _______ the match on the floor.",
    options: ["throws", "disposed", "puts", "drops"],
    correct: 3,
    explanation: "Drop: làm rơi (vì bị bỏng tay nên đánh rơi que diêm).\n→ Dịch câu: Sau đó cậu bé làm rơi que diêm xuống sàn."
  },
  {
    id: 25,
    passage: "Many thousands of children have (21) _______ in their homes. As a result, some children died. The most common accidents are with fire and hot water. Small children often (22) _______ pots of boiling water on the stove. The pots fall over and the hot water falls on the children and burns them. Some children like to play with fire. They enjoy striking matches or throwing things on a fire to make it burn brightly. If a fire gets too big, it gets out of control. Then the house (23) _______ fire. It is very dangerous to play with matches. When a child strikes a match, the flame soon burns near his fingers. Then he (24) _______ the match on the floor. Many houses catch fire in this way. Some kinds of clothing burn very (25) _______. Many children have been badly burned because they have stood too near a fire and their clothing has suddenly caught fire.",
    question: "Some kinds of clothing burn very (25) _______.",
    options: ["easily", "ease", "easy", "easyly"],
    correct: 0,
    explanation: "Burn là động từ → cần trạng từ bổ nghĩa. Easily là trạng từ đúng.\n→ Dịch câu: Một số loại quần áo rất dễ bắt lửa."
  },
  {
    id: 26,
    passage: "John Fisher, a builder, and his wife Elizabeth wanted more living space, so they left their small flat for an old 40-metre-high castle tower. They have spent five years turning it into a beautiful home with six floors, winning three architectural prizes.\n\n“I love the space, and being private,” Elizabeth says. “You feel separated from the world. If I’m in the kitchen, which is 25 metres above the ground floor, and the doorbell rings, I don’t have to answer it because visitors can’t see I’m in!”\n\n“There are 142 steps to the top, so if I go up and down five or six times a day, it’s very good exercise! But having to carry heavy things to the top is terrible, so I never buy more than two bags of shopping from the supermarket at a time. Apart from that, it’s a brilliant place to live.”\n\n“When we first saw the place, I asked my father’s advice about buying it, because we couldn’t decide. After paying for it, we were a bit worried because it looked awful. But we really loved it, and knew how we wanted it to look.” “Living here can be difficult — yesterday I climbed a four-metre ladder to clean the windows. But when you stand on the roof you can see all the way out to sea on a clear day, and that’s a wonderful experience. I’m really glad we moved.”",
    question: "What is the writer trying to do in the text?",
    options: [
      "describe how to turn an old tower into a house",
      "recommend a particular builder",
      "describe what it is like to live in a tower",
      "explain how to win prizes for building work"
    ],
    correct: 2,
    explanation: "Đoạn văn tập trung mô tả trải nghiệm sống thực tế trong tháp (thuận lợi, khó khăn, cảm xúc).\n→ Dịch ý câu hỏi: Tác giả muốn làm gì trong bài viết?\n→ Đáp án đúng: mô tả cảm giác sống trong một tòa tháp."
  },
  {
    id: 27,
    passage: "John Fisher, a builder, and his wife Elizabeth wanted more living space, so they left their small flat for an old 40-metre-high castle tower. They have spent five years turning it into a beautiful home with six floors, winning three architectural prizes.\n\n“I love the space, and being private,” Elizabeth says. “You feel separated from the world. If I’m in the kitchen, which is 25 metres above the ground floor, and the doorbell rings, I don’t have to answer it because visitors can’t see I’m in!”\n\n“There are 142 steps to the top, so if I go up and down five or six times a day, it’s very good exercise! But having to carry heavy things to the top is terrible, so I never buy more than two bags of shopping from the supermarket at a time. Apart from that, it’s a brilliant place to live.”\n\n“When we first saw the place, I asked my father’s advice about buying it, because we couldn’t decide. After paying for it, we were a bit worried because it looked awful. But we really loved it, and knew how we wanted it to look.” “Living here can be difficult — yesterday I climbed a four-metre ladder to clean the windows. But when you stand on the roof you can see all the way out to sea on a clear day, and that’s a wonderful experience. I’m really glad we moved.”",
    question: "From this text, a reader can find out",
    options: [
      "why visitors are not welcome at John and Elizabeth’s house",
      "why Elizabeth exercises every day.",
      "why Elizabeth asked her father to buy the tower.",
      "why John and Elizabeth left their flat."
    ],
    correct: 3,
    explanation: "Câu đầu đoạn nêu rõ lý do rời căn hộ nhỏ: muốn có nhiều không gian sống hơn.\n→ Dịch câu chứa thông tin: John và Elizabeth muốn nhiều không gian sống hơn nên họ rời căn hộ nhỏ.\n→ Đáp án đúng: vì sao họ rời căn hộ."
  },
  {
    id: 28,
    passage: "John Fisher, a builder, and his wife Elizabeth wanted more living space, so they left their small flat for an old 40-metre-high castle tower. They have spent five years turning it into a beautiful home with six floors, winning three architectural prizes.\n\n“I love the space, and being private,” Elizabeth says. “You feel separated from the world. If I’m in the kitchen, which is 25 metres above the ground floor, and the doorbell rings, I don’t have to answer it because visitors can’t see I’m in!”\n\n“There are 142 steps to the top, so if I go up and down five or six times a day, it’s very good exercise! But having to carry heavy things to the top is terrible, so I never buy more than two bags of shopping from the supermarket at a time. Apart from that, it’s a brilliant place to live.”\n\n“When we first saw the place, I asked my father’s advice about buying it, because we couldn’t decide. After paying for it, we were a bit worried because it looked awful. But we really loved it, and knew how we wanted it to look.” “Living here can be difficult — yesterday I climbed a four-metre ladder to clean the windows. But when you stand on the roof you can see all the way out to sea on a clear day, and that’s a wonderful experience. I’m really glad we moved.”",
    question: "Which of the following best describes Elizabeth’s feelings about the tower?",
    options: [
      "She wanted it as soon as she saw it.",
      "She likes most things about it.",
      "She has been worried since they paid for it.",
      "She finds it unsuitable to live in."
    ],
    correct: 1,
    explanation: "Elizabeth thừa nhận có khó khăn nhưng tổng thể là rất hài lòng.\n→ Dịch ý: Cô ấy thích hầu hết mọi thứ về nơi này.\n→ Đáp án đúng: She likes most things about it."
  },
  {
    id: 29,
    passage: "John Fisher, a builder, and his wife Elizabeth wanted more living space, so they left their small flat for an old 40-metre-high castle tower. They have spent five years turning it into a beautiful home with six floors, winning three architectural prizes.\n\n“I love the space, and being private,” Elizabeth says. “You feel separated from the world. If I’m in the kitchen, which is 25 metres above the ground floor, and the doorbell rings, I don’t have to answer it because visitors can’t see I’m in!”\n\n“There are 142 steps to the top, so if I go up and down five or six times a day, it’s very good exercise! But having to carry heavy things to the top is terrible, so I never buy more than two bags of shopping from the supermarket at a time. Apart from that, it’s a brilliant place to live.”\n\n“When we first saw the place, I asked my father’s advice about buying it, because we couldn’t decide. After paying for it, we were a bit worried because it looked awful. But we really loved it, and knew how we wanted it to look.” “Living here can be difficult — yesterday I climbed a four-metre ladder to clean the windows. But when you stand on the roof you can see all the way out to sea on a clear day, and that’s a wonderful experience. I’m really glad we moved.”",
    question: "What problem does Elizabeth have with living in such a tall building?",
    options: [
      "Her visitors find it difficult to see if she is at home.",
      "She feels separated from other people.",
      "She cannot bring home lots of shopping at once.",
      "It is impossible to clean any of the windows."
    ],
    correct: 2,
    explanation: "Elizabeth nói rõ cô không thể mua nhiều đồ vì phải mang lên cao.\n→ Dịch câu chứa đáp án: Tôi không bao giờ mua quá hai túi đồ mỗi lần.\n→ Đáp án đúng: không thể mang nhiều đồ mua sắm về cùng lúc."
  },
  {
    id: 30,
    passage: "John Fisher, a builder, and his wife Elizabeth wanted more living space, so they left their small flat for an old 40-metre-high castle tower. They have spent five years turning it into a beautiful home with six floors, winning three architectural prizes.\n\n“I love the space, and being private,” Elizabeth says. “You feel separated from the world. If I’m in the kitchen, which is 25 metres above the ground floor, and the doorbell rings, I don’t have to answer it because visitors can’t see I’m in!”\n\n“There are 142 steps to the top, so if I go up and down five or six times a day, it’s very good exercise! But having to carry heavy things to the top is terrible, so I never buy more than two bags of shopping from the supermarket at a time. Apart from that, it’s a brilliant place to live.”\n\n“When we first saw the place, I asked my father’s advice about buying it, because we couldn’t decide. After paying for it, we were a bit worried because it looked awful. But we really loved it, and knew how we wanted it to look.” “Living here can be difficult — yesterday I climbed a four-metre ladder to clean the windows. But when you stand on the roof you can see all the way out to sea on a clear day, and that’s a wonderful experience. I’m really glad we moved.”",
    question: "How will John and Elizabeth advertise their tower if they sell it?",
    options: [
      "For sale: Tall building, formerly a castle. High windows give a good view. Needs some improvement.",
      "For sale: A house with a difference — a castle tower, turned into a lovely home. Wonderful view.",
      "For sale: Frize-winning home, five years old. Six rooms, all with sea views.",
      "For sale: Castle tower, turned into six small flats, close to supermarket."
    ],
    correct: 1,
    explanation: "Phương án này phản ánh đúng nội dung: tháp được cải tạo thành ngôi nhà đẹp, tầm nhìn tuyệt vời.\n→ Dịch ý: Ngôi nhà độc đáo – tháp lâu đài được biến thành tổ ấm xinh đẹp, tầm nhìn tuyệt vời."
  }
];



