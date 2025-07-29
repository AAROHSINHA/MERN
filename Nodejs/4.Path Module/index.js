import path from "path";
// path module allows us to work with paths

// 1. BASENAME
console.log(path.basename("c:\\nodejs\\index.js")) // returns the last portion of the path
// gives the last portion - index.js
console.log(path.basename("c:\\nodejs\\index.html")); // gives base part/last part -> index.html
// suppose from basename we want to remove extension, we can use
console.log(path.basename("c:\\nodejs\\app.js", ".js")); // app.js -> app


// 2. DIRNAME
// returns the directory name of the path
console.log(path.dirname("c:\\nodejs\\index.html")); // gives the directory - nodejs
console.log(path.dirname("c:\\nodejs\\courses\\app.js"))

// 3. EXTENSIONS
console.log(path.extname("c:\\nodejs\\courses\\index.js"));

// 4. Join to paths
console.log(path.join('c:', 'vampire-studios', 'game-section', 'deathwish'));

// 5. Go to upperlevel
console.log(path.join('c:', 'vampire-studios', 'game-section', 'deathwish', '..'));
console.log(path.join('c:', 'vampire-studios', 'game-section', 'deathwish', '..', '..'));
console.log(path.join('c:', 'vampire-studios', 'game-section', 'deathwish', '..', '..', '..'));

// 6. PARSE
console.log(path.parse("c:\\nodejs\\courses\\app.js"));
/*
{
  root: 'c:\\',
  dir: 'c:\\nodejs\\courses',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
*/
// console.log(path.parse("c:\\nodejs\\courses\\app.js").base);
// console.log(path.parse("c:\\nodejs\\courses\\app.js").name);