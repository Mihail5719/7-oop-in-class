# ⚔️ Домашнее задание: ООП на классах ES6 — Персонажи

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/ru/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/ru/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/ru/docs/Web/CSS)

##  Описание проекта

Учебный проект, демонстрирующий принципы **объектно-ориентированного программирования (ООП)** в JavaScript с использованием синтаксиса **классов ES6**. 

Реализована иерархия персонажей фэнтези-мира: базовый класс `Character` и два подкласса — `Orc` (Орк) и `Elf` (Эльф). Проект наглядно показывает работу **наследования**, **инкапсуляции**, **переопределения методов** и **полиморфизма**.

## ✨ Функциональность

- ✅ Базовый класс `Character` с приватными полями (`#race`, `#name`, `#language`)
- ✅ Подкласс `Orc` с оружием и методом `strike()`
- ✅ Подкласс `Elf` с типом заклинаний и методом `castSpell()`
- ✅ **Переопределение метода `speak()`** в каждом подклассе
- ✅ **Демонстрация полиморфизма** — один вызов метода, разное поведение
- ✅ Интерактивный веб-интерфейс для создания и управления персонажами
- ✅ Встроенная консоль для отслеживания действий

## 🛠 Технологии

| Технология | Назначение |
|------------|------------|
| **HTML5** | Структура веб-страницы |
| **CSS3** | Стилизация в фэнтези-стиле |
| **JavaScript (ES6+)** | Классы, наследование, инкапсуляция |
| **Git** | Система контроля версий |

## 📁 Структура проекта

5-oop-classes/
├── index.html # Главная страница с интерфейсом
├── style.css # Стили приложения
├── app.js # Классы Character, Orc, Elf и логика
├── README.md # Описание проекта (этот файл)
└── .gitignore # Исключения для Git

## 🚀 Установка и запуск

Запуск проекта
Проект не требует сборки или установки зависимостей. Откройте index.html в браузере:
Способ 1: Двойной клик по файлу index.html
Способ 2: Через Live Server в VS Code (рекомендуется)
Установите расширение Live Server
Кликните правой кнопкой по index.html
Выберите "Open with Live Server"
📖 Описание классов
Иерархия наследования

Character (Персонаж)
       /                    \
   
   Базовый класс Character

javascript

class Character {
  #race;      // Приватное поле: раса
  #name;      // Приватное поле: имя
  #language;  // Приватное поле: язык

  constructor(race, name, language) {
    this.#race = race;
    this.#name = name;
    this.#language = language;
  }

  get race() { return this.#race; }
  get name() { return this.#name; }
  get language() { return this.#language; }

  speak() {
    console.log(`${this.#name} говорит на языке ${this.#language}`);
  }
}

Особенности:
🔒 Приватные поля # защищают данные от внешнего изменения
📖 Геттеры предоставляют доступ только для чтения
📝 Метод speak() — базовая реализация, переопределяется в подклассах

Подкласс Orc

javascript

class Orc extends Character {
  #weapon;  // Приватное поле: оружие

  constructor(name, weapon) {
    super('Орк', name, 'Орочий');
    this.#weapon = weapon;
  }

  speak() {
    console.log(`${this.name} рычит: "Угх! ${this.#weapon} готов к бою!"`);
  }

  strike() {
    console.log(`${this.name} наносит удар ${this.#weapon}!`);
  }
}

Подкласс Elf

javascript

class Elf extends Character {
  #spellType;  // Приватное поле: тип заклинаний

  constructor(name, spellType) {
    super('Эльф', name, 'Эльфийский');
    this.#spellType = spellType;
  }

  speak() {
    console.log(`${this.name} произносит: "Моя магия — ${this.#spellType}"`);
  }

  castSpell() {
    console.log(`${this.name} создаёт заклинание "${this.#spellType}"!`);
  }
}

🎯 Ключевые концепции ООП

1. Наследование (extends и super)
Подклассы наследуют все свойства и методы базового класса:

javascript

class Orc extends Character {
  constructor(name, weapon) {
    super('Орк', name, 'Орочий'); // Вызов конструктора родителя
    this.#weapon = weapon;
  }
}

super() передаёт аргументы в конструктор Character, который устанавливает #race, #name и #language.

2. Инкапсуляция (приватные поля #)

javascript

class Character {
  #name;  // Приватное поле
  
  get name() { return this.#name; }  // Только для чтения
}

const orc = new Orc('Громмаш', 'топор');
console.log(orc.name);        // ✅ 'Громмаш'
console.log(orc.#name);       // ❌ SyntaxError
orc.#name = 'Другое';         // ❌ SyntaxError

3. Переопределение методов (Override)

Метод speak() объявлен в Character, но переопределён в Orc и Elf с разной логикой:

javascript

// Базовая версия
character.speak(); // "Имя говорит на языке Язык"

// Переопределённая версия для Orc
orc.speak(); // "Громмаш рычит: 'Угх! топор готов к бою!'"

// Переопределённая версия для Elf
elf.speak(); // "Леголас произносит: 'Моя магия — огонь'"

Важно: сигнатура метода (имя и параметры) сохраняется, меняется только реализация.

4. Полиморфизм

Один и тот же вызов метода даёт разный результат в зависимости от типа объекта:

javascript

const party = [orc, elf];

party.forEach(character => {
  character.speak(); // Каждый говорит по

  JavaScript автоматически определяет реальный тип объекта и вызывает соответствующую версию метода.

💡 Примеры использования

Создание персонажей

javascript

const orc = new Orc('Громмаш', 'топор');
const elf = new Elf('Леголас', 'огонь');

Вызов методов

javascript

orc.speak();       // Громмаш рычит на языке Орочий...
orc.strike();      // Громмаш наносит удар топор!

elf.speak();       // Леголас произносит на языке Эльфийский...
elf.castSpell();   // Леголас создаёт заклинание "огонь"!

Полиморфизм в действии

javascript

const party = [orc, elf];
party.forEach(character => character.speak());
// Выводит разные сообщения для орка и

🎨 Интерфейс приложения
Веб-интерфейс позволяет:
Создать Орка — указать имя и оружие
Создать Эльфа — указать имя и тип заклинаний
Управлять персонажами — кнопки "Говорить", "Ударить", "Создать заклинание"
Демонстрировать полиморфизм — кнопка "Все говорят"
Отслеживать действия — встроенная консоль с цветным выводом
📝 Домашнее задание
Требования
✅ Создать базовый класс Character с параметрами: раса, имя, язык
✅ Добавить метод speak() (выводит язык и имя в консоль)
✅ Создать класс Orc, наследующий от Character
✅ Добавить в Orc оружие и метод strike()
✅ Создать класс Elf, наследующий от Character
✅ Добавить в Elf тип заклинаний и метод castSpell()
✅ Переопределить метод speak() для эльфа и орка
✅ Использовать синтаксис классов ES6 (вместо прототипного наследования)

Ключевые отличия от прототипного наследования (ES5)

Прототипное (ES5)
Классы (ES6)
function Character() {...}
class Character {...}
Character.call(this, ...)
super(...)
Orc.prototype = Object.create(Character.prototype)
class Orc extends Character
Orc.prototype.constructor = Orc
Автоматически ✅
Orc.prototype.speak = function() {...}
speak() {...} внутри класса

🔗 Полезные ссылки
Классы в JavaScript
Наследование и super
Приватные поля классов
Переопределение методов
📅 Информация
Тема: Объектно-ориентированное программирование (ООП)
Ветка: 5-oop-classes
Дата: Август 2026
👨‍💻 Автор
Студент курса JavaScript