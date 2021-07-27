import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory();
  
    function addMeetupHandler(meetupData) {
    fetch( // javascript function to send a request
      "https://react-course-c007b-default-rtdb.firebaseio.com/meetups.json",
      {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: {
              'Content-Type': 'application/json'
          }
      }
    )
    .then(() => {
        history.replace('/');   // Navigate away from page after request returns
    }); 


  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
