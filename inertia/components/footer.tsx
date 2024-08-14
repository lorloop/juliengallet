import logoGithub from '~/assets/img/logo-github.png'
import logoLinkedin from '~/assets/img/logo-linkedin.png'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center m-10">
      <div className="flex gap-4 my-2">
        <a href="https://github.com/lorloop" target="blank">
          <img className="w-6" src={logoGithub} alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/gallet-julien/" target="blank">
          <img className="w-6" src={logoLinkedin} alt="Linkedin logo" />
        </a>
      </div>
      <p className="text-center text-xs mb-4">Réalisé par Julien GALLET © 2024</p>
    </footer>
  )
}
