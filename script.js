console.log("Script aagyi hai bhai!!");
let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

// Function to check for SQL keywords
function containsSQL(input) {
    // List of common SQL keywords
    const sqlKeywords = [
        "SELECT", "UPDATE", "DELETE", "INSERT", "DROP", "ALTER", "CREATE",
        "EXEC", "EXECUTE", "MERGE", "TRUNCATE", "UNION", "JOIN", "WHERE",
        "FROM", "AND", "OR", "HAVING", "GROUP BY", "ORDER BY", "CASE",
        ";",   "CHAR", "NCHAR", "VARCHAR", "NVARCHAR",
        "INT", "BIGINT", "SMALLINT", "TINYINT", "BIT", "FLOAT", "REAL", "DECIMAL",
        "NUMERIC", "MONEY", "SMALLMONEY", "DATETIME", "SMALLDATETIME", "DATE", "TIME",
        "TIMESTAMP", "GETDATE", "CURRENT_TIMESTAMP", "CURRENT_USER", "CURRENT_ROLE",
        "USER_NAME", "SYSTEM_USER", "SESSION_USER", "HOST_NAME", "HOST_ID", "@@VERSION","=","ADMIN"
        // "'", "\"", "=", "<", ">", "(", ")", "{", "}", "[", "]", "%", "!",
        // "#", "$", "&", "*", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?",
        // "@", "^", "_", "`", "|", "~", "-"
        
    ];
    

    // Check if any SQL keyword is present in the input
    for (let keyword of sqlKeywords) {
        if (input.toUpperCase().includes(keyword)) {
            return true;
        }
    }
    return false;
}

// Form validation function
function validateform() {
    // Check for SQL keywords in username
    if (containsSQL(username.value)) {
        document.getElementById("usererror").innerHTML = "Do not enter SQL commands.";
        flag = 0;
    } else if (username.value === "") {
        document.getElementById("usererror").innerHTML = "Username is Empty";
        flag = 0;
    } else if (username.value.length < 5) {
        document.getElementById("usererror").innerHTML = "User Name Must be of 5 Char";
        flag = 0;
    } else {
        document.getElementById("usererror").innerHTML = "";
        flag = 1;
    }

    // Check for SQL keywords in password
    if (containsSQL(password.value)) {
        document.getElementById("passerror").innerHTML = "Do not enter SQL commands.";
        flag = 0;
    } else if (password.value === "") {
        document.getElementById("passerror").innerHTML = "Password is Empty";
        flag = 0;
    } else if (password.value.length < 6) {
        document.getElementById("passerror").innerHTML = "Password min of 6 Char";
        flag = 0;
    } else if (password.value.length > 12) {
        document.getElementById("passerror").innerHTML = "Password should not exceed 12 characters";
        flag = 0;
    }else {
        document.getElementById("passerror").innerHTML = "";
        flag = 1;
    }
    console.log("Checking kar di hai bhai");

    // Final check for overall flag
    if (flag) {
        
        return true;
    } else {
        return false;
    }
    
}
