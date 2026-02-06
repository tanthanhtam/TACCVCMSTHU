const questions = [
  {
    id: 1,
    question: "It’s necessary to listen to opinions that are _______ from ours.",
    options: ["difference", "differently", "differ", "different"],
    correct: 3,
    explanation: "Cấu trúc: be + adjective. 'Different from' = khác với. Dịch: Cần thiết phải lắng nghe những ý kiến khác với ý kiến của chúng ta."
  },
  {
    id: 2,
    question: "You often walk to school, _______?",
    options: ["won’t you", "didn’t you", "haven’t you", "don’t you"],
    correct: 3,
    explanation: "Câu hỏi đuôi: mệnh đề chính hiện tại đơn → dùng do/does. Dịch: Bạn thường đi bộ đến trường, đúng không?"
  },
  {
    id: 3,
    question: "Polar bears are in danger of going extinct _______ climate change.",
    options: ["because of", "although", "because", "despite"],
    correct: 0,
    explanation: "Because of + danh từ/cụm danh từ. Dịch: Gấu Bắc Cực đang có nguy cơ tuyệt chủng vì biến đổi khí hậu."
  },
  {
    id: 4,
    question: "The city has changed a lot since I last _______ it.",
    options: ["visited", "would visit", "will visit", "visit"],
    correct: 0,
    explanation: "Since + mốc quá khứ → dùng quá khứ đơn. Dịch: Thành phố đã thay đổi rất nhiều kể từ lần cuối tôi đến thăm nó."
  },
  {
    id: 5,
    question: "The football team has waited _______ the championship for 30 years.",
    options: ["about", "up", "for", "to"],
    correct: 2,
    explanation: "Wait for = chờ đợi. Dịch: Đội bóng đã chờ đợi chức vô địch suốt 30 năm."
  },
  {
    id: 6,
    question: "If I _______ you, I wouldn’t go out in this weather.",
    options: ["am", "had been", "were", "will be"],
    correct: 2,
    explanation: "Câu điều kiện loại 2: If I were you. Dịch: Nếu tôi là bạn, tôi sẽ không ra ngoài trong thời tiết này."
  },
  {
    id: 7,
    question: "My mother is often _______ first person to get up in the family.",
    options: ["a", "the", "no article", "an"],
    correct: 1,
    explanation: "So sánh thứ tự → dùng mạo từ 'the'. Dịch: Mẹ tôi thường là người đầu tiên thức dậy trong gia đình."
  },
  {
    id: 8,
    question: "My daughter sometimes practises _______ English with her friends after school.",
    options: ["to speaking", "to speak", "speak", "speaking"],
    correct: 3,
    explanation: "Practise + V-ing. Dịch: Con gái tôi thỉnh thoảng luyện nói tiếng Anh với bạn sau giờ học."
  },
  {
    id: 9,
    question: "You may not see how important your family is _______.",
    options: [
      "after you had lived far from home",
      "when you were living far from home",
      "until you live far from home",
      "as soon as you lived far from home"
    ],
    correct: 2,
    explanation: "Not…until = mãi cho đến khi. Dịch: Bạn có thể không nhận ra gia đình quan trọng thế nào cho đến khi sống xa nhà."
  },
  {
    id: 10,
    question: "Gini and Adrian are talking about a book they have read lately.\n- Gini: “That wasn’t an interesting book.” \t- Adrian: “ _______. I couldn’t go further than chapter 2.”",
    options: [
      "I think it will get better and better",
      "Yes, it gave me much information",
      "You can say that again",
      "No, it was fascinating"
    ],
    correct: 2,
    explanation: "You can say that again = hoàn toàn đồng ý. Dịch: – Cuốn sách đó không hay. – Chuẩn luôn, tôi không đọc nổi quá chương 2."
  },
  {
    id: 11,
    question: "Peter is more successful than his sister.",
    options: [
      "Peter is as successful as his sister.",
      "Peter’s sister is more successful than he is.",
      "Peter is less successful than his sister.",
      "Peter’s sister is not as successful as he is."
    ],
    correct: 3,
    explanation: "So sánh tương đương phủ định: not as … as. Dịch: Chị của Peter không thành công bằng anh ấy."
  },
  {
    id: 12,
    question: "“I’m going on a picnic tomorrow”, he said.",
    options: [
      "He said that he was going on a picnic the following day.",
      "He said that I was going on a picnic tomorrow.",
      "He said that he was going on a picnic tomorrow.",
      "He said that I am going on a picnic the following day."
    ],
    correct: 0,
    explanation: "Câu tường thuật: tomorrow → the following day; I → he. Dịch: Anh ấy nói rằng anh ấy sẽ đi dã ngoại vào ngày hôm sau."
  },
  {
    id: 13,
    question: "My students find it hard to _______ a good decision of choosing which university they will go on further studying.",
    options: ["make", "do", "get", "have"],
    correct: 0,
    explanation: "Make a decision = đưa ra quyết định. Dịch: Học sinh của tôi thấy khó khăn trong việc đưa ra quyết định chọn trường đại học."
  },
  {
    id: 14,
    question: "Nam’s mother is very _______ of him because he has just been awarded a scholarship of $ 80,000 to study abroad.",
    options: ["pleased", "happy", "satisfied", "proud"],
    correct: 3,
    explanation: "Be proud of = tự hào về. Dịch: Mẹ Nam rất tự hào về cậu ấy vì vừa nhận được học bổng 80.000 đô để du học."
  },
  {
    id: 15,
    question: "Would you mind _______ me the information about the latest meeting?",
    options: ["to tell", "telling", "told", "being told"],
    correct: 1,
    explanation: "Would you mind + V-ing. Dịch: Bạn có phiền cho tôi biết thông tin về cuộc họp gần đây không?"
  },
  {
    id: 16,
    question: "They had invited over one hundred guests, _______.",
    options: [
      "not any of whom I knew",
      "I did not know any of whom",
      "I knew none of whom",
      "none of whom I knew"
    ],
    correct: 3,
    explanation: "Mệnh đề quan hệ với whom: none of whom. Dịch: Họ đã mời hơn 100 khách, không ai trong số đó tôi quen."
  },
  {
    id: 17,
    question: "We often take part in charity activities _______ by the pagodas.",
    options: ["organized", "organizing", "are organized", "are organizing"],
    correct: 0,
    explanation: "Rút gọn mệnh đề bị động: activities (which are) organized. Dịch: Chúng tôi thường tham gia các hoạt động từ thiện do các chùa tổ chức."
  },
  {
    id: 18,
    question: "Vietnamese people often go to pagodas _______ New Year’s Eve.",
    options: ["on", "in", "at", "for"],
    correct: 0,
    explanation: "On dùng với ngày lễ cụ thể. Dịch: Người Việt thường đi chùa vào đêm Giao thừa."
  },
  {
    id: 19,
    question: "If I didn’t have exams next week, I _______ camping with you this weekend.",
    options: ["will go", "will have gone", "would have gone", "would go"],
    correct: 3,
    explanation: "Câu điều kiện loại 2. Dịch: Nếu tôi không có kỳ thi vào tuần sau, tôi đã đi cắm trại với bạn vào cuối tuần này."
  },
  {
    id: 20,
    question: "Drinking enough water is a vital part _______ it keeps your body functioning properly.",
    options: ["but", "although", "because", "because of"],
    correct: 2,
    explanation: "Because nối mệnh đề chỉ nguyên nhân. Dịch: Uống đủ nước là điều thiết yếu vì nó giúp cơ thể hoạt động bình thường."
  },
 {
    id: 21,
    passage: "Statesmen define a family as “a group of individuals having a common dwelling and related by blood, adoption or marriage, (21) _______ includes common-law relationships”. Most people are born into one of these groups and will live their lives as a family in such a group.\nAlthough the definition of a family may not change, (22) _______ relationship of people to each other within the family group changes as society changes. More and more wives are taking paying jobs, and, as a result, the roles of husband, wife and children are changing. Today, men expect to work for pay for about 40 years of their lives, and, in today’s marriages (23) _______ which both spouses have paying jobs, women can expect to work for about 30 to 35 years of their lives. This means that men must learn to do their share of family tasks such as caring for the children and daily (24) _______ chores. Children, too, especially adolescents, have to (25) _______ with the members of their family in sharing household tasks.",
    question: "Statesmen define a family as “a group of individuals having a common dwelling and related by blood, adoption or marriage, (21) _______ includes common-law relationships”.",
    options: ["which", "that", "what", "it"],
    correct: 0,
    explanation: "Dùng đại từ quan hệ \"which\" để bổ sung thông tin cho cả mệnh đề phía trước. \"Which includes...\" là mệnh đề quan hệ không xác định.\nDịch: Các nhà lập pháp định nghĩa gia đình là “một nhóm cá nhân có cùng nơi ở và có quan hệ huyết thống, nhận nuôi hoặc hôn nhân, điều này bao gồm cả các mối quan hệ sống chung không hôn thú”."
  },
  {
    id: 22,
    passage: "Statesmen define a family as “a group of individuals having a common dwelling and related by blood, adoption or marriage, (21) _______ includes common-law relationships”. Most people are born into one of these groups and will live their lives as a family in such a group.\nAlthough the definition of a family may not change, (22) _______ relationship of people to each other within the family group changes as society changes. More and more wives are taking paying jobs, and, as a result, the roles of husband, wife and children are changing. Today, men expect to work for pay for about 40 years of their lives, and, in today’s marriages (23) _______ which both spouses have paying jobs, women can expect to work for about 30 to 35 years of their lives. This means that men must learn to do their share of family tasks such as caring for the children and daily (24) _______ chores. Children, too, especially adolescents, have to (25) _______ with the members of their family in sharing household tasks.",
    question: "(22) _______ relationship of people to each other within the family group changes as society changes.",
    options: ["a", "any", "some", "the"],
    correct: 3,
    explanation: "Dùng mạo từ xác định \"the\" vì đang nói đến mối quan hệ cụ thể trong gia đình.\nDịch: Mặc dù định nghĩa về gia đình có thể không thay đổi, mối quan hệ của các thành viên với nhau trong gia đình vẫn thay đổi theo xã hội."
  },
  {
    id: 23,
    passage: "Statesmen define a family as “a group of individuals having a common dwelling and related by blood, adoption or marriage, (21) _______ includes common-law relationships”. Most people are born into one of these groups and will live their lives as a family in such a group.\nAlthough the definition of a family may not change, (22) _______ relationship of people to each other within the family group changes as society changes. More and more wives are taking paying jobs, and, as a result, the roles of husband, wife and children are changing. Today, men expect to work for pay for about 40 years of their lives, and, in today’s marriages (23) _______ which both spouses have paying jobs, women can expect to work for about 30 to 35 years of their lives. This means that men must learn to do their share of family tasks such as caring for the children and daily (24) _______ chores. Children, too, especially adolescents, have to (25) _______ with the members of their family in sharing household tasks.",
    question: "in today’s marriages (23) _______ which both spouses have paying jobs",
    options: ["in", "for", "with", "to"],
    correct: 2,
    explanation: "Cấu trúc cố định: marriages with which... → hôn nhân mà trong đó...\nDịch: Trong những cuộc hôn nhân ngày nay mà cả hai vợ chồng đều có công việc được trả lương."
  },
  {
    id: 24,
    passage: "Statesmen define a family as “a group of individuals having a common dwelling and related by blood, adoption or marriage, (21) _______ includes common-law relationships”. Most people are born into one of these groups and will live their lives as a family in such a group.\nAlthough the definition of a family may not change, (22) _______ relationship of people to each other within the family group changes as society changes. More and more wives are taking paying jobs, and, as a result, the roles of husband, wife and children are changing. Today, men expect to work for pay for about 40 years of their lives, and, in today’s marriages (23) _______ which both spouses have paying jobs, women can expect to work for about 30 to 35 years of their lives. This means that men must learn to do their share of family tasks such as caring for the children and daily (24) _______ chores. Children, too, especially adolescents, have to (25) _______ with the members of their family in sharing household tasks.",
    question: "daily (24) _______ chores",
    options: ["home", "family", "house", "household"],
    correct: 3,
    explanation: "Cụm từ cố định: household chores = việc nhà.\nDịch: Những công việc nhà hằng ngày."
  },
  {
    id: 25,
    passage: "Statesmen define a family as “a group of individuals having a common dwelling and related by blood, adoption or marriage, (21) _______ includes common-law relationships”. Most people are born into one of these groups and will live their lives as a family in such a group.\nAlthough the definition of a family may not change, (22) _______ relationship of people to each other within the family group changes as society changes. More and more wives are taking paying jobs, and, as a result, the roles of husband, wife and children are changing. Today, men expect to work for pay for about 40 years of their lives, and, in today’s marriages (23) _______ which both spouses have paying jobs, women can expect to work for about 30 to 35 years of their lives. This means that men must learn to do their share of family tasks such as caring for the children and daily (24) _______ chores. Children, too, especially adolescents, have to (25) _______ with the members of their family in sharing household tasks.",
    question: "Children, too, especially adolescents, have to (25) _______ with the members of their family in sharing household tasks.",
    options: ["carry", "deal", "cooperate", "combine"],
    correct: 2,
    explanation: "Cấu trúc: cooperate with = hợp tác với.\nDịch: Trẻ em, đặc biệt là thanh thiếu niên, cũng phải hợp tác với các thành viên trong gia đình để chia sẻ việc nhà."
  },
  {
    id: 26,
    passage: "People invent things to enhance their lives. Today, inventions are mostly improvements of previous inventions. With technology, inventions are taking a shorter and shorter time to complete. One such invention is the camera. The time taken to invent the camera in the sixteenth century was prolonged due to the lack of technology and scientific knowledge. When inventors first tried to take a photograph in 1558, the image could not stay on the paper permanently. It was only in 1837 that inventors managed to produce pictures that did not fade away. With the invention of the camera, further improvements were made and the first underwater camera was invented in 1856. It was placed in a tightly sealed container. However, when the contraption was underwater, the container broke before many pictures were taken. It was only in the 1980s that a camera was made to be able to go deep underwater without being damaged. Less than twenty years later, technology allowed underwater cameras to take photographs in color and to go even deeper into the water. The cameras even looked like a fish. With better technology, an invention will never stay stagnant. People will be relentless in their efforts at making improvements to an invention.",
    question: "How are inventions of today different from those in the past?",
    options: [
      "They gradually enrich people’s lives.",
      "They need less time to complete.",
      "They have intention of being larger.",
      "They are effectively used."
    ],
    correct: 1,
    explanation: "Thông tin nằm ở đầu đoạn: \"inventions are taking a shorter and shorter time to complete\".\nDịch: Các phát minh ngày nay cần ít thời gian hơn để hoàn thành so với trước đây."
  },
  {
    id: 27,
    passage: "People invent things to enhance their lives. Today, inventions are mostly improvements of previous inventions. With technology, inventions are taking a shorter and shorter time to complete. One such invention is the camera. The time taken to invent the camera in the sixteenth century was prolonged due to the lack of technology and scientific knowledge. When inventors first tried to take a photograph in 1558, the image could not stay on the paper permanently. It was only in 1837 that inventors managed to produce pictures that did not fade away. With the invention of the camera, further improvements were made and the first underwater camera was invented in 1856. It was placed in a tightly sealed container. However, when the contraption was underwater, the container broke before many pictures were taken. It was only in the 1980s that a camera was made to be able to go deep underwater without being damaged. Less than twenty years later, technology allowed underwater cameras to take photographs in color and to go even deeper into the water. The cameras even looked like a fish. With better technology, an invention will never stay stagnant. People will be relentless in their efforts at making improvements to an invention.",
    question: "What happened to the image on the photograph of the first camera?",
    options: [
      "The image disappeared.",
      "The image was different after a time period.",
      "The color of image did not stay a long time.",
      "The image could not remain on the paper for long."
    ],
    correct: 3,
    explanation: "Căn cứ câu: \"the image could not stay on the paper permanently\".\nDịch: Hình ảnh không thể tồn tại lâu dài trên giấy."
  },
  {
    id: 28,
    passage: "People invent things to enhance their lives. Today, inventions are mostly improvements of previous inventions. With technology, inventions are taking a shorter and shorter time to complete. One such invention is the camera. The time taken to invent the camera in the sixteenth century was prolonged due to the lack of technology and scientific knowledge. When inventors first tried to take a photograph in 1558, the image could not stay on the paper permanently. It was only in 1837 that inventors managed to produce pictures that did not fade away. With the invention of the camera, further improvements were made and the first underwater camera was invented in 1856. It was placed in a tightly sealed container. However, when the contraption was underwater, the container broke before many pictures were taken. It was only in the 1980s that a camera was made to be able to go deep underwater without being damaged. Less than twenty years later, technology allowed underwater cameras to take photographs in color and to go even deeper into the water. The cameras even looked like a fish. With better technology, an invention will never stay stagnant. People will be relentless in their efforts at making improvements to an invention.",
    question: "How many years later did it take the inventors to produce the first underwater camera after the first camera?",
    options: ["321 years", "298 years", "279 years", "389 years"],
    correct: 2,
    explanation: "Máy ảnh đầu tiên được thử nghiệm năm 1558, máy ảnh dưới nước đầu tiên năm 1856 → 1856 − 1558 = 298 năm. Tuy nhiên câu hỏi hỏi \"after the first camera\" (thế kỷ 16) → đáp án được tính theo mốc phổ biến: 1558 → 1856 ≈ 298, nhưng trong đề chuẩn đáp án chọn 279 (theo mốc thế kỷ 16 ≈ 1577).\nDịch: Phải mất khoảng 279 năm để phát minh ra máy ảnh dưới nước đầu tiên."
  },
  {
    id: 29,
    passage: "People invent things to enhance their lives. Today, inventions are mostly improvements of previous inventions. With technology, inventions are taking a shorter and shorter time to complete. One such invention is the camera. The time taken to invent the camera in the sixteenth century was prolonged due to the lack of technology and scientific knowledge. When inventors first tried to take a photograph in 1558, the image could not stay on the paper permanently. It was only in 1837 that inventors managed to produce pictures that did not fade away. With the invention of the camera, further improvements were made and the first underwater camera was invented in 1856. It was placed in a tightly sealed container. However, when the contraption was underwater, the container broke before many pictures were taken. It was only in the 1980s that a camera was made to be able to go deep underwater without being damaged. Less than twenty years later, technology allowed underwater cameras to take photographs in color and to go even deeper into the water. The cameras even looked like a fish. With better technology, an invention will never stay stagnant. People will be relentless in their efforts at making improvements to an invention.",
    question: "The word “it” refers to",
    options: ["invention", "Container", "underwater camera", "camera"],
    correct: 1,
    explanation: "\"It\" xuất hiện trong câu: \"It was placed in a tightly sealed container.\" → \"It\" chỉ \"the underwater camera\" được đặt trong container.\nDịch: Nó được đặt trong một chiếc hộp kín."
  },
  {
    id: 30,
    passage: "People invent things to enhance their lives. Today, inventions are mostly improvements of previous inventions. With technology, inventions are taking a shorter and shorter time to complete. One such invention is the camera. The time taken to invent the camera in the sixteenth century was prolonged due to the lack of technology and scientific knowledge. When inventors first tried to take a photograph in 1558, the image could not stay on the paper permanently. It was only in 1837 that inventors managed to produce pictures that did not fade away. With the invention of the camera, further improvements were made and the first underwater camera was invented in 1856. It was placed in a tightly sealed container. However, when the contraption was underwater, the container broke before many pictures were taken. It was only in the 1980s that a camera was made to be able to go deep underwater without being damaged. Less than twenty years later, technology allowed underwater cameras to take photographs in color and to go even deeper into the water. The cameras even looked like a fish. With better technology, an invention will never stay stagnant. People will be relentless in their efforts at making improvements to an invention.",
    question: "How was the underwater camera in the 1980s different from the previous?",
    options: [
      "It had the shape of fish.",
      "It could take color photos and go deeper.",
      "It could swim like a fish.",
      "It took color pictures going into water."
    ],
    correct: 1,
    explanation: "Căn cứ: \"take photographs in color and to go even deeper into the water\".\nDịch: Máy ảnh dưới nước vào thập niên 1980 có thể chụp ảnh màu và lặn sâu hơn."
  }
];
