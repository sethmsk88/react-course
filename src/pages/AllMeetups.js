import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // https://cpmr-islands.org/wp-content/uploads/sites/4/2019/07/Test-Logo-Small-Black-transparent-1.png

  useEffect(() => {
    // setting IsLoading to true here, for when the affect runs again.
    // In this case, it won't be running again, but it is good practice.
    setIsLoading(true);

    fetch(
      // GET request
      "https://react-course-c007b-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        // fetch returns a response
        return response.json(); // json() returns a response too!eeee
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]  // using the spread operator to copy all of the key-value pairs from the data object into this object
          };

          meetups.push(meetup);
        }

        setIsLoading(false); // We now have the data, so no longer in loading state
        setLoadedMeetups(meetups);
      });
  }, []); // the dependencies array for the useEffect function should contain all external dependencies. In thi case, we have none.

  if (isLoading) {
    return (
      <section>
        <h1>All Meetups</h1>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
