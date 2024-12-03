# Личный кабинет сотрудника компании ДРСК

### Описание проекта
Предоставляет возможность выбора или запроса кадровых, технических и других услуг в компании. Отображает список новостей и текущих событий, а также позволяет просматривать данные об авторизованном пользователе.

### Структура проекта
```
lk.sirius.react.project/
├── public/                 # Публичные файлы приложения
└── src/                    # Исходный код приложения
    ├── components/         # Компоненты React
    ├── layouts/            # Компоненты шаблонов
    ├── pages/              # Компоненты страниц проекта
    ├── services/           # Модули для работы с токеном
    ├── store/              # Модули для работы с состоянием
    ├── types/              # Отображение данных с API
package.json                # Зависимости и скрипты проекта
README.md                   # Документация проекта
```

### Конвенция разработки
- Все компоненты называются **с большой буквы**;
- Лежат в **одноименной директории**;
- Именование папок компонентов в формате **main-page**;

### Наименование веток
- `feature/...`: для новых функций 
- `update/...`: для обновлений

### Наименование коммитов
- `feat`: Добавляет новую функцию
- `fix`: Исправляет ошибку
- `doc`: Добавляет документацию по проекту
- `delete`: Удаляет файлы 
