// snack 1

const guestMailList = ['pino@boolean.it', 'mimmo@boolean.it', 'lino@boolean.it', 'tino@boolean.it'];

const userMail = prompt('Enter email').toLowerCase();
let flag = false;

for (let i = 0; i < guestMailList.length; i++) {
  if (userMail === guestMailList[i]) {
    flag = true;
  }
}

if (flag) {
  console.log('Benvenuto!');
} else {
  console.log('Non puoi entrare');
}

// snack2

// human score, machine score
let humanScore = 0;
let machineScore = 0;

// facciamo una serie di lanci, e poi la somma dei punti
const tossNumber = parseInt(prompt('Quanti lanci a questo giro?'));

for (let i = 0; i < tossNumber; i++) {
  let humanToss = Math.floor(Math.random() * 6) + 1;
  let machineToss = Math.floor(Math.random() * 6) + 1;
  console.log(`${humanToss} | ${machineToss}`);

  if (humanToss > machineToss) {
    humanScore++;
  }
  if (humanToss < machineToss) {
    machineScore++;
  }
}

if (humanScore > machineScore) {
 console.log('Vince l\'uomo!');
} else if (humanScore < machineScore) {
  console.log('Skynet!!!');
} else { 
  console.log('Pareggio!');
}