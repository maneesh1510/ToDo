export default (title, description, dueDate, priority, completed = false, id = undefined) => {
  title;
  description;
  dueDate;
  priority;
  completed;
  id;

  const setId = (newId) => {
    id = newId;
  }

  const getId = () => {
    return id;
  }

  const update = (newtitle, newDescription, newDueDate, newPriority) => {
    title = newtitle;
    description = newDescription;
    dueDate = newDueDate;
    priority = newPriority;
  }

  const getTitle = () => {
    return title;
  }

  const getDescription = () => {
    return description;
  }

  const getDueDate = () => {
    return dueDate;
  }

  const getPriority = () => {
    return priority;
  }
  
  const getCompleted = () => {
    return completed;
  }

  return {getTitle, getDescription, getDueDate, getPriority, getCompleted, setId, getId, update}
}