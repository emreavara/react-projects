This is a simple react TODO app that you can add your to do list and delete them after you have done it.

The appearence of the app is as below: 
![image](https://user-images.githubusercontent.com/73709610/172028631-bdaeba2e-5c4c-419a-abd1-41fb3abf404a.png)

### Add an Item Text Field && Add Item Button

You can write your input here and then by clicking "Add Item" button you can add your new item to your TODO list. Duplicates are not allowed.

### Done Button

By Clicking on "Done" button you can delete the same item from your list.


### Details

In this example app, basic reactstrap components like "Row, Col, Navbar, etc." are used. There are three main components : Navi, Info, and Page.

#### Navi

In this section the simplest version of a navigation bar is implemented. The sections in the bar are non-functional and added only to display different sections in the bar.

#### Info

Info component includes TODO list and delete button. The state are conveyed using react-redux.

#### Page

In this component the addition of a Todo item is implemented. The state is transfered using react-redux. The actionType ADD_NEW_ITEM_SUCCESS is used to add new item to the list.
