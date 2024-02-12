
import inq from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'
import { URL } from 'url'
inq.prompt([{
    message: "Enter the url",
    name:'URL'
}]).then((answers)=>{
    const url=answers.URL
    var img=qr.image(url)
    img.pipe(fs.createWriteStream('img.png'))
    fs.writeFile("URL.txt",url,(err)=>{
        if(err) throw err
        else console.log('Generated')
    })
})
