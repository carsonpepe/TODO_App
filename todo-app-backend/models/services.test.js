const services = require("./services");
const { findById } = require("./user");

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
    const newUser = {
        username: "ppang",
    }
    let userres = await services.addUser(newUser);
    let result = await services.addTodo(userres._id, todoObj);
    expect(result[0].description).toBe("Surf at Pismo");

});

test("getUserbyUsernameTests", async() =>{
    const newUser = {
        username: "zsou",
    }
    let result = await services.getUserByUsername(newUser);
    let res2 = await services.getUserbyUsername("name")
    //TODO when the function works better

    expect(repeatsult).toBe(false)

});

test("findbyIDtests", async() =>{
    const newUser = {
        username: "mmr",
    }
    let userres = await services.addUser(newUser);
    expect(await services.findUserById(userres._id)).anything()
    expect(await services.findUserById({nota : string})).toBeUndefined()

})

test("getTODoS", async() =>{

    const newUser = {
        username: "hmmmmmmmmmmmmmmm",
    }
    let userres = await services.addUser(newUser);
    expect(await services.getTodos(userres._id)).anything()
    expect(await services.getTodos({nota : string})).toBeUndefined()

})

test("categories", async() =>{

    const newUser = {
        username: "hmmcxxxxxxxxxxxxxxxx",
    }
    const todoObj1 = {
        description: "Surf at Pismo",
        category: "Workout",
        complete: true
    };
    const todoObj2 = {
        description: "at Pismo",
        complete: false
    };
    let userres = await services.addUser(newUser);
    let result1 = await services.addTodo(userres._id, todoObj1);
    let result2 = await services.addTodo(userres._id, todoObj2);
    expect(await services.findTodosByCategory(userres._id, "Workout")).anything()
    expect(await services.findTodosByCompleted(userres._id, true)).anything()
    expect(await services.markCompleted(userres._id, result2._id)).anything()
    expect(await services.findTodosByCompleted(userres._id)).anything()
    expect(await services.markUnComplete(userres._id, result2._id)).anything()
    expect(await services.findTodosByCompleted(userres._id)).anything()

});

test("add a category", async() =>{
    const catobj = {
        name: "Surf at Pismo",
        color: "Red",
    };
    const newUser = {
        username: "safljsadflkjsgjfgh",
    }
    let userres = await services.addUser(newUser);
    let result = await services.addCategory(userres._id, catobj);
    expect(result[0].name).toBe("Surf at Pismo");

});

test("getTODoS", async() =>{

    const newUser = {
        username: "hmmmmmmmmmmmmmmm",
    }
    let userres = await services.addUser(newUser);
    expect(await services.getTodos(userres._id)).anything()
    expect(await services.getTodos({nota : string})).toBeUndefined()

})





