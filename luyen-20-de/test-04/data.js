const questions = [
{
  id: 1,
  question: "It will not bring them money ______ will it solve their problems.",
  options: ["neither", "either", "also", "as well"],
  correct: 1,
  explanation: "Cấu trúc phủ định: not ... either.\nDịch: Điều đó sẽ không mang lại tiền cho họ, và cũng sẽ không giải quyết được vấn đề của họ."
},
{
  id: 2,
  question: "The old man still denies ______ the fire.",
  options: ["having started", "to start", "to starting", "having been started"],
  correct: 0,
  explanation: "Deny + V-ing; chủ động vì ông ta phủ nhận việc mình gây ra vụ cháy.\nDịch: Ông lão vẫn phủ nhận việc đã gây ra vụ cháy."
},
{
  id: 3,
  question: "John told me that he ______ his best in the exam ______.",
  options: [
    "would do/ the day before",
    "had done/ the following day",
    "will do/ tomorrow",
    "would do/ the following day"
  ],
  correct: 3,
  explanation: "Câu tường thuật: will → would; tomorrow → the following day.\nDịch: John nói với tôi rằng anh ấy sẽ cố gắng hết sức trong kỳ thi vào ngày hôm sau."
},
{
  id: 4,
  question: "The police charged him ______ at a wrong space.",
  options: ["park", "to park", "parking", "with parking"],
  correct: 3,
  explanation: "Cấu trúc: charge someone with + V-ing.\nDịch: Cảnh sát buộc tội anh ta vì đỗ xe sai chỗ."
},
{
  id: 5,
  question: "African people are used ______ barefoot so they get very rough skin.",
  options: ["to walk", "to walking", "walked", "walking"],
  correct: 1,
  explanation: "Be used to + V-ing (quen với việc gì).\nDịch: Người châu Phi quen đi chân trần nên da chân họ rất thô ráp."
},
{
  id: 6,
  question: "We will have our house ______. My cousins will come and help us ______ the work.",
  options: [
    "to repaint/ doing",
    "repainted/ do",
    "repainting/ to do",
    "repainted/ doing"
  ],
  correct: 3,
  explanation: "Cấu trúc nhờ vả: have + O + V3; help + O + V-ing.\nDịch: Chúng tôi sẽ cho sơn lại nhà. Các anh chị họ sẽ đến giúp chúng tôi làm công việc đó."
},
{
  id: 7,
  question: "There are",
  options: [
    "twice as much computers in our office as there was",
    "as twice many computers in our office as they were",
    "twice as many computers in our office than there used to be",
    "twice as many computers in our office as there used to be"
  ],
  correct: 3,
  explanation: "Cấu trúc so sánh: twice as many + N số nhiều + as.\nDịch: Số lượng máy tính trong văn phòng của chúng tôi gấp đôi so với trước đây."
},
{
  id: 8,
  question: "______ a person wears eyeglasses, ______ on them he tends to be.",
  options: [
    "Longer/ more dependent",
    "The longest/ the most dependent",
    "The longer/ more dependent",
    "The longer/ the more dependent"
  ],
  correct: 3,
  explanation: "Cấu trúc song song: The + comparative, the + comparative.\nDịch: Một người càng đeo kính lâu thì càng phụ thuộc vào kính nhiều hơn."
},
{
  id: 9,
  question: "It was in that house ______ we spent our childhood.",
  options: ["where", "that", "when", "in which"],
  correct: 1,
  explanation: "Câu nhấn mạnh (cleft sentence): It was ... that ...\nDịch: Chính trong ngôi nhà đó chúng tôi đã trải qua tuổi thơ."
},
{
  id: 10,
  question: "At last they were able to tow up the man and his car ______ crashed down the hill.",
  options: ["whose", "which", "who", "that"],
  correct: 1,
  explanation: "Mệnh đề quan hệ chỉ vật (his car) → which.\nDịch: Cuối cùng họ đã có thể kéo người đàn ông và chiếc xe của ông ấy, chiếc xe đã lao xuống đồi."
},
{
  id: 11,
  question: "______ you are over 18, you can join the army.",
  options: ["As long as", "Due to", "Because of", "On account of"],
  correct: 0,
  explanation: "As long as = miễn là (chỉ điều kiện).\nDịch: Miễn là bạn trên 18 tuổi, bạn có thể gia nhập quân đội."
},
{
  id: 12,
  question: "______, he passed with the highest marks.",
  options: [
    "Even although the difficult course",
    "Despite the course was difficult",
    "In spite of the course was difficult",
    "Although the course was difficult"
  ],
  correct: 3,
  explanation: "Although + S + V; despite/in spite of không đi với mệnh đề.\nDịch: Mặc dù khóa học khó, anh ấy vẫn đạt điểm cao nhất."
},
{
  id: 13,
  question: "He drank ______ he had to suffer from cancer.",
  options: [
    "so much that",
    "so many that",
    "such much that",
    "such many that"
  ],
  correct: 0,
  explanation: "So much + uncountable noun + that.\nDịch: Anh ấy uống quá nhiều đến mức phải mắc bệnh ung thư."
},
{
  id: 14,
  question: "The fire was at last under control, but not before a lot of damage ______.",
  options: [
    "had been caused",
    "was causing",
    "had being caused",
    "has been caused"
  ],
  correct: 0,
  explanation: "Quá khứ hoàn thành bị động để chỉ hành động xảy ra trước.\nDịch: Cuối cùng đám cháy cũng được kiểm soát, nhưng không phải trước khi rất nhiều thiệt hại đã xảy ra."
},
{
  id: 15,
  question: "She said that she was going to ______.",
  options: [
    "pull out her teeth",
    "get pulled out her teeth",
    "have pulled out her teeth",
    "have her teeth pulled out"
  ],
  correct: 3,
  explanation: "Cấu trúc nhờ vả: have + O + V3.\nDịch: Cô ấy nói rằng cô ấy sẽ đi nhổ răng."
},
{
  id: 16,
  question: "This criminal ______ living in France.",
  options: [
    "is thought he is",
    "it’s thought that he is",
    "is thought to be",
    "it’s thought is"
  ],
  correct: 2,
  explanation: "Cấu trúc bị động: be thought to be.\nDịch: Tên tội phạm này được cho là đang sống ở Pháp."
},
{
  id: 17,
  question: "Don’t blame Carl ______ being late. It wasn’t his fault.",
  options: ["on", "for", "in", "with"],
  correct: 1,
  explanation: "Cấu trúc: blame someone for + V-ing.\nDịch: Đừng trách Carl vì đến muộn. Đó không phải lỗi của anh ấy."
},
{
  id: 18,
  question: "I only glanced ______ his face, so I can’t really remember what he looks like.",
  options: ["to", "on", "at", "by"],
  correct: 2,
  explanation: "Cụm từ cố định: glance at.\nDịch: Tôi chỉ liếc nhìn khuôn mặt anh ta nên không thực sự nhớ anh ta trông như thế nào."
},
{
  id: 19,
  question: "That ______ the end of the lesson already! We’ve just only started, haven’t we?",
  options: [
    "mustn’t be",
    "mustn’t have been",
    "can’t be",
    "didn’t have to be"
  ],
  correct: 2,
  explanation: "Can’t be = không thể nào (suy đoán phủ định mạnh).\nDịch: Không thể nào đó đã là cuối buổi học được! Chúng ta mới chỉ bắt đầu thôi mà, đúng không?"
},
{
  id: 20,
  question: "Do you think they will find a/an ______ for all diseases one day?",
  options: ["benefit", "cure", "operation", "balance"],
  correct: 1,
  explanation: "Cure = phương pháp chữa khỏi bệnh.\nDịch: Bạn có nghĩ rằng một ngày nào đó họ sẽ tìm ra cách chữa trị cho tất cả các bệnh không?"
},
{
  id: 21,
  passage: "Agriculture is the world’s most important industry. It provide us with (21) _______ all our food. It also (22) _______ materials for two other basic human needs - clothing and shelter. (23) _______, agriculture provides materials (24) _______ in many industrial products, such as paints and medicines. About half the world’s workers are employed in agriculture - far more than in (25) _______ industry. Agriculture is one of the world’s oldest industries. It began about 10,000 years ago in the Middle East. (26) _______ that time, certain Middle Eastern tribes had discovered how to grow plants from seeds and how to raise animals in captivity. Having mastered these skills, they could begin to practise agriculture. Before the development of agriculture, people got all their food by gathering wild plants, hunting and fishing. They had to search for food continually (27) _______ left little time for other activities, but as agriculture developed and farm (28) _______ increased, fewer people were needed to produce food. The nonfarmers could then develop the arts, crafts, trades and other activities of civilized life. Agriculture, (29) _______, not only greatly (30) _______ the food supply but also made civilization possible.",
  question: "It provide us with _______ all our food.",
  options: ["almost", "most", "the most", "the almost"],
  correct: 0,
  explanation: "Cụm đúng: almost all + noun.\nDịch: Nông nghiệp cung cấp cho chúng ta gần như toàn bộ lương thực."
},
{
  id: 22,
  passage: "Agriculture is the world’s most important industry. It provide us with (21) _______ all our food. It also (22) _______ materials for two other basic human needs - clothing and shelter. (23) _______, agriculture provides materials (24) _______ in many industrial products, such as paints and medicines. About half the world’s workers are employed in agriculture - far more than in (25) _______ industry. Agriculture is one of the world’s oldest industries. It began about 10,000 years ago in the Middle East. (26) _______ that time, certain Middle Eastern tribes had discovered how to grow plants from seeds and how to raise animals in captivity. Having mastered these skills, they could begin to practise agriculture. Before the development of agriculture, people got all their food by gathering wild plants, hunting and fishing. They had to search for food continually (27) _______ left little time for other activities, but as agriculture developed and farm (28) _______ increased, fewer people were needed to produce food. The nonfarmers could then develop the arts, crafts, trades and other activities of civilized life. Agriculture, (29) _______, not only greatly (30) _______ the food supply but also made civilization possible.",
  question: "It also _______ materials for two other basic human needs - clothing and shelter.",
  options: ["gives", "supplies", "brings", "takes"],
  correct: 1,
  explanation: "Cụm từ chuẩn: supply materials for.\nDịch: Nó cũng cung cấp nguyên liệu cho hai nhu cầu cơ bản khác của con người là quần áo và nơi ở."
},
{
  id: 23,
  passage: "Agriculture is the world’s most important industry. It provide us with (21) _______ all our food. It also (22) _______ materials for two other basic human needs - clothing and shelter. (23) _______, agriculture provides materials (24) _______ in many industrial products, such as paints and medicines. About half the world’s workers are employed in agriculture - far more than in (25) _______ industry. Agriculture is one of the world’s oldest industries. It began about 10,000 years ago in the Middle East. (26) _______ that time, certain Middle Eastern tribes had discovered how to grow plants from seeds and how to raise animals in captivity. Having mastered these skills, they could begin to practise agriculture. Before the development of agriculture, people got all their food by gathering wild plants, hunting and fishing. They had to search for food continually (27) _______ left little time for other activities, but as agriculture developed and farm (28) _______ increased, fewer people were needed to produce food. The nonfarmers could then develop the arts, crafts, trades and other activities of civilized life. Agriculture, (29) _______, not only greatly (30) _______ the food supply but also made civilization possible.",
  question: "_______, agriculture provides materials used in many industrial products.",
  options: ["However", "Yet", "In addition", "Although"],
  correct: 2,
  explanation: "In addition dùng để bổ sung ý.\nDịch: Ngoài ra, nông nghiệp còn cung cấp nguyên liệu được sử dụng trong nhiều sản phẩm công nghiệp."
},
{
  id: 24,
  passage: "Agriculture is the world’s most important industry. It provide us with (21) _______ all our food. It also (22) _______ materials for two other basic human needs - clothing and shelter. (23) _______, agriculture provides materials (24) _______ in many industrial products, such as paints and medicines. About half the world’s workers are employed in agriculture - far more than in (25) _______ industry. Agriculture is one of the world’s oldest industries. It began about 10,000 years ago in the Middle East. (26) _______ that time, certain Middle Eastern tribes had discovered how to grow plants from seeds and how to raise animals in captivity. Having mastered these skills, they could begin to practise agriculture. Before the development of agriculture, people got all their food by gathering wild plants, hunting and fishing. They had to search for food continually (27) _______ left little time for other activities, but as agriculture developed and farm (28) _______ increased, fewer people were needed to produce food. The nonfarmers could then develop the arts, crafts, trades and other activities of civilized life. Agriculture, (29) _______, not only greatly (30) _______ the food supply but also made civilization possible.",
  question: "Agriculture provides materials _______ in many industrial products.",
  options: ["made", "used", "produced", "done"],
  correct: 1,
  explanation: "Cụm đúng: materials used in.\nDịch: Nông nghiệp cung cấp nguyên liệu được sử dụng trong nhiều sản phẩm công nghiệp."
},
{
  id: 25,
  passage: "Agriculture is the world’s most important industry. It provide us with (21) _______ all our food. It also (22) _______ materials for two other basic human needs - clothing and shelter. (23) _______, agriculture provides materials (24) _______ in many industrial products, such as paints and medicines. About half the world’s workers are employed in agriculture - far more than in (25) _______ industry. Agriculture is one of the world’s oldest industries. It began about 10,000 years ago in the Middle East. (26) _______ that time, certain Middle Eastern tribes had discovered how to grow plants from seeds and how to raise animals in captivity. Having mastered these skills, they could begin to practise agriculture. Before the development of agriculture, people got all their food by gathering wild plants, hunting and fishing. They had to search for food continually (27) _______ left little time for other activities, but as agriculture developed and farm (28) _______ increased, fewer people were needed to produce food. The nonfarmers could then develop the arts, crafts, trades and other activities of civilized life. Agriculture, (29) _______, not only greatly (30) _______ the food supply but also made civilization possible.",
  question: "Far more than in _______ industry.",
  options: ["any other", "others", "some", "the other"],
  correct: 0,
  explanation: "So sánh hơn nhất: far more than in any other + noun.\nDịch: Nhiều hơn rất nhiều so với bất kỳ ngành công nghiệp nào khác."
},
{
  id: 26,
  passage: "Agriculture is the world’s most important industry. It provide us with (21) _______ all our food. It also (22) _______ materials for two other basic human needs - clothing and shelter. (23) _______, agriculture provides materials (24) _______ in many industrial products, such as paints and medicines. About half the world’s workers are employed in agriculture - far more than in (25) _______ industry. Agriculture is one of the world’s oldest industries. It began about 10,000 years ago in the Middle East. (26) _______ that time, certain Middle Eastern tribes had discovered how to grow plants from seeds and how to raise animals in captivity. Having mastered these skills, they could begin to practise agriculture. Before the development of agriculture, people got all their food by gathering wild plants, hunting and fishing. They had to search for food continually (27) _______ left little time for other activities, but as agriculture developed and farm (28) _______ increased, fewer people were needed to produce food. The nonfarmers could then develop the arts, crafts, trades and other activities of civilized life. Agriculture, (29) _______, not only greatly (30) _______ the food supply but also made civilization possible.",
  question: "_______ that time, certain Middle Eastern tribes had discovered how to grow plants from seeds.",
  options: ["On", "Under", "In", "By"],
  correct: 2,
  explanation: "Giới từ thời gian: in + period of time.\nDịch: Vào thời điểm đó, một số bộ lạc Trung Đông đã phát hiện ra cách trồng cây từ hạt."
},
{
  id: 27,
  passage: "Agriculture is the world’s most important industry. It provide us with (21) _______ all our food. It also (22) _______ materials for two other basic human needs - clothing and shelter. (23) _______, agriculture provides materials (24) _______ in many industrial products, such as paints and medicines. About half the world’s workers are employed in agriculture - far more than in (25) _______ industry. Agriculture is one of the world’s oldest industries. It began about 10,000 years ago in the Middle East. (26) _______ that time, certain Middle Eastern tribes had discovered how to grow plants from seeds and how to raise animals in captivity. Having mastered these skills, they could begin to practise agriculture. Before the development of agriculture, people got all their food by gathering wild plants, hunting and fishing. They had to search for food continually (27) _______ left little time for other activities, but as agriculture developed and farm (28) _______ increased, fewer people were needed to produce food. The nonfarmers could then develop the arts, crafts, trades and other activities of civilized life. Agriculture, (29) _______, not only greatly (30) _______ the food supply but also made civilization possible.",
  question: "They had to search for food continually _______ left little time for other activities.",
  options: ["who", "which", "whom", "where"],
  correct: 1,
  explanation: "Which thay cho cả mệnh đề phía trước.\nDịch: Họ phải liên tục tìm kiếm thức ăn, điều này khiến họ có rất ít thời gian cho các hoạt động khác."
},
{
  id: 28,
  passage: "Agriculture is the world’s most important industry. It provide us with (21) _______ all our food. It also (22) _______ materials for two other basic human needs - clothing and shelter. (23) _______, agriculture provides materials (24) _______ in many industrial products, such as paints and medicines. About half the world’s workers are employed in agriculture - far more than in (25) _______ industry. Agriculture is one of the world’s oldest industries. It began about 10,000 years ago in the Middle East. (26) _______ that time, certain Middle Eastern tribes had discovered how to grow plants from seeds and how to raise animals in captivity. Having mastered these skills, they could begin to practise agriculture. Before the development of agriculture, people got all their food by gathering wild plants, hunting and fishing. They had to search for food continually (27) _______ left little time for other activities, but as agriculture developed and farm (28) _______ increased, fewer people were needed to produce food. The nonfarmers could then develop the arts, crafts, trades and other activities of civilized life. Agriculture, (29) _______, not only greatly (30) _______ the food supply but also made civilization possible.",
  question: "As agriculture developed and farm _______ increased, fewer people were needed to produce food.",
  options: ["land", "animals", "output", "houses"],
  correct: 2,
  explanation: "Farm output = sản lượng nông nghiệp.\nDịch: Khi nông nghiệp phát triển và sản lượng nông nghiệp tăng lên, cần ít người hơn để sản xuất lương thực."
},
{
  id: 29,
  passage: "Agriculture is the world’s most important industry. It provide us with (21) _______ all our food. It also (22) _______ materials for two other basic human needs - clothing and shelter. (23) _______, agriculture provides materials (24) _______ in many industrial products, such as paints and medicines. About half the world’s workers are employed in agriculture - far more than in (25) _______ industry. Agriculture is one of the world’s oldest industries. It began about 10,000 years ago in the Middle East. (26) _______ that time, certain Middle Eastern tribes had discovered how to grow plants from seeds and how to raise animals in captivity. Having mastered these skills, they could begin to practise agriculture. Before the development of agriculture, people got all their food by gathering wild plants, hunting and fishing. They had to search for food continually (27) _______ left little time for other activities, but as agriculture developed and farm (28) _______ increased, fewer people were needed to produce food. The nonfarmers could then develop the arts, crafts, trades and other activities of civilized life. Agriculture, (29) _______, not only greatly (30) _______ the food supply but also made civilization possible.",
  question: "Agriculture, _______, not only greatly _______ the food supply but also made civilization possible.",
  options: ["so", "also", "still", "therefore"],
  correct: 3,
  explanation: "Therefore dùng để chỉ kết quả.\nDịch: Vì vậy, nông nghiệp không chỉ làm tăng mạnh nguồn cung lương thực mà còn khiến nền văn minh trở nên khả thi."
},
{
  id: 30,
  passage: "Agriculture is the world’s most important industry. It provide us with (21) _______ all our food. It also (22) _______ materials for two other basic human needs - clothing and shelter. (23) _______, agriculture provides materials (24) _______ in many industrial products, such as paints and medicines. About half the world’s workers are employed in agriculture - far more than in (25) _______ industry. Agriculture is one of the world’s oldest industries. It began about 10,000 years ago in the Middle East. (26) _______ that time, certain Middle Eastern tribes had discovered how to grow plants from seeds and how to raise animals in captivity. Having mastered these skills, they could begin to practise agriculture. Before the development of agriculture, people got all their food by gathering wild plants, hunting and fishing. They had to search for food continually (27) _______ left little time for other activities, but as agriculture developed and farm (28) _______ increased, fewer people were needed to produce food. The nonfarmers could then develop the arts, crafts, trades and other activities of civilized life. Agriculture, (29) _______, not only greatly (30) _______ the food supply but also made civilization possible.",
  question: "Agriculture not only greatly _______ the food supply but also made civilization possible.",
  options: ["affected", "adds", "provided", "influenced"],
  correct: 2,
  explanation: "Provided phù hợp thì quá khứ và ngữ nghĩa.\nDịch: Nông nghiệp không chỉ cung cấp dồi dào lương thực mà còn làm cho nền văn minh trở nên khả thi."
},
  {
    id: 31,
    passage: "Jacques-Yves Cousteau was an explorer, ecologist, filmmaker, inventor and conservationist. He was a man, who spent nearly his whole life underwater exploring the hidden depths of the ocean and who did more to educate the world about the mysteries of the deep sea than any other scientist before or since. He was born in June, 1910 in the village of Saint-André-de-Cubzac, in south western France. Jacques was a sickly boy and spent much of his time in bed, reading books and dreaming about a life at sea. In 1920, Jacques’ family moved to New York and he was encouraged to start swimming to build up his strength. This was the beginning of his fascination with water and the more he learnt through his own experiences, the more passionate he became about “looking through nature’s keyhole”. Nevertheless, his career in underwater exploration came about by accident. After entering France’s naval academy and travelling around the world, he was involved in an almost fatal car accident that left him seriously injured with two broken arms. He began swimming in the Mediterranean Sea to strengthen his arm muscles as part of his recovery process and rediscovered his love of the ocean. Cousteau developed a pair of underwater breathing apparatus to allow him to stay underwater for long periods of time. His experiments led to the development of the first Aqua-Lung which was a great commercial success. During World War II, he worked for the French Resistance and experimented with underwater photographic equipment. He helped to get rid of German mines and was awarded the Legion D'Honneur and the Croix de Guerre medals for his bravery. In 1942, he filmed his first underwater film Sixty Feet Down. It was 18 minutes long and was entered in the Cannes Film Festival.",
    question: "What is the writer trying to do in the text?",
    options: [
      "teach readers how to make films",
      "explain how Jacques-Yves Cousteau has made a lot of money",
      "introduce readers to the filmmaker Jacques-Yves Cousteau",
      "describe particular films directed by Jacques Cousteau"
    ],
    correct: 2,
    explanation: "Toàn bài mang tính giới thiệu tiểu sử và sự nghiệp của Jacques-Yves Cousteau.\nDịch: Tác giả đang cố gắng giới thiệu đến người đọc nhà làm phim Jacques-Yves Cousteau."
  },
  {
    id: 32,
passage: "Jacques-Yves Cousteau was an explorer, ecologist, filmmaker, inventor and conservationist. He was a man, who spent nearly his whole life underwater exploring the hidden depths of the ocean and who did more to educate the world about the mysteries of the deep sea than any other scientist before or since. He was born in June, 1910 in the village of Saint-André-de-Cubzac, in south western France. Jacques was a sickly boy and spent much of his time in bed, reading books and dreaming about a life at sea. In 1920, Jacques’ family moved to New York and he was encouraged to start swimming to build up his strength. This was the beginning of his fascination with water and the more he learnt through his own experiences, the more passionate he became about “looking through nature’s keyhole”. Nevertheless, his career in underwater exploration came about by accident. After entering France’s naval academy and travelling around the world, he was involved in an almost fatal car accident that left him seriously injured with two broken arms. He began swimming in the Mediterranean Sea to strengthen his arm muscles as part of his recovery process and rediscovered his love of the ocean. Cousteau developed a pair of underwater breathing apparatus to allow him to stay underwater for long periods of time. His experiments led to the development of the first Aqua-Lung which was a great commercial success. During World War II, he worked for the French Resistance and experimented with underwater photographic equipment. He helped to get rid of German mines and was awarded the Legion D'Honneur and the Croix de Guerre medals for his bravery. In 1942, he filmed his first underwater film Sixty Feet Down. It was 18 minutes long and was entered in the Cannes Film Festival.",
    question: "Being a child, Cousteau had",
    options: [
      "strong will",
      "bright mind",
      "heart attacks",
      "delicate health"
    ],
    correct: 3,
    explanation: "Chi tiết then chốt: \"Jacques was a sickly boy\".\nDịch: Khi còn nhỏ, Cousteau có sức khỏe yếu."
  },
  {
    id: 33,
passage: "Jacques-Yves Cousteau was an explorer, ecologist, filmmaker, inventor and conservationist. He was a man, who spent nearly his whole life underwater exploring the hidden depths of the ocean and who did more to educate the world about the mysteries of the deep sea than any other scientist before or since. He was born in June, 1910 in the village of Saint-André-de-Cubzac, in south western France. Jacques was a sickly boy and spent much of his time in bed, reading books and dreaming about a life at sea. In 1920, Jacques’ family moved to New York and he was encouraged to start swimming to build up his strength. This was the beginning of his fascination with water and the more he learnt through his own experiences, the more passionate he became about “looking through nature’s keyhole”. Nevertheless, his career in underwater exploration came about by accident. After entering France’s naval academy and travelling around the world, he was involved in an almost fatal car accident that left him seriously injured with two broken arms. He began swimming in the Mediterranean Sea to strengthen his arm muscles as part of his recovery process and rediscovered his love of the ocean. Cousteau developed a pair of underwater breathing apparatus to allow him to stay underwater for long periods of time. His experiments led to the development of the first Aqua-Lung which was a great commercial success. During World War II, he worked for the French Resistance and experimented with underwater photographic equipment. He helped to get rid of German mines and was awarded the Legion D'Honneur and the Croix de Guerre medals for his bravery. In 1942, he filmed his first underwater film Sixty Feet Down. It was 18 minutes long and was entered in the Cannes Film Festival.",
    question: "In a car accident he",
    options: [
      "burnt both of his arm",
      "broke his extremities",
      "injured his leg",
      "hurt his eyes"
    ],
    correct: 1,
    explanation: "Chi tiết: \"two broken arms\".\nDịch: Trong một tai nạn xe hơi, ông bị gãy tay."
  },
  {
    id: 34,
passage: "Jacques-Yves Cousteau was an explorer, ecologist, filmmaker, inventor and conservationist. He was a man, who spent nearly his whole life underwater exploring the hidden depths of the ocean and who did more to educate the world about the mysteries of the deep sea than any other scientist before or since. He was born in June, 1910 in the village of Saint-André-de-Cubzac, in south western France. Jacques was a sickly boy and spent much of his time in bed, reading books and dreaming about a life at sea. In 1920, Jacques’ family moved to New York and he was encouraged to start swimming to build up his strength. This was the beginning of his fascination with water and the more he learnt through his own experiences, the more passionate he became about “looking through nature’s keyhole”. Nevertheless, his career in underwater exploration came about by accident. After entering France’s naval academy and travelling around the world, he was involved in an almost fatal car accident that left him seriously injured with two broken arms. He began swimming in the Mediterranean Sea to strengthen his arm muscles as part of his recovery process and rediscovered his love of the ocean. Cousteau developed a pair of underwater breathing apparatus to allow him to stay underwater for long periods of time. His experiments led to the development of the first Aqua-Lung which was a great commercial success. During World War II, he worked for the French Resistance and experimented with underwater photographic equipment. He helped to get rid of German mines and was awarded the Legion D'Honneur and the Croix de Guerre medals for his bravery. In 1942, he filmed his first underwater film Sixty Feet Down. It was 18 minutes long and was entered in the Cannes Film Festival.",
    question: "Cousteau developed underwater breathing equipment",
    options: [
      "to extend his underwater investigations",
      "to gain fame",
      "to achieve commercial success",
      "having no certain goals"
    ],
    correct: 0,
    explanation: "Mục đích: \"to allow him to stay underwater for long periods of time\"."
  },
  {
    id: 35,
passage: "Jacques-Yves Cousteau was an explorer, ecologist, filmmaker, inventor and conservationist. He was a man, who spent nearly his whole life underwater exploring the hidden depths of the ocean and who did more to educate the world about the mysteries of the deep sea than any other scientist before or since. He was born in June, 1910 in the village of Saint-André-de-Cubzac, in south western France. Jacques was a sickly boy and spent much of his time in bed, reading books and dreaming about a life at sea. In 1920, Jacques’ family moved to New York and he was encouraged to start swimming to build up his strength. This was the beginning of his fascination with water and the more he learnt through his own experiences, the more passionate he became about “looking through nature’s keyhole”. Nevertheless, his career in underwater exploration came about by accident. After entering France’s naval academy and travelling around the world, he was involved in an almost fatal car accident that left him seriously injured with two broken arms. He began swimming in the Mediterranean Sea to strengthen his arm muscles as part of his recovery process and rediscovered his love of the ocean. Cousteau developed a pair of underwater breathing apparatus to allow him to stay underwater for long periods of time. His experiments led to the development of the first Aqua-Lung which was a great commercial success. During World War II, he worked for the French Resistance and experimented with underwater photographic equipment. He helped to get rid of German mines and was awarded the Legion D'Honneur and the Croix de Guerre medals for his bravery. In 1942, he filmed his first underwater film Sixty Feet Down. It was 18 minutes long and was entered in the Cannes Film Festival.",
    question: "During the World War II Cousteau collaborated with",
    options: [
      "Polish resistance movement",
      "German antifascists",
      "American troops",
      "underground resistance fighters in France"
    ],
    correct: 3,
    explanation: "Chi tiết: \"he worked for the French Resistance\"."
  }
];


