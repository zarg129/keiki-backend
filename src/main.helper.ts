process.on('uncaughtException', function (err) {
  console.error(err.stack);
  process.exit(1);
});
