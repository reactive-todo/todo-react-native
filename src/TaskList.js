import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text } from 'react-native';
import { CheckBox, Header } from 'react-native-elements';
import { connect } from 'react-redux';

import { getTasks } from './reducer';

class TaskList extends React.Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    getTasks: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTasks();
  }

  // toggleTask = (task) => {
  // const toggledTask = task;
  // toggledTask.checked = !toggledTask.checked;
  //
  // this.setState({
  //   tasks: this.state.tasks.map(o => (o === task ? toggledTask : o)),
  // });
  // };

  render() {
    return (
      <React.Fragment>
        <Header
          centerComponent={{ text: 'Reactive ToDo', style: { color: '#fff' } }}
        />
        <ScrollView>
          {this.props.tasks.length > 0 ? this.props.tasks.map(task => (
            <CheckBox
              key={task.id}
              title={task.name}
              checked={task.checked}
            />
          )) : (
            <Text>Empty list</Text>
          )}
        </ScrollView>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state,
  tasks: state.tasks,
}), {
  getTasks,
})(TaskList);
