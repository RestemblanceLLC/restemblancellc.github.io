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
    // Allow only very simple, safe CSS selectors to prevent jQuery selector injection.
    // Disallow any characters commonly used in complex selectors, such as attribute
    // selectors ([attr=value]), pseudo-selectors (:visible), combinators (> + ~),
    // wildcards (*), grouping (,), quotes, parentheses, and any whitespace.
    if (typeof selector !== 'string') {
        throw new Error('Invalid selector: Contains forbidden characters.');
    }

    // Quick reject for obviously dangerous syntax characters.
    const forbiddenCharsPattern = /[\[\]:>+~*,'"()\\\s]/;
    if (forbiddenCharsPattern.test(selector)) {
        throw new Error('Invalid selector: Contains forbidden characters.');
    }

    // Allow only simple selectors:
    //  - a bare alphanumeric/underscore/hyphen token (e.g., "button1")
    //  - a single ID selector: "#myId"
    //  - a single class selector: ".myClass"
    const simpleSelectorPattern = /^(?:[A-Za-z0-9_-]+|#[A-Za-z0-9_-]+|\.[A-Za-z0-9_-]+)$/;
    if (!simpleSelectorPattern.test(selector)) {
        throw new Error('Invalid selector: Contains forbidden characters.');
    }

    return selector;
}

// ... other code ...