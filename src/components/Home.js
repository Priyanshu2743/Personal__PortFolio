import ProfileCard from './Profile_card';
import { FaTrophy, FaRocket, FaUsers, FaLightbulb, FaAward, FaChartLine } from 'react-icons/fa';

function Home() {
  const achievementsData = [
  {
    id: 1,
    icon: <FaRocket color="#ff6f61" />, // Example color
    title: "Record-Breaking Product Launch",
    description: "Spearheaded the launch of Product X, exceeding Q1 sales targets by 150% and acquiring 50,000 new users in the first month.",
    year: "2023",
    category: "Product Success"
  },
  {
    id: 2,
    icon: <FaUsers color="#61c9ff" />,
    title: "Enhanced User Engagement by 300%",
    description: "Redesigned the user onboarding flow, resulting in a 300% increase in feature adoption and a 40% reduction in churn rate.",
    year: "2022",
    category: "UX Improvement"
  },
  {
    id: 3,
    icon: <FaAward color="#ffd700" />,
    title: "Innovator of the Year Award",
    description: "Recognized for developing a novel algorithm that improved data processing efficiency by 70% across the company.",
    year: "2024",
    category: "Recognition"
  },
  {
    id: 4,
    icon: <FaChartLine color="#4caf50" />,
    title: "Boosted Conversion Rates",
    description: "Optimized the checkout funnel, leading to a 25% increase in conversion rates and an average order value uplift of 15%.",
    year: "2023",
    category: "Growth Metric"
  },
];
  return (
    <main>
      <section className="home-area">
        <div className="container">
          <div className="row g-4">
            <ProfileCard />
            <div className="col-xl-4">
              <div className="row g-4">
                {/* <div className="col-lg-12">
                  <div className="card achievements-card-container">
                    <div className="card-body">
                      <h3 className="card-title achievements-title">My Milestones & Achievements</h3>
                      <div className="achievements-main">
                        <ul className="achievements-list list-unstyled">
                          {achievementsData.map((achievement, index) => (
                            <li key={achievement.id} className="achievement-item" style={{ animationDelay: `${index * 0.15}s` }}>
                              <div className="achievement-icon-area">
                                <span className="icon-background"></span>
                                {achievement.icon}
                              </div>
                              <div className="achievement-content">
                                <div className="achievement-header">
                                    <h4 className="achievement-main-title">{achievement.title}</h4>
                                    {achievement.year && <span className="achievement-year">{achievement.year}</span>}
                                </div>
                                <p className="achievement-description">{achievement.description}</p>
                                {achievement.category && <span className="achievement-category-badge">{achievement.category}</span>}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body work-experiance-card">
                      <h3 className="card-title">Work Experience</h3>
                      <div className="work-experiance-main">
                        <ul className="work-experiance-slider list-unstyled">
                          <li>
                            <div className="date">
                              <p>2021-2024</p>
                            </div>
                            <div className="info">
                              <div className="icon">
                                <img src="assets/img/icons/adobe.svg" alt="adobe" />
                              </div>
                              <div className="text">
                                <h4 className="title">Adobe</h4>
                                <h6 className="subtitle">Senior UI UX Designer</h6>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="date">
                              <p>2021-2024</p>
                            </div>
                            <div className="info">
                              <div className="icon">
                                <img src = "../Assets/img/icons/google.svg" alt="google" />
                              </div>
                              <div className="text">
                                <h4 className="title">Google Inc.
                                </h4>
                                <h6 className="subtitle">Senior Product Designer
  
                                </h6>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="date">
                              <p>2021-2024</p>
                            </div>
                            <div className="info">
                              <div className="icon">
                                <img src="../Assets/img/icons/meta.svg" alt="meta" />
                              </div>
                              <div className="text">
                                <h4 className="title">Meta Inc.
                                </h4>
                                <h6 className="subtitle">Product Designer
                                </h6>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="date">
                              <p>2021-2024</p>
                            </div>
                            <div className="info">
                              <div className="icon">
                                <img src="../Assets/img/icons/adobe.svg" alt="adobe" />
                              </div>
                              <div className="text">
                                <h4 className="title">Adobe</h4>
                                <h6 className="subtitle">Senior UI UX Designer</h6>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <ul className="work-experiance-slider list-unstyled">
                          <li>
                            <div className="date">
                              <p>2021-2024</p>
                            </div>
                            <div className="info">
                              <div className="icon">
                                <img src="assets/img/icons/adobe.svg" alt="adobe" />
                              </div>
                              <div className="text">
                                <h4 className="title">Adobe</h4>
                                <h6 className="subtitle">Senior UI UX Designer</h6>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="date">
                              <p>2021-2024</p>
                            </div>
                            <div className="info">
                              <div className="icon">
                                <img src="assets/img/icons/google.svg" alt="google" />
                              </div>
                              <div className="text">
                                <h4 className="title">Google Inc.
                                </h4>
                                <h6 className="subtitle">Senior Product Designer
  
                                </h6>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="date">
                              <p>2021-2024</p>
                            </div>
                            <div className="info">
                              <div className="icon">
                                <img src="assets/img/icons/meta.svg" alt="meta" />
                              </div>
                              <div className="text">
                                <h4 className="title">Meta Inc.
                                </h4>
                                <h6 className="subtitle">Product Designer
                                </h6>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="date">
                              <p>2021-2024</p>
                            </div>
                            <div className="info">
                              <div className="icon">
                                <img src="assets/img/icons/adobe.svg" alt="adobe" />
                              </div>
                              <div className="text">
                                <h4 className="title">Adobe</h4>
                                <h6 className="subtitle">Senior UI UX Designer</h6>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-12">
                  <div className="card expertise-card">
                    <div className="card-body">
                      <h3 className="card-title">My Expert Area
                      </h3>
                      <div className="expertise-main mt-24">
                        <div className="row g-3">
                          <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                            <div className="expertise-item">
                              <div className="image text-center">
                                <img src="../Assets/img/icons/figma.svg" alt="figma" />
                              </div>
                              <div className="text">
                                <h4 className="title">Figma</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                            <div className="expertise-item">
                              <div className="image text-center">
                                <img src="assets/img/icons/notion.svg" alt="notion" />
                              </div>
                              <div className="text">
                                <h4 className="title">Notion</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                            <div className="expertise-item">
                              <div className="image text-center">
                                <img src="assets/img/icons/mico.svg" alt="micro" />
                              </div>
                              <div className="text">
                                <h4 className="title">Miro</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                            <div className="expertise-item">
                              <div className="image text-center">
                                <img src="assets/img/icons/framer.svg" alt="framer" />
                              </div>
                              <div className="text">
                                <h4 className="title">Framer</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                            <div className="expertise-item">
                              <div className="image text-center">
                                <img src="assets/img/icons/webflow.svg" alt="webflow" />
                              </div>
                              <div className="text">
                                <h4 className="title">Webflow</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                            <div className="expertise-item">
                              <div className="image text-center">
                                <img src="assets/img/icons/zeplin.svg" alt="zeplin" />
                              </div>
                              <div className="text">
                                <h4 className="title">Zeplin</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card card-projects">
                <div className="card-body">
  
                  <h3 className="card-title">Recent Projects <a className="link-btn" href="/resume">All Projects
                      <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16699 10H15.8337" stroke="#4770FF" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M10.833 15L15.833 10" stroke="#4770FF" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M10.833 5L15.833 10" stroke="#4770FF" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
  
                    </a></h3>
                  <div className="projects-main mt-24">
                    <div className="row g-4 parent-container">
                      <div className="col-lg-12">
                        <div className="project-item">
                          <div className="image">
                            <img src="../Assets/img/projects/project-1.png" alt="project-1" className="img-fluid w-100" />
                            <a href="assets/img/projects/project-1.png"
                              className="gallery-popup full-image-preview parent-container">
                              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                <path d="M10 4.167v11.666M4.167 10h11.666"></path>
                              </svg>
                            </a>
                            <div className="info">
                              <span className="category">Product Design</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="project-item">
                          <div className="image">
                            <img src="assets/img/projects/project-2.png" alt="project-2" className="img-fluid w-100" />
                            <a href="assets/img/projects/project-2.png"
                              className="gallery-popup full-image-preview parent-container">
                              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                <path d="M10 4.167v11.666M4.167 10h11.666"></path>
                              </svg>
                            </a>
                            <div className="info">
                              <span className="category">Product Design</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
