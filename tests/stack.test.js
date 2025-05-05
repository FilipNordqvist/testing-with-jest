const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

//Filips gör ett felaktig test som inte går igenom då den ger 1 då den behöver popas en gång till.
test('pop on empty stack returns undefined', () => {
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.pop()).toBeUndefined();
});

//Filip testet push?
test('pusch 1 on empty stack returns 1?', () => {
    stack.push(1)
    expect(stack.pop()).toBe(1);
});