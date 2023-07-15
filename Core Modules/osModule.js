// OS module gives the information about the current computer, its operating system and network on which computer is running

// Before Node, this information could not be retrieved using JavaScript due to the language being confined to the browser.

// However, Node.js is a JavaScript runtime, which means it can execute code outside of the browser, and we’re able to get access to much of this information through the os core module.

const os = require('os');

// creating JS object to store the information about the OS
const osInformation = {
    // return computers operating system
    "Type of OS: " : os.type(),

    // return CPU architecture
    "OS Architecture: " : os.arch(),

    // return information about the network interfaces of the computer, such as IP and MAC address.
    "Network Interface: " : os.networkInterfaces(),

    // return current user's home directory
    "Home Directory: " : os.homedir(),

    // return hostname
    "Host name: " : os.hostname(),

    // return sytem uptime in sec
    "Uptime: " : os.uptime()
}

console.log(osInformation);