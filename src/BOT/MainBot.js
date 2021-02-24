const venom = require("venom-bot");

venom.create().then((client) => {
  let time = 0;
  client.onStreamChange((state) => {
    clearTimeout(time);
    console.log(`Status: ${state}`)
    if(state == 'CONNECTED'){
     start(client);
    }
    if (state === 'DISCONNECTED' || state === 'SYNCING') {
      time = setTimeout(() => {
        client.close();
      }, 80000);
    }
  })
  .catch((erro) => {
    console.log('There was an error in the bot',erro);
  });

async function start(client) {
  let inchat = await client.isInsideChat(); //wait until the page is in whatsapp chat
  if (inchat) {
    client.onMessage((message) => {

      message.isGroupMsg === false && client
          .sendText(message.from, `Welcome Venom 🕷 \n Menssagem de ${message.contact.user}`)
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
    });
  }
}
})