import { Subject } from 'rxjs';

//https://jasonwatmore.com/post/2019/02/13/react-rxjs-communicating-between-components-with-observable-subject

const subject = new Subject();

export const todoListService = {
    updateTodoList: list => subject.next({ todolist: list }),
    clearTodoList: () => subject.next({todolist:[]}),
    getTodoList: () => subject.asObservable()
};
