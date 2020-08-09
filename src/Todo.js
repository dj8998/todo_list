import React from 'react';
import List from '@material-ui/core/List';
import {ListItem, ListItemText} from '@material-ui/core';
import './Todo.css';

function todo(props) {
	return (
		<List className = "todo_list">
			<ListItem button>
			          <ListItemText primary= {props.todo} secondary="Todo" />
			</ListItem>
		</List>
	)
}

export default todo	