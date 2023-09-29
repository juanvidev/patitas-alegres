import React from 'react'
import { NavLink } from "react-router-dom";
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Patitas alegres</title>
        <meta property="og:title" content="Patitas alegres" />
        <meta property="og:description" content="Medio de ayuda para encontrar animales extraviados" />
        <meta property="og:keywords" content="animales, perros, dogs, cats, gatos" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar">
        <span className="home-logo">Patitas🅰legres🐾</span>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          >
            <a href="#about" className="home-button button-clean button">Nosotros</a>
            <a href='#mission' className="home-button1 button-clean button">
              Misión
            </a>
            <a href='#vision' className="home-button2 button-clean button">
              Visión
            </a>
            <a href='#objectives' className="home-button2 button-clean button">
              Objetivos
            </a>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home-btn-group">
          <div className="home-socials">
            <button className="social button">
              <img alt="image" src="patitas-alegres/icons/twitter.svg" className="home-image" />
            </button>
            <button className="social button">
              <img alt="image" src="patitas-alegres/icons/discord.svg" className="home-image01" />
            </button>
          </div>
          <a href="#objectives" className="button">Comenzar</a>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <button className="button home-button5">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container1">
              <span className="home-logo1">🐾PatitasAlegres</span>
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <span className="home-text">Nosotros</span>
              <span className="home-text01">Misión</span>
              <span className="home-text02">Visión</span>
            </nav>
            {/* <div className="home-container2">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div> */}
          </div>
          {/* <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div> */}
        </div>
      </header>
      <section className="home-hero">
        <div className="home-heading">
          <h1 className="home-header">El chip de rastreo para animales</h1>
          <p className="home-caption">
            Un dispositivo revolucionario que permite brindar
            tranquilidad a los dueños de mascotas, entre otros beneficios más.
          </p>
        </div>
        <div className="home-buttons">
          <a href="#objectives" className="button">Comenzar</a>
          <a href="#about" className="home-learn button-clean button">Conocer más</a>
        </div>
      </section>
      <section className="home-description">
        <div className='home-img-divider'>
          <img src="patitas-alegres/hero-divider.svg" alt="" className='img-divider' />
        </div>
        <div className="home-container3">
          <div className='home-box-description-img'>
            <img src="patitas-alegres/images/team.svg" alt="" />
          </div>
          <div className="home-description01">
            <div className="home-content" id="about">
              <p className="home-paragraph">
                Somos un grupo de estudiantes apasionados por la tecnología y los animales,
                unidos por una visión compartida: mejorar la vida de nuestras mascotas.

              </p>
              <p className="home-paragraph1">
                Con esa inspiración nació 'PatitasAlegres', nuestra idea de negocio enfocada
                en brindar productos y soluciones innovadoras para nuestros amigos de cuatro patas.
                {/* A pesar de nuestra juventud,
                estamos comprometidos con la excelencia y la innovación,
                y cada día trabajamos con la convicción de que incluso las ideas más
                pequeñas pueden generar un impacto positivo en nuestras comunidades.
                Únete a nosotros en esta emocionante aventura y descubre cómo juntos
                podemos hacer sonreír a más patitas. */}
              </p>
            </div>

          </div>
        </div>
      </section>
      <section className="home-cards">
        <div className="home-row">
          <div className="home-card" id="mission">
            <div className="home-avatar" style={{ alignItems: 'center', justifyContent: 'center' }}>
              <img
                alt="image"
                src="patitas-alegres/avatars/default-avatar.svg"
                className="home-avatar3"
              />
            </div>
            <div className="home-main">
              <div className="home-content01">
                <h2 className="home-header01">Misión</h2>
                <p className="home-description02">
                  Proporcionar herramientas y servicios
                  para mascotas de acuerdo a las necesidades de nuestros clientes,
                  brindando un servicio eficiente y de manera segura para sus mascotas.
                </p>
              </div>
              {/* <button className="home-learn1 button">
                <span className="home-text07">Learn more</span>
                <img
                  alt="image"
                  src="/icons/arrow.svg"
                  className="home-image02"
                />
              </button> */}
            </div>
          </div>
          <div className="home-card01" id="vision">
            <div className="home-avatar2">
              <h1 style={{ fontSize: 32 }}>V</h1>
            </div>
            <div className="home-main1">
              <div className="home-content02">
                <h2 className="home-header02">
                  Visión
                </h2>
                <p className="home-description03">
                  Crear una aplicación líder en el mercado de
                  chips de rastreo para animales, que redefina la manera en que
                  los seres humanos se relacionan, cuidan y protegen a sus compañeros peludos.
                </p>
              </div>
              {/* <button className="home-learn2 button">
                <span className="home-text08">Learn more</span>
                <img
                  alt="image"
                  src="/icons/arrow-2.svg"
                  className="home-image03"
                />
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <section className="home-roadmap" id="objectives">
        <div className="home-heading04">
          <h2 className="home-header10">Objetivos</h2>
          <p className="home-header11">
            Hemos establecido objetivos para el desarrollo de nuestra aplicación,
            con el fin de cumplir con las expectativas de nuestros clientes.
          </p>
        </div>
        <div className="home-list">
          <div className="home-step">
            <span className="home-caption12">01</span>
            <div className="home-heading05">
              <h2 className="home-header12">Localización en Tiempo Real</h2>
              <p className="home-header13">
                La aplicación permite a los usuarios rastrear y visualizar la ubicación precisa de los activos asociadas con el chip de rastreo en un mapa interactivo. Esto es especialmente valioso en situaciones en las que la ubicación exacta es crucial, como el seguimiento de nuestros amigos peludos.
              </p>
            </div>
          </div>
          <div className="home-step1">
            <span className="home-caption13">02</span>
            <div className="home-heading06">
              <h2 className="home-header14">Seguridad y prevención de pérdidas</h2>
              <p className="home-header15">
                <span>
                  La aplicación proporciona una capa adicional de seguridad al alertar a los usuarios si un activo se mueve fuera de una zona predefinida o si se produce una situación inusual. Esto es útil para evitar pérdidas y robos, ya que los usuarios pueden recibir notificaciones en tiempo real y tomar medidas inmediatas.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-step2">
            <span className="home-caption14">03</span>
            <div className="home-heading07">
              <h2 className="home-header16">Tranquilidad para familias y cuidadores</h2>
              <p className="home-header17">
                <span>
                  En el caso de mascotas vulnerables, la aplicación con chip de rastreo brinda tranquilidad a los cuidadores al permitirles estar al tanto de la ubicación y el bienestar de sus mascotas en todo momento.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-step3">
            <span className="home-caption15">04</span>
            <div className="home-heading08">
              <h2 className="home-header18">Exploración de datos y patrones</h2>
              <p className="home-header19">
                La aplicación puede recopilar y analizar datos de rastreo a lo largo del tiempo, lo que brinda a los usuarios información valiosa sobre patrones de movimiento, frecuencia y comportamiento.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              {/* <div className="home-benefits">
                <div className="home-item">
                  <img
                    alt="image"
                    src="/icons/people.svg"
                    className="home-image26"
                  />
                  <p className="home-header20">Consectetur adipiscing elit</p>
                </div>
                <div className="home-item1">
                  <img
                    alt="image"
                    src="/icons/paper.svg"
                    className="home-image27"
                  />
                  <p className="home-header21">Consectetur adipiscing elit</p>
                </div>
                <div className="home-item2">
                  <img
                    alt="image"
                    src="/icons/checklist.svg"
                    className="home-image28"
                  />
                  <p className="home-header22">Consectetur adipiscing elit</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="home-join-us">
        <div className="home-content15">
          <div className="home-main4">
            <div className="home-heading09">
              <h2 className="home-header23">Comienza a apoyarnos ahora</h2>
              <p className="home-caption16">
                Apoyanos en este proyecto y se parte de nuestra historia.
              </p>
            </div>
            <button className="home-view5 button">Ver más</button>
          </div>
          <img alt="image" src="patitas-alegres/group%202273.svg" className="home-image29" />
        </div>
      </section>

      <section className="home-get-yours">
        <div className="home-row2">
          <div className="home-column">
            <div className="home-card11">
              <img
                alt="image"
                src="patitas-alegres/dog-card1.svg"
                className="home-image30"
              />
            </div>
          </div>
          <div className="home-column1">
            <div className="home-card12">
              <img
                alt="image"
                src="patitas-alegres/characters/character-10.svg"
                className="home-image31"
              />
            </div>
          </div>
        </div>
        <div className="home-column2">
          <div className="home-card13">
            <div className="home-content21">
              <h2 className="home-header30">Contactanos</h2>
              <p className="home-description10">
                Para mas información puedes escribirnos a &nbsp;
                <span className="home-text12" style={{ fontWeight: 'bold' }}>
                  example@test.com
                </span>
                <br />
                <br />
                O puedes contactarnos a través de WhatsApp
                <br />
                <span className="home-text13" style={{ fontWeight: 'bold' }}>
                  +57 123456789
                </span>
              </p>
            </div>
            <button className="home-button7 button">Más info</button>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-main5">
          <div className="home-branding">
            <div className="home-heading10">
              <h2 className="home-logo2">PatitasAlegres</h2>
              <p className="home-caption17">
                Llevando la confianza a los que no pueden hablar.
              </p>
            </div>
            <div className="home-socials1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-twitter1 social button"
              >
                <img
                  alt="image"
                  src="patitas-alegres/icons/twitter.svg"
                  className="home-image32"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-discord1 social button"
              >
                <img
                  alt="image"
                  src="patitas-alegres/icons/discord.svg"
                  className="home-image33"
                />
              </a>
            </div>
          </div>
          <div className="home-links1">
            <div className="home-list1">
              <h3 className="home-heading11">Site</h3>
              <div className="home-items">
                <button className="home-link02 button-clean button">
                  Nosotros
                </button>
                <button className="home-link03 button-clean button">
                  Misión
                </button>
                <button className="home-link04 button-clean button">
                  Visión
                </button>
                <button className="home-link05 button-clean button">
                  Objetivos
                </button>
              </div>
            </div>
            {/* <div className="home-list2">
              <h3 className="home-heading12">Company</h3>
              <div className="home-items1">
                <button className="home-link06 button-clean button">
                  Team
                </button>
                <button className="home-link07 button-clean button">
                  Press
                </button>
                <button className="home-link08 button-clean button">
                  Terms
                </button>
                <button className="home-link09 button-clean button">
                  Limitations
                </button>
                <button className="home-link10 button-clean button">
                  Licenses
                </button>
              </div>
            </div> */}
          </div>
          <div className="home-socials2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-twitter2 social button"
            >
              <img
                alt="image"
                src="patitas-alegres/icons/twitter.svg"
                className="home-image34"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-discord2 social button"
            >
              <img
                alt="image"
                src="patitas-alegres/icons/discord.svg"
                className="home-image35"
              />
            </a>
          </div>
        </div>
        <span className="home-copyright">
          © 2022 PatitasAlegres. All Rights Reserved.
        </span>
      </footer>
      <div>
        <div className="home-container5">
        </div>
      </div>
    </div>
  )
}

export default Home
