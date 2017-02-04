/**
 * @file The interface of the contained.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { IComponent } from 'cory/components/IComponent';

export interface IContained {

    /**
     * Gets the parent of this contained.
     * @return { IComponent }
     */
    getParent(): IComponent;
}