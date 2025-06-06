import { useState } from "react";
import ProfileCard from "./Profile_card";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("/your-api-endpoint", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.text();
            setResponseMessage(result);
        } catch (error) {
            setResponseMessage("Failed to send message.");
        }
        
        setTimeout(() => setResponseMessage(""), 5000);
    };

    return (
      <main>
        <section class="content-box-area mt-5">
          <div class="container">
            <div class="row g-4">
              <ProfileCard />
              <div class="col-xl-8">
              <div class="card content-box-card">
                <div class="card-body portfolio-card contact-card">
                  <div class="top-info">
                    <div class="text">
                      <h1 class="main-title">Let's 👋 <span>Work</span> Together</h1>
                      <p>I'm here to help if you're searching for a product designer to bring your idea to life or a
                        design partner to help take your business to the next level.</p>
                    </div>
                  </div>
                  <div class="contact-area">
                    <div class="leave-comments-area">
                      <div class="comments-box">
                        <form id="contact-form" action="https://marveltheme.com/tf/html/bentofolio-html/assets/mail.php" method="POST">
                          <div class="row gx-3">
                            <div class="col-md-6">
                              <div class="mb-4">
                                <label class="form-label">Name</label>
                                <input name="name" required type="text" class="form-control shadow-none" placeholder="Enter your name" />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb-4">
                                <label class="form-label">Email</label>
                                <input name="email" required type="email" class="form-control shadow-none" placeholder="Enter your email" />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb-4">
                                <label class="form-label">Subject</label>
                                <input name="subject" required type="text" class="form-control shadow-none" placeholder="Subject" />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb-4">
                                <label class="form-label">Budget</label>
                                <select name="budget" required class="form-select shadow-none">
                                  <option disabled selected>Select budget...</option>
                                  <option value="$5000">$5000</option>
                                  <option value="$5000 - $1000">$5000 - $10000</option>
                                  <option value="$10000 - $2000">$10000 - $20000</option>
                                  <option value="$20000">$20000+</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="mb-4">
                                <label class="form-label">Comment</label>
                                <textarea name="message" class="form-control shadow-none" rows="4"
                                  placeholder="Type details about your inquiry"></textarea>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <button class="submit-btn" type="submit">
                                Send Message
                                <svg class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.5 11.6665V6.6665H12.5" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M17.5 6.6665L10 14.1665L2.5 6.6665" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </form>
                        <p class="ajax-response mb-0"></p>
                      </div>
                    </div>
                    <div class="contact-map-area">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280012016!2d-74.14448732737499!3d40.69763123331177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1711832776336!5m2!1sen!2sbd"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="frequently-asked-questions">
                      <h2 class="main-common-title">Frequently Asked Questions
                      </h2>
                      <div class="frequently-asked-questions-main">
                        <div class="accordion" id="accordionExample">
                          <div class="accordion-item">
                            <h4 class="accordion-header" id="headingOne">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What does a product designer need to know?
                                <span class="ms-auto">
                                  <span class="icon ms-4">
                                    <img class="icon-plus" src="assets/img/icons/plus.svg" alt="plus" />
                                    <img class="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus" />
                                  </span>
                                </span>
                              </button>
                            </h4>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                <p>I'm here to help if you're searching for a product designer to bring your idea to
                                  life
                                  or a design partner to help take your business to the next level.</p>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h4 class="accordion-header" id="headingTwo">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What does a product designer need to know?
                                <span class="ms-auto">
                                  <span class="icon ms-4">
                                    <img class="icon-plus" src="assets/img/icons/plus.svg" alt="plus" />
                                    <img class="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus" />
                                  </span>
                                </span>
                              </button>
                            </h4>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                <p>I'm here to help if you're searching for a product designer to bring your idea to
                                  life
                                  or
                                  a design partner to help take your business to the next level.</p>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h4 class="accordion-header" id="headingThree">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What does a product designer need to know?
                                <span class="ms-auto">
                                  <span class="icon ms-4">
                                    <img class="icon-plus" src="assets/img/icons/plus.svg" alt="plus" />
                                    <img class="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus" />
                                  </span>
                                </span>
                              </button>
                            </h4>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                <p>I'm here to help if you're searching for a product designer to bring your idea to
                                  life
                                  or
                                  a design partner to help take your business to the next level.</p>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h4 class="accordion-header" id="headingFour">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What does a product designer need to know?
                                <span class="ms-auto">
                                  <span class="icon ms-4">
                                    <img class="icon-plus" src="assets/img/icons/plus.svg" alt="plus" />
                                    <img class="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus" />
                                  </span>
                                </span>
                              </button>
                            </h4>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                <p>I'm here to help if you're searching for a product designer to bring your idea to
                                  life
                                  or
                                  a design partner to help take your business to the next level.</p>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h4 class="accordion-header" id="headingFive">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                What does a product designer need to know?
                                <span class="ms-auto">
                                  <span class="icon ms-4">
                                    <img class="icon-plus" src="assets/img/icons/plus.svg" alt="plus" />
                                    <img class="icon-minus d-none" src="assets/img/icons/minus.svg" alt="minus" />
                                  </span>
                                </span>
                              </button>
                            </h4>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                              data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                <p>I'm here to help if you're searching for a product designer to bring your idea to
                                  life
                                  or
                                  a design partner to help take your business to the next level.</p>
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
        </div>
      </section>

      <div class="background-shapes">
        <div class="shape-1 common-shape">
          <img src="assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
        </div>
        <div class="shape-2 common-shape">
          <img src="assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
        </div>
        <div class="threed-shape-1 move-with-cursor" data-value="1">
          <img src="assets/img/bg/object-3d-1.png" alt="object-3d-1" />
        </div>
        <div class="threed-shape-2 move-with-cursor" data-value="1">
          <img src="assets/img/bg/object-3d-2.png" alt="object-3d-2" />
        </div>
      </div>
      {/* <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea>
            <button type="submit">Send</button>
            {responseMessage && <p>{responseMessage}</p>}
        </form> */}
    </main>
         
    );
};

export default ContactForm;
