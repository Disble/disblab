import React from "react";
import { graphql } from "gatsby";
import { Container, Header, ProfileImage } from '../components';
import { HelmetDatoCms } from "gatsby-source-datocms";
import reactLogo from '../images/react.svg';
import typesriptLogo from '../images/typescript.svg';
import gatsbyLogo from '../images/gatsby.svg';
import gitLogo from '../images/git-icon.svg';
import tailwindLogo from '../images/tailwind.svg';
import nodeLogo from '../images/nodejs-2.svg';
import electronLogo from '../images/electron-1.svg';
import ucooppaneImg from '../images/ucooppane.png';
import dboxImg from '../images/dbox.png';
import autoreasImg from '../images/autoreas.png';
import cvDisble from '../docs/Alejandro.Arias.CV.pdf';


export default function Index({ data: { site, blog, portfolio } }) {
  return (
    <>
      <Container className="">
        <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
        <header className="z-10">
          <Header />
        </header>
        <main className="z-0 selection:bg-blue-300 selection:text-blue-900">
          <section className="flex flex-col md:flex-row z-10 mx-auto max-w-7xl">
            <div className="flex-none md:flex-1 z-10">
              <h1 className="text-2xl text-gray-700 text-disble">Hola, mi nombre es</h1>
              <h2 className="leading-tight text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-700 !text-[clamp(40px,_5vw,_80px)]">Alejandro Arias</h2>
              <p className="mt-4 text-black text-lg selection:bg-purple-300 selection:text-purple-900">Soy desarrollador {' '}{' '}
                <span className="group hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-gradient-to-r hover:before:from-blue-500 hover:before:to-purple-700 relative inline-block">
                  <span className="relative font-bold text-purple-900 group-hover:text-white">
                    Frontend
                  </span>
                </span> y entusiasta de la Web3.
              </p>
            </div>
            <div className="flex-none md:flex-1 mt-12 flex justify-center z-10">
              <ProfileImage />
            </div>
          </section>
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-gray-500 mb-6">Tecnologías</h2>
            <p className="mb-8">Siempre estoy dispuesto a aprender nuevas tecnologías y metodologías, estas son la que mejor domino actualmente:</p>
            <div className="flex flex-wrap gap-6 justify-evenly lg:justify-start lg:gap-10 items-center lg:ml-10">
              <div className="flex flex-col gap-3 justify-start items-center">
                <img className="h-12" src={reactLogo} alt="reactLogo" />
                <p className="text-sm font-bold text-gray-500">React.js</p>
              </div>
              <div className="flex flex-col gap-3 justify-start items-center">
                <img className="h-12" src={gatsbyLogo} alt="gatsbyLogo" />
                <p className="text-sm font-bold text-gray-500">Gatsby</p>
              </div>
              <div className="flex flex-col gap-3 justify-start items-center">
                <img className="h-12" src={typesriptLogo} alt="typesriptLogo" />
                <p className="text-sm font-bold text-gray-500">TypeScript</p>
              </div>
              <div className="flex flex-col gap-3 justify-start items-center">
                <img className="h-12" src={nodeLogo} alt="nodeLogo" />
                <p className="text-sm font-bold text-gray-500">Node.js</p>
              </div>
              <div className="flex flex-col gap-3 justify-start items-center">
                <img className="h-12" src={electronLogo} alt="electronLogo" />
                <p className="text-sm font-bold text-gray-500">Electron.js</p>
              </div>
              <div className="flex flex-col gap-3 justify-start items-center">
                <img className="h-12" src={gitLogo} alt="gitLogo" />
                <p className="text-sm font-bold text-gray-500">Git</p>
              </div>
              <div className="flex flex-col gap-3 justify-start items-center">
                <img className="h-12 w-14" src={tailwindLogo} alt="tailwindLogo" />
                <p className="text-sm font-bold text-gray-500">Tailwind CSS</p>
              </div>
            </div>
          </section>
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-gray-500 mb-6">Proyectos</h2>
            <p className="mb-8">Usualmente hay algo cocinandose en la cocina; no obstante, estos son los proyectos que más me gustan:</p>
            <div className="flex flex-row flex-wrap gap-6 lg:gap-10 items-center justify-center lg:justify-start lg:ml-10">
              <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-xl duration-300 border-4 border-slate-600 rounded-2xl">
                <img className="w-64 aspect-square object-cover object-left rounded-xl" src={ucooppaneImg} alt="ucooppaneImg" />
                <div className="absolute bottom-0 inset-x-0 h-16 rounded-b-xl bg-white/80 flex flex-col justify-center">
                  <h1 className="text-purple-900 font-bold text-center">UCOOPPANE</h1>
                  <p className="text-purple-900 text-sm text-center font-bold">E-commerce con Woocomerce</p>
                </div>
              </div>
              <a href="https://github.com/Disble/dbox" className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-xl duration-300 border-4 border-slate-600 rounded-2xl">
                <img className="w-64 aspect-square object-cover rounded-xl" src={dboxImg} alt="dboxImg" />
                <div className="absolute bottom-0 inset-x-0 h-16 rounded-b-xl bg-white/80 flex flex-col justify-center">
                  <h1 className="text-purple-900 font-bold text-center">dbox</h1>
                  <p className="text-purple-900 text-sm text-center font-bold">App Desktop con Electron y Vue.js</p>
                </div>
              </a>
              <a href="https://github.com/Disble/automatizar-tareas" className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-xl duration-300 border-4 border-slate-600 rounded-2xl">
                <img className="w-64 aspect-square object-cover object-left rounded-xl" src={autoreasImg} alt="autoreasImg" />
                <div className="absolute bottom-0 inset-x-0 h-16 rounded-b-xl bg-white/80 flex flex-col justify-center">
                  <h1 className="text-purple-900 font-bold text-center">Autoreas</h1>
                  <p className="text-purple-900 text-sm text-center font-bold">App Desktop con Electron</p>
                </div>
              </a>
            </div>
          </section>
          <section className="rounded-2xl mb-20">
            <h2 className="text-4xl font-bold text-gray-500 mb-6">Descarga mi CV</h2>
            <p className="mb-20">Si te ha gustado lo que has visto, puedes saber un poco más de mí descargando mi CV:</p>
            <div className="w-full flex justify-center">
              <a href={cvDisble} target="_blank" className="bg-gradient-to-r from-blue-500 to-purple-700 px-5 py-3 text-white text-lg font-bold rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:bg-gradient-to-r focus:from-blue-800 focus:to-purple-900 focus:text-purple-50 focus:ring-offset-2 cursor-pointer flex flex-row gap-2">
                Quiero descargarlo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </section>
        </main>
      </Container>
      <footer className="bg-gradient-to-r from-blue-500 to-purple-700 text-white text-sm h-20 flex items-center justify-center">
        <span>
          Portafolio hecho con Gastby y Tailwind CSS.
        </span>
      </footer>
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
