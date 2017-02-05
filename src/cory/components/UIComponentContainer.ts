/**
 * @file The abstract container component.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { IContained } from 'cory/components/IContained';
import { IContainer } from 'cory/components/IContainer';
import { UIComponent } from 'cory/components/UIComponent';

export abstract class UIComponentContainer extends UIComponent implements IContainer {

    /**
     * The children of this container.
     * @type {Array.<IContained>}
     */
    private children: IContained[] = [];

    /**
     * @abstract
     * @see cory/components/IContainer#getContainerNode
     * @return {Node}
     */
    public abstract getContainerNode(): Node;

    /**
     * @see cory/components/IContainer#addChild
     * @param child
     * @return {boolean}
     */
    public addChild(child: IContained): boolean {
        if (!this.hasChild(child)) {
            this.children.push(child);
            return true;
        }
        return false;
    }

    /**
     * @see cory/components/IContainer#removeChild
     * @param child
     * @return {boolean}
     */
    public removeChild(child: IContained): boolean {
        if (this.hasChild(child)) {
            for (let i: number = 0, j: number = this.children.length; i < j; ++i) {
                if (child === this.children[i]) {
                    this.children.splice(i, 1);
                    return true;
                }
            }
            return false;
        }
        return false;
    }

    /**
     * @see cory/components/IContainer#getChildren
     * @return {IContained[]}
     */
    public getChildren(): IContained[] {
        return this.children;
    }

    /**
     * @see cory/components/IContainer#hasChild
     * @param child
     * @return {boolean}
     */
    public hasChild(child: IContained): boolean {
        for (let i: number = 0, j: number = this.children.length; i < j; ++i) {
            if (child === this.children[i]) {
                return true;
            }
        }
        return false;
    }
}