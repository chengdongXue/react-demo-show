# Introduction
Hey Guys, This project just only for my learning react and related third plugins technology, with not any special.
I will have been completed this courses by the end of august in 2021,
and than will have continue studying react native, a great deal of webpack courses, new feature for javascript, and finally you will become an expert at react and react native.

## 1. Added Flow and Babel for the project
It was added the Flow that enhanced codes checker and type checker just like typescript language.
It was tells the different between component class of react and function of react for hooks with useRef() and React.createRef()

## 2. To learned How to splitting code and React.lazy features in react.
For splitting code, These are official sites that recommend for those people who needs this as below
https://segmentfault.com/a/1190000017483690
https://dev.to/damcosset/implement-code-splitting-in-react-1c0j

For React.lazy:
It could be dynamically import component in react when you improvement your application performance.
The Suspense can warp a great deal of lazy loading components.

## 3. To integration typescript with react.
This time, we added and integrated a great number of new feature,such as eslint, typescript etc...
Integrate ESLint with your React project step by step (javascript)
https://dev.to/brayanarrieta/integrate-eslint-with-your-react-project-javascript-29p
ESLint will automatically start detecting errors/warnings in .js and .jsx files. This is very very important reminder.
To disable the linting of some files/folders you can create a .eslintignore at the root of the project.
    node_modules
    build
    README.md
You can also add linting to scripts in package.json as a part of your pipeline process
    "scripts": {
        "lint": "eslint . --ext js,jsx",
        "lint:fix": "eslint . --ext js,jsx --fix"
    }