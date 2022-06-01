import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

const getSneakers = () => {
    const sneakerList = [];
    const url = 'https://www.lesitedelasneaker.com/release-dates/?filter=most_hyped'
    puppeteer.launch({ headless: false }).then(async browser => {
        const page = await browser.newPage()
        await page.setViewport({ width: 800, height: 600 })
      
        console.log(`Testing adblocker plugin..`)
        await page.goto(url)
        await page.waitForSelector('.facetwp-load-more')
        

      
        console.log(`All done, check the screenshots. ✨`)
        //await browser.close()
      })
}

export default getSneakers;