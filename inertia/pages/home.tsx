import Footer from '~/components/footer'
import Header from '~/components/header'
import ContactForm from '~/components/contact_form'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
import cv from '~/assets/img/cv.jpeg'
import { Link } from '@inertiajs/react'
import ShineBorder from '~/components/magicui/shine-border'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-12">
        <h1 className="text-center text-3xl text-primary">
          Consultant logiciel, développeur web & passionné d'IT
        </h1>

        <section className="flex gap-12 items-center mt-16 m-6">
          <article className="text-justify text-sm text-wrap space-y-2">
            <p>Salut 👋</p>
            <p>
              Moi c'est Julien, de Kompozer à 12/13 ans à AdonisJS à 28 ans, en passant par un BTS
              en comptabilité et gestion des organisations, j'ai pu apprendre l'art du développement
              web de manière auto-didacte.
            </p>
            <p>
              Aujourd'hui je souhaite approfondir et faire reconnaitre mes compétences dans ce
              domaine. C'est pourquoi je me suis lancé le défis de redevenir étudiant et préparer un
              diplôme de <span className="underline decoration-sky-500">Développeur Web</span>.
            </p>
            <p>
              Entre mon emploi en tant que consultant en logiciel comptable, le développement web et
              la vie de famille, je trouve encore le temps pour des expérimentations dans le domaine
              de l'IT (homelab, domotique ...) 💻 😀
            </p>
          </article>
          <div className="w-3/5 rounded-md shadow-2xl overflow-hidden">
            <img src="inertia/assets/img/IMG_0032.JPG" alt="avatar" />
          </div>
        </section>

        <section className="mt-16">
          <Card className="w-4/5 m-auto">
            <CardContent className="flex justify-center p-4">
              <div className="w-1/3">
                <h2 className="text-center text-xl mb-2">Consulting</h2>
                <p className="text-center text-xs italic">
                  Du simple dépannage à l'audit de valorisation
                </p>
                <ul className="mt-4 text-xs list-inside list-disc leading-loose">
                  <li>Dépannage à distance</li>
                  <li>Aide à l'utilisation</li>
                  <li>Accompagnement au quotidien</li>
                  <li>Formation interne / client</li>
                  <li>Expertise métier / technique</li>
                  <li>Paramétrage spécifique</li>
                  <li>Conseils</li>
                  <li>Gestion de projets (déploiement, renouvellement de gamme)</li>
                  <li>Audit de valorisation des solutions en place</li>
                </ul>
              </div>
              <Separator orientation="vertical" className="h-auto ml-3 mr-3" />
              <div className="w-1/3">
                <h2 className="text-center text-xl mb-2">Développement</h2>
                <p className="text-center text-xs italic">
                  D'une page statique à un site dynamique
                </p>
                <div className="flex gap-1 justify-center items-center mt-4">
                  <img className="w-8" src="inertia/assets/img/logo-html.png" alt="HTML logo" />
                  <img className="w-8" src="inertia/assets/img/logo-css.png" alt="CSS logo" />
                  <img className="w-8" src="inertia/assets/img/logo-sass.png" alt="Sass logo" />
                  <img className="w-8" src="inertia/assets/img/logo-js.png" alt="Javascript logo" />
                  <img className="w-8" src="inertia/assets/img/logo-python.png" alt="Python logo" />
                  <img className="w-8" src="inertia/assets/img/logo-sql.png" alt="SQL logo" />
                  <img className="w-8" src="inertia/assets/img/logo-git.png" alt="Git logo" />
                </div>
                <Accordion className="mt-4" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Outils de développement</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-2 justify-center items-center mt-4">
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-vscode.png"
                          alt="VS Code logo"
                        />
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-github.png"
                          alt="Github logo"
                        />
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-node.png"
                          alt="NodeJs logo"
                        />
                        <img className="w-8" src="inertia/assets/img/logo-npm.png" alt="NPM logo" />
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-adonis.png"
                          alt="AdonisJS logo"
                        />
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-react.png"
                          alt="React logo"
                        />
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-angular.png"
                          alt="Angular logo"
                        />
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-tailwind.png"
                          alt="Tailwind CSS logo"
                        />
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-mysql.png"
                          alt="MySQL logo"
                        />
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-postgres.png"
                          alt="PostgreSQL logo"
                        />
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-docker.png"
                          alt="Docker logo"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion className="mt-4" type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Stack ♥️</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-1 justify-center items-center mt-4">
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-adonis.png"
                          alt="AdonisJS logo"
                        />
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-inertia.png"
                          alt="Inertia logo"
                        />
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-react.png"
                          alt="React logo"
                        />
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-tailwind.png"
                          alt="Tailwind CSS logo"
                        />
                        <img
                          className="w-8"
                          src="inertia/assets/img/logo-mysql.png"
                          alt="MySQL logo"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <Separator orientation="vertical" className="h-auto ml-3 mr-3" />
              <div className="w-1/3">
                <h2 className="text-center text-xl mb-2">Hobbies</h2>
                <p className="text-center text-xs italic">Ce que j'aime faire le dimanche</p>
                <div className="flex gap-1 justify-center items-center mt-4">
                  <img
                    className="w-8"
                    src="inertia/assets/img/logo-proxmox.png"
                    alt="Proxmox logo"
                  />
                  <img
                    className="w-8"
                    src="inertia/assets/img/logo-homeassistant.png"
                    alt="HA logo"
                  />
                  <img className="w-8" src="inertia/assets/img/logo-z2m.png" alt="Z2M logo" />
                </div>
                <p className="mt-4 text-xs">
                  Vous l'aurez compris, je m'intéresse à beaucoup de choses dans le domaine de l'IT.
                  Je me suis donc lancé il y a de ça un petit moment dans le homelab et la
                  virtualisation de services.
                </p>
                <p className="mt-4 text-xs">
                  Ayant appris de manière autodidacte l'utilisation de proxmox, docker et les
                  conteneurs LXC. Je m'intéresse aujourd'hui à la domotique et la surveillance de la
                  maison tout en me passant des services cloud propriétaires.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="mt-16 m-6" id="realisations">
          <p className="text-center text-2xl text-primary">Mes réalisations</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Card className="w-1/4">
              <Link href="/">
                <CardHeader>
                  <CardTitle>Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={cv} alt="Illustration portfolio" />
                </CardContent>
              </Link>
            </Card>
          </div>
        </section>
        <section className="mt-16" id="contact">
          <p className="text-center text-2xl text-primary">Me contacter</p>
          <div className="mt-10">
            <ShineBorder
              className="relative h-[400px] w-4/5 m-auto overflow-hidden rounded-lg border bg-background md:shadow-xl"
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
