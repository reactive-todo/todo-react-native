import React from 'react';
import { ScrollView } from 'react-native';
import { CheckBox, Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: Array(...Array(20)).map((_, i) => ({ id: i, name: `Задача ${i}`, checked: false })),
    };
  }

  toggleTask = (task) => {
    const toggledTask = task;
    toggledTask.checked = !toggledTask.checked;

    this.setState({
      tasks: this.state.tasks.map(o => (o === task ? toggledTask : o)),
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          centerComponent={{ text: 'Reactive ToDo', style: { color: '#fff' } }}
        />
        <ScrollView>
          {this.state.tasks.map(task => (
            <CheckBox
              key={task.id}
              title={task.name}
              checked={task.checked}
              onPress={() => this.toggleTask(task)}
            />
          ))}
        </ScrollView>
      </React.Fragment>
    );
  }
}
