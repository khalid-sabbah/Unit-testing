
import { Observable, Observer } from "./observable";

describe("Observable", () => {
  let observable;
  let observer1;
  let observer2;

  beforeEach(() => {
    observable = new Observable();
    observer1 = jest.fn();
    observer2 = jest.fn();
  });

  test("allows observers to subscribe and receive notifications", () => {
    observable.subscribe(observer1);
    observable.subscribe(observer2);

    observable.notify("Hello, Observers!");

    expect(observer1).toHaveBeenCalledWith("Hello, Observers!");
    expect(observer2).toHaveBeenCalledWith("Hello, Observers!");
  });

  test("does not notify unsubscribed observers", () => {
    observable.subscribe(observer1);
    observable.subscribe(observer2);
    observable.unsubscribe(observer2);

    observable.notify("Hello, Observer 1!");

    expect(observer1).toHaveBeenCalledWith("Hello, Observer 1!");
    expect(observer2).not.toHaveBeenCalled();
  });

  test("can handle multiple notifications", () => {
    observable.subscribe(observer1);

    observable.notify("First Notification");
    observable.notify("Second Notification");

    expect(observer1).toHaveBeenNthCalledWith(1, "First Notification");
    expect(observer1).toHaveBeenNthCalledWith(2, "Second Notification");
  });

  test("works with multiple data types", () => {
    const observableNumber = new Observable();
    const observerNumber = jest.fn();

    observableNumber.subscribe(observerNumber);

    observableNumber.notify(42);
    observableNumber.notify(100);

    expect(observerNumber).toHaveBeenNthCalledWith(1, 42);
    expect(observerNumber).toHaveBeenNthCalledWith(2, 100);
  });

  test("can unsubscribe multiple observers", () => {
    observable.subscribe(observer1);
    observable.subscribe(observer2);

    observable.unsubscribe(observer1);
    observable.unsubscribe(observer2);

    observable.notify("No observers should receive this");

    expect(observer1).not.toHaveBeenCalled();
    expect(observer2).not.toHaveBeenCalled();
  });

  test("does not break when unsubscribing an observer not in the list", () => {
    const observer3 = jest.fn();

    observable.subscribe(observer1);
    observable.unsubscribe(observer3); // Unsubscribe non-existent observer

    observable.notify("Still works");

    expect(observer1).toHaveBeenCalledWith("Still works");
    expect(observer3).not.toHaveBeenCalled();
  });
});
