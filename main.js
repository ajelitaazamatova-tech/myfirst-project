//персы
const characters = [
    {
        name: "Деймон Сальваторе",
        type: "vampire",
        actor: "Иэн Сомерхолдер",
        role: "Вампир",
        image: "https://citaty.info/files/characters/16121.jpg",
        bio: "Импульсивный, харизматичный и опасный старший брат Сальваторе. Начинал как главный антагонист, но его глубокая любовь к Елене Гилберт раскрыла в нём способность к самопожертвованию."
    },
    {
        name: "Стефан Сальваторе",
        type: "vampire",
        actor: "Пол Уэсли",
        role: "Вампир / Потрошитель",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4b/Stefan_Salvatore.png",
        bio: "Благородный и мучимый совестью младший брат. На протяжении веков пытается контролировать свою жажду крови, избегая тёмного прошлого 'Потрошителя'."
    },
    {
        name: "Елена Гилберт",
        type: "human",
        actor: "Нина Добрев",
        role: "Человек / Двойник",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ugAd11iMdktvBdTp9dsoP0r9m1w1hFcO2QEBQlP0jA&s",
        bio: "Центральная героиня истории. Старшая сестра Джереми, потерявшая родителей. Оказывается в центре противостояния братьев Сальваторе и сверхъестественного мира."
    },
    {
        name: "Кэтрин Пирс (Катерина Петрова)",
        type: "vampire",
        actor: "Нина Добрев",
        role: "Двойник / Вампир",
        image: "https://gbaike-image.cdn.bcebos.com/b3fb43166d224f4aa432f3b809f790529922d1f6/b3fb43166d224f4aa432f3b809f790529922d1f6_url?x-bce-process=image/format,f_auto/resize,m_lfit,h_400,limit_1",
        bio: "Хитрая, расчетливая и роковая женщина, обратившая Стефана и Деймона в 1864 году. Мастер выживания, побегавшая от Клауса более 500 лет."
    },
    {
        name: "Никлаус Майклсон",
        type: "hybrid",
        actor: "Джозеф Морган",
        role: "Древний Гибрид",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4VWQPhi4qptRCrhkcZ9JEXllfyon4GMymuQWYUirYKxUuR2MK9gGE7qqZR_FySsyQDt9Pualb9Z5FL_Jv2ExBev8yI9_1b59zbFf3783&s=10",
        bio: "Первородный гибрид вампира и оборотня. Обладает невероятной силой, жестокостью и страстью к искусству. Стремится создать собственную расу гибридов."
    },
    {
        name: "Элайджа Майклсон",
        type: "hybrid",
        actor: "Дэниел Гиллис",
        role: "Древний Вампир",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRocQt-j5817GQYxkYeYEuepOYGxWEcLM17Hei3JgvMkIDHLS7i3uHu4IWT0I2HImhZQHH874gUBbk-AldqQlp12fkIzPaAYp-2nm91pvXT&s=10",
        bio: "Самый честный и элегантный из Первородных. Связан глубоким чувством чести и преданностью семье, несмотря на тёмную природу своего брата Клауса."
    },
    {
        name: "Ребекка Майклсон",
        type: "vampire",
        actor: "Клэр Холт",
        role: "Древний Вампир",
        image: "https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/1e834606-258c-4c00-afb2-cf25b212b324.jpeg",
        bio: "Сестра Клауса и Элайджи. Мечтает о простой человеческой жизни, любви и семье, несмотря на статус одного из самых опасных существ на Земле."
    },
    {
        name: "Бонни Беннет",
        type: "witch",
        actor: "Катерина Грэхэм",
        role: "Могущественная Ведьма",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3Hwf3zMPgzlcid1JV6AbdEm2DnJEsS1HDFArWDaVBefS7RaS0kcMZO-bsStJOAiXrwYaxnS9idU-bzLdfkoa0le_eZ0xU7ZC7x1ejRy86Q&s=10",
        bio: "Лучшая подруга Елены. Наследница древнего рода ведьм Беннет. Постоянно жертвует собой ради спасения близких."
    },
    {
        name: "Кэролайн Форбс",
        type: "vampire",
        actor: "Кэндис Кинг",
        role: "Вампир",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6dbnS7DaWGWZzipHoOHpukCGyGam73P3IfI53wmIZFYypzdwBoBE1uQP--XhrkzyyjydlQc12gLScez2BDyqX-xWqHfIjTK2-WSxoCxw&s=10",
        bio: "Дочь шерифа города. Превращение в вампира сделало её более сильной, уверенной в себе и организованной личностью."
    },
    {
        name: "Тайлер Локвуд",
        type: "hybrid",
        actor: "Майкл Тревино",
        role: "Оборотень / Гибрид",
        image: "https://citaty.info/files/characters/54935.png",
        bio: "Сын мэра Мистик Фоллс. Активировал проклятие оборотня, а затем стал первым успешным гибридом Клауса."
    },
    {
        name: "Мэтт Донован",
        type: "human",
        actor: "Зак Рериг",
        role: "Человек",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCZpvdcUCMGr2x5wqm21O_t4jEz3XqnWuXWajskN10d0pS7c4OtJfKgTQPS5md9598X7MMJZP606mYtem20pa4ln-nuY9LueSFvNd4h1i&s=10",
        bio: "Единственный из главных героев, который остался верным человеческой природе от начала и до конца, став шерифом Мистик Фоллс."
    },
    {
        name: "Аларик Зальцман",
        type: "human",
        actor: "Мэттью Дэвис",
        role: "Охотник / Учитель",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYvCm0fh7DMYznY1rrIAucQU0eOa_UEjgcNoP00ij_brUCiMWE-a-l_82PqaPP68gD_sAkxuasw_Dw8GPt3uky24J9Br9-HF3aT7eCkAqFQ&s=10",
        bio: "Учитель истории и охотник на вампиров, ставший опекуном Елены и Джереми, а позже наставником для многих сверхъестественных существ."
    },
    {
        name: "Хейли Маршалл",
        type: "hybrid",
        actor: "Фиби Тонкин",
        role: "Оборотень / Гибрид",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7Nq4Fc_yNllKCgJagvMik3KbVC084C3yEm3HRsyr_ISqvdhRoPR_KuPTXxolvHRH3WYD9WsFT9LMPtjYrge2s83xDmou4kbw0kiphrxucA&s=10",
        bio: "Сильная и независимая волчица, искавшая свою семью. Мать Хоуп Майклсон, объединившая стаи оборотней."
    },
    {
        name: "Джереми Гилберт",
        type: "human",
        actor: "Стивен Р. Маккуин",
        role: "Охотник из Пятерки",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlsrzXWfleHzHf9liK_HZgkxwSAgeL3Ost8Bkcla0Ly-EOkg8DCmnU1VJM1XanhtHYSp3EsOHeVbpxBAzNeuP2OAjpayhONger6acTSnJnKA&s=10",
        bio: "Младший брат Елены. Прошел путь от растерянного подростка до одного из легендарных охотников на вампиров из 'Пятерки'."
    },
    {
        name: "Лекси Брэнсон",
        type: "vampire",
        actor: "Ариэль Кеббел",
        role: "Вампир",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcy-3lSy5I5XhMPOQVUS3A3dUGAJawqEkxl5Oq3ZxYoKDD1XYw9UrtA2r79vSNT1ApFADaR7wv_f1alQuiTWST3IN1wQPIADWvt4l_N1Syg&s=10",
        bio: "Старая преданная подруга Стефана, помогавшая ему справляться с жаждой крови и сохранять человечность на протяжении веков."
    }
];

