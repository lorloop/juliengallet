import { Input } from './ui/input'
import { Button } from './ui/button'
import { useForm } from '@mantine/form'
import { Label } from '@radix-ui/react-label'
import { Textarea } from './ui/textarea'
import { router } from '@inertiajs/react'

export default function ContactForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      lastname: '',
      name: '',
      email: '',
      message: '',
    },

    validate: {
      lastname: (value) => (value.length > 1 ? null : 'Le nom doit contenir au moins 2 caractères'),
      name: (value) => (value.length > 1 ? null : 'Le prénom doit contenir au moins 2 caractères'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalide'),
      message: (value) =>
        value.length > 1 ? null : 'Le message doit contenir au moins 2 caractères',
    },
  })

  return (
    <>
      <form
        onSubmit={form.onSubmit((values) => {
          form.reset()
          router.post('/', values)
        })}
        className="absolute w-full p-10 flex flex-col gap-4"
      >
        <div className="flex flex-col w-full gap-4 md:flex-row">
          <div className="md:w-1/2">
            <Label htmlFor="lastname" className="text-sm">
              Nom
            </Label>
            <Input id="lastname" key={form.key('lastname')} {...form.getInputProps('lastname')} />
            {form.errors.lastname && (
              <p className="text-xs italic text-red-400 mt-2">{form.errors.lastname}</p>
            )}
          </div>
          <div className="md:w-1/2">
            <Label htmlFor="name" className="text-sm">
              Prénom
            </Label>
            <Input id="name" key={form.key('name')} {...form.getInputProps('name')} />
            {form.errors.name && (
              <p className="text-xs italic text-red-400 mt-2">{form.errors.name}</p>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="email" className="text-sm">
            Email
          </Label>
          <Input id="email" key={form.key('email')} {...form.getInputProps('email')} />
          {form.errors.email && (
            <p className="text-xs italic text-red-400 mt-2">{form.errors.email}</p>
          )}
        </div>
        <div>
          <Label htmlFor="message" className="text-sm">
            Message
          </Label>
          <Textarea
            id="message"
            key={form.key('message')}
            {...form.getInputProps('message')}
            className="resize-none"
          />
          {form.errors.message && (
            <p className="text-xs italic text-red-400 mt-2">{form.errors.message}</p>
          )}
        </div>
        <div className="flex justify-center">
          <Button type="submit">Envoyer</Button>
        </div>
      </form>
    </>
  )
}
