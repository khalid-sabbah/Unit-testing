type Observer<T> = (value: T) => void;

class Observable<T> {
  private observers: Observer<T>[] = [];

  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(value: T): void {
    this.observers.forEach((observer) => observer(value));
  }
}

export { Observable, Observer };
