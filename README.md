# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/) - JS library


### What I learned

I am proud of my parseToNumber function because it is commendable for its flexibility, offering default parameters for ease of use and conditional parsing for both integers and floats. The code's readability is enhanced by its concise structure and clear intention, while its default behavior aligns with common expectations. This versatile utility, encapsulating simplicity and reusability, stands as an efficient solution for string-to-number conversion in various contexts.

function parseToNumber (str, isFloat = false) {
  return isFloat ? parseFloat(str) : parseInt(str)
}


### Continued development

1. User Experience (UX) Design
Enhancing the overall user experience has always been a priority for me. In future projects, I aim to delve deeper into UX design principles, ensuring that my applications not only meet functional requirements but also provide an intuitive and delightful user interface.

2. Accessibility
Accessibility is a crucial aspect that I am committed to prioritizing. Going forward, I intend to further educate myself on best practices for creating inclusive designs and developing applications that can be used by individuals with diverse abilities.

3. Performance Optimization
Optimizing the performance of my applications is an ongoing goal. I plan to explore advanced techniques and tools to ensure that my projects are not only feature-rich but also deliver optimal speed and responsiveness.

### Useful resources

- [Mdn Web Docs](https://developer.mozilla.org/) -  This valuable resource was instrumental in helping me tackle challenges. The well-organized documentation and insightful patterns have become my go-to reference for web development.

- [React Documentation](https://react.dev/) - - The React documentation is an amazing resource. Highly recommended for anyone navigating the aspect of React development.


## Author

- Website - [Daria Tłuczkiewicz](https://www.your-site.com)
- Frontend Mentor - [@ohdaridari](https://www.frontendmentor.io/profile/yourusername)
