const STORAGE_KEY = 'vocabflow_v4';
const DAY = 86400000;

const seed = {
  settings: { newPerDay: 10 },
  books: [
  {
    "id": "b1",
    "title": "IELTS Reading 538",
    "category": "IELTS",
    "wordIds": [
      "w1",
      "w2",
      "w3",
      "w4",
      "w5",
      "w6",
      "w7",
      "w8",
      "w9",
      "w10",
      "w11",
      "w12",
      "w13",
      "w14",
      "w15",
      "w16",
      "w17",
      "w18",
      "w19",
      "w20",
      "w21",
      "w22",
      "w23",
      "w24",
      "w25",
      "w26",
      "w27",
      "w28",
      "w29",
      "w30",
      "w31",
      "w32",
      "w33",
      "w34",
      "w35",
      "w36",
      "w37",
      "w38",
      "w39",
      "w40",
      "w41",
      "w42",
      "w43",
      "w44",
      "w45",
      "w46",
      "w47",
      "w48",
      "w49",
      "w50",
      "w51",
      "w52",
      "w53",
      "w54"
    ],
    "targetCount": 538
  },
  {
    "id": "b2",
    "title": "IELTS Listening Corpus",
    "category": "IELTS",
    "wordIds": [],
    "corpusMode": true,
    "targetCount": 4123
  },
  {
    "id": "b3",
    "title": "Academic Vocabulary",
    "category": "General",
    "wordIds": [
      "w5",
      "w25",
      "w27",
      "w58"
    ]
  }
],
  words: {
  "w1": {
    "word": "resemble",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "напоминать; быть похожим на",
    "definition": "Быть похожим на кого-либо или что-либо.",
    "example": "The new building resembles the old library.",
    "exampleRu": "Новое здание напоминает старую библиотеку.",
    "synonyms": "be similar to; look like"
  },
  "w2": {
    "word": "recognize",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "узнавать; признавать",
    "definition": "Определить знакомого человека или предмет; также признать факт или значение чего-либо.",
    "example": "She recognized the importance of regular practice.",
    "exampleRu": "Она признала важность регулярной практики.",
    "synonyms": "identify; acknowledge; realize"
  },
  "w3": {
    "word": "adjust",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "регулировать; приспосабливать",
    "definition": "Немного изменить что-либо, чтобы оно лучше подходило к ситуации.",
    "example": "You may need to adjust your study plan.",
    "exampleRu": "Возможно, тебе нужно скорректировать план занятий.",
    "synonyms": "modify; alter; adapt"
  },
  "w4": {
    "word": "approach",
    "phonetic": "",
    "pos": "noun / verb",
    "level": "",
    "translation": "подход; приближаться",
    "definition": "Способ решения задачи; также движение ближе к чему-либо.",
    "example": "This approach can improve reading speed.",
    "exampleRu": "Этот подход может повысить скорость чтения.",
    "synonyms": "method; way"
  },
  "w5": {
    "word": "fundamental",
    "phonetic": "",
    "pos": "adjective",
    "level": "",
    "translation": "основной; фундаментальный",
    "definition": "Очень важный и лежащий в основе чего-либо.",
    "example": "Vocabulary is fundamental to reading comprehension.",
    "exampleRu": "Словарный запас имеет основополагающее значение для понимания прочитанного.",
    "synonyms": "basic; essential"
  },
  "w6": {
    "word": "rely on",
    "phonetic": "",
    "pos": "phrasal verb",
    "level": "",
    "translation": "полагаться на",
    "definition": "Зависеть от кого-либо или чего-либо и доверять этому.",
    "example": "Many students rely on context to understand new words.",
    "exampleRu": "Многие учащиеся полагаются на контекст, чтобы понять новые слова.",
    "synonyms": "depend on"
  },
  "w7": {
    "word": "domestic",
    "phonetic": "",
    "pos": "adjective",
    "level": "",
    "translation": "внутренний; домашний",
    "definition": "Связанный с домом или с делами внутри одной страны.",
    "example": "Domestic travel increased during the summer.",
    "exampleRu": "Внутренние поездки увеличились летом.",
    "synonyms": "local; national; home"
  },
  "w8": {
    "word": "measure",
    "phonetic": "",
    "pos": "verb / noun",
    "level": "",
    "translation": "измерять; мера",
    "definition": "Определять размер, количество или степень чего-либо.",
    "example": "The study measured changes in air quality.",
    "exampleRu": "Исследование измерило изменения качества воздуха.",
    "synonyms": "assess; calculate; evaluate"
  },
  "w9": {
    "word": "trait",
    "phonetic": "",
    "pos": "noun",
    "level": "",
    "translation": "черта; характеристика",
    "definition": "Характерное качество человека, животного или предмета.",
    "example": "Patience is a useful trait for language learners.",
    "exampleRu": "Терпение — полезная черта для изучающих язык.",
    "synonyms": "characteristic; feature"
  },
  "w10": {
    "word": "coin",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "создавать новый термин",
    "definition": "Придумать и впервые использовать новое слово или выражение.",
    "example": "The term was coined in the twentieth century.",
    "exampleRu": "Этот термин был введён в употребление в двадцатом веке.",
    "synonyms": "invent; create a term"
  },
  "w11": {
    "word": "artificial",
    "phonetic": "",
    "pos": "adjective",
    "level": "",
    "translation": "искусственный",
    "definition": "Созданный человеком, а не возникший естественным образом.",
    "example": "The experiment used artificial light.",
    "exampleRu": "В эксперименте использовался искусственный свет.",
    "synonyms": "synthetic; man-made"
  },
  "w12": {
    "word": "prompt",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "побуждать; вызывать",
    "definition": "Стать причиной действия, мысли или реакции.",
    "example": "The discovery prompted further research.",
    "exampleRu": "Открытие побудило к дальнейшим исследованиям.",
    "synonyms": "trigger; initiate"
  },
  "w13": {
    "word": "exchange",
    "phonetic": "",
    "pos": "noun / verb",
    "level": "",
    "translation": "обмен; обмениваться",
    "definition": "Давать что-либо и получать что-либо взамен.",
    "example": "Students exchanged ideas after the lecture.",
    "exampleRu": "Студенты обменялись идеями после лекции.",
    "synonyms": "share; swap"
  },
  "w14": {
    "word": "underlie",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "лежать в основе",
    "definition": "Быть основной причиной или принципом чего-либо.",
    "example": "Several factors underlie the problem.",
    "exampleRu": "В основе проблемы лежат несколько факторов.",
    "synonyms": "form the basis of"
  },
  "w15": {
    "word": "ignore",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "игнорировать",
    "definition": "Не обращать внимания на кого-либо или что-либо.",
    "example": "The report should not ignore environmental risks.",
    "exampleRu": "В отчёте не следует игнорировать экологические риски.",
    "synonyms": "neglect; overlook"
  },
  "w16": {
    "word": "fertiliser",
    "phonetic": "",
    "pos": "noun",
    "level": "",
    "translation": "удобрение",
    "definition": "Вещество, добавляемое в почву для улучшения роста растений.",
    "example": "Farmers reduced their use of chemical fertiliser.",
    "exampleRu": "Фермеры сократили использование химических удобрений.",
    "synonyms": "plant nutrient"
  },
  "w17": {
    "word": "diversity",
    "phonetic": "",
    "pos": "noun",
    "level": "",
    "translation": "разнообразие",
    "definition": "Наличие множества разных видов, форм или вариантов.",
    "example": "The region has remarkable biological diversity.",
    "exampleRu": "Регион отличается значительным биологическим разнообразием.",
    "synonyms": "variety"
  },
  "w18": {
    "word": "detect",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "обнаруживать",
    "definition": "Замечать или находить то, что трудно увидеть или определить.",
    "example": "The device can detect small changes in temperature.",
    "exampleRu": "Устройство может обнаруживать небольшие изменения температуры.",
    "synonyms": "discover; identify"
  },
  "w19": {
    "word": "isolate",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "изолировать; отделять",
    "definition": "Отделить кого-либо или что-либо от других.",
    "example": "Researchers isolated the main cause of the error.",
    "exampleRu": "Исследователи выделили основную причину ошибки.",
    "synonyms": "separate"
  },
  "w20": {
    "word": "avoid",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "избегать",
    "definition": "Стараться не делать что-либо или не сталкиваться с чем-либо.",
    "example": "Try to avoid unnecessary repetition.",
    "exampleRu": "Старайся избегать ненужных повторений.",
    "synonyms": "prevent; evade"
  },
  "w21": {
    "word": "budget",
    "phonetic": "",
    "pos": "noun",
    "level": "",
    "translation": "бюджет",
    "definition": "План того, сколько денег можно потратить за определённый период.",
    "example": "The project has a limited budget.",
    "exampleRu": "У проекта ограниченный бюджет.",
    "synonyms": "funds"
  },
  "w22": {
    "word": "adapt to",
    "phonetic": "",
    "pos": "phrasal verb",
    "level": "",
    "translation": "адаптироваться к",
    "definition": "Измениться так, чтобы успешно действовать в новых условиях.",
    "example": "Animals must adapt to changes in their environment.",
    "exampleRu": "Животные должны адаптироваться к изменениям окружающей среды.",
    "synonyms": "adjust to"
  },
  "w23": {
    "word": "alternative",
    "phonetic": "",
    "pos": "noun / adjective",
    "level": "",
    "translation": "альтернатива; альтернативный",
    "definition": "Другой возможный вариант вместо существующего.",
    "example": "We need an alternative source of energy.",
    "exampleRu": "Нам нужен альтернативный источник энергии.",
    "synonyms": "substitute; option"
  },
  "w24": {
    "word": "compensate",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "компенсировать",
    "definition": "Возместить потерю или уравновесить недостаток чем-либо.",
    "example": "Extra practice can compensate for a weak vocabulary.",
    "exampleRu": "Дополнительная практика может компенсировать слабый словарный запас.",
    "synonyms": "make up for"
  },
  "w25": {
    "word": "component",
    "phonetic": "",
    "pos": "noun",
    "level": "",
    "translation": "компонент; составная часть",
    "definition": "Одна из частей более крупной системы или объекта.",
    "example": "Memory is an important component of language learning.",
    "exampleRu": "Память — важный компонент изучения языка.",
    "synonyms": "element; part"
  },
  "w26": {
    "word": "military",
    "phonetic": "",
    "pos": "adjective / noun",
    "level": "",
    "translation": "военный",
    "definition": "Связанный с вооружёнными силами.",
    "example": "The area was once used for military purposes.",
    "exampleRu": "Раньше эта территория использовалась в военных целях.",
    "synonyms": "armed forces"
  },
  "w27": {
    "word": "criteria",
    "phonetic": "",
    "pos": "noun plural",
    "level": "",
    "translation": "критерии",
    "definition": "Стандарты, по которым что-либо оценивают или решают.",
    "example": "The candidates were assessed using several criteria.",
    "exampleRu": "Кандидатов оценивали по нескольким критериям.",
    "synonyms": "standards"
  },
  "w28": {
    "word": "curriculum",
    "phonetic": "",
    "pos": "noun",
    "level": "",
    "translation": "учебная программа",
    "definition": "Совокупность предметов и содержания, изучаемых в школе или на курсе.",
    "example": "The school introduced a new science curriculum.",
    "exampleRu": "Школа ввела новую учебную программу по естественным наукам.",
    "synonyms": "syllabus; course of study"
  },
  "w29": {
    "word": "feasible",
    "phonetic": "",
    "pos": "adjective",
    "level": "",
    "translation": "осуществимый; выполнимый",
    "definition": "Такой, который реально можно выполнить или осуществить.",
    "example": "The researchers concluded that the plan was feasible.",
    "exampleRu": "Исследователи пришли к выводу, что план осуществим.",
    "synonyms": "practical; possible"
  },
  "w30": {
    "word": "constrain",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "ограничивать",
    "definition": "Ограничивать свободу действий, развитие или возможности.",
    "example": "High costs can constrain economic growth.",
    "exampleRu": "Высокие расходы могут ограничивать экономический рост.",
    "synonyms": "restrict; limit"
  },
  "w31": {
    "word": "deficiency",
    "phonetic": "",
    "pos": "noun",
    "level": "",
    "translation": "недостаток; дефицит",
    "definition": "Недостаточное количество чего-либо необходимого.",
    "example": "Vitamin deficiency can affect health.",
    "exampleRu": "Дефицит витаминов может влиять на здоровье.",
    "synonyms": "shortage; lack"
  },
  "w32": {
    "word": "supplement",
    "phonetic": "",
    "pos": "noun / verb",
    "level": "",
    "translation": "дополнение; дополнять",
    "definition": "Добавить что-либо, чтобы сделать существующее более полным.",
    "example": "Online exercises supplement classroom learning.",
    "exampleRu": "Онлайн-упражнения дополняют обучение в классе.",
    "synonyms": "add to"
  },
  "w33": {
    "word": "distinguish",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "различать; отличать",
    "definition": "Видеть или понимать разницу между вещами.",
    "example": "Learners must distinguish fact from opinion.",
    "exampleRu": "Учащиеся должны отличать факт от мнения.",
    "synonyms": "differentiate"
  },
  "w34": {
    "word": "analyze",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "анализировать",
    "definition": "Подробно изучать части или свойства чего-либо.",
    "example": "Scientists analyzed the collected data.",
    "exampleRu": "Учёные проанализировали собранные данные.",
    "synonyms": "examine"
  },
  "w35": {
    "word": "emphasize",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "подчёркивать",
    "definition": "Показывать, что что-либо особенно важно.",
    "example": "The teacher emphasized the importance of revision.",
    "exampleRu": "Учитель подчеркнул важность повторения.",
    "synonyms": "stress; highlight"
  },
  "w36": {
    "word": "enormous",
    "phonetic": "",
    "pos": "adjective",
    "level": "",
    "translation": "огромный",
    "definition": "Чрезвычайно большой по размеру, количеству или степени.",
    "example": "The project required an enormous amount of data.",
    "exampleRu": "Проект потребовал огромного объёма данных.",
    "synonyms": "huge; immense"
  },
  "w37": {
    "word": "relevant",
    "phonetic": "",
    "pos": "adjective",
    "level": "",
    "translation": "относящийся к делу; релевантный",
    "definition": "Непосредственно связанный с рассматриваемой темой.",
    "example": "Choose only information that is relevant to the question.",
    "exampleRu": "Выбирай только информацию, относящуюся к вопросу.",
    "synonyms": "applicable; pertinent"
  },
  "w38": {
    "word": "sustainable",
    "phonetic": "",
    "pos": "adjective",
    "level": "",
    "translation": "устойчивый; экологически устойчивый",
    "definition": "Способный продолжаться долго без чрезмерного истощения ресурсов.",
    "example": "The city is investing in sustainable transport.",
    "exampleRu": "Город инвестирует в устойчивый транспорт.",
    "synonyms": "long-term; eco-friendly"
  },
  "w39": {
    "word": "objective",
    "phonetic": "",
    "pos": "noun / adjective",
    "level": "",
    "translation": "цель; объективный",
    "definition": "Цель, которую хотят достичь; также основанный на фактах, а не чувствах.",
    "example": "The main objective is to reduce waste.",
    "exampleRu": "Главная цель — сократить количество отходов.",
    "synonyms": "goal; impartial"
  },
  "w40": {
    "word": "obligation",
    "phonetic": "",
    "pos": "noun",
    "level": "",
    "translation": "обязанность",
    "definition": "То, что человек должен сделать по закону, правилу или моральным причинам.",
    "example": "Employers have an obligation to provide a safe workplace.",
    "exampleRu": "Работодатели обязаны обеспечивать безопасное рабочее место.",
    "synonyms": "duty"
  },
  "w41": {
    "word": "impact",
    "phonetic": "",
    "pos": "noun / verb",
    "level": "",
    "translation": "влияние; воздействовать",
    "definition": "Сильное влияние одного явления на другое.",
    "example": "Technology has a major impact on education.",
    "exampleRu": "Технологии оказывают большое влияние на образование.",
    "synonyms": "effect; influence"
  },
  "w42": {
    "word": "hypothesis",
    "phonetic": "",
    "pos": "noun",
    "level": "",
    "translation": "гипотеза",
    "definition": "Предположение, которое можно проверить исследованием или экспериментом.",
    "example": "The experiment supported the original hypothesis.",
    "exampleRu": "Эксперимент подтвердил первоначальную гипотезу.",
    "synonyms": "theory; proposition"
  },
  "w43": {
    "word": "evidence",
    "phonetic": "",
    "pos": "noun",
    "level": "",
    "translation": "доказательства; свидетельства",
    "definition": "Факты или информация, подтверждающие или опровергающие утверждение.",
    "example": "There is strong evidence of climate change.",
    "exampleRu": "Существуют убедительные доказательства изменения климата.",
    "synonyms": "proof; indication"
  },
  "w44": {
    "word": "ethical",
    "phonetic": "",
    "pos": "adjective",
    "level": "",
    "translation": "этический",
    "definition": "Соответствующий моральным принципам правильного поведения.",
    "example": "The study raised several ethical questions.",
    "exampleRu": "Исследование вызвало несколько этических вопросов.",
    "synonyms": "moral"
  },
  "w45": {
    "word": "eliminate",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "устранять",
    "definition": "Полностью удалить или избавиться от чего-либо.",
    "example": "The new method eliminates several common errors.",
    "exampleRu": "Новый метод устраняет несколько распространённых ошибок.",
    "synonyms": "remove; get rid of"
  },
  "w46": {
    "word": "distribute",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "распределять",
    "definition": "Раздавать или распределять что-либо между людьми или местами.",
    "example": "Food was distributed among the participants.",
    "exampleRu": "Еду распределили между участниками.",
    "synonyms": "allocate; spread"
  },
  "w47": {
    "word": "disrupt",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "нарушать",
    "definition": "Прервать нормальный ход процесса или деятельности.",
    "example": "Bad weather disrupted transport services.",
    "exampleRu": "Плохая погода нарушила работу транспорта.",
    "synonyms": "interrupt"
  },
  "w48": {
    "word": "expose",
    "phonetic": "",
    "pos": "verb",
    "level": "",
    "translation": "подвергать; раскрывать",
    "definition": "Сделать что-либо видимым или подвергнуть воздействию чего-либо.",
    "example": "The study exposed weaknesses in the existing system.",
    "exampleRu": "Исследование выявило слабые места существующей системы.",
    "synonyms": "reveal; uncover"
  },
  "w49": {
    "word": "demographic",
    "phonetic": "",
    "pos": "adjective / noun",
    "level": "",
    "translation": "демографический",
    "definition": "Связанный со статистическими характеристиками населения.",
    "example": "The survey examined demographic changes in the region.",
    "exampleRu": "Опрос изучал демографические изменения в регионе.",
    "synonyms": "population-related"
  },
  "w50": {
    "word": "correlation",
    "phonetic": "",
    "pos": "noun",
    "level": "",
    "translation": "корреляция; взаимосвязь",
    "definition": "Статистическая или наблюдаемая связь между двумя явлениями.",
    "example": "The researchers found a correlation between sleep and performance.",
    "exampleRu": "Исследователи обнаружили связь между сном и результативностью.",
    "synonyms": "relationship; association"
  },
  "w51": {
    "word": "controversial",
    "phonetic": "",
    "pos": "adjective",
    "level": "",
    "translation": "спорный",
    "definition": "Вызывающий сильные разногласия и разные мнения.",
    "example": "The proposal remains highly controversial.",
    "exampleRu": "Предложение остаётся крайне спорным.",
    "synonyms": "disputed"
  },
  "w52": {
    "word": "credible",
    "phonetic": "",
    "pos": "adjective",
    "level": "",
    "translation": "достоверный; заслуживающий доверия",
    "definition": "Такой, которому можно разумно верить.",
    "example": "The article should use credible sources.",
    "exampleRu": "В статье следует использовать достоверные источники.",
    "synonyms": "reliable; believable"
  },
  "w53": {
    "word": "collapse",
    "phonetic": "",
    "pos": "noun / verb",
    "level": "",
    "translation": "обрушение; разрушаться",
    "definition": "Внезапно упасть, разрушиться или перестать функционировать.",
    "example": "The bridge collapsed after the flood.",
    "exampleRu": "Мост обрушился после наводнения.",
    "synonyms": "fall; fail"
  },
  "w54": {
    "word": "trigger",
    "phonetic": "",
    "pos": "noun / verb",
    "level": "",
    "translation": "вызывать; спусковой механизм",
    "definition": "Стать непосредственной причиной события или реакции.",
    "example": "The announcement triggered a public debate.",
    "exampleRu": "Объявление вызвало общественную дискуссию.",
    "synonyms": "cause; prompt"
  },
  "w55": {
    "word": "environment",
    "phonetic": "/ɪnˈvaɪrənmənt/",
    "pos": "noun",
    "level": "B1",
    "translation": "окружающая среда",
    "definition": "Природные и социальные условия, в которых живут люди, животные и растения.",
    "example": "We should protect the environment.",
    "exampleRu": "Мы должны защищать окружающую среду.",
    "synonyms": "surroundings"
  },
  "w56": {
    "word": "consequence",
    "phonetic": "/ˈkɒnsɪkwəns/",
    "pos": "noun",
    "level": "B2",
    "translation": "последствие",
    "definition": "Результат или эффект действия, события или ситуации.",
    "example": "Every decision has consequences.",
    "exampleRu": "У каждого решения есть последствия.",
    "synonyms": "result; outcome"
  },
  "w57": {
    "word": "accurate",
    "phonetic": "/ˈækjərət/",
    "pos": "adjective",
    "level": "B2",
    "translation": "точный",
    "definition": "Правильный, точный и не содержащий ошибок.",
    "example": "The report provides accurate information.",
    "exampleRu": "Отчёт содержит точную информацию.",
    "synonyms": "precise; correct"
  },
  "w58": {
    "word": "evaluate",
    "phonetic": "/ɪˈvæljueɪt/",
    "pos": "verb",
    "level": "B2",
    "translation": "оценивать",
    "definition": "Определять качество, значение или важность чего-либо после анализа.",
    "example": "Researchers evaluated the results carefully.",
    "exampleRu": "Исследователи тщательно оценили результаты.",
    "synonyms": "assess; appraise"
  }
},
  state: {},
  logs: [],
  corpusState: {}
};

