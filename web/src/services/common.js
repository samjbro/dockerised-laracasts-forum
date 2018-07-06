import { event } from '.'

export function loadMainContent (view, ...args) {
  event.emit(event.$names.LOAD_MAIN_CONTENT, view, ...args)
}
