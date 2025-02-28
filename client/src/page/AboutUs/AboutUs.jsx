import { Helmet } from "react-helmet";


export default function AboutUs() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n  @font-face {\n  font-style: normal;\n  font-weight: 700;\n  src: local("Jost"), local("Jost Bold"), local("Jost-Bold"),\n    url("../fonts/JostBold.woff2") format("woff2");\n  font-family: Jost;\n  font-display: swap;\n}\n@font-face {\n  font-style: normal;\n  font-weight: 500;\n  src: local("Jost"), local("Jost Medium"), local("Jost-Medium"),\n    url("../fonts/JostMedium.woff2") format("woff2"),\n    url("../fonts/JostMedium.woff") format("woff");\n  font-family: Jost;\n  font-display: swap;\n}\n@font-face {\n  font-style: normal;\n  font-weight: 400;\n  src: local("Jost"), local("Jost Regular"), local("Jost-Regular"),\n    url("../fonts/JostRegular.woff2") format("woff2"),\n    url("../fonts/JostRegular.woff") format("woff");\n  font-family: Jost;\n  font-display: swap;\n}\n:root {\n  --peach: #ffc600;\n  --light-grayish-peach: #fff;\n  --black: #000;\n  --white: #fff;\n  --light-peach: #ffe588;\n  --dark-grey: #fff;\n  --light-grey: #fff;\n  --fluid-typography-100: clamp(1.75rem, calc(1.52rem + 1.17vw), 2.5rem);\n  --fluid-typography-200: clamp(2rem, calc(1.69rem + 1.55vw), 3rem);\n  --space-3xs: clamp(0.63rem, calc(-1.03rem + 8.25vw), 5.94rem);\n  --space-2xs: clamp(1.5rem, calc(1.19rem + 1.55vw), 2.5rem);\n  --space-xs: clamp(1.5rem, calc(0.12rem + 6.89vw), 5.94rem);\n  --space-s: clamp(2.19rem, calc(1.62rem + 2.82vw), 4rem);\n  --space-m: clamp(3.56rem, calc(3.43rem + 0.68vw), 4rem);\n  --space-l: clamp(5rem, calc(3.74rem + 6.31vw), 9.06rem);\n  --space-xl: clamp(7.5rem, calc(6.72rem + 3.88vw), 10rem);\n  --transition-base: 200ms ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    animation-duration: 1ms !important;\n    animation-delay: -1ms !important;\n    animation-iteration-count: 1 !important;\n    transition-delay: 0s !important;\n    transition-duration: 0s !important;\n    background-attachment: initial !important;\n    scroll-behavior: auto !important;\n  }\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  background-repeat: no-repeat;\n  padding: 0;\n}\n\n\n\n.sr-only {\n  position: absolute !important;\n  clip-path: inset(50%) !important;\n  margin: -1px !important;\n  border: 0 !important;\n  padding: 0 !important;\n  width: 1px !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  white-space: nowrap !important;\n}\n\nbody {\n  min-height: 100vh;\n  line-height: 1.625;\n  font-family: Jost, sans-serif;\n  text-rendering: optimizeSpeed;\n}\n\nbody.is-menu-open {\n  overflow: hidden;\n}\n\nbody.is-menu-open::before {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  height: 100vh;\n  content: "";\n}\n\n.font-weight-700 {\n  font-weight: 700;\n}\n\nh1,\nh2,\nh3 {\n  font-weight: 500;\n  color: var(--black);\n}\n\n.heading {\n  font-weight: 500;\n  color: var(--dark-grey);\n}\n\nh1,\n.heading--one {\n  font-size: var(--fluid-typography-200);\n  line-height: 1;\n}\n\nh2,\n.heading--two {\n  font-size: var(--fluid-typography-100);\n  line-height: 1.2;\n  letter-spacing: 0.05em;\n}\n\nh3,\n.heading--three {\n  font-size: 1.25rem;\n  line-height: 1.3;\n  letter-spacing: 0.25em;\n  text-transform: uppercase;\n}\n\np:not([class]),\n[class$="description"] {\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 27.8125rem;\n}\n@media screen and (min-width: 59.375em) {\n  p:not([class]),\n  [class$="description"] {\n    margin-right: initial;\n    margin-left: initial;\n  }\n}\n\np span {\n  display: block;\n}\n\n[tabindex="-1"]:focus {\n  outline: none;\n}\n\n.flow > * + * {\n  margin-top: var(--spacer, var(--space-xl));\n}\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\nsvg {\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n  overflow: hidden;\n}\n\nsvg path {\n  fill: currentColor;\n}\n\nimg,\npicture {\n  display: block;\n  max-width: 100%;\n}\n\nimg {\n  height: auto;\n}\n\n\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n\ntextarea {\n  resize: none;\n}\n\n\nbutton[type] {\n  cursor: pointer;\n}\n\na {\n  color: inherit;\n  letter-spacing: 0.125em;\n  text-decoration-color: transparent;\n}\n\na span {\n  display: block;\n}\n\nbutton[type="button"],\nbutton[type="submit"],\na {\n  text-transform: uppercase;\n}\n\n[inert] {\n  cursor: default;\n  pointer-events: none;\n}\n\n[inert],\n[inert] * {\n  user-select: none;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n[href="#main"] {\n  display: inline-block;\n  position: fixed;\n  top: 3rem;\n  left: 0;\n  transform: translateX(-200%);\n  z-index: 200;\n  background-color: var(--dark-grey);\n  padding: 1em 2em;\n  color: var(--white);\n  font-size: 1.25rem;\n}\n@media (prefers-reduced-motion: no-preference) {\n  [href="#main"] {\n    transition: transform var(--transition-base);\n  }\n}\n\n[href="#main"]:focus,\n[href="#main"]:focus-visible {\n  transform: translate(0);\n  outline: 0.2em solid var(--peach);\n  outline-offset: 0.25em;\n}\n\n/**\n * * INFO: container max-width = 1110 + (padding-left + padding-right)\n */\n.container-about {\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 72.375rem;\n}\n\n.container--padding {\n  padding-right: 1.5rem;\n  padding-left: 1.5rem;\n}\n\n@media screen and (min-width: 42.5em) {\n  .container--padding\\@tiny {\n    padding-right: 1.5rem;\n    padding-left: 1.5rem;\n  }\n}\n\n.card {\n  display: block;\n  overflow: hidden;\n}\n\n.card--rounded {\n  border-radius: 0.9375rem;\n}\n\n@media screen and (min-width: 42.5em) {\n  .card--rounded\\@tiny {\n    border-radius: 0.9375rem;\n  }\n}\n\n.card--peach {\n  background-color: var(--peach);\n  color: var(--white);\n}\n\n.card--light-grayish-peach {\n  background-color: var(--black);\n  color: var(--dark-grey);\n}\n\n.button {\n  display: inline-block;\n  border: none;\n  border-radius: 0.5rem;\n  padding: 1rem 1.5rem;\n  letter-spacing: 0.0625em;\n  text-decoration: none;\n}\n@media (prefers-reduced-motion: no-preference) {\n  .button {\n    transition: background-color var(--transition-base),\n      color var(--transition-base);\n  }\n}\n\n.margin-top-about {\n        margin-top: 20px;\n}\n\n.button--white {\n  background-color: var(--dark-grey);\n  color: var(--black);\n}\n\n.button--peach {\n  background-color: var(--peach);\n  color: var(--white);\n}\n\n@media (hover: none) {\n  .button--peach,\n  .button--white {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n  .button--peach:active,\n  .button--white:active {\n    background-color: var(--light-peach);\n    color: var(--black);\n  }\n}\n@media (-ms-high-contrast: none),\n  (-ms-high-contrast: active),\n  (-moz-touch-enabled: 0),\n  (hover: hover) {\n  .button--peach:hover,\n  .button--white:hover {\n    background-color: var(--light-peach);\n  }\n}\n\n.circle {\n  position: relative;\n}\n\n.circle::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  background-image: url("/about/bg-pattern-small-circle.svg");\n  background-position: top left;\n  width: 100%;\n  height: 100%;\n  content: "";\n}\n\n.circle--rotate-275deg::after {\n  transform: rotate(275deg);\n}\n\n.circle--rotate-90deg::after {\n  transform: rotate(90deg);\n}\n\n@media screen and (min-width: 59.375em) {\n  .wrapper {\n    position: relative;\n    margin-right: auto;\n    margin-left: auto;\n    max-width: 90rem;\n  }\n}\n\n@media screen and (min-width: 59.375em) {\n  .wrapper::after,\n  .wrapper::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    background-image: url("/about/bg-pattern-leaf.svg");\n    width: 100%;\n    height: 100%;\n    content: "";\n  }\n}\n\n.wrapper--home::after,\n.wrapper--home::before {\n  background-position: top 19.375rem left;\n}\n\n.wrapper--home::before {\n  transform: rotate(180deg);\n}\n\n.wrapper--design-page::after {\n  background-position: top 8.4375rem left;\n}\n\n.wrapper--design-page::before {\n  display: none;\n}\n\n.wrapper--contact::after {\n  top: 10rem;\n  background-position: bottom -8.75rem right;\n}\n\n.wrapper--contact::before {\n  display: none;\n}\n\n.wrapper--about::after {\n  background-position: top 20rem left;\n}\n\n.wrapper--about::before {\n  background-position: bottom 57rem right -24.75rem;\n}\n\n\n.hero__card {\n  background-image: url("/about/bg-pattern-hero-home.svg"),\n    url("../images/home/image-hero-phone.png");\n  background-position: center left, bottom -26.5625rem center;\n  padding: var(--space-l) var(--space-3xs) 28.5625rem;\n  text-align: center;\n}\n@media screen and (min-width: 59.375em) {\n  .hero__card {\n    background-position: center right, bottom -15.3125rem right -6rem;\n    padding-bottom: var(--space-l);\n    text-align: left;\n  }\n}\n\n@media screen and (min-width: 59.375em) {\n  .hero__container {\n    max-width: 31.25rem;\n  }\n}\n\n.hero__description {\n  margin-top: 1.625rem;\n  margin-bottom: var(--space-2xs);\n}\n\n@media screen and (min-width: 59.375em) {\n  .links {\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1.875rem;\n  }\n}\n\n@media screen and (min-width: 59.375em) {\n  .links--flex {\n    display: flex;\n  }\n}\n\n@media screen and (min-width: 59.375em) {\n  .links--flex > * {\n    flex-basis: 100%;\n  }\n}\n\n.links__item:not(:first-child) {\n  margin-top: 1.5rem;\n}\n@media screen and (min-width: 59.375em) {\n  .links__item:not(:first-child) {\n    margin-top: 0;\n  }\n}\n\n.links__item:first-child {\n  grid-row: 1/3;\n}\n\n.links__card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-size: cover;\n  background-color: hsla(0deg, 0%, 0%, 0.6);\n  background-blend-mode: overlay;\n  padding: 5.625rem 1rem;\n  height: 100%;\n  color: var(--white);\n  font-weight: 500;\n  letter-spacing: 0.3125em;\n  text-align: center;\n  text-transform: uppercase;\n}\n@media (prefers-reduced-motion: no-preference) {\n  .links__card {\n    transition: background-color var(--transition-base);\n  }\n}\n@media (hover: none) {\n  .links__card {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n  .links__card:active {\n    background-color: hsla(11deg, 73%, 66%, 0.6);\n  }\n}\n@media (-ms-high-contrast: none),\n  (-ms-high-contrast: active),\n  (-moz-touch-enabled: 0),\n  (hover: hover) {\n  .links__card:hover {\n    background-color: hsla(11deg, 73%, 66%, 0.6);\n  }\n}\n\n.links__card--web-design {\n  background-image: url("../images/home/mobile/image-web-design.jpg");\n}\n@media screen and (min-width: 42.5em) {\n  .links__card--web-design {\n    background-image: url("../images/home/tablet/image-web-design.jpg");\n  }\n}\n@media screen and (min-width: 59.375em) {\n  .links__card--web-design {\n    background-image: url("../images/home/desktop/image-web-design-large.jpg");\n  }\n}\n\n@media screen and (min-width: 59.375em) {\n  .links__card--web-design-small {\n    background-image: url("../images/home/desktop/image-web-design-small.jpg");\n  }\n}\n\n.links__card--app-design {\n  background-image: url("../images/home/mobile/image-app-design.jpg");\n}\n@media screen and (min-width: 42.5em) {\n  .links__card--app-design {\n    background-image: url("../images/home/tablet/image-app-design.jpg");\n  }\n}\n@media screen and (min-width: 59.375em) {\n  .links__card--app-design {\n    background-image: url("../images/home/desktop/image-app-design.jpg");\n  }\n}\n\n.links__card--graphic-design {\n  background-image: url("../images/home/mobile/image-graphic-design.jpg");\n}\n@media screen and (min-width: 42.5em) {\n  .links__card--graphic-design {\n    background-image: url("../images/home/tablet/image-graphic-design.jpg");\n  }\n}\n@media screen and (min-width: 59.375em) {\n  .links__card--graphic-design {\n    background-image: url("../images/home/desktop/image-graphic-design.jpg");\n  }\n}\n\n.links__heading {\n  margin-bottom: 1.5rem;\n}\n\n.links__icon {\n  display: inline;\n}\n\n.features {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n  text-align: center;\n}\n@media screen and (min-width: 42.5em) {\n  .features {\n    gap: 1.875rem;\n    text-align: left;\n  }\n}\n@media screen and (min-width: 59.375em) {\n  .features {\n    flex-direction: row;\n    text-align: center;\n  }\n}\n\n.features__item {\n  display: grid;\n  flex-grow: 1;\n  justify-items: center;\n}\n@media screen and (min-width: 42.5em) {\n  .features__item {\n    grid-template-columns: minmax(12.5rem, 25%) 1fr;\n    align-items: center;\n  }\n}\n@media screen and (min-width: 59.375em) {\n  .features__item {\n    grid-template-columns: initial;\n  }\n}\n\n@media screen and (min-width: 42.5em) {\n  .features__container {\n    margin-left: 3rem;\n  }\n}\n@media screen and (min-width: 59.375em) {\n  .features__container {\n    margin-left: 0;\n  }\n}\n\n.features__title {\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n}\n@media screen and (min-width: 42.5em) {\n  .features__title {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n}\n@media screen and (min-width: 59.375em) {\n  .features__title {\n    margin-top: 3rem;\n    margin-bottom: 2rem;\n  }\n}\n\n.call-to-action__card {\n  background-image: url("/about/bg-pattern-call-to-action.svg");\n  background-position: center right;\n  background-repeat: repeat-y;\n  padding: var(--space-m) var(--space-xs);\n  text-align: center;\n}\n@media screen and (min-width: 59.375em) {\n  .call-to-action__card {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    text-align: left;\n  }\n}\n\n.call-to-action__container {\n  flex-shrink: 1;\n  flex-basis: 28.125rem;\n}\n\n.call-to-action__title {\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 18.75rem;\n}\n@media screen and (min-width: 59.375em) {\n  .call-to-action__title {\n    margin-right: initial;\n    margin-left: initial;\n  }\n}\n\n.call-to-action__description {\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n  color: var(--black);\n}\n@media screen and (min-width: 59.375em) {\n  .call-to-action__description {\n    margin-bottom: 0;\n  }\n}\n\n.champion__card {\n  background-image: url("/about/bg-pattern-design-pages-intro-mobile.svg");\n  background-position: top right;\n  padding: var(--space-m) var(--space-xs);\n}\n@media screen and (min-width: 42.5em) {\n  .champion__card {\n    background-image: url("/about/bg-pattern-design-pages-intro-tablet.svg");\n    background-repeat: repeat-y;\n  }\n}\n\n@media screen and (min-width: 42.5em) {\n  .champion__card--web-design\\@tiny {\n    background-image: url("/about/bg-pattern-intro-web.svg");\n  }\n}\n\n@media screen and (min-width: 42.5em) {\n  .champion__card--app-design\\@tiny {\n    background-image: url("/about/bg-pattern-intro-app.svg");\n  }\n}\n\n@media screen and (min-width: 42.5em) {\n  .champion__card--graphic-design\\@tiny {\n    background-image: url("/about/bg-pattern-intro-graphic.svg");\n  }\n}\n\n@media screen and (min-width: 42.5em) {\n  .champion__card--background-center-right\\@tiny {\n    background-position: center right;\n  }\n}\n\n@media screen and (min-width: 42.5em) {\n  .champion__card--background-center-left\\@tiny {\n    background-position: center left;\n  }\n}\n\n.champion__container {\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 25rem;\n  text-align: center;\n}\n\n.champion__description {\n  margin-top: 1.5rem;\n}\n\n.projects {\n  max-width: 25rem;\n}\n@supports (display: grid) {\n  .projects {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(min(21.875rem, 100%), 1fr));\n    gap: 1.875rem;\n    max-width: 72.375rem;\n  }\n}\n\n.projects > * + * {\n  margin-top: 2.5rem;\n}\n@supports (display: grid) {\n  .projects > * + * {\n    margin-top: unset;\n  }\n}\n\n@supports (display: grid) {\n  .projects__card {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(min(18.75rem, 100%), 1fr));\n  }\n}\n@media (prefers-reduced-motion: no-preference) {\n  .projects__card {\n    transition: background-color var(--transition-base),\n      color var(--transition-base);\n  }\n}\n@media (hover: none) {\n  .projects__card {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n  .projects__card:active {\n    background-color: var(--peach);\n    color: var(--white);\n  }\n  .projects__card:active .projects__title {\n    color: inherit;\n  }\n  .projects__card:active .projects__image {\n    transform: scale(1.025);\n  }\n}\n@media (-ms-high-contrast: none),\n  (-ms-high-contrast: active),\n  (-moz-touch-enabled: 0),\n  (hover: hover) {\n  .projects__card:hover {\n    background-color: var(--peach);\n    color: var(--white);\n  }\n  .projects__card:hover .projects__title {\n    color: inherit;\n  }\n  .projects__card:hover .projects__image {\n    transform: scale(1.025);\n  }\n}\n\n.projects__container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  text-align: center;\n}\n\n.projects__image {\n  width: 100%;\n}\n@media (prefers-reduced-motion: no-preference) {\n  .projects__image {\n    transition: transform var(--transition-base);\n  }\n}\n\n.projects__title {\n  margin-bottom: 0.9375rem;\n  color: var(--peach);\n}\n\n.projects__description {\n  text-transform: none;\n}\n\n.about__card {\n  background-image: url("/about/bg-pattern-hero-about-mobile.svg");\n  background-position: top 11.5625rem right;\n  text-align: center;\n}\n@media screen and (min-width: 59.375em) {\n  .about__card {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    background-image: url("/about/bg-pattern-hero-about-desktop.svg");\n    background-position: top -10.3125rem left;\n    text-align: left;\n  }\n}\n\n.about__container {\n  --spacer: 1.5rem;\n  padding: 5rem var(--space-xs);\n  color: var(--black);\n}\n\n.about__image {\n  width: 100%;\n}\n\n.information:nth-of-type(2) {\n  margin-top: 0;\n}\n@media screen and (min-width: 42.5em) {\n  .information:nth-of-type(2) {\n    margin-top: var(--space-xl);\n  }\n}\n\n.information__card {\n  background-image: url("/about/bg-pattern-three-circles.svg");\n  background-position: bottom left;\n  text-align: center;\n}\n@media screen and (min-width: 59.375em) {\n  .information__card {\n    display: flex;\n    align-items: center;\n    background-position: bottom left 20.625rem;\n    text-align: left;\n  }\n}\n\n@media screen and (min-width: 59.375em) {\n  .information__card--row-reverse {\n    flex-direction: row-reverse;\n    background-image: url("/about/bg-pattern-two-circles.svg");\n    background-position: bottom left;\n  }\n}\n\n.information__container {\n  --spacer: 1.5rem;\n  padding: 5rem var(--space-xs);\n}\n\n.information__image {\n  width: 100%;\n}\n\n.information__title {\n  color: var(--peach);\n}\n\n.area {\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (min-width: 59.375em) {\n  .area {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n}\n\n.area__item {\n  display: flex;\n  flex-grow: 1;\n  flex-basis: 21.875rem;\n  flex-direction: column;\n  align-items: center;\n  justify-items: center;\n  text-align: center;\n}\n\n.area__item:not(:first-child) {\n  margin-top: 1.875rem;\n}\n@media screen and (min-width: 59.375em) {\n  .area__item:not(:first-child) {\n    margin-top: 0;\n    margin-left: 1.875rem;\n  }\n}\n\n.area__title {\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n}\n\n.locations {\n  --spacer: 2.5rem;\n}\n@media screen and (min-width: 42.5em) {\n  .locations {\n    --spacer: 7.5rem;\n  }\n}\n@media screen and (min-width: 59.375em) {\n  .locations {\n    --spacer: 1.875rem;\n  }\n}\n\n/**\n * 1. Move the interactive map below the\n *    mobile navigation.\n */\n.locations__container {\n  display: flex;\n  position: relative; /* 1 */\n  flex-direction: column;\n  z-index: -1; /* 1 */\n}\n@media screen and (min-width: 42.5em) {\n  .locations__container {\n    gap: 1.875rem;\n  }\n}\n@media screen and (min-width: 59.375em) {\n  .locations__container {\n    flex-direction: row;\n  }\n}\n\n.locations__container picture.is-hidden {\n  visibility: hidden;\n}\n\n@media screen and (min-width: 59.375em) {\n  .locations__container--row-reverse\\@very-small {\n    flex-direction: row-reverse;\n  }\n}\n\n.locations__map {\n  width: 100%;\n}\n\n.locations__card {\n  display: grid;\n  gap: 1.5rem;\n  background-image: url("/about/bg-pattern-two-circles.svg");\n  background-position: bottom left;\n  padding: 5rem var(--space-xs);\n  text-align: center;\n}\n@media screen and (min-width: 42.5em) {\n  .locations__card {\n    grid-template-columns: repeat(2, 1fr);\n    text-align: left;\n  }\n}\n@media screen and (min-width: 59.375em) {\n  .locations__card {\n    flex-grow: 1;\n  }\n}\n\n.locations__title {\n  color: var(--peach);\n}\n@media screen and (min-width: 42.5em) {\n  .locations__title {\n    grid-column: 1/3;\n  }\n}\n\n@media screen and (min-width: 42.5em) {\n  .locations__description {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n\n.contact__card {\n  background-image: url("/about/bg-pattern-hero-contact-mobile.svg");\n  background-position: top left;\n  padding: 3.125rem var(--space-xs);\n}\n@media screen and (min-width: 59.375em) {\n  .contact__card {\n    display: flex;\n    align-items: center;\n    gap: 2.5rem;\n    background-image: url("/about/bg-pattern-hero-desktop.svg");\n    background-position: top -10rem left;\n  }\n}\n\n.contact__container {\n  text-align: center;\n}\n@media screen and (min-width: 42.5em) {\n  .contact__container {\n    flex-basis: 100%;\n    text-align: left;\n  }\n}\n\n.contact__description {\n  margin-top: 2rem;\n}\n@media screen and (min-width: 42.5em) {\n  .contact__description {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n\n.contact__form {\n  --spacer: 1.5rem;\n  margin-top: 2.5rem;\n}\n@media screen and (min-width: 59.375em) {\n  .contact__form {\n    flex-basis: 100%;\n    margin-top: 0;\n  }\n}\n\n.contact__form-control {\n  position: relative;\n}\n\n.contact__input {\n  display: block;\n  border: none;\n  border-bottom: 0.0625rem solid var(--white);\n  background-color: transparent;\n  padding-right: 1rem;\n  padding-bottom: 0.625rem;\n  padding-left: 1rem;\n  width: 100%;\n  color: inherit;\n  font-weight: 500;\n}\n\n.contact__input.is-invalid {\n  background-image: url("/about/icon-error.svg");\n  background-position: top right 1rem;\n}\n\n.contact__input:focus {\n  border-bottom-width: 0.1875rem;\n}\n\n.contact__input::placeholder {\n  opacity: 0.5;\n  color: inherit;\n}\n\n.contact__alert {\n  margin-left: 1rem;\n  font-style: italic;\n}\n\n.contact__button {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media screen and (min-width: 42.5em) {\n  .contact__button {\n    margin-right: 0;\n  }\n}\n\n.footer {\n  --focus-outline-color: var(--white);\n  --selection-background-color: var(--white);\n  --selection-text-color: var(--black);\n  position: relative;\n  background-color: var(--black);\n  padding-top: 4.5rem;\n  padding-bottom: 4.5rem;\n  color: var(--white);\n}\n\n.footer::after {\n  display: block;\n  position: absolute;\n  top: -9rem;\n  left: 0;\n  z-index: -1;\n  background-color: var(--black);\n  width: 100%;\n  height: 100%;\n  content: "";\n}\n\n.footer--no-call-to-action {\n  margin-top: var(--space-xl);\n}\n\n.footer--no-call-to-action::after {\n  display: none;\n}\n\n.footer__container {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n@media screen and (min-width: 42.5em) {\n  .footer__container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-areas: "logo navigation navigation" "address contact social";\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: 0.625rem;\n    text-align: left;\n  }\n}\n\n.footer__line::before {\n  display: block;\n  position: absolute;\n  top: 3.75rem;\n  left: 0;\n  opacity: 0.1;\n  background-color: var(--white);\n  width: 100%;\n  height: 0.0625rem;\n  content: "";\n}\n\n.footer__home {\n  grid-area: logo;\n  margin-bottom: 4.0625rem;\n  width: fit-content;\n}\n\n.footer__navigation {\n  grid-area: navigation;\n  justify-self: flex-end;\n}\n\n.footer__list {\n  list-style: none;\n}\n@media screen and (min-width: 42.5em) {\n  .footer__list {\n    display: flex;\n  }\n}\n\n.footer__item:not(:first-child) {\n  margin-top: 2rem;\n}\n@media screen and (min-width: 42.5em) {\n  .footer__item:not(:first-child) {\n    margin-top: 0;\n    margin-left: 2.625rem;\n  }\n}\n\n@media (hover: none) {\n  .footer__link {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n  .footer__link:active {\n    text-decoration: underline;\n  }\n}\n@media (-ms-high-contrast: none),\n  (-ms-high-contrast: active),\n  (-moz-touch-enabled: 0),\n  (hover: hover) {\n  .footer__link:hover {\n    text-decoration: underline;\n  }\n}\n\n.footer__address {\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n}\n@media screen and (min-width: 42.5em) {\n  .footer__address {\n    grid-area: address;\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n}\n\n.footer__contact {\n  grid-area: contact;\n}\n\n.footer__address,\n.footer__contact {\n  opacity: 0.5;\n}\n\n.footer__social-media {\n  margin-top: 2.5rem;\n}\n@media screen and (min-width: 42.5em) {\n  .footer__social-media {\n    display: flex;\n    grid-area: social;\n    justify-content: flex-end;\n    align-self: flex-end;\n    margin-top: 0;\n  }\n}\n\n/**\n * 1. Make the outline square\n */\n.footer__external-link {\n  display: inline-block; /* 1 */\n  color: var(--peach);\n}\n@media (prefers-reduced-motion: no-preference) {\n  .footer__external-link {\n    transition: color var(--transition-base);\n  }\n}\n@media (hover: none) {\n  .footer__external-link {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n  .footer__external-link:active {\n    color: var(--light-peach);\n  }\n}\n@media (-ms-high-contrast: none),\n  (-ms-high-contrast: active),\n  (-moz-touch-enabled: 0),\n  (hover: hover) {\n  .footer__external-link:hover {\n    color: var(--light-peach);\n  }\n}\n\n.footer__external-link:not(:first-child) {\n  margin-left: 1rem;\n}\n\n.attribution {\n  padding-top: 2.5rem;\n  padding-bottom: 2.5rem;\n  font-weight: 500;\n  text-align: center;\n}\n\n.attribution__description {\n  margin-right: 0;\n  margin-left: 0;\n  max-width: 100%;\n}\n\n.attribution__link {\n  letter-spacing: 0;\n  text-decoration: underline 0.1em solid;\n  text-underline-offset: 0.1em;\n  text-transform: none;\n}\n@media (hover: none) {\n  .attribution__link {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n  .attribution__link:active {\n    text-decoration: none;\n  }\n}\n@media (-ms-high-contrast: none),\n  (-ms-high-contrast: active),\n  (-moz-touch-enabled: 0),\n  (hover: hover) {\n  .attribution__link:hover {\n    text-decoration: none;\n  }\n}\n\n  ',
        }}
      />
      <Helmet>
        <title>About Fitszo</title>
        <meta property="og:title" content="About Fitszo" />
      </Helmet>

      <div className="margin-top-about">
        <div class="wrapper wrapper--about flow">
          <div class="container-about container--padding@tiny about">
            <div class="card card--rounded@tiny card--peach about__card">
              <picture>
                <source
                  srcset="/about/desktop/image-about-hero.jpg"
                  media="(min-width: 59.375em)"
                />
                <source
                  srcset="/about/tablet/image-about-hero.jpg"
                  media="(min-width: 42.5em)"
                />
                <img
                  src="/about/mobile/image-about-hero.jpg"
                  alt=""
                  class="about__image"
                  width="476"
                  height="480"
                  aria-hidden="true"
                />
              </picture>
              <div class="flow about__container">
                <h1>About us</h1>
                <p>
                  Founded in 2010, we are a creative agency that produces
                  lasting results for our clients. We’ve partnered with many
                  startups, corporations, and nonprofits alike to craft designs
                  that make real impact. We’re always looking forward to
                  creating brands, products, and digital experiences that
                  connect with our clients' audiences.
                </p>
              </div>
            </div>
          </div>
          <div class="container-about container--padding@tiny information">
            <div class="card card--rounded@tiny card--light-grayish-peach information__card">
              <picture>
                <source
                  srcset="/about/desktop/image-world-class-talent.jpg"
                  media="(min-width: 59.375em)"
                />
                <source
                  srcset="/about/tablet/image-world-class-talent.jpg"
                  media="(min-width: 42.5em)"
                />
                <img
                  src="/about/mobile/image-world-class-talent.jpg"
                  alt=""
                  class="information__image"
                  width="476"
                  height="640"
                  aria-hidden="true"
                />
              </picture>
              <div class="flow information__container">
                <h2 class="information__title">World-class talent</h2>
                <p>
                  We are a crew of strategists, problem-solvers, and
                  technologists. Every design is thoughtfully crafted from
                  concept to launch, ensuring success in its given market. We
                  are constantly updating our skills in a myriad of platforms.
                </p>
                <p>
                  Our team is multi-disciplinary and we are not merely
                  interested in form — content and meaning are just as
                  important. We give great importance to craftsmanship, service,
                  and prompt delivery. Clients have always been impressed with
                  our high-quality outcomes that encapsulates their brand’s
                  story and mission.
                </p>
              </div>
            </div>
          </div>
          <div class="container-about container--padding@tiny area">
            <div class="area__item">
              <div class="circle circle--rotate-90deg">
                <img
                  src="/about//illustration-canada.svg"
                  alt=""
                  width="202"
                  height="202"
                  aria-hidden="true"
                />
              </div>
              <p class="heading heading--three area__title">Canada</p>
              <a href="./locations.html" class="button button--peach">
                See location
              </a>
            </div>
            <div class="area__item">
              <div class="circle">
                <img
                  src="/about/illustration-australia.svg"
                  alt=""
                  width="202"
                  height="202"
                  aria-hidden="true"
                />
              </div>
              <p class="heading heading--three area__title">Australia</p>
              <a href="./locations.html" class="button button--peach">
                See location
              </a>
            </div>
            <div class="area__item">
              <div class="circle circle--rotate-275deg">
                <img
                  src="/about/illustration-united-kingdom.svg"
                  alt=""
                  width="202"
                  height="202"
                  aria-hidden="true"
                />
              </div>
              <p class="heading heading--three area__title">United Kingdom</p>
              <a href="./locations.html" class="button button--peach">
                See location
              </a>
            </div>
          </div>
          <div class="container-about container--padding@tiny information">
            <div class="card card--rounded@tiny card--light-grayish-peach information__card information__card--row-reverse">
              <picture>
                <source
                  srcset="/about/desktop/image-real-deal.jpg"
                  media="(min-width: 59.375em)"
                />
                <source
                  srcset="/about/tablet/image-real-deal.jpg"
                  media="(min-width: 42.5em)"
                />
                <img
                  src="/about/mobile/image-real-deal.jpg"
                  alt=""
                  class="information__image"
                  width="476"
                  height="640"
                  aria-hidden="true"
                />
              </picture>
              <div class="flow information__container">
                <h2 class="information__title">The real deal</h2>
                <p>
                  As strategic partners in our clients’ businesses, we are ready
                  to take on any challenge as our own. Solving real problems
                  require empathy and collaboration, and we strive to bring a
                  fresh perspective to every opportunity. We make design and
                  technology more accessible and give you tools to measure
                  success.
                </p>
                <p>
                  We are visual storytellers in appealing and captivating ways.
                  By combining business and marketing strategies, we inspire
                  audiences to take action and drive real results.
                </p>
              </div>
            </div>
          </div>
          <div class="container-about container--padding call-to-action">
            <div class="card card--rounded card--peach call-to-action__card">
              <div class="call-to-action__container">
                <h2 class="call-to-action__title">
                  Let’s talk about your project
                </h2>
                <p class="call-to-action__description">
                  Ready to take it to the next level? Contact us today and find
                  out how our expertise can help your business grow.
                </p>
              </div>
              <a href="./contact.html" class="button button--white">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
