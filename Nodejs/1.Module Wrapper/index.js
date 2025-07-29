/*
🧠 What is the Module Wrapper Function in Node.js?

Every time you create a JavaScript file and run it with Node.js,
Node automatically wraps the entire code inside a special function.
This is known as the **Module Wrapper Function**.

It looks like this behind the scenes:

(function(exports, require, module, __filename, __dirname) {
    // your code here
});

This means you don’t see it, but Node puts your code inside this function
before executing it. This helps Node treat every file as a separate module.
*/
(function(exports, require, module, __filename, __dirname){
    // <code>
    console.log("Hello from IIFE");
})();
/*
------------------------------------------------------------------------

🔍 Purpose of the Module Wrapper:

1. ➤ To provide **modular scope**:
   Your variables and functions won't leak into the global scope. They stay
   limited to the file unless explicitly exported.

2. ➤ To give you access to helpful Node-specific variables:
   - `exports`: Shortcut to export functions/variables from your file.
   - `require`: Function to import other modules or built-in packages.
   - `module`: Object representing the current file/module. Contains metadata.
   - `__filename`: The absolute path of the current file.
   - `__dirname`: The absolute path of the directory containing the file.

3. ➤ To mimic the behavior of an IIFE (Immediately Invoked Function Expression):
   Node runs your file immediately in isolation like an IIFE to avoid polluting
   the global environment.

------------------------------------------------------------------------

✅ Summary:
- You don’t need to manually write the wrapper — Node handles it for you.
- The 5 parameters are available in every file by default.
- This system is what makes the CommonJS module system (require/module.exports)
  in Node.js work smoothly.

This knowledge helps you understand how modules are kept separate and
how Node provides useful built-in features like `require()` and `__dirname`.
*/
