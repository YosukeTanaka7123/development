import db from '~/db'
import { choices } from '~/db/schemas/choices'

export const Choices = async () => {
  const choicesResult = await db.select().from(choices)

  return (
    <>
      <p>length:{choicesResult.length}</p>
    </>
  )
}
