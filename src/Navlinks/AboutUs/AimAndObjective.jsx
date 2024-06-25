import React, { useEffect } from "react";
import image1 from "../../HomePage/images/newsCard1.jpg";
import image2 from "../../HomePage/images/newsCard2.jpg";
import image3 from "../../HomePage/images/newsCard3.jpg";
import image4 from "../../HomePage/images/newsCard4.jpg";
import image5 from "../../HomePage/images/newsCard5.jpg";
import image6 from "../../HomePage/images/newsCard6.jpg";
import image7 from "../../HomePage/images/newsCard7.jpg";
import '../AboutUs/ourTeam.css'

const AimAndObjective = () => {
  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="container mb-5 Allpagemargin">
        <div className="row p-3" style={{boxShadow:'0px 0px 37px 0px lightgray'}}>
        <div className="col-md-4">
            <div>
              <img src={image1} width="100%" alt="pic" />
            </div>
          </div>
          <div className="col-md-8 mb-5">
            <div>
              <h4 className="mb-2" style={{ color: "#00C851" }}>
                GREEN ENVIRONMENT
              </h4>
              <p>
                We’ll plant the trees in different areas, and help those who
                wants to do so. Also compaign and create awareness through
                posters, drawing competitions / quiz in schools / colleges ,
                advertisement etc not to burn the garbage, sagrigate it
                categorically, reduce CO2 from the atmosphere. Even Make some
                dumping areas and treat those areas with Biological cleanning
                kind of products to reduce bad/ foul smell and decompose them
                without burning. So that we could help in preventing in
                reduction of ice-burgs, being caused by Global Warming, which
                would be the worst disaster , if happened ever.
              </p>
              <p>
                <b>Shri M L Parayaparan Awareness Club: </b>In this group ,
                awareness for plantation / Global warming / sagrigation of
                garbage from initial stage etc , through school., colleges and
                with the help of RWA will be done.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div>
              <img src={image2} width="100%" alt="pic" />
            </div>
          </div>
          <div className="col-md-8 mb-5">
            <div>
              <h4 className="mb-2" style={{ color: "#00C851" }}>
                RURAL COMPUTER EDUCATION
              </h4>
              <p>
                <b>
                  Smt Sharda Institute Of Computer Education for Rural
                  Development ( SICERD) :
                </b>
                In this group, software and hardware related education will be
                given to the children, who belongs to below poverty line and
                working in some area ( under age). This knowledge will be useful
                for office usage / practical use).
              </p>
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
                MEDICAL HELPS (CANCER AND OTHER PATIENTS SUFFERING FROM
                LARYNGECTOMEE )
              </h4>
              <p>
                <b>Laryngectomy Patient Care Group: </b>In this group, below
                poverty line patients requiring medical / surgical treatment
                will be given financial help for the treatment free of cost. We
                would like to improve our mediclaim reimbursement poilicies,
                sothat any one can avail it more easily and effectively. Contact
                Head Office at 22131125
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div>
              <img src={image4} width="100%" alt="pic" />
            </div>
          </div>
          <div className="col-md-8 mb-5">
            <div>
              <h4 className="mb-2" style={{ color: "#00C851" }}>
                TRAFFIC SENSE
              </h4>
              <p>
                <b>Traffic Awareness Group:</b> In this group we would like to
                work with the students of school, colleges, beggers from red
                lights and involve/ aware them for on holding playcards for
                awareness by paying them some amount , sothat they can get out
                of the begging process. We welcome slogans on Traffic Sense from
                everyone . We also like to invite local industrialists, schools,
                RWA's to participate in such awareness programme, as traffic is
                becoming a problem for everyone, and if we think, many time
                JAM's Occurs- JUST for Nothing.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div>
              <img src={image5} width="100%" alt="pic" />
            </div>
          </div>
          <div className="col-md-8 mb-5">
            <div>
              <h4 className="mb-2" style={{ color: "#00C851" }}>
                YAMUNA / RIVERS / DRAIN CLEANING / TREATMENT- AWARENESS
              </h4>
              <p>
                We’ll take up drains step by step and give natural bacteria
                treatment to the garbage/sludge, to decompose it into mineral
                ash, water and carbon-di-oxide with specifically selected
                natural bacteria and enzymes to environment safer and then after
                divert it the drain into river. It also can be used for drinking
                water plant. Provisioning of small treatment plant on yamuna
                river bank and a collection point before the yamuna bridge,
                Collection of Puja Samagree and drain out in the river after
                treating it to decompose in to mineral ash, water and
                carbon-di-oxide, thereby keeping hindu community beliefs and
                preventing river pollution.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div>
              <img src={image6} width="100%" alt="pic" />
            </div>
          </div>
          <div className="col-md-8 mb-5">
            <div>
              <h4 className="mb-2" style={{ color: "#00C851" }}>
                LEPROSY/ NEEDY PEOPLE HELP
              </h4>
              <p>
                We will help leprosy societies, which needs shelter / food/
                opportunity to work. And will also help them in
                build/extend/construct their houses, sothat more number of
                person/ family in those ashrams, can be accommodated.
                Provisioning of lands for such constructions through proper
                channel / approval from concerned authorities. Thus the number
                of such beggers wondering on red lights crossing , mandirs etc
                can be reduced, which may otherwise lead to criminal activities.
                We’ll train them for low-tech jobs in their ashram or other
                working complex as per their ability and make them an active
                part of a project, sothat they can earn their livelihood without
                begging/living a disgraceful life. We’ll help them in operating
                their whole administration also.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div>
              <img src={image7} width="100%" alt="pic" />
            </div>
          </div>
          <div className="col-md-8 mb-5">
            <div>
              <h4 className="mb-2" style={{ color: "#00C851" }}>
                COWS SHELTER AND FEEDING MANAGEMENT
              </h4>
              <p>
                We’ll observe, check and care the cows moving around the roads
                and in different areas, causing accidents and many times roaming
                here & there with injuries. We’ll help them in sending in
                Gow-Shallas in different areas. And also help them in getting
                food and shelter where they can be protected from cold / hot/
                rainy weathers. We also wish to appoint / take help from some
                veterinary doctors to treat them free of cost.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default AimAndObjective;
