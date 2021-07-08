const faker = require('faker')
module.exports = () => {
  const data = { blogs : [] }
  for(let i=1; i<= 50; i++) {
    data.blogs.push({
      id:i,
      head: faker.name.jobTitle(),
      title: faker.name.title(),
      image: faker.image.image(),
      subTitle: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
    })
  }
  return data
}