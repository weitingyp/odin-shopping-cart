# Shopping Cart Project

## Summary

This is a single page application with made with React. Users can:

- Navigate across Home, Shop, Cart pages
- Add items to cart on the Shop page
- Increment/decrement quantities of items on Shop and Cart pages
- Review their total bill on the Cart Page (checkout button is a dummy button)

## What I learnt

- React and React Router was used
- When to use context vs state (prop drilling): I chose to use context for cart as a shopping app may require it to persist for each user as the app grows. State can be used for simple applications, but once prop has to be drilled beyond 2 levels, context is easier to manage.
- When to use React Router's loader vs React's useEffect: loader ensures that data is ready before components are rendered. This can be helpful when multiple components require the same data. useEffect can be used for simpler applications where the data is not needed before the component is rendered (although a re-render is done if a state is updated). In this application, I used a loader to fetch items from FakeStore API as the product database data is used across both Shop and Cart page. For future expansions, I'd query a database instead.

## Future steps

- Add a link to a checkout page to simulate it
- Persist cart with browser cookies
- Add user login/logout
