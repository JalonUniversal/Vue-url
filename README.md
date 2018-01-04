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
}
const url = 'https://www.google.com';
this.$url.parse(url, query);
// https://www.google.com?name=test&age=18&job=master
2.parse
// originalUrl: 'https://www.google.com?name=test&age=18&job=master';
const url = this.$url.parse();
console.log(url);
// And then you can get the result;
{
  name: 'test',
  age: 18,
  job: master
}



