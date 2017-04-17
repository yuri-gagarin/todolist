export function addTask(title, description) {
    return {
        type: "ADD_TASK",
        payload: {
            decription: description,
            title: title,
        }
    };
}
export function deleteTask(target) {
    return {
        type: "DELETE_TASK",
        payload: {
            id: target
        }
    };
}

export function markCompleted(target) {
    return {
        type: "MARK_COMPLETED",
        payload: {
            id: target,
            completed: true
        }
    }
}