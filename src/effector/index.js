//@flow

/*
 * People assume that time is a strict progression of cause to effect,
 * but actually from a non-linear, non-subjective viewpoint -
 * it's more like a big ball of wibbly wobbly time-y wimey stuff
 */

export {combine, combine as createStoreObject} from './combine'
export {sample} from './sample'
export {split} from './split'
export {merge} from './merge'
export {forward} from './forward'
export {fromObservable} from './fromObservable'
export {createDomain} from './createDomain'
export {createEvent} from './createEvent'
export {createEffect} from './createEffect'
export {createStore} from './createStore'
export {restore, restoreEvent, restoreEffect, restoreObject} from './restore'
export {setStoreName} from './naming'
export {createApi} from './createApi'
export {Kind, step, is} from './stdlib'
export {createNode} from './createNode'
export {clearNode} from './clearNode'
export {launch} from './kernel'
export {version} from './flags'
export {guard} from './guard'
//eslint-disable-next-line
export * as blocks from './blocks'

export type {Store, Event, Effect, Domain} from './unit.h'
export type {kind} from './stdlib'
