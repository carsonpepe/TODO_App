const services = require("./services");

test("test query user by username", async() =>{
    
});

test("test db query user", async() =>{

    const newUser = {
        username: "ppang",
    }
    let user = await services.addUser(newUser)
    let result = await services.findTodosByCategory(user._id, "");
    expect(result[0].title).toBe("");
    expect(result[0].description).toBe("");
    expect(result[0].date).toBe("");
    expect(result[0].category).toBe("");
    expect(result[0].completed).toBe("False");
    expect(result[0].notificationToggle).toBe("");
    expect(result[0].notificationTimes).toBe("");

});

test("test db and add user", async() =>{
    const newUser = {
        username: "ppang",
    }
    let result = await services.addUser(newUser);
    expect(result[0].title).toBe("");
    expect(result[0].description).toBe("");
    expect(result[0].date).toBe("");
    expect(result[0].category).toBe("");
    expect(result[0].completed).toBe("False");
    expect(result[0].notificationToggle).toBe("");
    expect(result[0].notificationTimes).toBe("");

    const repeat = {
        username: "ppang",
    }
    let repeatsult = await services.addUser(repeat);
    expect(repeatsult).toBe(false)

});


test("test db add and query todo task", async() =>{
    const todoObj = {
        description: "Surf at Pismo",
        category: "Workout",
        complete: true
    };
    userobj = {name : "haleman"}
    let usert3 = await services.addUser(userobj);    const user = new services.addTodo(todoObj);
    let result = await services.addTodo(uesrt3._id, todoObj);
    expect(result[0].title).toBe("");
    expect(result[0].description).toBe("Surf at Pismo");
    
});

