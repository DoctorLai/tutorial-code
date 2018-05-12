// @justyy
// tutorial: https://steemit.com/utopian-io/@justyy/tutorial-recursion-and-stack
// https://helloacm.com/tools/steemit/steemjs/?s=const%20f%20%3D%20(x)%20%3D%3E%20%7B%0A%20%20%20%20if%20(x%20%3D%3D%3D%200)%20%7B%20%20%2F%2F%20exiting%20condition%0A%20%20%20%20%20%20%20%20return%200%3B%0A%20%20%20%20%7D%20%0A%20%20%20%20return%20x%20%2B%20f(x%20-%201)%3B%20%20%0A%7D%0A%0Aconst%20g%20%3D%20(x)%20%3D%3E%20%7B%0A%20%20%20%20let%20stack%20%3D%20%5B%5D%3B%0A%20%20%20%20stack.push(x)%3B%0A%20%20%20%20let%20r%20%3D%200%3B%0A%20%20%20%20let%20exit%20%3D%20false%3B%0A%20%20%20%20do%20%7B%0A%20%20%20%20%20%20%20%20let%20elem%20%3D%20stack%5Bstack.length%20-%201%5D%3B%20%0A%20%20%20%20%20%20%20%20if%20((elem%20%3E%200)%20%26%26%20(!exit))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20stack.push(elem%20-%201)%3B%20%2F%2F%20recursive%20calls%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20r%20%2B%3D%20elem%3B%20%20%2F%2F%20bottom%20up%20sum%20up%0A%20%20%20%20%20%20%20%20%20%20%20%20stack.pop()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20exit%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20while%20(stack.length%20%3E%200)%3B%0A%20%20%20%20return%20r%3B%0A%7D%0A%0Alet%20x%20%3D%209999%3B%0Alet%20t%20%3D%20performance.now()%3B%0Alog(f(x))%3B%0Alog(performance.now()%20-%20t)%3B%0A%0At%20%3D%20performance.now()%3B%0Alog(g(x))%3B%0Alog(performance.now()%20-%20t)%3B%0A%0A%0A%0A

const f = (x) => {
    if (x === 0) {  // exiting condition
        return 0;
    } 
    return x + f(x - 1);  
}

const g = (x) => {
    let stack = [];
    stack.push(x);
    let r = 0;
    let exit = false;
    do {
        let elem = stack[stack.length - 1]; 
        if ((elem > 0) && (!exit)) {
            stack.push(elem - 1); // recursive calls
        } else {
            r += elem;  // bottom up sum up
            stack.pop();
            exit = true;
        }
    } while (stack.length > 0);
    return r;
}

let x = 9999;
let t = performance.now();
log(f(x));
log(performance.now() - t);

t = performance.now();
log(g(x));
log(performance.now() - t);
