import React, { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import { RMRLHtml } from './components/RMRLhtml';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, library } from '@fortawesome/fontawesome-svg-core';
import { faDocker, faGithub, faJs, faLinkedinIn, faNodeJs, faPython, faStripe, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faDatabase, faLock, faPaperPlane, faShieldAlt, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { ProjectCard } from './components/ProjectCard';
import { ExpSkillPaper } from './components/ExpSkillPaper';
import { ReactComponent as PythonLogo } from './images/python.svg';
import { ReactComponent as JSLogo } from './images/javascript.svg';
import { ReactComponent as TSLogo } from './images/typescript-2.svg';
import { ReactComponent as DjangoLogo } from './images/django.svg';
import { ReactComponent as NodeLogo } from './images/nodejs.svg';
import { ReactComponent as ReactLogo } from './images/react-2.svg';
import { ReactComponent as DockerLogo } from './images/docker.svg';
import { ReactComponent as GitLogo } from './images/github-icon-1.svg';
import { ReactComponent as PLogo } from './images/postman.svg';
import { ReactComponent as MysqlLogo } from './images/mysql-6.svg';
import { ReactComponent as NoSqlLogo } from './images/mongodb-icon-1.svg';
import { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';




library.add(faJs, faCircle, faNodeJs, faDatabase, faDocker, faStripe, faPython, faLock, faShieldAlt, faReact)

const styles = {
  auxTop: { margin: '50px 0px 0px 0px' },
  linkAuxTop: { paddingTop: '5px' },
  btnAux: {
    padding: 0,
    border: 'none',
    borderRadius: '9px',
    color: 'inherit',
    marginRight: '40px',
    backgroundColor: 'transparent',
    outline: 'none',
    boxShadow: 'none',
  }
};


const App: React.FunctionComponent = () => {

  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const p1: Array<IconName> = ['js', 'node-js', 'js', 'database', 'database', 'docker', 'stripe', 'database', 'react']
  const p2: Array<IconName> = ['python', 'python', 'database', 'python', 'python', 'python']

  const projects = [
    {
      key: 0,
      icons: p1,
      iconNames: ['TypeScript', 'NodeJS', 'Express', 'MySQL', 'TypeORM', 'Docker', 'Stripe', 'Redis', 'React'],
      mediaLink: 'https://www.youtube.com/embed/2Ufge60nqoc',
      title: 'Shopping Platoform FullStack',
      body: `<span style="font-weight:700">Rest API </span>to serve as the backend for a <span style="font-weight:700">react</span> frontend application for a fully fleshed out online shopping platform with creator (admin), seller (ambassador) and buyers. <span style="font-weight:700">Authentication using JWT </span>and scope-based authorization Creating a <span style="font-weight:700">middleware </span>to check authentication status(DRY methodology).Generating fake data and seeding data using faker.<span style="font-weight:700">Caching with Redis </span>for faster loading of products.Payment processing done by <span style="font-weight:700">Stripe </span> and confirmation email to users using NodeMailer.`,
      href: 'https://github.com/hzbrz/node-ambassador'
    },
    {
      key: 1,
      icons: p2,
      iconNames: ['Django', 'Django-Auth', 'django-db', 'django-rest', 'django-templates', 'django-views'],
      mediaLink: 'https://www.youtube.com/embed/2KP4NQpK3_g',
      title: 'Django Backend Project (school)',
      body: `Created a <span style="font-weight:700">Django </span>application that gives users a mock e-commerce experience all inside a virtual python environment using <span style="font-weight:700">venv </span>for the course midterm. Implemented authentication and authorization using <span style="font-weight:700">Django auth </span>library. Used <span style="font-weight:700">Django database </span>library to create models and <span style="font-weight:700">ORM </span>to use them within views. Learned Django project structure and used third party packages for further functionalities. Created a rest api using <span style="font-weight:700">django rest-framework </span>Tested the API using built in API views from the rest-framework library.`,
      href: 'https://github.com/hzbrz/django-backend-proj-IT409'
    }
  ]

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  const footerCool = () => {
    alert('😁🤙')
  }

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light'
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div style={{ paddingBottom: '20px' }}></div>
        <Container style={{ paddingLeft: '0px' }}>
          <Nav data-aos='fade-down' data-aos-duartion='200'>
            <Nav.Item>
              <Nav.Link href="/" id='namelogo' style={{ color: 'inherit' }}>Hasan</Nav.Link>
            </Nav.Item>
            <div style={{ display: 'flex', width: '60%', alignItems: 'center', justifyContent: 'flex-end' }}>
              <DarkModeToggle
                onChange={() => setIsDarkMode(!isDarkMode)}
                checked={isDarkMode}
                size={50}
              />
            </div>
          </Nav>
          <div style={{ paddingLeft: '15px' }}>
            <Row>
              <Col sm={9}>
                <div className="display-4" style={styles.auxTop} data-aos='fade-down' data-aos-delay='400'>
                  <span>Hi</span>, my name is Hasan,
                </div>
                <div className="display-4" data-aos='fade-down' data-aos-delay='400'>
                  <p>I am a Software Engineer<span></span></p>
                </div>
              </Col>
              <Col sm={3}></Col>
              <Col sm={12} md={8}>
                <div>
                  <p id="personal-quality" className="text-justify" data-aos='fade-down'>
                    I enjoy
                    <span className="personal-quality-bold"> solving </span> complex
                    problems. I provide an
                    <span className="personal-quality-bold"> effective & efficient </span>

                    solution. Nothing brings me more
                    <span className="personal-quality-bold"> excitement </span> and
                    <span className="personal-quality-bold"> motivation </span> than
                    <span className="personal-quality-bold"> building </span>
                    something out of nothing.
                  </p>
                </div>
              </Col>
            </Row>
            <div>
              <Row style={{ overflowX: 'hidden' }}>
                <Col sm={8} data-aos='fade-right'>
                  <Button href={require('./docs/resume.pdf')} target="_blank" className="btn-dark" id='resume'>
                    <p style={styles.linkAuxTop}>Resume</p>
                  </Button>{' '}
                  <Button href="#projects" className="btn-orange">
                    <p style={styles.linkAuxTop}>Projects</p>
                  </Button>
                </Col>
                <Col sm={4} style={{ marginTop: '50px' }} data-aos='fade-left'>
                  <Button href="https://github.com/hzbrz" target="_blank" style={styles.btnAux}>
                    <FontAwesomeIcon className='socials' icon={faGithub} size="2x" />
                  </Button>
                  <Button href="https://www.linkedin.com/in/haszahid" target="_blank" style={styles.btnAux}>
                    <FontAwesomeIcon className='socials' icon={faLinkedinIn} size="2x" />
                  </Button>
                  <Button href="mailto:haszahid10@gmail.com" target="_blank" style={styles.btnAux}>
                    <FontAwesomeIcon className='socials' icon={faPaperPlane} size="2x" />
                  </Button>
                </Col>
              </Row>
            </div>
          </div>

          <div style={{ paddingLeft: '10px' }} data-aos='fade-down' data-aos-offset='200'  data-aos-once='true'>
            <h2 id='projects' style={{ textAlign: 'center', marginTop: '150px', fontWeight: 900 }}>Projects</h2>
            <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
              {
                projects.map(project => {
                  return (
                    <ProjectCard
                      key={project.key}
                      icons={project.icons}
                      iconNames={project.iconNames}
                      circle='circle'
                      mediaLink={project.mediaLink}
                      title={project.title}
                      body={project.body}
                      href={project.href}
                    />
                  )
                })
              }
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Row style={{ overflowX: 'hidden' }}>
              <Col sm={6}>
                <div data-aos='fade-right' data-aos-offset='260'>
                  <h2 className='h2Title'>Experience</h2>
                  <ExpSkillPaper
                    paperWidth={500}
                    title={'Foobee Inc.'}
                    position={'Software Engineer'}
                    iconNames={['TypeScript', 'NodeJS', 'Express', 'MySQL', 'TypeORM', 'Docker', 'Stripe', 'Redis']}
                    paperType='elevation'
                  >
                    <RMRLHtml body={
                      `
                    Used <span style="font-weight:700">React</span>-native to cut the work for frontend engineers <span style="font-weight:700">by half </span>and create a cross platform experience. <span style="font-weight:700">Created reusable components </span> for better project/code architecture . Implemented location based matching using firebase cloud functions from GCP. Used the <span style="font-weight:700">NoSQL </span>firebase realtime db to manage user profiles and used firebase storage to store additional user information. Coordinated software system installation and monitor libraries being used for security and standardized performance.
                    `
                    } sliceEnd={140} />
                  </ExpSkillPaper>
                  <ExpSkillPaper
                    paperWidth={500}
                    title={'ISSI Global Software'}
                    position={'Intern Software Developer'}
                    iconNames={['JavaScript', 'JQuery']}
                    paperType='elevation'
                  >
                    <RMRLHtml body={
                      `
                    Created a calendar program to manage tasks.  <span style="font-weight:700">Boosted productivity of the interns by 20%. </span>Wrote functional and integration tests for components and small systems. Modified existing software to correct errors and upgrade to newer software.
                    `
                    } sliceEnd={140} />
                  </ExpSkillPaper>
                </div>
                <h2 style={{ marginTop: '40px', textAlign: 'center', fontWeight: 900 }}>Education</h2>
                <div style={{ marginBottom: '100px' }} data-aos='fade-right' data-aos-offset='130'>
                  <ExpSkillPaper
                    paperWidth={500}
                    title={'George Mason University'}
                    position={'Bachelor of Science (B.S.) Information Technology'}
                    iconNames={null}
                    paperType='outlined'>
                    <RMRLHtml body={
                      `
                        <span style="font-weight:700">Relevant Coursework: </span>Data Structures and Algorithms, Django Web Programming, Database Programming (SQL & PL/SQL), Data Communications and Network Principles, Application Development in Cloud, Operating System Fundamentals, Project Management(Agile methodologies)
                      `
                    } sliceEnd={140} />
                  </ExpSkillPaper>
                </div>
              </Col>
              <Col sm={6} data-aos='fade-left' data-aos-offset='270'>
                <h2 className='h2Title'>Skills</h2>
                <Row>
                  <Col className="svgLogoStyles" sm={4}><PythonLogo height={100} width={100} /></Col>
                  <Col className="svgLogoStyles" sm={4}><JSLogo height={100} width={100} /></Col>
                  <Col className="svgLogoStyles" sm={4}><TSLogo height={100} width={100} /></Col>
                </Row>
                <Row>
                  <Col className="svgLogoStyles" sm={4}><DjangoLogo height={100} width={100} /></Col>
                  <Col className="svgLogoStyles" sm={4}><NodeLogo height={100} width={100} /></Col>
                  <Col className="svgLogoStyles" sm={4}><ReactLogo height={100} width={100} /></Col>
                </Row>
                <Row>
                  <Col className="svgLogoStyles" sm={4}><MysqlLogo height={100} width={100} /></Col>
                  <Col className="svgLogoStyles" sm={4}><NoSqlLogo height={100} width={100} /></Col>
                  <Col className="svgLogoStyles" sm={4}><DockerLogo height={100} width={100} /></Col>
                </Row>
                <Row>
                  <Col sm={2}></Col>
                  <Col className="svgLogoStyles" sm={4}><GitLogo height={100} width={100} /></Col>
                  <Col className="svgLogoStyles" sm={4}><PLogo height={120} width={120} style={{ marginTop: '-10px' }} /></Col>
                  <Col sm={2}></Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
        <footer>
          <Row>
            <Col xs sm="4">
              <p onClick={footerCool} id="footerP">Made with ❤️ by Hasan Zahid</p>
            </Col>
            <Col xs sm="8">
              <div style={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                <a href="https://github.com/hzbrz" target="_blank" className='footerLink'>Github</a>
                <a href="https://www.linkedin.com/in/haszahid" target="_blank" className='footerLink'>LinkedIn</a>
                <a href="mailto:haszahid10@gmail.com" target="_blank" className='footerLink'>Email</a>
                <Button id="footerTop" onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }}>
                  <FontAwesomeIcon icon={faArrowCircleUp} style={{ color: '#E1DBD7', fontSize: '30px', padding: '1px' }} />
                </Button>
              </div>
            </Col>
          </Row>
        </footer>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
