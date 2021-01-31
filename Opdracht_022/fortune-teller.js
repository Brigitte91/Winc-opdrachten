const tellFortune = function (childrenNumber, namePartner, location, jobTitle) {
    let future = "You will be a " + jobTitle + " in " + location + ", and married to " + namePartner + " with " + childrenNumber + " kids.";
    console.log(future);
}

tellFortune(1, 'Stefan', 'Schoonhoven', 'web dev')
tellFortune(2, 'Bob Ross', 'Japan', 'makeup artist');
tellFortune(13, 'Harry Potter', 'Turkije', 'voetballer')