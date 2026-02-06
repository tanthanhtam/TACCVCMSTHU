const questions = [
  {
    id: 1,
    question: "Making private calls on the office phone is severely ____ on in our department.",
    options: ["frowned", "criticized", "regarded", "objected"],
    correct: 0,
    explanation: "To frown on sth: không đồng tình, không chấp nhận."
  },
  {
    id: 2,
    question: "She was unable to warn her mother that she would be late because the telephone was ____.",
    options: ["out of work", "off work", "out of order", "off duty"],
    correct: 2,
    explanation: "Out of order: bị hỏng."
  },
  {
    id: 3,
    question: "I wish my mother ____ while she does the housework or, at least, I wish she ____ in tune.",
    options: [
      "doesn’t sing – can sing",
      "couldn’t have sung – sang",
      "wouldn’t sing – would sing",
      "hadn’t sung – will be singing"
    ],
    correct: 2,
    explanation: "Wish + S + would / wouldn’t + V: ước điều không hài lòng ở hiện tại."
  },
  {
    id: 4,
    question: "Are you thinking of ____ London? Oh yes, I look forward to ____ my vacation there next summer.",
    options: [
      "being visited – spending",
      "visit – spend",
      "visiting – spend",
      "visiting – spending"
    ],
    correct: 3,
    explanation: "Think of + V-ing; look forward to + V-ing."
  },
  {
    id: 5,
    question: "On the night of 14 April 1912, during ____ first voyage, the Titanic hit an iceberg and sank two hours and forty minutes later.",
    options: ["his", "her", "their", "our"],
    correct: 1,
    explanation: "Danh từ chỉ tàu thuyền thường dùng đại từ 'her'."
  },
  {
    id: 6,
    question: "Suppose that I ____ on a bitterly cold day, ____ you jump in the water and rescue me?",
    options: [
      "were drowning – would",
      "were drowning – can",
      "had drowned – could",
      "had drowned – will"
    ],
    correct: 0,
    explanation: "Câu điều kiện loại 2: If / Suppose + S + V2, S + would + V."
  },
  {
    id: 7,
    question: "Malcolm was a teacher ____ we had rock and metal guitar was well known to everyone at the school.",
    options: ["who", "that", "which", "whose"],
    correct: 3,
    explanation: "Whose dùng để chỉ sở hữu."
  },
  {
    id: 8,
    question: "I recall my last summer holiday and anything about it but there was something the Chairman’s reaction to the problem of compensation ____ mentioned.",
    options: ["was", "to be", "had been", "was to be"],
    correct: 2,
    explanation: "Thì quá khứ hoàn thành dùng cho hành động xảy ra trước."
  },
  {
    id: 9,
    question: "I wish I ____ a little more modest.",
    options: ["would try", "must try", "has tried", "will try"],
    correct: 0,
    explanation: "Wish + S + would + V: mong muốn sự thay đổi."
  },
  {
    id: 10,
    question: "The building could be entered ____ the broken lock.",
    options: [
      "being replaced the broken lock",
      "for being replaced the broken lock",
      "after replacing the broken lock",
      "after being replaced the broken lock"
    ],
    correct: 3,
    explanation: "After being replaced: sau khi được thay."
  },
  {
    id: 11,
    question: "No one has told me about the project before.",
    options: [
      "The project has not told me before",
      "The project has been not told me before",
      "I have not told about the project before",
      "I have not been told about the project before"
    ],
    correct: 3,
    explanation: "Câu bị động hoàn thành."
  },
  {
    id: 12,
    question: "Now that we are ____ danger, we no longer need police protection.",
    options: ["off", "away from", "cut off", "outside"],
    correct: 2,
    explanation: "To be out of danger: ngoài vòng nguy hiểm."
  },
  {
    id: 13,
    question: "It is ____ impression of the school was positive, but there were a few aspects she objected to.",
    options: ["standard", "complete", "overall", "wide"],
    correct: 2,
    explanation: "Overall impression: ấn tượng chung."
  },
  {
    id: 14,
    question: "The film is ____ than I expected.",
    options: ["interested", "more interested", "interesting", "more interesting"],
    correct: 3,
    explanation: "So sánh hơn của tính từ dài."
  },
  {
    id: 15,
    question: "Vung Tau is a city in Ba Ria – Vung Tau Province, Vietnam with a population of 400,000. The city ____ in 1829.",
    options: ["was founded", "has been found", "was found", "has founded"],
    correct: 0,
    explanation: "Thì quá khứ đơn – was founded."
  },
  {
    id: 16,
    question: "Without something we could go on or go out on Sundays.",
    options: ["with", "without", "for", "at"],
    correct: 0,
    explanation: "With something: có cái gì đó."
  },
  {
    id: 17,
    question: "____, she managed to solve the problem.",
    options: ["Originally", "Eventually", "Fortunately", "Lately"],
    correct: 1,
    explanation: "Eventually: cuối cùng thì."
  },
  {
    id: 18,
    question: "To play a role doesn't mean to ____ a part.",
    options: ["makes", "puts", "plays", "has"],
    correct: 2,
    explanation: "Play a part: đóng vai trò."
  },
  {
    id: 19,
    question: "The only ____ is cold water.",
    options: ["a", "the", "an", "no article"],
    correct: 1,
    explanation: "The only + danh từ."
  },
  {
    id: 20,
    question: "The solution was ____ significant.",
    options: ["high", "significant", "expensive", "convenient"],
    correct: 1,
    explanation: "Significant: quan trọng."
  },
  {
    id: 21,
    question: "The word 'it' refers to ____.",
    options: ["England", "Christmas", "traditions", "a national holiday"],
    correct: 1,
    explanation: "It thay thế cho Christmas."
  },
  {
    id: 22,
    question: "How important are traditions in Britain?",
    options: [
      "slightly important",
      "more important than in other countries",
      "rather important",
      "somewhat important"
    ],
    correct: 1,
    explanation: "Truyền thống quan trọng hơn ở các nước khác."
  },
  {
    id: 23,
    question: "In Great Britain, ____.",
    options: [
      "only a few papers are published",
      "a garden in front of the house is a little square covered with cement",
      "all shops and factories are working at Christmas",
      "traditions are preserved"
    ],
    correct: 3,
    explanation: "Truyền thống được giữ gìn."
  },
  {
    id: 24,
    question: "The word 'it' in the last paragraph refers to ____.",
    options: ["Christmas", "a national holiday", "old traditions", "England"],
    correct: 0,
    explanation: "It = Christmas."
  },
  {
    id: 25,
    question: "Which of the following is NOT true?",
    options: [
      "In Great Britain all theatres are closed on Sundays",
      "In Great Britain a postman doesn’t work on Sundays",
      "English families like a house with garden better than modern flat",
      "In Scotland Christmas is a great national holiday"
    ],
    correct: 3,
    explanation: "Ở Scotland, Christmas không phải ngày lễ quốc gia."
  }
];