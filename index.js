// sample from https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/
module.exports = function test1(string) {
    if (typeof string !== "string") throw new TypeError("test1 wants a string!");
    return string.replace(/\s/g, "");
};