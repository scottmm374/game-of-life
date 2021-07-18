import React from 'react';
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';

const PresetMenu = (props) => {
  return (
    <Container className='d-flex justify-content-start'>
      <DropdownButton id='preset-dropdown' title='Choose a Preset'>
        <Dropdown.Item
          as='button'
          className='preset-button'
          onClick={props.handlePresets}
          value='thunderbird'
        >
          {' '}
          Thunderbird
        </Dropdown.Item>

        <Dropdown.Item
          as='button'
          className='preset-button'
          onClick={props.handlePresets}
          value='quad_thunderbird'
        >
          {' '}
          Quad Thunderbird
        </Dropdown.Item>

        <Dropdown.Item
          as='button'
          className='preset-button'
          onClick={props.handlePresets}
          value='infinite'
        >
          {' '}
          Infinite
        </Dropdown.Item>

        <Dropdown.Item
          as='button'
          className='preset-button'
          onClick={props.handlePresets}
          value='gospers_glider_gun'
        >
          {' '}
          Gospers Glider Gun
        </Dropdown.Item>

        <Dropdown.Item
          as='button'
          className='preset-button'
          onClick={props.handlePresets}
          value='mash_up'
        >
          {' '}
          Mash Up
        </Dropdown.Item>

        <Dropdown.Item
          as='button'
          className='preset-button'
          onClick={props.handlePresets}
          value='random'
        >
          {' '}
          Random
        </Dropdown.Item>
      </DropdownButton>
    </Container>
  );
};

export default PresetMenu;
