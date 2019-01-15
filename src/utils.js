export function ready(cb) {
    document.onreadystatechange = function() {
        //This DOM funct is called multiple times on load
        // console.log(document.readyState);
        if(document.readyState === "interactive") {
            cb();
        }
    }
}

export function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}