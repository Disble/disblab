import React from "react";
import { graphql, Link } from "gatsby";
import { Container, Header, Navbar, ProfileImage } from '../components';
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
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Img from 'gatsby-image';


export default function Index({ data: { site, blog, portfolio, disblePoster } }) {
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
              <h2 className="text-2xl font-bold text-gray-700 text-center">Alejandro Arias</h2>
              <ul
                className="divide-y divide-gray-200 text-gray-600"
              >
                <li
                  className="py-2 text-center hover:bg-gray-100 active:bg-gray-200 border-r-2 border-violet-500"
                >
                  <a href="#about">About Me</a>
                  <AnchorLink
                    to="/#about"
                    className="block w-full h-full"
                  />
                </li>
                <li
                  className="py-2 text-center hover:bg-gray-100 active:bg-gray-200 border-r-2 border-transparent"
                >
                  {/* <a href="#resume">Resume</a> */}
                  <AnchorLink
                    to="/#resume"
                    title="Resume"
                    className="block w-full h-full"
                  />
                </li>
                <li
                  className="py-2 text-center hover:bg-gray-100 active:bg-gray-200 border-r-2 border-transparent"
                >
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li
                  className="py-2 text-center hover:bg-gray-100 active:bg-gray-200 border-r-2 border-transparent"
                >
                  <Link to="/blog">Blog</Link>
                </li>
                <li
                  className="py-2 text-center hover:bg-gray-100 active:bg-gray-200 border-r-2 border-transparent"
                >
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </header>
          <main
            className="h-screen md:max-w-[calc(100vw_-_176px)] overflow-auto flex flex-col gap-4"
          >
            <section className="bg-white py-8 px-10">
              <div className="grid grid-flow-row md:grid-cols-[250px_minmax(0,1fr)] gap-8">
                <Img fluid={disblePoster.nodes[0].fluid} />
                <div>
                  <span className="text-gray-400 text-sm">Ingeniero en Sistemas Computacionales</span>
                  <h2 className="text-5xl font-bold text-gray-700">Alejandro Arias</h2>
                  <p>Soy desarrollador de Software en tecnologías web con conocimientos en JavaScript, React.js, Gatsby.js y también un apasionado en Blockchain y Web3. Me gusta la filosofía de nunca parar de aprender.</p>
                </div>
              </div>
            </section>
            <section className="bg-white py-8 px-10" id="resume">
              <h2 className="text-3xl font-bold text-gray-700">Resume</h2>
              <div className="divider"></div>
            </section>
            <section className="bg-white py-8 px-10">
              <h2 className="text-3xl font-bold text-gray-700">Portfolio</h2>
              <div className="divider"></div>
              <p className="mb-8">Usualmente hay algo cocinandose en la cocina; no obstante, estos son los proyectos que más me gustan:</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias voluptate maiores ducimus quas iusto illum provident omnis praesentium velit eius accusamus, illo doloribus labore suscipit expedita quam necessitatibus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti dolor sunt odio error, quaerat eaque nihil officia veritatis perferendis perspiciatis, animi nisi, culpa magnam. Quae provident minus quia libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa eveniet ratione itaque nam numquam? Laudantium est doloribus vitae ea expedita, quam at maiores saepe, quo rerum, praesentium hic atque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem a est, nulla accusantium eos soluta ut voluptatibus saepe rerum corrupti corporis cupiditate rem voluptates molestias possimus vel error quod iure?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias voluptate maiores ducimus quas iusto illum provident omnis praesentium velit eius accusamus, illo doloribus labore suscipit expedita quam necessitatibus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti dolor sunt odio error, quaerat eaque nihil officia veritatis perferendis perspiciatis, animi nisi, culpa magnam. Quae provident minus quia libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa eveniet ratione itaque nam numquam? Laudantium est doloribus vitae ea expedita, quam at maiores saepe, quo rerum, praesentium hic atque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem a est, nulla accusantium eos soluta ut voluptatibus saepe rerum corrupti corporis cupiditate rem voluptates molestias possimus vel error quod iure?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias voluptate maiores ducimus quas iusto illum provident omnis praesentium velit eius accusamus, illo doloribus labore suscipit expedita quam necessitatibus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti dolor sunt odio error, quaerat eaque nihil officia veritatis perferendis perspiciatis, animi nisi, culpa magnam. Quae provident minus quia libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa eveniet ratione itaque nam numquam? Laudantium est doloribus vitae ea expedita, quam at maiores saepe, quo rerum, praesentium hic atque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem a est, nulla accusantium eos soluta ut voluptatibus saepe rerum corrupti corporis cupiditate rem voluptates molestias possimus vel error quod iure?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias voluptate maiores ducimus quas iusto illum provident omnis praesentium velit eius accusamus, illo doloribus labore suscipit expedita quam necessitatibus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti dolor sunt odio error, quaerat eaque nihil officia veritatis perferendis perspiciatis, animi nisi, culpa magnam. Quae provident minus quia libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa eveniet ratione itaque nam numquam? Laudantium est doloribus vitae ea expedita, quam at maiores saepe, quo rerum, praesentium hic atque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem a est, nulla accusantium eos soluta ut voluptatibus saepe rerum corrupti corporis cupiditate rem voluptates molestias possimus vel error quod iure?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias voluptate maiores ducimus quas iusto illum provident omnis praesentium velit eius accusamus, illo doloribus labore suscipit expedita quam necessitatibus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti dolor sunt odio error, quaerat eaque nihil officia veritatis perferendis perspiciatis, animi nisi, culpa magnam. Quae provident minus quia libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa eveniet ratione itaque nam numquam? Laudantium est doloribus vitae ea expedita, quam at maiores saepe, quo rerum, praesentium hic atque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem a est, nulla accusantium eos soluta ut voluptatibus saepe rerum corrupti corporis cupiditate rem voluptates molestias possimus vel error quod iure?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias voluptate maiores ducimus quas iusto illum provident omnis praesentium velit eius accusamus, illo doloribus labore suscipit expedita quam necessitatibus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti dolor sunt odio error, quaerat eaque nihil officia veritatis perferendis perspiciatis, animi nisi, culpa magnam. Quae provident minus quia libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa eveniet ratione itaque nam numquam? Laudantium est doloribus vitae ea expedita, quam at maiores saepe, quo rerum, praesentium hic atque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem a est, nulla accusantium eos soluta ut voluptatibus saepe rerum corrupti corporis cupiditate rem voluptates molestias possimus vel error quod iure?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias voluptate maiores ducimus quas iusto illum provident omnis praesentium velit eius accusamus, illo doloribus labore suscipit expedita quam necessitatibus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti dolor sunt odio error, quaerat eaque nihil officia veritatis perferendis perspiciatis, animi nisi, culpa magnam. Quae provident minus quia libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa eveniet ratione itaque nam numquam? Laudantium est doloribus vitae ea expedita, quam at maiores saepe, quo rerum, praesentium hic atque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem a est, nulla accusantium eos soluta ut voluptatibus saepe rerum corrupti corporis cupiditate rem voluptates molestias possimus vel error quod iure?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias voluptate maiores ducimus quas iusto illum provident omnis praesentium velit eius accusamus, illo doloribus labore suscipit expedita quam necessitatibus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti dolor sunt odio error, quaerat eaque nihil officia veritatis perferendis perspiciatis, animi nisi, culpa magnam. Quae provident minus quia libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa eveniet ratione itaque nam numquam? Laudantium est doloribus vitae ea expedita, quam at maiores saepe, quo rerum, praesentium hic atque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem a est, nulla accusantium eos soluta ut voluptatibus saepe rerum corrupti corporis cupiditate rem voluptates molestias possimus vel error quod iure?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias voluptate maiores ducimus quas iusto illum provident omnis praesentium velit eius accusamus, illo doloribus labore suscipit expedita quam necessitatibus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti dolor sunt odio error, quaerat eaque nihil officia veritatis perferendis perspiciatis, animi nisi, culpa magnam. Quae provident minus quia libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa eveniet ratione itaque nam numquam? Laudantium est doloribus vitae ea expedita, quam at maiores saepe, quo rerum, praesentium hic atque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem a est, nulla accusantium eos soluta ut voluptatibus saepe rerum corrupti corporis cupiditate rem voluptates molestias possimus vel error quod iure?</p>
            </section>
            <section className="bg-white py-8 px-10">
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
            <footer className="bg-gradient-to-r from-blue-500 to-purple-700 text-white text-sm min-h-[80px] flex items-center justify-center">
              <span>
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
  }
`;
