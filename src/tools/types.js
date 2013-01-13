/**
 * @fileOverview Type checking functions.
 * @author Michael Robinson michael@panmedia.co.nz
 * @author David Neilsen david@panmedia.co.nz
 */

/**
 * Determine whether object is a number {@link http://stackoverflow.com/a/1421988/187954}.
 * @param  {mixed} object The object to be tested
 * @return {Boolean} True if the object is a number.
 */
function typeIsNumber(object) {
    return !isNaN(object - 0) && object !== null;
}

function typeIsNode(object) {
    return object instanceof Node;
}

function typeIsElement(object) {
    return object instanceof jQuery;
}

function typeIsRange(object) {
    return object instanceof rangy.WrappedRange;
}

function typeIsSelection(object) {
    return object instanceof rangy.WrappedSelection;
}

function typeIsString(object) {
    return typeof object === 'string';
}
