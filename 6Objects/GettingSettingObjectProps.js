let book = {
    "Main Title": "The race",
    author: "Steve",
    edition: 2
};

//Object properties can be accessed with a dot(.) or square brackets([])
book.author = "Bill";
book["Main Title"] = "THE RACE";

book.subtitle; //undefined: property doesn't exist
book.subtitle.length //!TypeError: undefined doesn't have length
book?.subtitle?.length // if any value doesn't exist returns undefined instead of throwing an error.