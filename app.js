'use strict';

// ============================================================================
// БАЗОВЫЙ КЛАСС: Character (Персонаж)
// ============================================================================

class Character {
  // Приватные поля
  #race;
  #name;
  #language;

  constructor(race, name, language) {
    this.#race = race;
    this.#name = name;
    this.#language = language;
  }

  // Геттеры для чтения приватных полей
  get race() {
    return this.#race;
  }
  get name() {
    return this.#name;
  }
  get language() {
    return this.#language;
  }

  /**
   * Базовый метод "говорить"
   * Переопределяется в подклассах
   */
  speak() {
    console.log(`${this.#name} говорит на языке ${this.#language}`);
    return `${this.#name} говорит на языке ${this.#language}`;
  }
}

// ============================================================================
// ПОДКЛАСС: Orc (Орк)
// ============================================================================

class Orc extends Character {
  #weapon;

  constructor(name, weapon) {
    super('Орк', name, 'Орочий');
    this.#weapon = weapon;
  }

  get weapon() {
    return this.#weapon;
  }

  /**
   * Переопределение метода speak() для орка
   */
  speak() {
    const message = `${this.name} рычит на языке ${this.language}: "Угх! ${this.#weapon} готов к бою!"`;
    console.log(message);
    return message;
  }

  /**
   * Метод удара
   */
  strike() {
    const message = `${this.name} наносит удар ${this.#weapon}!`;
    console.log(message);
    return message;
  }
}

// ============================================================================
// ПОДКЛАСС: Elf (Эльф)
// ============================================================================

class Elf extends Character {
  #spellType;

  constructor(name, spellType) {
    super('Эльф', name, 'Эльфийский');
    this.#spellType = spellType;
  }

  get spellType() {
    return this.#spellType;
  }

  /**
   * Переопределение метода speak() для эльфа
   */
  speak() {
    const message = `${this.name} произносит на языке ${this.language}: "Свет звёзд ведёт меня, моя магия — ${this.#spellType}"`;
    console.log(message);
    return message;
  }

  /**
   * Метод создания заклинания
   */
  castSpell() {
    const message = `${this.name} создаёт заклинание типа "${this.#spellType}"!`;
    console.log(message);
    return message;
  }
}

// ============================================================================
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ============================================================================

let orc = null;
let elf = null;

// Элементы DOM
const orcForm = document.getElementById('orcForm');
const elfForm = document.getElementById('elfForm');
const controlsSection = document.getElementById('controls');
const orcControls = document.getElementById('orcControls');
const elfControls = document.getElementById('elfControls');
const consoleDiv = document.getElementById('console');

// ============================================================================
// ФУНКЦИИ КОНСОЛИ
// ============================================================================

function logToConsole(message, type = 'info') {
  const item = document.createElement('div');
  item.className = `console-item console-${type}`;
  item.textContent = `> ${message}`;
  consoleDiv.appendChild(item);
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

function clearConsole() {
  consoleDiv.innerHTML = '';
  logToConsole('Консоль очищена', 'info');
}

// ============================================================================
// ОБРАБОТЧИКИ ФОРМ
// ============================================================================

orcForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('orcName').value.trim();
  const weapon = document.getElementById('orcWeapon').value.trim();

  orc = new Orc(name, weapon);

  orcControls.style.display = 'block';
  document.getElementById('orcTitle').textContent =
    ` ${orc.name} (${orc.race})`;
  document.getElementById('orcInfo').textContent =
    `Оружие: ${orc.weapon} | Язык: ${orc.language}`;

  controlsSection.style.display = 'block';

  logToConsole(`Создан орк: ${orc.name} с оружием ${orc.weapon}`, 'orc');
  orcForm.reset();
});

elfForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('elfName').value.trim();
  const spellType = document.getElementById('elfSpell').value.trim();

  elf = new Elf(name, spellType);

  elfControls.style.display = 'block';
  document.getElementById('elfTitle').textContent =
    `🧝 ${elf.name} (${elf.race})`;
  document.getElementById('elfInfo').textContent =
    `Магия: ${elf.spellType} | Язык: ${elf.language}`;

  controlsSection.style.display = 'block';

  logToConsole(`Создан эльф: ${elf.name} с магией ${elf.spellType}`, 'elf');
  elfForm.reset();
});

// ============================================================================
// МЕТОДЫ УПРАВЛЕНИЯ ПЕРСОНАЖАМИ
// ============================================================================

function orcSpeak() {
  if (!orc) {
    logToConsole('Сначала создайте орка!', 'info');
    return;
  }
  const message = orc.speak();
  logToConsole(message, 'orc');
}

function orcStrike() {
  if (!orc) {
    logToConsole('Сначала создайте орка!', 'info');
    return;
  }
  const message = orc.strike();
  logToConsole(message, 'orc');
}

function elfSpeak() {
  if (!elf) {
    logToConsole('Сначала создайте эльфа!', 'info');
    return;
  }
  const message = elf.speak();
  logToConsole(message, 'elf');
}

function elfCastSpell() {
  if (!elf) {
    logToConsole('Сначала создайте эльфа!', 'info');
    return;
  }
  const message = elf.castSpell();
  logToConsole(message, 'elf');
}

function partySpeak() {
  if (!orc && !elf) {
    logToConsole('Сначала создайте хотя бы одного персонажа!', 'info');
    return;
  }

  logToConsole('--- Полиморфизм в действии ---', 'info');

  const party = [];
  if (orc) party.push(orc);
  if (elf) party.push(elf);

  party.forEach((character) => {
    const message = character.speak();
    const type = character.race === 'Орк' ? 'orc' : 'elf';
    logToConsole(message, type);
  });
}

// ============================================================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================================================

logToConsole('🌍 Мир персонажей готов к созданию героев!', 'info');
logToConsole('Создайте орка или эльфа, чтобы начать приключение', 'info');
