//1. Регулярное выражение для поиска контейнера для лого на сайте Яндекс

var objectHTMLCollection = body.getElementsByTagName("*"); // Создаем HTML коллекцию из всех тегов содержащихся в body.
var string = [].map.call( objectHTMLCollection, function(node){
	return node.className;
}).join(","); // Ищем/выбираем в HTML коллекции все названия классов и превращаем их в строку.
var pattern = /home-logo/ig; // паттерн регулярного выражения. Условие для поиска - имя класса контейнера в котором хранится логотип.
var fin = string.match(pattern); // сравнение строки с регулярным выражением.
console.log(fin); // массив с нужным элементом(контейнером).


// 2. Формула для Excel: =СЦЕПИТЬ(B6;" ";D6;" ";E6;" ";C6)