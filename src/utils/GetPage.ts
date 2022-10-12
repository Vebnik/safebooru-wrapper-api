import * as https from 'node:https'

class GetPage {
  public async getHtml(tags: string, page: number): Promise<Array<string>> {

    return new Promise(resolve => {
      https.get(`https://safebooru.org/index.php?page=post&s=list&tags=${tags}&pid=${page}`, res => {

        const buffer: Array<string> = [];
  
        res.on('data', string => buffer.push(string))
        res.on('close', () => this.parsSource(buffer.join('')).then(srcArr => resolve(srcArr)))
      })
    })
  }

  private async parsSource(htmlText: any): Promise<Array<string>> {
    return htmlText
      .match(/src="(.)+?"/gm)
      .filter(str => str.includes('thumbnails'))
      .map(el => {

        const [ssid, images, lastPid] = [
          el.split('/').at(-1).replace(/thumbnail_|\?(.)+$/gmi, ''), 
          el.split('/').at(-2),
          htmlText.match(/pid=(.)+?alt="last page"/gmi)[0].split(';').at(-1).replace(/\D/gmi, '')/40
        ]

        return { ssid, images, lastPid, source: `https://safebooru.org//images/${images}/${ssid}` }
      })
  }
}

export default new GetPage();