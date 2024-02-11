export type Todo = {
  checked: boolean
  id: string
  text: string
}

class Service {
  private todos: Todo[] = []

  listTodos(): Todo[] {
    return this.todos
  }

  findTodo(id: string): Todo {
    const target = this.todos.find((todo) => todo.id === id)
    if (!target) {
      throw new Error('target is not found.')
    }
    return target
  }

  createTodo(text: string): Todo {
    const id = crypto.randomUUID()
    const newTodo = {
      checked: false,
      text,
      id,
    }
    this.todos.push(newTodo)
    return newTodo
  }

  updateTodo(source: Todo): Todo {
    const target = this.findTodo(source.id)
    this.todos = this.todos.map((todo) => {
      if (todo.id === source.id) {
        return source
      }
      return todo
    })
    return this.findTodo(source.id)
  }

  removeTodo(id: string): void {
    const target = this.findTodo(id)
    this.todos = this.todos.filter((todo) => todo.id !== target.id)
  }

  toggleTodo(id: string): Todo {
    const target = this.findTodo(id)
    const updated = {
      ...target,
      checked: !target.checked,
    }
    return this.updateTodo(updated)
  }
}

const TodoService = new Service()
export default TodoService
