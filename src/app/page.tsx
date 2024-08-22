"use client"
import { useEffect } from "react";

import LandigPageScreen from "@/components/screens/landing-page/landing-page.screen";
import MainPage from "@/components/screens/main-page/main-page.screen";
import jQuery from "jquery";
import M from "materialize-css";

export default function Home() {
  let navBarHidden: boolean = false
  const initPushpin = async () => {
    M.Pushpin.init(jQuery('.pushpin'));
    jQuery('.pushpin').each(function (element) {
      var _this = jQuery(this);
      var _target = jQuery('#' + jQuery(this).attr('data-target'));

      console.log(_target?.offset());

      M.Pushpin.init(_this, {
        top: _target?.offset()?.top || 0,
        bottom: (_target?.offset()?.top || 0) + (_target?.outerHeight() || 0) - (_this.height() || 0)
      });
    });
  }
  useEffect((): void => {
    initPushpin();
  }, [])

  return (
    <>
      <LandigPageScreen />
      <MainPage />
    </>
  );
}
