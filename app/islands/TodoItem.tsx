export default function TodoItem({
  id,
  checked,
  text,
}: { id: string; checked: boolean; text: string }) {
  const submitId = `submit_${id}`
  return (
    <form action="/todos" method="POST">
      <input id={submitId} style="display: none" type="submit" />
      <input name="_action" type="hidden" value="toggle" />
      <input name="id" type="hidden" value={id} />
      <label for={submitId}>
        <input checked={checked} name="checked" type="checkbox" />
        <span>{text}</span>
      </label>
    </form>
  )
}
