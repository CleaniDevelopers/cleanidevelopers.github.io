'use client';
import LandigPageScreen from "@/components/screens/landing-page/landing-page.screen";
import MainPage from "@/components/screens/main-page/main-page.screen";

import { useEffect } from "react";

export default function Home() {
  useEffect((): void => {
    const M = require('materialize-css')
    const jQuery = require('jquery')
    const initPushpin = async () => {
      jQuery('.pushpin').each(() => {
        var _this = jQuery();
        var _target = jQuery('#' + jQuery().attr('data-target'));
        M.Pushpin.init(_this, {
          top: _target?.offset()?.top || 0,
          bottom: (_target?.offset()?.top || 0) + (_target?.outerHeight() || 0) - (_this.height() || 0)
        });
      });
    }
    initPushpin();
  })

  return (
    <>
      <LandigPageScreen />
      <MainPage />
    </>
  );
}
