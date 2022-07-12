# React Forms Exercises

## Solution Notes

### Setup

    mkdir react_forms
    cd react_forms
    npx create-react-app color_box_maker
    cd color_box_maker
    npm start

### Solution Development

- Create components and tests

  - Box.js, Box.test.js
  - BoxList.js, BoxList.test.js
  - NewBoxForm.js, NewBoxForm.test.js

- Update App.js and App.test.js

### Testing

- npm test

## Exercise Instructions and Requirements

These exercises will give you more practice working with React forms.

### Testing Requirements

Make sure both of these apps have tests. Here are the guidelines for testing:

    Every component needs a smoke + snapshot test.
    Critical Business Logic needs tests too. Use your judgement for this, but make sure you cover core functionality. Examples include: the ability to enter data, submit a form, and have the desired outcome appear in the DOM.

Color Box Maker

Create a new React application, which contains the following components:

    App - this component should render the BoxList component.
    BoxList - Place your state that contains all of the boxes here. This component should render all of the Box components along with the NewBoxForm component
    Box- this component should display a div with a background color, width and height based on the props passed to it.
    NewBoxForm - this component should render a form that when submitted, creates a new Box. You should be able to specify the Box’s width, height, and background color. When the form is submitted, clear the input values.
    When each Box component is displayed, add a button with the text of of “X” next to each Box. When this button is clicked, remove that specific box. This will require you to pass a function down as props - the button should not be a separate component, it should be included in the Box component.
