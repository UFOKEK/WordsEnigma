const eventBus = {
  on(event: any, callback: Function) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  subscribe(event: any, callback: Function) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  dispatch(event: any, data: any) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  emit(event: any, data: any) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event: any, callback: any) {
    document.removeEventListener(event, callback);
  },
  unsubscribe(event: any, callback: any) {
    document.removeEventListener(event, callback);
  }
};

export default eventBus;
