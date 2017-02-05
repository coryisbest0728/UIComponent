/**
 * @file The interface of the component lifecycle
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { VDOM } from 'cory/virtualdom/VDOM';

export interface ILifecycle {

    /**
     * Creates this component.
     */
    create(): void;

    /**
     * Renders this component.
     * When has beed rendered, it will return the virtual dom.
     * @return {Promise<VDOM>}
     */
    render(): Promise<VDOM>;

    /**
     * Setups this component.
     */
    setup(): void;

    /**
     * Destroys this component.
     */
    destroy(): void;
}