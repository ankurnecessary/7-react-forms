# 7-react-forms
Learning react forms


Working with:

1. components
2. Importing image in a component.
3. useState()
4. Derived state from existing state variable.
5. Tailwind css - [Practice Project 2 - react-project-management]
6. useRef() helps in accessing the DOM of an element.
7. useRef() also helps in retaining the parts of the code like a reference to setTimeout(), setInterval(), array, object etc.
8. useRef() value doesn't change when component function renders again and again because of state function updates.
9. Using useRef() to manipulate the DOM is discouraged.
10. ```<dialog></dialog>``` is what we use very frequently with useRef() to open or close modals.
11. forwardRef()
12. useImperativeHandle()
13. createPortal()
14. createContext()
15. useContext()
16. useReducer()
17. <React.StrictMode>
18. Children prop
19. Using rest operator while using component tag.
20. useReducer()
21. useEffect() - with blank dependency array will fire only once at the end of first render of the component.
22. useEffect() - with dependency array will fire on first render of the component and every time value of the variables in dependency array changes.
23. useEffect() - with a return function inside useEffect() function. The function returned will fire when the related component dismounts. That is why it is also called clean up function.
24. We generally use useEffect() for the asynchronous code which will resolve in future and can change the state of the application.
25. useEffect()'s dependency array should include useState() variables, useContext() variables and props which are used inside the useEffect()'s first function argument.
26. useCallback() - Whenever we wrap any function inside the useCallback() it stops getting recreated again and again when a component rerenders, if the dependency array is blank. If not then the function in useCallback() will be recreated when the value of any of the dependency change.
27. In the dependency array of useEffect() and useCallback() function we put props, state variables or other functions that are dependent on the state variables like context values and other functions. You will not add the state updating function of useState() directly.
28. useState()'s state updating function never gets recreated again in react. So, we need not pass it as a dependency in useCallback() or useEffect().
29. We have to add **variables related to derived state** as dependencies in useCallback() and useEffect().
30. ***We should avoid or at least minimize the usage of useEffect() in our application as a best practice.***
31. If we have multiple components having **key** attribute with them and all of them belong to same entity then we should consider making a separate component for that entity and use **key** attribute over it.
32. We as a developer cannot consume key prop. It is exclusively for the react.
33. Why use PropTypes instead of TypeScript? Answer: type-checking props using TypeScript can only be effective when the prop's value is hardcoded. Even though you claim that the data from the API is a number, you won't get any errors when the data is a string. Since type-checking is done during runtime, PropTypes is a better tool for unknown data.
34. React query is a good plugin for HTTP calls via react application. AJAX
35. Whenever a component rerenders because of state function being called, it's child components are also rerendered.
36. [React.memo](https://docs.google.com/document/d/1IKjPhw6a3TPKvmeJ9743PljP6ci7UkbkgNa3sQwVRWs/edit#heading=h.raq8jq8e7749)
37. We can use React.memo() with useCallback() too.
38. [useMemo()](https://docs.google.com/document/d/1IKjPhw6a3TPKvmeJ9743PljP6ci7UkbkgNa3sQwVRWs/edit#heading=h.cf9uscl5y5c8)
39. Using key attribute and it's value as the array index in repeating element in the JSX is a bad idea. Instead we should use id in the array elements as the value of the key attribute. It increases performance and remove functionality issues.
40. Using key attribute in the component tag is another pattern that could help us in re-initializing the component. So, it is like reloading a component with new prop values instead of using useEffect() to do so. It is like using a component afresh.
41. If we have multiple state functions being fired at once, may be within a function, then that doesn't mean that our component will also get rerendered multiple times (once for each state function call). Instead it will render only once.
42. We can use [millionjs](https://million.dev/) to increase the speed and performance of our react project. It works on state changing and checking algorithm.
43. A library like gotbootstrap.com in react is [Material Tailwind](https://www.material-tailwind.com/docs/react/accordion).
44. Next.js or Remix
45. General rules of using hooks.
    1. Only call Hooks in Component or Other custom hook function.
    2. Only call hooks on top level i.e. directly inside a component function but not in any if block or function inside component function.
46. [Why custom hook?](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39837042#content). Suppose we have created a component and it is being used in multiple places later on. The component needs some data to be passed in through one of it's props. We are fetching this data from different HTTP endpoints at all the places where we have used this component. That means there is some code pattern that is common among all the places where the component is used and re-used. To decrease the code repetition related to the common code pattern we use **custom hooks**.
47. A custom hook's function name should start with the word 'use' like 'useFetch()' etc.

[Eslint configuration - Best linting configuration is to use "format on save" and don't use "formatting option of ES Lint"](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8231814#questions/20789494)

[This link helps in setting up the most important rule that will help in highlighting the unused variables and highlighting the undeclared variable usage](https://www.dhiwise.com/post/essential-eslint-rules-for-react#1-react-jsx-uses-react-)

[To show errors for unused variables / undeclared variables via eslint](https://eslint.org/docs/latest/rules/no-undef)

[Refs vs State Values](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39836310#questions)

In the code below we are iterating over an array of ids i.e. **storedIds** and on the basis of ids we are fetching places. Finally, we are storing those places in an array and assigning it to variable **storedPlaces**.

```Javascript
const storedPlaces = storedIds.map((id) => {
  return AVAILABLE_PLACES.find((place) => place.id === id);
});
```

A way of shuffling the array elements.

``` Javascript
shuffledAnswers.sort(() => Math.random() - 0.5);
```
