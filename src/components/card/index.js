import {
  Button,
  Card,
  Dropdown,
  FormControl,
  Image,
  InputGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import ButtonComponent from "../button";
import Skeleton from "react-skeleton-loader";
function CardView(props) {
  const [data] = useState(props.data);
  return (
    <Card style={{ width: "20rem", height: "13rem" }}>
      <Card.Body>
        <div className="container">
          <div className="row">
            <div className="col-3 pl-0">
              {data.profile_url ? (
                <Image
                  height={60}
                  width={60}
                  src={data.profile_url}
                  roundedCircle
                />
              ) : (
                <Skeleton width={90} />
              )}
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                  {data.name || <Skeleton width={20} />}
                </div>
                <div className="col offset-1 bold font-size-12 background-status">
                  {data.status || <Skeleton width={20} />}
                </div>
                {data.year_experience ? (
                  <div className="col-12 bold font-size-12">
                    {data.year_experience} year exp
                  </div>
                ) : (
                  <div className="col-12 bold font-size-12">
                    <Skeleton />
                  </div>
                )}
              </div>
              {data.about_experience ? (
                <div className="font-size-12">
                  {data.about_experience.substring(0, 75) + "..." }
                </div>
              ) : (
                <div className="font-size-12">
                  <Skeleton count={3} />
                </div>
              )}

              <div className="font-size-12 bold">
                {data.graduate || <Skeleton />}
              </div>
              <div className="font-size-12 bold">
                {data.age || <Skeleton />},{" "}
                {data.gender || <Skeleton width={20} />}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col offset-3 ">
            <div className="row mt-1">
              <div className="col-1 pl-4">
                <FontAwesomeIcon icon={faHeadphones} />
              </div>
              <div className="col">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
          <div className="col">
            {/* <Button className="button remove-border" variant="outline-primary">Invite</Button> */}
            <ButtonComponent
              className="button remove-border"
              variant="outline-primary"
            >
              Invite
            </ButtonComponent>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default CardView;
