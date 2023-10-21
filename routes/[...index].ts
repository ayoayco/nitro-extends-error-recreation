export default eventHandler((event) => {
  const { path } = event;

  return doSomething(path);
});

function doSomething(path: string) {
  return `hello world: ${path}`;
}
