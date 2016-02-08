/**
 * 
 */
var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: TodoStore.getTodos()
        };
    },
    componentWillMount: function() {
        TodoStore.listen(TodoStore.event.UPDATE, this.onStoreUpdate);
    },
    componentWillUnmount: function() {
        TodoStore.ignore(TodoStore.event.UPDATE, this.onStoreUpdate);
    },
    
    render: function() {
        
        var todos = this.state.todos.map(function(todo) {
            return (<TodoItem todo={todo} />);
        });

        return (
        <ul>
            {todos}
        </ul>
        );
    },
    
    onStoreUpdate: function() {
        this.setState({
            todos: TodoStore.getTodos()
        });
    }
});

var todos = [];
todos.push({
    id: 1,
    title: 'Test Todo 1',
    description: 'simple test todo',
    created_on: '2016-02-07 22:43:00'
});
TodoActions.receiveTodos(todos);

React.render(React.createElement(TodoApp, {}), document.getElementById('app'));