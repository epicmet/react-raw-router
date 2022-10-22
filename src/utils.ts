export const removeHash = (url: string) => url.replace(/^#\/?|\/$/g, "");

export const navigateTo = (to: string) => {
  const { pathname, search } = window.location;

  window.location.assign(`${pathname}${search}#${to}`)
};
