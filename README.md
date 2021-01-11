# Hire Taxi Form

Easy to use form for hire taxi

`npm i`

generate graphql schema `npm run apollo`

run client `npm run serve`

run graphql server `npm run apollo:start`

## Suggestions for improvement

- Форма уже имеет разное поведение зависящее от выбранного аэропорта. 
Для Хитроу есть возможность выбрать терминал. 
В дальнейшем количество опций относящихся к Хитроу может увеличивться так же 
как и колличество аэропортов в целом. Следовательно нужно задуматься как 
справляться с растущим количеством кастомных полей для отдельного аэропорта. 
  - Простой механизм создания новых аэропортов. Слабосвязанный с логикой 
  отображения формы.
  - Создание кастомных полей для аропорта должно быть инкапсулировано 
  внутри кода создающего аэропорт и иметь возможность простого редактирования
- Нужно предусмотреть больше форматов для номера рейса (не только `\w\w ?\d\d\d?\d?`).

## Change log

### 11.01.2021

- Constants List has packed into separate file
- Data structure of airport has packed into separate file. All things that
bind with airport list has situated in one place.
- Code that works with graphql and variables with that code interacts 
has packed in one file.
- Code that launch animation don't interfere into `HireTaxi.vue` component.
- `HireTaxi.vue` component includes only form validation code.
- Scss preprocessor has added.
- Css helpers has situated in separated file.
