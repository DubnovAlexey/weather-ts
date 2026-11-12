<!--suppress MarkdownUnresolvedFileReference -->

# Weather

[English](#english) · [Русский](#russian) · [עברית](#hebrew) · [Español](#spanish) · [Français](#french)

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

- Visual: add weather icons and a loading skeleton in the existing palette.
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

- Визуал: погодные значки и заглушка загрузки в текущей палитре.
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

- עיצוב: סמלי מזג אוויר ושלד טעינה בצבעים הקיימים.
- הנדסה: בדיקות לטופס אסינכרוני ובחירת עיר כשיש כמה התאמות, במקום לבחור תמיד את הראשונה.
- יכולות: תחזית לשבעה ימים, ערים אחרונות ומעבר בין צלזיוס לפרנהייט.

</div>

---

<a name="spanish"></a>

## Español

**El tiempo**

Una pequeña aplicación del tiempo en React y TypeScript. Escriba una ciudad y obtendrá la temperatura actual, la presión y la hora de la puesta de sol en la hora local de esa ciudad.

**Demo:** https://dubnovalexey.github.io/weather-ts/

### Pruébelo

Busque una ciudad y mire la temperatura, la presión y la hora local de la puesta de sol. Haga una búsqueda nueva y luego escriba un nombre desconocido para ver los estados de carga y de error.

### Funciones

- Búsqueda por nombre de ciudad en cualquier idioma; se toma la primera coincidencia.
- Temperatura actual (°C) y presión a nivel del mar (hPa).
- Puesta de sol según la zona horaria de la propia ciudad.
- Mensajes claros durante la carga y cuando no se encuentra la ciudad.
- Los datos del tiempo vienen de [Open-Meteo](https://open-meteo.com/); la aplicación no pide ninguna clave de API.
- Cabe en la pantalla de un móvil: en una pantalla estrecha, las dos mitades de la tarjeta se colocan una debajo de otra.

### Cómo está hecho

Dos peticiones con `fetch`. El geocodificador de Open-Meteo convierte el nombre de la ciudad en coordenadas, y después la API de pronóstico devuelve con ellas el tiempo actual y la puesta de sol.

### Tecnologías

React 19 · TypeScript · Vite · Bootstrap · Open-Meteo API · GitHub Actions · GitHub Pages

### Implementación

- Componentes funcionales, `useState` y elevación del estado (formulario → datos → salida).
- Tipado de los datos de la API con interfaces de TypeScript.
- Dos peticiones asíncronas seguidas con `async/await` y gestión de errores.
- `base` relativo en Vite para que la compilación funcione en GitHub Pages y dentro de un iframe.

### Cómo ejecutarlo

```bash
npm install
npm run dev
```

### Comprobaciones

Node.js 22.12+ o 24+.

```bash
npm test
npm run lint
npm run build
```

Las pruebas comprueban las respuestas de la API, la ausencia de puesta de sol, los errores HTTP, la cancelación y el límite de espera de 12 segundos por petición. Una búsqueda nueva cancela la anterior.

### Publicación

Cada push a `main` o `master` compila la aplicación y la publica en GitHub Pages (`.github/workflows/deploy.yml`). Una sola vez en GitHub: **Settings → Pages → Source: GitHub Actions**.

### Desarrollo futuro

Lo que sigue son propuestas, no funciones ya implementadas.

- Visual: iconos del tiempo y un marcador de carga en la paleta actual.
- Ingeniería: pruebas del formulario asíncrono y elección de ciudad cuando hay varias coincidencias, en lugar de tomar siempre la primera.
- Funciones: pronóstico de siete días, ciudades recientes y cambio entre grados Celsius y Fahrenheit.

---

<a name="french"></a>

## Français

**La météo**

Une petite application météo en React et TypeScript. Saisissez une ville et vous obtenez la température actuelle, la pression et l'heure du coucher du soleil à l'heure locale de cette ville.

**Démo :** https://dubnovalexey.github.io/weather-ts/

### À essayer

Cherchez une ville et regardez la température, la pression et l'heure locale du coucher du soleil. Lancez une nouvelle recherche, puis saisissez un nom inconnu pour voir les états de chargement et d'erreur.

### Fonctions

- Recherche par nom de ville dans n'importe quelle langue ; la première correspondance est retenue.
- Température actuelle (°C) et pression au niveau de la mer (hPa).
- Coucher du soleil selon le fuseau horaire de la ville elle-même.
- Des messages clairs pendant le chargement et quand la ville est introuvable.
- Les données météo viennent d'[Open-Meteo](https://open-meteo.com/) ; l'application ne demande aucune clé d'API.
- Tient sur un écran de téléphone : sur un écran étroit, les deux moitiés de la carte se placent l'une sous l'autre.

### Comment c'est fait

Deux requêtes avec `fetch`. Le géocodeur d'Open-Meteo transforme le nom de la ville en coordonnées, puis l'API de prévision renvoie, pour ces coordonnées, la météo actuelle et le coucher du soleil.

### Technologies

React 19 · TypeScript · Vite · Bootstrap · Open-Meteo API · GitHub Actions · GitHub Pages

### Réalisation

- Composants fonctionnels, `useState` et remontée de l'état (formulaire → données → affichage).
- Typage des données de l'API avec des interfaces TypeScript.
- Deux requêtes asynchrones à la suite avec `async/await` et gestion des erreurs.
- `base` relatif dans Vite pour que la compilation fonctionne sur GitHub Pages et dans un iframe.

### Lancer le projet

```bash
npm install
npm run dev
```

### Vérifications

Node.js 22.12+ ou 24+.

```bash
npm test
npm run lint
npm run build
```

Les tests vérifient les réponses de l'API, l'absence de coucher du soleil, les erreurs HTTP, l'annulation et la limite d'attente de 12 secondes par requête. Une nouvelle recherche annule la précédente.

### Publication

Chaque push sur `main` ou `master` compile l'application et la publie sur GitHub Pages (`.github/workflows/deploy.yml`). Une seule fois sur GitHub : **Settings → Pages → Source: GitHub Actions**.

### Évolutions possibles

Ce qui suit sont des propositions, pas des fonctions déjà réalisées.

- Visuel : des icônes météo et un espace réservé pendant le chargement dans la palette actuelle.
- Ingénierie : des tests du formulaire asynchrone et le choix de la ville quand il y a plusieurs correspondances, au lieu de prendre toujours la première.
- Fonctions : prévisions sur sept jours, villes récentes et bascule entre degrés Celsius et Fahrenheit.
