const questions = [
  {
    id: 1,
    question: "Give me another chance, _______?",
    options: ["shall you", "will you", "don’t you", "aren’t you"],
    correct: 1,
    explanation: "Câu cầu khiến → dùng will you để xin/đề nghị. Dịch: Cho tôi thêm một cơ hội nữa nhé?"
  },
  {
    id: 2,
    question: "We haven’t decided which hotel _______.",
    options: ["to stay", "to stay at", "is for staying", "is to stay at"],
    correct: 1,
    explanation: "Which + danh từ + to V + giới từ. Dịch: Chúng tôi vẫn chưa quyết định sẽ ở khách sạn nào."
  },
  {
    id: 3,
    question: "_______ of that book has been missing.",
    options: ["The chapter two", "A second chapter", "Chapter two", "A chapter two"],
    correct: 2,
    explanation: "Tên chương → không dùng mạo từ. Dịch: Chương hai của cuốn sách đó đã bị mất."
  },
  {
    id: 4,
    question: "The problem is believed _______ at the meeting two days ago.",
    options: [
      "being discussed",
      "to have been discussed",
      "to have discussed",
      "having been discussed"
    ],
    correct: 1,
    explanation: "Cấu trúc bị động kép + hành động đã xảy ra. Dịch: Vấn đề được cho là đã được thảo luận trong cuộc họp hai ngày trước."
  },
  {
    id: 5,
    question: "If it had not rained last night, the roads in the city _______ so slippery now.",
    options: [
      "would not be",
      "must not be",
      "could not have been",
      "would not have been"
    ],
    correct: 0,
    explanation: "Điều kiện loại 3 – kết quả hiện tại. Dịch: Nếu tối qua không mưa thì bây giờ đường phố đã không trơn như vậy."
  },
  {
    id: 6,
    question: "_______ my business trip to Hanoi last month, I was able to attend his wedding.",
    options: ["Because", "According to", "Thanks to", "But for"],
    correct: 2,
    explanation: "Thanks to + danh từ (nguyên nhân tích cực). Dịch: Nhờ chuyến công tác Hà Nội tháng trước, tôi đã có thể dự đám cưới của anh ấy."
  },
  {
    id: 7,
    question: "These flowers are so beautiful! Thank you very much, Bill.		_______.",
    options: [
      "That’s right.",
      "Good job!",
      "Don’t worry.",
      "Don’t mention it."
    ],
    correct: 3,
    explanation: "Đáp lại lời cảm ơn lịch sự. Dịch: Không có gì đâu."
  },
  {
    id: 8,
    question: "I’m terrified ______ breaking down on a motorway at night.",
    options: ["from", "with", "for", "of"],
    correct: 3,
    explanation: "Terrified of + V-ing. Dịch: Tôi rất sợ xe hỏng giữa đường cao tốc vào ban đêm."
  },
  {
    id: 9,
    question: "I wish you ______ complaining about the weather.",
    options: ["would stop", "stop", "stopped", "had stopped"],
    correct: 0,
    explanation: "Wish + would + V (phàn nàn hiện tại, mong thay đổi). Dịch: Tôi ước bạn sẽ ngừng than phiền về thời tiết."
  },
  {
    id: 10,
    question: "_______ he tried, his father didn’t let him run the company.",
    options: [
      "Although hard",
      "No matter what",
      "However hard",
      "Whatever hard"
    ],
    correct: 2,
    explanation: "However + adj/adv + S + V. Dịch: Dù anh ấy cố gắng đến đâu, cha anh ấy vẫn không cho điều hành công ty."
  },
  {
    id: 11,
    question: "When I came to his house, I didn’t see him. He ______.",
    options: [
      "can be away",
      "may be out",
      "must be absent",
      "might have been away"
    ],
    correct: 3,
    explanation: "Suy đoán về quá khứ: might have + V3. Dịch: Khi tôi đến nhà anh ấy, tôi không thấy anh ấy. Có lẽ anh ấy đã đi vắng."
  },
  {
    id: 12,
    question: "To our surprise, the so-called cheap shop was ______ was expected.",
    options: [
      "as twice as expensive",
      "expensive as twice as",
      "twice as expensive as",
      "as expensive as twice"
    ],
    correct: 2,
    explanation: "Cấu trúc gấp đôi: twice as + adj + as. Dịch: Thật ngạc nhiên, cửa hàng được gọi là rẻ đó lại đắt gấp đôi so với mong đợi."
  },
  {
    id: 13,
    question: "We bought some ______.",
    options: [
      "old lovely German glasses",
      "German old lovely glasses",
      "German lovely old glasses",
      "lovely old German glasses"
    ],
    correct: 3,
    explanation: "Thứ tự tính từ: opinion → age → origin. Dịch: Chúng tôi đã mua một vài chiếc kính Đức cũ xinh xắn."
  },
  {
    id: 14,
    question: "Most people prefer flying ______ going by the sea because it’s too much faster.",
    options: ["over", "than", "from", "to"],
    correct: 3,
    explanation: "Prefer + V-ing + to + V-ing. Dịch: Hầu hết mọi người thích đi máy bay hơn đi đường biển vì nhanh hơn nhiều."
  },
  {
    id: 15,
    question: "Mr. Pike ______ English at our school for 20 years before he retired last year.",
    options: [
      "had been teaching",
      "has been teaching",
      "was teaching",
      "is teaching"
    ],
    correct: 0,
    explanation: "Quá khứ hoàn thành tiếp diễn. Dịch: Thầy Pike đã dạy tiếng Anh ở trường chúng tôi suốt 20 năm trước khi nghỉ hưu năm ngoái."
  },
  {
    id: 16,
    question: "She got so ______ while watching the match on TV that she began shouting.",
    options: ["excited", "excitement", "exciting", "excitedly"],
    correct: 0,
    explanation: "Tính từ chỉ cảm xúc của người. Dịch: Cô ấy trở nên quá phấn khích khi xem trận đấu trên TV đến mức bắt đầu la hét."
  },
  {
    id: 17,
    question: "She was unemployed three years ago. I don’t know ______ she is living on nowadays.",
    options: ["how", "why", "what", "where"],
    correct: 2,
    explanation: "Live on + what (nguồn sống). Dịch: Tôi không biết hiện nay cô ấy sống bằng cái gì."
  },
  {
    id: 18,
    question: "He put the two letters into the wrong envelopes ______ mistake.",
    options: ["on", "by", "with", "in"],
    correct: 1,
    explanation: "By mistake = nhầm lẫn. Dịch: Anh ấy đã bỏ hai lá thư vào nhầm phong bì."
  },
  {
    id: 19,
    question: "I must go to the dentist and ______.",
    options: [
      "get my teeth to take care of",
      "take care of my teeth",
      "my teeth be taken care of",
      "get my teeth taken care of"
    ],
    correct: 3,
    explanation: "Cấu trúc nhờ vả: get + O + V3. Dịch: Tôi phải đi nha sĩ để nhờ chăm sóc răng."
  },
  {
    id: 20,
    question: "It is said that the computer has revolutionized banking.",
    options: [
      "The computer was said to have revolutionized banking.",
      "People said that computer has revolutionized banking.",
      "The computer is said to revolutionize banking.",
      "The computer is said to have revolutionized banking."
    ],
    correct: 3,
    explanation: "Bị động kép + hành động đã hoàn thành. Dịch: Máy tính được cho là đã cách mạng hóa ngành ngân hàng."
  },
{
  id: 21,
  passage: "Whatever you hope for from a visit to San Francisco in the USA, you won’t be disappointed. The hills are just as steep as you imagined they would be, and the Golden Gate Bridge is just as spectacular. It’s no surprise then that the city is among the world’s (21) _______ tourist destinations. (22) _______ many people live there, San Francisco seems more like a small town than a city of more than 4 million people. Its location on the water, its parks, and its hills all mean that you can never see further than a few blocks. One of the most (23) _______ trips is a drive across the Golden Gate Bridge. This is a journey (24) _______ should be saved for a sunny day so that you can admire the fantastic view, and Golden Gate Park has wonderful gardens, (25) _______ addition to being great for a picnic.",
  question: "It’s no surprise then that the city is among the world’s (21) _______ tourist destinations.",
  options: ["complete", "top", "proper", "full"],
  correct: 1,
  explanation: "Cụm cố định: \"top tourist destinations\" = những điểm du lịch hàng đầu.\n→ Dịch câu: Không có gì ngạc nhiên khi thành phố này nằm trong số những điểm đến du lịch hàng đầu thế giới."
},
{
  id: 22,
  passage: "Whatever you hope for from a visit to San Francisco in the USA, you won’t be disappointed. The hills are just as steep as you imagined they would be, and the Golden Gate Bridge is just as spectacular. It’s no surprise then that the city is among the world’s (21) _______ tourist destinations. (22) _______ many people live there, San Francisco seems more like a small town than a city of more than 4 million people. Its location on the water, its parks, and its hills all mean that you can never see further than a few blocks. One of the most (23) _______ trips is a drive across the Golden Gate Bridge. This is a journey (24) _______ should be saved for a sunny day so that you can admire the fantastic view, and Golden Gate Park has wonderful gardens, (25) _______ addition to being great for a picnic.",
  question: "(22) _______ many people live there, San Francisco seems more like a small town than a city of more than 4 million people.",
  options: ["Although", "Besides", "Unless", "Despite"],
  correct: 0,
  explanation: "\"Although\" dùng để chỉ sự tương phản.\n→ Dịch câu: Mặc dù có rất nhiều người sinh sống ở đó, San Francisco trông giống một thị trấn nhỏ hơn là một thành phố hơn 4 triệu dân."
},
{
  id: 23,
  passage: "Whatever you hope for from a visit to San Francisco in the USA, you won’t be disappointed. The hills are just as steep as you imagined they would be, and the Golden Gate Bridge is just as spectacular. It’s no surprise then that the city is among the world’s (21) _______ tourist destinations. (22) _______ many people live there, San Francisco seems more like a small town than a city of more than 4 million people. Its location on the water, its parks, and its hills all mean that you can never see further than a few blocks. One of the most (23) _______ trips is a drive across the Golden Gate Bridge. This is a journey (24) _______ should be saved for a sunny day so that you can admire the fantastic view, and Golden Gate Park has wonderful gardens, (25) _______ addition to being great for a picnic.",
  question: "One of the most (23) _______ trips is a drive across the Golden Gate Bridge.",
  options: ["amazed", "popular", "interested", "positive"],
  correct: 1,
  explanation: "\"Popular trips\" = những chuyến đi phổ biến, được nhiều người yêu thích.\n→ Dịch câu: Một trong những chuyến đi phổ biến nhất là lái xe qua cầu Golden Gate."
},
{
  id: 24,
  passage: "Whatever you hope for from a visit to San Francisco in the USA, you won’t be disappointed. The hills are just as steep as you imagined they would be, and the Golden Gate Bridge is just as spectacular. It’s no surprise then that the city is among the world’s (21) _______ tourist destinations. (22) _______ many people live there, San Francisco seems more like a small town than a city of more than 4 million people. Its location on the water, its parks, and its hills all mean that you can never see further than a few blocks. One of the most (23) _______ trips is a drive across the Golden Gate Bridge. This is a journey (24) _______ should be saved for a sunny day so that you can admire the fantastic view, and Golden Gate Park has wonderful gardens, (25) _______ addition to being great for a picnic.",
  question: "This is a journey (24) _______ should be saved for a sunny day so that you can admire the fantastic view.",
  options: ["who", "where", "which", "what"],
  correct: 2,
  explanation: "\"Which\" dùng để thay thế cho danh từ chỉ vật \"a journey\".\n→ Dịch câu: Đây là một chuyến đi mà nên để dành cho một ngày nắng đẹp để bạn có thể chiêm ngưỡng khung cảnh tuyệt vời."
},
{
  id: 25,
  passage: "Whatever you hope for from a visit to San Francisco in the USA, you won’t be disappointed. The hills are just as steep as you imagined they would be, and the Golden Gate Bridge is just as spectacular. It’s no surprise then that the city is among the world’s (21) _______ tourist destinations. (22) _______ many people live there, San Francisco seems more like a small town than a city of more than 4 million people. Its location on the water, its parks, and its hills all mean that you can never see further than a few blocks. One of the most (23) _______ trips is a drive across the Golden Gate Bridge. This is a journey (24) _______ should be saved for a sunny day so that you can admire the fantastic view, and Golden Gate Park has wonderful gardens, (25) _______ addition to being great for a picnic.",
  question: "Golden Gate Park has wonderful gardens, (25) _______ addition to being great for a picnic.",
  options: ["in", "as", "on", "by"],
  correct: 0,
  explanation: "Cụm cố định: \"in addition to\" = ngoài ra, thêm vào đó.\n→ Dịch câu: Công viên Golden Gate có những khu vườn tuyệt đẹp, ngoài ra còn rất lý tưởng cho việc dã ngoại."
},
{
  id: 26,
  passage: "Everybody likes to feel that she or he is special. Sadly, many of us grow up believing that we're not special at all. We wish that we could be more attractive or better at sports. We wish we had more money or nicer clothes. Like the Tin Man, the Scarecrow, or the Cowardly Lion from The Wizard of Oz, we think we're not good enough just as we are. In the film, The Tin Man wishes he had a heart. The Scarecrow wishes that he had a brain, and the Lion wants courage. Eventually, each of them realizes that he already has what he wants. Nearly all parents want us to be the best we can be. They occasionally attempt to encourage us to do better by comparing us to others. They mean well, but the message we usually get is that we're not good enough. We start to believe that the only way we can be special is by being better than somebody else, but we are frequently disappointed. There will always be somebody out there that is better than we are at something. There are a lot of people around who may not be as intelligent as we are but who are better at sports. Or they may not be as handsome, but they have more money. It is unthinkable for us to be better than everybody else all the time. Like the Tin Man, the Scarecrow, and the Cowardly Lion, we all need what we believe will make us better people. What we don't understand is that often we already have inside us the very things that we look for. Our parents often forget to tell us that we are special, that we are good enough just as we are. Perhaps no one told them when they were growing up, or maybe they just forgot. Either way, it's up to us to remind them sometimes that each of us, in our own way, is special. What we are . . . is enough.",
  question: "What is the writer’s main aim in writing the text?",
  options: [
    "to talk about your family problems",
    "explain the importance of being yourself",
    "to describe how intelligent we are",
    "to suggest how people can change their way of life"
  ],
  correct: 1,
  explanation: "Toàn bài nhấn mạnh việc mỗi người đã đủ tốt như chính mình, không cần so sánh với người khác.\n→ Dịch: Mục đích chính của tác giả là giải thích tầm quan trọng của việc là chính mình."
},
{
  id: 27,
  passage: "Everybody likes to feel that she or he is special. Sadly, many of us grow up believing that we're not special at all. We wish that we could be more attractive or better at sports. We wish we had more money or nicer clothes. Like the Tin Man, the Scarecrow, or the Cowardly Lion from The Wizard of Oz, we think we're not good enough just as we are. In the film, The Tin Man wishes he had a heart. The Scarecrow wishes that he had a brain, and the Lion wants courage. Eventually, each of them realizes that he already has what he wants. Nearly all parents want us to be the best we can be. They occasionally attempt to encourage us to do better by comparing us to others. They mean well, but the message we usually get is that we're not good enough. We start to believe that the only way we can be special is by being better than somebody else, but we are frequently disappointed. There will always be somebody out there that is better than we are at something. There are a lot of people around who may not be as intelligent as we are but who are better at sports. Or they may not be as handsome, but they have more money. It is unthinkable for us to be better than everybody else all the time. Like the Tin Man, the Scarecrow, and the Cowardly Lion, we all need what we believe will make us better people. What we don't understand is that often we already have inside us the very things that we look for. Our parents often forget to tell us that we are special, that we are good enough just as we are. Perhaps no one told them when they were growing up, or maybe they just forgot. Either way, it's up to us to remind them sometimes that each of us, in our own way, is special. What we are . . . is enough.",
  question: "This essay was most likely written by",
  options: ["a young person", "a coach", "a teacher", "a parent"],
  correct: 2,
  explanation: "Giọng văn mang tính giáo dục, phân tích tâm lý và hướng dẫn nhận thức cho người đọc.\n→ Dịch: Bài luận này nhiều khả năng được viết bởi một giáo viên."
},
{
  id: 28,
  passage: "Everybody likes to feel that she or he is special. Sadly, many of us grow up believing that we're not special at all. We wish that we could be more attractive or better at sports. We wish we had more money or nicer clothes. Like the Tin Man, the Scarecrow, or the Cowardly Lion from The Wizard of Oz, we think we're not good enough just as we are. In the film, The Tin Man wishes he had a heart. The Scarecrow wishes that he had a brain, and the Lion wants courage. Eventually, each of them realizes that he already has what he wants. Nearly all parents want us to be the best we can be. They occasionally attempt to encourage us to do better by comparing us to others. They mean well, but the message we usually get is that we're not good enough. We start to believe that the only way we can be special is by being better than somebody else, but we are frequently disappointed. There will always be somebody out there that is better than we are at something. There are a lot of people around who may not be as intelligent as we are but who are better at sports. Or they may not be as handsome, but they have more money. It is unthinkable for us to be better than everybody else all the time. Like the Tin Man, the Scarecrow, and the Cowardly Lion, we all need what we believe will make us better people. What we don't understand is that often we already have inside us the very things that we look for. Our parents often forget to tell us that we are special, that we are good enough just as we are. Perhaps no one told them when they were growing up, or maybe they just forgot. Either way, it's up to us to remind them sometimes that each of us, in our own way, is special. What we are . . . is enough.",
  question: "What does the writer say about our parents?",
  options: [
    "They always tell us that we are good enough",
    "They never forget to tell us that we are special",
    "They always tell us that we are special",
    "They frequently forget to tell us that we are special"
  ],
  correct: 3,
  explanation: "Trong bài có câu: \"Our parents often forget to tell us that we are special\".\n→ Dịch: Tác giả nói rằng cha mẹ thường xuyên quên nói với chúng ta rằng chúng ta là những người đặc biệt."
},
{
  id: 29,
  passage: "Everybody likes to feel that she or he is special. Sadly, many of us grow up believing that we're not special at all. We wish that we could be more attractive or better at sports. We wish we had more money or nicer clothes. Like the Tin Man, the Scarecrow, or the Cowardly Lion from The Wizard of Oz, we think we're not good enough just as we are. In the film, The Tin Man wishes he had a heart. The Scarecrow wishes that he had a brain, and the Lion wants courage. Eventually, each of them realizes that he already has what he wants. Nearly all parents want us to be the best we can be. They occasionally attempt to encourage us to do better by comparing us to others. They mean well, but the message we usually get is that we're not good enough. We start to believe that the only way we can be special is by being better than somebody else, but we are frequently disappointed. There will always be somebody out there that is better than we are at something. There are a lot of people around who may not be as intelligent as we are but who are better at sports. Or they may not be as handsome, but they have more money. It is unthinkable for us to be better than everybody else all the time. Like the Tin Man, the Scarecrow, and the Cowardly Lion, we all need what we believe will make us better people. What we don't understand is that often we already have inside us the very things that we look for. Our parents often forget to tell us that we are special, that we are good enough just as we are. Perhaps no one told them when they were growing up, or maybe they just forgot. Either way, it's up to us to remind them sometimes that each of us, in our own way, is special. What we are . . . is enough.",
  question: "The author of this essay believes that",
  options: [
    "we are all good enough just the way we are",
    "the richer you are, the better you are",
    "intelligent people are more special than others",
    "not everyone can be special"
  ],
  correct: 0,
  explanation: "Thông điệp xuyên suốt bài: mỗi người đã đủ tốt như chính con người mình.\n→ Dịch: Tác giả tin rằng tất cả chúng ta đều đủ tốt theo cách riêng của mình."
},
{
  id: 30,
  passage: "Everybody likes to feel that she or he is special. Sadly, many of us grow up believing that we're not special at all. We wish that we could be more attractive or better at sports. We wish we had more money or nicer clothes. Like the Tin Man, the Scarecrow, or the Cowardly Lion from The Wizard of Oz, we think we're not good enough just as we are. In the film, The Tin Man wishes he had a heart. The Scarecrow wishes that he had a brain, and the Lion wants courage. Eventually, each of them realizes that he already has what he wants. Nearly all parents want us to be the best we can be. They occasionally attempt to encourage us to do better by comparing us to others. They mean well, but the message we usually get is that we're not good enough. We start to believe that the only way we can be special is by being better than somebody else, but we are frequently disappointed. There will always be somebody out there that is better than we are at something. There are a lot of people around who may not be as intelligent as we are but who are better at sports. Or they may not be as handsome, but they have more money. It is unthinkable for us to be better than everybody else all the time. Like the Tin Man, the Scarecrow, and the Cowardly Lion, we all need what we believe will make us better people. What we don't understand is that often we already have inside us the very things that we look for. Our parents often forget to tell us that we are special, that we are good enough just as we are. Perhaps no one told them when they were growing up, or maybe they just forgot. Either way, it's up to us to remind them sometimes that each of us, in our own way, is special. What we are . . . is enough.",
  question: "Which of the following would be the best title for this passage?",
  options: [
    "What Makes You Laugh?",
    "What Makes You Happy?",
    "What Makes You Special?",
    "What Makes You Stronger?"
  ],
  correct: 2,
  explanation: "Nhan đề phản ánh đúng nội dung cốt lõi của bài: mỗi người đều đặc biệt theo cách riêng.\n→ Dịch: Tựa đề phù hợp nhất là \"Điều gì làm bạn trở nên đặc biệt?\""
}

];
