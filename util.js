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
    // Allow only simple, safe CSS selector characters to prevent injection
    // This whitelist allows alphanumerics, underscores, hyphens, dots, hashes, and spaces.
    const safeSelectorPattern = /^[A-Za-z0-9_\-#. ]+$/;
    if (typeof selector !== 'string' || !safeSelectorPattern.test(selector)) {
        throw new Error('Invalid selector: Contains forbidden characters.');
    }
    return selector;
}

// ... other code ...