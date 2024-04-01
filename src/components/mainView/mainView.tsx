import React from 'react';
import { Container, PageHeading } from './mainViewStyles';
import { Search, LocationMap } from '../';

export default function MainView() {
  return (
    <Container>
      <PageHeading>Location Search</PageHeading>
      <Search />
      <LocationMap />
    </Container>
  );
}
