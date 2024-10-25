import React, { useEffect, useReducer } from 'react';

const initialState = {
    users: [],
    loading: true,
    error: null
};

function reducer(state, action) {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return { ...state, users: action.payload, loading: false };
        case "FETCH_ERROR":
            return { ...state, loading: false, error: action.error };
        case "ADD_USER":
            return { ...state, users: [...state.users, action.payload] };
        case "DELETE_USER":
            return { 
                ...state, 
                users: state.users.filter(user => user.id !== action.payload.id) 
            };
        case "UPDATE_USER":
            return {
                ...state,
                users: state.users.map(user => 
                    user.id === action.payload.id ? { ...user, ...action.payload } : user
                )
            };
        default:
            return state;
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                dispatch({ type: "FETCH_SUCCESS", payload: data });
            } catch (error) {
                dispatch({ type: "FETCH_ERROR", error: error.message });
            }
        };

        fetchUsers();
    }, []);

    if (state.loading) {
        return <div className="alert alert-success">Loading...</div>;
    }

    if (state.error) {
        return <div className="alert alert-success">Error: {state.error}</div>;
    }
    const addUser = {type:"ADD_USER",payload:action}
    const deleteUser = {type:"DELETE_USER",payload:action}
    const updateUser = {type:"UPDATE_USER",payload:action}
    // const viewUser = {type:"VIEW_USER",payload:action}
    

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {state.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                               <button className="btn btn-outline-primary btn-mx " onClick={viewuser(id)}>View</button>
                               <button className="btn btn-outline-info btn-mx" onClick={addUser(user)}>Edit</button>
                               <button className="btn btn-outline-danger btn-mx" onClick={updateUser(user.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
const {state,addUser,deleteUser,updateUser}=Reducer();

export default Reducer;