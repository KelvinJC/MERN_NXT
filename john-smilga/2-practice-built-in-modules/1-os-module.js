const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// info on the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds` )
console.log(`The system uptime is ${os.uptime()/(3600 * 24)} hours` )


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    cpus: os.cpus(),
    networkInterfaces: os.networkInterfaces(),
}

console.log(currentOS)