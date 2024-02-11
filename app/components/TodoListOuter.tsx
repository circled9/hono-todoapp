import { css } from 'hono/css'
import type { FC } from 'hono/jsx'

const outer = css`
  height: calc(100% - 64px);
  overflow-y: scroll;
`
const inner = css`
`

export const TodoListOuter: FC = (props) => {
  return (
    <div class={outer}>
      <div class={inner}>{props.children}</div>
    </div>
  )
}
