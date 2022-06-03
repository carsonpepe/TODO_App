const services = require("./models/services");

test("test query user by username", async() =>{
    
});

test("test db add and query user", async() =>{
    const newUser = {
        username: "ppang",
        password: "wefodijfwe",
    }
    let result = await services.findTodosByCategory(    );
    expect(result[0].title).toBe("");
    expect(result[0].description).toBe("");
    expect(result[0].date).toBe("");
    expect(result[0].category).toBe("");
    expect(result[0].completed).toBe("False");
    expect(result[0].notificationToggle).toBe("");
    expect(result[0].notificationTimes).toBe("");
});

test("test db add and query todo task", async() =>{
    const todoObj = {
        description: "Surf at Pismo",
        category: "Workout",
        date: moment('2022/05/07'),
        complete: true
    };
    const user = new services.addTodo(todoObj);
    let result = await services.addUser(user);
    expect(result[0].title).toBe("");
    expect(result[0].description).toBe("");
    expect(result[0].date).toBe("");
    expect(result[0].category).toBe("");
    expect(result[0].completed).toBe("False");
    expect(result[0].notificationToggle).toBe("");
    expect(result[0].notificationTimes).toBe("");
});

