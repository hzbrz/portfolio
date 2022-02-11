import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, library } from '@fortawesome/fontawesome-svg-core';
import { faDocker, faGithub, faJs, faLinkedinIn, faNodeJs, faPython, faStripe } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faDatabase, faLock, faPaperPlane, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { ProjectCard } from './components/ProjectCard';
import { ExpSkillPaper } from './components/ExpSkillPaper';
import { ReactComponent as PythonLogo } from './images/python.svg';
import { ReactComponent as JSLogo } from './images/javascript.svg';
import { ReactComponent as TSLogo } from './images/typescript-2.svg';
import { ReactComponent as DjangoLogo } from './images/django.svg';
import { ReactComponent as NodeLogo } from './images/nodejs.svg';
import { ReactComponent as ReactLogo } from './images/react-2.svg';
import { ReactComponent as DockerLogo } from './images/docker.svg';
import { ReactComponent as GitLogo } from './images/igthub-icon-1.svg';
import { ReactComponent as MysqlLogo } from './images/mysql-6.svg';
import { ReactComponent as NoSqlLogo } from './images/mongodb-icon-1.svg';




library.add(faJs, faCircle, faNodeJs, faDatabase, faDocker, faStripe, faPython, faLock, faShieldAlt)


const styles = {
  auxTop: { margin: '50px 0px 0px 0px' },
  linkAuxTop: { paddingTop: '5px' },
  btnAux: {
    padding: 0,
    border: 'none',
    borderRadius: '9px',
    color: 'white',
    marginRight: '40px',
    backgroundColor: 'transparent',
    outline: 'none',
    boxShadow: 'none'
  },
};


