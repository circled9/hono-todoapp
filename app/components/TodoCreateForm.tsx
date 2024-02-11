import { css } from 'hono/css'
import type { FC } from 'hono/jsx'

const outer = css`
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  padding: 16px 32px;
`

const textOuter = css`
  width: 100%;
`

const text = css`
  border-width: 0;
  width: 100%;
`

const buttonOuter = css`
  padding-left: 8px;
`

const button = css`
  background-color: #03A9F4;
  border-radius: 4px;
  border-width: 0;
  color: #ffffff;
  padding: 4px 16px;
`

export const TodoCreateForm: FC = () => {
  return (
    <div class={outer}>
      <input type="hidden" name="_action" value="create" />
      <div class={textOuter}>
        <input
          class={text}
          name="text"
          placeholder="Input your todo..."
          type="text"
        />
      </div>
      <div class={buttonOuter}>
        <button class={button} type="submit">
          Create
        </button>
      </div>
    </div>
  )
}
