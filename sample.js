const args = process.argv.splice(2);

console.log('args', args);

if (args.length < 2) {
  console.log('there must be more than 1 argument. please try again.');
  process.exit(0);
}

let total = 0;
for (let arg of args){
  console.log('arg', arg);

  if (Number.isNaN(parseInt(arg))) {
    console.log(`arg ${arg} is NaN!`)
  } else {
    if (parseInt(arg) != arg) {
      console.log('skipping');
      continue;
    }
  
    total = total + parseInt(arg);
  }
}

console.log('total', total);