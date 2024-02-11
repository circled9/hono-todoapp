import { createRoute } from 'honox/factory'
import { TodoAppOuter } from '../../components/TodoAppOuter'
import { TodoCreateForm } from '../../components/TodoCreateForm'
import { TodoItem } from '../../components/TodoItem'
import { TodoListOuter } from '../../components/TodoListOuter'
import TodoService from '../../services/TodoService'

type CreateAction = {
  _action: 'create'
  text: string
}

type UpdateAction = {
  _action: 'toggle'
  checked: string
  id: string
}

export const POST = createRoute(async (c) => {
  const body = await c.req.parseBody<CreateAction | UpdateAction>()
  if (body._action === 'create') {
    TodoService.createTodo(body.text)
  }
  if (body._action === 'toggle') {
    TodoService.toggleTodo(body.id)
  }
  return c.redirect('/todos')
})

export default createRoute((c) => {
  const todos = TodoService.listTodos()
  return c.render(
    <TodoAppOuter>
      <form method="POST" action="/todos">
        <TodoCreateForm />
      </form>
      <TodoListOuter>
        <ul>
          {todos.map((todo) => (
            <li>
              <TodoItem checked={todo.checked} id={todo.id} text={todo.text} />
            </li>
          ))}
        </ul>
      </TodoListOuter>
    </TodoAppOuter>,
    { title: 'Todo App' },
  )
})
