// Republic Quiz Data
// All country data and bonus questions

var quizData = [
    {
        country: "The Islamic Republic of Afghanistan",
        correct: "Islamic",
        options: ["Islamic", "Democratic", "Federal", "People's"],
        capital: "Kabul",
        capitalOptions: ["Kabul", "Islamabad", "Tehran", "Baghdad"],
        language: "Pashto",
        languageOptions: ["Pashto", "Dari", "Urdu", "Persian"],
        flag: "🇦🇫",
        flagOptions: ["🇦🇫", "🇵🇰", "🇮🇷", "🇮🇶"],
        population: 38928346,
        area: 652230
    },
    {
        country: "The People's Democratic Republic of Algeria",
        correct: "People's Democratic",
        options: ["People's Democratic", "Democratic", "Arab", "Federal"],
        capital: "Algiers",
        capitalOptions: ["Algiers", "Tunis", "Rabat", "Cairo"],
        language: "Arabic",
        languageOptions: ["Arabic", "French", "Berber", "Spanish"],
        flag: "🇩🇿",
        flagOptions: ["🇩🇿", "🇹🇳", "🇲🇦", "🇪🇬"],
        population: 43851044,
        area: 2381741
    },
    {
        country: "The People's Republic of Bangladesh",
        correct: "People's",
        options: ["People's", "Democratic", "Islamic", "Federal"],
        capital: "Dhaka",
        capitalOptions: ["Dhaka", "Islamabad", "New Delhi", "Kathmandu"],
        language: "Bengali",
        languageOptions: ["Bengali", "Hindi", "Urdu", "English"],
        flag: "🇧🇩",
        flagOptions: ["🇧🇩", "🇵🇰", "🇮🇳", "🇳🇵"],
        population: 164689383,
        area: 147570
    },
    {
        country: "The Federative Republic of Brazil",
        correct: "Federative",
        options: ["Federative", "Federal", "Democratic", "United"],
        capital: "Brasília",
        capitalOptions: ["Brasília", "Rio de Janeiro", "São Paulo", "Buenos Aires"],
        language: "Portuguese",
        languageOptions: ["Portuguese", "Spanish", "English", "French"],
        flag: "🇧🇷",
        flagOptions: ["🇧🇷", "🇦🇷", "🇨🇴", "🇻🇪"],
        population: 215313498,
        area: 8515767
    },
    {
        country: "The People's Republic of China",
        correct: "People's",
        options: ["People's", "Communist", "Democratic", "Socialist"],
        capital: "Beijing",
        capitalOptions: ["Beijing", "Shanghai", "Tokyo", "Seoul"],
        language: "Mandarin Chinese",
        languageOptions: ["Mandarin Chinese", "Cantonese", "Japanese", "Korean"],
        flag: "🇨🇳",
        flagOptions: ["🇨🇳", "🇯🇵", "🇰🇷", "🇹🇼"],
        population: 1439323776,
        area: 9596960
    },
    {
        country: "The Democratic Republic of the Congo",
        correct: "Democratic",
        options: ["Democratic", "Federal", "People's", "Central"],
        capital: "Kinshasa",
        capitalOptions: ["Kinshasa", "Brazzaville", "Luanda", "Libreville"],
        language: "Lingala",
        languageOptions: ["Lingala", "French", "Swahili", "Kikongo"],
        flag: "🇨🇩",
        flagOptions: ["🇨🇩", "🇨🇬", "🇦🇴", "🇬🇦"],
        population: 89561403,
        area: 2344858
    },
    {
        country: "The Arab Republic of Egypt",
        correct: "Arab",
        options: ["Arab", "Islamic", "Democratic", "United"],
        capital: "Cairo",
        capitalOptions: ["Cairo", "Alexandria", "Khartoum", "Tripoli"],
        language: "Arabic",
        languageOptions: ["Arabic", "English", "French", "Coptic"],
        flag: "🇪🇬",
        flagOptions: ["🇪🇬", "🇸🇩", "🇱🇾", "🇸🇾"],
        population: 102334404,
        area: 1001450
    },
    {
        country: "The Federal Democratic Republic of Ethiopia",
        correct: "Federal Democratic",
        options: ["Federal Democratic", "Democratic", "Federal", "People's"],
        capital: "Addis Ababa",
        capitalOptions: ["Addis Ababa", "Nairobi", "Khartoum", "Asmara"],
        language: "Amharic",
        languageOptions: ["Amharic", "Oromo", "English", "Arabic"],
        flag: "🇪🇹",
        flagOptions: ["🇪🇹", "🇰🇪", "🇸🇩", "🇪🇷"],
        population: 117876227,
        area: 1104300
    },
    {
        country: "The Federal Republic of Germany",
        correct: "Federal",
        options: ["Federal", "Democratic", "United", "Social"],
        capital: "Berlin",
        capitalOptions: ["Berlin", "Munich", "Frankfurt", "Vienna"],
        language: "German",
        languageOptions: ["German", "English", "French", "Dutch"],
        flag: "🇩🇪",
        flagOptions: ["🇩🇪", "🇦🇹", "🇳🇱", "🇧🇪"],
        population: 83783942,
        area: 357022
    },
    {
        country: "The Co-operative Republic of Guyana",
        correct: "Co-operative",
        options: ["Co-operative", "Democratic", "Federal", "United"],
        capital: "Georgetown",
        capitalOptions: ["Georgetown", "Paramaribo", "Cayenne", "Port of Spain"],
        language: "English",
        languageOptions: ["English", "Dutch", "Spanish", "Portuguese"],
        flag: "🇬🇾",
        flagOptions: ["🇬🇾", "🇸🇷", "🇬🇫", "🇹🇹"],
        population: 786552,
        area: 214969
    },
    {
        country: "The Islamic Republic of Iran",
        correct: "Islamic",
        options: ["Islamic", "Persian", "Democratic", "Federal"],
        capital: "Tehran",
        capitalOptions: ["Tehran", "Isfahan", "Baghdad", "Kabul"],
        language: "Persian",
        languageOptions: ["Persian", "Arabic", "Turkish", "Kurdish"],
        flag: "🇮🇷",
        flagOptions: ["🇮🇷", "🇮🇶", "🇹🇷", "🇦🇫"],
        population: 83992949,
        area: 1648195
    },
{ country: "The Democratic People's Republic of Korea", correct: "Democratic People's", options: ["Democratic People's", "People's", "Socialist", "Communist"], capital: "Pyongyang", capitalOptions: ["Pyongyang", "Seoul", "Beijing", "Tokyo"], language: "Korean", languageOptions: ["Korean", "Chinese", "Japanese", "Russian"], flag: "kp", flagOptions: ["kp", "kr", "cn", "jp"] },
    {
        country: "The Islamic Republic of Mauritania",
        correct: "Islamic",
        options: ["Islamic", "Arab", "Democratic", "Federal"],
        capital: "Nouakchott",
        capitalOptions: ["Nouakchott", "Dakar", "Bamako", "Rabat"],
        language: "Arabic",
        languageOptions: ["Arabic", "French", "Wolof", "Berber"],
        flag: "🇲🇷",
        flagOptions: ["🇲🇷", "🇸🇳", "🇲🇱", "🇲🇦"],
        population: 4649658,
        area: 1030700
    },
    {
        country: "The Federal Republic of Nigeria",
        correct: "Federal",
        options: ["Federal", "Democratic", "United", "People's"],
        capital: "Abuja",
        capitalOptions: ["Abuja", "Lagos", "Accra", "Yaoundé"],
        language: "Hausa",
        languageOptions: ["Hausa", "Yoruba", "Igbo", "English"],
        flag: "🇳🇬",
        flagOptions: ["🇳🇬", "🇬🇭", "🇨🇲", "🇧🇯"],
        population: 218541212,
        area: 923768
    },
    {
        country: "The Islamic Republic of Pakistan",
        correct: "Islamic",
        options: ["Islamic", "Democratic", "Federal", "People's"],
        capital: "Islamabad",
        capitalOptions: ["Islamabad", "Karachi", "Lahore", "New Delhi"],
        language: "Punjabi",
        languageOptions: ["Punjabi", "Urdu", "Sindhi", "English"],
        flag: "🇵🇰",
        flagOptions: ["🇵🇰", "🇮🇳", "🇧🇩", "🇦🇫"],
        population: 220892340,
        area: 881913
    },
    {
        country: "The Democratic Republic of Sao Tome and Principe",
        correct: "Democratic",
        options: ["Democratic", "Federal", "Island", "Atlantic"],
        capital: "São Tomé",
        capitalOptions: ["São Tomé", "Malabo", "Libreville", "Luanda"],
        language: "Portuguese",
        languageOptions: ["Portuguese", "Spanish", "French", "English"],
        flag: "🇸🇹",
        flagOptions: ["🇸🇹", "🇬🇶", "🇬🇦", "🇦🇴"],
        population: 219159,
        area: 964
    },
    {
        country: "The Federal Republic of Somalia",
        correct: "Federal",
        options: ["Federal", "Democratic", "Islamic", "Horn"],
        capital: "Mogadishu",
        capitalOptions: ["Mogadishu", "Addis Ababa", "Nairobi", "Djibouti"],
        language: "Somali",
        languageOptions: ["Somali", "Arabic", "English", "Amharic"],
        flag: "🇸🇴",
        flagOptions: ["🇸🇴", "🇪🇹", "🇰🇪", "🇩🇯"],
        population: 15893222,
        area: 637657
    },
    {
        country: "The Democratic Socialist Republic of Sri Lanka",
        correct: "Democratic Socialist",
        options: ["Democratic Socialist", "Socialist", "Democratic", "Island"],
        capital: "Colombo",
        capitalOptions: ["Colombo", "New Delhi", "Dhaka", "Malé"],
        language: "Sinhala",
        languageOptions: ["Sinhala", "Tamil", "English", "Hindi"],
        flag: "🇱🇰",
        flagOptions: ["🇱🇰", "🇮🇳", "🇧🇩", "🇲🇻"],
        population: 21413249,
        area: 65610
    },
    {
        country: "The United Republic of Tanzania",
        correct: "United",
        options: ["United", "Federal", "Democratic", "East African"],
        capital: "Dodoma",
        capitalOptions: ["Dodoma", "Dar es Salaam", "Nairobi", "Kampala"],
        language: "Swahili",
        languageOptions: ["Swahili", "English", "Arabic", "French"],
        flag: "🇹🇿",
        flagOptions: ["🇹🇿", "🇰🇪", "🇺🇬", "🇷🇼"],
        population: 59734218,
        area: 947300
    },
    {
        country: "The Democratic Republic of Timor-Leste",
        correct: "Democratic",
        options: ["Democratic", "Federal", "Independent", "East"],
        capital: "Dili",
        capitalOptions: ["Dili", "Jakarta", "Kuala Lumpur", "Manila"],
        language: "Tetum",
        languageOptions: ["Tetum", "Portuguese", "Indonesian", "English"],
        flag: "🇹🇱",
        flagOptions: ["🇹🇱", "🇮🇩", "🇲🇾", "🇵🇭"],
        population: 1318445,
        area: 14874
    },
    {
        country: "The Oriental Republic of Uruguay",
        correct: "Oriental",
        options: ["Oriental", "Eastern", "Democratic", "Federal"],
        capital: "Montevideo",
        capitalOptions: ["Montevideo", "Buenos Aires", "Asunción", "Santiago"],
        language: "Spanish",
        languageOptions: ["Spanish", "Portuguese", "English", "Italian"],
        flag: "🇺🇾",
        flagOptions: ["🇺🇾", "🇦🇷", "🇵🇾", "🇨🇱"],
        population: 3473730,
        area: 176215
    },
    {
        country: "The Bolivarian Republic of Venezuela",
        correct: "Bolivarian",
        options: ["Bolivarian", "Democratic", "Socialist", "South American"],
        capital: "Caracas",
        capitalOptions: ["Caracas", "Bogotá", "Georgetown", "Brasília"],
        language: "Spanish",
        languageOptions: ["Spanish", "Portuguese", "English", "Indigenous"],
        flag: "🇻🇪",
        flagOptions: ["🇻🇪", "🇨🇴", "🇬🇾", "🇧🇷"],
        population: 28435940,
        area: 912050
    },
    {
        country: "The Socialist Republic of Vietnam",
        correct: "Socialist",
        options: ["Socialist", "Democratic", "People's", "Communist"],
        capital: "Hanoi",
        capitalOptions: ["Hanoi", "Ho Chi Minh City", "Bangkok", "Phnom Penh"],
        language: "Vietnamese",
        languageOptions: ["Vietnamese", "Chinese", "French", "English"],
        flag: "🇻🇳",
        flagOptions: ["🇻🇳", "🇹🇭", "🇰🇭", "🇱🇦"],
        population: 97338579,
        area: 331210
    }
];

