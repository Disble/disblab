import React from "react";
import { graphql, Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { StaticImage } from "gatsby-plugin-image";
import telegramSVG from "../images/telegram-1.svg";
import Img from 'gatsby-image';
import { Navbar, Timeline } from "../components";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menu = [
  {
    title: "Acerca de...",
    link: "/#about",
  },
  {
    title: "Currículum",
    link: "/#resume",
  },
  {
    title: "Portafolio",
    link: "/#portfolio",
  },
  {
    title: "Contacto",
    link: "/#cv",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];
const publications = [
  {
    year: "2020",
    title: "Modelo interactivo de visualización de información utilizando librerías de renderizado 3D orientado a la reducción de dimensiones",
    description: "I am a Full Stack Developer with a passion for building web applications. I have a strong background in front-end development and I am currently learning back-end development. I am currently working as a Full Stack Developer at <a href='https://www.crowdcube.com/' target='_blank' rel='noopener noreferrer'>Crowdcube</a>.",
    authors: "Alejandro Arias",
    link: "http://repositorio.utn.edu.ec/handle/123456789/11523?locale=en",
  },
];


export default function Index({ data: { site, blog, portfolio, disblePoster, timelineExperience, timelineEducation, timelineAwards } }) {
  const cvDisble = "https://drive.google.com/file/d/1PJ1VFHyKp1eVeZ-T3M_RnkmO8b5jzoyT/view?usp=sharing";
  return (
    <>
      <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      <div
        className="bg-stone-100"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-[160px_minmax(900px,_1fr)] gap-4"
        >
          <header
            className="h-screen hidden md:block"
          >
            <nav
              className="bg-white h-full flex flex-col gap-8 pt-8"
            >
              <div className="w-full grid place-items-center">
                <StaticImage alt="UCOoppane" className="w-20 h-20" src="https://www.datocms-assets.com/58484/1637121616-foto-square.png?auto=format&dpr=0.12&w=3880" />
              </div>
              <h2 className="text-xl font-bold text-gray-700 text-center px-2">Alejandro Arias</h2>
              <div
                className="divide-y divide-gray-200 text-gray-600"
              >
                {
                  menu && menu.map((item, index) => (
                    <Link
                      key={`menu-${index}`}
                      className="block py-2 text-center hover:bg-gray-100 active:bg-gray-200"
                      to={item.link}
                    >
                      {item.title}
                    </Link>
                  ))
                }
              </div>
              <div className="flex flex-row gap-2 justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/disble/"
                  target="_blank"
                  className="bg-gray-200 py-1 px-2 text-gray-500 hover:bg-gray-300 active:bg-gray-400 active:text-gray-700"
                >
                  <FontAwesomeIcon className="aspect-square" icon={faLinkedinIn} />
                </a>
                <a
                  href="https://github.com/disble"
                  target="_blank"
                  className="bg-gray-200 py-1 px-2 text-gray-500 hover:bg-gray-300 active:bg-gray-400 active:text-gray-700"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </nav>
          </header>
          <Navbar
            navigation={menu}
            className="block fixed inset-x-0 z-50 md:hidden"
          />
          <main
            className="h-screen md:max-w-[calc(100vw_-_176px)] overflow-auto flex flex-col gap-4"
          >
            <section className="bg-white py-8 px-5 md:px-10" id="about">
              <div className="grid grid-flow-row md:grid-cols-[250px_minmax(0,1fr)] gap-8">
                <Img fluid={disblePoster.nodes[0].fluid} />
                <div>
                  <span className="text-gray-400 text-sm">Ingeniero en Sistemas Computacionales</span>
                  <h2 className="text-5xl font-bold text-gray-700">Alejandro Arias</h2>
                  <div className="flex flex-col gap-4">
                    <p>Soy desarrollador de Software en tecnologías web con conocimientos en JavaScript, React.js, Gatsby.js y también un apasionado en Blockchain y Web3. Me gusta la filosofía de nunca parar de aprender.</p>
                    <div className="w-full flex justify-start">
                      <a href={cvDisble} target="_blank" className="bg-gradient-to-r from-blue-500 to-purple-700 px-5 py-3 text-white text-lg font-bold rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:bg-gradient-to-r focus:from-blue-800 focus:to-purple-900 focus:text-purple-50 focus:ring-offset-2 cursor-pointer flex flex-row gap-2">
                        Descargar CV
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Resume */}
            <section className="bg-white py-8 px-5 md:px-10" id="resume">
              <h2 className="text-3xl font-bold text-gray-700">Currículum</h2>
              <div className="divider"></div>
              <h2 className="text-2xl font-bold text-gray-700 underline decoration-violet-500 mb-6">Experiencia</h2>
              <div>
                <Timeline content={timelineExperience.nodes} />
              </div>
              <h2 className="text-2xl font-bold text-gray-700 underline decoration-violet-500 mb-6 mt-6">Educación</h2>
              <div>
                <Timeline content={timelineEducation.nodes} />
              </div>
            </section>
            {/* Portfolio */}
            <section className="bg-white py-8 px-5 md:px-10 flex flex-col gap-6" id="portfolio">
              <section>
                <h2 className="text-3xl font-bold text-gray-700">Portafolio</h2>
                <div className="divider"></div>
              </section>
              {/* Publications */}
              <section>
                <h2 className="text-2xl font-bold text-gray-700 underline decoration-violet-500 mb-6">Publicaciones</h2>
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Año
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Título
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Autores
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Link
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {publications.map((publication) => (
                              <tr key={publication.title}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">{publication.year}</div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="text-sm text-gray-900">{publication.title}</div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="text-sm font-medium text-gray-900">{publication.authors}</div>
                                </td>
                                <td className="px-6 py-4">
                                  <a href={publication.link} target="_blank" className="text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Projects */}
              <section>
                <h2 className="text-2xl font-bold text-gray-700 underline decoration-violet-500 mb-6">Proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-stretch gap-6">
                  {
                    portfolio && portfolio.nodes.map((project) => (
                      <div
                        onClick={(e) => {
                          console.log({e, project});
                        }}
                        className="relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                        key={project.id}
                      >
                        <Img className="h-full" fluid={project.teaser.fluid} />
                        <div className="absolute group inset-0 hover:bg-white/10 active:bg-white/20">
                          <div className="p-4 h-full hidden group-hover:flex flex-col group-hover:justify-between">
                            <span className="font-bold text-white bg-gradient-to-r from-blue-500 to-purple-700 px-2 py-1 w-fit rounded-md">{project.title}</span>
                            <div className="bottom-1 left-1">
                              { project.technologies?.split(',').map(tech => {
                                return (
                                  <span className="inline-block bg-gray-200 px-2 py-1 text-xs font-semibold mr-2" key={tech}>
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-700">{tech}</span>
                                  </span>
                                )
                              }) }
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </section>
              {/* Honors & Awards */}
              <section>
                <h2 className="text-2xl font-bold text-gray-700 underline decoration-violet-500 mb-6">Honores y premios</h2>
                <Timeline content={timelineAwards.nodes} />
              </section>
            </section>
            {/* Contact */}
            <section className="bg-white py-8 px-5 md:px-10" id="cv">
              <h2 className="text-4xl font-bold text-gray-500 mb-6">Contacto</h2>
              <div className="flex flex-col md:flex-row md:justify-around gap-8">
                {/* card button with shadow and transition */}
                <a
                  href="mailto:disblelab@gmail.com"
                  className="flex flex-col gap-4 items-center w-full shadow px-6 py-4 border-gray-300 border-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 ease-in-out"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                  </svg>
                  <span>disblelab@gmail.com</span>
                </a>
                <a
                  href="https://t.me/disble"
                  target="_blank"
                  className="flex flex-col gap-4 items-center w-full shadow px-6 py-4 border-gray-300 border-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 ease-in-out"
                >
                  <img src={telegramSVG} className="h-8 w-8 text-gray-500" />
                  t.me/disble
                </a>
              </div>
            </section>
            <footer className="bg-white text-gray-600 text-sm min-h-[80px] flex items-center justify-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-700">
                Portafolio hecho con Gastby y Tailwind CSS.
              </span>
            </footer>
          </main>
        </div>
      </div>
    </>
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
    portfolio: allDatoCmsPorfolio(
      sort: { fields: order, order: ASC}
    ) {
      nodes {
        title
        id
        order
        technologies
        feature
        externalLink
        description
        teaser {
          fluid(maxWidth: 300) {
            ...GatsbyDatoCmsFluid
          }
        }
        galeryOfImages {
          fluid(maxHeight: 300) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    },
    disblePoster: allDatoCmsAsset(filter: {basename: {eq: "disble-poster-artwork"}}) {
      nodes {
        format
        author
        filename
        basename
        fluid(maxWidth: 300) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    timelineExperience: allDatoCmsTimeline(
      filter: {timelineCategory: {eq: "Experiencia"}}
      sort: {fields: order, order: ASC}
    ) {
      nodes {
        job
        locale
        dateEnd(formatString: "MM/y")
        dateStart(formatString: "MM/y")
        isCurrentDate
        id
        order
        imageMinicover {
          fluid(maxWidth: 300) {
            ...GatsbyDatoCmsFluid
          }
        }
        timelineCategory
        situation
        descriptionJob {
          value
          blocks
          links
        }
      }
    }
    timelineEducation: allDatoCmsTimeline(
      filter: {timelineCategory: {eq: "Educación"}}
      sort: {fields: order, order: ASC}
    ) {
      nodes {
        job
        locale
        dateEnd(formatString: "MM/y")
        dateStart(formatString: "MM/y")
        isCurrentDate
        id
        order
        imageMinicover {
          fluid(maxWidth: 300) {
            ...GatsbyDatoCmsFluid
          }
        }
        timelineCategory
        situation
        descriptionJob {
          value
          blocks
          links
        }
      }
    }
    timelineAwards: allDatoCmsTimeline(
      filter: {timelineCategory: {eq: "Honores y premios"}}
      sort: {fields: order, order: ASC}
    ) {
      nodes {
        job
        locale
        dateEnd(formatString: "MM/y")
        dateStart(formatString: "MM/y")
        isCurrentDate
        id
        order
        imageMinicover {
          fluid(maxWidth: 300) {
            ...GatsbyDatoCmsFluid
          }
        }
        timelineCategory
        situation
        descriptionJob {
          value
          blocks
          links
        }
      }
    }
  }
`;
