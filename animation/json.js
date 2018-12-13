//在设计师导出的json文件中新增自定义精灵图字段
'use strict';

let fs = require('fs');
let opt = require('./build/sprite.js');

let json = fs.readFileSync('./data.json');

json = JSON.parse(json);

json['_sprite'] = opt;

fs.writeFileSync('data_sprite.json',JSON.stringify(json));