import { css } from 'hono/css'

const checkbox = css`
  display: none;
`

const label = css`
  border-bottom: 1px solid #eeeeee;
  display: inline-block;
  padding: 16px 32px;
  width: 100%;
`

const checkedText = css`
  color: #999999;
  text-decoration-line: line-through;
`

const uncheckedText = css`
  color: #333333;
`

export const TodoItem = ({
  checked,
  id,
  text,
}: {
  checked: boolean
  id: string
  text: string
}) => {
  const textStyle = checked ? checkedText : uncheckedText

  const submitId = `submit_${id}`
  return (
    <form method="POST" action="/todos">
      <label class={label} for={submitId}>
        <input type="submit" id={submitId} style="display: none" />
        <input type="hidden" name="_action" value="toggle" />
        <input type="hidden" name="id" value={id} />
        <input
          checked={checked}
          class={checkbox}
          name="checked"
          type="checkbox"
        />
        <span class={textStyle}>{text}</span>
      </label>
    </form>
  )
}
