console.log("test")

let naamveld = document.querySelector("#naamveld")

//variable 
let currentExp = 0
let maxExp = 100

let expBarF = document.querySelector("#myProgress")
let expBarB = document.querySelector("#myBar")

let groeiProces = document.querySelector("#bloempot")

let plaatjeGieter = document.querySelector("#watergieter")

let timer = document.querySelector(".tijd")

let getal = 10
let aftrekInterval 
let timerStatus = false

//constante
const knoppen = [
    document.querySelector(".btnAarde"),
    document.querySelector(".btnZaadjes"),
    document.querySelector(".btnWater"),
    document.querySelector(".btnGroeien"),
    document.querySelector(".btnKast")
]

const startKnop = document.querySelector(".startButton")
const opdrachtenKnoppen = document.querySelector("#knoppenOpdr")
const opnieuwKnop = document.querySelector(".opnieuwButton")

const getalVeld = document.querySelector(".tijd")

const afbeeldingGroeien = [
    "images/pot-kiemend-1.png",
    "images/pot-kiemend-2.png",
    "images/pot-met-tulpen.png"
]

const audioWater = document.querySelector("#waterGeluid")

//naam zetten in de welkom tekst
console.log(naamveld)

function groeten (naam) {
    naamveld.textContent = naam;
}

groeten("Tess");

// array voor alle knoppenOpdr querySelectorAll
function disabledKnoppen () {
    knoppen[0].disabled = false
    knoppen[1].disabled = true
    knoppen[2].disabled = true
    knoppen[3].disabled = true
    knoppen[4].disabled = true
}

// expBar maken
// let expBarB = document.querySelector("#myBar")
function verhoogBar () {
    if (currentExp < maxExp) {
        currentExp += 20
        expBarB.style.width = (currentExp / maxExp) * 100 + "%"
        console.log(currentExp)
    }
    if (currentExp == 20) {
        knoppen[1].disabled = false
        knoppen[0].disabled = true
    }
    if (currentExp == 40) {
        knoppen[2].disabled = false
        knoppen[0].disabled = true
        knoppen[1].disabled = true
    }
    if (currentExp == 60) {
        knoppen[3].disabled = false
        knoppen[0].disabled = true
        knoppen[1].disabled = true
        knoppen[2].disabled = true
    }
    if (currentExp == 100) {
        knoppen[4].disabled = true
    }
}

// ChatGPT 
// Prompt: de knoppen zijn standaard met deze code niet disabled wat moet ik veranderen zodat het wel zo is 
document.addEventListener('DOMContentLoaded', (event) => {
    disabledKnoppen()
})

// eigen code weer
knoppen[0].addEventListener('click', verhoogBar)
knoppen[1].addEventListener('click', verhoogBar)
knoppen[2].addEventListener('click', verhoogBar)
knoppen[3].addEventListener('click', verhoogBar)
knoppen[4].addEventListener('click', verhoogBar)

// Als er op de start knop gedrukt wordt dan komen de de knoppen het scherm visible
function zichtbaar() {
    opdrachtenKnoppen.style.visibility = "visible"
    expBarB.style.visibility = "visible"
    expBarF.style.visibility = "visible"
    startKnop.style.visibility = "hidden"
}

startKnop.addEventListener('click', zichtbaar)

//bloempot plaatje veranderd naar volgend plaatje
function aardeErbij () {
    groeiProces.src = "images/pot-met-aarde.png"
}

knoppen[0].addEventListener('click', aardeErbij)

//bloempot met aarde plaatje veranderd naar volgend plaatje
function zaadjesErbij () {
    groeiProces.src = "images/pot-met-zaadjes.png"
}

knoppen[1].addEventListener('click', zaadjesErbij)

//bloempot met zaadjes veranderd naar volgend plaatje
function waterGeven() {
    groeiProces.src = "images/watergieter.png"
    //https://www.w3schools.com/jsref/met_audio_pause.asp
    audioWater.play()
}

knoppen[2].addEventListener('click', waterGeven)


//timer (T) op het scherm visible maken
function visibilityT () {
    timer.style.visibility = "visible"
}

knoppen[3].addEventListener('click', visibilityT)

// Timer functie 
function verlaagGetal() {
    getal = getal - 1
    getalVeld.textContent = getal + "sec"
    if (getal<= 0) {
        clearInterval(aftrekInterval)
        timerStatus = false
        knoppen[4].disabled = false
        knoppen[3].disabled = true
        timer.style.visibility = "hidden"
    }   
}

function startCounting() {
    if (timerStatus === false) {
        aftrekInterval = setInterval(verlaagGetal, 1000)
        timerStatus = true
    }
}

knoppen[3].addEventListener('click', startCounting)

//https://www.w3schools.com/jsref/met_audio_pause.asp
function stopAudio () {
    audioWater.pause()
    audioWater.currentTime = 0 
}

knoppen[3].addEventListener('click', stopAudio)

//Ik wil een plaatje na een paar sec veranderen in een volgend plaatje, zonder dat er op een knop gedrukt hoeft te worden om dit te activeren
//ChatGPT
//prompt 1: Fix deze code, zodat de array afbeeldingGroeien om de 3 sec van afbeelding veranderd als er op knoppen[3] wordt geklikt.
//prompt 2: Waarom wilt regel 167 niet eindigen in "images/pot-met-tulpen.png" maar in images/pot-kiemend-1.png?
let currentIndex = 0
let intervalId = null

function groeienPlant() {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            currentIndex++
            if (currentIndex < afbeeldingGroeien.length) {
                groeiProces.src = afbeeldingGroeien[currentIndex]
            }
        }, 3000)
    }
}

knoppen[3].addEventListener('click', groeienPlant)

//de tulpen in de kast zetten
function inDeKast () {
    groeiProces.src = "images/pot-in-de-kast.png"
}

knoppen[4].addEventListener('click', inDeKast)