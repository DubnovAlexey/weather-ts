<div dir="rtl">

# מזג אוויר

[English](README.md) · **עברית** · [Русский](README.ru.md)

אפליקציית מזג אוויר קטנה ב-React וב-TypeScript: מקלידים עיר ומקבלים את הטמפרטורה הנוכחית, הלחץ ושעת השקיעה לפי השעה המקומית של העיר.

**הדגמה:** https://dubnovalexey.github.io/weather-ts/

## יכולות

- חיפוש לפי שם עיר בכל שפה; נבחרת ההתאמה הראשונה.
- טמפרטורה נוכחית (°C) ולחץ בגובה פני הים (hPa).
- שקיעה לפי אזור הזמן של העיר.
- הודעות ברורות בזמן טעינה וכשהעיר לא נמצאה.
- בלי מפתח API: הנתונים מ-[Open-Meteo](https://open-meteo.com/), בחינם לשימוש לא מסחרי.
- מתאים למסך טלפון: במסך צר שני חצאי הכרטיס מסודרים זה מתחת לזה.

## טכנולוגיות

React 19 · TypeScript · Vite · Bootstrap · Open-Meteo API · GitHub Actions · GitHub Pages

## הרצה מקומית

```bash
npm install
npm run dev
```

## בדיקות

Node.js 22.12+ או 24+.

```bash
npm test
npm run lint
npm run build
```

הבדיקות מכסות אימות תשובות, היעדר נתוני שקיעה, שגיאות HTTP, ביטול והגבלת המתנה של 12 שניות. חיפוש חדש מבטל את הקודם.

</div>
