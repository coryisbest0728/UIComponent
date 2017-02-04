/**
 * @file The interface of the component
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { ILifecycle } from 'cory/components/ILifecycle';

export interface IComponent extends ILifecycle {

    /**
     * The unique id of the component.
     * @return {string}
     */
    getId(): string;

}