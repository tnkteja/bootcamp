export function project(name) {
    this.name = name;
    this.list = [];
    }
    
    project.prototype.add = function(todo) {
    this.list.push(todo);
    }
    
    export function todoitem (title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description=description;
    this.dueDate=dueDate;
    this.priority=priority;
    this.notes=notes;
    this.checklist=checklist;
    this.project= "default";    
    }
    

export function checklist(name, isComplete) {
this.name = name;
this.isComplete = isComplete;
}
