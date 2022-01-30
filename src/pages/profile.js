import React from "react";
import { graphql } from "gatsby";
import { Container, Header, ProfileImage } from '../components';
import { HelmetDatoCms } from "gatsby-source-datocms";
import { PaperClipIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5, faCcStripe, faJs, faReact, faGit, faPython, faDocker, faLinux } from '@fortawesome/free-brands-svg-icons';


export default function Index({ data: { site, blog } }) {
  return (
    <Container>
      <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      <header className="z-10">
        <Header />
      </header>
      <main className="z-0">
        <section className="flex flex-col md:flex-row z-10">
          <div className="flex-none md:flex-1 z-10">
            <h1 className="text-2xl font-mono text-black text-disble">Mi nombre es</h1>
            <h2 className="leading-tight text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-700">Alejandro Arias</h2>
            <p className="mt-4 text-black">Soy desarrollador <span className="underline decoration-purple-900 decoration-2 decoration-wavy">Frontend</span> y entusiasta de la web3.</p>
          </div>
          <div className="flex-none md:flex-1 mt-12 flex justify-center z-10">
            <ProfileImage />
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl text-black text-disble my-6">Mis herramientas y cosas que puedo hacer</h2>
          <div className="grid grid-cols-6 grid-flow-row gap-4">
            <div className="flex content-center items-center flex-col">
              <FontAwesomeIcon icon={faHtml5} size="3x" className="flex-shrink-0 text-purple-400" />
              HTML5
            </div>
            <div className="flex content-center items-center flex-col">
              <FontAwesomeIcon icon={faCcStripe} size="3x" className="flex-shrink-0 text-purple-400" />
              CSS3
            </div>
            <div className="flex content-center items-center flex-col">
              <FontAwesomeIcon icon={faJs} size="3x" className="flex-shrink-0 text-purple-400" />
              JavaScript
            </div>
            <div className="flex content-center items-center flex-col">
              <FontAwesomeIcon icon={faReact} size="3x" className="flex-shrink-0 text-purple-400" />
              React
            </div>
            <div className="flex content-center items-center flex-col">
              <FontAwesomeIcon icon={faGit} size="3x" className="flex-shrink-0 text-purple-400" />
              Git
            </div>
            <div className="flex content-center items-center flex-col">
              <FontAwesomeIcon icon={faGithub} size="3x" className="flex-shrink-0 text-purple-400" />
              Github
            </div>
            <div className="flex content-center items-center flex-col">
              <FontAwesomeIcon icon={faPython} size="3x" className="flex-shrink-0 text-purple-400" />
              Python
            </div>
            <div className="flex content-center items-center flex-col">
              <FontAwesomeIcon icon={faGithub} size="3x" className="flex-shrink-0 text-purple-400" />
              React Native
            </div>
            <div className="flex content-center items-center flex-col">
              <FontAwesomeIcon icon={faDocker} size="3x" className="flex-shrink-0 text-purple-400" />
              Docker
            </div>
            <div className="flex content-center items-center flex-col">
              <FontAwesomeIcon icon={faGithub} size="3x" className="flex-shrink-0 text-purple-400" />
              Svelte
            </div>
            <div className="flex content-center items-center flex-col">
              <FontAwesomeIcon icon={faGithub} size="3x" className="flex-shrink-0 text-purple-400" />
              Electron
            </div>
            <div className="flex content-center items-center flex-col">
              <FontAwesomeIcon icon={faLinux} size="3x" className="flex-shrink-0 text-purple-400" />
              Línea de comandos
            </div>
          </div>
        </section>
        <section>
          <div class="text-5xl font-extrabold">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-[#243c5a]">
              Información personal
            </span>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Titulo</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Ingeniero en Sistemas Computacionales.</p>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Prácticas</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Prácticas en UCCOPANE.</p>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Prácticas</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Vinculación con la comunidad en GREENETICS SOLUCIONES S.A.</p>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Estudiante de Platzi</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Con 88 cursos completados.</p>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Concurso</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Ganador del 1er Concurso de progración de la UTN, en la categoría web y móvil.</p>
          </div>
        </section>
        <section>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Proyectos</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Proyectos personales.</p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Fundador de LAAREN</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Grupo pequeño de desarrollo de Software que existió desde 2018 a 2019.</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Autoreas</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Aplicación de escritorio hecha en Electron para gestionar las series que veo.</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Modelo interactivo de visualización de información utilizando librerías de renderizado 3D orientado a la reducción de dimensiones.</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Trabajo de tesis.</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$120,000</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">About</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                    qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                    pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Download
                          </a>
                        </div>
                      </li>
                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span className="ml-2 flex-1 w-0 truncate">coverletter_back_end_developer.pdf</span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Download
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}

export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsBlog {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    portfolio: allDatoCmsPorfolio {
      nodes {
        title
        id
        feature
        externalLink
        description
        teaser {
          small: gatsbyImageData(width: 760)
        }
      }
    }
  }
`;
