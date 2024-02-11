import { css } from 'hono/css'
import type { FC } from 'hono/jsx'

const outer = css`
  align-items: center;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`
const title = css`
  color: #666666;
  margin-bottom: 16px;
  margin-top: 64px;
`

const inner = css`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px 2px #dddddddd;
  height: calc(100% - 160px);
  max-width: 600px;
  width: 90%;
`

export const TodoAppOuter: FC = (props) => {
  return (
    <div class={outer}>
      <h1 class={title}>TodoApp</h1>
      <div class={inner}>{props.children}</div>
    </div>
  )
}
