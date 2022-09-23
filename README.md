# OBrien-Social-Network

# User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

# Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

# Description

This application is a back-end for a social media service. On the social media service users will be able to post "thoughts" on their profile, add friends, and react to other user's thoughts. The database used for this project is MongoDB. Both users and Thoughts are their own models. Reactions are subdocuments of thoughts.

Users of this back end will be able to create, view, edit, and delete users. This back end can also create, edit, update, and delete thoughts. Additionally, the user can create and delete reactions to thoughts.

# Github:

https://github.com/Obrienjames34/OBrien-Social-Network

# Video link:

https://drive.google.com/file/d/1dQAeVmN567mHsscc65QetOd-zB7Bj24O/view
