const questions = [
{
  id: 1,
  question: "My friend works very hard. He wants to make a success of his new business.",
  options: [
    "My friend works very hard as so to make a success of his new business.",
    "My friend works very hard so that he can make a success of his new business.",
    "My friend works very hard in order he can make a success of his new business.",
    "My friend works very hard so that he wants to make a success of his new business."
  ],
  correct: 1,
  explanation: "Cấu trúc chỉ mục đích: so that + S + can/could. Đáp án B đúng. Dịch: Bạn tôi làm việc rất chăm chỉ để anh ấy có thể làm cho việc kinh doanh mới của mình thành công."
},
{
  id: 2,
  question: "Frank invited Janet to the party. He met her in Japan.",
  options: [
    "Frank invited Janet whom he met in Japan to the party.",
    "Frank invited Janet he met in Japan to the party.",
    "Frank invited Janet, that he met in Japan, to the party.",
    "Frank invited Janet, whom he met in Japan, to the party."
  ],
  correct: 0,
  explanation: "Mệnh đề quan hệ xác định: whom dùng cho người, không có dấu phẩy. Đáp án A đúng. Dịch: Frank mời Janet – người mà anh ấy gặp ở Nhật Bản – đến bữa tiệc."
},
{
  id: 3,
  question: "I’ll give this dictionary to _______ wants to have it.",
  options: ["anyone", "whatever", "everyone", "whoever"],
  correct: 3,
  explanation: "Whoever = người mà (làm chủ ngữ trong mệnh đề). Đáp án D đúng. Dịch: Tôi sẽ đưa cuốn từ điển này cho bất cứ ai muốn có nó."
},
{
  id: 4,
  question: "It is _______ work of art that everyone wants to have a look at it.",
  options: ["such an unusual", "such unusual a", "a so unusual", "so an unusual"],
  correct: 0,
  explanation: "Cấu trúc: such + a/an + adj + noun. Đáp án A đúng. Dịch: Đó là một tác phẩm nghệ thuật необычно đến mức ai cũng muốn xem."
},
{
  id: 5,
  question: "We decided to take a late flight _______ we could spend more time with our family.",
  options: ["so as to", "in order", "so that", "in order to"],
  correct: 2,
  explanation: "So that + S + could chỉ mục đích. Đáp án C đúng. Dịch: Chúng tôi quyết định bay chuyến muộn để có thể dành nhiều thời gian hơn cho gia đình."
},
{
  id: 6,
  question: "Lan’s the best singer in our school. _______.",
  options: [
    "Yes, tell me about it!",
    "I can’t agree with you more.",
    "That’s OK!",
    "Yes, please"
  ],
  correct: 1,
  explanation: "Câu đồng tình mạnh mẽ: I can’t agree with you more. Đáp án B đúng. Dịch: Tôi hoàn toàn đồng ý với bạn."
},
{
  id: 7,
  question: "Remember to _______ your best clothes for the interview.",
  options: ["wear out", "put on", "show up", "fill in"],
  correct: 1,
  explanation: "Put on = mặc (quần áo). Đáp án B đúng. Dịch: Hãy nhớ mặc bộ quần áo đẹp nhất cho buổi phỏng vấn."
},
{
  id: 8,
  question: "Different conversation efforts have been made to save _______ species.",
  options: ["danger", "dangerous", "endangering", "endangered"],
  correct: 3,
  explanation: "Endangered species = loài có nguy cơ tuyệt chủng. Đáp án D đúng. Dịch: Nhiều nỗ lực bảo tồn đã được thực hiện để cứu các loài đang bị đe dọa."
},
{
  id: 9,
  question: "Although he is quite busy at _______, he always tries to spend some time with his children.",
  options: ["career", "work", "job", "employment"],
  correct: 1,
  explanation: "Cụm cố định: busy at work. Đáp án B đúng. Dịch: Mặc dù rất bận rộn ở công việc, anh ấy vẫn cố gắng dành thời gian cho con."
},
{
  id: 10,
  question: "Harvard _______ a school for men, but now it is coeducational, serving as many women as men.",
  options: ["was used to be", "used to be", "was used to", "was used"],
  correct: 1,
  explanation: "Used to be = đã từng là. Đáp án B đúng. Dịch: Harvard trước đây là trường dành cho nam, nhưng nay là trường nam nữ học chung."
},
{
  id: 11,
  question: "_______, he would have been able to pass the exam.",
  options: [
    "If he studied more",
    "If he were studying more",
    "studying more",
    "Had he studied more"
  ],
  correct: 3,
  explanation: "Câu điều kiện loại 3 đảo ngữ: Had + S + V3. Đáp án D đúng. Dịch: Nếu anh ấy học nhiều hơn, anh ấy đã có thể đỗ kỳ thi."
},
{
  id: 12,
  question: "Jason asked me _____ me the book the day before.",
  options: [
    "if who gave",
    "if who has given",
    "who had given",
    "that how had given"
  ],
  correct: 2,
  explanation: "Câu gián tiếp: wh-word + S + V (lùi thì). Đáp án C đúng. Dịch: Jason hỏi tôi ai đã đưa cho tôi cuốn sách ngày hôm trước."
},
{
  id: 13,
  question: "In our hospital, patients _____ every morning.",
  options: ["are examined", "were examining", "have examined", "can examine"],
  correct: 0,
  explanation: "Câu bị động hiện tại đơn. Đáp án A đúng. Dịch: Ở bệnh viện chúng tôi, bệnh nhân được khám mỗi sáng."
},
{
  id: 14,
  question: "Lucy was late for school this morning because the alarm didn’t _______ as usual.",
  options: ["ring off", "get off", "go off", "take off"],
  correct: 2,
  explanation: "Go off = (chuông) reo. Đáp án C đúng. Dịch: Lucy đến trường muộn vì chuông báo thức không reo như thường lệ."
},
{
  id: 15,
  question: "_______ did Jane realize that she had lost her purse at the supermarket.",
  options: [
    "When she entered the room",
    "After she had entered the room",
    "On entering the room",
    "Only after entering the room"
  ],
  correct: 3,
  explanation: "Only after + V-ing → đảo ngữ. Đáp án D đúng. Dịch: Chỉ sau khi bước vào phòng, Jane mới nhận ra mình đã làm mất ví."
},
{
  id: 16,
  question: "The more he tried to explain, _______ we got.",
  options: [
    "the much confused",
    "the many confusing",
    "the more confusing",
    "the more confused"
  ],
  correct: 3,
  explanation: "So sánh kép: the more + adj. Confused dùng cho người. Đáp án D đúng. Dịch: Anh ấy càng cố giải thích thì chúng tôi càng bối rối."
},
{
  id: 17,
  question: "In a formal interview, it is essential to maintain good eye _______ with the interviewers.",
  options: ["touch", "link", "contact", "connection"],
  correct: 2,
  explanation: "Cụm cố định: eye contact. Đáp án C đúng. Dịch: Trong phỏng vấn trang trọng, việc giữ giao tiếp bằng mắt là rất cần thiết."
},
{
  id: 18,
  question: "Unfortunately, the company closed down because it couldn’t keep _______ with rapidly changing technology.",
  options: ["speed", "fast", "time", "pace"],
  correct: 3,
  explanation: "Keep pace with = theo kịp. Đáp án D đúng. Dịch: Công ty đóng cửa vì không theo kịp công nghệ thay đổi nhanh chóng."
},
{
  id: 19,
  question: "The twins look so much alike that almost no one can_______ them_______.",
  options: [
    "take/apart",
    "tell/away",
    "tell/apart",
    "take/on"
  ],
  correct: 2,
  explanation: "Tell apart = phân biệt. Đáp án C đúng. Dịch: Cặp song sinh giống nhau đến mức hầu như không ai phân biệt được."
},
{
  id: 20,
  question: "The players’ protests _______ no difference to the referee’s decision at all.",
  options: ["did", "made", "caused", "created"],
  correct: 1,
  explanation: "Cụm cố định: make no difference. Đáp án B đúng. Dịch: Sự phản đối của các cầu thủ không tạo ra bất kỳ khác biệt nào đối với quyết định của trọng tài."
},
{
  id: 21,
  passage: "I have been working with teenagers for 5 years. I have spent time (21) _______ to them beside teaching them English. I remember once asked them if their parents and classmates had influence on their success at school. Some said their parents had the most influence on their achievement. The reason given was that parents always loved their children (22) _______, and they definitely would do their best to help and support their children. (23) _______, parents could do all the housework so that their children could have time for studying.  However, some students revealed that their parents were too busy to spend time with them. Therefore, it was difficult for parents help their children. In this case, classmates or friends affected their success (24) _______ because they talked to them more and they helped each other to deal (25) _______ any difficulty in studying.",
  question: "I have spent time _______ to them beside teaching them English.",
  options: ["to talk", "talking", "talk", "have talked"],
  correct: 1,
  explanation: "Cấu trúc: spend time + V-ing. \n→ Dịch: Tôi đã dành thời gian nói chuyện với họ bên cạnh việc dạy họ tiếng Anh."
},
{
  id: 22,
  passage: "I have been working with teenagers for 5 years. I have spent time (21) _______ to them beside teaching them English. I remember once asked them if their parents and classmates had influence on their success at school. Some said their parents had the most influence on their achievement. The reason given was that parents always loved their children (22) _______, and they definitely would do their best to help and support their children. (23) _______, parents could do all the housework so that their children could have time for studying.  However, some students revealed that their parents were too busy to spend time with them. Therefore, it was difficult for parents help their children. In this case, classmates or friends affected their success (24) _______ because they talked to them more and they helped each other to deal (25) _______ any difficulty in studying.",
  question: "Parents always loved their children _______.",
  options: ["unconditional", "conditionally", "conditional", "unconditionally"],
  correct: 3,
  explanation: "Cần trạng từ để bổ nghĩa cho động từ \"loved\". \nUnconditionally = một cách vô điều kiện. \n→ Dịch: Cha mẹ luôn yêu thương con cái mình một cách vô điều kiện."
},
{
  id: 23,
  passage: "I have been working with teenagers for 5 years. I have spent time (21) _______ to them beside teaching them English. I remember once asked them if their parents and classmates had influence on their success at school. Some said their parents had the most influence on their achievement. The reason given was that parents always loved their children (22) _______, and they definitely would do their best to help and support their children. (23) _______, parents could do all the housework so that their children could have time for studying.  However, some students revealed that their parents were too busy to spend time with them. Therefore, it was difficult for parents help their children. In this case, classmates or friends affected their success (24) _______ because they talked to them more and they helped each other to deal (25) _______ any difficulty in studying.",
  question: "_______, parents could do all the housework so that their children could have time for studying.",
  options: ["Therefore", "Moreover", "For example", "Beside"],
  correct: 2,
  explanation: "Câu này đưa ra ví dụ minh họa cho ý trước → dùng \"For example\". \n→ Dịch: Ví dụ, cha mẹ có thể làm tất cả việc nhà để con cái có thời gian học tập."
},
{
  id: 24,
  passage: "I have been working with teenagers for 5 years. I have spent time (21) _______ to them beside teaching them English. I remember once asked them if their parents and classmates had influence on their success at school. Some said their parents had the most influence on their achievement. The reason given was that parents always loved their children (22) _______, and they definitely would do their best to help and support their children. (23) _______, parents could do all the housework so that their children could have time for studying.  However, some students revealed that their parents were too busy to spend time with them. Therefore, it was difficult for parents help their children. In this case, classmates or friends affected their success (24) _______ because they talked to them more and they helped each other to deal (25) _______ any difficulty in studying.",
  question: "Classmates or friends affected their success _______.",
  options: ["many", "more", "the most", "a little"],
  correct: 1,
  explanation: "So sánh ngầm với ảnh hưởng của cha mẹ → dùng so sánh hơn \"more\". \n→ Dịch: Trong trường hợp này, bạn bè hoặc bạn học ảnh hưởng đến thành công của họ nhiều hơn."
},
{
  id: 25,
  passage: "I have been working with teenagers for 5 years. I have spent time (21) _______ to them beside teaching them English. I remember once asked them if their parents and classmates had influence on their success at school. Some said their parents had the most influence on their achievement. The reason given was that parents always loved their children (22) _______, and they definitely would do their best to help and support their children. (23) _______, parents could do all the housework so that their children could have time for studying.  However, some students revealed that their parents were too busy to spend time with them. Therefore, it was difficult for parents help their children. In this case, classmates or friends affected their success (24) _______ because they talked to them more and they helped each other to deal (25) _______ any difficulty in studying.",
  question: "They helped each other to deal _______ any difficulty in studying.",
  options: ["on", "with", "from", "to"],
  correct: 1,
  explanation: "Cấu trúc cố định: deal with + something. \n→ Dịch: Họ giúp đỡ lẫn nhau để giải quyết bất kỳ khó khăn nào trong học tập."
},
{
  id: 26,
  passage: "Today English is considered a global language or lingua franca. It is said that if you do not know English and cannot use it well, you may meet lots of difficulties in the modern world. More and more people are learning English for several reasons. Firstly, they want to improve their knowledge. It is obvious that most of the important sources of information are now in English. We can easily find websites, journals, newspapers, and encyclopedias in English everywhere. If we know English well, we can attend quite a lot of online courses or go abroad to study. Many universities in different countries offer courses in English even though it is not their native language. Secondly, it is easier to get a well- paid job if you can use English. Most multinational companies require a certain degree of English proficiency from potential employees. Therefore, in order to get a position with a top company, more and more are learning English. Even local companies now require their staff to know English. The reason for that is they may have business relationships with companies in other countries which use English as their working language. These are the most common reasons explaining why people like to, and need to study English.",
  question: "What is the status of English in the world today?",
  options: ["a world - wide language.", "a modern language", "a language of media", "a. language of employees"],
  correct: 0,
  explanation: "Căn cứ câu: \"Today English is considered a global language or lingua franca.\" \n→ Dịch: Ngày nay, tiếng Anh được coi là một ngôn ngữ toàn cầu hay ngôn ngữ chung."
},
{
  id: 27,
  passage: "Today English is considered a global language or lingua franca. It is said that if you do not know English and cannot use it well, you may meet lots of difficulties in the modern world. More and more people are learning English for several reasons. Firstly, they want to improve their knowledge. It is obvious that most of the important sources of information are now in English. We can easily find websites, journals, newspapers, and encyclopedias in English everywhere. If we know English well, we can attend quite a lot of online courses or go abroad to study. Many universities in different countries offer courses in English even though it is not their native language. Secondly, it is easier to get a well- paid job if you can use English. Most multinational companies require a certain degree of English proficiency from potential employees. Therefore, in order to get a position with a top company, more and more are learning English. Even local companies now require their staff to know English. The reason for that is they may have business relationships with companies in other countries which use English as their working language. These are the most common reasons explaining why people like to, and need to study English.",
  question: "How can we improve our knowledge if we know English?",
  options: [
    "We can get important sources of information in English.",
    "We can attend quite a lot of online courses.",
    "We can go abroad to study.",
    "All the above are correct."
  ],
  correct: 3,
  explanation: "Đoạn văn liệt kê đầy đủ 3 ý A, B, C. \n→ Dịch: Nếu biết tiếng Anh, chúng ta có thể tiếp cận nguồn thông tin quan trọng, học các khóa học trực tuyến và đi du học."
},
{
  id: 28,
  passage: "Today English is considered a global language or lingua franca. It is said that if you do not know English and cannot use it well, you may meet lots of difficulties in the modern world. More and more people are learning English for several reasons. Firstly, they want to improve their knowledge. It is obvious that most of the important sources of information are now in English. We can easily find websites, journals, newspapers, and encyclopedias in English everywhere. If we know English well, we can attend quite a lot of online courses or go abroad to study. Many universities in different countries offer courses in English even though it is not their native language. Secondly, it is easier to get a well- paid job if you can use English. Most multinational companies require a certain degree of English proficiency from potential employees. Therefore, in order to get a position with a top company, more and more are learning English. Even local companies now require their staff to know English. The reason for that is they may have business relationships with companies in other countries which use English as their working language. These are the most common reasons explaining why people like to, and need to study English.",
  question: "What does the word they in the third passage refer to?",
  options: [
    "the multinational companies.",
    "the potential employees",
    "the local companies",
    "the staff"
  ],
  correct: 2,
  explanation: "\"They\" xuất hiện trong câu nói về local companies có quan hệ kinh doanh quốc tế. \n→ Dịch: Lý do là các công ty địa phương có thể có mối quan hệ kinh doanh với các công ty ở những quốc gia khác."
},
{
  id: 29,
  passage: "Today English is considered a global language or lingua franca. It is said that if you do not know English and cannot use it well, you may meet lots of difficulties in the modern world. More and more people are learning English for several reasons. Firstly, they want to improve their knowledge. It is obvious that most of the important sources of information are now in English. We can easily find websites, journals, newspapers, and encyclopedias in English everywhere. If we know English well, we can attend quite a lot of online courses or go abroad to study. Many universities in different countries offer courses in English even though it is not their native language. Secondly, it is easier to get a well- paid job if you can use English. Most multinational companies require a certain degree of English proficiency from potential employees. Therefore, in order to get a position with a top company, more and more are learning English. Even local companies now require their staff to know English. The reason for that is they may have business relationships with companies in other countries which use English as their working language. These are the most common reasons explaining why people like to, and need to study English.",
  question: "Why are employees learning English?",
  options: [
    "Because they want to get a position with top companies.",
    "Because they have difficulties with it.",
    "Because their companies require them to do so.",
    "A and C are correct."
  ],
  correct: 3,
  explanation: "Đoạn văn nêu rõ cả hai lý do A và C. \n→ Dịch: Nhân viên học tiếng Anh để có vị trí trong các công ty hàng đầu và vì công ty của họ yêu cầu điều đó."
},
{
  id: 30,
  passage: "Today English is considered a global language or lingua franca. It is said that if you do not know English and cannot use it well, you may meet lots of difficulties in the modern world. More and more people are learning English for several reasons. Firstly, they want to improve their knowledge. It is obvious that most of the important sources of information are now in English. We can easily find websites, journals, newspapers, and encyclopedias in English everywhere. If we know English well, we can attend quite a lot of online courses or go abroad to study. Many universities in different countries offer courses in English even though it is not their native language. Secondly, it is easier to get a well- paid job if you can use English. Most multinational companies require a certain degree of English proficiency from potential employees. Therefore, in order to get a position with a top company, more and more are learning English. Even local companies now require their staff to know English. The reason for that is they may have business relationships with companies in other countries which use English as their working language. These are the most common reasons explaining why people like to, and need to study English.",
  question: "How many reasons of learning English are mentioned in the passage?",
  options: ["two", "three", "four", "only one."],
  correct: 0,
  explanation: "Đoạn văn dùng \"Firstly\" và \"Secondly\" → có 2 lý do. \n→ Dịch: Có hai lý do học tiếng Anh được đề cập trong đoạn văn."
}
];
