import React from 'react';
import './App.css';


const Person = (props) => {

  const {img, name, job} = props.person;
  const {children} = props;
  const url = `https://via.placeholder.com/${img}`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <h2>{name}</h2>
      <h4>{job}</h4>
      {children}
    </div>
  )
}

const PersonList = () => {

  const people = [
    {
      img:160,
      name: 'mina',
      job: 'developer'
    },
    {
      img:150,
      name: 'amir',
      job: 'designer'
    },{
      img:170,
      name: 'dawood',
      job: 'CEO'
    }
  ]
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      </Person>
      <Person person={people[2]} />
    </section>
  )
}


const App = () => (
  <PersonList />
)

export default App;
