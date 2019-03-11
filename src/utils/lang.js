export function toSpanish(to) {
  if (to.startsWith('/es')) {
    return to;
  }
  return `/es${to}`;
}

export function toEnglish(to) {
  if (to.startsWith('/es')) {
    return to.replace(/^\/es/, '');
  }
  return to;
}
