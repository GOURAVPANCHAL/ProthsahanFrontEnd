import React, { useEffect } from "react";

const OrganDonating = () => {
  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div>
        <div className="container Allpagemargin">
          <div
            style={{
              padding: "2rem",
              boxShadow:'0px 0px 37px 0px lightgray',
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <div>
              <h3 style={{ color: "rgb(0, 200, 81)" }}>
                ORGAN DONATION A GIFT OF LIFE
              </h3>
            </div>
            <p>
              Organ transplants are miraculous achievements of modern medicine
              which provide a viable approach to the management of diseases that
              cause end stage organ failure. They help such patients live long
              after they have given up hope but depend entirely on the
              generosity of donors and their families who are willing to give
              this life saving gift to others. Every year, hundreds of people
              die while waiting for an organ transplant. There is a serious
              shortage of organs and the gap between the numbers of organs
              donated and the number of people waiting is ever increasing. This
              where you can help by pledging your organs
            </p>
            <p>
              A single non-living heart beating donor can save 7 lives by
              donating the heart, lungs, liver, kidneys, pancreas and small
              bowel. Several tissues like cornea, heart valves, ear drums and
              bones, menisci, tendons and skin could be donated. The
              Transplantation of Human Organs Act1994 (THOA) and the
              Transplantation of human organ rules 1995 (THOR) as amended in
              2002 provide for the regulation of removal, storage and
              transplantation of human organs for therapeutic purposes the act
              recognizes the concept of Brain Stem Death (BSD) and gives legal
              sanction for cadaver organ donation. As of now there is no
              organization at the national level to control and coordinate organ
              donation and organ sharing there are some organizations at the
              state level like ORBO (Organ Retrieval & Banking Organization) at
              AIIMS; New Delhi MOHAN (Multi Organ Harvesting And Networking)
              foundation at Chennai and ZTCC ( Zonal Transplant Co Ordination
              Committee) for Maharashtra.
            </p>
            <p>Below are some commonly asked questions about donation:</p>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    style={{ background: "#f2ede9", marginBottom: "1rem" }}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Who can donate?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Any person regardless of age, race or gender can pledge to
                    donate his or her organs by singing a donor card. If you are
                    under 18 consent of parent or legal guardian is necessary.
                    Alternatively, the family members of a brain dead person can
                    offer the organs for donation. Medical suitability for
                    donation is determined at the of brain death of the
                    individual
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    style={{ background: "#f2ede9", marginBottom: "1rem" }}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    What is brain death?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Severe head injury, stroke, brain tumour or other damage
                    serious illnesses cause irreversible brina damage with
                    cessation of brain stem function and such a patient is
                    termed brain dead. A brain dead person is medically and
                    legally dead and cannot recover. With the help of artificial
                    support like mechanical ventilation and drugs, the heart may
                    continue to beat for a limited period of time but eventually
                    it will stop functioning despite any medical support. Brain
                    death is certified after specific tests are performed twice
                    over an interval of six hours by a team of 4 doctors as per
                    the guidelines issued by Govt. of India in Transplantation
                    of Human Organs act 1994.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    style={{ background: "#f2ede9", marginBottom: "1rem" }}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Does donation leave the body disfigured?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    No Organs are removed with greatest care and respect by a
                    team of specially trained surgeons. This takes place in the
                    operation under aseptic conditions. After the removal of the
                    organs the surgical incision is applied. Relatives may see
                    the body after the operation if they wish. The process of
                    organ removal does not interfere with the customary funeral
                    or burial arrangements
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    style={{ background: "#f2ede9", marginBottom: "1rem" }}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Will they just let you die if they know you want to be a
                    donor?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>
                      No. The doctors looking after a patient make every
                      possible effort to save the patient’s life. If despite
                      efforts, the patient suffers brain, only then can organ
                      donation be considered and a completely different team of
                      doctors is called in. The patient is already dead and the
                      ventilator only keeps the body supplied with oxygen so
                      that heart can continue to beat and circulate blood to
                      preserve the organs so they can be donated for
                      transplantation.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    style={{ background: "#f2ede9", marginBottom: "1rem" }}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Which organs can be donated?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Medical science has succeeded in transplantation of many
                    organs like heart, lungs kidneys, liver, pancreas and some
                    tissues like corneas, skin, heart valves, tendons and bones,
                    of which facilities for kidney, liver and cornea
                    transplantation.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    style={{ background: "#f2ede9", marginBottom: "1rem" }}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    What if my religious beliefs do not permit donation?
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>
                      There is no religion which prohibits organ donation. In
                      fact, below are excerpt from some religious texts:
                    </p>
                    <ul>
                      <li className="list">
                        Hinduism: "………… it is said that the soul is invisible,
                        knowing this you should not grieve for the body." Daan
                        is the act of selfless giving. – Bhagvad Gita, chapter
                        2:25
                      </li>
                      <li className="list">
                        Sikhism: "The dead sustain their bond with the living
                        through virtuous deeds". –Guru Nanak, Guru Granth Sshib,
                        p 143.
                      </li>
                      <li className="list">
                        Islam: "Whosoever saves the life of one person would be
                        as if he saved the life of all mankind". – Holy Quran,
                        chapter 5:32
                      </li>
                      <li className="list">
                        Christianity: Sacrifice and helping others are
                        consistent themes in Christiantiy, which teaches the
                        principle of seeking for others what you hope others
                        would do for you. Teaching of Jesus Christ: - "…… Freely
                        you have received, freely give." – Mathew, chapter 10:8
                      </li>
                      <li className="list">
                        Buddhism: " Organ donation is an extremely positive
                        action……it will not harm in any way the ‘consciousness’
                        that is leaving the body. On the contrary, this final
                        act of generosity accumulates good karma". Sogyal
                        Rinpoche – The Tibetan book of Living & Drying.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    style={{ background: "#f2ede9", marginBottom: "1rem" }}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSeven"
                    aria-expanded="false"
                    aria-controls="flush-collapseSeven"
                  >
                    What does the law say about organ donation?
                  </button>
                </h2>
                <div
                  id="flush-collapseSeven"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>
                      Govt. of India has passed the Transplantation of Human
                      Organs act 1994 which legally permits organ donation.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    style={{ background: "#f2ede9", marginBottom: "1rem" }}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseEight"
                    aria-expanded="false"
                    aria-controls="flush-collapseEight"
                  >
                    Is the family asked for permission for donation even if a
                    signed donor card is found?
                  </button>
                </h2>
                <div
                  id="flush-collapseEight"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>
                      Yes. Therefore, if is important that you share your
                      decision with your family members so that it is easier for
                      them to carry out your wishes.
                    </p>
                    <p>
                      Organ donation ensures that you leave behind a legacy of
                      life to others after you. Families of donors say that
                      being asked about organ donation does not upset them or
                      make the situation any worse. By being asked, they are
                      being offered a choice to save other lives in their moment
                      for donation and help precious lives from being lost
                      before their time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganDonating;
