import { createRoute } from 'honox/factory'
import TodoItem from '../../islands/TodoItem'
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
    <div>
      <form action="/todos" method="POST">
        <div>
          <input name="_action" type="hidden" value="create" />
          <input name="text" type="text" />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>
            <TodoItem checked={todo.checked} id={todo.id} text={todo.text} />
          </li>
        ))}
      </ul>
    </div>,
    { title: 'Todo App' },
  )
})
