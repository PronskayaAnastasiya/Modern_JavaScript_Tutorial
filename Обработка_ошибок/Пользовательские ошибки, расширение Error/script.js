//!Пользовательские ошибки, расшерение Error


//!Расширение Error
let json = '{"name":"Jhon", "age":30}';

class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class ReadError extends MyError {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
    }
}

class ValidationError extends MyError {
    //constructor(message) {
    //super(message);
    //this.name = 'ValidationError';
    //}
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("Нет свойства: " + property);
        //this.name = 'PropertyRequiredError';
        this.property = property;
    }
}

function test() {
    throw new ValidationError("Упс");
}

try {
    test();
} catch (err) {
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
}


function readUser(json) {
    /*
    let user = JSON.parse(json);
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }
    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
    return user;
    */

    let user;

    try {
        user = JSON.parse(json);
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError("Синтатическаяошибка: ", err);
        } else {
            throw err;
        }
    }

    try {
        validateUser(user);
    } catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Ошибка валидации", err);
        } else {
            throw err;
        }
    }
}

function validateUser(user) {
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }

    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
}



try {
    let user = readUser('lml;{"age":35}');
} catch (err) {
    /*
    if (err instanceof ValidationError) {
        console.log("Некорректные данные: " + err.message);
        console.log(err.name);
        console.log(err.property);
    } else if (err instanceof SyntaxError) {
        console.log("JSON ошибка синтаксиса: " + err.message);
    } else {
        throw err;
    }
    */
    if (err instanceof ReadError) {
        console.log(err);
        console.log("Исходная ошибка: " + err.cause);
    } else {
        throw err
    }
}






