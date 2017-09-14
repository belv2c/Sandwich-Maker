### Sandwich Maker

#### This project accomplishes the following in tasks in vanilla JavaScript:

- Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. Create a Sandwich module, then create the following as individual modules, using IIFE syntax.

#### Your project should have one HTML file that has:

- A section of options for each sandwich part
- The ability to select multiple, or zero, choices for each section (such as turkey and bacon, or "no meat")
- An empty DOM element into which the final sandwich order and its cost will be inserted
- The ingredient choices should be stored as JS objects that contain the ingredients as keys and their cost as the value. {"turkey": 0.90, "bacon": 1.50}
- Make sure the ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.
- Each IIFE should expose, in its public interface, a method named add{ingredient} (e.g. addMeat or addVeggies) that accepts a single argument. That argument's value should be the ingredient selected by the user.
- You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

#### How to run (Node must be installed on your machine):

```
https://github.com/belv2c/Sandwich-Maker.git
cd Sandwich-Maker
npm install http-server -g
hs -c-1
```

##### This will show in your browser at: http://localhost:8080