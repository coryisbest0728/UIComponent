/**
 * @file The abstract UI Component. The base class of all components.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { IComponent } from 'cory/components/IComponent';
let uuid = require('uuid');

export abstract class UIComponent implements IComponent {

    /**
     * The RFC4122 uuid v4.
     * @see http://www.ietf.org/rfc/rfc4122.txt
     * @see https://github.com/kelektiv/node-uuid
     * @return {string}
     */
    getId(): string {
        return uuid.v4();
    }
}
