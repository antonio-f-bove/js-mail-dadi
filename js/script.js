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