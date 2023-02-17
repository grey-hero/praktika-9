
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('shirdnameOutput').innerText = initPerson.shirdname;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('profOutput').innerText = initPerson.prof;
    document.getElementById('birthMonthOutput').innerText = initPerson.month.name;
    document.getElementById('birthDayOutput').innerText = initPerson.day;
};
document.getElementById('btnRecreate').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('shirdnameOutput').innerText = initPerson.shirdname;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('profOutput').innerText = initPerson.prof;
    document.getElementById('birthMonthOutput').innerText = initPerson.month.name;
    document.getElementById('birthDayOutput').innerText = initPerson.day;
});
document.getElementById('btnClaer').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = "Генерация имени";
    document.getElementById('surnameOutput').innerText = "Генерация фамилии";
    document.getElementById('shirdnameOutput').innerText = "Генерация отчества";
    document.getElementById('genderOutput').innerText = "Генерация пола";
    document.getElementById('birthYearOutput').innerText = "Генерация Года";
    document.getElementById('profOutput').innerText = "Генерация профессии";
    document.getElementById('birthMonthOutput').innerText = "Генерация Месяца";
    document.getElementById('birthDayOutput').innerText = "Генерация Дня";
});

