import Footer from '~/components/footer'
import Header from '~/components/header'
import ContactForm from '~/components/contact_form'
import { Card, CardContent } from '~/components/ui/card'
import ShineBorder from '~/components/magicui/shine-border'
import avatar from '~/assets/img/profile.png'
import logoAdonis from '~/assets/img/logo-adonis.png'
import logoAngular from '~/assets/img/logo-angular.png'
import logoCss from '~/assets/img/logo-css.png'
import logoDocker from '~/assets/img/logo-docker.png'
import logoGithub from '~/assets/img/logo-github.png'
import logoHtml from '~/assets/img/logo-html.png'
import logoInertia from '~/assets/img/logo-inertia.png'
import logoMagicUi from '~/assets/img/logo-magic-ui.png'
import logoMysql from '~/assets/img/logo-mysql.png'
import logoNode from '~/assets/img/logo-node.png'
import logoNpm from '~/assets/img/logo-npm.png'
import logoPostgres from '~/assets/img/logo-postgres.png'
import logoReact from '~/assets/img/logo-react.png'
import logoShadcn from '~/assets/img/logo-shadcn.png'
import logoTailwind from '~/assets/img/logo-tailwind.png'
import logoTypescript from '~/assets/img/logo-typescript.png'
import logoVscode from '~/assets/img/logo-vscode.png'
import portfolio1 from '~/assets/img/projects/portfolio/portfolio_1.png'
import portfolio2 from '~/assets/img/projects/portfolio/portfolio_2.png'
import booki1 from '~/assets/img/projects/booki/booki_1.png'
import booki2 from '~/assets/img/projects/booki/booki_2.png'
import kasa1 from '~/assets/img/projects/kasa/kasa_1.png'
import kasa2 from '~/assets/img/projects/kasa/kasa_2.png'
import kasa3 from '~/assets/img/projects/kasa/kasa_3.png'
import ProjectCard from '~/components/project_card'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-12">
        <h1 className="text-center text-3xl text-primary">Consultant logiciel, développeur web</h1>

        <section className="flex flex-col-reverse gap-12 items-center mt-16 m-6 md:flex-row">
          <article className="text-justify text-sm text-wrap space-y-2">
            <p>Salut 👋</p>
            <p>
              Moi c'est Julien, consultant en logiciel comptable depuis 3 ans, j'ai décidé
              d'acquérir de nouvelles compétences en préparant un diplôme de{' '}
              <span className="underline decoration-sky-500">Développeur Web</span>.
            </p>
            <p>
              Je peux vous accompagner dans votre projet de site internet, de la simple page
              statique à une application web complète.
            </p>
            <p>
              N'hésitez pas à me contacter pour discuter de votre projet, je serais ravi d'échanger
              avec vous autour de ce dernier.
            </p>
          </article>
          <div className="w-3/5 rounded-md shadow-2xl overflow-hidden">
            <img src={avatar} alt="avatar" />
          </div>
        </section>

        <section className="flex flex-col items-center gap-5 mt-16 md:flex-row md:items-stretch">
          <Card className="w-5/6 md:w-1/3">
            <CardContent className="flex justify-center p-4">
              <div>
                <h2 className="text-center text-xl mb-2">Front-end</h2>
                <p className="text-center text-xs italic">HTML / CSS / Javascript</p>
                <div className="flex flex-wrap gap-3 justify-center items-center mt-6">
                  <img className="w-6" src={logoReact} alt="React logo" />
                  <img className="w-6" src={logoAngular} alt="Angular logo" />
                  <img className="w-6" src={logoTailwind} alt="Tailwind CSS logo" />
                  <img className="w-6" src={logoMysql} alt="MySQL logo" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-5/6 md:w-1/3">
            <CardContent className="flex justify-center p-4">
              <div>
                <h2 className="text-center text-xl mb-2">Back-end</h2>
                <p className="text-center text-xs italic">NodeJS</p>
                <div className="flex flex-wrap gap-3 justify-center items-center mt-6">
                  <img className="w-6" src={logoNode} alt="NodeJs logo" />
                  <img className="w-6" src={logoAdonis} alt="AdonisJS logo" />
                  <img className="w-6" src={logoInertia} alt="Inertia logo" />
                  <img className="w-6" src={logoMysql} alt="MySQL logo" />
                  <img className="w-6" src={logoPostgres} alt="PostgreSQL logo" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-5/6 md:w-1/3">
            <CardContent className="flex justify-center p-4">
              <div>
                <h2 className="text-center text-xl mb-2">Outils</h2>
                <p className="text-center text-xs italic">Environnement : MacOS</p>
                <div className="flex flex-wrap gap-3 justify-center items-center mt-6">
                  <img className="w-6" src={logoVscode} alt="VS Code logo" />
                  <img className="w-6" src={logoGithub} alt="Github logo" />
                  <img className="w-6" src={logoNpm} alt="NPM logo" />
                  <img className="w-6" src={logoDocker} alt="Docker logo" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="mt-16" id="realisations">
          <p className="text-center text-2xl text-primary">Mes réalisations</p>
          <div className="mt-10 flex justify-center flex-wrap gap-3">
            <ProjectCard
              title="Portfolio"
              pitch="Créez et publiez votre portfolio de développeur"
              description="Dernier projet de ma formation Développeur Web, il m'a permis de mettre en pratique mes compétences en React, Tailwind CSS, AdonisJS et MySQL. J'ai également découvert InertiaJS, un framework qui permet de créer des applications web sans API REST."
              stack={[
                logoAdonis,
                logoInertia,
                logoReact,
                logoTypescript,
                logoTailwind,
                logoShadcn,
                logoMagicUi,
              ]}
              images={[portfolio1, portfolio2]}
              url="/"
              githubRepo="https://github.com/lorloop/juliengallet"
            />
            <ProjectCard
              title="Booki"
              pitch="Créez la page d'accueil d'une agence de voyage avec HTML & CSS"
              description="Intégration d'une maquette Figma en HTML & CSS. Projet réalisé dans le cadre de ma formation Développeur Web, il m'a permis de monter en compétence sur la sémantique HTML et les propriétés CSS. La compléxité de ce projet était la partie responsive, que j'ai pu surmonter avec l'utilisation de flex et grid en CSS aliés aux média queries."
              stack={[logoHtml, logoCss]}
              images={[booki1, booki2]}
              url="https://booki.juliengallet.fr"
              githubRepo="https://github.com/lorloop/OPC-P2-Booki"
            />
            <ProjectCard
              title="Kasa"
              pitch="Créez une application web de location immobilière avec React"
              description="Projet réalisé dans le cadre de ma formation Développeur Web, il m'a permis de monter en compétence sur React. J'ai pu découvrir les hooks, le context, les states et les routes. Le style et l'aspect responsive de l'application ont été réalisé avec Sass."
              stack={[logoReact]}
              images={[kasa1, kasa2, kasa3]}
              url="https://kasa.juliengallet.fr"
              githubRepo="https://github.com/lorloop/OPC-P5-Kasa"
            />
          </div>
        </section>
        <section className="mt-16" id="contact">
          <p className="text-center text-2xl text-primary">Me contacter</p>
          <div className="mt-10">
            <ShineBorder
              className="relative h-[550px] md:h-[400px] w-4/5 m-auto overflow-hidden rounded-lg border bg-background md:shadow-xl"
              color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
              children={<ContactForm />}
            ></ShineBorder>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
