var age;
age = 50;
var name1;
name1 = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback = function (a) { return number; };
callback = function (a) { return 100 + a; };
var anything;
anything = -20;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var person;
person = ['Max', 21];
var Download;
(function (Download) {
    Download[Download["LOADING"] = 0] = "LOADING";
    Download[Download["READY"] = 1] = "READY";
})(Download || (Download = {}));
;
var page = {
    load: Download.READY
};
if (page.load === Download.LOADING) {
    console.log('Страница загружается');
}
if (page.load === Download.READY) {
    console.log('Страница загружена');
}
var union;
var somestr;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