// хронология сезонов
const seasons = [
    { 
        title: "Сезон 1: Знакомство с тенью", 
        year: "2009–2010", 
        desc: "Елена Гилберт знакомится с таинственным Стефаном Сальваторе и его опасным братом Деймоном. Раскрываются тайны склепа под Мистик Фоллс, Бонни открывает в себе магию ведьм, а в финале сезона в город возвращается коварный двойник — Кэтрин Пирс." 
    },
    { 
        title: "Сезон 2: Проклятие Солнца и Луны", 
        year: "2010–2011", 
        desc: "Кэтрин превращает Кэролайн в вампира. В Мистик Фоллс появляются Первородные вампиры — Элайджа и Клаус. Клаусу нужен двойник (Елена) для ритуала снятия проклятия и пробуждения своей сущности гибрида. Погибает тетя Дженна, а Стефан вынужден уйти с Клаусом, чтобы спасти укушенного оборотнем Деймона." 
    },
    { 
        title: "Сезон 3: Возвращение Древних", 
        year: "2011–2012", 
        desc: "Стефан становится «Потрошителем» под влиянием Клауса. Елена и Деймон сближаются во время его поисков. Пробуждается вся семья Древних Майклсонов, включая их мать Эстер, желающую уничтожить своих детей. В финале Елена погибает в автокатастрофе на мосту, но умирает с кровью вампира в организме." 
    },
    { 
        title: "Сезон 4: Лекарство", 
        year: "2012–2013", 
        desc: "Елена приспосабливается к жизни вампира и выбирает Деймона из-за возникшей связи создателя. Герои отправляются на таинственный остров в поисках единственной дозы Лекарства от вампиризма, что приводит к пробуждению бессмертного древнего мага Сайласа. Кэтрин принимает лекарство и становится человеком." 
    },
    { 
        title: "Сезон 5: Странники и Иной Мир", 
        year: "2013–2014", 
        desc: "Елена и Кэролайн поступают в колледж Уитмор. Выясняется existence двойников Стефана (Сайлас) и Елены (Амара). Клан «Странников» во главе с Маркосом пытается снять всю сверхъестественную магию в мире. В конце сезона Иной Мир разрушается, а Деймон и Бонни остаются заперты на «той стороне»." 
    },
    { 
        title: "Сезон 6: Тюремный мир и Кай Паркер", 
        year: "2014–2015", 
        desc: "Деймон и Бонни оказываются в Тюремном мире 1994 года, где сталкиваются с психопатом Каем Паркером из клана Гемини. Елена принимает лекарство и снова становится человеком. На свадьбе Аларика Кай устраивает кровавую бойню и связывает жизни Елены и Бонни: Елена впадает в магический сон, пока жива Бонни." 
    },
    { 
        title: "Сезон 7: Еретики и Камень Душ", 
        year: "2015–2016", 
        desc: "Мать Стефана и Деймона, Лили, освобождает из Тюремного мира группу Еретиков — гибридов вампиров и ведьм. Появляется беспощадная охотница на вампиров Рэйна Крус и Камень Душ. Стефан спасается бегством, а Бонни влюбляется в Энзо. В финале Деймона и Энзо поглощает древнее зло из хранилища «Арсенала»." 
    },
    { 
        title: "Сезон 8: Битва за Ад", 
        year: "2016–2017", 
        desc: "Деймон и Энзо подпадают под контроль Сирены и служат Повелителю Ада — Каду. Стефан принимает лекарство, став человеком. Чтобы спасти город от адского пламени и уничтожить вернувшуюся Кэтрин, Стефан жертвует собой. Елена просыпается, воссоединяется с Деймоном, и они проживают счастливую человеческую жизнь." 
    }
];
// цитаты
const quotes = [
    { text: "«Честно говоря, когда я слышу слово 'уважение', я вспоминаю, что я древнее существо, которое может вырвать твое сердце.»", author: "Клаус Майклсон" },
    { text: "«Лучше делать плохие вещи по доброй воле, чем пытаться быть хорошим и всё портить».", author: "Дэймон Сальваторе" },
    { text: "«Мне пришлось выбирать, и я выбрала тебя. Потому что я люблю тебя. И что бы ни случилось, это лучший выбор, который я когда-либо делала»", author: "Елена Гилберт" },
    { text: "«Семья — это не те, кто тебя балует и следует всякому твоему капризу. Это те, кто сражается за тебя и за кого сражаешься ты».", author: "Клаус Майклсон" },
    { text: "«Мы становимся монстрами лишь при необходимости.»", author: "Элайджа Майклсон" },
    { text: "«Мы сами выбираем свой путь. Наша вина лежит только на нас.»", author: "Стефан Сальваторе" }
];

