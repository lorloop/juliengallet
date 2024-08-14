import Footer from '~/components/footer'
import Header from '~/components/header'
import ContactForm from '~/components/contact_form'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import ShineBorder from '~/components/magicui/shine-border'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import avatar from '~/assets/img/profile.png'
import logoAdonis from '~/assets/img/logo-adonis.png'
import logoAngular from '~/assets/img/logo-angular.png'
import logoCss from '~/assets/img/logo-css.png'
import logoDocker from '~/assets/img/logo-docker.png'
import logoGit from '~/assets/img/logo-git.png'
import logoGithub from '~/assets/img/logo-github.png'
import logoHomeassistant from '~/assets/img/logo-homeassistant.png'
import logoHtml from '~/assets/img/logo-html.png'
import logoInertia from '~/assets/img/logo-inertia.png'
import logoJs from '~/assets/img/logo-js.png'
import logoMagicUi from '~/assets/img/logo-magic-ui.png'
import logoMysql from '~/assets/img/logo-mysql.png'
import logoNode from '~/assets/img/logo-node.png'
import logoNpm from '~/assets/img/logo-npm.png'
import logoPostgres from '~/assets/img/logo-postgres.png'
import logoProxmox from '~/assets/img/logo-proxmox.png'
import logoPython from '~/assets/img/logo-python.png'
import logoReact from '~/assets/img/logo-react.png'
import logoSass from '~/assets/img/logo-sass.png'
import logoShadcn from '~/assets/img/logo-shadcn.png'
import logoSql from '~/assets/img/logo-sql.png'
import logoTailwind from '~/assets/img/logo-tailwind.png'
import logoTypescript from '~/assets/img/logo-typescript.png'
import logoVscode from '~/assets/img/logo-vscode.png'
import logoZ2m from '~/assets/img/logo-z2m.png'
import cv from '~/assets/img/cv.jpeg'
import portfolio1 from '~/assets/img/projects/portfolio/portfolio_1.png'
import portfolio2 from '~/assets/img/projects/portfolio/portfolio_2.png'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-12">
        <h1 className="text-center text-3xl text-primary">
          Consultant logiciel, développeur web & passionné d'IT
        </h1>

        <section className="flex flex-col-reverse gap-12 items-center mt-16 m-6 md:flex-row">
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
            <img src={avatar} alt="avatar" />
          </div>
        </section>

        <section className="flex flex-col items-center gap-5 mt-16 md:flex-row md:items-stretch">
          <Card className="w-5/6 md:w-1/3">
            <CardContent className="flex justify-center p-4">
              <div>
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
            </CardContent>
          </Card>
          <Card className="w-5/6 md:w-1/3">
            <CardContent className="flex justify-center p-4">
              <div>
                <h2 className="text-center text-xl mb-2">Développement</h2>
                <p className="text-center text-xs italic">
                  D'une page statique à un site dynamique
                </p>
                <div className="flex flex-wrap gap-1 justify-center items-center mt-4">
                  <img className="w-6" src={logoHtml} alt="HTML logo" />
                  <img className="w-6" src={logoCss} alt="CSS logo" />
                  <img className="w-6" src={logoSass} alt="Sass logo" />
                  <img className="w-6" src={logoJs} alt="Javascript logo" />
                  <img className="w-6" src={logoPython} alt="Python logo" />
                  <img className="w-6" src={logoSql} alt="SQL logo" />
                  <img className="w-6" src={logoGit} alt="Git logo" />
                </div>
                <Accordion className="mt-4" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Outils de développement</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-2 justify-center items-center mt-4">
                        <img className="w-6" src={logoVscode} alt="VS Code logo" />
                        <img className="w-6" src={logoGithub} alt="Github logo" />
                        <img className="w-6" src={logoNode} alt="NodeJs logo" />
                        <img className="w-6" src={logoNpm} alt="NPM logo" />
                        <img className="w-6" src={logoAdonis} alt="AdonisJS logo" />
                        <img className="w-6" src={logoReact} alt="React logo" />
                        <img className="w-6" src={logoAngular} alt="Angular logo" />
                        <img className="w-6" src={logoTailwind} alt="Tailwind CSS logo" />
                        <img className="w-6" src={logoMysql} alt="MySQL logo" />
                        <img className="w-6" src={logoPostgres} alt="PostgreSQL logo" />
                        <img className="w-6" src={logoDocker} alt="Docker logo" />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion className="mt-4" type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Stack ♥️</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-1 justify-center items-center mt-4">
                        <img className="w-6" src={logoAdonis} alt="AdonisJS logo" />
                        <img className="w-6" src={logoInertia} alt="Inertia logo" />
                        <img className="w-6" src={logoReact} alt="React logo" />
                        <img className="w-6" src={logoTailwind} alt="Tailwind CSS logo" />
                        <img className="w-6" src={logoMysql} alt="MySQL logo" />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>
          <Card className="w-5/6 md:w-1/3">
            <CardContent className="flex justify-center p-4">
              <div>
                <h2 className="text-center text-xl mb-2">Hobbies</h2>
                <p className="text-center text-xs italic">Ce que j'aime faire le dimanche</p>
                <div className="flex gap-1 justify-center items-center mt-4">
                  <img className="w-6" src={logoProxmox} alt="Proxmox logo" />
                  <img className="w-6" src={logoHomeassistant} alt="HA logo" />
                  <img className="w-6" src={logoZ2m} alt="Z2M logo" />
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
          <div className="mt-10 flex justify-center flex-wrap gap-3 md:justify-normal">
            <Dialog>
              <Card className="w-2/4 md:w-1/4">
                <DialogTrigger>
                  <a>
                    <CardHeader>
                      <CardTitle>Portfolio</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={cv} alt="Illustration portfolio" />
                    </CardContent>
                  </a>
                </DialogTrigger>
              </Card>
              <DialogContent className="w-9/12">
                <DialogHeader>
                  <DialogTitle>Portfolio</DialogTitle>
                  <DialogDescription>
                    <div className="flex justify-center my-4">
                      <Carousel className="w-9/12">
                        <CarouselContent>
                          <CarouselItem>
                            <img src={portfolio1} alt="Capture du portfolio 1" />
                          </CarouselItem>
                          <CarouselItem>
                            <img src={portfolio2} alt="Capture du portfolio 2" />
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </div>
                    <div className="flex justify-center my-6">
                      <Tabs defaultValue="description" className="md:w-1/2">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="description">Description</TabsTrigger>
                          <TabsTrigger value="stack">Stack</TabsTrigger>
                        </TabsList>
                        <TabsContent value="description">
                          <p className="text-xs md:text-base italic">
                            Le portfolio que vous êtes entrain de consulter.
                          </p>
                        </TabsContent>
                        <TabsContent value="stack">
                          <div className="flex flex-wrap gap-3 justify-center items-center">
                            <img className="w-6 md:w-8" src={logoAdonis} alt="AdonisJS logo" />
                            <img className="w-6 md:w-8" src={logoInertia} alt="Inertia logo" />
                            <img className="w-6 md:w-8" src={logoReact} alt="React logo" />
                            <img
                              className="w-6 md:w-8"
                              src={logoTypescript}
                              alt="Typescript logo"
                            />
                            <img
                              className="w-6 md:w-8"
                              src={logoTailwind}
                              alt="Tailwind CSS logo"
                            />
                            <img className="w-6 md:w-8" src={logoShadcn} alt="Shadcn UI logo" />
                            <img className="w-6 md:w-8" src={logoMagicUi} alt="Magic UI logo" />
                            <img className="w-6 md:w-8" src={logoMysql} alt="MySQL logo" />
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
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
