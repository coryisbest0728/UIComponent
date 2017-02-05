/**
 * @file The form component.
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { UIComponentContainer } from 'cory/components/UIComponentContainer';
import {METHODS} from "http";
// import { AbstractForm } from 'cory/components/form/AbstractForm';

export class Form extends UIComponentContainer {

    /**
     * The form action path.
     * @type {string}
     * @private
     */
    private _action: string;

    /**
     * The form enctype
     * @type {Enctype}
     * @private
     */
    private _enctype: Enctype;

    /**
     * The form method.
     * @type {Method}
     * @private
     */
    private _method: Method = Method.GET;

    get action(): string {
        return this._action;
    }

    set action(value: string) {
        this._action = value;
    }

    get enctype(): Enctype {
        return this._enctype;
    }

    set enctype(value: Enctype) {
        this._enctype = value;
    }

    get method(): Method {
        return this._method;
    }

    set method(value: Method) {
        this._method = value;
    }

    public getTemplate(): string {
        return '<form></form>';
    }

    /**
     * @override
     * @see cory/components/IContainer#getContainerNode
     * @return {Node}
     */
    public getContainerNode(): Node {
        return null;
    }
}

export enum Method {
    GET = 'get',
    POST = 'post'
}

export enum Enctype {
    APPLICATION = 'application/x-www-form-urlencoded',
    MULTIPART_DATA = 'multipart/form-data',
    TEXT_PLAN = 'text/plain'
}