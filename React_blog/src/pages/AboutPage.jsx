import React from 'react';
import PageTemplate from '../components/common/Main/';
import { Profile } from '../components/list/Profile';
import { ProfileModal } from '../components/list/Profile';
const AboutPage = () => {
  return (
    <PageTemplate>
      <Profile />
      <ProfileModal />
    </PageTemplate>
  );
};

export default AboutPage;