// Replace the starter IELTS deck with the full independently curated 538-word deck.
if (Array.isArray(window.IELTS538_DATA) && window.IELTS538_DATA.length === 538) {
  const ids = [];
  window.IELTS538_DATA.forEach((item, i) => {
    const id = `ielts538_${i+1}`;
    ids.push(id);
    seed.words[id] = item;
  });
  seed.books[0] = {
    id: 'b1',
    title: 'IELTS Reading 538 (Curated)',
    category: 'IELTS',
    wordIds: ids,
    targetCount: 538
  };
}


// IELTS Core Vocabulary = Oxford 3000 + Coxhead Academic Word List (570 families).
// Shared word IDs are reused by spelling, so progress is shared across all books.
(function installIELTSCoreIntoSeed(){
  const data=Array.isArray(window.IELTS_CORE_VOCAB_DATA)?window.IELTS_CORE_VOCAB_DATA:[];
  if(!data.length) return;
  const byWord=new Map(Object.keys(seed.words).map(id=>[normalizeSpelling(seed.words[id].word||''),id]));
  const ids=[];
  data.forEach((item,i)=>{
    const key=normalizeSpelling(item.word||'');
    let id=byWord.get(key);
    if(!id){
      id='core_'+(i+1);
      const tag=item.oxford && item.awl ? `Oxford ${item.level} · AWL ${item.awl}` : item.oxford ? `Oxford ${item.level}` : `AWL ${item.awl}`;
      seed.words[id]={word:item.word,phonetic:'',pos:item.pos||'',level:tag,translation:'',definition:'',example:'',exampleRu:'',synonyms:''};
      byWord.set(key,id);
    }
    ids.push(id);
  });
  seed.books.push({id:'ieltscore',title:'IELTS Core Vocabulary',category:'IELTS',wordIds:[...new Set(ids)],targetCount:data.length,coreVocabulary:true});
})();

function load(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || structuredClone(seed); }
  catch { return structuredClone(seed); }
}
let db = load();

// ---------- VocabAru Cloud Sync ----------
let vocabAruSupabase=null;
let vocabAruSession=null;
let vocabAruSyncTimer=null;
let vocabAruCloudBusy=false;

function fixStoredSupabaseUrl(){
  const oldUrl='https://lomjjuiddbwwsygnsapx.supabase.co';
  const correctUrl='https://lomjjuiddbwwsygnsapx.supabase.co';
  const stored=localStorage.getItem('vocab_aru_supabase_url')||'';
  if(!stored || stored===oldUrl){
    localStorage.setItem('vocab_aru_supabase_url',correctUrl);
  }
}
fixStoredSupabaseUrl();

function getVocabAruCloudConfig(){
  const storedUrl=localStorage.getItem('vocab_aru_supabase_url')||'';
  const storedKey=localStorage.getItem('vocab_aru_supabase_key')||'';

  const url=storedUrl || window.VOCABARU_SUPABASE_URL || '';
  const key=storedKey || window.VOCABARU_SUPABASE_ANON_KEY || '';

  return {url,key};
}

function vocabAruCloudConfigured(){
  const cfg=getVocabAruCloudConfig();
  return !!(window.supabase && cfg.url && cfg.key);
}

function initVocabAruSupabase(){
  if(!vocabAruCloudConfigured()) return null;
  if(vocabAruSupabase) return vocabAruSupabase;
  const cfg=getVocabAruCloudConfig();
  vocabAruSupabase=window.supabase.createClient(cfg.url,cfg.key);
  return vocabAruSupabase;
}

async function saveVocabAruCloudConfig(){
  const url=(document.getElementById('supabase-url-input')?.value||'').trim();
  const key=(document.getElementById('supabase-key-input')?.value||'').trim();
  const msg=document.getElementById('supabase-config-message');

  if(!url || !key){
    if(msg) msg.textContent='Paste both the Project URL and Publishable key.';
    return;
  }
  if(!/^https:\/\/.+\.supabase\.co\/?$/i.test(url)){
    if(msg) msg.textContent='The Supabase Project URL does not look valid.';
    return;
  }
  if(!/^sb_publishable_/i.test(key) && !/^eyJ/i.test(key)){
    if(msg) msg.textContent='Please paste the Publishable/anon public key, not a service_role key.';
    return;
  }

  localStorage.setItem('vocab_aru_supabase_url',url.replace(/\/$/,''));
  localStorage.setItem('vocab_aru_supabase_key',key);
  vocabAruSupabase=null;

  const client=initVocabAruSupabase();
  if(!client){
    if(msg) msg.textContent='Could not initialize Supabase.';
    return;
  }

  if(msg) msg.textContent='Connection saved.';
  updateAccountUI();
  await initializeVocabAruAuth();
}

