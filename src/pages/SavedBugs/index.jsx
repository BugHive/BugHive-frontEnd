import React from "react";

import { MyLink, NavBar, Saved } from "./style";
import { Outlet } from "react-router-dom";
import AddEntry from "../../components/AddEntryButton";
import { useViewContext } from "../../context/ViewContext";

function Index() {
  const { isRow, changeToCol, changeToRow } = useViewContext();

  return (
    <>
      <Saved>
        <NavBar>
          <div style={{ display: "flex", flexDirection: "row", gap: "12em" }}>
            <MyLink to={"/"}>A-Z</MyLink>
            <MyLink to={"/popular"}>Popular</MyLink>
            <MyLink to={"recently"}>Recently used</MyLink>
          </div>

          <div id='show'>
            <span onClick={changeToRow}>
              <svg
                stroke='currentColor'
                fill={isRow ? "lightgray" : "black"}
                strokeWidth='0'
                viewBox='0 0 15 15'
                height='2em'
                width='1.7em'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M8 2H12.5C12.7761 2 13 2.22386 13 2.5V5H8V2ZM7 5V2H2.5C2.22386 2 2 2.22386 2 2.5V5H7ZM2 6V9H7V6H2ZM8 6H13V9H8V6ZM8 10H13V12.5C13 12.7761 12.7761 13 12.5 13H8V10ZM2 12.5V10H7V13H2.5C2.22386 13 2 12.7761 2 12.5ZM1 2.5C1 1.67157 1.67157 1 2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5Z'
                  fill={isRow ? "lightgary" : "black"}></path>
              </svg>
            </span>
            <span onClick={changeToCol}>
              <svg
                stroke='currentColor'
                fill={isRow ? "black" : "lightgray"}
                strokeWidth='0'
                viewBox='0 0 16 16'
                height='2em'
                width='1.5em'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z'></path>
              </svg>
            </span>
          </div>
        </NavBar>
        <Outlet />
      </Saved>
      <AddEntry />
    </>
  );
}

export default Index;
