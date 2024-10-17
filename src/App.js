import './App.css';
import profilepic from './asset/shri.png'
import argoCert from './asset/gitOpsArgoCD.png'
import safeCert from './asset/safe.png'
import javaCert from './asset/OracleJava.png'
import k8Hero from './asset/Cloud_Hero.png'
function App() {
  return (
    <div className="w3-light-grey">
      <div className="w3-content w3-margin-top" style={{ maxWidth: '1870px' }}>
        <div className="w3-row-padding">
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4w3-light-grey">
              <div className="w3-sand">
                <div className="w3-sand w3-display-container">
                  <img className="w3-circle" src={profilepic} style={{ width: '70%', display: 'block', marginLeft: 'auto', marginRight: 'auto', border: '5px solid #F9E79F' }} alt="Avatar" />
                </div>
                <div className="w3-large w3-center w3-text-black">
                  <h2>Shri Hari Haran B A</h2>
                </div>
              </div>
              <div className="w3-container">
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-brown"></i>Java Full Stack Engineer</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-deep-orange"></i>Chennai, Tamil Nadu, India</p>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-indigo"></i>shrihariharanba@live.com</p>
                <p><i className="fa fa-tty fa-fw w3-margin-right w3-large w3-text-teal"></i>+91 9994734446</p>
                <hr style={{ height: '1px', backgroundColor: '#ccc' }} />
                <p className="w3-large w3-text-teal"><b><i className="fa fa-certificate fa-fw w3-large w3-text-amber w3-spin"></i>Certifications Earned</b></p>
                
                <div> 
                  {/* <img src={javaCert} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%'}}/> */}
                  <img src={javaCert} style={{paddingLeft: '5%'}}/>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <a href='https://www.credly.com/badges/a18f91cd-099c-42c4-b024-742d7d857755/public_url'><img src={safeCert} /></a>
                </div>
                <div>
                  <a href='https://www.credly.com/badges/46b03b64-899c-410c-a863-980535a51d46/public_url'><img src={argoCert} style={{paddingLeft: '5%'}}/></a>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <a href='https://www.cloudskillsboost.google/public_profiles/1efc86bd-906d-49b4-bb27-22537dc46381/badges/3089675?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'><img src={k8Hero} style={{paddingBottom: '5%'}}/></a>
                </div>
                <hr style={{ height: '1px', backgroundColor: '#ccc' }} />
                <p className="w3-large w3-text-indigo"><b><i className="fa fa-gear fa-fw w3-large w3-text-red w3-spin"></i>Technical Skills</b></p>
                <div>
                  <table className='w3-table w3-bordered'>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Programing Languages</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Java 17, Golang 1.17, SQL.</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Web Technologies</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>HTML, JavaScript.</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Frameworks</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Sprint Boot 3.x, Spring 6.x, Hibernate 6.x, Apache Camel, JSF, Vaadin.</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>MEARN Stack</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Angular 5.x, React 18.x, Node 20.x, Express and Mongo DB.</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Web Application servers</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>JBoss 7.x, Tomcat 7.x/8.x, Jetty 8.x, Tomee 7.</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>RDBMS</td><td style={{paddingLeft: '10px', fontSize: '13px',color:'darkblue',fontWeight: 'bold', textAlign: 'left', verticalAlign: 'top'}}>Informix DB, SQL Server 2012, MySql 5.6.</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Messaging System</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Kafka, NATS 2.x. Kinesis Service, Event Hub Service.</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>No SQL</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>MemSQL, Redis, Cassandra, Scylla Cloud.</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Development Tools (IDE’s)</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>IntelliJ, VS Code, Eclipse (STS), GoLand, WebStrom.</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Version Control</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>GIT (GitLab, Git Hub, Bitbucket, Stash).</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Build Tool</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Make, Maven.</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Cloud Platform</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>AWS, AZURE.</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Orchestration Tool</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Docker, Kubernetes 1.20.</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Storage</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>AWS S3, AZURE Storage, Cloudian S3.</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>CI-CD Tool</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Argo CICD, GitLab, Bitbucket, Bamboo, Jenkins, Looper.</td></tr>
                    <tr><td style={{width: '45%', color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Platforms</td><td style={{paddingLeft: '10px',color:'darkblue',fontWeight: 'bold', fontSize: '13px', textAlign: 'left', verticalAlign: 'top'}}>Mac / Windows / Linux.</td></tr>
                  </table>
                </div>
                <br/>
                <hr style={{ height: '1px', backgroundColor: '#ccc' }} />
                <p className="w3-large w3-text-amber"><b><i className="fa fa-globe fa-fw w3-spin w3-text-indigo"></i>Languages</b></p>
                <div>
                <span className='w3-margin-left'> </span>
                  <span className="w3-tag w3-padding w3-round-xxlarge w3-red w3-center w3-small">English</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span className="w3-tag w3-padding w3-round-xxlarge w3-red w3-center w3-small">Tamil</span>
                </div>
                <br />
              </div>
            </div
            ><br/>
          </div>
          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-id-badge fa-fw w3-margin-right w3-xxlarge w3-text-indigo" />
                Profile Summary
              </h2>
              <ul>
                <li>
                  <p>11+ years of IT professional experience with JAVA/JEE Full Stack project development.</p>
                </li>
                <li>
                  <p>Experience in Telecommunications, IoT, Retail & Life science – Enterprise Management Domain.</p>
                </li>
                <li>
                  <p>Strong communication skill with ability of grasping new technical concepts quickly and utilizing them in efficient manner.</p>
                </li>
                <li>
                  <p>I am an individual contributor and having good mentorship qualities.</p>
                </li>
                <li>
                  <p>Good in Microservices Performance Analysis and Product Architecture Design.</p>
                </li>
                
              </ul>
            </div>
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-code fa-fw w3-margin-right w3-xxlarge w3-text-black" />
                Core Competencies
              </h2>
              <ul>
                <li>
                <p>Strong programming skills using Java 17, Golang 1.17, React UI, Spring, Hibernate.</p>
                </li>
                <li>
                <p>Hands on experience in 12 Factor Application development using Spring Boot Microservices and experience in developing streaming microservices using Golang and NATS.</p>
                </li>
                <li>
                <p>Used Decorator Pattern in resource layer to convert request to domain and domain to response.</p>
                </li>
                <li>
                <p>R & D on fronting Apache server connecting JBoss server with AJP protocol.</p>
                </li>
                <li>
                <p>Improved performance using Go Routines to handle more than 30K beacons data concurrently.</p>
                </li>
                <li>
                <p>Using Alexa, AWS Lambda created a POC on emergency voice alarm solution for fleet management in Bluzone product.</p>
                </li>
                <li>
                <p>Evaluated Generative AI plugins like Github Copilot & Google Duet AI with IDEs to make the developer’s life easy.</p>
                </li>
                <li>
                <p>Having good knowledge in MEARN STACK (Angular, Node, React UI, Express and Mongo DB) framework.</p>
                </li>
              </ul>
            </div>
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-brown"></i>Work Experience</h2>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Verizon - Sr Engr Cslt-Fullstack</b></h5>
                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Dec 2021 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                <p>I am a Tech Lead creating user stories and leading a team. I am resposible for creating LLD's and Architecture Design for the system and get it approved from the Soultion Architects.
                  Also reviewing the code and guiding the team in functional and technical aspect.
                </p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>HID Global - Senior Software Engineer</b></h5>
                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2019 - Dec 2021</h6>
                <p>I am an Individual contributor taking care of end to end process of the System, starting from the requirement gathering form the Product Owner, UI implementation, Backend Changes, also DB and deployment pipeline changes are taken cared by myself. Mentored the fellow developers by code reviewing and guiding them technically.</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Cognizant Technology Solution - Associate</b></h5>
                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Aug 2016 - Jan 2019</h6>
                <p>I am Senior Developer taking care of both UI and backend of the System, having by weekly call with business analyst for the requirement gathering. Guided the team by reviewing the code and technical aspect.</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Sysbiz Technologies - Senior Software Engineer</b></h5>
                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>May 2013 - Aug 2016</h6>
                <p>I joined as a Trainee Engineer, implemented lot of POC's in various techlogies, then prometed as Software Engineer. After that I learnt the end to end system and took complete resposibility of DEV and UAT environment. Then I was promoted as Senior Software Engineer 
                  taking care of end to end till the feature goes to production.</p><br />
              </div>
            </div>

            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey"><i className="fa fa-certificate fa-spin fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Anna University of Technology - </b> EASA College of Engineering and Technology</h5>
                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Sep 2008 - April 2012</h6>
                <p>Degree - Bachelore of Engineering</p>
                <p>Major - Computer Science and Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w3-container w3-teal w3-center w3-margin-top">
        <a href='https://bento.me/shrihariharanba'> <b><p>Tech Zealot</p></b></a>
        </footer>
    </div>
  );
}

export default App;
