const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
const argAsNumber = Number(args[i]);
if (!isNaN(argAsNumber) && argAsNumber > 0) {
    setTimeout(function() {
      console.log('Beep!');
      process.stdout.write('\x07');
    }, argAsNumber * 1000);
  }
}