// Super Bonus Questions
var superBonusQuestions = [
    {
        question: "Which republic has the largest land area?",
        options: ["Brazil", "China", "Algeria", "Democratic Republic of Congo"],
        correct: "Brazil",
        explanation: "Brazil has 8.5 million km², making it the largest republic by area."
    },
    {
        question: "Which republic has the largest population?",
        options: ["China", "Nigeria", "Pakistan", "Bangladesh"],
        correct: "China",
        explanation: "China has over 1.4 billion people, the world's largest population."
    },
    {
        question: "Which republic has the smallest population?",
        options: ["Sao Tome and Principe", "Guyana", "Timor-Leste", "Uruguay"],
        correct: "Sao Tome and Principe",
        explanation: "Sao Tome and Principe has only about 219,000 people."
    },
    {
        question: "Which republic is most densely populated (people per km²)?",
        options: ["Bangladesh", "South Korea", "Sri Lanka", "Germany"],
        correct: "Bangladesh",
        explanation: "Bangladesh has over 1,100 people per km², one of the highest in the world."
    },
    {
        question: "Which republic was the first to adopt the 'Islamic Republic' designation?",
        options: ["Pakistan", "Iran", "Mauritania", "Afghanistan"],
        correct: "Pakistan",
        explanation: "Pakistan first adopted 'Islamic Republic' in its 1956 constitution."
    },
    {
        question: "Which republic spans the most time zones?",
        options: ["China", "Brazil", "Germany", "Algeria"],
        correct: "China",
        explanation: "China spans 5 time zones but officially uses only Beijing Time."
    },
    {
        question: "Which two republics were once united as one country?",
        options: ["North & South Korea", "Germany & Austria", "Bangladesh & Pakistan", "Both A and C"],
        correct: "Both A and C",
        explanation: "Korea was divided in 1945, and Bangladesh was East Pakistan until 1971."
    }
];
