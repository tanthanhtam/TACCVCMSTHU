const questions = [
{
  id: 1,
  question: "Traditionally, the Ao dai _______ by both men and women.",
  options: [
    "has frequently worn",
    "frequently wore",
    "was frequently worn",
    "was frequently wearing"
  ],
  correct: 2,
  explanation: "Câu bị động ở quá khứ đơn: was/were + V3. Đáp án C đúng. Dịch: Theo truyền thống, áo dài được mặc thường xuyên bởi cả nam và nữ."
},
{
  id: 2,
  question: "Lan wishes she _______ play the guitar well.",
  options: ["ought", "will", "could", "may"],
  correct: 2,
  explanation: "Cấu trúc wish + could (mong muốn khả năng hiện tại). Đáp án C đúng. Dịch: Lan ước mình có thể chơi guitar giỏi."
},
{
  id: 3,
  question: "I got up late because my alarm clock didn’t _______.",
  options: ["see off", "take off", "turn on", "go off"],
  correct: 3,
  explanation: "Go off = reo (chuông). Đáp án D đúng. Dịch: Tôi dậy muộn vì đồng hồ báo thức không reo."
},
{
  id: 4,
  question: "Harry and Mai are talking about their plan for the weekend.\nHarry: Do you feel like going to the cinema this weekend?\nMai: _______.",
  options: [
    "You are welcome.",
    "I don’t agree, I am afraid.",
    "I feel bored.",
    "That would be great."
  ],
  correct: 3,
  explanation: "Câu đáp lời đề nghị tích cực. Đáp án D đúng. Dịch: Nghe hay đấy!"
},
{
  id: 5,
  question: "“Did you phone me yesterday?” Tom said to Mary.",
  options: [
    "Tom asked Mary that she had phoned him the day before.",
    "Tom asked Mary if he had phoned her the day before.",
    "Tom asked Mary if she had phoned him the previous day.",
    "Tom asked Mary if she phoned him yesterday."
  ],
  correct: 2,
  explanation: "Câu gián tiếp: if + S + had + V3, đổi yesterday → the previous day. Đáp án C đúng. Dịch: Tom hỏi Mary liệu hôm trước cô ấy có gọi cho anh không."
},
{
  id: 6,
  question: "I will call and tell you something interesting _______.",
  options: [
    "while I was coming home after work.",
    "when I come home after work.",
    "after I had come home after work.",
    "before I came home after work."
  ],
  correct: 1,
  explanation: "Mệnh đề thời gian với thì hiện tại đơn nói về tương lai. Đáp án B đúng. Dịch: Tôi sẽ gọi cho bạn khi tôi về nhà sau giờ làm."
},
{
  id: 7,
  question: "Passengers _______ undo their seatbelts until the signs have been switched off.",
  options: ["must not", "can’t", "ought to", "had better"],
  correct: 0,
  explanation: "Must not = không được phép. Đáp án A đúng. Dịch: Hành khách không được tháo dây an toàn cho đến khi có tín hiệu tắt."
},
{
  id: 8,
  question: "This New Year card is from a friend _______ used to study with me in primary school.",
  options: ["he", "who", "which", "whom"],
  correct: 1,
  explanation: "Mệnh đề quan hệ chỉ người, làm chủ ngữ → who. Đáp án B đúng. Dịch: Tấm thiệp năm mới này đến từ một người bạn từng học tiểu học với tôi."
},
{
  id: 9,
  question: "I _______ my former teacher for over ten years.",
  options: ["haven’t seen", "won’t see", "didn’t see", "don’t see"],
  correct: 0,
  explanation: "Hiện tại hoàn thành với for + khoảng thời gian. Đáp án A đúng. Dịch: Tôi đã không gặp giáo viên cũ của mình hơn 10 năm rồi."
},
{
  id: 10,
  question: "The shop center wasn’t _______ crowded this morning _______ it usually is.",
  options: ["so- than", "more- than", "as- than", "so- as"],
  correct: 3,
  explanation: "So ... as dùng trong câu phủ định so sánh bằng. Đáp án D đúng. Dịch: Trung tâm mua sắm sáng nay không đông như thường lệ."
},
{
  id: 11,
  question: "Everyone has equal rights under the law, _______?",
  options: ["do they", "have they", "haven’t they", "don’t they"],
  correct: 2,
  explanation: "Everyone → đại từ số ít nhưng dùng they trong tag question. Đáp án C đúng. Dịch: Mọi người đều có quyền bình đẳng trước pháp luật, phải không?"
},
{
  id: 12,
  question: "We didn’t go anywhere yesterday _______ the rain.",
  options: ["because of", "though", "because", "in spite of"],
  correct: 0,
  explanation: "Because of + danh từ. Đáp án A đúng. Dịch: Hôm qua chúng tôi không đi đâu vì trời mưa."
},
{
  id: 13,
  question: "Make sure your car runs on unleaded petrol and your home uses sources of _______ energy.",
  options: ["renewable", "reused", "recyclable", "recycling"],
  correct: 0,
  explanation: "Renewable energy = năng lượng tái tạo. Đáp án A đúng. Dịch: Hãy đảm bảo xe dùng xăng không chì và nhà bạn sử dụng nguồn năng lượng tái tạo."
},
{
  id: 14,
  question: "If he worked more slowly, he _______ so many mistakes.",
  options: [
    "won’t make",
    "wouldn’t make",
    "didn’t make",
    "wouldn’t have made"
  ],
  correct: 1,
  explanation: "Câu điều kiện loại 2: If + V2, would + V. Đáp án B đúng. Dịch: Nếu anh ấy làm việc chậm hơn, anh ấy sẽ không mắc nhiều lỗi như vậy."
},
{
  id: 15,
  question: "Neither my children nor my husband _______ my uncle recently.",
  options: ["have met", "was", "has met", "were"],
  correct: 2,
  explanation: "Neither…nor… chia theo chủ ngữ gần nhất (my husband – số ít). Đáp án C đúng. Dịch: Gần đây cả các con tôi lẫn chồng tôi đều chưa gặp chú tôi."
},
{
  id: 16,
  question: "A lot of people in the world have died _______ COVID-19 recently.",
  options: ["of", "with", "by", "for"],
  correct: 0,
  explanation: "Die of + bệnh. Đáp án A đúng. Dịch: Gần đây rất nhiều người trên thế giới đã chết vì COVID-19."
},
{
  id: 17,
  question: "I asked Phong if _______ far from his house to the cinema.",
  options: ["is it", "it is", "it was", "was it"],
  correct: 2,
  explanation: "Câu gián tiếp + lùi thì. Đáp án C đúng. Dịch: Tôi hỏi Phong liệu từ nhà cậu ấy đến rạp chiếu phim có xa không."
},
{
  id: 18,
  question: "I suggest _______ a short cut through the park. I’ll take much less time.",
  options: ["taking", "take", "took", "to take"],
  correct: 0,
  explanation: "Suggest + V-ing. Đáp án A đúng. Dịch: Tôi đề nghị đi đường tắt qua công viên, sẽ tiết kiệm nhiều thời gian."
},
{
  id: 19,
  question: "_______ bulbs should be used to save energy.",
  options: [
    "Energy- saving",
    "Energy- consuming",
    "Energy- wasting",
    "Energy- spending"
  ],
  correct: 0,
  explanation: "Energy-saving bulbs = bóng đèn tiết kiệm năng lượng. Đáp án A đúng. Dịch: Nên sử dụng bóng đèn tiết kiệm năng lượng để tiết kiệm điện."
},
{
  id: 20,
  question: "A decision _______ until the next meeting.",
  options: [
    "does not make",
    "will not make",
    "are not made",
    "will not be made"
  ],
  correct: 3,
  explanation: "Câu bị động ở tương lai đơn: will not be made. Đáp án D đúng. Dịch: Quyết định sẽ chưa được đưa ra cho đến cuộc họp tiếp theo."
},
{
  id: 21,
  passage: "Life expectancy in developed countries (21) _______ to increase. In 2004, men could expect to live about 3 years longer than they (22) _______  in 1990. Mortality from heart disease, stroke, and cancer has continued to decline in recent years. Of concern for all is the high prevalence of people with unhealthy lifestyles and behaviors, such as insufficient exercise, and overweight, which are (23) _______ factors for many diseases and disabilities including heart disease, diabetes, hypertension, and back pain. The number of overweight children and adults is increasing. (24) _______ to improve people’s health in the 21st cen¬tury will be influenced by important changes in demographics. Meanwhile, children and adults in families with income below or near the poverty level have worse health than those with higher income. Poverty (25) _______ poor health by its connection with inadequate nutrition, substandard housing, exposure to environmental hazards, unhealthy lifestyles, and decreased access to and use of health care services.",
  question: "Life expectancy in developed countries _______ to increase.",
  options: ["suggests", "continues", "admits", "considers"],
  correct: 1,
  explanation: "Cấu trúc: continue to + V = tiếp tục làm gì. → 'continues to increase' là cách dùng tự nhiên và đúng ngữ pháp.\nDịch: Tuổi thọ ở các nước phát triển tiếp tục tăng."
},
{
  id: 22,
  passage: "Life expectancy in developed countries (21) _______ to increase. In 2004, men could expect to live about 3 years longer than they (22) _______  in 1990. Mortality from heart disease, stroke, and cancer has continued to decline in recent years. Of concern for all is the high prevalence of people with unhealthy lifestyles and behaviors, such as insufficient exercise, and overweight, which are (23) _______ factors for many diseases and disabilities including heart disease, diabetes, hypertension, and back pain. The number of overweight children and adults is increasing. (24) _______ to improve people’s health in the 21st cen¬tury will be influenced by important changes in demographics. Meanwhile, children and adults in families with income below or near the poverty level have worse health than those with higher income. Poverty (25) _______ poor health by its connection with inadequate nutrition, substandard housing, exposure to environmental hazards, unhealthy lifestyles, and decreased access to and use of health care services.",
  question: "In 2004, men could expect to live about 3 years longer than they _______ in 1990.",
  options: ["did", "was", "had", "would"],
  correct: 0,
  explanation: "Cấu trúc so sánh rút gọn: longer than they did (live).\n'Did' thay thế cho động từ 'live' đã xuất hiện trước đó.\nDịch: Năm 2004, nam giới có thể kỳ vọng sống lâu hơn khoảng 3 năm so với năm 1990."
},
{
  id: 23,
  passage: "Life expectancy in developed countries (21) _______ to increase. In 2004, men could expect to live about 3 years longer than they (22) _______  in 1990. Mortality from heart disease, stroke, and cancer has continued to decline in recent years. Of concern for all is the high prevalence of people with unhealthy lifestyles and behaviors, such as insufficient exercise, and overweight, which are (23) _______ factors for many diseases and disabilities including heart disease, diabetes, hypertension, and back pain. The number of overweight children and adults is increasing. (24) _______ to improve people’s health in the 21st cen¬tury will be influenced by important changes in demographics. Meanwhile, children and adults in families with income below or near the poverty level have worse health than those with higher income. Poverty (25) _______ poor health by its connection with inadequate nutrition, substandard housing, exposure to environmental hazards, unhealthy lifestyles, and decreased access to and use of health care services.",
  question: "Unhealthy lifestyles and behaviors are _______ factors for many diseases.",
  options: ["safe", "convenient", "dangerous", "attractive"],
  correct: 2,
  explanation: "Ngữ nghĩa: lối sống không lành mạnh → gây hại.\nCụm đúng: dangerous factors = các yếu tố nguy hiểm.\nDịch: Lối sống và hành vi không lành mạnh là những yếu tố nguy hiểm đối với nhiều bệnh tật."
},
{
  id: 24,
  passage: "Life expectancy in developed countries (21) _______ to increase. In 2004, men could expect to live about 3 years longer than they (22) _______  in 1990. Mortality from heart disease, stroke, and cancer has continued to decline in recent years. Of concern for all is the high prevalence of people with unhealthy lifestyles and behaviors, such as insufficient exercise, and overweight, which are (23) _______ factors for many diseases and disabilities including heart disease, diabetes, hypertension, and back pain. The number of overweight children and adults is increasing. (24) _______ to improve people’s health in the 21st cen¬tury will be influenced by important changes in demographics. Meanwhile, children and adults in families with income below or near the poverty level have worse health than those with higher income. Poverty (25) _______ poor health by its connection with inadequate nutrition, substandard housing, exposure to environmental hazards, unhealthy lifestyles, and decreased access to and use of health care services.",
  question: "_______ to improve people’s health in the 21st century will be influenced by changes in demographics.",
  options: ["Impressions", "Situations", "Attentions", "Efforts"],
  correct: 3,
  explanation: "Cấu trúc đúng ngữ nghĩa: Efforts to improve = những nỗ lực nhằm cải thiện.\nCác đáp án khác không đi với 'to improve' trong ngữ cảnh này.\nDịch: Những nỗ lực nhằm cải thiện sức khỏe con người trong thế kỷ 21 sẽ bị ảnh hưởng bởi những thay đổi quan trọng về dân số."
},
{
  id: 25,
  passage: "Life expectancy in developed countries (21) _______ to increase. In 2004, men could expect to live about 3 years longer than they (22) _______  in 1990. Mortality from heart disease, stroke, and cancer has continued to decline in recent years. Of concern for all is the high prevalence of people with unhealthy lifestyles and behaviors, such as insufficient exercise, and overweight, which are (23) _______ factors for many diseases and disabilities including heart disease, diabetes, hypertension, and back pain. The number of overweight children and adults is increasing. (24) _______ to improve people’s health in the 21st cen¬tury will be influenced by important changes in demographics. Meanwhile, children and adults in families with income below or near the poverty level have worse health than those with higher income. Poverty (25) _______ poor health by its connection with inadequate nutrition, substandard housing, exposure to environmental hazards, unhealthy lifestyles, and decreased access to and use of health care services.",
  question: "Poverty _______ poor health by its connection with many negative factors.",
  options: ["provides", "supports", "takes", "causes"],
  correct: 3,
  explanation: "Động từ đúng ngữ nghĩa: cause = gây ra.\nPoverty causes poor health = nghèo đói gây ra sức khỏe kém.\nDịch: Nghèo đói gây ra sức khỏe kém thông qua mối liên hệ với dinh dưỡng kém, nhà ở không đạt chuẩn và khả năng tiếp cận dịch vụ y tế hạn chế."
},
{
  id: 26,
  passage: "In the beautiful highlands of Scotland, there is a lake called the Loch Ness. In these peaceful surroundings, a sea monster known as the “Loch Ness Monster” is said to be living in the lake. This creature, affectionately known as “Nessie”, has been reported to be seen by many people around the lake. According to these people, Nessie looked like a creature from the dinosaur age. It had a huge body, a small reptilian head and a long neck. Does the Loch Ness Monster really exist? No one can tell for sure. Ever since the sighting of the monster, many people have been keeping watch at the lake, hoping to catch a glimpse of Nessie. In 1934, a doctor, Colonel Robert Wilson, even managed to photograph the creature. The picture revealed a creature with a long neck sticking out of the water. Where could the Loch Ness Monster have come from? One explanation given is that the monster is a pre-historic creature which lived in the days of the dinosaurs. While other dinosaurs have died out and become extinct, this creature has somehow managed to adapt to its surroundings and live on!",
  question: "What is the passage about?",
  options: [
    "The Lock Ness Monster",
    "The Pre-historical Monster",
    "A sea creature",
    "Loch Ness Lake"
  ],
  correct: 0,
  explanation: "Ý chính toàn bài xoay quanh sinh vật được gọi là “Loch Ness Monster”.\nDịch: Đoạn văn nói về quái vật hồ Loch Ness."
},
{
  id: 27,
  passage: "In the beautiful highlands of Scotland, there is a lake called the Loch Ness. In these peaceful surroundings, a sea monster known as the “Loch Ness Monster” is said to be living in the lake. This creature, affectionately known as “Nessie”, has been reported to be seen by many people around the lake. According to these people, Nessie looked like a creature from the dinosaur age. It had a huge body, a small reptilian head and a long neck. Does the Loch Ness Monster really exist? No one can tell for sure. Ever since the sighting of the monster, many people have been keeping watch at the lake, hoping to catch a glimpse of Nessie. In 1934, a doctor, Colonel Robert Wilson, even managed to photograph the creature. The picture revealed a creature with a long neck sticking out of the water. Where could the Loch Ness Monster have come from? One explanation given is that the monster is a pre-historic creature which lived in the days of the dinosaurs. While other dinosaurs have died out and become extinct, this creature has somehow managed to adapt to its surroundings and live on!",
  question: "The sea monster’s name is",
  options: [
    "Lock Ness",
    "Nessie",
    "Monster",
    "Colonel"
  ],
  correct: 1,
  explanation: "Trong bài có câu: 'This creature, affectionately known as “Nessie”'.\nDịch: Con quái vật biển này được trìu mến gọi là Nessie."
},
{
  id: 28,
  passage: "In the beautiful highlands of Scotland, there is a lake called the Loch Ness. In these peaceful surroundings, a sea monster known as the “Loch Ness Monster” is said to be living in the lake. This creature, affectionately known as “Nessie”, has been reported to be seen by many people around the lake. According to these people, Nessie looked like a creature from the dinosaur age. It had a huge body, a small reptilian head and a long neck. Does the Loch Ness Monster really exist? No one can tell for sure. Ever since the sighting of the monster, many people have been keeping watch at the lake, hoping to catch a glimpse of Nessie. In 1934, a doctor, Colonel Robert Wilson, even managed to photograph the creature. The picture revealed a creature with a long neck sticking out of the water. Where could the Loch Ness Monster have come from? One explanation given is that the monster is a pre-historic creature which lived in the days of the dinosaurs. While other dinosaurs have died out and become extinct, this creature has somehow managed to adapt to its surroundings and live on!",
  question: "It can be inferred from the passage that",
  options: [
    "Nessie is reportedly a pre-historic creature",
    "Nessie is a dinosaur",
    "Nessie is very dangerous",
    "Nessie has died"
  ],
  correct: 0,
  explanation: "Câu suy luận dựa vào đoạn: 'one explanation given is that the monster is a pre-historic creature'.\nDịch: Có thể suy ra rằng Nessie được cho là một sinh vật thời tiền sử."
},
{
  id: 29,
  passage: "In the beautiful highlands of Scotland, there is a lake called the Loch Ness. In these peaceful surroundings, a sea monster known as the “Loch Ness Monster” is said to be living in the lake. This creature, affectionately known as “Nessie”, has been reported to be seen by many people around the lake. According to these people, Nessie looked like a creature from the dinosaur age. It had a huge body, a small reptilian head and a long neck. Does the Loch Ness Monster really exist? No one can tell for sure. Ever since the sighting of the monster, many people have been keeping watch at the lake, hoping to catch a glimpse of Nessie. In 1934, a doctor, Colonel Robert Wilson, even managed to photograph the creature. The picture revealed a creature with a long neck sticking out of the water. Where could the Loch Ness Monster have come from? One explanation given is that the monster is a pre-historic creature which lived in the days of the dinosaurs. While other dinosaurs have died out and become extinct, this creature has somehow managed to adapt to its surroundings and live on!",
  question: "Which statement is NOT true?",
  options: [
    "According to many people, the Loch Ness Monster had a small reptilian head.",
    "The Loch Ness Monster like other pre-historic creatures has died out and becomes extinct.",
    "It is explained that the Loch Ness Monster is a pre-historic creature which lived in the days of the dinosaurs.",
    "According to many people, the Loch Ness Monster had a huge body."
  ],
  correct: 1,
  explanation: "Bài nói sinh vật này KHÔNG bị tuyệt chủng mà vẫn sống sót.\nDịch: Câu sai là cho rằng quái vật hồ Loch Ness đã tuyệt chủng như các sinh vật tiền sử khác."
},
{
  id: 30,
  passage: "In the beautiful highlands of Scotland, there is a lake called the Loch Ness. In these peaceful surroundings, a sea monster known as the “Loch Ness Monster” is said to be living in the lake. This creature, affectionately known as “Nessie”, has been reported to be seen by many people around the lake. According to these people, Nessie looked like a creature from the dinosaur age. It had a huge body, a small reptilian head and a long neck. Does the Loch Ness Monster really exist? No one can tell for sure. Ever since the sighting of the monster, many people have been keeping watch at the lake, hoping to catch a glimpse of Nessie. In 1934, a doctor, Colonel Robert Wilson, even managed to photograph the creature. The picture revealed a creature with a long neck sticking out of the water. Where could the Loch Ness Monster have come from? One explanation given is that the monster is a pre-historic creature which lived in the days of the dinosaurs. While other dinosaurs have died out and become extinct, this creature has somehow managed to adapt to its surroundings and live on!",
  question: "The word “affectionately” mostly means",
  options: [
    "in an angry way",
    "attractively",
    "in a lovely way",
    "hatefuly"
  ],
  correct: 2,
  explanation: "Affectionately = with love / in a loving way.\nDịch: Từ 'affectionately' có nghĩa là một cách trìu mến, đáng yêu."
}
];
