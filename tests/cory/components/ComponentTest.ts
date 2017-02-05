/**
 * @file
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { UIComponent } from 'cory/components/UIComponent';
import { IComponent } from 'cory/components/IComponent';

describe('Component testing', (): void => {

    it('ui component id', (done: DoneFn): void => {
        let aComponent: IComponent = new AComponent();
        expect(aComponent.getId()).not.toBeNull('The component id should be exist.');
        aComponent.on('ready', done);
    });

    it('ui component lifecycle', (done: DoneFn): void => {
        let aComponent: IComponent = new AComponent();
        aComponent.on('ready', (): void => {
            done();
        });
    });
});

class AComponent extends UIComponent {

    /**
     * @override
     * @return {string}
     */
    public getTemplate(): string {
        return `
            <Form xmlns="cory/components/form"
                xmlns:m="cory/components/mobile"
                xmlns:l="cory/components/layout"
                xmlns:card="xxx/bank/card">
                <TextBox></TextBox>
                <Button></Button>
                <m:List>
                    <m:UISwitch></m:UISwitch>
                </m:List>
                <l:Panel>
                    <l:VGroup>
                        <TextBox></TextBox>
                        <RadioButton></RadioButton>
                        <SubmitButton></SubmitButton>
                    </l:VGroup>
                    <l:ScrollPanel>
                        <l:HGroup>
                            <card:CreditCard></card:CreditCard>
                            <card:CreditCard></card:CreditCard>
                            <card:DebitCard></card:DebitCard>
                            <card:DebitCard></card:DebitCard>
                            <card:DebitCard></card:DebitCard>
                            <card:DebitCard></card:DebitCard>
                        </l:HGroup>
                    </l:ScrollPanel>
                </l:Panel>
            </Form>
        `;
    }
}