const questions = [
  {
    id: 1,
    question: "Would you mind not _______ on the bus?",
    options: ["smokes", "to smoke", "smoke", "smoking"],
    correct: 3,
    explanation: "Cấu trúc: Would you mind + not + V-ing. → Sau 'mind' luôn dùng V-ing. Dịch: Bạn có phiền không nếu không hút thuốc trên xe buýt?"
  },
  {
    id: 2,
    question: "You should pay attention _______ what your teacher explains.",
    options: ["at", "to", "about", "with"],
    correct: 1,
    explanation: "Cấu trúc cố định: pay attention to + N/V-ing. Dịch: Bạn nên chú ý đến những gì giáo viên giải thích."
  },
  {
    id: 3,
    question: "My parents hope to travel around _______ world next summer.",
    options: ["a", "an", "the", "x"],
    correct: 2,
    explanation: "Cụm cố định: the world. Dịch: Bố mẹ tôi hy vọng sẽ đi du lịch vòng quanh thế giới vào mùa hè tới."
  },
  {
    id: 4,
    question: "Many students find English very _______, so they are very _______ of it.",
    options: [
      "challenged/ frightened",
      "challenging/ frightening",
      "challenging/ frightened",
      "challenged/ frightening"
    ],
    correct: 2,
    explanation: "V-ing (challenging) miêu tả tính chất của tiếng Anh; V-ed (frightened) miêu tả cảm xúc của người học. Dịch: Nhiều học sinh thấy tiếng Anh rất khó nên họ rất sợ nó."
  },
  {
    id: 5,
    question: "_______ it rained heavily, we couldn’t go to school.",
    options: ["Because of", "Because", "Although", "However"],
    correct: 1,
    explanation: "Because + mệnh đề (S + V). Because of + danh từ. Dịch: Vì trời mưa to nên chúng tôi không thể đến trường."
  },
  {
    id: 6,
    question: "Deforestation has _______ floods all over the country.",
    options: ["resulted from", "resulted in", "resulted of", "resulted into"],
    correct: 1,
    explanation: "Cấu trúc: result in = dẫn đến (kết quả). Dịch: Nạn phá rừng đã dẫn đến lũ lụt trên khắp cả nước."
  },
  {
    id: 7,
    question: "You’re always _______ excuses for not helping me with chores.",
    options: ["making", "warning", "sending", "building"],
    correct: 0,
    explanation: "Cụm cố định: make excuses = viện cớ. Dịch: Bạn luôn viện cớ để không giúp tôi làm việc nhà."
  },
  {
    id: 8,
    question: "The decision was postponed, _______ was exactly what he wanted.",
    options: ["which", "that", "who", "whom"],
    correct: 0,
    explanation: "Mệnh đề quan hệ không xác định, thay cho cả mệnh đề trước → dùng which. Dịch: Quyết định đã bị hoãn, điều đó đúng như anh ấy mong muốn."
  },
  {
    id: 9,
    question:
      "John and Mary are talking about going to the cinema next week.\nJohn: Is Friday evening possible for you?\t\tMary: _______.",
    options: [
      "I hope so, too.",
      "I really enjoying meeting you.",
      "Thank you.",
      "Yes, that’s fine."
    ],
    correct: 3,
    explanation: "Câu trả lời phù hợp cho lời đề nghị/đề xuất. Dịch: – Tối thứ Sáu có được không? – Vâng, được."
  },
  {
    id: 10,
    question: "“My father bought a new car last year,” Daisy said.",
    options: [
      "Daisy said that my father had bought a new car the previous year.",
      "Daisy said that my father bought a new car last year.",
      "Daisy said that her father had bought a new car the previous year.",
      "Daisy said that her father would buy a new car last year."
    ],
    correct: 2,
    explanation: "Câu gián tiếp: đổi đại từ (my → her), thì quá khứ hoàn thành, last year → the previous year. Dịch: Daisy nói rằng bố cô ấy đã mua một chiếc xe mới vào năm trước."
  },
  {
    id: 11,
    question: "The bicycles _______ in that shop are the most expensive in town.",
    options: ["are sold", "addling", "sold", "are selling"],
    correct: 2,
    explanation: "Rút gọn mệnh đề quan hệ dạng bị động: bicycles (which are) sold. Dịch: Những chiếc xe đạp được bán trong cửa hàng đó là đắt nhất thị trấn."
  },
  {
    id: 12,
    question: "He _______ a closer look at the contract before signing it.",
    options: ["lent", "took", "fixed", "brought"],
    correct: 1,
    explanation: "Cụm cố định: take a closer look at = xem xét kỹ. Dịch: Anh ấy xem kỹ hợp đồng trước khi ký."
  },
  {
    id: 13,
    question: "She was able to finish university _______ her financial difficulties.",
    options: ["although", "because", "despite", "because of"],
    correct: 2,
    explanation: "Despite + danh từ/cụm danh từ. Dịch: Cô ấy vẫn có thể tốt nghiệp đại học mặc dù gặp khó khăn tài chính."
  },
  {
    id: 14,
    question: "Bob agreed _______ us with this maths problem.",
    options: ["helped", "help", "to help", "helping"],
    correct: 2,
    explanation: "Cấu trúc: agree to + V. Dịch: Bob đồng ý giúp chúng tôi giải bài toán này."
  },
  {
    id: 15,
    question: "We need to help _______ homeless in our community.",
    options: ["Ø (no article)", "a", "an", "the"],
    correct: 3,
    explanation: "The + adjective → chỉ một nhóm người (the homeless). Dịch: Chúng ta cần giúp đỡ những người vô gia cư trong cộng đồng."
  },
  {
    id: 16,
    question: "You can cook Italian food, _______?",
    options: ["won’t you", "didn’t you", "can’t you", "haven’t you"],
    correct: 2,
    explanation: "Câu hỏi đuôi: mệnh đề chính có 'can' → đuôi 'can’t you'. Dịch: Bạn có thể nấu món Ý, đúng không?"
  },
  {
    id: 17,
    question:
      "Sandie and Nicky are talking about music.\n- Sandie: “Listening to music is a good way to relax.”\t\t- Nicky: “_______ . It can refresh our minds.”",
    options: [
      "You’re welcome",
      "You’re right",
      "I disagree",
      "It’s not true"
    ],
    correct: 1,
    explanation: "Đồng tình với ý kiến người nói trước. Dịch: – Nghe nhạc là cách thư giãn tốt. – Bạn nói đúng."
  },
  {
    id: 18,
    question: "Drivers are required to wear their seat belts while driving.",
    options: [
      "Drivers may wear their seat belts while driving.",
      "Drivers must wear their seat belts while driving.",
      "Drivers shouldn’t wear their scat belts while driving.",
      "Drivers needn’t wear their seat belts while driving."
    ],
    correct: 1,
    explanation: "Required to = must. Dịch: Người lái xe phải thắt dây an toàn khi lái xe."
  },
  {
    id: 19,
    question: "“I took part in a green campaign last summer,” said Ted.",
    options: [
      "Ted said that I had taken part in a green campaign the previous summer.",
      "Ted said that he would take part in a green campaign last summer.",
      "Ted said that he had taken part in a green campaign the previous summer.",
      "Ted said that I had taken part in a green campaign last summer."
    ],
    correct: 2,
    explanation: "Câu gián tiếp: đổi đại từ I → he; thì quá khứ hoàn thành; last summer → the previous summer. Dịch: Ted nói rằng anh ấy đã tham gia một chiến dịch xanh vào mùa hè trước."
  },
  {
    id: 20,
    question: "Paul plays tennis better than I do.",
    options: [
      "Paul doesn’t play tennis better than I do.",
      "I don’t play tennis as well as Paul does.",
      "I play tennis better than Paul does.",
      "Paul plays tennis as well as I do."
    ],
    correct: 1,
    explanation: "So sánh hơn được chuyển sang cấu trúc not as…as. Dịch: Tôi chơi quần vợt không giỏi bằng Paul."
  }, 
{
    id: 21,
    passage: "Sociologists have been carrying out research into the social pressures of being a teenager. (21) _______ adolescents are unhappy at school because they find it difficult to make friends, which can bring on illness or (22) _______ in poor grades. They may also worry about their appearance and often feel under enormous pressure to dress, talk and behave the same as others. This phenomenon is called peer pressure, and it is very common in today’s society.\n\nAdvertising is claimed to contribute a lot to the social pressures teenagers experience. Advertisers know how important it is to feel that you belong to a group when you are in your teens, (23) _______ they try to persuade teenagers that certain products will make them popular with their classmates.\n\nSadly, many teenagers act (24) _______ and even do dangerous things just to make others accept them. Peer pressure is often the reason for teenage smoking, drug abuse or dangerous driving. Teenagers need to learn to say ‘no’ to social pressure and to find friends (25) _______ they can talk things over with when they have a problem.",
    question: "_______ adolescents are unhappy at school because they find it difficult to make friends.",
    options: ["Each", "Any", "Every", "Many"],
    correct: 3,
    explanation: "“Many adolescents” (nhiều thanh thiếu niên) diễn tả một số lượng lớn nhưng không phải tất cả. Các lựa chọn khác (each, every) mang nghĩa toàn bộ, không phù hợp với thực tế mô tả.",
    translation: "Nhiều thanh thiếu niên không hạnh phúc ở trường vì họ thấy khó kết bạn."
  },
  {
    id: 22,
    passage: "Sociologists have been carrying out research into the social pressures of being a teenager. (21) _______ adolescents are unhappy at school because they find it difficult to make friends, which can bring on illness or (22) _______ in poor grades. They may also worry about their appearance and often feel under enormous pressure to dress, talk and behave the same as others. This phenomenon is called peer pressure, and it is very common in today’s society.\n\nAdvertising is claimed to contribute a lot to the social pressures teenagers experience. Advertisers know how important it is to feel that you belong to a group when you are in your teens, (23) _______ they try to persuade teenagers that certain products will make them popular with their classmates.\n\nSadly, many teenagers act (24) _______ and even do dangerous things just to make others accept them. Peer pressure is often the reason for teenage smoking, drug abuse or dangerous driving. Teenagers need to learn to say ‘no’ to social pressure and to find friends (25) _______ they can talk things over with when they have a problem.",
    question: "Which word best fits: illness or _______ in poor grades?",
    options: ["lead", "result", "induce", "cause"],
    correct: 1,
    explanation: "Cấu trúc đúng là “result in + danh từ” (dẫn đến, gây ra). Các từ còn lại không đi với giới từ “in” theo cách này.",
    translation: "…điều này có thể gây ra bệnh tật hoặc dẫn đến kết quả học tập kém."
  },
  {
    id: 23,
    passage: "Sociologists have been carrying out research into the social pressures of being a teenager. (21) _______ adolescents are unhappy at school because they find it difficult to make friends, which can bring on illness or (22) _______ in poor grades. They may also worry about their appearance and often feel under enormous pressure to dress, talk and behave the same as others. This phenomenon is called peer pressure, and it is very common in today’s society.\n\nAdvertising is claimed to contribute a lot to the social pressures teenagers experience. Advertisers know how important it is to feel that you belong to a group when you are in your teens, (23) _______ they try to persuade teenagers that certain products will make them popular with their classmates.\n\nSadly, many teenagers act (24) _______ and even do dangerous things just to make others accept them. Peer pressure is often the reason for teenage smoking, drug abuse or dangerous driving. Teenagers need to learn to say ‘no’ to social pressure and to find friends (25) _______ they can talk things over with when they have a problem.",
    question: "Choose the correct connector for the sentence.",
    options: ["nor", "till", "so", "but"],
    correct: 2,
    explanation: "“So” diễn tả quan hệ nguyên nhân – kết quả: vì các nhà quảng cáo hiểu điều đó, nên họ tìm cách thuyết phục thanh thiếu niên.",
    translation: "Vì vậy, họ cố gắng thuyết phục thanh thiếu niên rằng một số sản phẩm sẽ khiến họ trở nên phổ biến với bạn bè."
  },
  {
    id: 24,
    passage: "Sociologists have been carrying out research into the social pressures of being a teenager. (21) _______ adolescents are unhappy at school because they find it difficult to make friends, which can bring on illness or (22) _______ in poor grades. They may also worry about their appearance and often feel under enormous pressure to dress, talk and behave the same as others. This phenomenon is called peer pressure, and it is very common in today’s society.\n\nAdvertising is claimed to contribute a lot to the social pressures teenagers experience. Advertisers know how important it is to feel that you belong to a group when you are in your teens, (23) _______ they try to persuade teenagers that certain products will make them popular with their classmates.\n\nSadly, many teenagers act (24) _______ and even do dangerous things just to make others accept them. Peer pressure is often the reason for teenage smoking, drug abuse or dangerous driving. Teenagers need to learn to say ‘no’ to social pressure and to find friends (25) _______ they can talk things over with when they have a problem.",
    question: "Many teenagers act _______ just to make others accept them.",
    options: ["irrelevantly", "informally", "irresponsibly", "inconsiderably"],
    correct: 2,
    explanation: "“Irresponsibly” (thiếu trách nhiệm) phù hợp với hành vi nguy hiểm như hút thuốc, lạm dụng ma túy, lái xe nguy hiểm.",
    translation: "Đáng buồn thay, nhiều thanh thiếu niên hành động một cách thiếu trách nhiệm chỉ để được người khác chấp nhận."
  },
  {
    id: 25,
    passage: "Sociologists have been carrying out research into the social pressures of being a teenager. (21) _______ adolescents are unhappy at school because they find it difficult to make friends, which can bring on illness or (22) _______ in poor grades. They may also worry about their appearance and often feel under enormous pressure to dress, talk and behave the same as others. This phenomenon is called peer pressure, and it is very common in today’s society.\n\nAdvertising is claimed to contribute a lot to the social pressures teenagers experience. Advertisers know how important it is to feel that you belong to a group when you are in your teens, (23) _______ they try to persuade teenagers that certain products will make them popular with their classmates.\n\nSadly, many teenagers act (24) _______ and even do dangerous things just to make others accept them. Peer pressure is often the reason for teenage smoking, drug abuse or dangerous driving. Teenagers need to learn to say ‘no’ to social pressure and to find friends (25) _______ they can talk things over with when they have a problem.",
    question: "Find the correct relative word.",
    options: ["which", "why", "where", "who"],
    correct: 3,
    explanation: "“Who” dùng để thay thế cho danh từ chỉ người là “friends”.",
    translation: "Thanh thiếu niên cần tìm những người bạn mà họ có thể tâm sự khi gặp vấn đề."
  },
{
    id: 26,
    passage: "Nowadays it is very important to be young. The tendency to see being young as something better than being old is a cultural phenomenon. But is it always good to be young? And isn’t “young” sometimes “too young”?\n\nWhen people are young, they are usually energetic and bold: they can work for longer periods of time, and they are ready for take risk. As they still haven’t had much experience, they don’t have many inhibitions, which means that there aren't many things to stand in their way. Young people have also got potential -they still have time to develop in many different ways. Because of that, employing young people can be a good investment.\n\nOn the other hand, being young doesn’t automatically mean you’re always happy. There is a lot of competition in society nowadays, which starts even when you’re in school. Getting a good education isn’t easy and can cost a lot of money.\n\nNext, you have to look for a good job. In spite of the fact that so many employers prefer young people, young aren't just waiting for you. And even if you find one, it is often only for very short period of time. Statistics show that the stresses of modern life can sometimes bring young people a lot of troubles. Most of them can cope with problems very well, but some others break down and lose all hope. If we don't want this to happen, something must be done. So it is our responsibility to offer help to those to whom being young is definitely too young.",
    question: "Which is the most suitable title for the passage?",
    options: [
      "The Potential of Education?",
      "Social Changes",
      "The Younger, the Better?",
      "Looking for a Good Job"
    ],
    correct: 2,
    explanation: "Bài đọc bàn luận cả mặt tích cực và tiêu cực của việc còn trẻ, đặt câu hỏi liệu “trẻ hơn có luôn tốt hơn không”. Vì vậy tiêu đề phù hợp nhất là “The Younger, the Better?”.",
    translation: "Trẻ có luôn tốt hơn không?"
  },
  {
    id: 27,
    passage: "Nowadays it is very important to be young. The tendency to see being young as something better than being old is a cultural phenomenon. But is it always good to be young? And isn’t “young” sometimes “too young”?\n\nWhen people are young, they are usually energetic and bold: they can work for longer periods of time, and they are ready for take risk. As they still haven’t had much experience, they don’t have many inhibitions, which means that there aren't many things to stand in their way. Young people have also got potential -they still have time to develop in many different ways. Because of that, employing young people can be a good investment.\n\nOn the other hand, being young doesn’t automatically mean you’re always happy. There is a lot of competition in society nowadays, which starts even when you’re in school. Getting a good education isn’t easy and can cost a lot of money.\n\nNext, you have to look for a good job. In spite of the fact that so many employers prefer young people, young aren't just waiting for you. And even if you find one, it is often only for very short period of time. Statistics show that the stresses of modern life can sometimes bring young people a lot of troubles. Most of them can cope with problems very well, but some others break down and lose all hope. If we don't want this to happen, something must be done. So it is our responsibility to offer help to those to whom being young is definitely too young.",
    question: "The word “bold” in paragraph 2 is closest in meaning to",
    options: ["kind", "brave", "weak", "careless"],
    correct: 1,
    explanation: "“Bold” trong ngữ cảnh nói về người trẻ dám làm, dám mạo hiểm → gần nghĩa nhất là “brave” (dũng cảm).",
    translation: "Khi còn trẻ, con người thường tràn đầy năng lượng và dũng cảm."
  },
  {
    id: 28,
    passage: "Nowadays it is very important to be young. The tendency to see being young as something better than being old is a cultural phenomenon. But is it always good to be young? And isn’t “young” sometimes “too young”?\n\nWhen people are young, they are usually energetic and bold: they can work for longer periods of time, and they are ready for take risk. As they still haven’t had much experience, they don’t have many inhibitions, which means that there aren't many things to stand in their way. Young people have also got potential -they still have time to develop in many different ways. Because of that, employing young people can be a good investment.\n\nOn the other hand, being young doesn’t automatically mean you’re always happy. There is a lot of competition in society nowadays, which starts even when you’re in school. Getting a good education isn’t easy and can cost a lot of money.\n\nNext, you have to look for a good job. In spite of the fact that so many employers prefer young people, young aren't just waiting for you. And even if you find one, it is often only for very short period of time. Statistics show that the stresses of modern life can sometimes bring young people a lot of troubles. Most of them can cope with problems very well, but some others break down and lose all hope. If we don't want this to happen, something must be done. So it is our responsibility to offer help to those to whom being young is definitely too young.",
    question: "According to paragraph 2, employing young people can be a good investment because they",
    options: [
      "always feel happy",
      "have got potential",
      "are experienced in many fields",
      "are not ready to take risks"
    ],
    correct: 1,
    explanation: "Đoạn 2 nêu rõ người trẻ còn nhiều thời gian để phát triển theo nhiều hướng → họ có tiềm năng.",
    translation: "Người trẻ có tiềm năng vì họ vẫn còn thời gian để phát triển theo nhiều cách khác nhau."
  },
  {
    id: 29,
    passage: "Nowadays it is very important to be young. The tendency to see being young as something better than being old is a cultural phenomenon. But is it always good to be young? And isn’t “young” sometimes “too young”?\n\nWhen people are young, they are usually energetic and bold: they can work for longer periods of time, and they are ready for take risk. As they still haven’t had much experience, they don’t have many inhibitions, which means that there aren't many things to stand in their way. Young people have also got potential -they still have time to develop in many different ways. Because of that, employing young people can be a good investment.\n\nOn the other hand, being young doesn’t automatically mean you’re always happy. There is a lot of competition in society nowadays, which starts even when you’re in school. Getting a good education isn’t easy and can cost a lot of money.\n\nNext, you have to look for a good job. In spite of the fact that so many employers prefer young people, young aren't just waiting for you. And even if you find one, it is often only for very short period of time. Statistics show that the stresses of modern life can sometimes bring young people a lot of troubles. Most of them can cope with problems very well, but some others break down and lose all hope. If we don't want this to happen, something must be done. So it is our responsibility to offer help to those to whom being young is definitely too young.",
    question: "The word “them” in paragraph 5 refers to",
    options: ["troubles", "statistics", "stresses", "young people"],
    correct: 3,
    explanation: "“Most of them can cope with problems very well” → “them” chỉ “young people” được nhắc ngay trước đó.",
    translation: "Hầu hết họ (những người trẻ) có thể đối mặt với vấn đề rất tốt."
  },
  {
    id: 30,
    passage: "Nowadays it is very important to be young. The tendency to see being young as something better than being old is a cultural phenomenon. But is it always good to be young? And isn’t “young” sometimes “too young”?\n\nWhen people are young, they are usually energetic and bold: they can work for longer periods of time, and they are ready for take risk. As they still haven’t had much experience, they don’t have many inhibitions, which means that there aren't many things to stand in their way. Young people have also got potential -they still have time to develop in many different ways. Because of that, employing young people can be a good investment.\n\nOn the other hand, being young doesn’t automatically mean you’re always happy. There is a lot of competition in society nowadays, which starts even when you’re in school. Getting a good education isn’t easy and can cost a lot of money.\n\nNext, you have to look for a good job. In spite of the fact that so many employers prefer young people, young aren't just waiting for you. And even if you find one, it is often only for very short period of time. Statistics show that the stresses of modern life can sometimes bring young people a lot of troubles. Most of them can cope with problems very well, but some others break down and lose all hope. If we don't want this to happen, something must be done. So it is our responsibility to offer help to those to whom being young is definitely too young.",
    question: "According to the passage, which of the following is TRUE?",
    options: [
      "It is neither difficult nor expensive to get a good education.",
      "Competition begins only when young people start work.",
      "Some young people still need help with their problems.",
      "The stresses of modern life have no effect on young people."
    ],
    correct: 2,
    explanation: "Đoạn cuối khẳng định một số người trẻ bị áp lực, suy sụp và cần được giúp đỡ → đáp án C là đúng.",
    translation: "Một số người trẻ vẫn cần được giúp đỡ để vượt qua các vấn đề của họ."
  }
];
