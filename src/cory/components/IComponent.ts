/**
 * @file The interface of the component
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { ILifecycle } from 'cory/components/ILifecycle';
import { IEventDispatcher } from 'cory/events/IEventDispatcher';

export interface IComponent extends ILifecycle, IEventDispatcher {

    /**
     * The unique id of the component.
     * @return {string}
     */
    getId(): string;

}