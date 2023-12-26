## **Реализовано приложение для поиска и сохранения плейлистов**

# 1 уровень (необходимый минимум)

- Реализованы следующие требования к функциональности:

* [x] Для хранения учетных записей использован localStorage

## React

- [x] Пишем функциональные компоненты c хуками в приоритете над классовыми:
- [x] Есть разделение на умные и глупые компоненты. Пример умного: [Card](https://github.com/fourlena/aston-project/blob/main/src/components/card/card.jsx), пример глупого: ([Song](https://github.com/fourlena/aston-project/blob/main/src/components/song/song.jsx))
- [x] Есть рендеринг списков: ([SearchList](https://github.com/fourlena/aston-project/blob/main/src/pages/search-list/search-list.jsx))
- [x] Реализована хотя бы одна форма: ([Form](https://github.com/fourlena/aston-project/blob/main/src/components/form/form.jsx))
- [x] Есть применение Контекст API: [ThemeContext](https://github.com/fourlena/aston-project/blob/main/src/context/theme-provider.jsx).
- [x] Есть применение предохранителя: [ErrorBoundary](https://github.com/fourlena/aston-project/blob/main/src/components/error-boundary.jsx).
- [x] Есть хотя бы один кастомный хук: [useFavorite](https://github.com/fourlena/aston-project/blob/main/src/hooks/use-favorite.js).
- [x] Хотя бы несколько компонентов используют PropTypes ([Card](https://github.com/fourlena/aston-project/blob/main/src/components/card/card.jsx)).
- [x] Поиск не должен триггерить много запросов к серверу ([useDebounce](https://github.com/fourlena/aston-project/blob/main/src/hooks/use-debounce.js)).
- [x] Есть применение [lazy + Suspense](https://github.com/fourlena/aston-project/blob/main/src/App.tsx).

## Redux

- [x] Используем Modern Redux with Redux Toolkit ([store](https://github.com/fourlena/aston-project/blob/main/src/store/store.jsx))
- [x] Используем слайсы: ([favoriteSlice](https://github.com/fourlena/aston-project/blob/main/src/store/slices/favorite-slice.jsx))
- [x] Есть хотя бы одна кастомная мидлвара: ([middlware](https://github.com/fourlena/aston-project/blob/main/src/store/slices/middleware.jsx))
- [x] Используется RTK Query: ([playlistsApi](https://github.com/fourlena/aston-project/blob/main/src/api/playlist-api.jsx))
- [x] Используется Transforming Responses:([playlistsApi](https://github.com/fourlena/aston-project/blob/main/src/api/playlists-api.jsx))

## Дополнительно:

- использована библиотека [Formik](https://formik.org/) для форм регистрации и входа
- использована библиотека [Material Ui](https://mui.com/material-ui/) для формы
