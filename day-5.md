# Web Debugging and Optimization Exercise

## Overview

This exercise is designed to improve your skills in web debugging and optimization. You will be working with an intentionally flawed web application. Your task is to identify and document the problems in the provided HTML, CSS, and JavaScript files.

## Instructions

Copy this README.md into your Devtools REPO in a new MD file called Day-5.md

### Step 1: Identify Problems

Go through the provided files (`index.html`, `style.css`, and `app.js`). Each file contains several marked problems (indicated by comments like `<!-- Problem 1: -->`, `/* Problem 5: */`, etc.). Your task is to identify what each problem is and why it is an issue.

### Step 2: Document Each Problem

In this README.md file, document each problem. Write a sentence for each problem explaining what the issue is and why it's problematic. Use the format below for your documentation:

#### Problem 1:

- Description: [Meta description is missing, Document doesn't have a <title> element]

 - Proposed Solution: Add meta and title in head section.

#### Problem 2:

- Description: [Image does not have explicit height set]
- Proposed Solution: set image height for better performance and possibly set to a smaller image size for better load time.

#### Problem 3:

- Description: [full jQuery library is being used for just one line of jQuery code, which hits performance due to a very big file size.]


#### Problem 4:
- Description: [for inline styling, in html file, 'inline-style' class is not defined/assosiated/CSS not being used.  ]
 - Proposed Solution: Class should be assigned to some element to apply Css.  
 - Css should all be in one place, preferably in CSS file.

#### Problem 5: use of Important will endup overwriting your intended styles and will cause issues with the look and design of the page.  H1 hex color value is not defined properly
- Proposed Solution: Use important only if actually needed for keeping styles from changing.

#### Problem 6: 3 unused classes have same properties
- Proposed Solution: For performance optimization properties can be defined to one class and used where ever needed, unless all classes are used seperately someehere.

#### Problem 7: #largeImage has width set to a high value which can be problematic for elements during page load on differrnt screen sizes, also affects page load time.

- Proposed Solution: Either define smaller value for width or put image in a container where container has a set size so when image loads inside the container it doesn't affect the size or placing of other elements.

#### Problem 8: selecting h2 by including too many selectors which can hit performance.
- Proposed Solution: h2 can be accessed directlly instead of adding other selectors to optimize performance, unless there is an absolute need for it.

#### Problem 8: for loop is updating innertext based upon asynchronous data which takes longer time to load/update.

#### Problem 9: 
#### Problem 10:


#### Problem 11: Only one jquery is being used to perform a function while its using a complete jquery library at the backend slowing down the performance.



### Step 4: Reflect


## Submission

---

This exercise is an opportunity to practice critical web development skills. Pay close attention to detail and think about how each issue affects the overall performance and user experience of the web application.