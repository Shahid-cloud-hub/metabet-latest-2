import React, { useContext, useEffect } from "react";
import { Container } from "./Sidebar.style";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

import { first_array, sec_array } from "../../JasonData/Sidebar_routes";
import { Context } from "../../Context";

const SidebarItems = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        {props.curr_img && (
          <img
            src={props.curr_img}
            alt={props.alt_Title}
            style={{ maxWidth: props.imgMaxWidth }}
          />
        )}
        {props.title && <span>{props.title}</span>}
      </div>
    </div>
  );
};
const SidebarItems1 = (props) => {
  const active1 = props.active1 ? "active1" : "";
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active1}`}>
        <img src={active1 ? props.white : props.icon} alt="images" />
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const { setItems } = useContext(Context);

  const activeItems = first_array.findIndex(
    (item) => item.route === location.pathname
  );
  const activeSecItems = sec_array.findIndex(
    (item) => item.route === location.pathname
  );

  useEffect(() => {}, [location, activeItems, activeSecItems]);

  const callback = () => {
    setItems((prevState) => ({
      ...prevState,
      betMessage: false,
      airDropBetMessage: false,
      getRender: true,
    }));
  };

  return (
    <>
      <Container>
        <div className="wrapper">
          <div className="wrapper-link">
            {first_array.map((item, index) => (
              <Link to={item.route} key={index} onClick={callback}>
                <SidebarItems
                  title={item.display_name}
                  active={index === activeItems}
                />
              </Link>
            ))}
          </div>
          <hr />
          {/* <div className="wrapper-span">
            <NavLink to="/">
              <span>All Events</span>
            </NavLink>
          </div> */}
          <div className="wrapper-link-1">
            {sec_array.map((item, index) => (
              <Link to={item.route} key={index} onClick={callback}>
                <SidebarItems1
                  icon={item?.icon}
                  white={item?.white}
                  title={item.display_name}
                  active1={index === activeSecItems}
                />
              </Link>
            ))}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Sidebar;
