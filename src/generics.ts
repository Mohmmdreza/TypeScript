const numbers:Array<number> =[]

const promise:Promise<string> = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("This is True")
    } ,2000)
})

