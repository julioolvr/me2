import React from 'react';
import styled from 'styled-components';

import Layout from 'src/components/layout';
import Talk from 'src/components/talk';
import Youtube from 'src/components/youtube';
import Slideshare from 'src/components/slideshare';

const List = styled.ol`
  margin: 0;
  max-width: 640px;
`;

const Talks = () => (
  <Layout horizontallyCentered>
    <List>
      <Talk
        title="Introducción a WebAssembly"
        subtitle={
          <>
            <a href="https://www.meetup.com/Meetup-js/">@Meetup.js Buenos Aires</a>, August 2018
          </>
        }
      >
        <Youtube id="VS4uhnKd67Y" title="Introducción a WebAssembly" />
      </Talk>

      <Talk
        title="GraphQL real-time con Subscriptions"
        subtitle={
          <>
            <a href="https://www.meetup.com/GraphQL-BA/">@GraphQL BA</a>, April 2017
          </>
        }
      >
        <Youtube id="i35IQNQxzS8" title="GraphQL Real Time con Subscriptions" />
      </Talk>

      <Talk
        title="Intro a Ember.js"
        subtitle={
          <>
            <a href="https://www.meetup.com/Meetup-js/">@Meetup.js Buenos Aires</a>, July 2014
          </>
        }
      >
        <Slideshare id="lvkd4A8NRRkD9M" title="Intro a Ember.js" slug="intro-a-emberjs" />
      </Talk>
    </List>
  </Layout>
);

export default Talks;
