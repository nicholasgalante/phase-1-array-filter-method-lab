// Code your solution here
findMatching = (drivers, string) => {
    func = drivers => drivers.toUpperCase() === string.toUpperCase();
    return drivers.filter(func);
}

fuzzyMatch = (drivers, string) => {
    func = drivers => drivers[0] === string[0];
    return drivers.filter(func);
}

matchName = (drivers, string) => {
    func = drivers => drivers.name === string;
    return drivers.filter(func);
}