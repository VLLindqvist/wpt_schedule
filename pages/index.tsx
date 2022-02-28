import type { NextPage } from "next";
import Typography from "@material-ui/core/Typography";

import Layout from "Components/Layout";
import Logo from "Components/Logo";
import Button from "Components/Buttons/Button";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="h-72 mb-16" role="img">
        <Logo />
      </div>

      <Typography variant="h1" color="textSecondary" align="center">
        World Padel Tour 2022 Calendar Subscription
      </Typography>
      <div className="flex justify-center">
        <div className="bg-white p-6 mt-10 max-w-lg shadow-gray-300 shadow-sm rounded-sm">
          <Typography variant="body1">
            Press either of the buttons below to subscribe to the calendar of the 2022 World Padel Tour tournament
            dates. The calendar will be updated throughout the tour.
          </Typography>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-8">
        <Button
          variant="outlined"
          target="_blank"
          rel="noopener noreferrer"
          href="https://calendar.google.com/calendar/render?cid=https://calendar.google.com/calendar/ical/4geasiegvu51gpg94udh9sa2ac%40group.calendar.google.com/public/basic.ics"
        >
          Android/iOS
        </Button>

        <Button
          variant="outlined"
          target="_blank"
          rel="noopener noreferrer"
          href="webcal://calendar.google.com/calendar/ical/4geasiegvu51gpg94udh9sa2ac%40group.calendar.google.com/public/basic.ics"
        >
          WebCal (iOS/MacOS)
        </Button>
      </div>
    </Layout>
  );
};

export default Home;
