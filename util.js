// util.js

// Original code from commit 5c31a6497fb9f5b6b1fd8f69581d5c4abe6cd68e

// ... other code ...

// Unsafe jQuery selector handling (lines 104-118)
function exampleFunction(selector) {
    // Lines 104-104 existing code ...
    // Unsafe selector handling
    const safeSelector = stricterValidation(selector);

    const element = $(safeSelector);
    // ... further code ...
}

function stricterValidation(selector) {
    // Reject HTML tags, quotes, braces, and event handler patterns
    const regex = /[<>"{}();]+/;
    if (regex.test(selector)) {
        throw new Error('Invalid selector: Contains forbidden characters.');
    }
    return selector;
}

// ... other code ...