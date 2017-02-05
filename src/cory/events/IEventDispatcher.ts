/**
 * @file
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

export interface IEventDispatcher {
    /**
     * Register a new EventListener for the given event.
     *
     * @param {string} eventType Name of the event.
     * @param {Function} handler Callback function.
     * @param {Object=} context The context of the function.
     * @api public
     */
    on(eventType: string, handler: Function, context?: any): IEventDispatcher;

    /**
     * Return a list of assigned event listeners.
     *
     * @param {string} eventType The events that should be listed.
     * @return {Function[]}
     */
    listeners(eventType: string): Function[];

    /**
     * Emit an event to all registered event listeners.
     *
     * @param {string} eventType The name of the event.
     * @return {boolean} Indication if we've emitted an event.
     */
    emit(eventType: string, ...args: any[]): boolean;

    /**
     * Add an EventListener that's only called once.
     *
     * @param {string} eventType Name of the event.
     * @param {Function} handler Callback function.
     * @param {Object=} context The context of the function.
     */
    once(eventType: string, handler: Function, context?: any): IEventDispatcher;

    /**
     * Remove event listeners.
     *
     * @param {string} eventType The event we want to remove.
     * @param {Function} handler The listener that we need to find.
     * @param {boolean=} once Only remove once listeners.
     */
    off(eventType: string, handler: Function, once?: boolean): IEventDispatcher;

    /**
     * Remove all listeners or only the listeners for the specified event.
     *
     * @param {string=} event The event want to remove all listeners for.
     */
    removeAllListeners(eventType?: string): IEventDispatcher;
}