function saveLocalOnly(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function save(){
  saveLocalOnly();
  queueVocabAruCloudSync();
}

function queueVocabAruCloudSync(){
  if(!vocabAruSession || vocabAruCloudBusy) return;
  clearTimeout(vocabAruSyncTimer);
  vocabAruSyncTimer=setTimeout(()=>syncVocabAruToCloud(false),900);
}

async function syncVocabAruToCloud(showMessage=true){
  const client=initVocabAruSupabase();
  if(!client || !vocabAruSession) return false;
  vocabAruCloudBusy=true;
  try{
    const payload={
      user_id:vocabAruSession.user.id,
      state:db,
      updated_at:new Date().toISOString()
    };
    const {error}=await client
      .from('vocab_aru_state')
      .upsert(payload,{onConflict:'user_id'});
    if(error) throw error;
    if(showMessage) setAccountSyncMessage('Synced.');
    return true;
  }catch(err){
    console.warn('VocabAru cloud sync failed:',err);
    if(showMessage) setAccountSyncMessage('Sync failed: '+(err.message||'unknown error'));
    return false;
  }finally{
    vocabAruCloudBusy=false;
  }
}

async function loadVocabAruFromCloud(){
  const client=initVocabAruSupabase();
  if(!client || !vocabAruSession) return false;
  vocabAruCloudBusy=true;
  try{
    const {data,error}=await client
      .from('vocab_aru_state')
      .select('state,updated_at')
      .eq('user_id',vocabAruSession.user.id)
      .maybeSingle();
    if(error) throw error;

    if(data && data.state && typeof data.state==='object'){
      db=data.state;
      saveLocalOnly();
      render();
      return true;
    }

    // First login on this account: upload the current local progress.
    await client
      .from('vocab_aru_state')
      .upsert({
        user_id:vocabAruSession.user.id,
        state:db,
        updated_at:new Date().toISOString()
      },{onConflict:'user_id'});
    return true;
  }catch(err){
    console.warn('VocabAru cloud load failed:',err);
    setAccountSyncMessage('Cloud load failed: '+(err.message||'unknown error'));
    return false;
  }finally{
    vocabAruCloudBusy=false;
  }
}

function setAccountMessage(text){
  const el=document.getElementById('account-message');
  if(el) el.textContent=text||'';
}
function setAccountSyncMessage(text){
  const el=document.getElementById('account-sync-message');
  if(el) el.textContent=text||'';
}

function updateAccountUI(){
  const btn=document.getElementById('account-btn');
  const form=document.getElementById('account-auth-form');
  const signed=document.getElementById('account-signed-in');
  const warning=document.getElementById('account-config-warning');
  const email=document.getElementById('account-user-email');

  const configured=vocabAruCloudConfigured();
  if(warning && !warning.dataset.userOpened){ warning.hidden=true; warning.style.display='none'; }

  const cfg=getVocabAruCloudConfig();
  const urlInput=document.getElementById('supabase-url-input');
  const keyInput=document.getElementById('supabase-key-input');
  if(urlInput && !urlInput.value) urlInput.value=cfg.url||'https://lomjjuiddbwwsygnsapx.supabase.co';
  if(keyInput && !keyInput.value && cfg.key) keyInput.value=cfg.key;

  if(vocabAruSession){
    if(btn) btn.textContent='Account';
    if(form) form.hidden=true;
    if(signed) signed.hidden=false;
    if(email) email.textContent=vocabAruSession.user.email||'Signed in';
  }else{
    if(btn) btn.textContent='Log in';
    if(form) form.hidden=false;
    if(signed) signed.hidden=true;
  }
}

let vocabAruAuthListenerBound=false;

async function initializeVocabAruAuth(){
  const client=initVocabAruSupabase();
  updateAccountUI();
  if(!client) return;

  const {data}=await client.auth.getSession();
  vocabAruSession=data.session||null;
  updateAccountUI();

  if(!vocabAruAuthListenerBound){
    client.auth.onAuthStateChange(async (_event,session)=>{
      if(_event==='PASSWORD_RECOVERY'){
        const dialog=document.getElementById('account-dialog');
        const resetForm=document.getElementById('account-reset-form');
        if(dialog && !dialog.open) dialog.showModal();
        if(resetForm) resetForm.hidden=false;
        setAccountMessage('Enter a new password below.');
      }
      const wasSignedOut=!vocabAruSession;
      vocabAruSession=session||null;
      updateAccountUI();
      if(vocabAruSession && wasSignedOut){
        await loadVocabAruFromCloud();
      }
    });
    vocabAruAuthListenerBound=true;
  }

  if(vocabAruSession){
    await loadVocabAruFromCloud();
  }
}

async function vocabAruLogin(){
  const client=initVocabAruSupabase();
  if(!client){
    setAccountMessage('Cloud login is not configured yet.');
    return;
  }
  const email=(document.getElementById('account-email')?.value||'').trim();
  const password=document.getElementById('account-password')?.value||'';
  if(!email || !password){
    setAccountMessage('Enter your email and password.');
    return;
  }
  setAccountMessage('Signing in…');
  const {error}=await client.auth.signInWithPassword({email,password});
  const passwordActions=document.getElementById('account-password-actions');
  if(error){
    const msg=error.message||'';
    if(/invalid login credentials|invalid credentials/i.test(msg)){
      setAccountMessage('Password is incorrect, or this email has not been registered.');
      if(passwordActions) passwordActions.hidden=false;
    }else{
      setAccountMessage(msg);
    }
  }else{
    setAccountMessage('');
    if(passwordActions) passwordActions.hidden=true;
  }
}

async function vocabAruSignup(){
  const client=initVocabAruSupabase();
  if(!client){
    setAccountMessage('Cloud login is not configured yet.');
    return;
  }
  const email=(document.getElementById('account-email')?.value||'').trim();
  const password=document.getElementById('account-password')?.value||'';
  if(!email || password.length<6){
    setAccountMessage('Use a valid email and a password with at least 6 characters.');
    return;
  }
  setAccountMessage('Creating account…');
  const {data,error}=await client.auth.signUp({email,password});
  if(error){
    const msg=error.message||'';
    if(/already registered|already exists|user already/i.test(msg)){
      setAccountMessage('This email already exists. Please log in or change the password.');
      const pa=document.getElementById('account-password-actions'); if(pa) pa.hidden=false;
    }else if(/email rate limit|rate limit|too many requests|security purposes/i.test(msg)){
      setAccountMessage('Too many emails have been sent. Please wait a few minutes and try again.');
    }else{
      setAccountMessage(msg);
    }
    return;
  }
  // With email confirmation enabled, Supabase can deliberately return an
  // obfuscated user for an address that already exists. identities=[] is the
  // useful client-side signal in that case.
  if(data && data.user && Array.isArray(data.user.identities) && data.user.identities.length===0){
    setAccountMessage('This email already exists. Please log in or change the password.');
    const pa=document.getElementById('account-password-actions'); if(pa) pa.hidden=false;
    return;
  }
  if(!data.session){
    setAccountMessage('Account created. Check your email to confirm it, then log in.');
    const actions=document.getElementById('account-confirm-actions');
    if(actions) actions.hidden=false;
    startConfirmationCooldown(60);
  }else{
    setAccountMessage('');
  }
}

let confirmationCooldownTimer=null;
function startConfirmationCooldown(seconds=60){
  const btn=document.getElementById('account-resend-confirmation');
  const status=document.getElementById('account-resend-status');
  if(confirmationCooldownTimer) clearInterval(confirmationCooldownTimer);
  let left=seconds;
  const draw=()=>{
    if(btn) btn.disabled=left>0;
    if(status) status.textContent=left>0 ? `You can resend in ${left}s.` : 'You can resend now.';
  };
  draw();
  confirmationCooldownTimer=setInterval(()=>{
    left-=1; draw();
    if(left<=0){ clearInterval(confirmationCooldownTimer); confirmationCooldownTimer=null; }
  },1000);
}

async function vocabAruResendConfirmation(){
  const client=initVocabAruSupabase();
  const email=(document.getElementById('account-email')?.value||'').trim();
  if(!client){ setAccountMessage('Cloud login is not configured yet.'); return; }
  if(!email){ setAccountMessage('Enter the email address you used to create the account.'); return; }
  const btn=document.getElementById('account-resend-confirmation');
  if(btn) btn.disabled=true;
  setAccountMessage('Requesting a new confirmation email…');
  const {error}=await client.auth.resend({type:'signup',email});
  if(error){
    const msg=error.message||'Could not resend confirmation email.';
    if(/rate|limit|seconds|security purposes/i.test(msg)){
      setAccountMessage('Too many confirmation emails have been sent. Please wait a few minutes and try again.');
      startConfirmationCooldown(60);
    }else{
      setAccountMessage(msg);
      if(btn) btn.disabled=false;
    }
    return;
  }
  setAccountMessage('Confirmation email sent. Check your inbox and spam folder.');
  startConfirmationCooldown(60);
}

async function vocabAruForgotPassword(){
  const client=initVocabAruSupabase();
  const email=(document.getElementById('account-email')?.value||'').trim();
  if(!client){ setAccountMessage('Cloud login is not configured yet.'); return; }
  if(!email){ setAccountMessage('Enter your email first, then click Forgot / change password.'); return; }
  setAccountMessage('Sending password reset email…');
  const redirectTo=window.location.origin + window.location.pathname;
  const {error}=await client.auth.resetPasswordForEmail(email,{redirectTo});
  if(error){
    const msg=error.message||'Could not send password reset email.';
    if(/rate|limit|seconds|security purposes/i.test(msg)) setAccountMessage('Too many password reset emails have been sent. Please wait a few minutes and try again.');
    else setAccountMessage(msg);
    return;
  }
  setAccountMessage('Password reset email sent. Open the newest email and follow its link.');
}

async function vocabAruSaveNewPassword(){
  const client=initVocabAruSupabase();
  const password=document.getElementById('account-new-password')?.value||'';
  if(!client) return;
  if(password.length<6){ setAccountMessage('New password must be at least 6 characters.'); return; }
  const {error}=await client.auth.updateUser({password});
  if(error){ setAccountMessage(error.message||'Could not change password.'); return; }
  setAccountMessage('Password changed successfully. You can use the new password from now on.');
  const rf=document.getElementById('account-reset-form'); if(rf) rf.hidden=true;
}

async function vocabAruLogout(){
  const client=initVocabAruSupabase();
  if(client) await client.auth.signOut();
  vocabAruSession=null;
  updateAccountUI();
  setAccountSyncMessage('');
}

function bindVocabAruAccountUI(){
  const dialog=document.getElementById('account-dialog');
  const btn=document.getElementById('account-btn');
  const close=document.getElementById('account-close');
  const login=document.getElementById('account-login');
  const signup=document.getElementById('account-signup');
  const logout=document.getElementById('account-logout');
  const sync=document.getElementById('account-sync-now');
  const saveConfig=document.getElementById('save-supabase-config');
  const cloudSettings=document.getElementById('account-cloud-settings');
  const resendConfirmation=document.getElementById('account-resend-confirmation');
  const forgotPassword=document.getElementById('account-forgot-password');
  const saveNewPassword=document.getElementById('account-save-new-password');

  if(btn && dialog) btn.onclick=()=>{updateAccountUI();dialog.showModal();};
  if(saveConfig) saveConfig.onclick=saveVocabAruCloudConfig;
  if(cloudSettings) cloudSettings.onclick=()=>{
    const warning=document.getElementById('account-config-warning');
    if(warning){
      const opening=warning.hidden || warning.style.display==='none';
      warning.hidden=!opening; warning.style.display=opening?'block':'none';
      if(opening) warning.dataset.userOpened='1'; else delete warning.dataset.userOpened;
    }
    const cfg=getVocabAruCloudConfig();
    const urlInput=document.getElementById('supabase-url-input'); if(urlInput) urlInput.value=cfg.url||'https://lomjjuiddbwwsygnsapx.supabase.co';
    const keyInput=document.getElementById('supabase-key-input'); if(keyInput && cfg.key) keyInput.value=cfg.key;
  };
  if(close && dialog) close.onclick=()=>dialog.close();
  if(login) login.onclick=vocabAruLogin;
  if(signup) signup.onclick=vocabAruSignup;
  if(logout) logout.onclick=vocabAruLogout;
  if(sync) sync.onclick=()=>syncVocabAruToCloud(true);
  if(resendConfirmation) resendConfirmation.onclick=vocabAruResendConfirmation;
  if(forgotPassword) forgotPassword.onclick=vocabAruForgotPassword;
  if(saveNewPassword) saveNewPassword.onclick=vocabAruSaveNewPassword;
}

window.addEventListener('DOMContentLoaded',()=>{
  bindVocabAruAccountUI();
  initializeVocabAruAuth();
});


function coreDetailsForWord(word){
  const key=normalizeSpelling(word||'');
  return (window.IELTS_CORE_DETAILS && window.IELTS_CORE_DETAILS[key]) || null;
}

// Fill newly-added IELTS Core entries, including existing saved installations.
// Existing user-edited content is never overwritten.
(function migrateIELTSCoreDetails(){
  const book=db.books && db.books.find(b=>b.id==='ieltscore');
  if(!book) return;
  let changed=false;
  (book.wordIds||[]).forEach(id=>{
    const w=db.words[id];
    if(!w) return;
    const d=coreDetailsForWord(w.word);
    if(!d) return;
    ['translation','definition','example','phonetic','pos'].forEach(k=>{
      if((!w[k] || w[k]==='—') && d[k]){
        w[k]=d[k];
        changed=true;
      }
    });
  });
  if(changed) save();
})();

const CORE_EXAMPLE_RU_CACHE_KEY='vocabflow_core_example_ru_v1';
function loadCoreExampleRuCache(){
  try{return JSON.parse(localStorage.getItem(CORE_EXAMPLE_RU_CACHE_KEY)||'{}');}
  catch{return {};}
}
function saveCoreExampleRuCache(cache){
  localStorage.setItem(CORE_EXAMPLE_RU_CACHE_KEY,JSON.stringify(cache));
}
async function translateCoreExampleToRussian(text){
  if(!text) return '';
  const cache=loadCoreExampleRuCache();
  if(cache[text]) return cache[text];
  try{
    const url='https://api.mymemory.translated.net/get?q='+encodeURIComponent(text)+'&langpair=en|ru';
    const r=await fetch(url);
    if(!r.ok) throw new Error('translation failed');
    const j=await r.json();
    const t=(j.responseData&&j.responseData.translatedText)||'';
    if(t){
      cache[text]=t;
      saveCoreExampleRuCache(cache);
      return t;
    }
  }catch(e){}
  return '';
}

async function hydrateCoreExampleTranslation(w){
  if(!isCoreRecallSession() || !w || w.exampleRu || !w.example) return;
  const nodes=document.querySelectorAll('[data-core-example-ru]');
  if(!nodes.length) return;
  nodes.forEach(n=>n.textContent='Перевод загружается…');
  const translated=await translateCoreExampleToRussian(w.example);
  if(translated){
    w.exampleRu=translated;
    save();
    nodes.forEach(n=>n.textContent=translated);
  }else{
    nodes.forEach(n=>n.textContent='Не удалось загрузить перевод. Нажмите Next и попробуйте позже.');
  }
}

// Add the Core book to existing saved installations without resetting progress.
(function migrateIELTSCore(){
  const data=Array.isArray(window.IELTS_CORE_VOCAB_DATA)?window.IELTS_CORE_VOCAB_DATA:[];
  if(!data.length || db.books.find(b=>b.id==='ieltscore')) return;
  const byWord=new Map(Object.keys(db.words).map(id=>[normalizeSpelling(db.words[id].word||''),id]));
  const ids=[];
  data.forEach((item,i)=>{
    const key=normalizeSpelling(item.word||'');
    let id=byWord.get(key);
    if(!id){
      id='core_'+(i+1);
      while(db.words[id]) id+='_x';
      const tag=item.oxford && item.awl ? `Oxford ${item.level} · AWL ${item.awl}` : item.oxford ? `Oxford ${item.level}` : `AWL ${item.awl}`;
      db.words[id]={word:item.word,phonetic:'',pos:item.pos||'',level:tag,translation:'',definition:'',example:'',exampleRu:'',synonyms:''};
      byWord.set(key,id);
    }
    ids.push(id);
  });
  db.books.push({id:'ieltscore',title:'IELTS Core Vocabulary',category:'IELTS',wordIds:[...new Set(ids)],targetCount:data.length,coreVocabulary:true});
  save();
})();

function corpusRawData(){
  return Array.isArray(window.WANGLU_CORPUS_DATA) ? window.WANGLU_CORPUS_DATA : [];
}
function corpusData(){
  const raw=corpusRawData();
  const book=db.books.find(b=>b.corpusMode);
  if(!book) return raw;
  const blocked=priorBookWordKeys(book.id);
  const seen=new Set();
  return raw.filter(item=>{
    const key=normalizeSpelling(item.text);
    if(blocked.has(key)||seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
function getCorpusState(id){
  if(!db.corpusState) db.corpusState={};
  if(!db.corpusState[id]) db.corpusState[id]={attempts:0,errors:0,correct:0,last:0};
  const s=db.corpusState[id];
  if(s.streak==null) s.streak=0;
  if(s.lapses==null) s.lapses=s.errors||0;
  if(s.intervalDays==null) s.intervalDays=0;
  if(s.due==null) s.due=0;
  if(!s.status) s.status=s.attempts>0?'review':'new';
  return s;
}
function corpusSummary(){
  const data=corpusData();
  const now=Date.now();
  let attempted=0, errors=0, difficult=0, correct=0, due=0, learning=0;
  data.forEach(item=>{
    const s=getCorpusState(item.id);
    if(s.attempts>0) attempted++;
    if(s.errors>0) difficult++;
    if(s.status==='learning'||s.status==='relearning') learning++;
    if(s.attempts>0 && s.due && s.due<=now) due++;
    errors+=s.errors||0;
    correct+=s.correct||0;
  });
  return {total:data.length,attempted,errors,difficult,correct,due,learning};
}
function corpusSections(){
  const map=new Map();
  corpusData().forEach(item=>{
    if(!map.has(item.section)) map.set(item.section,[]);
    map.get(item.section).push(item);
  });
  return [...map.entries()].map(([name,items])=>({name,items}));
}
function corpusSectionSummary(items){
  const now=Date.now();
  let attempted=0,due=0,errors=0;
  items.forEach(item=>{
    const s=getCorpusState(item.id);
    if(s.attempts>0) attempted++;
    if(s.attempts>0 && s.due && s.due<=now) due++;
    errors+=s.errors||0;
  });
  return {total:items.length,attempted,due,errors};
}
function corpusDueText(ts){
  if(!ts) return 'New';
  const ms=ts-Date.now();
  if(ms<=0) return 'Due now';
  const mins=Math.ceil(ms/60000);
  if(mins<60) return `${mins} min`;
  const hrs=Math.ceil(mins/60);
  if(hrs<24) return `${hrs} h`;
  return `${Math.ceil(hrs/24)} d`;
}
function scheduleCorpus(item,correct){
  const s=getCorpusState(item.id);
  const now=Date.now();
  s.attempts++;
  s.last=now;
  if(!correct){
    s.errors++;
    s.lapses++;
    s.streak=0;
    s.status='relearning';
    s.intervalDays=10/1440; // 10 minutes
    s.due=now+10*60000;
    return;
  }
  s.correct++;
  s.streak++;
  s.status='review';
  const ladder=[1,3,7,14,30,60,100,160];
  let interval=ladder[Math.min(s.streak-1,ladder.length-1)];
  if(s.streak>ladder.length) interval=Math.min(365,Math.round((s.intervalDays||160)*1.6));
  // Words with repeated lapses are reviewed a little sooner.
  const penalty=Math.max(0.55,1-Math.min(0.4,(s.lapses||0)*0.05));
  interval=Math.max(1,Math.round(interval*penalty));
  s.intervalDays=interval;
  s.due=now+interval*DAY;
}
function normalizeSpelling(s){
  return String(s||'').toLowerCase().trim()
    .replace(/[’‘]/g,"'")
    .replace(/\s+/g,' ')
    .replace(/\s+([,.;:!?])/g,'$1');
}
function isCorpusAnswerCorrect(item,answer){
  const a=normalizeSpelling(answer);
  return (item.accepted||[item.text]).some(v=>normalizeSpelling(v)===a);
}
function priorBookWordKeys(bookId){
  const keys=new Set();
  const idx=db.books.findIndex(b=>b.id===bookId);
  if(idx<0) return keys;
  for(let i=0;i<idx;i++){
    const b=db.books[i];
    if(b.corpusMode){
      corpusRawData().forEach(item=>keys.add(normalizeSpelling(item.text)));
    }else{
      (b.wordIds||[]).forEach(id=>{
        const w=db.words[id];
        if(w&&w.word) keys.add(normalizeSpelling(w.word));
      });
    }
  }
  return keys;
}
function uniqueWordIdsForBook(book){
  const blocked=priorBookWordKeys(book.id);
  const seen=new Set();
  return (book.wordIds||[]).filter(id=>{
    const w=db.words[id];
    if(!w||!w.word) return false;
    const key=normalizeSpelling(w.word);
    if(blocked.has(key)||seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function speakCorpus(text){
  if(!('speechSynthesis' in window)){ alert('Speech is not supported by this browser.'); return; }
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang='en-US';
  u.rate=0.82;
  u.pitch=1;
  const voices=speechSynthesis.getVoices();
  const preferred=voices.find(v=>/^en-GB/i.test(v.lang)) || voices.find(v=>/^en/i.test(v.lang));
  if(preferred) u.voice=preferred;
  speechSynthesis.speak(u);
}


let spellingUtterance538=null;
function speak538SpellingWord(text){
  if(!('speechSynthesis' in window)){
    alert('Speech is not supported by this browser.');
    return;
  }
  const phrase=String(text||'').trim();
  if(!phrase) return;

  const engine=window.speechSynthesis;
  const u=new SpeechSynthesisUtterance(phrase);
  const voices=engine.getVoices();
  const preferred=
    voices.find(v=>/^en-US/i.test(v.lang)) ||
    voices.find(v=>/^en-GB/i.test(v.lang)) ||
    voices.find(v=>/^en/i.test(v.lang));

  u.lang=preferred?.lang || 'en-US';
  if(preferred) u.voice=preferred;
  u.rate=0.82;
  u.pitch=1;
  u.volume=1;

  // Keep a reference until playback finishes.
  spellingUtterance538=u;
  u.onend=()=>{ spellingUtterance538=null; };
  u.onerror=()=>{ spellingUtterance538=null; };

  if(engine.paused) engine.resume();

  // Do NOT cancel here. On Chrome/macOS, cancel()+speak() on this dynamically
  // rendered spelling screen can silently discard the new utterance.
  engine.speak(u);
}

function split538Synonyms(value){
  return String(value||'')
    .split(/\s*[;,|]\s*/)
    .map(x=>x.trim())
    .filter(Boolean);
}
function render538SynonymAudio(value){
  const items=split538Synonyms(value);
  if(!items.length) return '<span class="muted">No synonyms available.</span>';
  return `<div class="synonym-audio-list">${items.map((s,i)=>
    `<button type="button" class="synonym-audio-chip" data-synonym-index="${i}" data-synonym="${escapeHtml(s)}">🔊 ${escapeHtml(s)}</button>`
  ).join('')}</div>`;
}
function bind538SynonymAudio(root=document){
  root.querySelectorAll('.synonym-audio-chip').forEach(btn=>{
    btn.onclick=()=>speakCorpus(btn.dataset.synonym||'');
  });
}
function russianForCorpus(item){
  const target=normalizeSpelling(item.text);
  const id=Object.keys(db.words).find(id=>normalizeSpelling(db.words[id].word)===target);
  return id && db.words[id].translation ? db.words[id].translation : '';
}

function corpusLearningInfo(item){
  const saved=(window.CORPUS_RU_INFO && window.CORPUS_RU_INFO[item.id]) || {};
  const existing=russianForCorpus(item);
  return {
    translation: existing || saved.translation || 'Перевод пока не добавлен.',
    definition: saved.definition || 'Словарная заметка пока не добавлена.',
    example: saved.example || `I heard the word “${item.text}” in the listening exercise.`,
    exampleRu: saved.exampleRu || `Я услышал(а) слово «${item.text}» в упражнении на аудирование.`
  };
}

function getState(id){
  if(!db.state[id]) db.state[id]={status:'new',due:0,interval:0,ease:2.5,reviews:0,lapses:0,last:0,streak:0};
  return db.state[id];
}
function dueWords(){
  const now=Date.now();
  return Object.keys(db.words).filter(id=>{const s=getState(id);return s.status!=='new' && s.due<=now;});
}
function newWords(){ return Object.keys(db.words).filter(id=>getState(id).status==='new'); }
function learnedWords(){ return Object.keys(db.words).filter(id=>getState(id).status!=='new'); }

// Lightweight adaptive scheduler for the prototype. The app structure makes it easy to replace this with FSRS later.
function schedule(id, rating){
  const s=getState(id); const now=Date.now();
  let interval=s.interval || 0;
  if(rating==='again'){
    s.status='relearning'; s.lapses++; s.streak=0; interval=10/1440; s.ease=Math.max(1.3,s.ease-0.2);
  } else if(rating==='hard'){
    s.status='review'; s.streak++; interval=interval<1?1:Math.max(1,interval*1.4); s.ease=Math.max(1.3,s.ease-0.05);
  } else if(rating==='good'){
    s.status='review'; s.streak++; interval=interval<1?1:Math.max(1,interval*s.ease);
  } else {
    s.status='review'; s.streak++; interval=interval<1?3:Math.max(3,interval*s.ease*1.35); s.ease=Math.min(3.2,s.ease+0.08);
  }
  s.interval=interval; s.last=now; s.due=now+interval*DAY; s.reviews++;
  db.logs.push({wordId:id,rating,at:now,next:s.due,interval}); save();
}

const view=document.querySelector('#view'); const title=document.querySelector('#page-title');
const subtitle=document.querySelector('#page-subtitle');
let currentView='dashboard'; let activeQueue=[]; let queueIndex=0; let revealed=false;

function setView(name){ currentView=name; document.querySelectorAll('.nav').forEach(n=>n.classList.toggle('active',n.dataset.view===name)); render(); }
document.querySelectorAll('.nav').forEach(n=>n.addEventListener('click',()=>setView(n.dataset.view)));

document.querySelector('#reset-demo').onclick=()=>{ if(confirm('Reset all learning progress and imported books?')){localStorage.removeItem(STORAGE_KEY);db=load();save();render();} };

function render(){
  ensureMyWordsBook();
  ensureWritingWordsBook();
  const map={dashboard:['Dashboard','English vocabulary with Russian explanations'],learn:['Learn','Study new words'],review:['Review','Review words that are due'],books:['Word Books','Manage IELTS, TOEFL, SAT and custom books'],vocabulary:['Vocabulary','All words and learning status'],settings:['Settings','Daily learning preferences']};
  [title.textContent,subtitle.textContent]=map[currentView];
  ({dashboard:renderDashboard,learn:renderLearn,review:renderReview,books:renderBooks,vocabulary:renderVocabulary,settings:renderSettings}[currentView])();
}


function ensure197Book(){
  if(!db.books.find(b=>b.id==='b197')){
    db.books.push({id:'b197',title:'IELTS Listening 197 Synonym Groups',category:'IELTS',wordIds:[]});
  }
  const book=db.books.find(b=>b.id==='b197');
  const ids=[];
  (window.IELTS197_DATA||[]).forEach(x=>{
    const id=x.id;
    ids.push(id);
    if(!db.words[id]){
      db.words[id]={
        word:x.word,
        pos:'phrase / synonym group',
        translation:x.translation,
        definition:x.definition,
        example:x.example,
        exampleRu:x.exampleRu,
        synonyms:(x.synonyms||[]).join(', ')
      };
    }
    if(!db.state[id]){
      db.state[id]={status:'new',due:0,interval:0,ease:2.5,reviews:0,lapses:0,last:0,streak:0};
    }
  });
  book.wordIds=ids;
}
ensure197Book();

let study197Queue=[];
let study197Index=0;
let current197=null;

function get197State(id){
  if(!db.state[id]) db.state[id]={status:'new',due:0,interval:0,ease:2.5,reviews:0,lapses:0,last:0,streak:0};
  return db.state[id];
}
function due197Text(due){
  if(!due || due<=Date.now()) return 'Due now';
  const min=Math.ceil((due-Date.now())/60000);
  if(min<60) return `${min} min`;
  const hr=Math.ceil(min/60);
  if(hr<48) return `${hr} hr`;
  return `${Math.ceil(hr/24)} days`;
}
function schedule197(id,correct){
  const s=get197State(id);
  const now=Date.now();

  if(correct){
    s.reviews=(s.reviews||0)+1;
    s.status='review';

    if(!s.interval || s.interval<1){
      s.interval=1;
    }else if(s.interval<3){
      s.interval=3;
    }else if(s.interval<7){
      s.interval=7;
    }else if(s.interval<14){
      s.interval=14;
    }else if(s.interval<30){
      s.interval=30;
    }else{
      s.interval=Math.min(365,Math.round(s.interval*1.8));
    }

    s.due=now+s.interval*86400000;
  }else{
    s.lapses=(s.lapses||0)+1;
    s.status='relearning';
    s.interval=10/1440;
    s.due=now+10*60000;
  }

  s.last=now;
  save();
}
function render197Book(){
  title.textContent='IELTS Listening 197';
  subtitle.textContent='';
  const root=view;
  const items=window.IELTS197_DATA||[];
  const due=items.filter(x=>{
    const s=get197State(x.id);
    return s.status!=='new' && s.due>0 && s.due<=Date.now();
  }).length;
  const learned=items.filter(x=>get197State(x.id).status!=='new').length;
  root.innerHTML=`<div class="study-back-row">
    <button class="ghost" type="button" id="back-197-home">← Back</button>
  </div>
  <div class="card">
    <h2>197 synonym groups</h2>
    <p>${learned} / ${items.length} practiced · ${items.length-learned} new · ${due} due now</p>
    <div class="corpus-actions">
      <button class="primary" type="button" onclick="start197Study('all')">Study</button>
      <button class="ghost" type="button" onclick="start197Study('due')">Review due</button>
    </div>
  </div>`;
  const back197Home=document.getElementById('back-197-home');
  if(back197Home) back197Home.onclick=()=>renderDashboard();
}
window.start197Study=function(mode){
  const items=window.IELTS197_DATA||[];
  const pool=(mode==='due'
    ? items.filter(x=>{
        const s=get197State(x.id);
        return s.status!=='new' && s.due>0 && s.due<=Date.now();
      }).sort((a,b)=>get197State(a.id).due-get197State(b.id).due)
    : items.filter(x=>get197State(x.id).status==='new')
  );
  study197Queue=(mode==='due'
    ? pool
    : pool.slice(0,(db.settings&&db.settings.newPerDay)||20)
  );
  if(!study197Queue.length){
    alert(mode==='due'
      ? 'No 197 groups are due for review right now.'
      : 'No new 197 groups are available right now.');
    return;
  }
  study197Index=0;
  render197Question();
};
function render197Question(){
  if(study197Index>=study197Queue.length){ render197Book(); return; }
  title.textContent='IELTS Listening 197';
  subtitle.textContent='';

  const item=study197Queue[study197Index];
  current197=item;

  view.innerHTML=`<div class="card corpus-card">
    <div class="study-back-row"><button type="button" class="ghost study-back-btn" id="back-197">← Back</button></div>
    <div class="muted">Group ${item.number} · ${study197Index+1} / ${study197Queue.length}</div>
    <h2>Spell the word / phrase</h2>
    <p class="muted">Listen to the target word, use the 197 synonym group as a clue, then spell the target.</p>

    <div class="p197-listen-row">
      <button class="word-audio-btn spell-word-audio" id="play-197" type="button">🔊 Play target word</button>
      <div class="p197-synonym-box">
        <div class="p197-synonym-label">197 synonyms / paraphrases</div>
        <div class="synonym-audio-list" id="197-synonym-list">
          ${(item.synonyms||[]).map((s,i)=>`<button type="button" class="synonym-audio-chip p197-syn-audio" data-index="${i}">🔊 ${escapeHtml(s)}</button>`).join('')}
        </div>
      </div>
    </div>

    <input class="spelling-input" id="197-answer"
      autocomplete="off" autocapitalize="none" spellcheck="false"
      placeholder="Type what you hear">

    <div style="margin-top:16px">
      <button class="primary" id="check-197-spelling" type="button">Check spelling</button>
    </div>
  </div>`;

  const backBtn=document.getElementById('back-197');
  const playBtn=document.getElementById('play-197');
  const input=document.getElementById('197-answer');
  const checkBtn=document.getElementById('check-197-spelling');

  if(backBtn) backBtn.onclick=()=>render197Book();
  if(playBtn) playBtn.onclick=()=>speakCorpus(item.word);

  document.querySelectorAll('.p197-syn-audio').forEach(btn=>{
    btn.onclick=()=>{
      const idx=Number(btn.dataset.index);
      const synonym=(item.synonyms||[])[idx];
      if(synonym) speakCorpus(synonym);
    };
  });

  const doCheck=()=>{
    if(typeof window.check197Answer==='function'){
      window.check197Answer();
    }
  };

  if(checkBtn) checkBtn.onclick=doCheck;
  if(input){
    input.addEventListener('keydown',e=>{
      if(e.key==='Enter'){
        e.preventDefault();
        doCheck();
      }
    });
    setTimeout(()=>input.focus(),0);
  }
}
window.check197Answer=function(){
  const item=current197;
  const input=document.getElementById('197-answer');
  const checkBtn=document.getElementById('check-197-spelling');
  if(!item||!input) return;

  const raw=(input.value||'').trim();
  if(!raw){
    input.focus();
    return;
  }

  if(checkBtn) checkBtn.disabled=true;
  input.disabled=true;

  const correct=normalizeSpelling(raw)===normalizeSpelling(item.word);
  schedule197(item.id,correct);
  const st=get197State(item.id);
  const diff=render538SpellingDiff(raw,item.word);
  const card=document.querySelector('.corpus-card');
  card.innerHTML=`<div class="study-back-row"><button type="button" class="ghost study-back-btn" onclick="render197Book()">← Back</button></div>
    <div class="feedback ${correct?'correct':'wrong'} corpus-learning-result">
      <strong>${correct?'✓ Correct':'✕ Incorrect'}</strong>
      ${correct
        ? `<div class="spelling-attempt-line">${escapeHtml(raw)}</div>`
        : `<div class="spelling-label">Your spelling</div><div class="spelling-attempt-line">${diff.userHtml}</div>
           <div class="spelling-label">Correct spelling</div><div class="spelling-correct-line">${diff.correctHtml}</div>`}
      <div class="answer-spelling">${escapeHtml(item.word)}</div>
      <div class="corpus-learning-block"><div class="corpus-learning-label">Russian meaning</div>
        <div class="corpus-learning-text">${escapeHtml(item.translation)}</div></div>
      <div class="corpus-learning-block"><div class="corpus-learning-label">197 synonym / paraphrase group</div>
        <div class="synonym-audio-list">${item.synonyms.map(s=>`<button type="button" class="synonym-audio-btn" onclick='speakCorpus(${JSON.stringify(s)})'>🔊 ${escapeHtml(s)}</button>`).join('')}</div>
      </div>
      <div class="corpus-learning-block"><div class="corpus-learning-label">Russian note</div>
        <div class="corpus-learning-text">${escapeHtml(item.definition)}</div></div>
      <div class="corpus-learning-block"><div class="corpus-learning-label">Example</div>
        <div class="corpus-example-en">${escapeHtml(item.example)}</div>
        <div class="corpus-example-ru">${escapeHtml(item.exampleRu)}</div></div>
      <div class="corpus-review-row">
        <span class="review-type-badge ${correct?'review-good':'review-again'}">${correct?'Good — Review':'Again — Relearning'}</span>
        <span class="pill">Next review: ${due197Text(st.due)}</span>
      </div>
      <div class="corpus-actions">
        <button class="ghost" type="button" onclick="speakCorpus(current197.word)">🔊 Play again</button>
        <button class="primary" type="button" onclick="next197()">${study197Index+1>=study197Queue.length?'Finish':'Next'}</button>
      </div>
    </div>`;
};
window.next197=function(){study197Index++;render197Question();};
window.render197Book=render197Book;


function openBook(bookId){
  if(bookId==='b197'){ render197Book(); return; }
  renderBook(bookId);
}
window.openBook=openBook;

function renderDashboard(){
  const due=dueWords().length, fresh=newWords().length, learned=learnedWords().length, mastered=Object.keys(db.words).filter(id=>getState(id).interval>=30).length;
  view.innerHTML=`
    <div class="grid stats">
      <div class="card"><div class="muted">Due today</div><div class="metric">${due}</div></div>
      <div class="card"><div class="muted">New words</div><div class="metric">${fresh}</div></div>
      <div class="card"><div class="muted">Learned</div><div class="metric">${learned}</div></div>
      <div class="card"><div class="muted">Strong / mastered</div><div class="metric">${mastered}</div></div>
    </div>
    <div class="section-title"><h2>Continue</h2><button class="primary" id="start-review">Review now</button></div>
    <div class="grid books">${db.books.map(bookCard).join('')}</div>
    <div class="section-title"><h2>How review works</h2></div>
    <div class="notice">Words are scheduled individually. Curated word books share progress across duplicate words. My Words and My Words for Writing are separate personal books: anything you add stays in the book you chose.</div>`;
  document.querySelector('#start-review').onclick=()=>setView(due?'review':'learn');
  document.querySelectorAll('.open-book').forEach(btn=>btn.onclick=()=>openBookSafe(btn.dataset.id));
}

function bookCard(b){
  if(b.id==='mywords' || b.id==='mywords-writing'){
    const ids=[...new Set(b.wordIds||[])].filter(id=>db.words[id]);
    const learned=ids.filter(id=>getState(id).status!=='new').length;
    const due=ids.filter(id=>{const s=getState(id);return s.status!=='new' && s.due<=Date.now();}).length;
    const pct=ids.length?Math.round(learned/ids.length*100):0;
    return `<div class="card book-card"><span class="pill">${b.category}</span><h3>${escapeHtml(b.title)}</h3><div class="muted">${learned} / ${ids.length} words learned · ${due} due</div><div class="progress"><span style="width:${pct}%"></span></div><button class="ghost open-book" data-id="${b.id}">Open</button></div>`;
  }
  if(b.corpusMode){
    const cs=corpusSummary();
    const pct=cs.total?Math.round(cs.attempted/cs.total*100):0;
    return `<div class="card book-card"><span class="pill">${b.category}</span><h3>${escapeHtml(b.title)}</h3><div class="muted">${cs.attempted} / ${cs.total} practiced · ${cs.due} due · ${cs.errors} spelling errors</div><div class="progress"><span style="width:${pct}%"></span></div><button class="ghost open-book" data-id="${b.id}">Open</button></div>`;
  }
  const ids=uniqueWordIdsForBook(b);
  const learned=ids.filter(id=>getState(id).status!=='new').length;
  const due=ids.filter(id=>{const s=getState(id);return s.status!=='new' && s.due<=Date.now();}).length;
  const pct=ids.length?Math.round(learned/ids.length*100):0;
  const removed=(b.wordIds||[]).length-ids.length;
  return `<div class="card book-card"><span class="pill">${b.category}</span><h3>${escapeHtml(b.title)}</h3><div class="muted">${learned} / ${ids.length} unique words learned · ${due} due${removed?` · ${removed} duplicates skipped`:''}</div><div class="progress"><span style="width:${pct}%"></span></div><button class="ghost open-book" data-id="${b.id}">Open</button></div>`;
}


function openBookSafe(bookId){
  if(bookId==='mywords'){ renderMyWords('mywords'); return; }
  if(bookId==='mywords-writing'){ renderMyWords('mywords-writing'); return; }
  if(bookId==='b197'){
    render197Book();
    return;
  }
  const b=db.books.find(x=>x.id===bookId);
  if(!b){
    alert('This word book could not be found.');
    return;
  }
  if(b.corpusMode){
    renderCorpusHome();
    return;
  }
  renderBook(bookId);
}
window.openBookSafe=openBookSafe;

function renderBooks(){
  view.innerHTML=`<div class="toolbar"><button class="primary" id="add-book">+ Add word book</button></div><div class="grid books">${db.books.map(bookCard).join('')}</div>`;
  document.querySelector('#add-book').onclick=()=>document.querySelector('#import-dialog').showModal();
  document.querySelectorAll('.open-book').forEach(btn=>btn.onclick=()=>openBookSafe(btn.dataset.id));
}


function shuffledCopy(arr){
  const a=arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function startCurrentBookNewWords(bookId){
  const b=db.books.find(x=>x.id===bookId);
  if(!b) return;
  const ids=uniqueWordIdsForBook(b);
  const pool=ids.filter(id=>getState(id).status==='new');
  const newIds=(b.id==='ieltscore'?shuffledCopy(pool):pool).slice(0,db.settings.newPerDay);
  if(!newIds.length){
    alert('No new words are available in this book right now.');
    return;
  }
  if(isIELTS538Book(b)) start538Recall(newIds,bookId);
  else startQueue(newIds,'learn');
}
function reviewCurrentBookDue(bookId){
  const b=db.books.find(x=>x.id===bookId);
  if(!b) return;
  const ids=uniqueWordIdsForBook(b);
  let dueIds=ids.filter(id=>{
    const s=getState(id);
    return s.status!=='new' && s.due<=Date.now();
  });
  if(b.id==='ieltscore') dueIds=shuffledCopy(dueIds);
  if(!dueIds.length){
    alert('No words are due for review in this book right now.');
    return;
  }
  startQueue(dueIds,'review');
}
window.startCurrentBookNewWords=startCurrentBookNewWords;
window.reviewCurrentBookDue=reviewCurrentBookDue;

function renderBook(bookId){
  if(bookId==='mywords'){ renderMyWords('mywords'); return; }
  if(bookId==='mywords-writing'){ renderMyWords('mywords-writing'); return; }
  if(bookId==='b197'){ render197Book(); return; }
  const b=db.books.find(x=>x.id===bookId);
  if(b.corpusMode){ renderCorpusHome(); return; }
  const ids=uniqueWordIdsForBook(b);
  const removed=(b.wordIds||[]).length-ids.length;
  title.textContent=b.title; subtitle.textContent=b.id==='ieltscore'?`Oxford 3000 + Academic Word List (570 families) · ${ids.length} unique headwords${removed?` · ${removed} duplicates shared/skipped`:''}`:`${ids.length} unique words${removed?` · ${removed} duplicates skipped`:''}`;
  const dueIds=ids.filter(id=>{const s=getState(id); return s.status!=='new' && s.due<=Date.now();});
  view.innerHTML=`<div class="toolbar">
    <button class="ghost" id="back-books">← Back</button>
    <button class="primary" id="study-book" type="button" data-book="${escapeHtml(bookId)}">Study new words</button>
    <button class="ghost" id="review-book" type="button" data-book="${escapeHtml(bookId)}">Review due (${dueIds.length})</button>
  </div>
  <table class="table"><thead><tr><th>Word</th><th>Russian</th><th>Status</th><th>Next review</th></tr></thead><tbody>${ids.map(id=>rowForWord(id)).join('')}</tbody></table>`;
  document.querySelector('#back-books').onclick=()=>setView('books');
  document.querySelector('#study-book').onclick=()=>startCurrentBookNewWords(bookId);
  document.querySelector('#review-book').onclick=()=>{
    if(isIELTS538Book(b)){
      if(!dueIds.length){ alert('No words are due for review in this book right now.'); return; }
      start538Recall(dueIds,bookId);
    } else {
      reviewCurrentBookDue(bookId);
    }
  };
}
function rowForWord(id){const w=db.words[id],s=getState(id);return `<tr><td><strong>${escapeHtml(w.word)}</strong><br><span class="muted">${escapeHtml(w.pos||'')}</span></td><td>${escapeHtml(w.translation||'')}</td><td>${s.status}</td><td>${s.status==='new'?'—':formatDue(s.due)}</td></tr>`}


let corpusQueue=[]; let corpusIndex=0; let corpusChecked=false; let corpusSessionLabel='';

function renderCorpusHome(){
  const s=corpusSummary();
  const sections=corpusSections();
  title.textContent='IELTS Listening Corpus';
  subtitle.textContent='Listen → spell → spaced review';
  view.innerHTML=`
    <div class="corpus-hero">
      <div class="toolbar"><button class="ghost" id="back-books">← Back</button></div>
      <div class="grid corpus-stats">
        <div class="card"><div class="muted">Corpus items</div><div class="metric">${s.total}</div></div>
        <div class="card"><div class="muted">Due now</div><div class="metric">${s.due}</div></div>
        <div class="card"><div class="muted">Practiced</div><div class="metric">${s.attempted}</div></div>
        <div class="card"><div class="muted">Wrong attempts</div><div class="metric">${s.errors}</div></div>
      </div>

      <div class="card" style="margin-top:16px">
        <h2 style="margin-top:0">Spaced review</h2>
        <p class="muted">Wrong spellings return after about 10 minutes. Correct words then move through expanding review intervals: about 1, 3, 7, 14, 30, 60 days and longer. Repeated mistakes shorten the interval.</p>
        <div class="corpus-actions">
          <button class="primary" id="review-due-corpus">Review due (${s.due})</button>
          <button class="ghost" id="mistakes-corpus">Practice mistakes</button>
          <button class="ghost" id="corpus-stats">Error statistics</button>
        </div>
      </div>

      <div class="section-title"><h2>Original sections</h2></div>
      <div class="grid books corpus-chapters">
        ${sections.map(sec=>{
          const x=corpusSectionSummary(sec.items);
          const pct=x.total?Math.round(x.attempted/x.total*100):0;
          return `<div class="card book-card">
            <span class="pill">Section ${escapeHtml(sec.name)}</span>
            <h3>${escapeHtml(sec.name)}</h3>
            <div class="muted">${x.attempted} / ${x.total} practiced · ${x.due} due · ${x.errors} errors</div>
            <div class="progress"><span style="width:${pct}%"></span></div>
            <div class="corpus-actions">
              <button class="primary study-section" data-section="${escapeHtml(sec.name)}">Study</button>
              <button class="ghost review-section" data-section="${escapeHtml(sec.name)}">Review due</button>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  document.querySelector('#back-books').onclick=()=>setView('books');
  document.querySelector('#review-due-corpus').onclick=()=>startCorpusDueSession();
  document.querySelector('#mistakes-corpus').onclick=()=>startCorpusMistakeSession();
  document.querySelector('#corpus-stats').onclick=renderCorpusStats;
  document.querySelectorAll('.study-section').forEach(btn=>{
    btn.type='button';
    btn.addEventListener('click', function(ev){
      ev.preventDefault();
      ev.stopPropagation();
      startCorpusSection(this.dataset.section,false);
    });
  });
  document.querySelectorAll('.review-section').forEach(btn=>{
    btn.type='button';
    btn.addEventListener('click', function(ev){
      ev.preventDefault();
      ev.stopPropagation();
      startCorpusSection(this.dataset.section,true);
    });
  });
}

function startCorpusDueSession(){
  const now=Date.now();
  let pool=corpusData().filter(x=>{
    const s=getCorpusState(x.id);
    return s.attempts>0 && s.due && s.due<=now;
  }).sort((a,b)=>getCorpusState(a.id).due-getCorpusState(b.id).due);
  if(!pool.length){ alert('No listening words are due right now.'); return; }
  corpusQueue=pool.slice(0,50);
  corpusIndex=0; corpusChecked=false; corpusSessionLabel='Spaced review';
  renderCorpusQuestion();
}

function startCorpusMistakeSession(){
  let pool=corpusData().filter(x=>getCorpusState(x.id).errors>0)
    .sort((a,b)=>getCorpusState(b.id).errors-getCorpusState(a.id).errors);
  if(!pool.length){ alert('No spelling mistakes have been recorded yet.'); return; }
  corpusQueue=pool.slice(0,50);
  corpusIndex=0; corpusChecked=false; corpusSessionLabel='Mistake practice';
  renderCorpusQuestion();
}

function startCorpusSection(section,dueOnly=false){
  const now=Date.now();
  let pool=corpusData().filter(x=>x.section===section);
  if(dueOnly){
    pool=pool.filter(x=>{
      const s=getCorpusState(x.id);
      return s.attempts>0 && s.due && s.due<=now;
    }).sort((a,b)=>getCorpusState(a.id).due-getCorpusState(b.id).due);
    if(!pool.length){ alert(`Nothing is due in section ${section}.`); return; }
  }else{
    const due=pool.filter(x=>{const s=getCorpusState(x.id);return s.attempts>0&&s.due&&s.due<=now;})
      .sort((a,b)=>getCorpusState(a.id).due-getCorpusState(b.id).due);
    const unseen=pool.filter(x=>getCorpusState(x.id).attempts===0);
    const later=pool.filter(x=>getCorpusState(x.id).attempts>0 && !(getCorpusState(x.id).due&&getCorpusState(x.id).due<=now));
    pool=[...due,...unseen,...later];
  }
  corpusQueue=pool.slice(0,50);
  corpusIndex=0; corpusChecked=false; corpusSessionLabel=`Section ${section}${dueOnly?' · due review':''}`;
  renderCorpusQuestion();
}

function corpusBackButtonHtml(){
  return `<div class="study-back-row"><button type="button" class="ghost study-back-btn" id="back-corpus-study">← Back</button></div>`;
}
function bindCorpusBackButton(){
  const btn=document.querySelector('#back-corpus-study');
  if(btn) btn.onclick=()=>renderCorpusHome();
}

function renderCorpusQuestion(){
  title.textContent='Listening Dictation';
  subtitle.textContent=corpusSessionLabel || 'Listen → spell → check';
  if(corpusIndex>=corpusQueue.length){
    view.innerHTML=`<div class="card empty"><h2>Dictation complete</h2><p>Your spelling and review schedule have been saved.</p><button class="primary" id="corpus-home">Back to corpus</button></div>`;
    document.querySelector('#corpus-home').onclick=renderCorpusHome;
    return;
  }
  const item=corpusQueue[corpusIndex], st=getCorpusState(item.id);
  view.innerHTML=`<div class="corpus-card card">
    ${corpusBackButtonHtml()}
    <div class="muted">Item ${corpusIndex+1} / ${corpusQueue.length} · Section ${escapeHtml(item.section||'')}</div>
    <h2 style="margin-bottom:4px">What word do you hear?</h2>
    <p class="muted">The spelling stays hidden until you submit.</p>
    <button class="listen-button" id="play-corpus" aria-label="Play word">🔊</button>
    <input class="spelling-input" id="spelling-answer" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Type the word or phrase">
    <div style="margin-top:16px"><button class="primary" id="check-spelling">Check spelling</button></div>
    <div class="corpus-meta">
      <span>Attempts: ${st.attempts}</span>
      <span>Errors: ${st.errors}</span>
      <span>Next: ${corpusDueText(st.due)}</span>
    </div>
  </div>`;
  bindCorpusBackButton();
  const input=document.querySelector('#spelling-answer');
  document.querySelector('#play-corpus').onclick=()=>speakCorpus(item.text);
  document.querySelector('#check-spelling').onclick=()=>checkCorpusAnswer(item);
  input.addEventListener('keydown',e=>{if(e.key==='Enter') checkCorpusAnswer(item);});
  setTimeout(()=>{speakCorpus(item.text);input.focus();},180);
}

function checkCorpusAnswer(item){
  if(corpusChecked) return;
  const input=document.querySelector('#spelling-answer');
  const answer=input.value.trim();
  if(!answer){ input.focus(); return; }

  corpusChecked=true;
  const correct=isCorpusAnswerCorrect(item,answer);
  scheduleCorpus(item,correct);
  const st=getCorpusState(item.id);
  save();

  const learn=corpusLearningInfo(item);
  const card=document.querySelector('.corpus-card');

  card.insertAdjacentHTML('beforeend',`
    <div class="feedback ${correct?'correct':'wrong'} corpus-learning-result">
      <strong class="${correct?'success-text':'danger-text'}">${correct?'Correct':'Incorrect'}</strong>
      <div class="answer-spelling">${escapeHtml(item.display||item.text)}</div>

      ${!correct?`<div class="corpus-your-answer"><strong>Your spelling:</strong> ${escapeHtml(answer)}</div>`:''}

      <div class="corpus-learning-block">
        <div class="corpus-learning-label">Russian meaning</div>
        <div class="corpus-learning-text">${escapeHtml(learn.translation)}</div>
      </div>

      <div class="corpus-learning-block">
        <div class="corpus-learning-label">Russian note / definition</div>
        <div class="corpus-learning-text">${escapeHtml(learn.definition)}</div>
      </div>

      <div class="corpus-learning-block">
        <div class="corpus-learning-label">Example</div>
        <div class="corpus-example-en">${escapeHtml(learn.example)}</div>
        <div class="corpus-example-ru">${escapeHtml(learn.exampleRu)}</div>
      </div>

      <div class="corpus-review-row">
        ${!correct?`<span class="error-badge">Total errors: ${st.errors}</span>`:''}
        <span class="pill">Next review: ${corpusDueText(st.due)}</span>
      </div>

      <div class="corpus-actions">
        <button class="ghost" id="replay-answer" type="button">🔊 Play again</button>
        <button class="primary" id="next-corpus" type="button">${corpusIndex+1>=corpusQueue.length?'Finish':'Next'}</button>
      </div>
    </div>`);

  input.disabled=true;
  document.querySelector('#check-spelling').disabled=true;

  document.querySelector('#replay-answer').onclick=()=>speakCorpus(item.text);
  document.querySelector('#next-corpus').onclick=()=>{
    corpusIndex++;
    corpusChecked=false;
    renderCorpusQuestion();
  };
}

function renderCorpusStats(){
  title.textContent='Listening Corpus — Review & Errors';
  subtitle.textContent='Spelling history and spaced-review schedule';
  const rows=corpusData()
    .map(item=>({item,s:getCorpusState(item.id)}))
    .filter(x=>x.s.attempts>0)
    .sort((a,b)=>b.s.errors-a.s.errors || (a.s.due||Infinity)-(b.s.due||Infinity))
    .slice(0,500);
  view.innerHTML=`<div class="toolbar"><button class="ghost" id="corpus-back">← Back</button><button class="primary" id="practice-errors">Practice mistakes</button></div>
    ${rows.length?`<table class="table"><thead><tr><th>Word / phrase</th><th>Section</th><th>Attempts</th><th>Errors</th><th>Accuracy</th><th>Interval</th><th>Next review</th></tr></thead><tbody>
    ${rows.map(({item,s})=>`<tr>
      <td><strong>${escapeHtml(item.display||item.text)}</strong></td>
      <td>${escapeHtml(item.section||'')}</td>
      <td>${s.attempts}</td>
      <td>${s.errors?`<span class="error-badge">${s.errors}</span>`:'0'}</td>
      <td>${s.attempts?Math.round(s.correct/s.attempts*100):0}%</td>
      <td>${s.intervalDays? (s.intervalDays<1?'10 min':`${Math.round(s.intervalDays)} d`) :'—'}</td>
      <td>${corpusDueText(s.due)}</td>
    </tr>`).join('')}
    </tbody></table>`:`<div class="card empty">No dictation attempts yet.</div>`}`;
  document.querySelector('#corpus-back').onclick=renderCorpusHome;
  document.querySelector('#practice-errors').onclick=startCorpusMistakeSession;
}


let recall538Queue=[]; let recall538Index=0; let recall538Revealed=false;
let current538SpellingId=null;
let current538SpellingWord=null;
let last538SpellingAttempt='';

window.playCurrent538Spelling=function(){
  if(current538SpellingWord) speakCorpus(current538SpellingWord.word);
};


function render538SpellingDiff(userText, correctText){
  const a=String(userText||'');
  const b=String(correctText||'');

  // Longest-common-subsequence alignment, so insertions/deletions do not
  // make every later character look wrong.
  const n=a.length, m=b.length;
  const dp=Array.from({length:n+1},()=>Array(m+1).fill(0));
  for(let i=n-1;i>=0;i--){
    for(let j=m-1;j>=0;j--){
      dp[i][j]=a[i]===b[j] ? 1+dp[i+1][j+1] : Math.max(dp[i+1][j],dp[i][j+1]);
    }
  }

  let i=0,j=0;
  let userHtml='', correctHtml='';
  while(i<n || j<m){
    if(i<n && j<m && a[i]===b[j]){
      userHtml+=escapeHtml(a[i]);
      correctHtml+=escapeHtml(b[j]);
      i++; j++;
    }else if(j<m && (i===n || dp[i][j+1] >= dp[i+1]?.[j])){
      // Missing character in user's spelling.
      correctHtml+=`<span class="spelling-error-char">${escapeHtml(b[j])}</span>`;
      userHtml+=`<span class="spelling-missing-char">∅</span>`;
      j++;
    }else if(i<n){
      // Extra / incorrect character in user's spelling.
      userHtml+=`<span class="spelling-error-char">${escapeHtml(a[i])}</span>`;
      i++;
    }
  }

  return {userHtml,correctHtml};
}

window.checkCurrent538Spelling=function(){
  if(!current538SpellingId || !current538SpellingWord) return;
  const input=document.getElementById('538-spelling');
  if(!input) return;

  const raw=(input.value||'').trim();
  if(!raw){ input.focus(); return; }

  last538SpellingAttempt=raw;
  const correct=normalizeSpelling(raw)===normalizeSpelling(current538SpellingWord.word);
  const id=current538SpellingId;
  const w=current538SpellingWord;

  schedule(id, correct?'good':'again');

  show538Result(
    id,
    w,
    correct?'Good':'Again',
    correct
      ? 'Correct spelling.'
      : `Incorrect spelling. Your answer: ${raw}. Correct: ${w.word}`
  );
};

function back538ButtonHtml(){
  return `<div class="study-back-row"><button type="button" class="ghost study-back-btn" id="back-538-study">← Back</button></div>`;
}
function bind538BackButton(){
  const btn=document.querySelector('#back-538-study');
  if(btn) btn.onclick=()=>renderBook(recall538BookId||'b1');
}


function isIELTS538Book(b){
  return b && (/IELTS Reading 538/i.test(b.title||'') || b.id==='ieltscore');
}

let recall538BookId='b1';
function start538Recall(ids,bookId){
  recall538BookId=bookId||recall538BookId||'b1';
  recall538Queue=ids.slice();
  recall538Index=0;
  render538Recall();
}

function render538Recall(){
  const coreSession=isCoreRecallSession();
  title.textContent=coreSession?'IELTS Core Vocabulary':'IELTS Reading 538';
  subtitle.textContent=coreSession?'':'Recall → spelling → meaning & 538 synonyms';
  if(recall538Index>=recall538Queue.length){
    view.innerHTML=`<div class="card empty"><h2>Session complete</h2><p>Your results have been saved.</p><button class="primary" id="back-538-book">Back to book</button></div>`;
    document.querySelector('#back-538-book').onclick=()=>renderBook(recall538BookId||'b1');
    return;
  }
  const id=recall538Queue[recall538Index], w=db.words[id];
  recall538Revealed=false;
  view.innerHTML=`<div class="study-card card">
    ${back538ButtonHtml()}
    <div class="muted">Word ${recall538Index+1} / ${recall538Queue.length}</div>
    <div class="word">${escapeHtml(w.word)} <button class="word-audio-btn" id="recall-audio" title="American English pronunciation">🔊</button></div>
    <div class="phonetic">${escapeHtml(w.phonetic||'')}</div>
    <h3>Do you remember this word?</h3>
    <div class="ratings recall-choice">
      <button class="rating again" id="recall-no" type="button">No</button>
      <button class="rating good" id="recall-yes" type="button">Yes</button>
    </div>
    <div id="recall-details"></div>
  </div>`;
  bind538BackButton();
  document.querySelector('#recall-audio').onclick=()=>speakCorpus(w.word);
  document.querySelector('#recall-no').onclick=()=>{
    schedule(id,'again');
    show538ForgottenMeaning(w);
  };
  document.querySelector('#recall-yes').onclick=()=>show538SpellingTest(id,w);
}


function isCoreRecallSession(){
  return recall538BookId==='ieltscore';
}

function coreAnswerDetailsHtml(w){
  const d=coreDetailsForWord(w.word)||{};
  const meaning=w.translation||d.translation||'—';
  const note=w.definition||d.definition||'—';
  const example=w.example||d.example||'—';
  const exampleRu=w.exampleRu||d.exampleRu||'';
  return `
    <div style="margin-top:12px">
      <strong>Russian meaning</strong>
      <p>${escapeHtml(meaning)}</p>
    </div>
    <div>
      <strong>Russian note / explanation</strong>
      <p>${escapeHtml(note)}</p>
    </div>
    <div>
      <strong>English example</strong>
      <p>${escapeHtml(example)}</p>
    </div>
    <div>
      <strong>Russian translation of example</strong>
      <p data-core-example-ru>${escapeHtml(exampleRu||'Перевод загружается…')}</p>
    </div>`;
}

function show538ForgottenMeaning(w){
  const synonyms=w.synonyms||w.paraphrases||'';
  const card=document.querySelector('.study-card');
  card.innerHTML=`${back538ButtonHtml()}
    <div class="muted">Word ${recall538Index+1} / ${recall538Queue.length}</div>
    <div class="feedback wrong" style="text-align:left">
      <strong>${isCoreRecallSession()?'Again — review the word':'Again — meaning & 538 synonyms'}</strong>
      <div class="answer-spelling">${escapeHtml(w.word)}</div>
      ${w.phonetic?`<div class="phonetic">${escapeHtml(w.phonetic)}</div>`:''}
      ${isCoreRecallSession()
        ? coreAnswerDetailsHtml(w)
        : `<div style="margin-top:12px"><strong>Russian translation</strong><p>${escapeHtml(w.translation||'—')}</p></div>
           ${w.definition?`<div><strong>Russian definition</strong><p>${escapeHtml(w.definition)}</p></div>`:''}
           <div><strong>538 synonyms / paraphrases</strong>${render538SynonymAudio(synonyms)}</div>
           ${w.example?`<div><strong>Example</strong><p>${escapeHtml(w.example)}</p></div>`:''}
           ${w.exampleRu?`<div><strong>Russian example</strong><p>${escapeHtml(w.exampleRu)}</p></div>`:''}`}
      <div class="corpus-actions">
        <button class="ghost" id="forgotten-audio">🔊 Play</button>
        <button class="primary" id="forgotten-next">${recall538Index+1>=recall538Queue.length?'Finish':'Next word'}</button>
      </div>
    </div>`;
  bind538BackButton();
  if(!isCoreRecallSession()) bind538SynonymAudio(card);
  if(isCoreRecallSession()) hydrateCoreExampleTranslation(w);
  document.querySelector('#forgotten-audio').onclick=()=>speakCorpus(w.word);
  document.querySelector('#forgotten-next').onclick=()=>{
    recall538Index++;
    render538Recall();
  };
}

function show538MeaningStage(id,w){
  if(recall538Revealed) return;
  recall538Revealed=true;
  document.querySelector('#recall-no').disabled=true;
  document.querySelector('#recall-yes').disabled=true;
  const synonyms=w.synonyms||w.paraphrases||'';
  const box=document.querySelector('#recall-details');
  box.innerHTML=`${back538ButtonHtml()}<div class="answer" style="display:block;margin-top:22px">
    <div><strong>Russian translation</strong><p>${escapeHtml(w.translation||'—')}</p></div>
    ${w.definition?`<div><strong>Russian definition</strong><p>${escapeHtml(w.definition)}</p></div>`:''}
    <div class="corpus-actions">
      <button class="ghost" id="show-538-synonyms">Show synonyms / paraphrases</button>
    </div>
    <div id="synonym-box"></div>
    <div class="spelling-decision">
      <h3>Can you spell this word?</h3>
      <p class="muted">If you choose Yes, the word will be hidden and you must type it from memory.</p>
      <div class="ratings">
        <button class="rating again" id="spell-no">No — I can’t spell it</button>
        <button class="rating good" id="spell-yes">Yes — test spelling</button>
      </div>
    </div>
  </div>`;
  bind538BackButton();
  document.querySelector('#show-538-synonyms').onclick=()=>{
    document.querySelector('#synonym-box').innerHTML=`<div class="feedback correct"><strong>538 synonyms / paraphrases</strong>${render538SynonymAudio(synonyms)}</div>`;
    bind538SynonymAudio(document.querySelector('#synonym-box'));
  };
  // Remembered meaning but cannot spell: Good.
  const spellNoBtn=document.querySelector('#spell-no');
  if(spellNoBtn){
    spellNoBtn.onclick=()=>{
      schedule(id,'again');
      show538CannotSpell(w);
    };
  }
  const spellYesBtn=document.querySelector('#spell-yes');
  if(spellYesBtn) spellYesBtn.onclick=()=>show538SpellingTest(id,w);
}

function show538CannotSpell(w){
  const synonyms=w.synonyms||w.paraphrases||'';
  const card=document.querySelector('.study-card');
  card.innerHTML=`${back538ButtonHtml()}<div class="muted">Word ${recall538Index+1} / ${recall538Queue.length}</div>
    <div class="feedback wrong" style="text-align:left">
      <strong>Again — review the word</strong>
      <div class="answer-spelling">${escapeHtml(w.word)}</div>
      ${w.phonetic?`<div class="phonetic">${escapeHtml(w.phonetic)}</div>`:''}
      <div style="margin-top:12px"><strong>Russian translation</strong><p>${escapeHtml(w.translation||'—')}</p></div>
      ${w.definition?`<div><strong>Russian definition</strong><p>${escapeHtml(w.definition)}</p></div>`:''}
      <div><strong>538 synonyms / paraphrases</strong>${render538SynonymAudio(synonyms)}</div>
      ${w.example?`<div><strong>Example</strong><p>${escapeHtml(w.example)}</p></div>`:''}
      ${w.exampleRu?`<div><strong>Russian example</strong><p>${escapeHtml(w.exampleRu)}</p></div>`:''}
      <div class="corpus-actions">
        <button class="ghost" id="cannotspell-audio">🔊 Play</button>
        <button class="primary" id="cannotspell-next">${recall538Index+1>=recall538Queue.length?'Finish':'Next word'}</button>
      </div>
    </div>`;
  bind538BackButton();
  bind538SynonymAudio(card);
  const a=document.querySelector('#cannotspell-audio');
  if(a) a.onclick=()=>speakCorpus(w.word);
  const n=document.querySelector('#cannotspell-next');
  if(n) n.onclick=()=>{ recall538Index++; render538Recall(); };
}

function show538SpellingTest(id,w){
  const card=document.querySelector('.study-card');
  if(!card) return;

  current538SpellingId=id;
  current538SpellingWord=w;
  last538SpellingAttempt='';

  card.innerHTML=`${back538ButtonHtml()}
    <div class="muted">Word ${recall538Index+1} / ${recall538Queue.length}</div>
    <h2>Spell the word</h2>
    <p class="muted">The English word, meaning and synonyms are hidden until you check your spelling.</p>

    <button type="button"
      class="word-audio-btn spell-word-audio"
      id="spell-audio"
      onclick="playCurrent538Spelling()">🔊 Play word</button>

    <input class="spelling-input" id="538-spelling"
      autocomplete="off" autocapitalize="none" spellcheck="false"
      placeholder="Type the English word"
      onkeydown="if(event.key==='Enter'){event.preventDefault();checkCurrent538Spelling();}">

    <div style="margin-top:16px">
      <button class="primary"
        id="check-538-spelling"
        type="button"
        onclick="checkCurrent538Spelling()">Check spelling</button>
    </div>`;

  bind538BackButton();
  const input=document.getElementById('538-spelling');
  if(input) setTimeout(()=>input.focus(),0);
}

function show538Result(id,w,grade,message){
  const synonyms=w.synonyms||w.paraphrases||'';
  const s=getState(id);
  const reviewLabel=grade==='Again'?'Again — Relearning':'Good — Review';
  const nextText=s.interval<1?'about 10 minutes':`${Math.max(1,Math.round(s.interval))} day${Math.round(s.interval)===1?'':'s'}`;

  const card=document.querySelector('.study-card');
  if(!card) return;

  card.innerHTML=`${back538ButtonHtml()}
    <div class="feedback ${grade==='Again'?'wrong':'correct'}" style="text-align:left">
      <div class="review-result-header">
        <div>
          <div class="muted">Review type</div>
          <div class="review-type-badge ${grade==='Again'?'review-again':'review-good'}">${reviewLabel}</div>
        </div>
        <div>
          <div class="muted">Next review</div>
          <strong>${nextText}</strong>
        </div>
      </div>

      <div class="answer-spelling">${escapeHtml(w.word)}</div>
      ${w.phonetic?`<div class="phonetic">${escapeHtml(w.phonetic)}</div>`:''}
      <div style="margin-top:8px">${escapeHtml(message)}</div>

      ${(()=>{
        const attempt=last538SpellingAttempt||'';
        const isCorrect=normalizeSpelling(attempt)===normalizeSpelling(w.word);
        if(isCorrect){
          return `<div class="spelling-check-panel spelling-correct-panel">
            <div class="spelling-check-title">✓ Your spelling is correct</div>
            <div class="spelling-attempt-line">${escapeHtml(attempt)}</div>
          </div>`;
        }
        const diff=render538SpellingDiff(attempt,w.word);
        return `<div class="spelling-check-panel spelling-wrong-panel">
          <div class="spelling-check-title">✕ Your spelling is incorrect</div>
          <div class="spelling-label">Your spelling</div>
          <div class="spelling-attempt-line">${diff.userHtml}</div>
          <div class="spelling-label">Correct spelling</div>
          <div class="spelling-correct-line">${diff.correctHtml}</div>
          <div class="spelling-hint">Red characters show the part that differs.</div>
        </div>`;
      })()}

      ${isCoreRecallSession()
        ? coreAnswerDetailsHtml(w)
        : `<div style="margin-top:18px">
             <strong>Russian translation</strong>
             <p>${escapeHtml(w.translation||'—')}</p>
           </div>
           ${w.definition?`<div>
             <strong>Russian definition</strong>
             <p>${escapeHtml(w.definition)}</p>
           </div>`:''}
           <div>
             <strong>538 synonyms / paraphrases</strong>
             ${render538SynonymAudio(synonyms)}
           </div>
           ${w.example?`<div>
             <strong>Example</strong>
             <p>${escapeHtml(w.example)}</p>
           </div>`:''}
           ${w.exampleRu?`<div>
             <strong>Russian example</strong>
             <p>${escapeHtml(w.exampleRu)}</p>
           </div>`:''}`}

      <div class="corpus-actions">
        <button class="ghost" id="result-audio" type="button">🔊 Play word</button>
        <button class="primary" id="next-538-recall" type="button">${recall538Index+1>=recall538Queue.length?'Finish':'Next word'}</button>
      </div>
    </div>`;

  bind538BackButton();
  if(!isCoreRecallSession()) bind538SynonymAudio(card);

  if(isCoreRecallSession()) hydrateCoreExampleTranslation(w);
  const audio=document.querySelector('#result-audio');
  if(audio) audio.onclick=()=>speakCorpus(w.word);

  const next=document.querySelector('#next-538-recall');
  if(next) next.onclick=()=>{
    recall538Index++;
    render538Recall();
  };
}


function renderVocabulary(){
  view.innerHTML=`<table class="table"><thead><tr><th>Word</th><th>Russian</th><th>Status</th><th>Reviews</th><th>Interval</th></tr></thead><tbody>${Object.keys(db.words).sort((a,b)=>db.words[a].word.localeCompare(db.words[b].word)).map(id=>{const w=db.words[id],s=getState(id);return `<tr><td><strong>${escapeHtml(w.word)}</strong></td><td>${escapeHtml(w.translation||'')}</td><td>${s.status}</td><td>${s.reviews}</td><td>${s.interval?humanInterval(s.interval):'—'}</td></tr>`}).join('')}</tbody></table>`;
}

function renderLearn(){
  if(!activeQueue.length || currentView!=='learn'){ activeQueue=newWords().slice(0,db.settings.newPerDay); queueIndex=0; revealed=false; }
  renderQueue('learn');
}
function renderReview(){
  if(!activeQueue.length || currentView!=='review'){ activeQueue=dueWords(); queueIndex=0; revealed=false; }
  renderQueue('review');
}
function startQueue(ids,mode){ activeQueue=ids; queueIndex=0; revealed=false; currentView=mode; document.querySelectorAll('.nav').forEach(n=>n.classList.toggle('active',n.dataset.view===mode)); renderQueue(mode); }

function renderQueue(mode){
  if(queueIndex>=activeQueue.length){view.innerHTML=`<div class="card empty"><h2>${mode==='review'?'Review complete':'Study complete'}</h2><p>${mode==='review'?'No more due words right now.':'You finished this batch of new words.'}</p><button class="primary" id="go-home">Back to dashboard</button></div>`;document.querySelector('#go-home').onclick=()=>{activeQueue=[];setView('dashboard')};return;}
  if(!activeQueue.length){view.innerHTML=`<div class="card empty"><h2>${mode==='review'?'Nothing due':'No new words'}</h2><p>${mode==='review'?'You are caught up.':'Import another word book or reset the demo.'}</p></div>`;return;}
  const id=activeQueue[queueIndex],w=db.words[id],s=getState(id);
  view.innerHTML=`<div class="word-card card">
    <div class="word-head"><div><div class="word">${escapeHtml(w.word)} <button class="word-audio-btn" id="word-audio" title="American English pronunciation" aria-label="Play pronunciation">🔊</button></div><div class="phonetic">${escapeHtml(w.phonetic||'')} · ${escapeHtml(w.pos||'')}</div></div><span class="tag">${escapeHtml(w.level||'')}</span></div>
    ${revealed?`<div class="answer"><div class="definition"><strong>${escapeHtml(w.translation||'')}</strong><br>${escapeHtml(w.definition||'')}</div><div class="example"><strong>${escapeHtml(w.example||'')}</strong><br><span class="muted">${escapeHtml(w.exampleRu||'')}</span></div>${w.synonyms?`<div class="definition"><strong>Paraphrases / synonyms</strong><br>${escapeHtml(w.synonyms)}</div>`:''}
    <div class="ratings">${ratingButton('again','Again','10 min')}${ratingButton('hard','Hard',preview(id,'hard'))}${ratingButton('good','Good',preview(id,'good'))}${ratingButton('easy','Easy',preview(id,'easy'))}</div></div>`:`<div class="empty"><p>Try to recall the Russian meaning first.</p><button class="primary" id="show-answer">Show answer</button></div>`}
    <div class="muted" style="margin-top:18px">${queueIndex+1} / ${activeQueue.length}${s.reviews?` · reviewed ${s.reviews}×`:''}</div>
  </div>`;
  const audioBtn=document.querySelector('#word-audio');
  if(audioBtn) audioBtn.onclick=()=>speakCorpus(w.word);
  if(!revealed) document.querySelector('#show-answer').onclick=()=>{revealed=true;renderQueue(mode)};
  document.querySelectorAll('.rating').forEach(btn=>btn.onclick=()=>{schedule(id,btn.dataset.rating);revealed=false;queueIndex++;renderQueue(mode)});
}
function ratingButton(r,label,next){return `<button class="rating" data-rating="${r}"><strong>${label}</strong><small>${next}</small></button>`}
function preview(id,r){const s={...getState(id)};let interval=s.interval||0;if(r==='hard') interval=interval<1?1:Math.max(1,interval*1.4);if(r==='good') interval=interval<1?1:Math.max(1,interval*s.ease);if(r==='easy') interval=interval<1?3:Math.max(3,interval*s.ease*1.35);return humanInterval(interval)}

function renderSettings(){
  view.innerHTML=`<div class="card" style="max-width:560px"><h2>Daily new words</h2><p class="muted">How many new words should appear each day?</p><input id="new-per-day" type="number" min="1" max="100" value="${db.settings.newPerDay}" style="padding:12px;border:1px solid var(--line);border-radius:10px;width:120px"><button class="primary" id="save-settings" style="margin-left:10px">Save</button></div>`;
  document.querySelector('#save-settings').onclick=()=>{db.settings.newPerDay=Math.max(1,Math.min(100,Number(document.querySelector('#new-per-day').value)||10));save();alert('Saved');};
}

document.querySelector('#confirm-import').addEventListener('click',e=>{
  const titleVal=document.querySelector('#book-title').value.trim(); const raw=document.querySelector('#book-data').value.trim();
  if(!titleVal||!raw){e.preventDefault();alert('Please enter a title and at least one word.');return;}
  const ids=[];
  raw.split(/\n+/).map(x=>x.trim()).filter(Boolean).forEach(line=>{
    const [wordPart,ruPart='']=line.split('|').map(x=>x.trim()); if(!wordPart)return;
    let existing=Object.keys(db.words).find(id=>db.words[id].word.toLowerCase()===wordPart.toLowerCase());
    if(!existing){existing='w'+Date.now()+Math.random().toString(16).slice(2);db.words[existing]={word:wordPart,phonetic:'',pos:'',level:'',translation:ruPart,definition:'',example:'',exampleRu:''};}
    else if(ruPart&&!db.words[existing].translation) db.words[existing].translation=ruPart;
    ids.push(existing);
  });
  db.books.push({id:'b'+Date.now(),title:titleVal,category:'Custom',wordIds:[...new Set(ids)]});save();document.querySelector('#book-title').value='';document.querySelector('#book-data').value='';setTimeout(()=>setView('books'),0);
});

function humanInterval(days){if(days<1)return `${Math.max(1,Math.round(days*24*60))} min`;if(days<2)return '1 day';if(days<30)return `${Math.round(days)} days`;return `${Math.round(days/30)} mo`}
function formatDue(ts){const d=ts-Date.now();if(d<=0)return 'Due now';return humanInterval(d/DAY)}
function escapeHtml(s=''){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}



// ---------- My Words ----------
function ensureMyWordsBook(){
  let b=db.books.find(x=>x.id==='mywords');
  if(!b){
    b={id:'mywords',title:'My Words',category:'Personal',wordIds:[]};
    db.books.push(b);
    save();
  }
  return b;
}

function ensureWritingWordsBook(){
  let b=db.books.find(x=>x.id==='mywords-writing');
  if(!b){
    b={id:'mywords-writing',title:'My Words for Writing',category:'Personal',wordIds:[]};
    db.books.push(b);
    save();
  }
  return b;
}

let activePersonalBookId='mywords';

function getPersonalBook(bookId=activePersonalBookId){
  return bookId==='mywords-writing' ? ensureWritingWordsBook() : ensureMyWordsBook();
}

function personalBookTitle(bookId=activePersonalBookId){
  return bookId==='mywords-writing' ? 'My Words for Writing' : 'My Words';
}

function findWordByEnglish(text){
  const target=normalizeSpelling(text||'');
  const id=Object.keys(db.words).find(k=>normalizeSpelling(db.words[k].word||'')===target);
  return id ? {id, word:db.words[id]} : null;
}

function renderMyWords(bookId='mywords'){
  activePersonalBookId=bookId;
  const b=getPersonalBook(bookId);
  const pageName=personalBookTitle(bookId);

  title.textContent=pageName;
  subtitle.textContent='';

  const ids=[...new Set(b.wordIds||[])].filter(id=>db.words[id]);
  const dueIds=ids.filter(id=>getState(id).status!=='new' && getState(id).due<=Date.now());
  const learned=ids.filter(id=>getState(id).status!=='new').length;

  view.innerHTML=`<div class="study-back-row">
    <button type="button" class="ghost" id="mywords-back">← Back</button>
  </div>
  <div class="card">
    <h2>Search and add a word</h2>
    <div class="myword-search-row">
      <input id="myword-search" name="vocab_search" type="search" role="searchbox" class="spelling-input" placeholder="Type an English word" autocomplete="off" autocapitalize="none" spellcheck="false" data-1p-ignore data-lpignore="true">
      <button type="button" class="primary" id="myword-search-btn">Search</button>
    </div>
    <div id="myword-search-result"></div>
  </div>

  <div class="card" style="margin-top:18px">
    <h2>${escapeHtml(pageName)}</h2>
    <p class="muted">${ids.length} words · ${learned} learned · ${dueIds.length} due</p>
    <div class="corpus-actions">
      <button type="button" class="primary" id="mywords-study">Study new words</button>
      <button type="button" class="ghost" id="mywords-review">Review due (${dueIds.length})</button>
    </div>
    <div id="mywords-list" style="margin-top:18px">
      ${ids.length ? ids.map(id=>{
        const w=db.words[id];
        return `<div class="myword-row">
          <div><strong>${escapeHtml(w.word)}</strong><div class="muted">${escapeHtml(w.translation||'')}</div></div>
          <button type="button" class="word-audio-btn myword-audio" data-word="${escapeHtml(w.word)}">🔊</button>
        </div>`;
      }).join('') : '<p class="muted">No words added yet.</p>'}
    </div>
  </div>`;

  document.getElementById('mywords-back').onclick=()=>renderDashboard();
  document.getElementById('myword-search-btn').onclick=()=>searchMyWord();
  document.getElementById('myword-search').addEventListener('keydown',e=>{
    if(e.key==='Enter'){e.preventDefault();searchMyWord();}
  });
  document.querySelectorAll('.myword-audio').forEach(btn=>btn.onclick=()=>speakCorpus(btn.dataset.word));

  document.getElementById('mywords-study').onclick=()=>{
    const newIds=ids.filter(id=>getState(id).status==='new').slice(0,db.settings.newPerDay);
    if(!newIds.length){alert(`No new words are available in ${pageName} right now.`);return;}
    start538Recall(newIds);
  };
  document.getElementById('mywords-review').onclick=()=>{
    if(!dueIds.length){alert(`No words in ${pageName} are due right now.`);return;}
    start538Recall(dueIds);
  };
}

function myWordFallbackInfo(text){
  const existing=findWordByEnglish(text);
  if(existing){
    const w=existing.word;
    return {
      word:w.word, phonetic:w.phonetic||'', pos:w.pos||'',
      translation:w.translation||'', definition:w.definition||'',
      example:w.example||'', exampleRu:w.exampleRu||'',
      synonyms:w.synonyms||w.paraphrases||'', source:'local'
    };
  }
  return {word:text,phonetic:'',pos:'',translation:'',definition:'',example:'',exampleRu:'',synonyms:'',source:'none'};
}


async function fetchJSON(url, timeout=7000){
  const ctl=new AbortController();
  const timer=setTimeout(()=>ctl.abort(),timeout);
  try{
    const r=await fetch(url,{signal:ctl.signal,headers:{'Accept':'application/json'}});
    if(!r.ok) throw new Error('HTTP '+r.status);
    return await r.json();
  }finally{ clearTimeout(timer); }
}

async function translateToRussian(text){
  if(!text) return '';
  const urls=[
    'https://api.mymemory.translated.net/get?q='+encodeURIComponent(text)+'&langpair=en|ru'
  ];
  for(const u of urls){
    try{
      const j=await fetchJSON(u,7000);
      const t=j && j.responseData && j.responseData.translatedText;
      if(t && !/MYMEMORY WARNING/i.test(t)) return t;
    }catch(e){}
  }
  return '';
}

function pickDictionaryDefinition(data,q){
  if(!Array.isArray(data)||!data.length) return null;
  const entry=data[0];
  let chosen=null, fallback=null;
  for(const meaning of (entry.meanings||[])){
    for(const def of (meaning.definitions||[])){
      const row={
        pos:meaning.partOfSpeech||'',
        definition:def.definition||'',
        example:def.example||'',
        synonyms:[...(def.synonyms||[]),...(meaning.synonyms||[])]
      };
      if(!fallback) fallback=row;
      if(row.example&&!chosen) chosen=row;
    }
  }
  chosen=chosen||fallback;
  if(!chosen) return null;
  return {
    word:entry.word||q,
    phonetic:entry.phonetic||((entry.phonetics||[]).find(x=>x.text)||{}).text||'',
    pos:chosen.pos,
    definition:chosen.definition,
    example:chosen.example||'',
    synonyms:[...new Set((chosen.synonyms||[]).filter(Boolean))].slice(0,8)
  };
}

async function lookupDatamuse(q){
  // Datamuse is used as a second source for common words/synonyms.
  const rows=await fetchJSON('https://api.datamuse.com/words?sp='+encodeURIComponent(q)+'&md=dps&max=10',7000);
  if(!Array.isArray(rows)) return null;
  const exact=rows.find(x=>(x.word||'').toLowerCase()===q.toLowerCase())||rows[0];
  if(!exact) return null;
  const defs=exact.defs||[];
  let definition='',pos='';
  if(defs.length){
    const raw=defs[0];
    const parts=raw.split('\t');
    pos=parts.length>1?parts[0]:'';
    definition=parts.length>1?parts.slice(1).join(' '):raw;
  }
  let syn=[];
  try{
    const s=await fetchJSON('https://api.datamuse.com/words?rel_syn='+encodeURIComponent(q)+'&max=8',7000);
    if(Array.isArray(s)) syn=s.map(x=>x.word).filter(Boolean);
  }catch(e){}
  return {word:exact.word||q,phonetic:'',pos,definition,example:'',synonyms:syn};
}

async function lookupOnlineWord(q){
  let base=null;
  const errors=[];

  // Source 1: Free Dictionary API
  try{
    const data=await fetchJSON('https://api.dictionaryapi.dev/api/v2/entries/en/'+encodeURIComponent(q),7000);
    base=pickDictionaryDefinition(data,q);
  }catch(e){ errors.push('dictionary'); }

  // Source 2: Datamuse fallback. This is important when a local file:// page
  // cannot reach one of the APIs or that API has no entry.
  if(!base){
    try{ base=await lookupDatamuse(q); }catch(e){ errors.push('datamuse'); }
  }
  if(!base) throw new Error('lookup-failed:'+errors.join(','));

  // Prefer a real example. If neither public source provides one, use a small
  // common-word example bank before falling back to a neutral sentence.
  const examples={
    buy:'I need to buy some groceries after work.',
    work:'She works at a university.',
    me:'Please call me when you arrive.',
    make:'Can you make a cup of coffee?',
    take:'Please take your umbrella with you.',
    get:'I need to get some sleep.',
    go:'We go to the library every Saturday.',
    come:'Can you come to my office tomorrow?',
    give:'Please give me a few minutes.',
    find:'I cannot find my keys.',
    use:'You can use my computer.',
    need:'I need more time to finish this task.',
    want:'I want to learn English.',
    know:'Do you know the answer?',
    think:'I think this is a good idea.',
    see:'I can see the mountains from here.'
  };
  const example=base.example||examples[q.toLowerCase()]||`I learned how to use the word "${base.word}" in a sentence.`;

  // Translate the actual definition and actual example; do not generate IELTS/meta explanations.
  const [ruWord,ruDefinition,ruExample]=await Promise.all([
    translateToRussian(base.word),
    translateToRussian(base.definition||base.word),
    translateToRussian(example)
  ]);

  return {
    word:base.word,
    phonetic:base.phonetic||'',
    pos:base.pos||'',
    translation:ruWord||'',
    definition:ruDefinition||'',
    example,
    exampleRu:ruExample||'',
    synonyms:(base.synonyms||[]).join('; '),
    source:'online'
  };
}

function renderMyWordResult(info, message=''){
  const root=document.getElementById('myword-search-result');
  if(!root) return;
  root.innerHTML=`${message?`<p class="muted">${escapeHtml(message)}</p>`:''}
  <div class="myword-result">
    <div class="word">${escapeHtml(info.word)} <button type="button" class="word-audio-btn" id="myword-result-audio">🔊</button></div>
    ${info.phonetic?`<div class="phonetic">${escapeHtml(info.phonetic)}</div>`:''}
    ${info.pos?`<div class="muted">${escapeHtml(info.pos)}</div>`:''}

    <label>Russian meaning</label>
    <textarea id="myword-ru" placeholder="Русское значение">${escapeHtml(info.translation||'')}</textarea>

    <label>Russian note / explanation</label>
    <textarea id="myword-note" placeholder="Пояснение на русском">${escapeHtml(info.definition||'')}</textarea>

    <label>English example</label>
    <textarea id="myword-example" placeholder="Example sentence">${escapeHtml(info.example||'')}</textarea>

    <label>Russian translation of example</label>
    <textarea id="myword-example-ru" placeholder="Перевод примера">${escapeHtml(info.exampleRu||'')}</textarea>

    <label>Synonyms / paraphrases</label>
    <textarea id="myword-synonyms" placeholder="synonym 1; synonym 2">${escapeHtml(info.synonyms||'')}</textarea>

    <button type="button" class="primary" id="add-myword">Add to ${escapeHtml(personalBookTitle())}</button>
  </div>`;
  document.getElementById('myword-result-audio').onclick=()=>speakCorpus(info.word);
  document.getElementById('add-myword').onclick=()=>addMyWord(info.word,info.phonetic,info.pos);
}

async function searchMyWord(){
  const input=document.getElementById('myword-search');
  const q=(input.value||'').trim();
  if(!q) return;
  const root=document.getElementById('myword-search-result');
  const btn=document.getElementById('myword-search-btn');
  if(btn) btn.disabled=true;
  if(root) root.innerHTML='<p class="muted">Searching…</p>';

  // First reuse a complete local card if available. Otherwise query the online dictionary.
  const local=myWordFallbackInfo(q);
  const localComplete=local.source==='local' && local.translation && local.definition && local.example && local.exampleRu;
  if(localComplete){
    renderMyWordResult(local,'Found in your vocabulary database.');
    if(btn) btn.disabled=false;
    return;
  }

  try{
    const online=await lookupOnlineWord(q);
    // Preserve useful curated local synonyms, but do not reuse meta/IELTS sentences as examples.
    if(local.source==='local' && local.synonyms){
      const all=[...(online.synonyms||'').split(';'),...(local.synonyms||'').split(';')]
        .map(x=>x.trim()).filter(Boolean);
      online.synonyms=[...new Set(all)].slice(0,10).join('; ');
    }
    renderMyWordResult(online,'Online dictionary result.');
  }catch(e){
    if(local.source==='local'){
      // Local result may still be useful; blank out known meta examples so user doesn't get
      // “In IELTS Listening…” as a fake example.
      if(/^In IELTS/i.test(local.example||'')){
        local.example='';
        local.exampleRu='';
      }
      renderMyWordResult(local,'Online lookup failed. Showing the information already stored in this website; you can edit it before adding.');
    }else{
      renderMyWordResult(
        {word:q,phonetic:'',pos:'',translation:'',definition:'',example:'',exampleRu:'',synonyms:'',source:'none'},
        'Online dictionaries could not return this word. This can happen when the site is opened directly with file:// or an API is temporarily unavailable. You can retry or fill it manually.'
      );
    }
  }finally{
    if(btn) btn.disabled=false;
  }
}

function addMyWord(word,phonetic,pos){
  const bookId=activePersonalBookId || 'mywords';
  const b=getPersonalBook(bookId);
  const key=normalizeSpelling(word||'');

  // Each personal book is independent. The same English word may exist in
  // My Words and My Words for Writing without one hiding the other.
  let id=(b.wordIds||[]).find(existingId=>{
    const existing=db.words[existingId];
    return existing && normalizeSpelling(existing.word||'')===key;
  });

  if(!id){
    const prefix=bookId==='mywords-writing' ? 'myw_' : 'my_';
    id=prefix+Date.now()+'_'+Math.random().toString(36).slice(2,7);
    db.words[id]={
      word:word,
      phonetic:phonetic||'',
      pos:pos||'',
      level:personalBookTitle(bookId)
    };
    b.wordIds.push(id);
  }

  const w=db.words[id];
  w.word=word;
  w.phonetic=phonetic||w.phonetic||'';
  w.pos=pos||w.pos||'';
  w.translation=(document.getElementById('myword-ru').value||'').trim();
  w.definition=(document.getElementById('myword-note').value||'').trim();
  w.example=(document.getElementById('myword-example').value||'').trim();
  w.exampleRu=(document.getElementById('myword-example-ru').value||'').trim();
  w.synonyms=(document.getElementById('myword-synonyms').value||'').trim();

  getState(id);
  save();

  const addBtn=document.getElementById('add-myword');
  if(addBtn){
    addBtn.disabled=true;
    addBtn.textContent='Added ✓';
  }
  setTimeout(()=>renderMyWords(bookId),250);
}

window.renderMyWords=renderMyWords;
window.searchMyWord=searchMyWord;
window.addMyWord=addMyWord;

render();
