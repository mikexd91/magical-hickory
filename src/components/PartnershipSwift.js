import React from "react";
import _ from "lodash";
import styled from "styled-components";
import { htmlToReact, withPrefix } from "../utils";

const BgDiv = styled.section`
    .partnershipswift-cell{
        box-sizing: border-box;
        padding-left: 0.8333rem;
        padding-right: 0.8333rem;
        position: relative;
        flex-basis: 25%;
        margin-bottom: 120px;
    }
    .grid{
      .partnershipswift-avatar{
          width: 70%;
        }
    }
  &.bg-F7F7F1{
    background: #F7F7F1;
  }
  &.partnershipswift-block{
      text-align: left;
      padding-top: 80px;
     
    .partnershipswift-block{
      text-align: left;
      padding-top: 40px;
      margin-bottom: 90px;
    }
    .block-subtitle{
        color: #231f20;
        font-weight: 800;
        font-size: 12px;
        line-height: 24px;
    }
    .block-title{
        margin: 0 0 0.25em;
        font-weight: 900;
        font-size: 30px;
        line-height: 24px;
    }
    .block-title:last-child{
        margin-bottom: 1em;
    }
  }
`;

export default class PartnershipSwift extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    let grid_items = _.get(section,'grid_items',null);
    return (
      <BgDiv
        id={_.get(section, "section_id", null)}
        className={
          "block partnershipswift-block bg-" +
          _.get(section, "background", null) +
          " outer"
        }
      >
        <div className="partnershipswift-block">
          {_.get(section, "subtitle_1", null) && (
            <p className="block-subtitle">
              {htmlToReact(_.get(section, "subtitle_1", null))}
            </p>
          )}
          {_.get(section, "title", null) && (
            <h2 className="block-title">{_.get(section, "title", null)}</h2>
          )}
        </div>
        {_.get(section, "grid_items", null) && (
          // <div className="">
          <div className="grid">
            {/* use .map to loop through */}
            {_.map(_.get(section, "grid_items", null), (grid_item, review_idx) => (
              <div className="partnershipswift-cell">
                  
                {_.get(grid_item, "image", null) && (
                  <img
                    className="partnershipswift-avatar"
                    src={withPrefix(_.get(grid_item, "image", null))}
                    alt={_.get(grid_item, "image_alt", null)}
                  />
                )}

                {/* 
                <div className="industry-footer">
                  <p className="industry-text">
                    {htmlToReact(_.get(review, "title", null))}
                  </p>
                  <p className="industry-subtitle">
                    {htmlToReact(_.get(review, "subtitle", null))}
                  </p>
                </div> */}
              </div>
            ))}
            {/* </div> */}
          </div>
        )}
      </BgDiv>
    );
  }
}
