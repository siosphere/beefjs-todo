var TodoStore = Beef.Store.create({
    /**
     * Register with the dispatcher to listen for messages asking us to update
     * our data
     */
    dispatchIndex: Beef.Dispatcher.register(function(payload) {
        var action = payload.action;
        var data = payload.data;
        switch(action) {
            case TodoActions.type.RECEIVE_TODOS:
                TodoStore.receiveTodos(data);
                break;
        }
    }),
    
    /**
     * Receive an array of todos
     */
    receiveTodos: function(rawTodos) {
        rawTodos.forEach(function(rawTodo) {
            var todo = TodoStore.sanitize(rawTodo, TodoStore.schema.Todo);
            TodoStore.upsertRow('todo', 'id', todo.id, todo);
        });
        
        TodoStore.emit(TodoStore.event.UPDATE);
    },

    /**
     * Get all of the todos
     */
    getTodos: function() {
        return TodoStore.getRows('todo');
    },
    
    /**
     * Events this store will emit
     */
    event: {
    
        /**
         * Our data has been updated, and views should re-pull fresh data
         */
        UPDATE: 'TodoStore.event.UPDATE'
    },
    
    schema: {
        Todo: {
            id: {
                type: 'int'
            },
            title: {
                type: 'string'
            },
            description: {
                type: 'string'
            },
            created_on: {
                type: 'datetime'
            },
            completed: {
                type: 'boolean'
            }
        }
    }
});