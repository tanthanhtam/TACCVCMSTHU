const questions = [
{
  id: 1,
  question: "He did not remember the meeting. He went out for a coffee with his friends then.",
  options: [
    "Not remembered the meeting, he went out for a coffee with his friends.",
    "Not to remember the meeting, he went out for a coffee with his friends.",
    "Not remember the meeting, he went out for a coffee with his friends.",
    "Not remembering the meeting, he went out for a coffee with his friends."
  ],
  correct: 3,
  explanation: "Rút gọn mệnh đề trạng ngữ với V-ing: Not remembering... Đáp án D đúng. Dịch: Vì không nhớ cuộc họp nên anh ấy đã ra ngoài uống cà phê với bạn bè."
},
{
  id: 2,
  question: "We cut down many forests. The Earth becomes hot.",
  options: [
    "The more forests we cut down, the hotter the Earth becomes.",
    "The more we cut down forests, the hotter the Earth becomes.",
    "The more forests we cut down, the Earth becomes hotter.",
    "The more we cut down forests, the Earth becomes hotter."
  ],
  correct: 1,
  explanation: "Cấu trúc so sánh kép: The more + S + V, the more + adj. Đáp án B đúng. Dịch: Chúng ta càng chặt phá nhiều rừng thì Trái Đất càng nóng lên."
},
{
  id: 3,
  question: "Nam wanted to know what time _______.",
  options: [
    "the movie began",
    "the movie begins",
    "did the movie begin",
    "does the movie begin"
  ],
  correct: 0,
  explanation: "Câu gián tiếp: không đảo ngữ, lùi thì. Đáp án A đúng. Dịch: Nam muốn biết bộ phim đã bắt đầu lúc mấy giờ."
},
{
  id: 4,
  question: "_______ is increasing, which results from economic crisis.",
  options: ["Employment", "Unemployment", "Employ", "Unemployed"],
  correct: 1,
  explanation: "Danh từ đúng là Unemployment (thất nghiệp). Đáp án B đúng. Dịch: Tình trạng thất nghiệp đang gia tăng, là hệ quả của khủng hoảng kinh tế."
},
{
  id: 5,
  question: "When I_______ to visit her yesterday, she_______ a party.",
  options: [
    "came / prepared",
    "came / was preparing",
    "come / was prepared",
    "came/has prepared"
  ],
  correct: 1,
  explanation: "Quá khứ đơn + quá khứ tiếp diễn. Đáp án B đúng. Dịch: Khi tôi đến thăm cô ấy hôm qua thì cô ấy đang chuẩn bị một bữa tiệc."
},
{
  id: 6,
  question: "_______ it with my own eyes, I would have never believed it.",
  options: [
    "Unless I had not seen",
    "Provided I had seen",
    "Hadn’t I seen",
    "Had I not seen"
  ],
  correct: 3,
  explanation: "Câu điều kiện loại 3 đảo ngữ: Had I not + V3. Đáp án D đúng. Dịch: Nếu tôi không tận mắt chứng kiến, tôi đã không bao giờ tin điều đó."
},
{
  id: 7,
  question: "_______ they got married than they began to argue.",
  options: [
    "No longer was",
    "No sooner had",
    "Not until had",
    "Hardly had"
  ],
  correct: 1,
  explanation: "Cấu trúc: No sooner had + S + V3 + than. Đáp án B đúng. Dịch: Ngay khi họ vừa kết hôn thì họ đã bắt đầu cãi nhau."
},
{
  id: 8,
  question: "My children cannot_______ the noise from the factory nearby anymore.",
  options: [
    "take part in",
    "stand up to",
    "put up with",
    "go with"
  ],
  correct: 2,
  explanation: "Put up with = chịu đựng. Đáp án C đúng. Dịch: Các con tôi không thể chịu đựng được tiếng ồn từ nhà máy gần đó nữa."
},
{
  id: 9,
  question: "There was _______ we were unable to find our way.",
  options: [
    "so many smog that",
    "such many smog that",
    "such  much smog that",
    "so much smog that"
  ],
  correct: 3,
  explanation: "Smog là danh từ không đếm được → so much + N + that. Đáp án D đúng. Dịch: Có quá nhiều khói mù đến nỗi chúng tôi không thể tìm được đường."
},
{
  id: 10,
  question: "We live in _______ big house in _______ middle of the village.",
  options: ["a/a", "a/the", "the/the", "the/a"],
  correct: 1,
  explanation: "A big house (chưa xác định) + the middle (xác định). Đáp án B đúng. Dịch: Chúng tôi sống trong một ngôi nhà lớn ở giữa làng."
},
{
  id: 11,
  question: "_______ the problem of water pollution gets more serious, the government is searching for a way to deal with it.",
  options: ["Although", "Because", "Providing", "However"],
  correct: 1,
  explanation: "Because chỉ nguyên nhân. Đáp án B đúng. Dịch: Vì vấn đề ô nhiễm nước ngày càng nghiêm trọng nên chính phủ đang tìm cách giải quyết."
},
{
  id: 12,
  question: "_______ you like what I want to do or not, you won’t make me change my mind.",
  options: ["Because", "Whatever", "If", "When"],
  correct: 2,
  explanation: "If ... or not = dù có hay không. Đáp án C đúng. Dịch: Dù bạn có thích việc tôi muốn làm hay không, bạn cũng không khiến tôi thay đổi quyết định."
},
{
  id: 13,
  question: "_______ number of boys were swimming in the lake, but I didn’t know _______ exact number of them.",
  options: ["A/the", "A/an", "The/the", "The/an"],
  correct: 0,
  explanation: "A number of = một số; the exact number = con số chính xác. Đáp án A đúng. Dịch: Có một số cậu bé đang bơi trong hồ, nhưng tôi không biết con số chính xác."
},
{
  id: 14,
  question: "The course was so difficult that I didn’t _______ any progress at all.",
  options: ["do", "make", "produce", "create"],
  correct: 1,
  explanation: "Cụm cố định: make progress. Đáp án B đúng. Dịch: Khóa học khó đến mức tôi không tiến bộ chút nào."
},
{
  id: 15,
  question: "This is the fifth person _______ in that landslide.",
  options: [
    "to be killed",
    "to kill",
    "being killed",
    "be killed"
  ],
  correct: 0,
  explanation: "Sau số thứ tự dùng to V. Dạng bị động: to be killed. Đáp án A đúng. Dịch: Đây là người thứ năm bị thiệt mạng trong vụ sạt lở đó."
},
{
  id: 16,
  question: "You don’t seem to regret _______ your parents’ advice.",
  options: [
    "not having taken",
    "not have taken",
    "not to have taken",
    "not to take"
  ],
  correct: 0,
  explanation: "Regret + V-ing (hành động đã xảy ra). Đáp án A đúng. Dịch: Bạn dường như không hối tiếc vì đã không nghe theo lời khuyên của bố mẹ."
},
{
  id: 17,
  question: "She passed her exam, so all the hard work really _______ after all.",
  options: [
    "paid back",
    "paid in",
    "paid through",
    "paid off"
  ],
  correct: 3,
  explanation: "Pay off = mang lại kết quả tốt. Đáp án D đúng. Dịch: Cô ấy đỗ kỳ thi, vì vậy mọi nỗ lực đã được đền đáp."
},
{
  id: 18,
  question: "I _______ for this company for more than thirty years, and I intend to stay here until I _______ next year.",
  options: [
    "work/ am going to retire",
    "have worked/ will retire",
    "have been working/ retire",
    "am going to work/ am retiring"
  ],
  correct: 2,
  explanation: "Hiện tại hoàn thành tiếp diễn + hiện tại đơn chỉ tương lai. Đáp án C đúng. Dịch: Tôi đã làm việc cho công ty này hơn 30 năm và dự định ở lại đến khi nghỉ hưu năm sau."
},
{
  id: 19,
  question: "It’s still raining. We’d rather _______ football on TV.",
  options: ["watched", "watch", "to watch", "watching"],
  correct: 1,
  explanation: "Would rather + bare infinitive. Đáp án B đúng. Dịch: Trời vẫn đang mưa. Chúng tôi thà xem bóng đá trên TV."
},
{
  id: 20,
  question: "“Well done, Tom. You’ve passed the driving test!”",
  options: [
    "I told Tom that he had done well in his driving test.",
    "I told that Tom had passed his driving test.",
    "I congratulated Tom on passing his driving test.",
    "I congratulated Tom about his passing the driving test."
  ],
  correct: 2,
  explanation: "Cấu trúc: congratulate someone on something. Đáp án C đúng. Dịch: Tôi chúc mừng Tom đã vượt qua kỳ thi lái xe."
},
{
  id: 21,
  passage: "Founded after World War II by 51 “peace-loving states” combined to oppose future aggression, the United Nations now counts 192 member nations, (21) _______ its newest members, Nauru, Kiribati, and Tonga in 1999, Tuvalu and Yugoslavia in 2000, Switzerland and East Timor in 2002, and Montenegro in 2006. United Nations Day has been (22) _______ on October 24 since 1948 and celebrates the objectives and accomplishments of the organization, which was established on October 24, 1945. The UN (23) _______ in peacekeeping and humanitarian missions across the globe. Though some say its (24) _______ has declined in recent decades, the United Nations still plays a tremendous role in world politics. In 2001 the United Nations and Kofi Annan, then Secretary-General of the UN, won the Nobel Peace Prize “for their work for a better organized and more peaceful world.” Since 1948 there have been 63 UN peacekeeping operations that are currently under way. Thus far, close to 130 nations have contributed personnel (25) _______ various times; 119 are currently providing peacekeepers. As of August 31, 2008, there were 16 peacekeeping operations underway with a total of 88,230 personnel. The small island nation of Fiji has taken part in virtually every UN peacekeeping operation, as has Canada.",
  question: "The United Nations now counts 192 member nations, (21) _______ its newest members.",
  options: ["including", "limiting", "especially", "possibly"],
  correct: 0,
  explanation: "Including dùng để giới thiệu danh sách được bao gồm.\nDịch: Liên Hợp Quốc hiện có 192 quốc gia thành viên, bao gồm các thành viên mới nhất."
},
{
  id: 22,
  passage: "Founded after World War II by 51 “peace-loving states” combined to oppose future aggression, the United Nations now counts 192 member nations, (21) _______ its newest members, Nauru, Kiribati, and Tonga in 1999, Tuvalu and Yugoslavia in 2000, Switzerland and East Timor in 2002, and Montenegro in 2006. United Nations Day has been (22) _______ on October 24 since 1948 and celebrates the objectives and accomplishments of the organization, which was established on October 24, 1945. The UN (23) _______ in peacekeeping and humanitarian missions across the globe. Though some say its (24) _______ has declined in recent decades, the United Nations still plays a tremendous role in world politics. In 2001 the United Nations and Kofi Annan, then Secretary-General of the UN, won the Nobel Peace Prize “for their work for a better organized and more peaceful world.” Since 1948 there have been 63 UN peacekeeping operations that are currently under way. Thus far, close to 130 nations have contributed personnel (25) _______ various times; 119 are currently providing peacekeepers. As of August 31, 2008, there were 16 peacekeeping operations underway with a total of 88,230 personnel. The small island nation of Fiji has taken part in virtually every UN peacekeeping operation, as has Canada.",
  question: "United Nations Day has been (22) _______ on October 24 since 1948.",
  options: ["examined", "watched", "monitored", "celebrated"],
  correct: 3,
  explanation: "Celebrate = tổ chức kỷ niệm (ngày lễ).\nDịch: Ngày Liên Hợp Quốc đã được kỷ niệm vào ngày 24 tháng 10 kể từ năm 1948."
},
{
  id: 23,
  passage: "Founded after World War II by 51 “peace-loving states” combined to oppose future aggression, the United Nations now counts 192 member nations, (21) _______ its newest members, Nauru, Kiribati, and Tonga in 1999, Tuvalu and Yugoslavia in 2000, Switzerland and East Timor in 2002, and Montenegro in 2006. United Nations Day has been (22) _______ on October 24 since 1948 and celebrates the objectives and accomplishments of the organization, which was established on October 24, 1945. The UN (23) _______ in peacekeeping and humanitarian missions across the globe. Though some say its (24) _______ has declined in recent decades, the United Nations still plays a tremendous role in world politics. In 2001 the United Nations and Kofi Annan, then Secretary-General of the UN, won the Nobel Peace Prize “for their work for a better organized and more peaceful world.” Since 1948 there have been 63 UN peacekeeping operations that are currently under way. Thus far, close to 130 nations have contributed personnel (25) _______ various times; 119 are currently providing peacekeepers. As of August 31, 2008, there were 16 peacekeeping operations underway with a total of 88,230 personnel. The small island nation of Fiji has taken part in virtually every UN peacekeeping operation, as has Canada.",
  question: "The UN (23) _______ in peacekeeping and humanitarian missions across the globe.",
  options: ["puts off", "looks down", "takes part", "makes use"],
  correct: 2,
  explanation: "Take part in = tham gia vào.\nDịch: Liên Hợp Quốc tham gia vào các sứ mệnh gìn giữ hòa bình và nhân đạo trên toàn thế giới."
},
{
  id: 24,
  passage: "Founded after World War II by 51 “peace-loving states” combined to oppose future aggression, the United Nations now counts 192 member nations, (21) _______ its newest members, Nauru, Kiribati, and Tonga in 1999, Tuvalu and Yugoslavia in 2000, Switzerland and East Timor in 2002, and Montenegro in 2006. United Nations Day has been (22) _______ on October 24 since 1948 and celebrates the objectives and accomplishments of the organization, which was established on October 24, 1945. The UN (23) _______ in peacekeeping and humanitarian missions across the globe. Though some say its (24) _______ has declined in recent decades, the United Nations still plays a tremendous role in world politics. In 2001 the United Nations and Kofi Annan, then Secretary-General of the UN, won the Nobel Peace Prize “for their work for a better organized and more peaceful world.” Since 1948 there have been 63 UN peacekeeping operations that are currently under way. Thus far, close to 130 nations have contributed personnel (25) _______ various times; 119 are currently providing peacekeepers. As of August 31, 2008, there were 16 peacekeeping operations underway with a total of 88,230 personnel. The small island nation of Fiji has taken part in virtually every UN peacekeeping operation, as has Canada.",
  question: "Though some say its (24) _______ has declined in recent decades, the United Nations still plays a tremendous role in world politics.",
  options: ["consequence", "meaninglessness", "awareness", "influence"],
  correct: 3,
  explanation: "Influence = ảnh hưởng, phù hợp với ngữ cảnh chính trị.\nDịch: Mặc dù có người cho rằng ảnh hưởng của tổ chức này đã suy giảm trong những thập kỷ gần đây."
},
{
  id: 25,
  passage: "Founded after World War II by 51 “peace-loving states” combined to oppose future aggression, the United Nations now counts 192 member nations, (21) _______ its newest members, Nauru, Kiribati, and Tonga in 1999, Tuvalu and Yugoslavia in 2000, Switzerland and East Timor in 2002, and Montenegro in 2006. United Nations Day has been (22) _______ on October 24 since 1948 and celebrates the objectives and accomplishments of the organization, which was established on October 24, 1945. The UN (23) _______ in peacekeeping and humanitarian missions across the globe. Though some say its (24) _______ has declined in recent decades, the United Nations still plays a tremendous role in world politics. In 2001 the United Nations and Kofi Annan, then Secretary-General of the UN, won the Nobel Peace Prize “for their work for a better organized and more peaceful world.” Since 1948 there have been 63 UN peacekeeping operations that are currently under way. Thus far, close to 130 nations have contributed personnel (25) _______ various times; 119 are currently providing peacekeepers. As of August 31, 2008, there were 16 peacekeeping operations underway with a total of 88,230 personnel. The small island nation of Fiji has taken part in virtually every UN peacekeeping operation, as has Canada.",
  question: "Close to 130 nations have contributed personnel (25) _______ various times.",
  options: ["on", "at", "by", "in"],
  correct: 1,
  explanation: "At various times = vào nhiều thời điểm khác nhau.\nDịch: Gần 130 quốc gia đã đóng góp nhân sự vào nhiều thời điểm khác nhau."
},
{
  id: 26,
  passage: "John Fisher, a builder, and his wife Elizabeth wanted more living space, so they left their small flat for an old 40-metre-high castle tower. They have spent five years turning it into a beautiful home with six floors, winning three architectural prizes.\n“I love the space, and being private,” Elizabeth says. “You feel separated from the world. If I’m in the kitchen, which is 25 metres above the ground floor, and the doorbell rings, I don’t have to answer it because visitors can’t see I’m in!”\n“There are 142 steps to the top, so if I go up and down five or six times a day, it’s very good exercise! But having to carry heavy things to the top is terrible, so I never buy more than two bags of shopping from the supermarket at a time. Apart from that, it’s a brilliant place to live.”\n“When we first saw the place, I asked my father’s advice about buying it, because we couldn’t decide. After paying for it, we were a bit worried because it looked awful. But we really loved it, and knew how we wanted it to look.” “Living here can be difficult — yesterday I climbed a four-metre ladder to clean the windows. But when you stand on the roof you can see all the way out to sea on a clear day, and that’s a wonderful experience. I’m really glad we moved.”",
  question: "What is the writer trying to do in the text?",
  options: [
    "describe how to turn an old tower into a house",
    "recommend a particular builder",
    "describe what it is like to live in a tower",
    "explain how to win prizes for building work"
  ],
  correct: 2,
  explanation: "Bài viết tập trung mô tả trải nghiệm, cảm xúc và những thuận lợi – khó khăn khi sống trong một tòa tháp.\nDịch: Tác giả muốn mô tả cuộc sống khi sống trong một tòa tháp."
},
{
  id: 27,
  passage: "John Fisher, a builder, and his wife Elizabeth wanted more living space, so they left their small flat for an old 40-metre-high castle tower. They have spent five years turning it into a beautiful home with six floors, winning three architectural prizes.\n“I love the space, and being private,” Elizabeth says. “You feel separated from the world. If I’m in the kitchen, which is 25 metres above the ground floor, and the doorbell rings, I don’t have to answer it because visitors can’t see I’m in!”\n“There are 142 steps to the top, so if I go up and down five or six times a day, it’s very good exercise! But having to carry heavy things to the top is terrible, so I never buy more than two bags of shopping from the supermarket at a time. Apart from that, it’s a brilliant place to live.”\n“When we first saw the place, I asked my father’s advice about buying it, because we couldn’t decide. After paying for it, we were a bit worried because it looked awful. But we really loved it, and knew how we wanted it to look.” “Living here can be difficult — yesterday I climbed a four-metre ladder to clean the windows. But when you stand on the roof you can see all the way out to sea on a clear day, and that’s a wonderful experience. I’m really glad we moved.”",
  question: "From this text, a reader can find out",
  options: [
    "why visitors are not welcome at John and Elizabeth’s house",
    "why Elizabeth exercises every day.",
    "why Elizabeth asked her father to buy the tower.",
    "why John and Elizabeth left their flat."
  ],
  correct: 3,
  explanation: "Ngay câu đầu cho biết họ rời căn hộ nhỏ vì muốn có thêm không gian sống.\nDịch: Người đọc có thể biết vì sao John và Elizabeth rời căn hộ nhỏ của họ."
},
{
  id: 28,
  passage: "John Fisher, a builder, and his wife Elizabeth wanted more living space, so they left their small flat for an old 40-metre-high castle tower. They have spent five years turning it into a beautiful home with six floors, winning three architectural prizes.\n“I love the space, and being private,” Elizabeth says. “You feel separated from the world. If I’m in the kitchen, which is 25 metres above the ground floor, and the doorbell rings, I don’t have to answer it because visitors can’t see I’m in!”\n“There are 142 steps to the top, so if I go up and down five or six times a day, it’s very good exercise! But having to carry heavy things to the top is terrible, so I never buy more than two bags of shopping from the supermarket at a time. Apart from that, it’s a brilliant place to live.”\n“When we first saw the place, I asked my father’s advice about buying it, because we couldn’t decide. After paying for it, we were a bit worried because it looked awful. But we really loved it, and knew how we wanted it to look.” “Living here can be difficult — yesterday I climbed a four-metre ladder to clean the windows. But when you stand on the roof you can see all the way out to sea on a clear day, and that’s a wonderful experience. I’m really glad we moved.”",
  question: "Which of the following best describes Elizabeth’s feelings about the tower?",
  options: [
    "She wanted it as soon as she saw it.",
    "She likes most things about it.",
    "She has been worried since they paid for it.",
    "She finds it unsuitable to live in."
  ],
  correct: 1,
  explanation: "Elizabeth thừa nhận có khó khăn nhưng vẫn cho rằng đây là nơi sống tuyệt vời.\nDịch: Cô ấy thích hầu hết mọi thứ về tòa tháp."
},
{
  id: 29,
  passage: "John Fisher, a builder, and his wife Elizabeth wanted more living space, so they left their small flat for an old 40-metre-high castle tower. They have spent five years turning it into a beautiful home with six floors, winning three architectural prizes.\n“I love the space, and being private,” Elizabeth says. “You feel separated from the world. If I’m in the kitchen, which is 25 metres above the ground floor, and the doorbell rings, I don’t have to answer it because visitors can’t see I’m in!”\n“There are 142 steps to the top, so if I go up and down five or six times a day, it’s very good exercise! But having to carry heavy things to the top is terrible, so I never buy more than two bags of shopping from the supermarket at a time. Apart from that, it’s a brilliant place to live.”\n“When we first saw the place, I asked my father’s advice about buying it, because we couldn’t decide. After paying for it, we were a bit worried because it looked awful. But we really loved it, and knew how we wanted it to look.” “Living here can be difficult — yesterday I climbed a four-metre ladder to clean the windows. But when you stand on the roof you can see all the way out to sea on a clear day, and that’s a wonderful experience. I’m really glad we moved.”",
  question: "What problem does Elizabeth have with living in such a tall building?",
  options: [
    "Her visitors find it difficult to see if she is at home.",
    "She feels separated from other people.",
    "She cannot bring home lots of shopping at once.",
    "It is impossible to clean any of the windows."
  ],
  correct: 2,
  explanation: "Cô nói việc mang đồ nặng lên cao rất khó nên không mua nhiều đồ một lúc.\nDịch: Cô ấy không thể mang nhiều đồ mua sắm về nhà cùng lúc."
},
{
  id: 30,
  passage: "John Fisher, a builder, and his wife Elizabeth wanted more living space, so they left their small flat for an old 40-metre-high castle tower. They have spent five years turning it into a beautiful home with six floors, winning three architectural prizes.\n“I love the space, and being private,” Elizabeth says. “You feel separated from the world. If I’m in the kitchen, which is 25 metres above the ground floor, and the doorbell rings, I don’t have to answer it because visitors can’t see I’m in!”\n“There are 142 steps to the top, so if I go up and down five or six times a day, it’s very good exercise! But having to carry heavy things to the top is terrible, so I never buy more than two bags of shopping from the supermarket at a time. Apart from that, it’s a brilliant place to live.”\n“When we first saw the place, I asked my father’s advice about buying it, because we couldn’t decide. After paying for it, we were a bit worried because it looked awful. But we really loved it, and knew how we wanted it to look.” “Living here can be difficult — yesterday I climbed a four-metre ladder to clean the windows. But when you stand on the roof you can see all the way out to sea on a clear day, and that’s a wonderful experience. I’m really glad we moved.”",
  question: "How will John and Elizabeth advertise their tower if they sell it?",
  options: [
    "For sale: Tall building, formerly a castle. High windows give a good view. Needs some improvement.",
    "For sale: A house with a difference — a castle tower, turned into a lovely home. Wonderful view.",
    "For sale: Frize-winning home, five years old. Six rooms, all with sea views.",
    "For sale: Castle tower, turned into six small flats, close to supermarket."
  ],
  correct: 1,
  explanation: "Mô tả này phù hợp nhất với nội dung bài: khác biệt, đã cải tạo thành nhà đẹp, có tầm nhìn tuyệt vời.\nDịch: Nhà độc đáo – một tháp lâu đài được cải tạo thành tổ ấm xinh đẹp với quang cảnh tuyệt vời."
}
];
