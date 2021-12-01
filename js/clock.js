const clock = document.querySelector('#clock');
const clockdate = document.querySelector('#date');

function convertMonthName(date){
    let day = new String();
    switch (date){
        case '0' :
            day = '일요일';
            break;
        case '1' :
            day = '월요일';
            break;
        case '2' :
            day = "화요일";
            break;
        case '3' :
            day = '수요일';
            break;
        case '4' :
            day = '목요일';
            break;
        case '5' :
            day = '금요일';
            break;
        case '6' :
            day = '토요일';
            break;
    }
    return day;
};

function updateDate() {
    const date = new Date();
    const month = String(date.getMonth());
    const day = String(date.getDate());
    let dateOfWeek = String(date.getDay());
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    dateOfWeek = convertMonthName(dateOfWeek);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    clockdate.innerText = `${month}월 ${day}일 ${dateOfWeek}`;
}
updateDate();
// setInterval(sayHello, 5000);
setInterval(updateDate, 100);