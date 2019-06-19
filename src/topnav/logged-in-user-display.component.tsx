import React from "react";

export default function LoggedInUserDisplay(props: LoggedInUserDisplayProps) {
  const [currentSession, setCurrentSession] = React.useState(null);

  React.useEffect(() => {
    var requestString = `/openmrs/ws/rest/v1/session`;

    fetch(requestString)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw Error(
            `Cannot fetch session - server responded with '${resp.status}'`
          );
        }
      })
      .then(resp => {
        setCurrentSession(resp);
      });
  }, []);

  return (
    <a href="/">
      {currentSession && currentSession.user ? (
        <span>{currentSession.user.display}</span>
      ) : (
        <span>-</span>
      )}
    </a>
  );
}

type LoggedInUserDisplayProps = {};
