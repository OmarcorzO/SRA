import { Client } from 'whatsapp-web.js';
import pkg from 'qrcode-terminal';
const { generate } = pkg;

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', (qr) => {
    generate(qr, {small: true});
});

client.initialize();
