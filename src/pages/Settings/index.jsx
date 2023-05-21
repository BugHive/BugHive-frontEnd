import React, { useState } from "react";
import {
  BetweenBox,
  Box,
  Button,
  Input,
  LabelAndInput,
  MyInput,
  Settings,
  Span,
  Title,
} from "./style";
import useTheme from "../../hooks/useTheme";

function Index() {
  const [readOnly, setReadOnly] = useState(true);

  const edit = () => {
    setReadOnly(false);
  };

  const { toggleTheme } = useTheme();

  return (
    <Settings>
      <Box>
        <Title>General</Title>
        <BetweenBox>
          <Span>Clearing Bug Store</Span>
          <Button>Clear Store</Button>
        </BetweenBox>

        <BetweenBox>
          <Span>Dark Mode</Span>
          <Span id='toggle'>
            <label className='switch'>
              <input type='checkbox' onClick={toggleTheme} />
              <span className='slider round'></span>
            </label>
          </Span>
        </BetweenBox>
      </Box>

      <Box>
        <Title>Account</Title>
        <LabelAndInput>
          <Span>Username</Span>
          <Input style={{ backgroundColor: readOnly ? "" : "lightgray" }}>
            <MyInput
              placeholder='Mohammed'
              type={"text"}
              readOnly={readOnly}
              onBlur={() => {
                setReadOnly(true);
              }}
            />
            <Span onClick={edit}>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 24 24'
                height='2em'
                width='1.5em'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z'></path>
              </svg>
            </Span>
          </Input>
        </LabelAndInput>

        <LabelAndInput>
          <Span>Email</Span>
          <Input style={{ backgroundColor: readOnly ? "" : "lightgray" }}>
            <MyInput
              placeholder='Mohammed@test.com'
              type={"email"}
              readOnly={readOnly}
              onBlur={() => {
                setReadOnly(true);
              }}
            />
            <Span onClick={edit}>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 24 24'
                height='2em'
                width='1.5em'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z'></path>
              </svg>
            </Span>
          </Input>
        </LabelAndInput>

        <Box>
          <Span>Import & Export Data</Span>
          <Span>
            <Button>Import</Button>
            <Button>Export</Button>
          </Span>
        </Box>
      </Box>

      <Box>
        <Title>Security</Title>
        <Span>
          <Span>Password</Span>
          <Button id='password'>Change Password</Button>
        </Span>
      </Box>
    </Settings>
  );
}

export default Index;
