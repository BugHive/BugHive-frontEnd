import React from "react";

//style
import { Box, SideBar, SideLink } from "./style";
import { Link } from "react-router-dom";

function index() {
  const logout = () => {
    localStorage.clear();
  };

  return (
    <SideBar>
      <Box>
        <SideLink to={"/"}>
          <svg
            stroke='currentColor'
            fill='black'
            strokeWidth='0'
            viewBox='0 0 448 512'
            height='1.8em'
            width='1.3em'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z'></path>
          </svg>
          Saved Bugs
        </SideLink>

        <SideLink to={"/unsaved-bugs"}>
          <svg
            stroke='currentColor'
            fill='black'
            strokeWidth='0'
            viewBox='0 0 16 16'
            height='5em'
            width='1.6em'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z'></path>
          </svg>
          Unsaved Entry
        </SideLink>

        <SideLink to={"/all-history"}>
          <svg
            stroke='currentColor'
            fill='black'
            strokeWidth='0'
            viewBox='0 0 512 512'
            height='2em'
            width='1.5em'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z'></path>
          </svg>
          All History
        </SideLink>

        <SideLink to={"/tags"}>
          <svg
            stroke='currentColor'
            fill='black'
            strokeWidth='0'
            viewBox='0 0 16 16'
            height='2em'
            width='1.5em'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z'></path>
            <path d='M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z'></path>
          </svg>
          Tags
        </SideLink>

        <SideLink to={"/settings"}>
          <svg
            stroke='currentColor'
            fill='black'
            strokeWidth='0'
            viewBox='0 0 512 512'
            height='2em'
            width='1.5em'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z'></path>
          </svg>
          Settings
        </SideLink>

        <Link to={"/login"}>
          <button id='logout' onClick={logout}>
            <svg
              stroke='currentColor'
              fill='black'
              strokeWidth='0'
              viewBox='0 0 24 24'
              height='2em'
              width='1.5em'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M16 13v-2H7V8l-5 4 5 4v-3z'></path>
              <path d='M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z'></path>
            </svg>
            Logout
          </button>
        </Link>
      </Box>
    </SideBar>
  );
}

export default index;
