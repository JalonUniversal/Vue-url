# Vue-url
## A easy and small url parse plugin for your vue.js application

## How to use
npm install vue-url -S

### Nowtimes Only two APIs can you use
1. append
const query = {
  name: 'test',
  age: 18,
  job: master
} <br/>
const url = 'https://www.google.com';<br/>
this.$url.parse(url, query);<br/>
// https://www.google.com?name=test&age=18&job=master<br/>

2. parse
// originalUrl: 'https://www.google.com?name=test&age=18&job=master';<br/>
const url = this.$url.parse();<br/>
console.log(url);<br/>
// And then you can get the result;<br/>
{
  name: 'test',
  age: 18,
  job: master
}



