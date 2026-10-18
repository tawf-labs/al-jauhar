import React from 'react';
import { LangProvider } from './i18n/LangContext';
import Layout from './components/Layout';
import HeroSection from './components/landing/HeroSection';
import PrayerTimesSection from './components/landing/PrayerTimesSection';
import MissionSection from './components/landing/MissionSection';
import PlatformsSection from './components/landing/PlatformsSection';
import ScheduleSection from './components/landing/ScheduleSection';
import GetStartedSection from './components/landing/GetStartedSection';
import LocationSection from './components/landing/LocationSection';
import VerifiedSection from './components/landing/VerifiedSection';
import NightBand from './components/landing/NightBand';

export default function App() {
  return (
    <LangProvider>
      <Layout>
        <HeroSection />
        <PrayerTimesSection />
        <MissionSection />
        <PlatformsSection />
        <ScheduleSection />
        <GetStartedSection />
        <LocationSection />
        <VerifiedSection />
        <NightBand />
      </Layout>
    </LangProvider>
  );
}
