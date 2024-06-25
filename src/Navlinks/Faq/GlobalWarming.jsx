import React, { useEffect } from "react";
import '../../Navlinks/Faq/faq.css'
import { Link } from "react-router-dom";
const GlobalWarming = () => {
  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
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
            <h3 style={{ color: "rgb(0, 200, 81)" }}>ABOUT GLOBAL WARMING</h3>
          </div>
          <p>
            We
            <Link style={{ textDecoration: "none" }} to="#">
              Prothsahan TEAM
            </Link>
            a Delhi based NGO, is starting a project for Environment awareness
            among the young generation through The broad aim of the Area is to
            inculcate among the children, a sense of respect and responsibility
            towards the environment and build awareness among all age groups.
            Working towards achieving this task, the Area realizes that skills
            have to be developed in young children by means of which they can
            bring about a change in the existing state of the environment.
            Though formal education has an important role to play, when it comes
            to environmental education, the teaching and learning process must
            be done through a 'fun-and-learn' method, thereby generating a
            genuine interest for the subject in the young minds.
          </p>
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
                  What is Global Warming?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Global warming generally refers to the recent heating of the
                  planet, which is also known as climate change. Our earth has
                  both warmed up and cooled down in its geological history.
                  Average global temperatures have increased around 1 deg.
                  Fahrenheit the past century. They are projected to rise at
                  rates five to 10 times as fast this century, which is the most
                  rapid increase in 10,000 years, the end of the last ice age.
                  The scientific consensus is that human activities are to
                  blame. If projections are correct, the 21st century will see a
                  temperature increase roughly equal to or greater than the
                  entire global warming after the ice age. And our warming is
                  not from ice age temperatures, but on top of an already warm
                  atmosphere. The speed of change itself raises concerns that
                  plants, animals and human beings will not be able to adapt
                  rapidly enough to the changes.
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
                  What is happening due to this , some facts ..
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <ul>
                    <li className="list">
                      Average temperatures have climbed 1.4 degrees Fahrenheit
                      (0.8 degree Celsius) around the world since 1880, much of
                      this in recent decades, according to NASA's Goddard
                      Institute for Space Studies.
                    </li>
                    <li className="list">
                      The rate of warming is increasing. The 20th century's last
                      two decades were the hottest in 400 years and possibly the
                      warmest for several millennia, according to a number of
                      climate studies. And the United Nations' Intergovernmental
                      Panel on Climate Change (IPCC) reports that 11 of the past
                      12 years are among the dozen warmest since 1850.
                    </li>
                    <li className="list">
                      The Arctic is feeling the effects the most. Average
                      temperatures in Alaska, western Canada, and eastern Russia
                      have risen at twice the global average, according to the
                      multinational Arctic Climate Impact Assessment report
                      compiled between 2000 and 2004.
                    </li>
                    <li className="list">
                      Arctic ice is rapidly disappearing, and the region may
                      have its first completely ice-free summer by 2040 or
                      earlier. Polar bears and indigenous cultures are already
                      suffering from the sea-ice loss.
                    </li>
                    <li className="list">
                      Glaciers and mountain snows are rapidly melting—for
                      example, Montana's Glacier National Park now has only 27
                      glaciers, versus 150 in 1910. In the Northern Hemisphere,
                      thaws also come a week earlier in spring and freezes begin
                      a week later.
                    </li>
                    <li className="list">
                      An upsurge in the amount of extreme weather events, such
                      as wildfires, heat waves , and strong tropical storms , is
                      also attributed in part to climate change by some experts.
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
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  What are greenhouse gases and where do they come from ?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Water vapor is a greenhouse gas that rapidly circulates in and
                  out of the atmosphere. The major greenhouse gas that humans
                  are adding to the atmosphere is carbon dioxide, CO2, which
                  remains in the atmosphere a century or more. The second
                  largest greenhouse gas being emitted by humans is methane,
                  CH4, which is around 20 times more powerful than CO2. Much of
                  this comes from agricultural sources such as farm animals and
                  rice paddies. Nitrous oxide is another large greenhouse
                  contributor. CFCs, the ozone depleting substances that are now
                  being phased out, as well as their replacement, HCFCs, are
                  also powerful greenhouse gases. Roughly three-quarters of
                  human-caused greenhouse warming comes from the burning of
                  fossil fuels – coal, oil and gas. Most of the remainder comes
                  from deforestation, primarily of the tropical rainforests.
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
                  Can We Stop Global Warming ?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <p>
                    The best science indicates that to stabilize the climate, we
                    must rapidly reduce human greenhouse emissions on the order
                    of 70 percent. This is a huge task, but the longer we wait,
                    the bigger the challenge when we finally get to it. Because
                    the climate resembles a speeding train that takes a long
                    time to slow, the longer we wait the greater the risk that
                    we will set in motion natural forces we cannot stop. There
                    are huge risks in waiting too long. The greenhouse effect
                    could feed the greenhouse effect by unlocking huge amounts
                    of greenhouse gases from natural ecosystems. The loss of
                    tropical rainforests to drying and fires would release
                    massive amounts of greenhouse gases, as would melting of
                    Arctic tundras and heating of seabed sediments. Ironically,
                    global warming could send the Earth back into the ice age by
                    shutting off the Gulf Stream to the North Atlantic, which
                    carries tropical heat north and keeps Europe 15 deg. F
                    warmer than it would otherwise.
                  </p>
                  <p>
                    Global warming is a train that is speeding up right now.
                    First we need to slow the train, and then we need to stop
                    it. We can do so by transforming our energy system from one
                    based on fossil fuels to one based on natural, renewable
                    energies including sun, wind, tides, plant growth and
                    geothermal energy. We have the technology, but applying it
                    will take a large investment by government and business. In
                    shifting to clean energy, we will also eliminate much air
                    pollution, and build new industries and a new basis of
                    sustainable prosperity. If we move quickly to clean energy,
                    stop deforesting the tropics and move to more sustainable
                    agriculture, we will eliminate most greenhouse gases, and
                    avert climatic catastrophe. This is one of the largest
                    challenges humans have ever faced, but we are richer now in
                    economy, technology and scientific knowledge than we ever
                    have been before. We are well up to the task. We just have
                    to recognize its critical importance to our future.
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
                  Who are responsible for this?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <ul>
                    <li className="list">
                      Very likely," the IPCC said in a February 2007 report.
                      The report, based on the work of some 2,500 scientists in
                      more than 130 countries, concluded that humans have caused
                      all or most of the current planetary warming. Human-caused
                      global warming is often called anthropogenic climate
                      change.
                    </li>
                    <li className="list">
                      Industrialization, deforestation, and pollution have
                      greatly increased atmospheric concentrations of water
                      vapor, carbon dioxide, methane, and nitrous oxide, all
                      greenhouse gases that help trap heat near Earth's surface.
                    </li>
                    <li className="list">
                      Humans are pouring carbon dioxide into the atmosphere much
                      faster than plants and oceans can absorb it.
                    </li>
                    <li className="list">
                      These gases persist in the atmosphere for years, meaning
                      that even if such emissions were eliminated today, it
                      would not immediately stop global warming.
                    </li>
                    <li className="list">
                      Some experts point out that natural cycles in Earth's
                      orbit can alter the planet's exposure to sunlight, which
                      may explain the current trend. Earth has indeed
                      experienced warming and cooling cycles roughly every
                      hundred thousand years due to these orbital shifts, but
                      such changes have occurred over the span of several
                      centuries. Today's changes have taken place over the past
                      hundred years or less.
                    </li>
                    <li className="list">
                      Other recent research has suggested that the effects of
                      variations in the sun's output are "negligible" as a
                      factor in warming, but other, more complicated solar
                      mechanisms could possibly play a role.
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
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  What's Going to Happen?
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <p>
                    Here is a list of 50 simple things that everyone can do in
                    order to fight against and reduce the Global Warming
                    phenomenon: some of them are at no cost, some other require
                    a little investment but can help you save a lot of money, in
                    the middle-long term!
                  </p>
                  <ul>
                    <li className="list">
                      Replace a regular incandescent light bulb with a compact
                      fluorescent light bulb (cfl)
                    </li>
                    <li className="list">
                      Clean or replace filters on your furnace and air
                      conditioner & use on economic mode.
                    </li>
                    <li className="list">
                      Choose energy efficient appliances when making new
                      purchases
                    </li>
                    <li className="list">Do not leave appliances on standby</li>
                    <li className="list">Defrost old fridges and freezers regularly</li>
                    <li className="list">Cover your pots while cooking</li>
                    <li className="list">
                      Use the washing machine or dishwasher only when they are
                      full
                    </li>
                    <li className="list">Take a shower instead of a bath</li>
                    <li className="list">Use less hot water</li>
                    <li className="list">
                      Recycle your organic waste, By recycling organic waste or
                      composting it if you have a garden
                    </li>
                    <li className="list">Reuse your shopping bag</li>
                    <li className="list">Plant a tree & Switch to green power</li>
                    <li className="list">Buy locally grown and produced foods</li>
                    <li className="list">
                      Buy fresh foods instead of frozen, Frozen food uses 10
                      times more energy to produce.
                    </li>
                    <li className="list">Seek out and support local farmers markets</li>
                    <li className="list">
                      Buy organic foods as much as possible, If we grew all of
                      our corn and soybeans organically, we’d remove 580 billion
                      pounds of carbon dioxide from the atmosphere!
                    </li>
                    <li className="list">
                      Eat less meat, Their grassy diet and multiple stomachs
                      cause them to produce methane, which they exhale with
                      every breath
                    </li>
                    <li className="list">
                      Reduce the number of miles you drive by walking, biking,
                      carpooling or taking mass transit wherever possible
                    </li>
                    <li className="list">
                      Start a carpool with your coworkers or classmates keep
                      your car tuned up.
                    </li>
                    <li className="list">Drive carefully and do not waste fuel</li>
                    <li className="list">
                      Check your tires weekly to make sure they’re properly
                      inflated
                    </li>
                    <li className="list">
                      When it is time for a new car, choose a more fuel
                      efficient vehicle
                    </li>
                    <li className="list">Protect and conserve forest worldwide</li>
                    <li className="list">Don’t burn the waste.</li>
                    <li className="list">
                      Stop using crackers on any occasions, as it creates lots
                      of air / sound pollution.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 style={{ color: "rgb(0, 200, 81)" }}>Join the virtual march</h3>
          </div>
          <div>
            <p>
              The Stop Global Warming Virtual March is a non-political effort to
              bring people concerned about global warming together in one place.
              Add your voice to the hundreds of thousands of other people urging
              action on this issue.
            </p>
            <p>
              Global warming isn't opinion. It's a scientific reality. The
              science shows that human activity has made enormous impacts to our
              planet that affect our well-being and survival. We can however
              begin to make significant repairs to reverse those impacts — but
              only through immediate action. That’s why we urge you to join us
              and have your voice counted.
            </p>
            <p>
              This is a movement about change, as individuals, as a country, and
              as a global community. Join the supporters of the Stop Global
              Warming Virtual March, and become part of the movement to demand
              our leaders freeze and reduce carbon dioxide emissions now. We are
              all contributors to global warming and we all need to be part of
              the solution
            </p>
            <p className=" d-flex justify-content-center">
              <button className="btn btn-success">Join Now</button>
            </p>
            <p>
              The Stop Global Warming Virtual March is a non-political effort
              bringing Indians together to declare that global warming is here
              now and it’s time to act.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalWarming;
