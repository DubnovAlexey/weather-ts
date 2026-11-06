import test from 'node:test';
import assert from 'node:assert/strict';
import {parsePlace, parseForecast, fetchWeather} from '../src/utils/weatherResponse.ts';
const place=parsePlace({results:[{latitude:32,longitude:35,name:'Haifa',country:'Israel'}]});
const forecast={current:{temperature_2m:21,pressure_msl:1013},daily:{sunset:[1730822400]},timezone:'Asia/Jerusalem'};
test('incomplete and malformed remote data is rejected before rendering', () => {
  assert.throws(()=>parsePlace({results:[]})); assert.throws(()=>parsePlace({results:[{name:'bad',latitude:999,longitude:0}]}));
  assert.throws(()=>parseForecast({current:{},daily:{}},place));
  assert.throws(()=>parseForecast({...forecast,timezone:'not/a-zone'},place));
  assert.equal(parseForecast(forecast,place).city,'Haifa');
});
test('both requests share cancellation and city names are encoded', async () => {
  const signal=new AbortController().signal; const urls:string[]=[];
  const request=(async (input: string|URL|Request, init?:RequestInit) => {
    urls.push(String(input)); assert.equal(init?.signal?.aborted,false);
    return new Response(JSON.stringify(urls.length===1?{results:[place]}:forecast),{status:200,headers:{'Content-Type':'application/json'}});
  }) as typeof fetch;
  assert.equal((await fetchWeather('A & B',signal,request)).temp,21);
  assert.match(urls[0],/name=A%20%26%20B/); assert.equal(urls.length,2);
});
test('HTTP error stops the chain instead of reading an error object as a city', async () => {
  let calls=0; const request=(async()=>{calls++;return new Response('{}',{status:429});}) as typeof fetch;
  await assert.rejects(fetchWeather('Haifa',new AbortController().signal,request),/429/); assert.equal(calls,1);
});

test('a missing sunset does not discard valid current weather',()=>{
  const weather=parseForecast({...forecast,daily:{sunset:[null]}},place);
  assert.equal(weather.sunset,null);assert.equal(weather.temp,21);
});
