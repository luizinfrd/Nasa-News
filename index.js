// Para o código funcionar corretamente, é necessário ter o Node.js instalado na máquina
// Em seguida baixar a biblioteca puppeteer, através do comando no terminal: pip install puppeteer
// Para iniciar basta digitar no terminal: node index.js

// Importando a biblioteca puppeteer para o arquivo
const puppeteer = require('puppeteer')

// Indicação de que código iniciou corretamente
console.log('fala robozinho!')

// Declaração da função
async function robo(){
    const nav = await puppeteer.launch({headless: false})
    const page = await nav.newPage()
    await page.goto('https://www.nasa.gov/news/all-news/')
    await page.setViewport({ width: 1920, height: 1080, isFullscreen: true });
}

// Chamada da função
robo()
