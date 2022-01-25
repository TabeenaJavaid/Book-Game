const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const resetbtn = document.querySelector("#reset");
const b1Display = document.querySelector("#span1")
const b2Display = document.querySelector("#span2")
const b3Display = document.querySelector("#span3")
const b4Display = document.querySelector("#span4")
const bl1Display = document.querySelector("#spanl1")
const bl2Display = document.querySelector("#spanl2")
const h31 = document.querySelector("#h31")
const h32 = document.querySelector("#h32")
const h33 = document.querySelector("#h33")
const h34 = document.querySelector("#h34")



let p1Score = 0;
let p2Score = 0;
let winningScore = 20;



button1.addEventListener("click", function () {
    let rand = Math.floor(Math.random() * 100) + 1;
    console.log(rand)
    p1Score += rand % 10
    b3Display.innerText = rand;
    button1.disabled = true;
    button2.disabled = false;

    b1Display.innerText = `Score- ${p1Score}`;
    bl1Display.innerText = p1Score;
    bl2Display.innerText = p2Score;
    if (p1Score >= winningScore) {
        b1Display.innerText = "WINNER"
        b2Display.innerText = "LOSER"
        bl1Display.innerText = winningScore;
        bl2Display.innerText = p2Score;

        h33.classList.add("none");
        h34.classList.add("none")
        h32.classList.add("text-danger")
        h31.classList.add("text-success")
        b2Display.classList.add("text-danger")
        b1Display.classList.add("text-success")
        button2.disabled = true;
        button1.disabled = true;
    }
    if (rand % 10 === 0) {

        if (p2Score > p1Score) {
            b2Display.innerText = "WINNER"
            b1Display.innerText = "OUT"

            h33.classList.add("none");
            h34.classList.add("none")
            h31.classList.add("text-danger")
            h32.classList.add("text-success")
            b1Display.classList.add("text-danger")
            b2Display.classList.add("text-success")

            button2.disabled = true;
            button1.disabled = true;
        } else if (p1Score > p2Score) {
            b2Display.innerText = "LOSER"
            b1Display.innerText = "WINNER"
            h33.classList.add("none");
            h34.classList.add("none")
            h31.classList.add("text-success")
            h32.classList.add("text-danger")
            b1Display.classList.add("text-success")
            b2Display.classList.add("text-danger")

            button2.disabled = true;
            button1.disabled = true;
        } else {

            b1Display.innerText = "OUT"
            b2Display.innerText = "Your chance!";
            h33.classList.add("none");
            h34.classList.add("none")
            button1.disabled = true;
            button2.disabled = false;
        


        }
    }
})

button2.addEventListener("click", function () {
    let band = Math.floor(Math.random() * 100) + 1;
    console.log(band)
    b4Display.innerText = band
    p2Score += band % 10
    button2.disabled = true;
    button1.disabled = false;
    b2Display.innerText = `Score- ${p2Score}`;
    bl1Display.innerText = p1Score;
    bl2Display.innerText = p2Score;
    if (p2Score >= winningScore) {
        b2Display.innerText = "WINNER"
        b1Display.innerText = "LOSER"
        bl1Display.innerText = p1Score;
        bl2Display.innerText = winningScore;

        h33.classList.add("none");
        h34.classList.add("none")
        h31.classList.add("text-danger")
        h32.classList.add("text-success")
        b1Display.classList.add("text-danger")
        b2Display.classList.add("text-success")
        button2.disabled = true;
        button1.disabled = true;
    }
    if (band % 10 === 0) {
        button2.disabled = true;
        button1.disabled = false;
        if (p1Score > p2Score) {
            b2Display.innerText = "OUT"
            b1Display.innerText = "WINNER"

            h33.classList.add("none");
            h34.classList.add("none")
            h31.classList.add("text-success")
            h32.classList.add("text-danger")
            b1Display.classList.add("text-success")
            b2Display.classList.add("text-danger")

            button2.disabled = true;
            button1.disabled = true;
        } else if (p2Score > p1Score) {
            b2Display.innerText = "WINNER"
            b1Display.innerText = "LOSER"

            h33.classList.add("none");
            h34.classList.add("none")
            h31.classList.add("text-danger")
            h32.classList.add("text-success")
            b1Display.classList.add("text-danger")
            b2Display.classList.add("text-success")

            button2.disabled = true;
            button1.disabled = true;
        } else {

            b2Display.innerText = "OUT"
            b1Display.innerText = "Your chance! "
            bl1Display.innerText = p1Score;
            bl2Display.innerText = p2Score;
            h33.classList.add("none");
            h34.classList.add("none")
            button2.disabled = true;
            button1.disabled = false;
        }

    }

})


resetbtn.addEventListener("click", reset);

function reset() {
    p1Score = 0;
    p2Score = 0;
    b1Display.textContent = `Score-0`;
    b2Display.textContent = `Score-0`
    b3Display.textContent = 0;
    b4Display.textContent = 0
    h31.classList.remove("text-success", "text-danger")
    h32.classList.remove("text-success", "text-danger")
    button2.disabled = false;
    button1.disabled = false;
    h33.classList.remove("none");
    h34.classList.remove("none")
    b1Display.classList.remove("text-success", "text-danger")
    b2Display.classList.remove("text-danger", "text-success")
    bl1Display.innerText = 0;
    bl2Display.innerText = 0;

}