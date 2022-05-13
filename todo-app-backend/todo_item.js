import Category from "./category";

class toDoItem{
    constructor(){
        dateAdded;
        categoryName; 
        planDateTime;
        isDone;
        notifyUsers;
        notification;
        description;
    }

    setDateTime(date){
        planDateTime = date;
    }

    setCategory(name){
        categoryName = name;
        Category.categoryName = name;
    }

    
}
export default toDoItem;