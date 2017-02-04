/**
 * @file The interface of the container.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { IContained } from 'cory/components/IContained';

export interface IContainer {

    /**
     * Gets the container node.
     * @return {Node}
     */
    getContainerNode(): Node;

    /**
     * Adds the child component into it's parent.
     * If add succeed, it will return ture, otherwise it will return false.
     * @param {IContained} child
     *     The child component should be added.
     * @return {boolean}
     */
    addChild(child: IContained): boolean;

    /**
     * Removes the child component from the parent. This child will be destroyed.
     * If remove succeed, it will return ture, otherwise it will return false.
     * @param {IContained} child
     *     The removed child.
     * @return {boolean}
     */
    removeChild(child: IContained): boolean;

    /**
     * Gets children under this container.
     * @return {IContained[]}
     */
    getChildren(): IContained[];

    /**
     * This container has the specific child or not.
     * @param {IContained} child
     * @return {boolean}
     */
    hasChild(child: IContained): boolean;
}