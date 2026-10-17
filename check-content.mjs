import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const languages=['de','en','ru'];
const contents=languages.map(lang=>JSON.parse(readFileSync(new URL(`./content/locales/${lang}.json`,import.meta.url),'utf8')));
function paths(obj,prefix='') { return Object.entries(obj).flatMap(([key,value])=>typeof value==='object'&&value!==null?paths(value,`${prefix}${key}.`):[`${prefix}${key}`]).sort(); }
function strings(obj){return Object.values(obj).flatMap(value=>typeof value==='object'&&value!==null?strings(value):[value]);}
for(let index=0;index<contents.length;index++){
  assert.deepEqual(paths(contents[index]),paths(contents[0]),`Missing translations: ${languages[index]}`);
  assert.ok(strings(contents[index]).every(value=>typeof value==='string'&&value.trim()),`Empty copy: ${languages[index]}`);
  assert.equal(Object.keys(contents[index].services.items).length,6);
  assert.equal(contents[index].process.steps.length,4);
}
console.log('PASS: DE / EN / RU have matching, complete content structures.');
