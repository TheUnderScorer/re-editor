/**
 * Handles textarea change
 *
 * @param {Event} e
 * @param {Object} api Helper API object from parent component
 *
 * @return void
 * */
export function handleKeyup( e, api ) {
    api.setValue(e.target.value);
}