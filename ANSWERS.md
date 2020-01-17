- [x] Why would you use class component over function components (removing hooks from the question)?

If I'm working with a codebase that is primarily based on class components, then it would be easier to use class components rather than converting everything to functional components. Until recently, class components would've been preferred if your components were dealing with state. Also, if you're a stickler for using the this keyword, then use class components. Lastly, class-based components have a slightly better rendering speed.

- [x] Name three lifecycle methods and their purposes.

    - ComponentDidMount gets called after the render method in the mounting phase so that components made here can be used later.
    - shouldComponentUpdate is a method in the updating phase where you can update state and component data.
    - componentWillUnmount is called in the unmounting phase to clean up and remove components from the screen to prevent memory leaks and such.

- [x] What is the purpose of a custom hook?

Custom hooks allow for more DRY and dynamic code.

- [x] Why is it important to test our apps?

Testing reduces the risk of bugs showing up in the production code. It encourages us to write better code and think about edge cases that may come up for a user or for the backend developer.