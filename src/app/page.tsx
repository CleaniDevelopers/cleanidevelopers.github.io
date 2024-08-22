'use client';
import LandigPageScreen from "@/components/screens/landing-page/landing-page.screen";
import MainPage from "@/components/screens/main-page/main-page.screen";
import M from "materialize-css";
import { useEffect } from "react";

export default function Home() {
  useEffect((): void => {
    if (typeof window === "object") {
      const jQuery = require('jquery')
      const initPushpin = async () => {
        M.Pushpin.init(jQuery('.pushpin'));
        jQuery('.pushpin').each(() => {
          var _this = jQuery(this);
          var _target = jQuery('#' + jQuery(this).attr('data-target'));
          M.Pushpin.init(_this, {
            top: _target?.offset()?.top || 0,
            bottom: (_target?.offset()?.top || 0) + (_target?.outerHeight() || 0) - (_this.height() || 0)
          });
        });
      }
      initPushpin();
    }
  })

  return (
    <>
      <LandigPageScreen />
      <MainPage />
    </>
  );
}
