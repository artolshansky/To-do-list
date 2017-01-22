  var Task = React.createClass({
    getInitialState() {      
      return {
        done: this.props.done,
        style: this.props.done ? {textDecoration: 'line-through'} : {}
      };
    },

    check() { 
      this.setState({
        done: this.state.done ? false : true,
        style: this.state.done ? {} : {textDecoration: 'line-through'}
      });
    }, 

    render() {
      return (
        <tbody>
          <tr> 
            <td style={this.state.style}>{this.props.name}</td>
            <td><input type="checkbox" className="done" onClick={this.check} ref={(input) => this.input = input} checked={this.state.done} /></td>
          </tr>
        </tbody>
      );
    }
  });

  var ToDoApp = React.createClass({
    getInitialState() {
      return {
        tasksCount: tasks.length
      };
    },

    submit() {
      if(this.input.value == ""){
      } else {
        tasks.push({
          name: this.input.value,
          done: false
        });
        this.setState({ tasksCount: this.state.tasksCount + 1 });
        this.input.value = "";
      }
    },

    addOnPressEnter(e) {
      if(e.key == 'Enter'){
        this.submit();
      }
    },

    render() {
      return (
        <div className="container" id="container" style={{paddingTop: 20}} >
          <div className="form-group input-group">
            <input type="text" className="form-control" id="task" placeholder="Enter task" onKeyPress={this.addOnPressEnter} ref={(input) => this.input = input}  />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-default" onClick={this.submit} >Enter</button>
            </span>
          </div>
          <table className="table table-hover">
            {tasks.map(function(task) {
              return <Task name={task.name} done={task.done} />;
            })}
          </table>
        </div>
      )
    }
  });

  var tasks = [
    {name: '1 First task', done: true},
    {name: '2 Second task', done: false},
    {name: '3 Third task', done: false},
  ];
  
  ReactDOM.render(<ToDoApp />, document.body);