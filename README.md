Реализовано приложение для просмотра и сохранения плейлистов

# 1 уровень (необходимый минимум)

- Реализованы следующие требования к функциональности:

* [x] Для хранения учетных записей использован localStorge

## React

- [x] Пишем функциональные компоненты c хуками в приоритете над классовыми:
- [x] Есть разделение на умные и глупые компоненты. Пример умного: [Card](https://github.com/fourlena/aston-project/blob/main/src/components/card/card.jsx), пример глупого: ([Song](https://github.com/fourlena/aston-project/blob/main/src/components/song/song.jsx))
- [x] Есть рендеринг списков: ([SearchList](https://github.com/fourlena/aston-project/blob/main/src/pages/search-list/search-list.jsx))
- [x] Реализована хотя бы одна форма: ([Form](https://github.com/fourlena/aston-project/blob/main/src/components/form/form.jsx))

## Redux

- [x] Используем Modern Redux with Redux Toolkit ([store](https://github.com/fourlena/aston-project/blob/main/src/store/store.jsx))
- [x] Используем слайсы: ([favoriteSlice](https://github.com/fourlena/aston-project/blob/main/src/store/slices/favorite-slice.jsx))
- [x] Есть хотя бы одна кастомная мидлвара: ([middlware](https://github.com/fourlena/aston-project/blob/main/src/store/slices/middleware.jsx))
- [x] Используется RTK Query: ([playlistsApi](https://github.com/fourlena/aston-project/blob/main/src/api/playlist-api.jsx))
- [x] Используется Transforming Responses:([playlistsApi](https://github.com/fourlena/aston-project/blob/main/src/api/playlists-api.jsx))

## Дополнительно:

- использована библиотека [Formik](https://formik.org/) для форм регистрации и входа
- использована библиотека [Material Ui](https://mui.com/material-ui/) для формы

## **Не сделано:**

- **применение Контекст API**.
- **применение предохранителя**.
- **хотя бы один кастомный хук**.
- **Хотя бы несколько компонентов используют PropTypes**.
- **Поиск не должен триггерить много запросов к серверу**.
- **Есть применение lazy + Suspense**.
- **Страница История и весь сопутствующий функционал**.
