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

import { VDOM } from 'cory/virtualdom/VDOM';

import { IXMLParser } from 'cory/xml/IXMLParser';
import { NormalXMLParser } from 'cory/xml/NormalXMLParser';

import { IElementTraversal } from 'cory/traversal/element/IElementTraversal';
import { DFSElementTraversal } from 'cory/traversal/element/DFSElementTraversal';
import { IElementVisitor } from 'cory/traversal/element/IElementVisitor';

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
        super();
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
     * The template must be have the root node.
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
     * @return {IContainer}
     */
    public getParent(): IContainer {
        return this.parent;
    }

    /**
     * Gets the specific xml parser.
     * @return {IXMLParser}
     */
    protected getParser(): IXMLParser {
        return new NormalXMLParser();
    }

    /**
     * Gets the specific traversal.
     * @return {IElementTraversal}
     */
    protected getTraversal(): IElementTraversal {
        return new DFSElementTraversal();
    }


    /*============ The lifecycle is beginning ============*/

    /**
     * Creates the component.
     * Before render the component, it will emit the 'beforeRender' event.
     * When the component has rendered, it will emit the 'rendered' event.
     * When ths component has finished setup, it will emit the 'ready' event.
     */
    public create(): void {
        let self: IComponent = this;
        self.emit('beforeRender');
        self.render().then((): void => {
            self.emit('rendered');
            self.setup();
            self.emit('ready');
        });
    }

    /**
     * Renders the component.
     * If rendered, it will emit the 'rendered' event.
     * @return {Promise<VDOM>}
     */
    public render(): Promise<VDOM> {
        let self: UIComponent = this;
        return this.getParser().parse(this.getTemplate()).then((doc: Document): void => {
            if (doc.childNodes.length === 1) { // the doc only has 1 child.
                self.getTraversal().traversal(<Element>doc.firstChild, new UIComponentElementVisitor());
            } else {
                throw new Error(`
                    The template must have one root node. The error template is \"${this.getTemplate()}\"`);
            }
        });
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

class UIComponentElementVisitor implements IElementVisitor {

    /**
     * Visits the ui component element.
     * @param {Element} element
     */
    public visit(element: Element): void {
        console.info(`${element.namespaceURI}/${element.localName}`);
        // require(`${element.namespaceURI}/${element.localName}`);
    }
}

