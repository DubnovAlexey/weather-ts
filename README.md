# Weather

[English](#english) · [Русский](#russian) · [עברית](#hebrew)

<a name="english"></a>

## English

A small weather app in React and TypeScript: type a city and get the current temperature, the pressure and today's sunset in the city's local time.

**Live demo:** https://dubnovalexey.github.io/weather-ts/

### Try it

Search for a city and inspect temperature, pressure and local sunset. Search for another city, then try an unknown name to see the loading and error states.

### Features

- Search by city name in any language; the first match is used.
- Current temperature (°C) and sea-level pressure (hPa).
- Sunset shown in the city's own time zone.
- Clear messages while loading and when a city is not found.
- Weather data comes from [Open-Meteo](https://open-meteo.com/); this app does not ask for an API key.
- Fits a phone screen: on a narrow screen the two halves of the card stack one above the other.

### How it works

Two requests with `fetch`: the Open-Meteo geocoding API turns the city name into coordinates, then the forecast API returns the current weather and the sunset for those coordinates.

### Tech stack

React 19 · TypeScript · Vite · Bootstrap · Open-Meteo API · GitHub Actions · GitHub Pages

### Implementation notes

- Function components, `useState` and lifting state up (form → data → view).
- Typing API data with TypeScript interfaces.
- Chaining two async requests with `async/await` and handling errors.
- A relative `base` in Vite so the build works on GitHub Pages and inside an iframe.

### Run locally

```bash
npm install
npm run dev
```

### Checks

Use Node.js 22.12+ or 24+.

```bash
npm test
npm run lint
npm run build
```

Tests cover response validation, missing sunset data, HTTP failures, cancellation and the 12-second request timeout. A new search cancels the previous one.

### Deploy

Every push to `main` or `master` builds the app and publishes it to GitHub Pages (`.github/workflows/deploy.yml`). One-time setup on GitHub: **Settings → Pages → Source: GitHub Actions**.

### Further development

Proposals below are planned work, not existing features.

- Visual: add weather icons, a loading skeleton and a custom cloud-and-sun favicon in the existing palette.
- Engineering: test asynchronous form interactions and offer a choice when several cities share a name instead of silently taking the first.
- Features: add a seven-day forecast, recent cities and a Celsius/Fahrenheit switch.

---

<a name="russian"></a>

## Русский

**Погода**

Небольшое приложение погоды на React и TypeScript. Вводите город — получаете текущую температуру, давление и время заката по местному времени этого города.

**Демо:** https://dubnovalexey.github.io/weather-ts/

### Попробовать

Найдите город и посмотрите температуру, давление и местное время заката. Выполните новый поиск, затем введите неизвестное название, чтобы увидеть состояния загрузки и ошибки.

### Возможности

- Поиск по названию города на любом языке, берётся первое совпадение.
- Текущая температура (°C) и давление на уровне моря (гПа).
- Закат по часовому поясу самого города.
- Понятные сообщения во время загрузки и если город не найден.
- Данные погоды поступают от [Open-Meteo](https://open-meteo.com/); приложение не запрашивает ключ API.
- Помещается на экране телефона: на узком экране две половины карточки встают одна под другой.

### Как устроено

Два запроса через `fetch`. Геокодер Open-Meteo превращает название города в координаты, затем API прогноза возвращает по ним текущую погоду и закат.

### Стек

React 19 · TypeScript · Vite · Bootstrap · Open-Meteo API · GitHub Actions · GitHub Pages

### Реализация

- Функциональные компоненты, `useState` и подъём состояния (форма → данные → вывод).
- Типизация данных API интерфейсами TypeScript.
- Два асинхронных запроса подряд через `async/await` и обработка ошибок.
- Относительный `base` в Vite, чтобы сборка работала на GitHub Pages и внутри iframe.

### Как запустить

```bash
npm install
npm run dev
```

### Проверки

Node.js 22.12+ или 24+.

```bash
npm test
npm run lint
npm run build
```

Тесты проверяют ответы API, отсутствие заката, HTTP-ошибки, отмену и ограничение ожидания запроса в 12 секунд. Новый поиск отменяет предыдущий.

### Публикация

Каждый пуш в `main` или `master` собирает приложение и публикует его на GitHub Pages (`.github/workflows/deploy.yml`). Один раз на GitHub: **Settings → Pages → Source: GitHub Actions**.

### Дальнейшее развитие

Ниже перечислены предложения, а не уже реализованные функции.

- Визуал: погодные значки, заглушка загрузки и собственный favicon облака с солнцем в текущей палитре.
- Инженерия: тесты асинхронной формы и выбор города при нескольких совпадениях вместо безусловного первого результата.
- Функции: прогноз на семь дней, недавние города и переключение градусов Цельсия/Фаренгейта.

---

<a name="hebrew"></a>

<div dir="rtl">

## עברית

**מזג אוויר**

אפליקציית מזג אוויר קטנה ב-React וב-TypeScript: מקלידים עיר ומקבלים את הטמפרטורה הנוכחית, הלחץ ושעת השקיעה לפי השעה המקומית של העיר.

**הדגמה:** https://dubnovalexey.github.io/weather-ts/

### מה כדאי לנסות

חפשו עיר ובדקו טמפרטורה, לחץ ושקיעה מקומית. חפשו עיר נוספת ואז שם לא מוכר כדי לראות את מצבי הטעינה והשגיאה.

### יכולות

- חיפוש לפי שם עיר בכל שפה; נבחרת ההתאמה הראשונה.
- טמפרטורה נוכחית (°C) ולחץ בגובה פני הים (hPa).
- שקיעה לפי אזור הזמן של העיר.
- הודעות ברורות בזמן טעינה וכשהעיר לא נמצאה.
- נתוני מזג האוויר מגיעים מ-[Open-Meteo](https://open-meteo.com/); היישום אינו מבקש מפתח API.
- מתאים למסך טלפון: במסך צר שני חצאי הכרטיס מסודרים זה מתחת לזה.

### טכנולוגיות

React 19 · TypeScript · Vite · Bootstrap · Open-Meteo API · GitHub Actions · GitHub Pages

### הרצה מקומית

```bash
npm install
npm run dev
```

### בדיקות

Node.js 22.12+ או 24+.

```bash
npm test
npm run lint
npm run build
```

הבדיקות מכסות אימות תשובות, היעדר נתוני שקיעה, שגיאות HTTP, ביטול והגבלת המתנה של 12 שניות. חיפוש חדש מבטל את הקודם.

### המשך פיתוח

הסעיפים הבאים הם הצעות להמשך, לא יכולות שכבר יושמו.

- עיצוב: סמלי מזג אוויר, שלד טעינה וסמל לשונית של ענן ושמש בצבעים הקיימים.
- הנדסה: בדיקות לטופס אסינכרוני ובחירת עיר כשיש כמה התאמות, במקום לבחור תמיד את הראשונה.
- יכולות: תחזית לשבעה ימים, ערים אחרונות ומעבר בין צלזיוס לפרנהייט.

</div>
