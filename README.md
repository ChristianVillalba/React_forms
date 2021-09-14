# React: Forms
Created with [CodeSandbox](https://codesandbox.io/)  
Notes from: React module  
[The Complete 2021 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)  
Instructor: Dr. Angela Yu

## Description
This app renders a very simple form: 
* A greeting heading: "Hello" 
* An Input type text with a placeholder asking our name.
* A Submit Button

When the user inputs some text and press the submit button,    
The heading will change useing the information that the user is typed in.

Every single change registerd in our Input Element (text) will be printed in the console (DevTools).

---
## Notes

### Forms

When we're creating web apps, it's pretty common that we're going to be creating forms.       
In order to really understand how forms work     
We need to incorporate our knowledge about **setting state** and **using state**.     

After learning how to handle [Simple Events](https://github.com/ChristianVillalba/react_event_handling__basic_form.git) such as clicking a button,           
We are going to use more complex events such as the events that arise from within a form.   

Just as we had the ```onClick``` event that we could add to our submit button,   
we have a event on the inputs called ```onChange``` and it's triggered every single time the value of the input changes,      
eg: a function that register every change in the Input Element
```html
<input
    type="text"
    placeholder="What's your name?"
    onChange={handleChange}
    value={userName}
/>
```

```javascript
  function handleChange() {
    console.log(event.target.value);
  }
```
Now when we start typing inside this input, namely changing it,       
we can see that my ```handleChange``` gets called every time I add a new letter,      
printing the input in the console (DevTool).    

<!-- However, this is not very useful because what we're interested in what the user's name is typed     
rather than the fact that they have started typing.      -->
When the input element triggers the function that's stored in the onChange,      
it also passes over an object.      
And that object corresponds to the event that triggered this onChange.      
We can log various things related to that event:      
```event.target``` / ```.value```/ ```.type``` / ```.placeholder``` 

### Using the User's Input

To use the ```value``` someone is introducing,    
eg: Heading corresponding to what is typed in the input     
We need to have state in our app:    
```javascript
const [userName, setName] = useState("");
```
Our state holds: 
* the user's name  ```userName```, the starting value will be an empty string ```("")```     
* the function```setName``` which update this name constant 
Now we can use the ```userName``` const in our h1 Element
```html
<h1>Hello, {userName} </h1>
```
And when the user uses the Input, ```handleChange``` will be called,     
the function ```setName``` will be called passing the value of the input
```javascript
function handleChange() {
  setName(event.target.value);
}
```

### Value: difference HTML vs React

In **HTML**, the elements themselves are responsible for handling their own state value       
and this corresponds to what is currently inside the input.     
eg: The Attribute value corresponds to what is currently inside the input. In HTML is handled by the Input property.

But in **React** we should set the value to the variable that comes from the event ```event.target.value```    
This way we have one single source of truth which is the state of name.      
This in React is called a [Controlled Component (Documentation)](https://reactjs.org/docs/forms.html#controlled-components)  

### Submit Buttons in React

The default behaviour of **submit** inside of a form is quickly **refresh the app**,     
for this reason instead of using ```type=submit```, we use:
```javascript
 <button onClick={handleSubmit}>Submit</button>
```
Where ```{handleSubmit}``` will be a function with the action we need. 
eg: Our heading only will change  when we click submit button (check out index.js)
```javascript
function handleSubmit() {
    setHeading(userName);
    // We can add this to prevent the default behaviour (refresh)
    event.preventDefault();
  }
```

---
## What I have learned with this project:
* How Forms work in React
* Triggering Input Elements
* Value Attribute, differences: HTML vs React
  * React: Controlled Components
* How to Submit Buttons work in React
  * Preventing default behaviour
