var TodoActions = new function() {
    
    return {
        
        /**
         * Take in an array of objects, and notify the store
         */
        receiveTodos: function(rawTodos) {
            Beef.Dispatcher.dispatch(TodoActions.type.RECEIVE_TODOS, rawTodos);
        },
        
        /**
         * The messages this service may dispatch
         */
        type: {
            
            /**
             * When we receive new todos, or updates to existing ones
             */
            RECEIVE_TODOS: 'TodoActions.type.RECEIVE_TODOS:'
        }
    };
};