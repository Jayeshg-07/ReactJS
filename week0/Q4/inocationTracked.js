function trackInvocationsAndInstances() {
    let invocationCount = 0;

    function trackedFunction() {
        invocationCount++;
        return `Invocation Count: ${invocationCount}, Instance Count: ${trackedFunction.instanceCount}`;
    }

    trackedFunction.instanceCount = 0;

    // Increment the instance count when creating a new instance
    trackedFunction.createInstance = function () {
        trackedFunction.instanceCount++;
        return trackedFunction;
    };

    return trackedFunction;
}

// Example usage:

const trackedFunction = trackInvocationsAndInstances();

const instance1 = trackedFunction.createInstance();
const instance2 = trackedFunction.createInstance();

console.log(instance1()); // Invocation Count: 1, Instance Count: 2
console.log(instance2()); // Invocation Count: 2, Instance Count: 2
console.log(trackedFunction()); // Invocation Count: 3, Instance Count: 2
