export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/' &&
    (Object.keys(to.query).length > 1 || (Object.keys(to.query).length && to.query['book-page'] !== '3' && to.query['book-page'] !== '1'))) {
    return navigateTo('/');
  }

});
