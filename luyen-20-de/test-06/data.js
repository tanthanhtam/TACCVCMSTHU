const questions = [
  {
    id: 1,
    question: "Isaac _______ us a really funny joke, but I can’t remember it.",
    options: ["said", "told", "spoke", "mentioned"],
    correct: 1,
    explanation: "Cấu trúc: tell + người + vật (tell us a joke). Dịch: Isaac đã kể cho chúng tôi một câu chuyện cười rất vui, nhưng tôi không nhớ nổi."
  },
  {
    id: 2,
    question: "You should be ashamed _______ yourself!",
    options: ["with", "of", "on", "in"],
    correct: 1,
    explanation: "Cụm cố định: ashamed of. Dịch: Bạn nên cảm thấy xấu hổ với chính mình!"
  },
  {
    id: 3,
    question: "It’s important to have a sense of _______ or it’s easy to get depressed.",
    options: ["laughter", "amusement", "comedy", "humor"],
    correct: 3,
    explanation: "Cụm: a sense of humor = óc hài hước. Dịch: Có óc hài hước rất quan trọng, nếu không thì rất dễ bị chán nản."
  },
  {
    id: 4,
    question: "Jane and I listened to Guy’s explanation, but _______ of us believed him.",
    options: ["both", "either", "none", "neither"],
    correct: 3,
    explanation: "Neither of us = cả hai đều không. Dịch: Jane và tôi nghe lời giải thích của Guy, nhưng không ai trong hai chúng tôi tin anh ấy."
  },
  {
    id: 5,
    question: "These jeans are too _______. I think I need a bigger pair.",
    options: ["tight", "loose", "rough", "smooth"],
    correct: 0,
    explanation: "Too tight = quá chật. Dịch: Chiếc quần jeans này quá chật. Tôi nghĩ tôi cần một cái lớn hơn."
  },
  {
    id: 6,
    question: "I’m going to have a party in the play, _______ I?",
    options: ["am not", "don’t", "haven’t", "aren’t"],
    correct: 3,
    explanation: "Câu hỏi đuôi với be: am → aren’t I. Dịch: Tôi sẽ tổ chức một bữa tiệc trong vở kịch, phải không?"
  },
  {
    id: 7,
    question: "Sophie _______ have been ill today because she didn’t come to school.",
    options: ["can’t", "should", "must", "would"],
    correct: 2,
    explanation: "Must have + V3 = suy đoán chắc chắn trong quá khứ. Dịch: Sophie chắc hẳn đã bị ốm hôm nay vì cô ấy không đến trường."
  },
  {
    id: 8,
    question: "We were made _______ up all the mess we’d made.",
    options: ["clear", "to clear", "clearing", "cleared"],
    correct: 1,
    explanation: "Bị động của make: be made to + V. Dịch: Chúng tôi bị bắt phải dọn dẹp toàn bộ mớ bừa bộn mà mình gây ra."
  },
  {
    id: 9,
    question: "I _______ the windows cleaned about twice a year.",
    options: ["get", "am", "put", "do"],
    correct: 0,
    explanation: "Cấu trúc nhờ vả: get + O + V3. Dịch: Tôi cho người lau cửa sổ khoảng hai lần một năm."
  },
  {
    id: 10,
    question: "I’ll get my dad a book for his birthday _______ I find something better.",
    options: ["if", "although", "until", "unless"],
    correct: 3,
    explanation: "Unless = nếu không. Dịch: Tôi sẽ mua cho bố tôi một cuốn sách sinh nhật, trừ khi tôi tìm được thứ gì đó tốt hơn."
  },
  {
    id: 11,
    question: "Do you wish you _______ to help Michael in the shop last weekend?",
    options: ["hadn’t offered", "didn’t offer", "haven’t offered", "wouldn’t offered"],
    correct: 0,
    explanation: "Wish + had + V3 (ước trái với quá khứ). Dịch: Bạn có ước là mình đã không đề nghị giúp Michael ở cửa hàng cuối tuần trước không?"
  },
  {
    id: 12,
    question: "Charlotte earns _______ much money that she can’t spend it all!",
    options: ["such", "too", "enough", "so"],
    correct: 3,
    explanation: "So + much + danh từ không đếm được + that. Dịch: Charlotte kiếm nhiều tiền đến mức cô ấy không thể tiêu hết!"
  },
  {
    id: 13,
    question: "Nancy wanted to know _______ to New York _______.",
    options: [
      "why Nick did not go/ last summer",
      "why Nick had not gone/ the summer before",
      "why did not Nick go/ last summer",
      "why had Nick not gone/ the summer before"
    ],
    correct: 1,
    explanation: "Câu gián tiếp + lùi thì. Dịch: Nancy muốn biết tại sao Nick đã không đi New York vào mùa hè trước đó."
  },
  {
    id: 14,
    question: "That is the young man _______ we owe many thanks.",
    options: ["to whom", "who", "that", "to that"],
    correct: 0,
    explanation: "Owe thanks to + whom. Dịch: Đó là chàng trai mà chúng tôi mang ơn rất nhiều."
  },
  {
    id: 15,
    question: "That washing machine is _______ but _______ in quality.",
    options: [
      "a bit more expensive/ better than",
      "a bit as expensive/ many better",
      "a little more than expensive/ more good",
      "a little bit more expensive/ much better"
    ],
    correct: 3,
    explanation: "So sánh hơn + much better. Dịch: Chiếc máy giặt đó đắt hơn một chút nhưng chất lượng tốt hơn nhiều."
  },
  {
    id: 16,
    question: "The thieves are running as fast as possible _______ caught by the police.",
    options: [
      "so that she was not",
      "in order that not to be",
      "so as was not",
      "so as she was not"
    ],
    correct: 1,
    explanation: "In order (not) to / in order that + bị động. Dịch: Những tên trộm đang chạy nhanh nhất có thể để không bị cảnh sát bắt."
  },
  {
    id: 17,
    question: "They did not tell her the truth _______ to let her down.",
    options: [
      "because of they did not want",
      "because they did not want",
      "because not wanting",
      "due to not wanting"
    ],
    correct: 1,
    explanation: "Because + mệnh đề. Dịch: Họ không nói sự thật với cô ấy vì họ không muốn làm cô ấy thất vọng."
  },
  {
    id: 18,
    question: "People say that the bridge was destroyed in the war.",
    options: [
      "The bridge says being destroyed in the war.",
      "The bridge is said being destroyed in the war.",
      "The bridge is said to be destroyed in the war.",
      "The bridge is said to have been destroyed in the war."
    ],
    correct: 3,
    explanation: "Cấu trúc bị động kép + have been V3. Dịch: Người ta nói rằng cây cầu đã bị phá hủy trong chiến tranh."
  },
  {
    id: 19,
    question: "I like her _______.",
    options: [
      "hair long straight black",
      "black long straight hair",
      "long straight black hair",
      "straight long black hair"
    ],
    correct: 2,
    explanation: "Thứ tự tính từ: length → shape → color. Dịch: Tôi thích mái tóc dài, thẳng, đen của cô ấy."
  },
  {
    id: 20,
    question: "“How fashionable a pair of trainers you have!” “_______.”",
    options: [
      "Thanks for your compliment.",
      "I know it’s fashionable.",
      "Yes, of course.",
      "Do you want to know where I bought them?"
    ],
    correct: 0,
    explanation: "Đáp lại lời khen lịch sự. Dịch: Cảm ơn lời khen của bạn."
  },
{
    id: 21,
    passage: "London is famous (21) _______ its parks and gardens. Some of them belong to the Crown but they are all open to the public and the entrance is free of charge. In St James’s Park you can watch and (22) _______ swans, ducks, geese and other water birds. Hyde Park (23) _______ to be a hunting ground and is still popular with horse riders.\n\nThose who like a good argument should go to the Speakers’ Corner to listen to individuals (24) _______ their speeches on various subjects. Regent’s Park now houses London Zoo and open-air theatre where Shakespeare’s plays are staged in summer. Not (25) _______ the parks are in the city centre. Greenwich and Richmond are located in the suburbs. All these areas of green give the city dwellers an excellent chance to enjoy some peace and quiet away from traffic and crowded streets.",
    question: "London is famous _______ its parks and gardens.",
    options: ["by", "for", "from", "with"],
    correct: 1,
    explanation: "Cấu trúc cố định: be famous for + danh từ.\n→ Dịch câu: London nổi tiếng vì các công viên và khu vườn của nó."
  },
  {
    id: 22,
    passage: "London is famous (21) _______ its parks and gardens. Some of them belong to the Crown but they are all open to the public and the entrance is free of charge. In St James’s Park you can watch and (22) _______ swans, ducks, geese and other water birds. Hyde Park (23) _______ to be a hunting ground and is still popular with horse riders.\n\nThose who like a good argument should go to the Speakers’ Corner to listen to individuals (24) _______ their speeches on various subjects. Regent’s Park now houses London Zoo and open-air theatre where Shakespeare’s plays are staged in summer. Not (25) _______ the parks are in the city centre. Greenwich and Richmond are located in the suburbs. All these areas of green give the city dwellers an excellent chance to enjoy some peace and quiet away from traffic and crowded streets.",
    question: "In St James’s Park you can watch and _______ swans, ducks, geese and other water birds.",
    options: ["feed", "eat", "breed", "lead"],
    correct: 0,
    explanation: "Trong công viên, người ta có thể cho chim ăn.\n→ Dịch câu: Ở công viên St James’s, bạn có thể ngắm nhìn và cho thiên nga, vịt, ngỗng và các loài chim nước khác ăn."
  },
  {
    id: 23,
    passage: "London is famous (21) _______ its parks and gardens. Some of them belong to the Crown but they are all open to the public and the entrance is free of charge. In St James’s Park you can watch and (22) _______ swans, ducks, geese and other water birds. Hyde Park (23) _______ to be a hunting ground and is still popular with horse riders.\n\nThose who like a good argument should go to the Speakers’ Corner to listen to individuals (24) _______ their speeches on various subjects. Regent’s Park now houses London Zoo and open-air theatre where Shakespeare’s plays are staged in summer. Not (25) _______ the parks are in the city centre. Greenwich and Richmond are located in the suburbs. All these areas of green give the city dwellers an excellent chance to enjoy some peace and quiet away from traffic and crowded streets.",
    question: "Hyde Park _______ to be a hunting ground and is still popular with horse riders.",
    options: ["should", "ought", "used", "have"],
    correct: 2,
    explanation: "Cấu trúc: used to + V (đã từng trong quá khứ).\n→ Dịch câu: Hyde Park trước đây từng là một khu săn bắn và hiện nay vẫn phổ biến với người cưỡi ngựa."
  },
  {
    id: 24,
    passage: "London is famous (21) _______ its parks and gardens. Some of them belong to the Crown but they are all open to the public and the entrance is free of charge. In St James’s Park you can watch and (22) _______ swans, ducks, geese and other water birds. Hyde Park (23) _______ to be a hunting ground and is still popular with horse riders.\n\nThose who like a good argument should go to the Speakers’ Corner to listen to individuals (24) _______ their speeches on various subjects. Regent’s Park now houses London Zoo and open-air theatre where Shakespeare’s plays are staged in summer. Not (25) _______ the parks are in the city centre. Greenwich and Richmond are located in the suburbs. All these areas of green give the city dwellers an excellent chance to enjoy some peace and quiet away from traffic and crowded streets.",
    question: "Those who like a good argument should go to the Speakers’ Corner to listen to individuals _______ their speeches on various subjects.",
    options: ["doing", "giving", "taking", "talking"],
    correct: 1,
    explanation: "Cấu trúc: give a speech = phát biểu.\n→ Dịch câu: Những người thích tranh luận nên đến Speakers’ Corner để nghe các cá nhân trình bày bài phát biểu của họ về nhiều chủ đề."
  },
  {
    id: 25,
    passage: "London is famous (21) _______ its parks and gardens. Some of them belong to the Crown but they are all open to the public and the entrance is free of charge. In St James’s Park you can watch and (22) _______ swans, ducks, geese and other water birds. Hyde Park (23) _______ to be a hunting ground and is still popular with horse riders.\n\nThose who like a good argument should go to the Speakers’ Corner to listen to individuals (24) _______ their speeches on various subjects. Regent’s Park now houses London Zoo and open-air theatre where Shakespeare’s plays are staged in summer. Not (25) _______ the parks are in the city centre. Greenwich and Richmond are located in the suburbs. All these areas of green give the city dwellers an excellent chance to enjoy some peace and quiet away from traffic and crowded streets.",
    question: "Not _______ the parks are in the city centre.",
    options: ["each", "whole", "every", "all"],
    correct: 3,
    explanation: "Cấu trúc phủ định: Not all + danh từ số nhiều.\n→ Dịch câu: Không phải tất cả các công viên đều nằm ở trung tâm thành phố."
  },
{
    id: 26,
    passage: "O’Connell Street is the main thoroughfare and is one of the busiest shopping streets in Dublin. Even though it is not a very long street, the locals will proudly tell the visitor that it is the widest street in all of Europe. This claim often meets with protests, especially from French people, claiming the Champs Elysees of Paris as Europe’s widest street. But the witty Irishman won't easily relinquish bragging rights and will trump the French visitor with a fine distinction: The Champs Elysees is an avenue; O’Connell is a street. Divided by a few important monuments running the length of its centre, the street is named after Daniel O’Connell, an Irish patriot. His monument stands at the lower end of the road, facing O’Connell Bridge. O’Connell stands high above the business people, unhurried crowds of shoppers and students on a big column, surrounded by four angels representing Patriotism, Courage, Eloquence and Fidelity. Further up the street on the other side is the famous General Post Office or the GPO as Dubliners call it. During the Easter Rising of 1916, the GPO was taken over by the Irish Volunteers on Easter Monday and occupied by the revolutionary forces, sparking weeks of armed combat in the heart of Dublin. To this day, three of the angels bear bullet holes - two with a wound in the chest and one in its left arm.",
    question: "What is the writer’s main purpose in writing the text?",
    options: [
      "to explain what it’s like to be Irish",
      "to describe historic sights on Dublin’s O’Connell Street",
      "to introduce readers to the biography of Daniel O’Connell",
      "to show how difficult being a Dubliner can be"
    ],
    correct: 1,
    explanation: "Đoạn văn tập trung mô tả con phố O’Connell Street, các công trình, tượng đài và sự kiện lịch sử trên đó.\n→ Dịch câu hỏi: Mục đích chính của tác giả khi viết đoạn văn này là gì?"
  },
  {
    id: 27,
    passage: "O’Connell Street is the main thoroughfare and is one of the busiest shopping streets in Dublin. Even though it is not a very long street, the locals will proudly tell the visitor that it is the widest street in all of Europe. This claim often meets with protests, especially from French people, claiming the Champs Elysees of Paris as Europe’s widest street. But the witty Irishman won't easily relinquish bragging rights and will trump the French visitor with a fine distinction: The Champs Elysees is an avenue; O’Connell is a street. Divided by a few important monuments running the length of its centre, the street is named after Daniel O’Connell, an Irish patriot. His monument stands at the lower end of the road, facing O’Connell Bridge. O’Connell stands high above the business people, unhurried crowds of shoppers and students on a big column, surrounded by four angels representing Patriotism, Courage, Eloquence and Fidelity. Further up the street on the other side is the famous General Post Office or the GPO as Dubliners call it. During the Easter Rising of 1916, the GPO was taken over by the Irish Volunteers on Easter Monday and occupied by the revolutionary forces, sparking weeks of armed combat in the heart of Dublin. To this day, three of the angels bear bullet holes - two with a wound in the chest and one in its left arm.",
    question: "Dubliners claim that O’Connell Street",
    options: [
      "is the widest street in the world",
      "is the widest street in Europe",
      "is the longest street in all of Europe",
      "wider than it is long"
    ],
    correct: 1,
    explanation: "Đoạn văn nêu rõ: locals proudly tell the visitor that it is the widest street in all of Europe.\n→ Dịch câu: Người dân Dublin cho rằng phố O’Connell là con phố rộng nhất châu Âu."
  },
  {
    id: 28,
    passage: "O’Connell Street is the main thoroughfare and is one of the busiest shopping streets in Dublin. Even though it is not a very long street, the locals will proudly tell the visitor that it is the widest street in all of Europe. This claim often meets with protests, especially from French people, claiming the Champs Elysees of Paris as Europe’s widest street. But the witty Irishman won't easily relinquish bragging rights and will trump the French visitor with a fine distinction: The Champs Elysees is an avenue; O’Connell is a street. Divided by a few important monuments running the length of its centre, the street is named after Daniel O’Connell, an Irish patriot. His monument stands at the lower end of the road, facing O’Connell Bridge. O’Connell stands high above the business people, unhurried crowds of shoppers and students on a big column, surrounded by four angels representing Patriotism, Courage, Eloquence and Fidelity. Further up the street on the other side is the famous General Post Office or the GPO as Dubliners call it. During the Easter Rising of 1916, the GPO was taken over by the Irish Volunteers on Easter Monday and occupied by the revolutionary forces, sparking weeks of armed combat in the heart of Dublin. To this day, three of the angels bear bullet holes - two with a wound in the chest and one in its left arm.",
    question: "What does the author say about the Irish people?",
    options: [
      "They are talkative and playful",
      "They are rebellious and do not like foreigners",
      "They never agree with French people",
      "They are clever and funny"
    ],
    correct: 3,
    explanation: "Cụm từ witty Irishman cho thấy người Ireland được miêu tả là thông minh, hài hước.\n→ Dịch câu hỏi: Tác giả nói gì về người Ireland?"
  },
  {
    id: 29,
    passage: "O’Connell Street is the main thoroughfare and is one of the busiest shopping streets in Dublin. Even though it is not a very long street, the locals will proudly tell the visitor that it is the widest street in all of Europe. This claim often meets with protests, especially from French people, claiming the Champs Elysees of Paris as Europe’s widest street. But the witty Irishman won't easily relinquish bragging rights and will trump the French visitor with a fine distinction: The Champs Elysees is an avenue; O’Connell is a street. Divided by a few important monuments running the length of its centre, the street is named after Daniel O’Connell, an Irish patriot. His monument stands at the lower end of the road, facing O’Connell Bridge. O’Connell stands high above the business people, unhurried crowds of shoppers and students on a big column, surrounded by four angels representing Patriotism, Courage, Eloquence and Fidelity. Further up the street on the other side is the famous General Post Office or the GPO as Dubliners call it. During the Easter Rising of 1916, the GPO was taken over by the Irish Volunteers on Easter Monday and occupied by the revolutionary forces, sparking weeks of armed combat in the heart of Dublin. To this day, three of the angels bear bullet holes - two with a wound in the chest and one in its left arm.",
    question: "The Daniel O’Connell statue stands",
    options: [
      "opposite O’Connell Bridge",
      "behind the General Post Office",
      "at the upper end of the street",
      "far away from the city centre"
    ],
    correct: 0,
    explanation: "Đoạn văn: His monument stands at the lower end of the road, facing O’Connell Bridge.\n→ Dịch câu: Tượng Daniel O’Connell nằm đối diện cầu O’Connell."
  },
  {
    id: 30,
    passage: "O’Connell Street is the main thoroughfare and is one of the busiest shopping streets in Dublin. Even though it is not a very long street, the locals will proudly tell the visitor that it is the widest street in all of Europe. This claim often meets with protests, especially from French people, claiming the Champs Elysees of Paris as Europe’s widest street. But the witty Irishman won't easily relinquish bragging rights and will trump the French visitor with a fine distinction: The Champs Elysees is an avenue; O’Connell is a street. Divided by a few important monuments running the length of its centre, the street is named after Daniel O’Connell, an Irish patriot. His monument stands at the lower end of the road, facing O’Connell Bridge. O’Connell stands high above the business people, unhurried crowds of shoppers and students on a big column, surrounded by four angels representing Patriotism, Courage, Eloquence and Fidelity. Further up the street on the other side is the famous General Post Office or the GPO as Dubliners call it. During the Easter Rising of 1916, the GPO was taken over by the Irish Volunteers on Easter Monday and occupied by the revolutionary forces, sparking weeks of armed combat in the heart of Dublin. To this day, three of the angels bear bullet holes - two with a wound in the chest and one in its left arm.",
    question: "Which of the following would be the best title for this passage?",
    options: [
      "The Irish Take Pride in Their Capital City",
      "The Widest Street in Europe",
      "Sights and History on Dublin’s O’Connell Street",
      "Dublin’s Famous Landmark"
    ],
    correct: 2,
    explanation: "Tiêu đề này bao quát cả địa điểm, công trình và lịch sử được nhắc đến trong bài.\n→ Dịch câu hỏi: Đâu là tiêu đề phù hợp nhất cho đoạn văn?"
  }
];
