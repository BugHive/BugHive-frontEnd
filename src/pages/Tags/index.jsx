import React from "react";
import styled from "styled-components";
import Tag from "../../components/Tag";
import BugEntry from "../../components/BugEntry";

export default function Tags() {
  const Container = styled.div`
    padding: 2rem;
    .tags {
      display: flex;
      gap: 2rem;

      button {
        height: 2rem;
        width: 8rem;
        background-color: ${(props) => props.theme.palette.lightYellow};
        border: none;
        font-weight: bold;
        margin-top: 2rem;
      }
    }
  `;
  const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Mark", age: 35 },
  ];

  return (
    <Container>
      <h3>Tags Board</h3>
      <div className='tags'>
        <Tag
          name='CPU'
          entries={people.map((item) => {
            return <BugEntry name={item.name} date={item.age} />;
          })}
        />
        <Tag
          name='CPU'
          entries={people.map((item) => {
            return <BugEntry name={item.name} date={item.age} />;
          })}
        />
        <Tag
          name='CPU'
          entries={people.map((item) => {
            return <BugEntry name={item.name} date={item.age} />;
          })}
        />
        <button>Add new Entry</button>
      </div>
    </Container>
  );
}
