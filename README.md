# CT-NG-POC

✨CT-NG-POC contains all angular POCs under a single codebase


## POC-list

- POC1 => Users
> -Create a new component: Users
><br>Create a an array of objects to store users information like name and age
><br>Display the users information using ngFor in the Users component
><br>Create a boolean flag with default as true.
><br>Toggle the content of some paragraph using `ng-template` with ngIf-else by changing the flag value manually
- POC2 => Wells
><br>-Create 2 new components: well-list and well
><br>-Create a an array of objects to store wells information like name, type and sourcekey  in well-list componenet
><br>-Display the wells information like below use ngClass and NgStyle to change the background-color and text-color depending on the type
><br>-Create a form with below inputs in well componenet with a Add button.
><br>-pass sourceKey from parent to child and in view it should be disabled.
><br>-Create a well and pass it parent using Output directive so that it gets displayed in the list on >click of Add button.
><br>-From the parent component when you click on the source key, it will show the well component with the sourceKey populated by default and disabled since you clicked on it..
><br>-There can be many wells added associated to a source key.
><br>-You can hard code a couple of unique source keys.
- POC3 => Dyanamic draggable components
><br> -Create a container, layout with 2 sections. Left for component rendering and right for components.
><br> -Right side will have a list of generic components.
><br> -User should be able to drag a component from the list on the right and drop inside the left section, where the component will be rendered. 
><br> -Use Directive for injecting the component into the template.
><br> -Model
><br> -Use service for component meta data
><br> -Use interface for data binding.
><br> -Events
><br> -Draggable Events for Drag and Drop

## Installation

CT-NG-POC requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd CT-NG-POC
npm i
ng serve
```
Once terminal shows `✔ Compiled successfully.`, navigate to `http://localhost:4200`