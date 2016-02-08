var TodoItem = React.createClass({
    render: function() {
        var todo = this.props.todo;
        return (<li>
            <label><input type='checkbox' checked={todo.completed} onChange={this.toggleCompleted} /> {todo.title}</label>
            <p>{todo.description}</p>
        </li>);
    },
    toggleCompleted: function() {
        var todo = this.props.todo;
        todo.completed = !todo.completed;
        TodoActions.receiveTodos([todo]);
    }
});