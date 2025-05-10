export const clearInformationTasks = (allTask: any[]) => {
  return allTask.map(element => {
    return {
      id: element.id_task,
      text: element.description,
      completed: element.state_id === 1 ? true : false
    }
  })
}