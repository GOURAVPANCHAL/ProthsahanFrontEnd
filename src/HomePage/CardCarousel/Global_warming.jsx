import React, { useEffect } from "react";
import image1 from "../../HomePage/images/globalwarming.gif";
import image2 from "../../HomePage/images/globalwarming2.gif";
import image3 from "../../HomePage/images/globalwarming3.gif";
import image4 from "../../HomePage/images/globalwarming4.jpg";
import image5 from "../../HomePage/images/globalwarming5.jpg";
import image6 from "../../HomePage/images/globalwarming6.jpg";
import image7 from "../../HomePage/images/globalwarming7.jpg";
import image8 from "../../HomePage/images/globalwarming8.jpg";

const Global_warming = () => {
  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="container Allpagemargin mb-5">
        <div
          className="row p-3"
          style={{ boxShadow: "0px 0px 37px 0px lightgray", alignItems:'center' }}
        >
          <h1 className="mb-3">Global Warming</h1>
          <div className="col-md-4">
            <div>
              <img src={image1} width="100%" height="100%" alt="pic" />
            </div>
          </div>
          <div className="col-md-8">
            <div>
              <p>
                Global warming refers to the increase in the average temperature
                of the Earth's near-surface air and oceans in recent decades and
                its projected continuation.
              </p>
              <p>
                Global average air temperature near the Earth's surface rose
                0.74 ± 0.18 °C (1.33 ± 0.32 °F) during the twentieth century.
                The Intergovernmental Panel on Climate Change (IPCC) concludes,
                "most of the observed increase in globally averaged temperatures
                since the mid-20th century is very likely due to the observed
                increase in anthropogenic greenhouse gas concentrations," which
                leads to warming of the surface and lower atmosphere by
                increasing the greenhouse effect. Natural phenomena such as
                solar variation combined with volcanoes have probably had a
                small warming effect from pre-industrial times to 1950, but a
                small cooling effect since 1950.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <p>
              Climate models referenced by the IPCC project that global surface
              temperatures are likely to increase by 1.1 to 6.4 °C (2.0 to 11.5
              °F) between 1990 and 2100. The range of values reflects the use of
              differing scenarios of future greenhouse gas emissions and results
              of models with differences in climate sensitivity. Although most
              studies focus on the period up to 2100, warming and sea level rise
              are expected to continue for more than a millennium even if
              greenhouse gas levels are stabilized. This reflects the large heat
              capacity of the oceans.
            </p>
            <p>
              An increase in global temperatures is expected to cause other
              changes, including sea level rise, increased intensity of extreme
              weather events, and changes in the amount and pattern of
              precipitation. Other effects include changes in agricultural
              yields, glacier retreat, species extinctions and increases in the
              ranges of disease vectors.
            </p>
          </div>
          <h1 className="text-center mb-5">Causes</h1>

          <div className="col-md-8 mb-5">
            <div>
              <h4 className="mb-2" style={{ color: "#00C851" }}>
                CARBON DIOXIDE
              </h4>
              <p>
                Carbon dioxide during the last 400,000 years and the rapid rise
                since the Industrial Revolution; changes in the Earth's orbit
                around the Sun, known as Milankovitch cycles, are believed to be
                the pacemaker of the 100,000 year ice age cycle.
              </p>
              <h4 className="mb-2" style={{ color: "#00C851" }}>
                SOLAR RADIATION
              </h4>
              <p>
                Warming is caused by natural fluctuations in the climate or that
                warming is mainly a result of variations in solar radiation.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div>
              <img src={image2} width="100%" alt="pic" />
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div>
              <img src={image3} width="100%" alt="pic" />
            </div>
          </div>
          <div className="col-md-8 mb-5">
            <div>
              <h4 className="mb-2" style={{ color: "#00C851" }}>
                GREEN HOUSE GAS IN THE ATMOSPHERE
              </h4>
              <p>
              Recent increases in atmospheric carbon dioxide (CO2). The monthly CO2 measurements display small seasonal oscillations in an overall yearly uptrend; each year's maximum is reached during the northern hemisphere's late spring, and declines during the northern hemisphere growing season as plants remove some CO2 from the atmosphere.
              </p>
              <p>
              The greenhouse effect was discovered by Joseph Fourier in 1824 and was first investigated quantitatively by Svante Arrhenius in 1896. It is the process by which absorption and emission of infrared radiation by atmospheric gases warms a planet's atmosphere and surface.
              </p>
            </div>
          </div>
         
          <div className="col-md-12">
            <p>On Earth, the major natural greenhouse gases are water vapor, which causes about 36–70% of the greenhouse effect (not including clouds); carbon dioxide (CO2), which causes 9–26%; methane (CH4), which causes 4–9%; and ozone, which causes 3–7%.</p>
            <p>Some other naturally occurring gases contribute very small fractions of the greenhouse effect; one of these, nitrous oxide (N2O), is increasing in concentration owing to human activity such as agriculture. The atmospheric concentrations of CO2 and CH4 have increased by 31% and 149% respectively above pre-industrial levels since 1750. These levels are considerably higher than at any time during the last 650,000 years, the period for which reliable data has been extracted from ice cores. From less direct geological evidence it is believed that CO2 values this high were last attained 20 million years ago. "About three-quarters of the anthropogenic man-made emissions of CO2 to the atmosphere during the past 20 years are due to fossil fuel burning. The rest of the anthropogenic emissions are predominantly due to land-use change, especially deforestation."</p>
            <p>The present atmospheric concentration of CO2 is about 383 parts per million (ppm) by volume. Future CO2 levels are expected to rise due to ongoing burning of fossil fuels and land-use change. The rate of rise will depend on uncertain economic, sociological, technological, natural developments, but may be ultimately limited by the availability of fossil fuels. The IPCC Special Report on Emissions Scenarios gives a wide range of future CO2 scenarios, ranging from 541 to 970 ppm by the year 2100. Fossil fuel reserves are sufficient to reach this level and continue emissions past 2100, if coal, tar sands or methane clathrates are extensively used.</p>
          </div>
          
          <div className="col-md-4 mb-5">
            <div>
              <img src={image4} width="100%" alt="pic" />
            </div>
          </div>
          <div className="col-md-8 mb-5">
            <div>
              <h4 className="mb-2" style={{ color: "#00C851" }}>
              TEMPERATURE CHANGES
              </h4>
              <p>
              Temperature is believed to have been relatively stable over the one or two thousand years before 1850, with possibly regional fluctuations such as the Medieval Warm Period or the Little Ice Age.
              </p>
              <p>
              Sea temperatures increase more slowly than those on land both because of the larger effective heat capacity of the oceans and because the ocean can lose heat by evaporation more readily than the land. Since the northern hemisphere has more land mass than the southern it warms faster; also there are extensive areas of seasonal snow cover subject to the snow-albedo feedback. Although more greenhouse gases are emitted in the northern than southern hemisphere this does not contribute to the asymmetry of warming as the major gases are essentially well-mixed between hemispheres.
              </p>
            </div>
          </div>
          
          <div className="col-md-8 mb-5">
            <div>
              <h4 className="mb-2" style={{ color: "#00C851" }}>
              CLIMATE MODELS
              </h4>
              <p>
              The projected temperature increase for a range of stabilization scenarios (the coloured bands). The black line in middle of the shaded area indicates 'best estimates'; the red and the blue lines the likely limits. From the work of IPCC AR4, 2007.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div>
              <img src={image8} width="100%" alt="pic" />
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div>
              <img src={image5} width="100%" alt="pic" />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img src={image6} width="100%" alt="pic" />
            </div>
          </div>
          <div className="col-md-2"></div>

          <div className="col-md-4 mt-5 mb-5">
            <div>
              <img src={image7} width="100%" alt="pic" />
            </div>
          </div>
          <div className="col-md-8 mt-5 mb-5">
            <div>
              <h4 className="mb-2" style={{ color: "#00C851" }}>
              ATTRIBUTED AND EXPECTED EFFECTS
              </h4>
              <p>
              Though it is difficult to connect specific weather events to global warming, an increase in global temperatures may in turn cause other changes, including glacial retreat and worldwide sea level rise. Changes in the amount and pattern of precipitation may result in flooding and drought. There may also be changes in the frequency and intensity of extreme weather events. Other effects may include changes in agricultural yields, reduced summer streamflows, species extinctions and increases in the range of disease vectors.
              </p>
            </div>
          </div>
          <div className="col-md-12 mb-5">
            <div>
              <h4 className="mb-2" style={{ color: "#00C851" }}>
              RELATED CLIMATE ISSUES
              </h4>
              <p>
              A variety of issues are often raised in relation to global warming. One is ocean acidification. Increased atmospheric CO2 increases the amount of CO2 dissolved in the oceans. CO2 dissolved in the ocean reacts with water to form carbonic acid resulting in acidification. Ocean surface pH is estimated to have decreased from approximately 8.25 to 8.14 since the beginning of the industrial era, and it is estimated that it will drop by a further 0.14 to 0.5 units by 2100 as the ocean absorbs more CO2. Since organisms and ecosystems are adapted to a narrow range of pH, this raises extinction concerns, directly driven by increased atmospheric CO2, that could disrupt food webs and impact human societies that depend on marine ecosystem services.
              </p>
              <p>Another related issue that may have partially mitigated global warming in the late twentieth century is global dimming, the gradual reduction in the amount of global direct irradiance at the Earth's surface. From 1960 to 1990 human-caused aerosols likely precipitated this effect. Scientists have stated with 66–90% confidence that the effects of human-caused aerosols, along with volcanic activity, have offset some of global warming, and that greenhouse gases would have resulted in more warming than observed if not for these dimming agents.</p>
              <p>
                Ozone depletion, the steady decline in the total amount of ozone in Earth's stratosphere, is frequently cited in relation to global warming. Although there are areas of linkage, the relationship between the two is not strong.
              </p>
              <p className="text-end">
                <b>by Dr. Pradeep Srivastava</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Global_warming;
