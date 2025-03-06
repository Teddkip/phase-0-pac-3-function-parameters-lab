function introduction(name) {
    return `Hi, my name is ${name}.`;
}

// Example usage
console.log(introduction("John")); // This will log: Hi, my name is John

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Example usage
console.log(introductionWithLanguage("John", "JavaScript")); // This will log: Hi, my name is John and I am learning to program in JavaScript.

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Example usage
console.log(introductionWithLanguageOptional("John")); // This will log: Hi, my name is John and I am learning to program in JavaScript.
console.log(introductionWithLanguageOptional("Jane", "Python")); // This will log: Hi, my name is Jane and I am learning to program in Python.
