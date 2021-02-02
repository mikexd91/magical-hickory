import React from "react";
import _ from "lodash";
import styled from "styled-components";
import { withPrefix } from "../utils";
import CtaButtons from "./CtaButtons";

const OuterDiv = styled.div`
  background-color: #006e74;
  margin-bottom: 40px;
`;

const BannerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #006e74;
  margin: auto;
  padding: 0 50px;
  max-width: 1024px;
  @media only screen and (max-width: 801px) {
    flex-wrap: wrap;
    height: 580px;
    padding: 0 25px;
  }
`;

const InfoboxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #006e74;
  width: 100%;
  height: 400px;
  padding-right: 20px;
  .banner-page-title {
    color: white;
    font-weight: 800;
    font-size: 12px;
    line-height: 24px;
    padding-bottom: 10px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: "fort-bold";
  }

  .banner-title {
    color: white;
    font-size: 42px;
    font-weight: 300;
    letter-spacing: normal;
    line-height: 1.11;
    font-size: 2.25rem;
  }
  @media only screen and (max-width: 801px) {
    height: 200px;
    width: 100%;
    .banner-page-title {
      color: white;
      font-weight: 800;
      font-size: 15px;
      padding-top: 60px;
    }
    .banner-title {
      font-size: 30px;
      line-height: 1.11;
      letter-spacing: normal;
    }
  }
`;

const BannerImg = styled.img`
  width: 350px;
  height: 250px;
  position: relative;
  top: 120px;
  left: -20px;
  @media only screen and (max-width: 801px) {
    position: relative;
    top: 80px;
    left: 40px;
    width: 90%;
    height: auto;
  }
`;

export default class SectionHero extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    return (
      <OuterDiv>
        <BannerDiv>
          <InfoboxDiv>
            {_.get(section, "pageTitle", null) && (
              <div className="banner-page-title">
                {_.get(section, "pageTitle", null)}
              </div>
            )}
            {_.get(section, "title", null) && (
              <div className="banner-title">
                {_.get(section, "title", null)}
              </div>
            )}
            {/* <div className="block-copy">
            {markdownify(_.get(section, "content", null))}
          </div> */}
            {_.get(section, "actions", null) && (
              <div className="block-buttons">
                <CtaButtons
                  {...this.props}
                  actions={_.get(section, "actions", null)}
                />
              </div>
            )}
          </InfoboxDiv>
          <div>
            <BannerImg
              src={withPrefix(_.get(section, "image", null))}
              alt={_.get(section, "image_alt", null)}
            />
          </div>
        </BannerDiv>
      </OuterDiv>

      // <section
      //   id={_.get(section, "section_id", null)}
      //   className="section-hero block hero-block bg-accent outer"
      // >

      /* <div className="inner">
          <div className="grid">
            {_.get(section, "image", null) && (
              <div className="cell block-preview">
                <img
                  src={withPrefix(_.get(section, "image", null))}
                  alt={_.get(section, "image_alt", null)}
                />
              </div>
            )}
            <div className="cell block-content">
              {_.get(section, "title", null) && (
                <h2 className="block-title ">
                  {_.get(section, "title", null)}
                </h2>
              )}
              <div className="block-copy">
                {markdownify(_.get(section, "content", null))}
              </div>
              {_.get(section, "actions", null) && (
                <div className="block-buttons">
                  <CtaButtons
                    {...this.props}
                    actions={_.get(section, "actions", null)}
                  />
                </div>
              )}
            </div>
          </div>
        </div> */
      // </section>

      //   <div className="hero-image">

      // </div>
    );
  }
}