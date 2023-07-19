exports.logout = async (request, response) => {
    try {
        request.session.destroy((err) => {
          if (err) {
            console.error('Error destroying session:', err);
            response.status(500).send('An error occurred while logging out.');
          } else {
            response.clearCookie('session-id'); 
            console.log("successful logout")
            response.sendStatus(200);
          }
        });
      } catch (error) {
        console.error('Error logging out:', error);
        response.status(500).send('An error occurred while logging out.');
      }
    };