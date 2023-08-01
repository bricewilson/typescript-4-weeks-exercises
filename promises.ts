fetch('https://www.typescriptlang.org')
  .then((res: Response) => console.log(`HTTP Status: ${res.status}`))
  .catch(reason => console.error(`ERROR: ${reason}`))
  .finally(() => console.log('Done processing promise.'));

console.log('HTTP request sent...');

