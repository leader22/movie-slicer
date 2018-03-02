import StandbyEvent from './standby';
import EditorEvent from './editor';

class Event {
  constructor(store) {
    this._store = store;

    this.standby = new StandbyEvent(store);
    this.editor = new EditorEvent(store);
  }
}

export default Event;