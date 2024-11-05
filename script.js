let punkty = 0;
let rozmiar_koguta = 50;
let STARTING_TO_BLUR = 1000;
let BamboTransformation = 0;
let nasionka = 1;

function hello_my_friend() {
    console.log(document.getElementById("xd"));
    document.getElementById("xd").textContent += " Twój komputer ma wirusa";
}

function kogut_johnson() {
    punkty += 1;
    document.getElementById("thecock").textContent = "Gratulacje nacisnąłeś the cocka " + punkty + " razy";
}

function rock_size() {
    rozmiar_koguta *= 1.05;
    document.getElementById("theRock").style.width = `${rozmiar_koguta}px`;
}

function sus_tlo() {
    STARTING_TO_BLUR = Math.max(STARTING_TO_BLUR * 0.85, 0);
    document.getElementById("tlo").style.filter = `blur(${STARTING_TO_BLUR}px)`;
}

function magiczny_texxxt() {
    BamboTransformation = Math.min(BamboTransformation + 6, 255);
    document.querySelector("body").style.color = `rgb(${BamboTransformation}, ${BamboTransformation}, ${BamboTransformation})`;
}

function seeeeed() {
    nasionka = Math.max(nasionka - 0.1, 0);
    document.querySelector("body").style.opacity = nasionka;
    if (punkty == 60) {
        document.write('<div style="display:flex;align-items:center;justify-content:center;height:100vh;margin:0;opacity:1;color:red;"><h1 style="font-size:2rem;text-align:center;">Game Over</h1></div>');
    }
}

function all_the_stars_closer() {
    kogut_johnson();
    if (punkty <= 50) {
        rock_size();
    } else {
        seeeeed();
    }
    sus_tlo();
    magiczny_texxxt();
}