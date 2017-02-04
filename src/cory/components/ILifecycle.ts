/**
 * @file The interface of the component lifecycle
 *
 * @author Cory(https://github.com/coryisbest0728)
 */


export interface ILifecycle {

    /**
     * Creates this component.
     */
    create(): void;

    /**
     * Renders this component.
     * @return {Promise}
     */
    render(): Promise;

    /**
     * Setups this component.
     */
    setup(): void;

    /**
     * Destroys this component.
     */
    destroy(): void;
}