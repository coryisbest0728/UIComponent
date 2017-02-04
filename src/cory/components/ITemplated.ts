/**
 * @file The interface of the templated.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { IComponent } from 'cory/components/IComponent';

export interface ITemplated {

    /**
     * Gets ui template string.
     * @return {string}
     */
    getTemplate(): string;
}