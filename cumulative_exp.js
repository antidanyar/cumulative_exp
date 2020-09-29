var shuffleSequence = seq("setcounter", "intro", "instructions", sepWith("sep", seq("practice", rshuffle(seq(rshuffle("filler-GOOD", "filler-BAD")), seq(rshuffle("has_D", "no_D"))))));
var practiceItemTypes = ["practice"];
var practiceItemMessage = "Тренировочные предложения";
var completionMessage = "Эксперимент завершён, результаты сохранены на сервере. Спасибо за участие!";

var defaults = [
    "Separator", {
        transfer: 1000,
        ignoreFailure: true,
        normalMessage: "Загрузка следующего предложения...",
    },
    "FlashSentence", {
        timeout: 1500
    },
    "AcceptabilityJudgment", {
        q: "",
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        leftComment: "плохо",
        rightComment: "хорошо",
        timeout: 20000,
        mode: "self-paced reading"
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [
    ["sep", "Separator", { }],
    ["setcounter", "__SetCounter__", { }],
    ["intro", "Form", {
        html: { include: "intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Неправильное значение возраста: \u2018age\u2019"; }
        }
    } ],
    ["instructions", "Message", {html: { include: "instructions.html" }} ],

    //
    // Шесть тестовых предложений
    //
                
    ["practice", "FlashSentence", {s: "Это тренировочные предложения, которые позволят вам привыкнуть к такому способу чтения и оценке предложений."}],
    ["practice", "FlashSentence", {s: "Все испытуемые лингвистов любят проходить забавные эксперименты со смешными стимулами."},
                 "Question", {hasCorrect: false, randomOrder: false,
                              q: "Вы — испытуемый лингвистов. Вы любите проходить эксперименты?",
                              as: ["Да", "Очень!"]}],
    ["practice", "FlashSentence", {s: "Каждому следующему предложению нужно будет поставить оценку по шкале от 1 до 7."}],
    ["practice", "AcceptabilityJudgment", {s: "Этому предложению нужно поставить высокую оценку, в нём всё хорошо."}],
    ["practice", "AcceptabilityJudgment", {s: "Предложение это ужасный, ставить единица нужно, тут всё крайне плохо."}],
    ["practice", "AcceptabilityJudgment", {s: "Это последнее тренировочное предложение, после которого начнётся эксперимент."}],
    ["practice", "FlashSentence", {s: "Мы начинаем!"}],
    
    //16 предложений с наличием/отсутствием D-элемента
    
    [["has_D", 1],  "AcceptabilityJudgment", {s: "Такие коврики ткут даже из полиэтиленовых пакетов – одна бабушка насобирала их в реке!"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что ткут из полиэтилена?",
                    as: ["коврики", "шубы", "шторы"]}],
    [["no_D", 1],   "AcceptabilityJudgment", {s: "Такие коврики ткут даже из полиэтилена - одна бабушка насобирала пакетов в реке!"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что ткут из полиэтилена?",
                    as: ["коврики", "шубы", "шторы"]}],

    [["has_D", 2],  "AcceptabilityJudgment", {s: "Я решила попробовать их приготовить, и насобирала этих ярких грибов."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какие грибы были собраны?",
                    as: ["яркие", "белые", "вкусные"]}],
    [["no_D", 2],   "AcceptabilityJudgment", {s: "Я решила попробовать их приготовить, и насобирала для этого ярких грибов."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какие грибы были собраны?",
                    as: ["яркие", "белые", "вкусные"]}],

    [["has_D", 3],  "AcceptabilityJudgment", {s: "Кажется, будто герой другой пьесы, пытаясь изобрести вечный двигатель, напридумывал этих милых безделиц."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Герой чего пытался изобрести вечный двигатель?",
                    as: ["другой пьесы", "другой постановки", "другого фильма"]}],
    [["no_D", 3],   "AcceptabilityJudgment", {s: "Кажется, будто герой другой пьесы, пытаясь изобрести вечный двигатель, напридумывал милых безделиц."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Герой чего пытался изобрести вечный двигатель?",
                    as: ["другой пьесы", "другой постановки", "другого фильма"]}],

    [["has_D", 4],  "AcceptabilityJudgment", {s: "Мне кажется, что он просто напридумывал этих слов прямо сейчас."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Чего он напридумывал?",
                    as: ["слов", "небылиц", "россказней"]}],
    [["no_D", 4],   "AcceptabilityJudgment", {s: "Мне кажется, что он просто напридумывал слов прямо сейчас, чтобы нас обмануть."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Чего он напридумывал?",
                    as: ["слов", "небылиц", "россказней"]}],

    [["has_D", 5],  "AcceptabilityJudgment", {s: "Дочка освоила планшет и скорее всего наприглашала вас куда ни попадя."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что освоила дочка?",
                    as: ["планшет", "смартфон", "компьютер"]}],
    [["no_D", 5],   "AcceptabilityJudgment", {s: "Дочка освоила планшет и скорее всего наприглашала друзей куда ни попадя."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что освоила дочка?",
                    as: ["планшет", "смартфон", "компьютер"]}],

    [["has_D", 6],  "AcceptabilityJudgment", {s: "На эпизодические роли Люк Бессон наприглашал своих друзей-режиссёров."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "На какие роли Люк Бессон приглашал своих друзей?",
                    as: ["эпизодические", "второстепенные", "второго плана"]}],
    [["no_D", 6],   "AcceptabilityJudgment", {s: "На эпизодические роли Люк Бессон наприглашал друзей-режиссёров."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "На какие роли Люк Бессон приглашал своих друзей?",
                    as: ["эпизодические", "второстепенные", "второго плана"]}], 

    [["has_D", 7],  "AcceptabilityJudgment", {s: "Я по твоей ссылке и с широтой русской души назаказывала тех трав, что по описанию мне понравились."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что понравилось по описанию?",
                    as: ["травы", "грибы", "сладости"]}],
    [["no_D", 7],   "AcceptabilityJudgment", {s: "Я по твоей ссылке и с широтой русской души назаказывала трав, которые по описанию мне понравились."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что понравилось по описанию?",
                    as: ["травы", "грибы", "сладости"]}],

    [["has_D", 8],  "AcceptabilityJudgment", {s: "Навезли нас сюда со всей страны, а потом бросили."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Куда навезли?",
                    as: ["сюда", "в Сибирь", "туда"]}],
    [["no_D", 8],   "AcceptabilityJudgment", {s: "Навезли людей сюда со всей страны, а потом бросили."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Куда навезли?",
                    as: ["сюда", "в Сибирь", "туда"]}],  


    //16 пар филлеров 
                        
    [["filler-GOOD", 9], "AcceptabilityJudgment", {s: "Этот красивый мальчик хорошо рисует, прямо как да Винчи."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "С кем идёт сравнение?",
                    as: ["с да Винчи", "в Айвазовским", "с Поллоком"]}],
    [["filler-BAD", 9], "AcceptabilityJudgment", {s: "Этот красивый девочка хорошо рисует, прямо как да Винчи."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "С кем идёт сравнение?",
                    as: ["с да Винчи", "в Айвазовским", "с Поллоком"]}],

    [["filler-GOOD", 10], "AcceptabilityJudgment", {s: "На улице дрянная погода. Моросит."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какая на улице погода?",
                    as: ["дрянная", "так себе", "хорошая"]}],
    [["filler-BAD", 10], "AcceptabilityJudgment", {s: "На улице дрянная погода. Оно моросит."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какая на улице погода?",
                    as: ["дрянная", "так себе", "хорошая"]}],

    [["filler-GOOD", 11], "AcceptabilityJudgment", {s: "Кого лектор наругал, а семинарист похвалил?"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Кто наругал?",
                    as: ["лектор", "семинарист", "декан"]}],
    [["filler-BAD", 11], "AcceptabilityJudgment", {s: "Кого лектор наругал, а семинарист поставил 5?"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Кто наругал?",
                    as: ["лектор", "семинарист", "декан"]}],

    [["filler-GOOD", 12], "AcceptabilityJudgment", {s: "Мне кажется, мы нашли что-то невероятное, на этом можно заработать миллионы!"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Сколько можно заработать на находке?",
                    as: ["миллионы", "горы золота", "десятки тысяч"]}],
    [["filler-BAD", 12], "AcceptabilityJudgment", {s: "Мне кажется, мы нашли что-либо невероятное, на этом можно заработать миллионы!"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Сколько можно заработать на находке?",
                    as: ["миллионы", "горы золота", "десятки тысяч"]}],

    [["filler-GOOD", 13], "AcceptabilityJudgment", {s: "Эти дураки всё сломали ещё вчера, машину уже не починить."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что сломалось?",
                    as: ["машина", "велосипед", "мотоцикл"]}],
    [["filler-BAD", 13], "AcceptabilityJudgment", {s: "Эти дураки всё сломают ещё вчера, машину уже не починить."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что сломалось?",
                    as: ["машина", "велосипед", "мотоцикл"]}],

    [["filler-GOOD", 14], "AcceptabilityJudgment", {s: "Тот факт, что Иван не пришёл, ни на что не влияет, мы все равно его побъём."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что сделают с Иваном?",
                    as: ["побьют", "утопят", "застрелят"]}],
    [["filler-BAD", 14], "AcceptabilityJudgment", {s: "Тот факт, что Иван не пришёл, ни на что влияет, мы все равно его побъём."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что сделают с Иваном?",
                    as: ["побьют", "утопят", "застрелят"]}],

    [["filler-GOOD", 15], "AcceptabilityJudgment", {s: "Что Коля съел, выпив лимонад?"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что Коля выпил?",
                    as: ["лимонад", "кофе", "сок"]}],
    [["filler-BAD", 15], "AcceptabilityJudgment", {s: "Что Коля съел и выпил лимонад?"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что Коля выпил?",
                    as: ["лимонад", "кофе", "сок"]}], 

    [["filler-GOOD", 16], "AcceptabilityJudgment", {s: "На улице стемнело, и ребята достали фейерверки."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что достали ребята?",
                    as: ["фейерверки", "лопаты", "фонарики"]}],
    [["filler-BAD", 16], "AcceptabilityJudgment", {s: "Улица стемнела, и ребята достали фейерверки."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что достали ребята?",
                    as: ["фейерверки", "лопаты", "фонарики"]}],

    [["filler-GOOD", 17], "AcceptabilityJudgment", {s: "Этот новый дом купила какая-то богатенькая дама."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Кто купил дом?",
                    as: ["богатая дама", "богатый бизнесмен", "семейная пара"]}],
    [["filler-BAD", 17], "AcceptabilityJudgment", {s: "Этот новое дом купила какая-то богатенькая дама."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Кто купил дом?",
                    as: ["богатая дама", "богатый бизнесмен", "семейная пара"]}],

    [["filler-GOOD", 18], "AcceptabilityJudgment", {s: "Завтра я поеду к бабушке, она мне испечет пирожков с капустой."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какие пирожки испечет бабушка?",
                    as: ["с капустой", "в мясом", "с брусникой"]}],
    [["filler-BAD", 18], "AcceptabilityJudgment", {s: "Завтра я поехал к бабушке, она мне испечет пирожков с капустой."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какие пирожки испечет бабушка?",
                    as: ["с капустой", "в мясом", "с брусникой"]}],

    [["filler-GOOD", 19], "AcceptabilityJudgment", {s: "Таня купила такие красивые сережки, причем не кому-то, а самой себе!"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какие сережки купила Таня?",
                    as: ["красивые", "золотые", "дорогие"]}],
    [["filler-BAD", 19], "AcceptabilityJudgment", {s: "Таня купила такие красивые сережки, причем не кому-то, а самому себе!"},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какие сережки купила Таня?",
                    as: ["красивые", "золотые", "дорогие"]}],

    [["filler-GOOD", 20], "AcceptabilityJudgment", {s: "Никто не знает, где работает его мама."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что никто не знает о его маме?",
                    as: ["где она работает", "сколько она задолжала", "какие пироги она любит"]}],
    [["filler-BAD", 20], "AcceptabilityJudgment", {s: "Никто не знает, работает его мама где."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что никто не знает о его маме?",
                    as: ["где она работает", "сколько она задолжала", "какие пироги она любит"]}],

    [["filler-GOOD", 21], "AcceptabilityJudgment", {s: "Иван прочитал \"Евгения Онегина\" за пять дней."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что читал Иван?",
                    as: ["\"Евгения Онегина\"", "\"Мертвые души\"", "\"Преступление и наказание\""]}],
    [["filler-BAD", 21], "AcceptabilityJudgment", {s: "Иван читал \"Евгения Онегина\" за пять дней."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Что читал Иван?",
                    as: ["\"Евгения Онегина\"", "\"Мертвые души\"", "\"Преступление и наказание\""]}],

    [["filler-GOOD", 22], "AcceptabilityJudgment", {s: "Женя посоветовал ему самому с этим разобраться."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Кто дал ему совет?",
                    as: ["Женя", "Вася", "Коля"]}],
    [["filler-BAD", 22], "AcceptabilityJudgment", {s: "Женя посоветовал ему сам с этим разобраться."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Кто дал ему совет?",
                    as: ["Женя", "Вася", "Коля"]}],

    [["filler-GOOD", 23], "AcceptabilityJudgment", {s: "Лёша пробежал 100 метров за 10 секунд."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какую дистанцию бежал Лёша?",
                    as: ["100 метров", "50 метров", "20 метров"]}],
    [["filler-BAD", 23], "AcceptabilityJudgment", {s: "Лёша бежал 100 метров за 10 секунд."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какую дистанцию бежал Лёша?",
                    as: ["100 метров", "50 метров", "20 метров"]}],

    [["filler-GOOD", 24], "AcceptabilityJudgment", {s: "Следователь спросил у него, что он делал в ночь с 15 на 16."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какой ночью интересовался следователь?",
                    as: ["с 15 на 16", "с 16 на 17", "с 10 на 11"]}],
    [["filler-BAD", 24], "AcceptabilityJudgment", {s: "Следователь спросил у него, он делал что в ночь с 15 на 16."},
                    "Question", {hasCorrect: true, randomOrder: true,
                    q: "Какой ночью интересовался следователь?",
                    as: ["с 15 на 16", "с 16 на 17", "с 10 на 11"]}]

];