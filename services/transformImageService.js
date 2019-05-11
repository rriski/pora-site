// Uses storyblok's Image Service (https://www.storyblok.com/docs/image-service)

export function transformImage(image, option) {
  const imageService = 'https://img2.storyblok.com/'
  const path = image.replace('//a.storyblok.com', '')
  return imageService + option + path
}
