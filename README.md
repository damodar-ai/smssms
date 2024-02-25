
# SMSSMS

This module named smssms is very useful in sending messages to many people at once and sending customized messages. This module is used in Note JSP or the module is currently available in Node JS. Many modules are also available in different formats. Will be available in programming languages.


## Thanks To
However, this module is based on another module named Twilio.
## Installation

Initialize Your - project with npm

```bash
  npm init
```
    

Install my-project with npm

```bash
  npm install smssms
```
Add the type of dependency
 ```bash
 {
  "name": "sms",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",  <----------------
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "smssms": "^1.1.0"
  }
}

```
create a cjs file in your project

```bash
echo> sendSMS.js

```


codes of sendSMS.cjs look like

```bash
const client = require("twilio")('Add You Twilio Sid' , 'Add Your Twilio Auth Token');
const sendSMS = async (body) => {
    let msgOptions = {
        from: 'Contact Number Provided By Twilio ',
        to: 'Enter the number where you want to send sms',
        body,
    };
    try {
        const messege = await client.messages.create(msgOptions);
        console.log(messege)
    }catch(err){
        console.log(err)
    }
}
sendSMS("Your Sms Content Goes There")


```
Finally Your Project Is Ready to go 
```bash
node sendSMS.js
```
## License

Add badges are like: 
[![MIT License](https://img.shields.io/badge/License-Apache2.0-green.svg)



## Features

- You Can send messages on many number at same time



## 🚀 About Me
Damodar Tiwari (NSTI Patna)
