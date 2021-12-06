import React from 'react';

class TodoList extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <button className="btn btn-dark">Add Employee</button>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Priority</th>
                                <th>Completed?</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Task 1</td>
                                <td>Medium</td>
                                <td>true</td>
                                <td>
                                    <button className="btn btn-primary">View</button>
                                    <button className="btn btn-warning">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Task 1</td>
                                <td>Medium</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>Task 1</td>
                                <td>Medium</td>
                                <td>true</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TodoList;