import toDoItem from "./todo_item";

class User{
    constructor(){
        accountID;
        displayName;
        TODOS = new Map();
        recycleBin = new Map();
        categories = new Map();
    }


    hash(item){
        return item['dateAdded'];
    }

    setCategoryColor(color){}

    deleteTodoItem(itemKey){
        TODOS.delete(itemKey)
        recycleBin.set(itemKey,TODOS.get(itemKey));
    }

    //
    addTodoItem(item){
        TODOS.set(hash(item),item);
    }

    setPlanTime(itemKey, time){
        TODOS.set(
            itemKey,
            {...TODOS.get(itemKey), planDateTime: time},
        );
    }

    changeSidebarOrder(orderingList){}

    display(){}

}