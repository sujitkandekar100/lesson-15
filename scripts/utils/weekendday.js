import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let day=dayjs().add(1,'days');
console.log(day.format('dddd'));
export function  isWeekend(day){
  let dayName=day.format('dddd');
  if(dayName==='Saturday' || 'Sunday')
  {
    return dayName;
  }
}
console.log(isWeekend(day));