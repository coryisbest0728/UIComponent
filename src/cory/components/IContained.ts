/**
 * @file The interface of the contained.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { IContainer } from 'cory/components/IContainer';

export interface IContained {

    /**
     * Gets the parent of this contained.
     * @return { IComponent }
     */
    getParent(): IContainer;
}