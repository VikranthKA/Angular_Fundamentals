# Angular

* **Angular is a framework for building UI**
* **You can create single page application (SPA) which improves user experience**
* **You can create reusable components**
* **MVC at client side**
* **Quicker development & less dependency on third party library(eg-routing,validation,SSR)**
* **Angular apps are fast(AOT compiler)**
 
___

## Steps to works with Angular
1. To create the angular-globally `npm install -g @angular/cli`

2. To create a project `ng new first-ng-app`

3. cd `first-ng-app` and `ng serve -o or npm run start`

___
### Theory

Standalone Component?
* A standalone component is a type of component that doesn't belong to any specific Angular module
* Less boiler code/configuration 
* Lazy loading a component is also possible now













___


**wt are angular Directives?**
Are functions that are executed when they are found on the DOM by the Angular compiler.

| **Types**             | **Description**                                                                                                          |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------|
| **Component**         | Defined using the `@Component` decorator. <br> Angular adds the content based on where you specify the selector.          |
| **Structural Directive** | Alters or modifies the DOM. <br> Examples: `*ngIf`: Acts according to some give condition.When condition is true, element will be added to the DOM, `*ngFor`:This directive repeats itself for every element present in the list, `*ngSwitch`.                                             | **Attribute** | Modify behaviour of existing elements   Used as attribute elements .
| **Custom** | Defined under the @Directive decorator `*@Directive decorator*`Selector is used to identify the attribute










