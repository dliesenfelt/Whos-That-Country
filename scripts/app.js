document.getElementById('start-button').addEventListener("click", function startGame() {
    // Hides the start button
    document.getElementById('start-button').style.visibility = 'hidden';
    console.log('Game Has Started')
    // Creates a class for giving for all the countries giving them atrributes of name and an image of thier border
    class Country {
        constructor(name, image) {
            this.name = name;
            this.image = image;
        };
    };
    //Making all the countries
    const rus = new Country('Russia' , "./assets/images/borders/russia.png");
    const can = new Country('Canada', "./assets/images/borders/canada.png");
    const china = new Country('China', "./assets/images/borders/china.png");
    const usa = new Country("United States of America", "./assets/images/borders/usa.png");
    const bra = new Country('Brazil', "./assets/images/borders/brazil.png");
    const australia = new Country('Australia', "./assets/images/borders/australia.png");
    const india = new Country('India', "./assets/images/borders/india.png");
    const argen = new Country('Argentina', "./assets/images/borders/argentina.png");
    const kaz = new Country('Kazakhstan', "./assets/images/borders/kazakhstan.png");
    const alg = new Country('Algeria', "./assets/images/borders/algeria.png");
    const drcongo = new Country('The Democratic Republic of the Congo', "./assets/images/borders/drcongo.png");
    const saudi = new Country('Saudi Arabia', "./assets/images/borders/saudi.png");
    const mex = new Country('Mexico', "./assets/images/borders/mex.png");
    const indo = new Country('Indonesia', "./assets/images/borders/indo.png");
    const sudan = new Country('Sudan', "./assets/images/borders/sudan.png");
    const libya = new Country('Libya', "./assets/images/borders/libya.png");
    const iran = new Country('Iran', "./assets/images/borders/iran.png");
    const mongo = new Country('Mongolia', "./assets/images/borders/mongo.png");
    const peru = new Country('Peru', "./assets/images/borders/peru.png");
    const chad = new Country('Chad', "./assets/images/borders/chad.png");
    const niger = new Country('Niger', "./assets/images/borders/niger.png");
    const ango = new Country('Angola', "./assets/images/borders/ango.png");
    const mali = new Country('Mali', "./assets/images/borders/mali.png");
    const sAfrica = new Country('South Africa', "./assets/images/borders/safrica.png");
    const colombia = new Country('Colombia', "./assets/images/borders/colombia.png");
    const eth = new Country('Ethiopia', "./assets/images/borders/eth.png");
    const boliva = new Country('Bolivia', "./assets/images/borders/bolivia.png");
    const mauri = new Country('Mauritania', "./assets/images/borders/mauri.png");
    const egypt = new Country('Egypt', "./assets/images/borders/egypt.png");
    const nigeria = new Country('Nigeria', "./assets/images/borders/nigeria.png");
    const ven = new Country('Venezuela', "./assets/images/borders/ven.png");
    const pak = new Country('Pakistan', "./assets/images/borders/pak.png");
    const nam = new Country('Namibia', "./assets/images/borders/nam.png");
    const moz = new Country('Mozambique', "./assets/images/borders/moz.png");
    const turky = new Country('Turkey', "./assets/images/borders/turky.png");
    const chile = new Country('Chile', "./assets/images/borders/chile.png");
    const zam = new Country('Zambia', "./assets/images/borders/zam.png");
    const mya = new Country('Myanmar', "./assets/images/borders/mya.png");
    const ss = new Country('South Sudan', "./assets/images/borders/ss.png");
    const tan = new Country('Tanzania', "./assets/images/borders/tan.png");
    const fra = new Country('France', "./assets/images/borders/fra.png");
    const som = new Country('Somalia', "./assets/images/borders/som.png");
    const car = new Country('Central African Republic', "./assets/images/borders/car.png");
    const ukr = new Country('Ukraine', "./assets/images/borders/ukraine.png");
    const mad = new Country('Madagascar', "./assets/images/borders/mad.png");
    const bots = new Country('Botswana', "./assets/images/borders/bots.png");
    const ken = new Country('Kenya', "./assets/images/borders/ken.png");
    const ye = new Country('Yemen', "./assets/images/borders/ye.png");
    const thai = new Country('Thailand', "./assets/images/borders/thai.png");
    const spa = new Country('Spain', "./assets/images/borders/spa.png");
    const turkmen = new Country('Turkmenistan', "./assets/images/borders/turkmen.png");
    const came = new Country('Cameroon', "./assets/images/borders/came.png");
    const png = new Country('Papua New Guinea', "./assets/images/borders/png.png");
    const swe = new Country('Sweden', "./assets/images/borders/swe.png");
    const uz = new Country('Uzbekistan', "./assets/images/borders/uz.png");
    const moro = new Country('Morocco', "./assets/images/borders/moro.png");
    const iraq = new Country('Iraq', "./assets/images/borders/iraq.png");
    const para = new Country('Paraguay', "./assets/images/borders/para.png");
    const zim = new Country('Zimbabwe', "./assets/images/borders/zim.png");
    const nor = new Country('Norway', "./assets/images/borders/nor.png");
    const jap = new Country('Japan', "./assets/images/borders/jap.png");
    const ger = new Country('Germany', "./assets/images/borders/ger.png");
    const congo = new Country('Republic of the Congo', "./assets/images/borders/congo.png");
    const fin = new Country('Finland', "./assets/images/borders/fin.png");
    const viet = new Country('Vietnam', "./assets/images/borders/viet.png");
    const malay = new Country('Malaysia', "./assets/images/borders/malay.png");
    const pol = new Country('Polnd', "./assets/images/borders/pol.png");
    const oman = new Country('Oman', "./assets/images/borders/oman.png");
    const italy = new Country('Italy', "./assets/images/borders/italy.png");
    const phil = new Country('Philippines', "./assets/images/borders/phil.png");
    const ecua = new Country('Ecuador', "./assets/images/borders/ecua.png");
    const bf = new Country('Burkina Faso', "./assets/images/borders/bf.png");
    const nz = new Country('New Zealand', "./assets/images/borders/nz.png");
    const gab = new Country('Gabon', "./assets/images/borders/gab.png");
    const gui = new Country('Guinea', "./assets/images/borders/gui.png");
    const uk = new Country('United Kingdom', "./assets/images/borders/uk.png");
    const rom = new Country('Romania', "./assets/images/borders/rom.png");
    const cambod = new Country('Cambodia', "./assets/images/borders/cambod.png");
    //An array to hold all the countries
    const countryPool = [rus,can,china,usa,bra,australia,india,argen,kaz,alg,drcongo,saudi,
        mex,indo,sudan,libya,iran,mongo,peru,chad,niger,ango,mali,sAfrica,colombia,eth,
        boliva,mauri,egypt,nigeria,ven,pak,nam,moz,turky,chile,zam,mya,ss,tan,fra,som,car,
        ukr,mad,bots,ken,ye,thai,spa,turkmen,came,png,swe,uz,moro,iraq,para,zim,nor,jap,ger,
        congo,fin,viet,malay,pol,oman,italy,phil,ecua,bf,nz,gab,gui,uk,rom,cambod,
    ];

    //function to get a new question 
    let questionImage = document.getElementById('country');
    let randomQuestion = countryPool[Math.floor(Math.random() * countryPool.length)];
    function newQuestion() {
        questionImage.src = document.getElementById("country").src = randomQuestion.image;
        answer(randomQuestion);
    };
    newQuestion();

    //function for setting the answer buttons
    function answer(randomQuestion) {
        let buttonA = document.getElementById('answer-a');
        let buttonB = document.getElementById('answer-b');
        let buttonC = document.getElementById('answer-c');
        let buttonD = document.getElementById('answer-d');
        buttonA.innerHTML = countryPool[Math.floor(Math.random() * countryPool.length)].name;
        buttonB.innerHTML = countryPool[Math.floor(Math.random() * countryPool.length)].name;
        buttonC.innerHTML = countryPool[Math.floor(Math.random() * countryPool.length)].name;
        buttonD.innerHTML = countryPool[Math.floor(Math.random() * countryPool.length)].name;
        console.log(randomQuestion.name);
        //Makes one of the answer buttons the correct answer
        let key = Math.floor(Math.random() * 4);
        console.log(key);
        switch (key) {
            case 0: 
                buttonA.innerHTML = randomQuestion.name;
                break;
            
            case 1: 
                buttonB.innerHTML = randomQuestion.name;
                break;

            case 2: 
                buttonC.innerHTML = randomQuestion.name;
                break;

            case 3: 
                buttonD.innerHTML = randomQuestion.name;
                break;

            default:
                break;
        };
        //selecting answers
        //Answer A
        buttonA.addEventListener('click', function answerA(){
            if (buttonA.innerHTML = randomQuestion.name) {
                console.log('correct');
            } else {
               console.log('wrong');
            }
        })
        //Answer B
        buttonB.addEventListener('click', function answerb(){
            if (buttonB.innerHTML = randomQuestion.name) {
                console.log('correct');
            } else {
               console.log('wrong');
            }
        })
        //Answer C
        buttonC.addEventListener('click', function answerC(){
            if (buttonC.innerHTML = randomQuestion.name) {
                console.log('correct');
            } else {
               console.log('wrong');
            }
        })
        //Answer D
        buttonD.addEventListener('click', function answerD(){
            if (buttonD.innerHTML = randomQuestion.name) {
                console.log('correct');
            } else {
                console.log('wrong');
            }
        })
       
    };

    

    //function to update score
    let playerScore = document.getElementById('player-score').innerHTML
    function score() {
        
    };

    //function to lose lives and game over
    function gameOver() {

    };

    //function to restart game
    function clearState() {

    };
});