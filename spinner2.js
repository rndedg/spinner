const arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let delay = 0;

for (const item of arr) {

  setTimeout(() => {
    process.stdout.write(item);
  },
  delay
  );
  delay += 200;
}