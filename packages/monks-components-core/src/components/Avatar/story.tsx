import React from 'react';
import Avatar from '.';

export default {
  title: 'Core/Avatar',
  component: Avatar,
};

export function avatarWithImage() {
  return <Avatar src="https://source.unsplash.com/random/120x120" />;
}
avatarWithImage.story = {
  name: 'Standard avatar with an image',
};

export function avatarLargeWithImage() {
  return (
    <Avatar src="https://source.unsplash.com/random/120x120" size="large" />
  );
}
avatarLargeWithImage.story = {
  name: 'Large avatar with an image',
};

export function avatarWithoutImage() {
  return <Avatar>AD</Avatar>;
}
avatarWithoutImage.story = {
  name: 'Standard avatar without an image',
};

export function avatarLargeWithoutImage() {
  return <Avatar size="large">AD</Avatar>;
}
avatarLargeWithoutImage.story = {
  name: 'Large avatar without an image',
};
