enum Session {
    Spring,
    Summer,
    Fall,
    Winter
}

const currentSession: Session = 1;

if (currentSession.valueOf() === Session.Spring) {
    console.log("Đi chơi");
}

if (currentSession.valueOf() === Session.Summer) {
    console.log("Đi bơi");
}