// -- Global Variables --  
let countryName = '';
let playerScore = 0;
document.getElementById('player-score').innerHTML = playerScore;
let playerLives = 3;
let buttonA = document.getElementById('answer-a');
let buttonB = document.getElementById('answer-b');
let buttonC = document.getElementById('answer-c');
let buttonD = document.getElementById('answer-d');
let questionImage = document.getElementById('country');

// -- Country Class --
//Creates class
class Country {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
}
//Creates the crountries
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
const pol = new Country('Poland', "./assets/images/borders/pol.png");
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

// -- Question Creation -- 
//Makes new question on click of next button
document.getElementById('next-button').addEventListener('click', loadQuestion)
//Takes a random country from the array and also sets it diplayed image 
function pullCountry() {
    let pulledCountry = countryPool[Math.floor(Math.random() * countryPool.length)];
    questionImage.src = document.getElementById("country").src = pulledCountry.image;
    console.log('new answer loaded: ' + pulledCountry.name);
    return pulledCountry;
}
//Now we take our pulled country and set its name to the earlier  declared variable of countryName
function loadQuestion() {
    const question = pullCountry();
    countryName = question.name;
    document.getElementById('next-button').style.visibility = 'hidden';
    document.getElementById('feedback').style.visibility = 'hidden';
    answer(question);
}
//Makes sure that the same country doesnt show up on for the answer buttons multiple times per question
function randomizeCountry(question) {
    let country = countryPool[Math.floor(Math.random() * countryPool.length)].name;
    if (country !== question.name) {
        return country
    } 
    return countryPool[Math.floor(Math.random() * countryPool.length)].name;
}
//Randomize array in-place using Durstenfeld shuffle algorithm
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// -- Answer Creation --
//sets the answer buttons and makes one the correct answer
function answer(question) {
    const selections = [randomizeCountry(question), randomizeCountry(question), randomizeCountry(question), question.name];
    shuffleArray(selections);
    console.log(selections);
    buttonA.innerHTML = selections[0];
    buttonB.innerHTML = selections[1];
    buttonC.innerHTML = selections[2];
    buttonD.innerHTML = selections[3];
}
//When the answer buttons are clicked determines if the answer button matches the correct answer or not an procedes accordingly.
//Answer A
buttonA.addEventListener('click', function() {
    if (this.innerHTML === countryName) {
        correctAnswer();
    } 
    else {
        wrongAnswer();
    }
})
//Answer B
buttonB.addEventListener('click', function() {
    if (this.innerHTML === countryName) {
        correctAnswer();
    } 
    else {
        wrongAnswer();
    }
})
//Answer C
buttonC.addEventListener('click', function() {
    if (this.innerHTML === countryName) {
        correctAnswer();
    } 
    else {
        wrongAnswer();
    }
})
//Answer D
buttonD.addEventListener('click', function() {
    if (this.innerHTML === countryName) { 
        correctAnswer();
    } 
    else {
        wrongAnswer();
    }
})
//Updates the players score lets player know they got the correct answer 
function correctAnswer() {
    playerScore++;
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('feedback').style.visibility = 'visible';
    document.getElementById('feedback').innerHTML = 'Correct!';
    document.getElementById('next-button').style.visibility = 'visible';
    return playerScore;
}
//Decreases lives and lets the player know they got the incorrect answer
function wrongAnswer() {
    playerLives--;
    document.getElementById('feedback').style.visibility = 'visible';
    document.getElementById('feedback').innerHTML = 'Incorrect!';
    document.getElementById('next-button').style.visibility = 'visible';
    checkLives();
}

function checkLives() {
    if (playerLives === 2) {
        document.getElementById('life-1').src = './assets/images/dead-heart.png';
    }
    if (playerLives === 1) {
        document.getElementById('life-2').src = './assets/images/dead-heart.png';
    }
    if (playerLives === 0) {
        document.getElementById('life-3').src = './assets/images/dead-heart.png';
        document.getElementById('feedback').innerHTML = 'GAME OVER!'
        document.getElementById('next-button').style.visibility = 'hidden';
        document.getElementById('start-button').style.visibility = 'visible';
    }
}

//function to restart game
function clearState() {
    // Button visibility is updated
    document.getElementById('start-button').style.visibility = 'hidden';
    document.getElementById('answer-a').style.visibility = 'visible';
    document.getElementById('answer-b').style.visibility = 'visible';
    document.getElementById('answer-c').style.visibility = 'visible';
    document.getElementById('answer-d').style.visibility = 'visible';
    //make sure score and lives are reset
    playerScore = 0;
    document.getElementById('life-1').src = './assets/images/full-heart.png';
    document.getElementById('life-2').src = './assets/images/full-heart.png';
    document.getElementById('life-3').src = './assets/images/full-heart.png';
}

//Start Game
document.getElementById('start-button').addEventListener("click", function() {
    clearState();
    //loads first question
    loadQuestion();
})

