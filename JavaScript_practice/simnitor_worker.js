var pick = Math.floor(Math.random() * 4);


var sysStat = [{colour:"#0f0",details:"System running normally"},
                {colour:"#00f",details:"System down for upgrades"},
				{colour:"#ff0",details:"System using too many resources. Notify Technical Centre."},
                {colour:"#f00",details:"System has crashed! Notify Technical Centre immediately."},
               ];

postMessage(sysStat[pick]);

function messageHandler(event) {

let messageSent = event.data;

console.log(messageSent);



}

this.addEventListener('message', messageHandler, false);