const App: React.FunctionComponent = () => {

  const p1: Array<IconName> = ['js', 'node-js', 'js', 'database', 'database', 'docker', 'stripe', 'database']
  const p2: Array<IconName> = ['python', 'python', 'database', 'python', 'python', 'python']
  // const p3: Array<IconName> = ['js', 'node-js', 'js', 'database', 'database', 'docker', 'stripe', 'database']
  // const p4: Array<IconName> = ['js', 'node-js', 'js', 'database', 'database', 'docker', 'stripe', 'database']
  
  const projects = [
    {
      key: 0,
      icons: p1,
      iconNames: ['TypeScript', 'NodeJS', 'Express', 'MySQL', 'TypeORM', 'Docker', 'Stripe', 'Redis'],
      mediaLink: 'https://www.youtube.com/embed/uHKfrz65KSU',
      title: 'Shopping Platoform FullStack',
      body: "Rest API to serve as the backend for a react frontend application for a fully fleshed out online shopping platform with creator (admin), seller (ambassador) and buyers. Authentication using JWT and scope-based authorization Creating a middleware to check authentication status(DRY methodology).Generating fake data and seeding data using faker.Caching with Redis for faster loading of products.Payment processing done by Stripe and confirmation email to users using NodeMailer.",
      href: 'https://github.com/hzbrz/node-ambassador'
    },
    {
      key: 1,
      icons: p2,
      iconNames: ['Django', 'Django-Auth', 'django-db', 'django-rest', 'django-templates', 'django-views'],
      mediaLink: 'https://www.youtube.com/embed/2KP4NQpK3_g',
      title: 'Django Backend Project (school)',
      body: "Created a Django application that gives users a mock e-commerce experience all inside a virtual python environment using venv for the course midterm. Implemented authentication and authorization using Django auth library. Used Django database library to create models and ORM to use them within views. Learned Django project structure and used third party packages for further functionalities. Created a rest api using django rest-framework Tested the API using built in API views from the rest-framework library.",
      href: 'https://github.com/hzbrz/django-backend-proj-IT409'
    },
    // {
    //   key: 2, 
    //   icons: p3,
    //   iconNames: ['TypeScript', 'NodeJS', 'Express', 'MySQL', 'TypeORM', 'Docker', 'Stripe', 'Redis'],
    //   mediaLink: 'https://www.youtube.com/embed/2KP4NQpK3_g',
    //   title: 'Shopping Platoform FullStack',
    //   body: 'JS Project to show off my fullstck engineer skills' 
    // },
    // {
    //   key: 3, 
    //   icons: p4,
    //   iconNames: ['TypeScript', 'NodeJS', 'Express', 'MySQL', 'TypeORM', 'Docker', 'Stripe', 'Redis'],
    //   mediaLink: 'https://www.youtube.com/embed/2KP4NQpK3_g',
    //   title: 'Shopping Platoform FullStack',
    //   body: 'JS Project to show off my fullstck engineer skills' 
    // }
  ]

  return (
    <div>
      <Container style={{ paddingLeft: '0px' }}>
        <Nav
          style={{ marginTop: '20px' }}
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home" id='namelogo'>Hasan</Nav.Link>
          </Nav.Item>
        </Nav>
        <div style={{ paddingLeft: '15px' }}>
          <div className="display-4" style={styles.auxTop}>
            <span className="text-dark-blue">Hi</span>, my name is Hasan,
          </div>
          <div className="display-4">
            <p>I am a Software Engineer<span></span></p>
          </div>
          <div>
            <p id="personal-quality" className="text-justify">
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
          <div>
            <Row>
              <Col sm={9}>
                <Button href="/resume" target="_blank" className="btn-dark" id='resume'>
                  <p style={styles.linkAuxTop}>Resume</p>
                </Button>{' '}
                <Button href="#projects" className="btn-orange">
                  <p style={styles.linkAuxTop}>Projects</p>
                </Button>
              </Col>
              <Col sm={3} style={{ marginTop: '50px' }}>
                <Button href="https://github.com/hzbrz" target="_blank" style={styles.btnAux}>
                  <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} size="2x" />
                </Button>
                <Button href="https://www.linkedin.com/in/haszahid" target="_blank" style={styles.btnAux}>
                  <FontAwesomeIcon icon={faLinkedinIn} style={{ color: 'black' }} size="2x" />
                </Button>
                <Button href="mailto:haszahid10@gmail.com" target="_blank" style={styles.btnAux}>
                  <FontAwesomeIcon icon={faPaperPlane} style={{ color: 'black' }} size="2x" />
                </Button>
              </Col>
            </Row>
          </div>
        </div>

        <div>
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
          <Row>
            <Col sm={6}>
              <h2 className='h2Title'>Experience</h2>
              <div>
                <ExpSkillPaper
                  paperWidth={500}
                  paperHeight={400}
                  title={'Foobee Inc.'}
                  position={'Software Engineer'}
                  iconNames={['TypeScript', 'NodeJS', 'Express', 'MySQL', 'TypeORM', 'Docker', 'Stripe', 'Redis']}
                  body={"Used React-native to cut the work for frontend engineers by half and create a cross platform experience. Created reusable components for better project/code architecture . Implemented location based matching using firebase cloud functions from GCP. Used the NoSQL firebase realtime db to manage user profiles and used firebase storage to store additional user information. Coordinated software system installation and monitor libraries being used for security and standardized performance."}
                  paperType='elevation'
                />
                <ExpSkillPaper
                  paperWidth={500}
                  paperHeight={400}
                  title={'ISSI Global Software'}
                  position={'Intern Software Developer'}
                  iconNames={['JavaScript', 'JQuery']}
                  body={"Created a calendar program to manage tasks. Boosted productivity of the interns by 20%. Wrote functional and integration tests for components and small systems. Modified existing software to correct errors and upgrade to newer software."}
                  paperType='elevation'
                />
              </div>
              <h2 style={{ marginTop: '40px', textAlign: 'center', fontWeight: 900 }}>Education</h2>
              <div>
                <ExpSkillPaper
                  paperWidth={500}
                  paperHeight={400}
                  title={'George Mason University'}
                  position={'Bachelor of Science (B.S.) Information Technology'}
                  iconNames={null}
                  body={"Relevant Coursework: Data Structures and Algorithms, Django Web Programming, Database Programming (SQL & PL/SQL), Data Communications and Network Principles, Application Development in Cloud, Operating System Fundamentals, Project Management(Agile methodologies)"}
                  paperType='outlined'
                />
              </div>
            </Col>
            <Col sm={6}>
              <h2 className='h2Title'>Skills</h2>
              <Row>
                <Col className="svgLogoStyles" sm={4}><PythonLogo height={100} width={100}/></Col>
                <Col className="svgLogoStyles"  sm={4}><JSLogo height={100} width={100}/></Col>
                <Col className="svgLogoStyles"  sm={4}><TSLogo height={100} width={100}/></Col>
              </Row>
              <Row>
                <Col className="svgLogoStyles" sm={4}><DjangoLogo height={100} width={100}/></Col>
                <Col className="svgLogoStyles"  sm={4}><NodeLogo height={100} width={100}/></Col>
                <Col className="svgLogoStyles"  sm={4}><ReactLogo height={100} width={100}/></Col>
              </Row>
              <Row>
                <Col className="svgLogoStyles" sm={4}><MysqlLogo height={100} width={100}/></Col>
                <Col className="svgLogoStyles"  sm={4}><NoSqlLogo height={100} width={100}/></Col>
                <Col className="svgLogoStyles"  sm={4}><DockerLogo height={100} width={100}/></Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default App;
