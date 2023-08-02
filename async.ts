async function GetWebsite(): Promise<void> {

  let res: Response = await fetch('https://www.typescriptlang.org');
  console.log(`HTTP Status: ${res.status}`);

}

GetWebsite()
  .catch(reason => console.log(`ERROR: ${reason}`));

console.log('HTTP request sent...');