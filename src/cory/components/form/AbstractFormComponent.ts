/**
 * @file The abstract form component.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { UIComponent } from 'cory/components/UIComponent';

export abstract class AbstractFormComponent extends UIComponent {

    /**
     * The name of the form component.
     */
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}