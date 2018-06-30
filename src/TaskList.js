import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text } from 'react-native';
import { CheckBox, Header } from 'react-native-elements';
import { connect } from 'react-redux';

import { getTasks, checkTask, uncheckTask } from './reducer';

class TaskList extends React.Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    getTasks: PropTypes.func.isRequired,
    checkTask: PropTypes.func.isRequired,
    uncheckTask: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTasks();
  }

  toggleTask = async (task) => {
    if (task.checked) {
      await this.props.uncheckTask(task);
    } else {
      await this.props.checkTask(task);
    }
    this.props.getTasks();
  };

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
              title={task.description}
              checked={task.checked}
              onPress={() => this.toggleTask(task)}
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
  tasks: state.tasks,
}), {
  getTasks,
  checkTask,
  uncheckTask,
})(TaskList);
