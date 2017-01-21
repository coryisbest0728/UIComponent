/**
 * @file
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { UIComponent } from 'cory/components/UIComponent';

describe('Component testing', (): void => {

    it('ui component', (): void => {
        console.log(new AComponent().getId());
    });
});

class AComponent extends UIComponent {

}