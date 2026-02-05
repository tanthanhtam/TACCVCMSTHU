const questions = [
  {
    id: 1,
    question: "No one has told me about the project before.",
    options: [
      "The project has not told to me before.",
      "The project has been not told to me before.",
      "I have not told about the project before.",
      "I have not been told about the project before."
    ],
    correct: 3,
    explanation: "Câu bị động thì hiện tại hoàn thành: have/has been + V3."
  },
  {
    id: 2,
    question: "I _______ the same car for more than 10 years. I _______ about buying a new one.",
    options: [
      "have had / am thinking",
      "will have / think",
      "had / will think",
      "am going to have / was thinking"
    ],
    correct: 0,
    explanation: "For + thời gian dài dùng hiện tại hoàn thành; am thinking diễn tả ý định hiện tại."
  },
  {
    id: 3,
    question: "We needn’t always complain _______ pollution but we have to find out proper solutions _______ the problem.",
    options: ["on / from", "about / to", "at / over", "of / for"],
    correct: 1,
    explanation: "Complain about; solution to."
  },
  {
    id: 4,
    question: "Paul stopped _______ a rest because he was very tired.",
    options: ["have", "to have", "had", "having"],
    correct: 1,
    explanation: "Stop to do sth: dừng lại để làm việc khác."
  },
  {
    id: 5,
    question: "He was too anxious to do anything.",
    options: [
      "His anxiety didn’t have effects on him.",
      "He did everything although he was very anxious.",
      "He was so anxious that he could not do anything.",
      "Everything was done thanks to his anxiety."
    ],
    correct: 2,
    explanation: "Too ... to = so ... that ... not."
  },
  {
    id: 6,
    question: "_______, she decided to quit the job.",
    options: [
      "Feeling dissatisfied",
      "Felt dissatisfied",
      "She feeing dissatisfied",
      "To be felt dissatisfied"
    ],
    correct: 0,
    explanation: "V-ing clause dùng rút gọn mệnh đề trạng ngữ."
  },
  {
    id: 7,
    question: "Millions of dollars’ worth of damage _______.",
    options: [
      "has caused with a storm",
      "has been caused by a storm",
      "has been causing by a storm",
      "has been caused with a storm"
    ],
    correct: 1,
    explanation: "Câu bị động + by chỉ tác nhân."
  },
  {
    id: 8,
    question: "Mary asked me _______ he would come the next day or not.",
    options: ["if", "unless", "that", "when"],
    correct: 0,
    explanation: "If dùng trong câu hỏi gián tiếp."
  },
  {
    id: 9,
    question: "Do you know _______?",
    options: [
      "where we will be taking the test",
      "will where we be taking the test",
      "will we be taking the test",
      "where will we be taking the test"
    ],
    correct: 0,
    explanation: "Câu hỏi gián tiếp dùng trật tự khẳng định."
  },
  {
    id: 10,
    question: "_______ Bren comes from, has a lot of good curry restaurants.",
    options: [
      "Bradford,",
      "Bradford, where",
      "Bradford, that",
      "Bradford where"
    ],
    correct: 1,
    explanation: "Mệnh đề quan hệ không xác định dùng where."
  },
  {
    id: 11,
    question: "Someone stole my purse _______ for the bus.",
    options: [
      "as soon as I am waiting",
      "since I was waiting",
      "while I was waiting",
      "when I will wait"
    ],
    correct: 2,
    explanation: "While + quá khứ tiếp diễn."
  },
  {
    id: 12,
    question: "_______ cigarettes you smoke, _______ your health becomes.",
    options: [
      "The more / the worse",
      "The many / the bad",
      "The most / the worst",
      "More / worse"
    ],
    correct: 0,
    explanation: "So sánh kép: the more ... the worse."
  },
  {
    id: 13,
    question: "Explorers are said _______ a lost tribe in the Amazon not long ago.",
    options: [
      "that they found",
      "to have found",
      "found",
      "to find"
    ],
    correct: 1,
    explanation: "Cấu trúc: S + be said + to have + V3."
  },
  {
    id: 14,
    question: "That old man still denies _______ the fire.",
    options: [
      "having started",
      "to start",
      "to starting",
      "having been started"
    ],
    correct: 0,
    explanation: "Deny + V-ing."
  },
  {
    id: 15,
    question: "_______ of the two football teams scored a goal, so the final result was a draw.",
    options: ["No one", "None", "Neither", "Not any"],
    correct: 2,
    explanation: "Neither of + two."
  },
  {
    id: 16,
    question: "She didn’t enjoy reading that novel because it had _______ ending.",
    options: ["such sad an", "so sad", "a so sad", "so sad an"],
    correct: 1,
    explanation: "So + adj + noun."
  },
  {
    id: 17,
    question: "It’s about time we _______.",
    options: ["go", "have gone", "were going", "should go"],
    correct: 2,
    explanation: "It’s about time + S + V2."
  },
  {
    id: 18,
    question: "_______ his having many friends, none of them would give him any assistance.",
    options: ["Although", "Despite", "However", "Even if"],
    correct: 1,
    explanation: "Despite + noun / V-ing."
  },
  {
    id: 19,
    question: "_______ about the tragedy, we would have never come without first calling.",
    options: ["If we heard", "Had we heard", "Did we hear", "If we hear"],
    correct: 1,
    explanation: "Đảo ngữ điều kiện loại 3."
  },
  {
    id: 20,
    question: "She retired early _______ account _______ ill health. Now she lives _______ retirement.",
    options: [
      "in, off, upon",
      "for, from, on",
      "on, of, in",
      "with, in, during"
    ],
    correct: 2,
    explanation: "On account of; live in retirement."
  },
 {
    id: 21,
    passage: "Đọc đoạn văn sau và chọn đáp án thích hợp để điền vào chỗ trống.<br><br>\
Our century has seen great changes in the life and in conditions of people.<br>\
Less than a hundred years ago, many of the things we (21) _______ now seemed impossible.<br>\
No one could imagine that people could fly, or that we could listen to music thousands of miles away.<br>\
Today, radio and television serve many purposes (22) _______ pleasure.<br>\
They help us find fish in the sea and land airplanes in bad weather or at night.<br>\
They control the work of large (23) _______ of machines in industry.<br>\
Never before in history have been such rapid changes in our way of life as at the present moment.<br>\
Scientists have been using what is called “a scientific method” to make new discoveries.<br>\
Among the most important scientific discoveries are new medicines.<br>\
Many illnesses that people died (24) _______ 50 years ago are no more dangerous.<br>\
The study of science helps us (25) _______ our outlook and opens a whole new world for us.<br>\
The progress of science is leading to a better and better life for man.",
    question: "Many of the things we _______ now seemed impossible.",
    options: ["make", "do", "get", "conduct"],
    correct: 2,
    explanation: "Get: đạt được, có được."
  },
  {
    id: 22,
    passage: "Đọc đoạn văn sau và chọn đáp án thích hợp để điền vào chỗ trống.<br><br>\
Our century has seen great changes in the life and in conditions of people.<br>\
Less than a hundred years ago, many of the things we (21) _______ now seemed impossible.<br>\
No one could imagine that people could fly, or that we could listen to music thousands of miles away.<br>\
Today, radio and television serve many purposes (22) _______ pleasure.<br>\
They help us find fish in the sea and land airplanes in bad weather or at night.<br>\
They control the work of large (23) _______ of machines in industry.<br>\
Never before in history have been such rapid changes in our way of life as at the present moment.<br>\
Scientists have been using what is called “a scientific method” to make new discoveries.<br>\
Among the most important scientific discoveries are new medicines.<br>\
Many illnesses that people died (24) _______ 50 years ago are no more dangerous.<br>\
The study of science helps us (25) _______ our outlook and opens a whole new world for us.<br>\
The progress of science is leading to a better and better life for man.",
    question: "Today, radio and television serve many purposes _______ pleasure.",
    options: ["despite", "in addition", "besides", "also"],
    correct: 2,
    explanation: "Besides: ngoài ra."
  },
  {
    id: 23,
    passage: "Đọc đoạn văn sau và chọn đáp án thích hợp để điền vào chỗ trống.<br><br>\
Our century has seen great changes in the life and in conditions of people.<br>\
Less than a hundred years ago, many of the things we (21) _______ now seemed impossible.<br>\
No one could imagine that people could fly, or that we could listen to music thousands of miles away.<br>\
Today, radio and television serve many purposes (22) _______ pleasure.<br>\
They help us find fish in the sea and land airplanes in bad weather or at night.<br>\
They control the work of large (23) _______ of machines in industry.<br>\
Never before in history have been such rapid changes in our way of life as at the present moment.<br>\
Scientists have been using what is called “a scientific method” to make new discoveries.<br>\
Among the most important scientific discoveries are new medicines.<br>\
Many illnesses that people died (24) _______ 50 years ago are no more dangerous.<br>\
The study of science helps us (25) _______ our outlook and opens a whole new world for us.<br>\
The progress of science is leading to a better and better life for man.",
    question: "They control the work of large _______ of machines in industry.",
    options: ["numbers", "amounts", "lots", "tasks"],
    correct: 0,
    explanation: "Large numbers of + danh từ đếm được."
  },
  {
    id: 24,
    passage: "Đọc đoạn văn sau và chọn đáp án thích hợp để điền vào chỗ trống.<br><br>\
Our century has seen great changes in the life and in conditions of people.<br>\
Less than a hundred years ago, many of the things we (21) _______ now seemed impossible.<br>\
No one could imagine that people could fly, or that we could listen to music thousands of miles away.<br>\
Today, radio and television serve many purposes (22) _______ pleasure.<br>\
They help us find fish in the sea and land airplanes in bad weather or at night.<br>\
They control the work of large (23) _______ of machines in industry.<br>\
Never before in history have been such rapid changes in our way of life as at the present moment.<br>\
Scientists have been using what is called “a scientific method” to make new discoveries.<br>\
Among the most important scientific discoveries are new medicines.<br>\
Many illnesses that people died (24) _______ 50 years ago are no more dangerous.<br>\
The study of science helps us (25) _______ our outlook and opens a whole new world for us.<br>\
The progress of science is leading to a better and better life for man.",
    question: "Many illnesses that people died _______ 50 years ago are no more dangerous.",
    options: ["out", "in", "for", "from"],
    correct: 3,
    explanation: "Die from: chết vì."
  },
  {
    id: 25,
    passage: "Đọc đoạn văn sau và chọn đáp án thích hợp để điền vào chỗ trống.<br><br>\
Our century has seen great changes in the life and in conditions of people.<br>\
Less than a hundred years ago, many of the things we (21) _______ now seemed impossible.<br>\
No one could imagine that people could fly, or that we could listen to music thousands of miles away.<br>\
Today, radio and television serve many purposes (22) _______ pleasure.<br>\
They help us find fish in the sea and land airplanes in bad weather or at night.<br>\
They control the work of large (23) _______ of machines in industry.<br>\
Never before in history have been such rapid changes in our way of life as at the present moment.<br>\
Scientists have been using what is called “a scientific method” to make new discoveries.<br>\
Among the most important scientific discoveries are new medicines.<br>\
Many illnesses that people died (24) _______ 50 years ago are no more dangerous.<br>\
The study of science helps us (25) _______ our outlook and opens a whole new world for us.<br>\
The progress of science is leading to a better and better life for man.",
    question: "The study of science helps us _______ our outlook.",
    options: ["open", "large", "lengthen", "widen"],
    correct: 3,
    explanation: "Widen outlook: mở rộng tầm nhìn."
  },
  {
    id: 26,
    passage: "Đọc đoạn văn sau và chọn câu trả lời đúng cho mỗi câu hỏi.<br><br>\
For many years people believed that the cleverest animals after man were chimpanzees. Now, however, there is proof that dolphins may be even cleverer than these big apes.<br>\
Although a dolphin lives in the sea it is not a fish. It is a mammal. It is in many ways, therefore, like a human being.<br>\
Dolphins have a simple language. They are able to talk to one another. It may be possible for man to learn how to talk to dolphins.<br>\
But this will not be easy because dolphins can not hear the kind of sounds man can make.<br>\
If man wants to talk to dolphins, therefore, he will have to make a third language which both he and the dolphins can understand.<br>\
Dolphins are also very friendly towards man. They often follow ships.<br>\
There are many stories of dolphins guiding ships through difficult and dangerous waters.",
    question: "Which animals do people think may be the cleverest?",
    options: ["Chimpanzees", "Dolphins", "Big apes", "Mammals"],
    correct: 1,
    explanation: "Đoạn văn nói dolphins thông minh nhất."
  },
  {
    id: 27,
    passage: "Đọc đoạn văn sau và chọn câu trả lời đúng cho mỗi câu hỏi.<br><br>\
For many years people believed that the cleverest animals after man were chimpanzees. Now, however, there is proof that dolphins may be even cleverer than these big apes.<br>\
Although a dolphin lives in the sea it is not a fish. It is a mammal. It is in many ways, therefore, like a human being.<br>\
Dolphins have a simple language. They are able to talk to one another. It may be possible for man to learn how to talk to dolphins.<br>\
But this will not be easy because dolphins can not hear the kind of sounds man can make.<br>\
If man wants to talk to dolphins, therefore, he will have to make a third language which both he and the dolphins can understand.<br>\
Dolphins are also very friendly towards man. They often follow ships.<br>\
There are many stories of dolphins guiding ships through difficult and dangerous waters.",

    question: "What other beings are dolphins like in many ways?",
    options: ["Fish", "Animals", "Reptiles", "Men"],
    correct: 3,
    explanation: "Dolphins giống con người."
  },
  {
    id: 28,
    passage: "Đọc đoạn văn sau và chọn câu trả lời đúng cho mỗi câu hỏi.<br><br>\
For many years people believed that the cleverest animals after man were chimpanzees. Now, however, there is proof that dolphins may be even cleverer than these big apes.<br>\
Although a dolphin lives in the sea it is not a fish. It is a mammal. It is in many ways, therefore, like a human being.<br>\
Dolphins have a simple language. They are able to talk to one another. It may be possible for man to learn how to talk to dolphins.<br>\
But this will not be easy because dolphins can not hear the kind of sounds man can make.<br>\
If man wants to talk to dolphins, therefore, he will have to make a third language which both he and the dolphins can understand.<br>\
Dolphins are also very friendly towards man. They often follow ships.<br>\
There are many stories of dolphins guiding ships through difficult and dangerous waters.",
    question: "What have scientists discovered about dolphins?",
    options: [
      "They understand simple language.",
      "They can speak to one another.",
      "Men can now talk to them.",
      "They can teach men their languages."
    ],
    correct: 1,
    explanation: "Dolphins can talk to one another."
  },
  {
    id: 29,
     passage: "Đọc đoạn văn sau và chọn câu trả lời đúng cho mỗi câu hỏi.<br><br>\
For many years people believed that the cleverest animals after man were chimpanzees. Now, however, there is proof that dolphins may be even cleverer than these big apes.<br>\
Although a dolphin lives in the sea it is not a fish. It is a mammal. It is in many ways, therefore, like a human being.<br>\
Dolphins have a simple language. They are able to talk to one another. It may be possible for man to learn how to talk to dolphins.<br>\
But this will not be easy because dolphins can not hear the kind of sounds man can make.<br>\
If man wants to talk to dolphins, therefore, he will have to make a third language which both he and the dolphins can understand.<br>\
Dolphins are also very friendly towards man. They often follow ships.<br>\
There are many stories of dolphins guiding ships through difficult and dangerous waters.",
    question: "Why is a third language necessary?",
    options: [
      "Most men do not speak English.",
      "The dolphin’s language is hard to learn.",
      "Dolphins cannot hear men speaking.",
      "Men want to talk to dolphins in secret."
    ],
    correct: 2,
    explanation: "Dolphins cannot hear human sounds."
  },
  {
    id: 30,
    passage: "Đọc đoạn văn sau và chọn câu trả lời đúng cho mỗi câu hỏi.<br><br>\
For many years people believed that the cleverest animals after man were chimpanzees. Now, however, there is proof that dolphins may be even cleverer than these big apes.<br>\
Although a dolphin lives in the sea it is not a fish. It is a mammal. It is in many ways, therefore, like a human being.<br>\
Dolphins have a simple language. They are able to talk to one another. It may be possible for man to learn how to talk to dolphins.<br>\
But this will not be easy because dolphins can not hear the kind of sounds man can make.<br>\
If man wants to talk to dolphins, therefore, he will have to make a third language which both he and the dolphins can understand.<br>\
Dolphins are also very friendly towards man. They often follow ships.<br>\
There are many stories of dolphins guiding ships through difficult and dangerous waters.",
    question: "In what way are dolphins friendly to man?",
    options: [
      "They like interesting things about man.",
      "They often follow ships.",
      "They often jump on to ships.",
      "They seem to like stories."
    ],
    correct: 1,
    explanation: "Dolphins often follow ships."
  }
];
