import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import logoGithub from '../assets/img/logo-github-2.png'

export default function ProjectCard(props: {
  title: string
  pitch?: string
  description: string
  stack: string[]
  images: any[]
  url: string
  githubRepo: string
}) {
  const { title, pitch, description, stack, images, url, githubRepo } = props
  return (
    <>
      <Card className="w-5/6 md:w-5/12">
        <CardHeader>
          <CardTitle className="flex justify-between items-center gap-2">
            {title}
            <div className="flex gap-2 items-center">
              <a href={url} target="blank">
                <ExternalLinkIcon className="h-6 w-6" />
              </a>
              <a href={githubRepo} target="blank">
                <img className="w-6" src={logoGithub} alt="Github logo" />
              </a>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center my-4">
            <Carousel className="w-9/12">
              <CarouselContent>
                {images.map((image, i) => (
                  <CarouselItem key={i}>
                    <img src={image} alt={title + '-' + i} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex justify-center my-8">
            <Tabs defaultValue="description" className="md:w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="stack">Stack</TabsTrigger>
              </TabsList>
              <TabsContent value="description">
                {pitch ? <p className="text-xs md:text-base italic">{pitch}</p> : ''}
                <p className="text-xs md:text-base mt-4">{description}</p>
              </TabsContent>
              <TabsContent value="stack">
                <div className="flex flex-wrap gap-3 justify-center items-center mt-4">
                  {stack.map((logo, i) => (
                    <img key={i} className="w-6" src={logo} alt={'Logo-stack-' + i} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
