import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import * as color from '../config/colorPalette';

export default function Navbar(): any {
  const [homePage, setHomePage] = useState<string>(
    color.navButtonSectionSelected
  );
  const [homeSelection, setHomeSelection] = useState<string>(
    color.navButtonSelected
  );
  const [searchPage, setSearchPage] = useState<string>(color.navButtonSection);
  const [searchSelection, setSearchSelection] = useState<string>(
    color.navButton
  );
  const [calendarPage, setCalendarPage] = useState<string>(
    color.navButtonSection
  );
  const [calendarSelection, setCalendarSelection] = useState<string>(
    color.navButton
  );
  const [profilePage, setProfilePage] = useState<string>(
    color.navButtonSection
  );
  const [profileSelection, setProfileSelection] = useState<string>(
    color.navButton
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      height: '7%',
      width: '90%',
      bottom: 0,
      left: 0,
      borderRadius: 30,
      backgroundColor: color.navBackgroundColor
    },
    main: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    },
    homePage: {
      height: 60,
      width: 60,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: homePage
    },
    searchPage: {
      height: 60,
      width: 60,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: searchPage
    },
    calendarPage: {
      height: 60,
      width: 60,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: calendarPage
    },
    profilePage: {
      height: 60,
      width: 60,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: profilePage
    }
  });

  const selectHome = (): void => {
    setHomePage(color.navButtonSectionSelected);
    setSearchPage(color.navButtonSection);
    setCalendarPage(color.navButtonSection);
    setProfilePage(color.navButtonSection);
    setHomeSelection(color.navButtonSelected);
    setSearchSelection(color.navButton);
    setCalendarSelection(color.navButton);
    setProfileSelection(color.navButton);
  };

  const selectSearch = (): void => {
    setHomePage(color.navButtonSection);
    setSearchPage(color.navButtonSectionSelected);
    setCalendarPage(color.navButtonSection);
    setProfilePage(color.navButtonSection);
    setHomeSelection(color.navButton);
    setSearchSelection(color.navButtonSelected);
    setCalendarSelection(color.navButton);
    setProfileSelection(color.navButton);
  };

  const selectCalendar = (): void => {
    setHomePage(color.navButtonSection);
    setSearchPage(color.navButtonSection);
    setCalendarPage(color.navButtonSectionSelected);
    setProfilePage(color.navButtonSection);
    setHomeSelection(color.navButton);
    setSearchSelection(color.navButton);
    setCalendarSelection(color.navButtonSelected);
    setProfileSelection(color.navButton);
  };

  const selectProfile = (): void => {
    setHomePage(color.navButtonSection);
    setSearchPage(color.navButtonSection);
    setCalendarPage(color.navButtonSection);
    setProfilePage(color.navButtonSectionSelected);
    setHomeSelection(color.navButton);
    setSearchSelection(color.navButton);
    setCalendarSelection(color.navButton);
    setProfileSelection(color.navButtonSelected);
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Link href="/" onPress={selectHome}>
          <View style={styles.homePage}>
            <FontAwesome5 name="home" size={50} color={homeSelection} />
          </View>
        </Link>
        <Link href="/pageSearch" onPress={selectSearch}>
          <View style={styles.searchPage}>
            <FontAwesome5 name="capsules" size={50} color={searchSelection} />
          </View>
        </Link>
        <Link href="/pageCalendar" onPress={selectCalendar}>
          <View style={styles.calendarPage}>
            <FontAwesome5
              name="calendar-alt"
              size={50}
              color={calendarSelection}
            />
          </View>
        </Link>
        <Link href="/pageProfile" onPress={selectProfile}>
          <View style={styles.profilePage}>
            <FontAwesome5 name="grin-alt" size={50} color={profileSelection} />
          </View>
        </Link>
      </View>
    </View>
  );
}
