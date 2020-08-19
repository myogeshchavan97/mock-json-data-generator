const express = require('express');
const faker = require('faker');
const _ = require('lodash');

const app = express();

app.use(express.static('public'));

app.get('/address', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const address = faker.address;
      return {
        country: address.country(),
        city: address.city(),
        state: address.state(),
        zipCode: address.zipCode(),
        latitude: address.latitude(),
        longitude: address.longitude()
      };
    })
  );
});

app.get('/products', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const commerce = faker.commerce;
      return {
        product: commerce.product(),
        price: commerce.price(),
        color: commerce.color()
      };
    })
  );
});

app.get('/images', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const image = faker.image;
      return {
        image: image.image(),
        avatar: image.avatar()
      };
    })
  );
});

app.get('/random', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const random = faker.random;
      return {
        word: random.word(),
        words: random.words()
      };
    })
  );
});

app.get('/users', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const user = faker.name;
      return {
        firstName: user.firstName(),
        lastName: user.lastName(),
        jobTitle: user.jobTitle()
      };
    })
  );
});

app.get('/lorem', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const lorem = faker.lorem;
      return {
        paragraph: lorem.paragraph(),
        sentence: lorem.sentence(),
        paragraphs: lorem.paragraphs()
      };
    })
  );
});

app.get('/userCard', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const helpers = faker.helpers;
      return {
        userCard: helpers.userCard()
      };
    })
  );
});

app.get('/createCard', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const helpers = faker.helpers;
      return {
        createCard: helpers.createCard()
      };
    })
  );
});

app.listen(3030, () => {
  console.log('server started on port 3030');
});
