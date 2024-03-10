// export default function Todo({ task }) {
//     return (
//         <li>Task: {task}</li>
//     )
// }

// conditional rendering option 1:

// export default function Todo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Finished: {task}</li>
//     }
//     else {
//         return <li>Work on: {task}</li>
//     }

// }

// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>Finish: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }



// 38-7 Six ways to do Conditional Rendering: If, Ternary and AND OR

// conditional rendering 3: ternary operator
// export default function Todo({ task, isDone }) {
//     return (
//         <li> {isDone ? "Finished" : "work on"} : {task} </li>
//     )
// }

// conditional rendering option 4: && ( isDone true hole "Done" hobe , false hole hobe na )
// export default function Todo({ task, isDone }) {
//     return (
//         <li> {task} {isDone && ": Done"} </li>
//     )
// }

// conditional rendering option 5: || ( isDone false hole "Do it" hobe )
// export default function Todo({ task, isDone }) {
//     return (
//         <li> {task} {isDone || ": Do it"} </li>

//     )
// }

// conditional rendering option 6:
export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li>Finish: {task}</li>
    }
    else {
        listItem = <li>Work on: {task} </li>
    }
    return listItem;
}

