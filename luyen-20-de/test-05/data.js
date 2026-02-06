const questions = [
  {
    id: 1,
    question: "Bill is completely fed _______ with his job and is thinking of leaving.",
    options: ["up", "out", "over", "off"],
    correct: 0,
    explanation: "Cụm cố định: fed up with = chán ngấy. Dịch: Bill hoàn toàn chán công việc của mình và đang nghĩ đến việc nghỉ."
  },
  {
    id: 2,
    question: "Why did you lend _______?",
    options: ["my jacket to Angela", "my jacket Angela", "to Angela my jacket", "Angela to my jacket"],
    correct: 0,
    explanation: "Cấu trúc: lend + O + to + người. Dịch: Tại sao bạn lại cho Angela mượn áo khoác của tôi?"
  },
  {
    id: 3,
    question: "_______ me a joke!",
    options: ["Tell", "Say", "Speak", "Do"],
    correct: 0,
    explanation: "Tell + người + vật (tell me a joke). Dịch: Kể cho tôi một câu chuyện cười đi!"
  },
  {
    id: 4,
    question: "Simon _______ stand at the front of the class because he wouldn’t stop talking.",
    options: ["made to", "was made", "was made to", "has made"],
    correct: 2,
    explanation: "Bị động của make: be made to + V. Dịch: Simon bị bắt phải đứng lên đầu lớp vì cậu ấy không chịu ngừng nói."
  },
  {
    id: 5,
    question: "_______ Mum had a cold, she still went to work.",
    options: ["Despite", "However", "In spite", "Although"],
    correct: 3,
    explanation: "Although + mệnh đề. Dịch: Mặc dù mẹ bị cảm, bà vẫn đi làm."
  },
  {
    id: 6,
    question: "When are you going to _______?",
    options: [
      "get fixed your computer",
      "have fixed your computer",
      "get your computer fixed",
      "have your computer fixing"
    ],
    correct: 2,
    explanation: "Cấu trúc nhờ vả: get + O + V3. Dịch: Khi nào bạn định mang máy tính đi sửa?"
  },
  {
    id: 7,
    question: "I’ll do my homework as soon as I _______ home.",
    options: ["get", "will get", "would get", "got"],
    correct: 0,
    explanation: "Mệnh đề thời gian dùng hiện tại đơn cho tương lai. Dịch: Tôi sẽ làm bài tập ngay khi tôi về nhà."
  },
  {
    id: 8,
    question: "Ivor _______ cricket for long, but he’s already quite good at it.",
    options: ["isn’t playing", "doesn’t play", "hasn’t been playing", "didn’t play"],
    correct: 2,
    explanation: "Hiện tại hoàn thành tiếp diễn: hasn’t been playing for long. Dịch: Ivor chưa chơi cricket lâu nhưng đã khá giỏi."
  },
  {
    id: 9,
    question: "When he was at university, my dad did _______ in maths.",
    options: ["study", "degree", "subject", "mark"],
    correct: 1,
    explanation: "Do a degree = học lấy bằng đại học. Dịch: Khi học đại học, bố tôi học ngành toán."
  },
  {
    id: 10,
    question: "John got to work early _______ he could finish the report before the meeting.",
    options: ["in order to", "in order that", "so as to", "such that"],
    correct: 1,
    explanation: "in order that + mệnh đề. Dịch: John đến chỗ làm sớm để anh ấy có thể hoàn thành báo cáo trước cuộc họp."
  },
  {
    id: 11,
    question: "Leave everything just _______ you found it.",
    options: ["as", "as though", "as if", "though"],
    correct: 0,
    explanation: "As = như đúng tình trạng. Dịch: Hãy để mọi thứ đúng như bạn đã thấy."
  },
  {
    id: 12,
    question: "You must decide on _______.",
    options: [
      "to take which English course",
      "which English course you should take",
      "that which English course to take",
      "which English course should you take"
    ],
    correct: 1,
    explanation: "Câu gián tiếp không đảo ngữ. Dịch: Bạn phải quyết định nên học khóa tiếng Anh nào."
  },
  {
    id: 13,
    question: "_______ not for his deafness, _______ on the phone.",
    options: [
      "Were it/ could he communicate",
      "Were it/ he could communicate",
      "It were/ could he communicate",
      "It were/ he could communicate"
    ],
    correct: 0,
    explanation: "Đảo ngữ điều kiện loại 2: Were it not for..., could + V. Dịch: Nếu không vì bị điếc, anh ấy đã có thể giao tiếp qua điện thoại."
  },
  {
    id: 14,
    question: "You failed in your final test. You _______ harder.",
    options: [
      "needn’t have studied",
      "may study",
      "should have studied",
      "would study"
    ],
    correct: 2,
    explanation: "should have + V3 = đáng lẽ nên làm. Dịch: Bạn trượt kỳ thi cuối kỳ. Lẽ ra bạn nên học chăm hơn."
  },
  {
    id: 15,
    question: "Not only John but also I _______ practicing English in the morning.",
    options: ["are used to", "is used to", "am used to", "were used to"],
    correct: 2,
    explanation: "Not only...but also: chia theo chủ ngữ gần nhất (I → am). Dịch: Không chỉ John mà tôi cũng quen với việc luyện tiếng Anh vào buổi sáng."
  },
  {
    id: 16,
    question: "The man _______ was arrested last night.",
    options: [
      "to live next door",
      "he lives next door",
      "living next door",
      "lives next door"
    ],
    correct: 2,
    explanation: "Mệnh đề rút gọn dùng V-ing. Dịch: Người đàn ông sống cạnh nhà tôi đã bị bắt tối qua."
  },
  {
    id: 17,
    question: "Who is _______ first spaceman to travel into _______ space?",
    options: ["the/ x", "the/ the", "a/ a", "a/ the"],
    correct: 0,
    explanation: "So sánh nhất dùng 'the', space là danh từ trừu tượng. Dịch: Ai là phi hành gia đầu tiên bay vào không gian?"
  },
  {
    id: 18,
    question: "Swimming should be taught in the school.",
    options: [
      "Oh, that’s a big problem.",
      "I can’t agree with you more.",
      "I completely disagree with you.",
      "You can make it on your own."
    ],
    correct: 1,
    explanation: "Câu đồng ý mạnh mẽ. Dịch: Tôi hoàn toàn đồng ý với bạn."
  },
  {
    id: 19,
    question: "I must thank the man. I got the present from him.",
    options: [
      "I must thank the man from whom I got the present from him.",
      "I must thank the man whom from I got the present.",
      "I must thank the man from which I got the present.",
      "I must thank the man from whom I got the present."
    ],
    correct: 3,
    explanation: "Giới từ + whom, không lặp from. Dịch: Tôi phải cảm ơn người đàn ông mà tôi đã nhận món quà từ ông ấy."
  },
  {
    id: 20,
    question: "The train can’t leave Boston. The storm postpones it.",
    options: [
      "The train could leave Boston if it wasn’t postponed.",
      "If the train was postponed , it couldn’t leave Boston.",
      "But for the storm, the train could leave Boston.",
      "Unless the train isn’t postponed, it can leave Boston."
    ],
    correct: 2,
    explanation: "But for = nếu không vì. Dịch: Nếu không vì cơn bão, con tàu đã có thể rời Boston."
  },
  {
    id: 21,
    passage: "Science has told us too much about the moon that it is fairly easy to imagine what it would be like to get there. It is certainly not a friendly place. Since there is no air or water, there can be no life of any kind. There is not much variety of scenery either. For mile after mile there are only flat plains of dust with mountains around them. Above, the sun and stars shine in the black sky. If you step out of the mountain shadow, it means moving from the severe cold into intense heat. These extreme temperatures continually break rocks away from the surface of the mountains. The moon is also a very silent world, for sound waves can only travel through air. But beyond the broken horizon, you see a friendly sight. Our earth is shining more brightly than the stars. From this distance, it looks like an immense blue, green and brown ball.",
    question: "The moon is an unfriendly place because",
    options: [
      "there is no air, no water, no life, no scenery",
      "the sun and stars shine in the sky",
      "temperature breaks rock away",
      "all of the above"
    ],
    correct: 3,
    explanation: "Đoạn văn nêu nhiều lý do khiến Mặt Trăng không thân thiện: không khí, nước, sự sống, cảnh quan nghèo nàn và nhiệt độ khắc nghiệt.\n→ Dịch câu chứa đáp án: Mặt Trăng là một nơi không thân thiện vì tất cả những lý do trên."
  },
  {
    id: 22,
    passage: "Science has told us too much about the moon that it is fairly easy to imagine what it would be like to get there. It is certainly not a friendly place. Since there is no air or water, there can be no life of any kind. There is not much variety of scenery either. For mile after mile there are only flat plains of dust with mountains around them. Above, the sun and stars shine in the black sky. If you step out of the mountain shadow, it means moving from the severe cold into intense heat. These extreme temperatures continually break rocks away from the surface of the mountains. The moon is also a very silent world, for sound waves can only travel through air. But beyond the broken horizon, you see a friendly sight. Our earth is shining more brightly than the stars. From this distance, it looks like an immense blue, green and brown ball.",
    question: "Without _______, the moon is a silent world.",
    options: [
      "man",
      "air",
      "sound",
      "water"
    ],
    correct: 1,
    explanation: "Đoạn văn: sound waves can only travel through air.\n→ Dịch câu chứa đáp án: Không có không khí, Mặt Trăng là một thế giới im lặng."
  },
  {
    id: 23,
    passage: "Science has told us too much about the moon that it is fairly easy to imagine what it would be like to get there. It is certainly not a friendly place. Since there is no air or water, there can be no life of any kind. There is not much variety of scenery either. For mile after mile there are only flat plains of dust with mountains around them. Above, the sun and stars shine in the black sky. If you step out of the mountain shadow, it means moving from the severe cold into intense heat. These extreme temperatures continually break rocks away from the surface of the mountains. The moon is also a very silent world, for sound waves can only travel through air. But beyond the broken horizon, you see a friendly sight. Our earth is shining more brightly than the stars. From this distance, it looks like an immense blue, green and brown ball.",
    question: "According to the passage we know that",
    options: [
      "the earth looks like a colored ball",
      "we can enjoy the scenery on the moon",
      "every inch of the moon is very hot",
      "the extreme temperature breaks rocks away from the surface of mountains"
    ],
    correct: 0,
    explanation: "Đoạn cuối bài: it looks like an immense blue, green and brown ball.\n→ Dịch câu chứa đáp án: Trái Đất trông giống như một quả cầu đầy màu sắc."
  },
  {
    id: 24,
    passage: "Science has told us too much about the moon that it is fairly easy to imagine what it would be like to get there. It is certainly not a friendly place. Since there is no air or water, there can be no life of any kind. There is not much variety of scenery either. For mile after mile there are only flat plains of dust with mountains around them. Above, the sun and stars shine in the black sky. If you step out of the mountain shadow, it means moving from the severe cold into intense heat. These extreme temperatures continually break rocks away from the surface of the mountains. The moon is also a very silent world, for sound waves can only travel through air. But beyond the broken horizon, you see a friendly sight. Our earth is shining more brightly than the stars. From this distance, it looks like an immense blue, green and brown ball.",
    question: "We can conclude that “continually” means",
    options: [
      "sometimes",
      "always",
      "without break",
      "frequently"
    ],
    correct: 2,
    explanation: "Continually mang nghĩa diễn ra liên tục, không ngừng nghỉ.\n→ Dịch cụm chứa đáp án: Nhiệt độ khắc nghiệt liên tục làm đá vỡ ra khỏi bề mặt núi."
  },
  {
    id: 25,
    passage: "Science has told us too much about the moon that it is fairly easy to imagine what it would be like to get there. It is certainly not a friendly place. Since there is no air or water, there can be no life of any kind. There is not much variety of scenery either. For mile after mile there are only flat plains of dust with mountains around them. Above, the sun and stars shine in the black sky. If you step out of the mountain shadow, it means moving from the severe cold into intense heat. These extreme temperatures continually break rocks away from the surface of the mountains. The moon is also a very silent world, for sound waves can only travel through air. But beyond the broken horizon, you see a friendly sight. Our earth is shining more brightly than the stars. From this distance, it looks like an immense blue, green and brown ball.",
    question: "The best title for the passage is",
    options: [
      "An Unfriendly and Friendly Place",
      "The Geography of the Moon",
      "Moon, a Silent World",
      "The Moon"
    ],
    correct: 0,
    explanation: "Bài viết vừa miêu tả sự khắc nghiệt của Mặt Trăng, vừa đối lập với hình ảnh Trái Đất thân thiện.\n→ Dịch câu hỏi: Tiêu đề nào phù hợp nhất cho đoạn văn?"
  },
{
    id: 26,
    passage: "Even if you take good care of your body, you can still get sick sometimes. Germs can invade even a healthy body! Getting sick can make you feel miserable, but there are some things that you can do to help yourself get better quickly and be more comfortable. The first thing to do when you are not feeling well is to (26) ______ your parents know. Sometimes it is hard to tell whether you have a cold, the flu, or something more serious. So your parents may take you to the doctor. Your doctor can (27) ______ tests that will let you know what is making you sick. You may be sick because of bacteria. Strep throat is an (28) ______ of an illness caused by bacteria. If bacteria has made you sick, your doctor (29) ______ give you antibiotics. Antibiotics are medicines that are designed to help your body get rid (30) ______ the bacteria that is making you sick.",
    question: "The first thing to do when you are not feeling well is to ______ your parents know.",
    options: ["admit", "permit", "let", "allow"],
    correct: 2,
    explanation: "Cấu trúc đúng: let + someone + know (cho ai đó biết).\n→ Dịch câu chứa đáp án: Điều đầu tiên cần làm khi bạn không khỏe là cho bố mẹ bạn biết."
  },
  {
    id: 27,
    passage: "Even if you take good care of your body, you can still get sick sometimes. Germs can invade even a healthy body! Getting sick can make you feel miserable, but there are some things that you can do to help yourself get better quickly and be more comfortable. The first thing to do when you are not feeling well is to (26) ______ your parents know. Sometimes it is hard to tell whether you have a cold, the flu, or something more serious. So your parents may take you to the doctor. Your doctor can (27) ______ tests that will let you know what is making you sick. You may be sick because of bacteria. Strep throat is an (28) ______ of an illness caused by bacteria. If bacteria has made you sick, your doctor (29) ______ give you antibiotics. Antibiotics are medicines that are designed to help your body get rid (30) ______ the bacteria that is making you sick.",
    question: "Your doctor can ______ tests that will let you know what is making you sick.",
    options: ["do", "put", "carry", "follow"],
    correct: 0,
    explanation: "Cụm cố định: do tests (làm xét nghiệm).\n→ Dịch câu chứa đáp án: Bác sĩ có thể làm các xét nghiệm để cho bạn biết điều gì đang khiến bạn bị bệnh."
  },
  {
    id: 28,
    passage: "Even if you take good care of your body, you can still get sick sometimes. Germs can invade even a healthy body! Getting sick can make you feel miserable, but there are some things that you can do to help yourself get better quickly and be more comfortable. The first thing to do when you are not feeling well is to (26) ______ your parents know. Sometimes it is hard to tell whether you have a cold, the flu, or something more serious. So your parents may take you to the doctor. Your doctor can (27) ______ tests that will let you know what is making you sick. You may be sick because of bacteria. Strep throat is an (28) ______ of an illness caused by bacteria. If bacteria has made you sick, your doctor (29) ______ give you antibiotics. Antibiotics are medicines that are designed to help your body get rid (30) ______ the bacteria that is making you sick.",
    question: "Strep throat is an ______ of an illness caused by bacteria.",
    options: ["case", "model", "symbol", "example"],
    correct: 3,
    explanation: "Example = ví dụ minh họa.\n→ Dịch câu chứa đáp án: Viêm họng do liên cầu khuẩn là một ví dụ về bệnh do vi khuẩn gây ra."
  },
  {
    id: 29,
    passage: "Even if you take good care of your body, you can still get sick sometimes. Germs can invade even a healthy body! Getting sick can make you feel miserable, but there are some things that you can do to help yourself get better quickly and be more comfortable. The first thing to do when you are not feeling well is to (26) ______ your parents know. Sometimes it is hard to tell whether you have a cold, the flu, or something more serious. So your parents may take you to the doctor. Your doctor can (27) ______ tests that will let you know what is making you sick. You may be sick because of bacteria. Strep throat is an (28) ______ of an illness caused by bacteria. If bacteria has made you sick, your doctor (29) ______ give you antibiotics. Antibiotics are medicines that are designed to help your body get rid (30) ______ the bacteria that is making you sick.",
    question: "If bacteria has made you sick, your doctor ______ give you antibiotics.",
    options: ["have", "will", "is", "had"],
    correct: 1,
    explanation: "Câu điều kiện loại 1 → dùng will để chỉ kết quả có khả năng xảy ra.\n→ Dịch câu chứa đáp án: Nếu vi khuẩn khiến bạn bị bệnh, bác sĩ sẽ cho bạn dùng thuốc kháng sinh."
  },
  {
    id: 30,
    passage: "Even if you take good care of your body, you can still get sick sometimes. Germs can invade even a healthy body! Getting sick can make you feel miserable, but there are some things that you can do to help yourself get better quickly and be more comfortable. The first thing to do when you are not feeling well is to (26) ______ your parents know. Sometimes it is hard to tell whether you have a cold, the flu, or something more serious. So your parents may take you to the doctor. Your doctor can (27) ______ tests that will let you know what is making you sick. You may be sick because of bacteria. Strep throat is an (28) ______ of an illness caused by bacteria. If bacteria has made you sick, your doctor (29) ______ give you antibiotics. Antibiotics are medicines that are designed to help your body get rid (30) ______ the bacteria that is making you sick.",
    question: "Antibiotics are medicines that are designed to help your body get rid ______ the bacteria that is making you sick.",
    options: ["for", "from", "of", "in"],
    correct: 2,
    explanation: "Cấu trúc cố định: get rid of = loại bỏ.\n→ Dịch câu chứa đáp án: Thuốc kháng sinh là những loại thuốc được thiết kế để giúp cơ thể bạn loại bỏ vi khuẩn gây bệnh."
  }
];
