import React from 'react';
import Banner from '../components/Banner';

export default {
  title: 'Banner',
  component: Banner,
};

export const bannerWithoutTitle = () => <Banner />;
bannerWithoutTitle.story = {
  name: 'Banner没有title',
};

export const bannerWithTitle = () => <Banner title='你好世界'/>;
bannerWithTitle.story = {
  name: 'Banner有title',
};
