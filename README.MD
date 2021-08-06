# Gulp configuration for multi-page sites by timshaq

## Краткое описание стека
+ HTML
+ SASS
+ JS (vanilla)

## Быстрый старт
+ Клонируйте репозиторий

```
git clone https://github.com/timshaq/gulp-site
```
+ Перейдите в директорию
```
cd gulp-site
```
+ Установите пакеты

```
npm i
```
+ Сконвертируйте шрифты .ttf в .woff и .woff2 (чтобы при билде или в режиме разработки не приходилось делать этого снова — экономим время сборки)

```
gulp fonts-convert
```
+ Приступайте к работе!

```
gulp watch
```

## Структура

### Скрипты (JS)
+ src/asserts/js
+ файлы скриптов подключаются в виде функций через script.js

### Стили
+ src/asserts/sass
+ все файлы стилей подключаются через main.sass

### Сторонние библиотеки
+ Положить в src/asserts/lib

## Команды
+ Режим разработки (в браузере выбрать build/нужная-страница.html)
```
gulp watch
```
+ Создать продакшн версию (папка build)
```
gulp build
```