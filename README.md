Реализовано приложение для просмотра и сохранения плейлистов

# 1 уровень (необходимый минимум)

- Реализованы следующие требования к функциональности:

* [ ] Для хранения учетных записей использован localStorge

## React

- [ ] Пишем функциональные компоненты c хуками в приоритете над классовыми:
- [ ] Есть разделение на умные и глупые компоненты. Пример умного: [Card](./src/components/card/card.jsx), пример глупого: [Song](./src/components/song/song.jsx)
- [ ] Есть рендеринг списков: [SearchList](./src/pages/search-list/search-list.jsx)
- [ ] Реализована хотя бы одна форма: [Form](./src/components/form/form.jsx)

## Redux

- [ ] Используем Modern Redux with Redux Toolkit [store](./src/store/store.jsx)
- [ ] Используем слайсы: [favoriteSlice](./src/store/slices/favorite-slice.jsx)
- [ ] Есть хотя бы одна кастомная мидлвара: [middlware](./src/store/slices/middleware.jsx)
- [ ] Используется RTK Query: [playlistsApi](./src/api/playlist-api.jsx)
- [ ] Используется Transforming Responses:[playlistsApi](./src/api/playlists-api.jsx)

## Дополнительно:

- использована библиотека [Formik](https://formik.org/) для форм регистрации и входа
- использована библиотека [Material Ui](https://mui.com/material-ui/) для формы поиска

## **Не сделано:**

- **применение Контекст API**.
- **применение предохранителя**.
- **хотя бы один кастомный хук**.
- **Хотя бы несколько компонентов используют PropTypes**.
- **Поиск не должен триггерить много запросов к серверу**.
- **Есть применение lazy + Suspense**.
- **Страница История и весь сопутствующий функционал**.
