# Twitter Clone - Frontend

[![Netlify Status](https://api.netlify.com/api/v1/badges/c9d04c4d-788b-45f1-9477-7cdc22982721/deploy-status)](https://app.netlify.com/sites/twitterclone22/deploys)

Built with React + Styled Components.
If you are looking for the backend repo, it lives here [backend](https://github.com/manikandanraji/twitter-clone-backend).

[Check out the deployed site](https://twitterclone22.netlify.com)

# The Stack

## Frontend

1. Frontend - Our beloved React
2. State Management - ApolloClient (requests, updating UI, caching)
3. Styling - Styled Components
4. Routing - React Router
5. Notifications - React Toastify
6. Popups- Reactjs popup

## Backend

1. Prisma - provides data modelling and a nice set of CRUD APIs to work with
2. GraphQLServer - graphql-yoga
3. Authentication - JWT
4. Image upload - Cloudinary

# You can do these things

- Login / Signup
- New Tweet
- Like
- Retweet
- Comment
- View Profile
- Edit Profile
- Search by users, tags, people

# How to setup locally

- Create a .env file at the root directory
- Make sure you have these variables setup

```js
REACT_APP_DEV=DEV_ENDPOINT
REACT_APP_PROD=PRODUCTION_ENDPOINT
REACT_APP_CLOUDINARY_URL=https://api.cloudinary.com/v1_1/YOURACCOUNT/image/upload
```

- Then run <code>npm install && npm start</code> to see the twitter clone in action.

# Look at the UI

## Dark Mode

![Dark](screenshots/twitter_clone_frontend_dark.png)

## Light Mode

![Light](screenshots/twitter_clone_frontend_light.png)

## Mobile Layout

![Mobile](screenshots/mobile_layout.png)

# TODO

- Real-time notifications using GraphQL subscriptions
- Bookmark tweets
- Show retweets on user profile
- Show trending tags
- Better mobile support
- Add OLED theme
