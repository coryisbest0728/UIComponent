/**
 * @file The abstract UI Component. The base class of all components.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { EventDispatcher } from 'cory/events/EventDispatcher';
import { IComponent } from 'cory/components/IComponent';
import { IContained } from 'cory/components/IContained';
import { IContainer } from 'cory/components/IContainer';
import { ITemplated } from 'cory/components/ITemplated';
import { IXMLParser } from 'cory/xml/IXMLParser';
import { NormalXMLParser } from 'cory/xml/NormalXMLParser';
import uuid = require('uuid');

export abstract class UIComponent extends EventDispatcher implements IComponent, ITemplated, IContained {

    /**
     * The parent of the container component.
     * @type {IContainer}
     */
    private parent: IContainer = null;

    /**
     * @constructor
     */
    public constructor() {
        this.create();
    }

    /**
     * The RFC4122 uuid v4.
     * @see http://www.ietf.org/rfc/rfc4122.txt
     * @see https://github.com/kelektiv/node-uuid
     * @return {string}
     */
    public getId(): string {
        return uuid.v4();
    }

    /**
     * Gets the ui template.
     * @return {string}
     */
    abstract getTemplate(): string;

    /**
     * Sets the parent.
     * @param {IContainer} parent
     */
    public setParent(parent: IContainer): void {
        if (!this.parent || !parent.hasChild(this)) {
            this.parent = parent;
            parent.addChild(this);
        }
    }

    /**
     * Gets the ui parent, the parent must be a container.
     * @return {IComponent}
     */
    public getParent(): IContainer {
        return this.parent;
    }

    /**
     * Gets the xml parser.
     * @return {IXMLParser}
     */
    protected getParser(): IXMLParser {
        return new NormalXMLParser();
    }


    /*============ The lifecycle is beginning ============*/

    /**
     * Creates the component.
     */
    public create(): void {
        this.render();
    }

    /**
     * Renders the component.
     * @return {Promise}
     */
    public render(): Promise {
        // let parser: IXMLParser = new NormalXMLParser();//this.getParser();
        // new NormalXMLParser().parse('');
        // parser.parse('');
        // return parser.parse('');//.parse(this.getTemplate()).then((doc: Document) => void {

        // });
        return null;
    }

    /**
     * Setups this component.
     */
    public setup(): void {

    }

    /**
     * Destroys the component.
     */
    public destroy(): void {
        this.removeAllListeners();
    }

    /*============ The lifecycle is end ============*/

// protected getNode(): Node {
    //
    // }

    // getWidth(): number {
    //
    // }
}
