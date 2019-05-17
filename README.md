# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To install dependencies, use the package manager [Yarn](https://yarnpkg.com/en/):

```
yarn
```

To start a development server:

```
yarn start
```

## Setup

Please create a new, public Github repository where your assessment can be reviewed. We recommend the following steps:

- Create a repository on your personal Github. Make sure the `Initialize this repository with a README` box is unchecked.
- Visit your new repository. Copy the `…or push an existing repository from the command line` code provided and run it in your terminal in the same directory as this README file. It will look something like this:

```
git remote add origin git@github.com:my-username/my-assessment.git
git push -u origin master
```

Note: You're encouraged to show your work by including multiple commits - we'll be looking through your git history.

## Tasks

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
3. [Hook Up Product API](/tasks/03-product-api.md)

You're welcome (but not required) to add any libraries you think would be helpful.

Please also update this README file: we'd love to see notes on your decision-making process, links to the most exciting pieces of code, or anything else that will give us additional context when reviewing your assessment.

## My Notes
#### Design choices
1. I used bootstrap because I am comfortable with the responsive grid of Bootstrap and thought it would be a pretty straightforward way for a responsive design
2. I ran out of time to implement the buttons to change the quantity in the cart so I chose to display "Amount : " with the quantity.

#### Code I am proud of
1. I used a boolean in product.js to display the image and quantity in the cart. 
2. Figuring out how to return different modal views for the cart based on if there was items in the cart. Using if-else in Cart.js before the return () 

#### Message
I haven't built a fully functioning react app like this one before so I enjoyed learning about jsx and implementing responsive design. However, because of this I didn't have enough time to complete the design as well as I would have liked. Overall,I thought this was a really great learning experience and I appreciate the opportunity, thank you. 

