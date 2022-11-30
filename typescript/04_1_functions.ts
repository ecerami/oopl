// Example Function with Default Parameter
function tweet(msg: string, userName: string = "emusk") {
    console.log(`${userName} tweeted:  ${msg}`);
}

tweet("I just bought twitter");
tweet("I just had lunch", "ecerami");

