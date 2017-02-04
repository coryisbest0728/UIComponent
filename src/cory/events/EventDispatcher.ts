/**
 * @file
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { IEventDispatcher } from 'cory/events/IEventDispatcher';
import EventEmitter = require('eventemitter3');

export class EventDispatcher implements IEventDispatcher {

    /**
     * @see https://github.com/primus/eventemitter3
     */
    private eventEmitter: EventEmitter;

    /**
     * @constructor
     */
    public constructor() {
        this.eventEmitter = new EventEmitter();
    }

    public on(eventType: string, handler: Function, context?: any): IEventDispatcher {
        this.eventEmitter.on(eventType, handler, context || this);
        return this;
    }

    public listeners(eventType: string): Function[] {
        return this.eventEmitter.listeners(eventType);
    }

    public emit(eventType: string, ...args): boolean {
        return this.eventEmitter.emit(eventType, ...args);
    }

    public once(eventType: string, handler: Function, context?: any): IEventDispatcher {
        this.eventEmitter.once(eventType, handler, context || this);
        return this;
    }

    public off(eventType: string, handler: Function, once?: boolean): IEventDispatcher {
        this.eventEmitter.off(eventType, handler, once);
        return this;
    }

    public removeAllListeners(eventType?: string): IEventDispatcher {
        this.eventEmitter.removeAllListeners(eventType);
        return this;
    }
}

