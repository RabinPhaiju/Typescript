# What Is TypeScript?

    - TypeScript is an open source language and is a superset of JavaScript
    - Offers additional features to JavaScript including static types
    - Using types is completely optional
    - Compiles down to regular Js
    - Can be used for front-end JS as well as backend with Node.js
    - Includes most features from ES6, ES7 (classes, arrow functions, etc)
    - Types from 3rd party libraries can be added with type definitions

# Dynamic vs Static Typing.

    - In dynamically typed languages, the types are associated with run-time
    - values and not named explicitly in your code
    - In statically typed languages, you explicitly assign types to variables,
    - function parameters, return values, etc
    - Static Examples:
        - Java, C, C++, Rust, Go
    - Dynamic ExampleS:
        - JavaScript, Python, Ruby, PHP

# Pros & Cons.

    - PROS:
        - More Robust
        - Easily Spot Bugs
        - Predictability
        - Readability
        - Popular

    - CONS:
        - More Code To Write
        - More To Learn
        - Required Compilation
        - Not True Static Typing

# Compiling TypeScript

    - Typescript uses .ts and .tsx extensions
    - TSC (TypeScript Compiler) is used to compile .ts files down to JS
    - Can watch files and report errors at compile time
    - Many tools include TS compilation by default
    - Most IDEs have great support for TS
    - The tsconfig.json file is used to configure how TypeScript works

# Convert .ts to .js

    - tsc [filename]
    - tsc --watch [filename]
