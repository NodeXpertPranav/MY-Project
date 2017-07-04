console.log("HELLO WORLD");
process.on('', (code) => {
  setTimeout(() => {
    console.log('This will not run');
  }, 0);
});
