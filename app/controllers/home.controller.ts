import { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'

export default class HomeController {
  async index({ inertia }: HttpContext) {
    return inertia.render('home')
  }

  async contact({ request, inertia }: HttpContext) {
    const { lastname, name, email, message } = request.only([
      'lastname',
      'name',
      'email',
      'message',
    ])

    await mail.send((emailToSend) => {
      emailToSend
        .to('julien.gallet@outlook.fr')
        .subject(`Demande de contact depuis le portfolio - ${name} ${lastname}`)
        .htmlView('emails/contact', {
          lastname: lastname,
          name: name,
          email: email,
          message: message,
        })
    })

    return inertia.render('home')
  }
}
