  var Task = function(props){
    return (
    <tbody>
      <tr> 
        <td>{props.name}</td>
        <td><input type="checkbox" className="done"></input></td>
      </tr>
    </tbody>
    );
  }

  var ToDoList = React.createClass({
    render: function(){
      return (
        <table className="table table-hover">
          {this.props.tasks.map(function(task) {
            return <Task name={task.name} done={task.done} />;
          })}
        </table>
      );
    }
  }); 

  var ToDoInput = React.createClass({
    render: function(){
      return (
        <div className="form-group input-group">
          <input type="text" className="form-control" id="task" placeholder="Enter task"></input>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-default">Enter</button>
          </span>
        </div>
      );
    }
  }); 

  var ToDoApp = React.createClass({
    render: function(){
      return (
        <div>
          <ToDoInput />
          <ToDoList tasks={tasks} />
        </div>
        );
    }
  });

  var tasks = [
    {name: '1 First task', done: false},
    {name: '2 Second task', done: false},
    {name: '3 Third task', done: false},
  ];
  
  ReactDOM.render(<ToDoApp />, document.getElementById('container'));