// квиз
const quizQuestions = [
    {
        question: "1. Представьте, что над вашей компанией нависла серьезная угроза. Ваш первое действие?",
        options: [
            { text: "Действовать решительно и жестко, даже если придётся нарушить правила", result: "Деймон Сальваторе" },
            { text: "Собрать всех, обсудить проблему и найти безопасное для каждого решение", result: "Стефан Сальваторе" },
            { text: "Взять весь удар и тяжесть решения на свои плечи", result: "Бонни Беннет" },
            { text: "Показать силу, чтобы никто даже не подумал наступать мне на ноги", result: "Клаус Майклсон" }
        ]
    },
    {
        question: "2. Какое качество в людях вы цените больше всего?",
        options: [
            { text: "Преданность и готовность идти до конца ради близких", result: "Элайджа Майклсон" },
            { text: "Организованность, внимание к деталям и искренность", result: "Кэролайн Форбс" },
            { text: "Гибкость ума и умение выходить сухим из любой воды", result: "Кэтрин Пирс" },
            { text: "Честность, даже если она неприятная или резкая", result: "Деймон Сальваторе" }
        ]
    },
    {
        question: "3. Как вы предпочитаете проводить вечер после очень тяжелого дня?",
        options: [
            { text: "В тишине, с крепким напитком и наедине со своими мыслями", result: "Деймон Сальваторе" },
            { text: "За творчеством или любимым хобби, погрузившись в процесс", result: "Клаус Майклсон" },
            { text: "В душевной компании за неторопливой беседой", result: "Аларик Зальцман" },
            { text: "В уютной обстановке за чашкой чая или за чтением книги", result: "Бонни Беннет" }
        ]
    },
    {
        question: "4. Как вы относитесь к общепринятым нормам и общественным правилам?",
        options: [
            { text: "Ориентируюсь по ситуации — если правила мешают, их можно обойти", result: "Деймон Сальваторе" },
            { text: "Правила помогают сохранять баланс и не давать хаосу взять верх", result: "Стефан Сальваторе" },
            { text: "У меня есть собственный внутренний кодекс, и он важнее внешних правил", result: "Элайджа Майклсон" },
            { text: "Правила придуманы для тех, кто не умеет думать сам за себя", result: "Кэтрин Пирс" }
        ]
    },
    {
        question: "5. Если кто-то из близких вас сильно подвёл, какова ваша первая реакция?",
        options: [
            { text: "Дистанцируюсь и запомню этот урок на будущее", result: "Кэтрин Пирс" },
            { text: "Выражу свой гнев прямо и открыто, скрывать эмоции не буду", result: "Клаус Майклсон" },
            { text: "Постараюсь спокойнее разобраться, что именно произошло и почему", result: "Стефан Сальваторе" },
            { text: "Выскажу всё, что думаю, но дам человеку шанс исправиться", result: "Кэролайн Форбс" }
        ]
    },
    {
        question: "6. Какое навык вы хотели бы развить в себе больше всего?",
        options: [
            { text: "Умение убеждать людей и вести их за собой", result: "Деймон Сальваторе" },
            { text: "Глубокую интуицию и чутье на людей", result: "Бонни Беннет" },
            { text: "Абсолютную уверенность в собственных силах", result: "Клаус Майклсон" },
            { text: "Практическую смекалку и выдержку в кризисных ситуациях", result: "Аларик Зальцман" }
        ]
    },
    {
        question: "7. Что для вас значит понятие «настоящая любовь»?",
        options: [
            { text: "Сильная страсть и эмоции, ради которых готов на все", result: "Деймон Сальваторе" },
            { text: "Взаимное уважение, поддержка и готовность жертвовать комфортом ради другого", result: "Стефан Сальваторе" },
            { text: "Привязанность, которую сложно завоевать, но невозможно разрушить", result: "Клаус Майклсон" },
            { text: "Романтика, постоянная забота и совместные планы на будущее", result: "Кэролайн Форбс" }
        ]
    },
    {
        question: "8. В какой обстановке вы чувствуете себя наиболее комфортно?",
        options: [
            { text: " В оживленном заведении за барной стойкой", result: "Аларик Зальцман" },
            { text: " В классическом интерьере с историей и традициями", result: "Элайджа Майклсон" },
            { text: " В уединённом, спокойном месте подальше от суеты", result: "Кэтрин Пирс" },
            { text: " В эпицентре событий, где кипит жизнь и праздники", result: "Кэролайн Форбс" }
        ]
    },
    {
        question: "9. Как вы обычно справляетесь с сильным стрессом?",
        options: [
            { text: "Переключаюсь на импульсивные поступки и развлечения", result: "Деймон Сальваторе" },
            { text: "Ухожу в себя, пытаюсь все переварить в одиночестве", result: "Стефан Сальваторе" },
            { text: "Загружаю себя делами, уборкой или спортом, чтобы отвлечься", result: "Кэролайн Форбс" },
            { text: "Выплескиваю эмоции наружу, не сдерживая раздражение", result: "Клаус Майклсон" }
        ]
    },
    {
        question: "10. Какая жизненная позиция вам ближе всего?",
        options: [
            { text: "«Главное — уметь адаптироваться и полагаться на себя.»", result: "Кэтрин Пирс" },
            { text: "«Семья и верные друзья — единственный настоящий приоритет.»", result: "Элайджа Майклсон" },
            { text: "«Жизнь слишком коротка, чтобы проживать её скучно и без риска.»", result: "Деймон Сальваторе" },
            { text: "«Каждый день — это шанс стать лучше, чем вчера.»", result: "Стефан Сальваторе" }
        ]
    }
];
//персонажи рис
function renderCharacters(filter = 'all') {
    const grid = document.getElementById('characters-grid');
    grid.innerHTML = '';
    const filtered = filter === 'all' 
        ? characters 
        : characters.filter(c => c.type === filter);
    filtered.forEach(char => {
        const card = document.createElement('div');
        card.className = 'card';
        card.addEventListener('click', () => openModal(char));
        card.innerHTML = `
            <img src="${char.image}" alt="${char.name}" class="card-img">
            <div class="card-info">
                <div class="card-role">${char.role}</div>
                <h3 class="card-name">${char.name}</h3>
                <p class="card-actor">${char.actor}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}
// сезоны рис
function renderSeasons() {
    const container = document.getElementById('seasons-timeline');
    seasons.forEach((season, index) => {
        const item = document.createElement('div');
        item.className = 'season-item';
        item.innerHTML = `
            <div class="season-header">
                <span class="season-title-text">${season.title}</span>
                <span class="season-year">${season.year}</span>
            </div>
            <div class="season-content" id="season-${index}">
                <p>${season.desc}</p>
            </div>`;
        item.querySelector('.season-header').addEventListener('click', () => {
            item.classList.toggle('active');
        });
        container.appendChild(item);
    });
}
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderCharacters(e.target.dataset.filter);
    });
});
function openModal(char) {
    document.getElementById('modal-name').innerText = char.name;
    document.getElementById('modal-role').innerText = char.role + ' | ' + char.actor;
    document.getElementById('modal-bio').innerText = char.bio;
    document.getElementById('char-modal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('char-modal').style.display = 'none';
}
document.getElementById('close-modal-btn').addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    const modal = document.getElementById('char-modal');
    if (e.target === modal) {
        closeModal();
    }
});
// генератор цитат
function generateQuote() {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-display').innerText = random.text;
    document.getElementById('quote-author').innerText = '— ' + random.author;
}
document.getElementById('btn-generate-quote').addEventListener('click', generateQuote);

// квиз прохождение
let currentQuestion = 0;
let quizScores = {};

function loadQuiz() {
    if (currentQuestion >= quizQuestions.length) {
        showQuizResult();
        return;
    }
    const q = quizQuestions[currentQuestion];
    document.getElementById('quiz-question').innerText = q.question;
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerText = opt.text;
        btn.addEventListener('click', () => {
            quizScores[opt.result] = (quizScores[opt.result] || 0) + 1;
            currentQuestion++;
            loadQuiz();
        });
        optionsContainer.appendChild(btn);
    });
}
function showQuizResult() {
    document.getElementById('quiz-body').style.display = 'none';
    const resultBox = document.getElementById('quiz-result');
    resultBox.style.display = 'block';
    let topChar = 'Деймон';
    let maxScore = -1;
    for (let char in quizScores) {
        if (quizScores[char] > maxScore) {
            maxScore = quizScores[char];
            topChar = char;
        }
    }
    document.getElementById('result-title').innerText = 'Твой персонаж: ' + topChar;
    document.getElementById('result-desc').innerText = 'Твой выбор показывает, что твои поступки и характер идеально совпадают с духом ' + topChar + '.';
}
function resetQuiz() {
    currentQuestion = 0;
    quizScores = {};
    document.getElementById('quiz-body').style.display = 'block';
    document.getElementById('quiz-result').style.display = 'none';
    loadQuiz();
}
document.getElementById('btn-reset-quiz').addEventListener('click', resetQuiz);

window.addEventListener('DOMContentLoaded', () => {
    renderCharacters();
    renderSeasons();
    loadQuiz();
});
