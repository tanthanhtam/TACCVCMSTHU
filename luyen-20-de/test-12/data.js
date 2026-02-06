const questions = [
{
  id: 1,
  question: "Scandinavia consists of four countries. One is Denmark, _______ are Finland, Norway and Sweden.",
  options: ["others", "the other", "the others", "other"],
  correct: 2,
  explanation: "The others dùng để chỉ những cái còn lại trong một nhóm xác định. Đáp án C đúng. Dịch: Scandinavia gồm bốn quốc gia. Một là Đan Mạch, những nước còn lại là Phần Lan, Na Uy và Thụy Điển."
},
{
  id: 2,
  question: "I’m sure this painting is not by Picasso. It’s only an unsuccessful fake and so it’s _______.",
  options: ["priceless", "worthless", "precious", "invaluable"],
  correct: 1,
  explanation: "Worthless = vô giá trị. Đáp án B đúng. Dịch: Tôi chắc bức tranh này không phải của Picasso. Nó chỉ là đồ giả thất bại nên không có giá trị."
},
{
  id: 3,
  question: "I meant to get up early but I forgot _______ up my alarm clock.",
  options: ["wind", "winding", "wound", "to wind"],
  correct: 3,
  explanation: "Forget to V = quên làm việc gì. Đáp án D đúng. Dịch: Tôi định dậy sớm nhưng lại quên lên dây cót đồng hồ báo thức."
},
{
  id: 4,
  question: "_______ the two sisters, Mary is_______.",
  options: [
    "Of/ the prettier",
    "Between/ the prettiest",
    "Of/ prettier",
    "Between/ prettier"
  ],
  correct: 3,
  explanation: "So sánh giữa hai người: between + the two; dùng dạng so sánh hơn. Đáp án D đúng. Dịch: Giữa hai chị em, Mary xinh hơn."
},
{
  id: 5,
  question: "_______ to play with the kids!",
  options: [
    "What a fun it is",
    "What a fun is it",
    "What fun it is",
    "How fun it is"
  ],
  correct: 2,
  explanation: "Fun là danh từ không đếm được → không dùng a. Đáp án C đúng. Dịch: Chơi với bọn trẻ thật vui làm sao!"
},
{
  id: 6,
  question: "The man was said to _______ lung cancer.",
  options: ["die by", "die of", "die at", "die out"],
  correct: 1,
  explanation: "Die of + bệnh. Đáp án B đúng. Dịch: Người đàn ông được cho là đã chết vì ung thư phổi."
},
{
  id: 7,
  question: "A part-time job gives me the freedom to _______ my own interests.",
  options: ["chase", "seek", "pursue", "catch"],
  correct: 2,
  explanation: "Pursue interests = theo đuổi sở thích. Đáp án C đúng. Dịch: Công việc bán thời gian cho tôi sự tự do theo đuổi sở thích riêng."
},
{
  id: 8,
  question: "“Congratulations on your new home! It’s wonderful.”  \n“_______.”",
  options: ["Thank you", "You’re welcome", "Really", "It’s OK"],
  correct: 0,
  explanation: "Đáp lời chúc mừng → Thank you. Đáp án A đúng. Dịch: “Cảm ơn bạn.”"
},
{
  id: 9,
  question: "It is a pity you didn’t tell us about this.",
  options: [
    "I wish you have told us about this.",
    "I wish you would tell us about this.",
    "I wish you had told us about this.",
    "I wish you would have told us about this."
  ],
  correct: 2,
  explanation: "Wish + had + V3 diễn tả điều hối tiếc trong quá khứ. Đáp án C đúng. Dịch: Giá mà bạn đã nói với chúng tôi về chuyện này."
},
{
  id: 10,
  question: "We had to use our neighbor’s telephone because ours was _______.",
  options: ["out of order", "off duty", "out of work", "off work"],
  correct: 0,
  explanation: "Out of order = bị hỏng. Đáp án A đúng. Dịch: Chúng tôi phải dùng điện thoại nhà hàng xóm vì điện thoại nhà mình bị hỏng."
},
{
  id: 11,
  question: "The child was told to _______ for being rude to his uncle.",
  options: ["excuse", "apologize", "forgive", "confess"],
  correct: 1,
  explanation: "Apologize for = xin lỗi vì. Đáp án B đúng. Dịch: Đứa trẻ được bảo phải xin lỗi vì cư xử thô lỗ với chú."
},
{
  id: 12,
  question: "“_______ anyone ring while I’m away, please take a message.”",
  options: ["Will", "May", "Should", "Would"],
  correct: 2,
  explanation: "Should dùng trong câu điều kiện trang trọng. Đáp án C đúng. Dịch: Nếu có ai gọi khi tôi vắng mặt, làm ơn nhắn lại."
},
{
  id: 13,
  question: "The more you talk about the situation, _______.",
  options: [
    "it seems worse",
    "the worse does it seem",
    "the worse it seems",
    "it seems the worse"
  ],
  correct: 2,
  explanation: "Cấu trúc so sánh kép: The more…, the more…. Đáp án C đúng. Dịch: Bạn càng nói về tình hình đó, nó càng có vẻ tệ hơn."
},
{
  id: 14,
  question: "Those boys took a long ladder _______.",
  options: [
    "in order to get the ball from the roof",
    "so they will get the ball from the roof",
    "so that the ball from the roof can be gotten",
    "and then get the ball from the roof"
  ],
  correct: 0,
  explanation: "In order to + V diễn tả mục đích. Đáp án A đúng. Dịch: Những cậu bé đó mang theo chiếc thang dài để lấy quả bóng trên mái nhà."
},
{
  id: 15,
  question: "Before her was 20, he developed _______ for the personal computer.",
  options: [
    "the world first computer’s language",
    "the computer language for the first world",
    "the world’s first computer language",
    "the first world’s computer language"
  ],
  correct: 2,
  explanation: "Sở hữu cách: the world’s first. Đáp án C đúng. Dịch: Trước khi 20 tuổi, ông đã phát triển ngôn ngữ máy tính đầu tiên trên thế giới."
},
{
  id: 16,
  question: "The police are going to look _______ the disappearance of the child.",
  options: ["around", "into", "through", "after"],
  correct: 1,
  explanation: "Look into = điều tra. Đáp án B đúng. Dịch: Cảnh sát sẽ điều tra vụ mất tích của đứa trẻ."
},
{
  id: 17,
  question: "Picasso, _______ work inspired many other artists, lived until he was a ripe old age.",
  options: ["who", "whose", "that", "which"],
  correct: 1,
  explanation: "Whose chỉ sự sở hữu cho danh từ work. Đáp án B đúng. Dịch: Picasso, người mà tác phẩm của ông truyền cảm hứng cho nhiều nghệ sĩ khác, đã sống đến tuổi già."
},
{
  id: 18,
  question: "I agree with most of what you said, I can’t _______ your views on private medicine.",
  options: [
    "keep up with",
    "catch up with",
    "put up with",
    "go along with"
  ],
  correct: 3,
  explanation: "Go along with = đồng tình. Đáp án D đúng. Dịch: Tôi đồng ý với phần lớn những gì bạn nói, nhưng tôi không thể đồng tình với quan điểm của bạn về y tế tư nhân."
},
{
  id: 19,
  question: "“Want me to turn up the heater?”  \n“_______.”",
  options: [
    "Please don’t. It’s quite warm here.",
    "It’s my pleasure.",
    "No, go right ahead.",
    "Thanks, I’ll be right back."
  ],
  correct: 0,
  explanation: "Từ chối lịch sự. Đáp án A đúng. Dịch: “Đừng, ở đây khá ấm rồi.”"
},
{
  id: 20,
  question: "The teacher said, “You must take the graduation test this summer,”",
  options: [
    "The teacher said that we must take the graduation test that summer.",
    "The teacher said that we had to take the graduation test that summer.",
    "The teacher said that we could take the graduation test that summer.",
    "The teacher said that we are going to take the graduation test that summer."
  ],
  correct: 1,
  explanation: "Must → had to khi chuyển sang câu gián tiếp. Đáp án B đúng. Dịch: Giáo viên nói rằng chúng tôi phải tham gia kỳ thi tốt nghiệp vào mùa hè năm đó."
},
{
    id: 21,
    passage: "Facebook is a for-profit online social media and social networking service. The Facebook website was launched on February 4th, 2004 by Mark Zuckerberg, along with fellow Harvard College students and roommates. Since 2006, anyone age 13 and older has been allowed to become a registered user of Facebook though variations exist in minimum age requirement, depending on applicable local laws.\n\nOver 25 million people in the UK use Facebook. That’s 45% of population! And on average, each user spends over six hours a month on Facebook. Though not the highest this is a considerable number. Is Facebook is a dangerous obsession or just harmless fun? Seventeen-year-old Bethan has written on her blog about what it was like to stop using Facebook.\n\nI think I am a Facebook addict. I log on to Facebook everyday to chat to my friends real friends and loads of online friends. Sometimes I have ten conversations going at the same time. I upload photos and update my Facebook profile all the time. But recently I’ve started to feel worried if I am offline for more than a few hours. And then last week I forgot to meet a real friend because I was online! I’ve realised I could have a problem. So I’ve decided to give it up for a while.\n\nI found it really hard. Facebook and my friends demanded to know why I had left. I spent the first few evenings wondering what everyone was chatting on Facebook. I even phoned a couple of friends to find out. The fourth night I wasn’t quite so bad. I actually concentrated on my homework better and I had more time to watch my TV programmes. And I spoke to my friends during the day at school. At the end of the first week, I reactivated my account, I think Facebook is fun and it’s useful for posting messages to friends and sharing photos. But I’ll try not to spend so much time on it in the future.",
    question: "Which of the following is NOT true about Facebook users in UK?",
    options: [
      "45% of the country’s population used Facebook.",
      "More than 25 millions of Brits use Facebook.",
      "The amount of time British users spent on Facebook is highest.",
      "Averagely, 6 hours per month are spent by British users."
    ],
    correct: 2,
    explanation: "Đoạn văn nói rõ người Anh dùng Facebook trung bình hơn 6 giờ/tháng nhưng KHÔNG phải là mức cao nhất (“Though not the highest”). Vì vậy câu C là sai.",
    translation: "Mặc dù không phải là mức cao nhất, nhưng người dùng trung bình vẫn dành hơn sáu giờ mỗi tháng cho Facebook."
  },
  {
    id: 22,
    passage: "Facebook is a for-profit online social media and social networking service. The Facebook website was launched on February 4th, 2004 by Mark Zuckerberg, along with fellow Harvard College students and roommates. Since 2006, anyone age 13 and older has been allowed to become a registered user of Facebook though variations exist in minimum age requirement, depending on applicable local laws.\n\nOver 25 million people in the UK use Facebook. That’s 45% of population! And on average, each user spends over six hours a month on Facebook. Though not the highest this is a considerable number. Is Facebook is a dangerous obsession or just harmless fun? Seventeen-year-old Bethan has written on her blog about what it was like to stop using Facebook.\n\nI think I am a Facebook addict. I log on to Facebook everyday to chat to my friends real friends and loads of online friends. Sometimes I have ten conversations going at the same time. I upload photos and update my Facebook profile all the time. But recently I’ve started to feel worried if I am offline for more than a few hours. And then last week I forgot to meet a real friend because I was online! I’ve realised I could have a problem. So I’ve decided to give it up for a while.\n\nI found it really hard. Facebook and my friends demanded to know why I had left. I spent the first few evenings wondering what everyone was chatting on Facebook. I even phoned a couple of friends to find out. The fourth night I wasn’t quite so bad. I actually concentrated on my homework better and I had more time to watch my TV programmes. And I spoke to my friends during the day at school. At the end of the first week, I reactivated my account, I think Facebook is fun and it’s useful for posting messages to friends and sharing photos. But I’ll try not to spend so much time on it in the future.",
    question: "The highlight word “it” in the passage refers to",
    options: ["worrying", "Facebook", "a problem", "meeting her real friend"],
    correct: 1,
    explanation: "Từ “it” xuất hiện trong câu “I found it really hard.” → “it” chỉ việc ngừng sử dụng Facebook.",
    translation: "Tôi thấy việc đó (ngừng dùng Facebook) thực sự rất khó."
  },
  {
    id: 23,
    passage: "Facebook is a for-profit online social media and social networking service. The Facebook website was launched on February 4th, 2004 by Mark Zuckerberg, along with fellow Harvard College students and roommates. Since 2006, anyone age 13 and older has been allowed to become a registered user of Facebook though variations exist in minimum age requirement, depending on applicable local laws.\n\nOver 25 million people in the UK use Facebook. That’s 45% of population! And on average, each user spends over six hours a month on Facebook. Though not the highest this is a considerable number. Is Facebook is a dangerous obsession or just harmless fun? Seventeen-year-old Bethan has written on her blog about what it was like to stop using Facebook.\n\nI think I am a Facebook addict. I log on to Facebook everyday to chat to my friends real friends and loads of online friends. Sometimes I have ten conversations going at the same time. I upload photos and update my Facebook profile all the time. But recently I’ve started to feel worried if I am offline for more than a few hours. And then last week I forgot to meet a real friend because I was online! I’ve realised I could have a problem. So I’ve decided to give it up for a while.\n\nI found it really hard. Facebook and my friends demanded to know why I had left. I spent the first few evenings wondering what everyone was chatting on Facebook. I even phoned a couple of friends to find out. The fourth night I wasn’t quite so bad. I actually concentrated on my homework better and I had more time to watch my TV programmes. And I spoke to my friends during the day at school. At the end of the first week, I reactivated my account, I think Facebook is fun and it’s useful for posting messages to friends and sharing photos. But I’ll try not to spend so much time on it in the future.",
    question: "Which of the following is NOT the thing Bethan does as a Facebook addict?",
    options: [
      "be curious about Facebook activities when logging out.",
      "have numerous online conversation at the same time.",
      "use Facebook everyday",
      "long to be offline nearly all the time."
    ],
    correct: 3,
    explanation: "Bethan nghiện Facebook nên luôn muốn ONLINE, không phải muốn offline.",
    translation: "Cô ấy lo lắng khi không trực tuyến quá vài giờ."
  },
  {
    id: 24,
    passage: "Facebook is a for-profit online social media and social networking service. The Facebook website was launched on February 4th, 2004 by Mark Zuckerberg, along with fellow Harvard College students and roommates. Since 2006, anyone age 13 and older has been allowed to become a registered user of Facebook though variations exist in minimum age requirement, depending on applicable local laws.\n\nOver 25 million people in the UK use Facebook. That’s 45% of population! And on average, each user spends over six hours a month on Facebook. Though not the highest this is a considerable number. Is Facebook is a dangerous obsession or just harmless fun? Seventeen-year-old Bethan has written on her blog about what it was like to stop using Facebook.\n\nI think I am a Facebook addict. I log on to Facebook everyday to chat to my friends real friends and loads of online friends. Sometimes I have ten conversations going at the same time. I upload photos and update my Facebook profile all the time. But recently I’ve started to feel worried if I am offline for more than a few hours. And then last week I forgot to meet a real friend because I was online! I’ve realised I could have a problem. So I’ve decided to give it up for a while.\n\nI found it really hard. Facebook and my friends demanded to know why I had left. I spent the first few evenings wondering what everyone was chatting on Facebook. I even phoned a couple of friends to find out. The fourth night I wasn’t quite so bad. I actually concentrated on my homework better and I had more time to watch my TV programmes. And I spoke to my friends during the day at school. At the end of the first week, I reactivated my account, I think Facebook is fun and it’s useful for posting messages to friends and sharing photos. But I’ll try not to spend so much time on it in the future.",
    question: "What does Bethan conclude about Facebook?",
    options: [
      "The best use of Facebook is to share photos and messages.",
      "Facebook is not as good as TV.",
      "Users should spend more time on Facebook.",
      "Facebook is great as long as not too much time is spent on."
    ],
    correct: 3,
    explanation: "Bethan cho rằng Facebook vui và hữu ích nhưng không nên dành quá nhiều thời gian cho nó.",
    translation: "Facebook rất vui và hữu ích, nhưng tôi sẽ cố gắng không dành quá nhiều thời gian cho nó."
  },
  {
    id: 25,
    passage: "Facebook is a for-profit online social media and social networking service. The Facebook website was launched on February 4th, 2004 by Mark Zuckerberg, along with fellow Harvard College students and roommates. Since 2006, anyone age 13 and older has been allowed to become a registered user of Facebook though variations exist in minimum age requirement, depending on applicable local laws.\n\nOver 25 million people in the UK use Facebook. That’s 45% of population! And on average, each user spends over six hours a month on Facebook. Though not the highest this is a considerable number. Is Facebook is a dangerous obsession or just harmless fun? Seventeen-year-old Bethan has written on her blog about what it was like to stop using Facebook.\n\nI think I am a Facebook addict. I log on to Facebook everyday to chat to my friends real friends and loads of online friends. Sometimes I have ten conversations going at the same time. I upload photos and update my Facebook profile all the time. But recently I’ve started to feel worried if I am offline for more than a few hours. And then last week I forgot to meet a real friend because I was online! I’ve realised I could have a problem. So I’ve decided to give it up for a while.\n\nI found it really hard. Facebook and my friends demanded to know why I had left. I spent the first few evenings wondering what everyone was chatting on Facebook. I even phoned a couple of friends to find out. The fourth night I wasn’t quite so bad. I actually concentrated on my homework better and I had more time to watch my TV programmes. And I spoke to my friends during the day at school. At the end of the first week, I reactivated my account, I think Facebook is fun and it’s useful for posting messages to friends and sharing photos. But I’ll try not to spend so much time on it in the future.",
    question: "What happened to make Bethan decide to quit Facebook for a while?",
    options: [
      "She forgot an offline meeting.",
      "She started to feel nervous.",
      "She had too many offline friends.",
      "She uploaded too many photos."
    ],
    correct: 0,
    explanation: "Bethan quên mất cuộc hẹn ngoài đời thật vì mải online, điều này khiến cô nhận ra mình có vấn đề.",
    translation: "Tuần trước tôi đã quên gặp một người bạn ngoài đời vì tôi đang online."
  },
 {
    id: 26,
    passage: "The warming of the Pacific Ocean has created weather patterns (26) _____ strongly affect the world. When the water is warm, the (27) _____ of rainfall in Indonesia and the surrounding regions decreases. Australia could even experience a drought in many parts. On (28) _____ hand, Chile (which borders the Pacific Ocean) is preparing for severe rainstorms. In Pakistan and northwestern India, the weather pattern makes the rainy season weaker and makes the area much drier. This happening is called El Nino and is used by weather forecasters to make long-range weather predictions. They also know that El Nino will bring unusually heavy rains to the southwestern part of the United States and make the central part of the country drier at the same time. According to research, weather forecasters (29) _____ know about the coming weather with certainty. Now everything has become completely different. El Nino itself used to be (30) _____. It would occur every two to seven years. But now, this weather pattern is becoming more frequent. We cannot say when and how often tornadoes or cyclones occur. Scientists are unsure of the reason for this shift on a global scale either.",
    question: "The warming of the Pacific Ocean has created weather patterns (26) _____ strongly affect the world.",
    options: ["that", "what", "when", "whether"],
    correct: 0,
    explanation: "“that” là đại từ quan hệ, dùng để nối mệnh đề bổ nghĩa cho danh từ “weather patterns”.",
    translation: "Sự ấm lên của Thái Bình Dương đã tạo ra những kiểu thời tiết mà ảnh hưởng mạnh mẽ đến toàn thế giới."
  },
  {
    id: 27,
    passage: "The warming of the Pacific Ocean has created weather patterns (26) _____ strongly affect the world. When the water is warm, the (27) _____ of rainfall in Indonesia and the surrounding regions decreases. Australia could even experience a drought in many parts. On (28) _____ hand, Chile (which borders the Pacific Ocean) is preparing for severe rainstorms. In Pakistan and northwestern India, the weather pattern makes the rainy season weaker and makes the area much drier. This happening is called El Nino and is used by weather forecasters to make long-range weather predictions. They also know that El Nino will bring unusually heavy rains to the southwestern part of the United States and make the central part of the country drier at the same time. According to research, weather forecasters (29) _____ know about the coming weather with certainty. Now everything has become completely different. El Nino itself used to be (30) _____. It would occur every two to seven years. But now, this weather pattern is becoming more frequent. We cannot say when and how often tornadoes or cyclones occur. Scientists are unsure of the reason for this shift on a global scale either.",
    question: "When the water is warm, the (27) _____ of rainfall in Indonesia and the surrounding regions decreases.",
    options: ["amount", "figure", "number", "deal"],
    correct: 0,
    explanation: "“Amount of + danh từ không đếm được”. “Rainfall” là danh từ không đếm được.",
    translation: "Khi nước ấm lên, lượng mưa ở Indonesia và các khu vực xung quanh giảm xuống."
  },
  {
    id: 28,
    passage: "The warming of the Pacific Ocean has created weather patterns (26) _____ strongly affect the world. When the water is warm, the (27) _____ of rainfall in Indonesia and the surrounding regions decreases. Australia could even experience a drought in many parts. On (28) _____ hand, Chile (which borders the Pacific Ocean) is preparing for severe rainstorms. In Pakistan and northwestern India, the weather pattern makes the rainy season weaker and makes the area much drier. This happening is called El Nino and is used by weather forecasters to make long-range weather predictions. They also know that El Nino will bring unusually heavy rains to the southwestern part of the United States and make the central part of the country drier at the same time. According to research, weather forecasters (29) _____ know about the coming weather with certainty. Now everything has become completely different. El Nino itself used to be (30) _____. It would occur every two to seven years. But now, this weather pattern is becoming more frequent. We cannot say when and how often tornadoes or cyclones occur. Scientists are unsure of the reason for this shift on a global scale either.",
    question: "On (28) _____ hand, Chile (which borders the Pacific Ocean) is preparing for severe rainstorms.",
    options: ["others", "other", "the other", "another"],
    correct: 2,
    explanation: "Cụm cố định: “On the other hand” dùng để đối lập hai ý.",
    translation: "Mặt khác, Chile (quốc gia giáp Thái Bình Dương) đang chuẩn bị đối phó với những cơn mưa bão nghiêm trọng."
  },
  {
    id: 29,
    passage: "The warming of the Pacific Ocean has created weather patterns (26) _____ strongly affect the world. When the water is warm, the (27) _____ of rainfall in Indonesia and the surrounding regions decreases. Australia could even experience a drought in many parts. On (28) _____ hand, Chile (which borders the Pacific Ocean) is preparing for severe rainstorms. In Pakistan and northwestern India, the weather pattern makes the rainy season weaker and makes the area much drier. This happening is called El Nino and is used by weather forecasters to make long-range weather predictions. They also know that El Nino will bring unusually heavy rains to the southwestern part of the United States and make the central part of the country drier at the same time. According to research, weather forecasters (29) _____ know about the coming weather with certainty. Now everything has become completely different. El Nino itself used to be (30) _____. It would occur every two to seven years. But now, this weather pattern is becoming more frequent. We cannot say when and how often tornadoes or cyclones occur. Scientists are unsure of the reason for this shift on a global scale either.",
    question: "According to research, weather forecasters (29) _____ know about the coming weather with certainty.",
    options: ["used to", "get used to", "are used to", "used to be"],
    correct: 0,
    explanation: "“Used to + V” diễn tả thói quen trong quá khứ, nay không còn đúng nữa.",
    translation: "Theo nghiên cứu, các nhà dự báo thời tiết trước đây thường biết chắc về thời tiết sắp tới."
  },
  {
    id: 30,
    passage: "The warming of the Pacific Ocean has created weather patterns (26) _____ strongly affect the world. When the water is warm, the (27) _____ of rainfall in Indonesia and the surrounding regions decreases. Australia could even experience a drought in many parts. On (28) _____ hand, Chile (which borders the Pacific Ocean) is preparing for severe rainstorms. In Pakistan and northwestern India, the weather pattern makes the rainy season weaker and makes the area much drier. This happening is called El Nino and is used by weather forecasters to make long-range weather predictions. They also know that El Nino will bring unusually heavy rains to the southwestern part of the United States and make the central part of the country drier at the same time. According to research, weather forecasters (29) _____ know about the coming weather with certainty. Now everything has become completely different. El Nino itself used to be (30) _____. It would occur every two to seven years. But now, this weather pattern is becoming more frequent. We cannot say when and how often tornadoes or cyclones occur. Scientists are unsure of the reason for this shift on a global scale either.",
    question: "El Nino itself used to be (30) _____.",
    options: ["notable", "remarkable", "predictable", "incredible"],
    correct: 2,
    explanation: "“Predictable” = có thể dự đoán được. Vì trước đây El Nino xảy ra đều đặn mỗi 2–7 năm.",
    translation: "Bản thân hiện tượng El Nino trước đây vốn có thể dự đoán được."
  }
];
