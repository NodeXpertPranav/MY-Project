module.exports = {

    'secret': 'secretmessage',
    'database': 'mongodb://localhost/test',
    permission : [
      { user: ['GET'],
        user2: ['PUT']
     }
    ]
};
