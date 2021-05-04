export function countsAsYes(userInput) {
    if (userInput === "y" || userInput === "Y" || userInput === "Yes" || userInput === "yes" ) {
        return true;
    }
    return false;
}