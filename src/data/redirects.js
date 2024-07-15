// export type Redirect = {
//   from: string[]; // Source redirect path excluding the domain bit (i.e. "/books/vega-build-guide/page/part-1---begin-here")
//   to: string;   // Full target url (i.e. "https://ai03.com/info/build-guides/vega/")
//   code?: number; // Redirect code
// }

export const redirects = [

  // Redirects to the root /info path
  {
    from: [
      // Old home pages
      "/",
      "/books",
      "/search",
      "/login",
      "/books/system-pages/page/ai03-infobase",
      "/books/system-pages",
      "/books/general-info",
      "/shelves/general-keyboard-info",
      
      // Removed pages
      "/books/keyboard-survey-results",
      "/books/general-info/page/switch-choice-flowchart",
      "/books/keyboard-survey-results/page/october-2019-survey-results",
      "/books/keyboard-survey-results/page/switch-weight-preferences",
    ],
    to: "https://ai03.com/info/",
  },


  // Redirects to FAQ
  {
    from: [
      "/shelves/faq",
      "/books/common-faq",
      "/books/common-faq/page/when-will-this-keyboard-go-on-sale",
      "/books/common-faq/page/when-is-the-eta-for-this-project-going-on-sale",
      "/books/common-faq/page/when-will-this-project-happen",
      "/books/common-faq/page/will-this-mx-specific-keyboard-support-alps-switches",
      "/books/common-faq/page/will-this-alps-specific-keyboard-support-mx-switches",
      "/books/common-faq/page/will-you-add-per-key-rgb-to-this",
      "/books/common-faq/page/can-i-buy-your-prototypes",
      "/books/common-faq/page/will-there-be-another-round-or-batch-of-this",
      "/books/common-faq/page/will-you-film-a-typing-test-for-this",
      "/books/common-faq/page/could-you-tell-me-what-factory-you-use-to-produce-your-cases",
      "/books/common-faq/page/will-there-be-extras-for-this",
      "/books/common-faq/page/can-i-purchase-your-extra-units",
      "/books/common-faq/page/by-chance-do-you-have-any-extra-units-for-this",
      "/books/common-faq/page/when-will-the-next-round-of-this-go-on-sale",
      "/books/common-faq/page/will-there-be-a-re-run-of-this-in-the-future",
      "/books/common-faq/page/will-this-be-available-in-another-material",
      "/books/common-faq/page/will-there-be-a-polycarbonate-version-of-this-case",
      "/books/common-faq/page/can-i-swap-part-of-this-keyboard-with-another",
      "/books/common-faq/page/can-i-install-a-third-party-pcb-into-this-keyboard",
      "/books/common-faq/page/can-i-install-hotswap-socketsmill-max-socketsholtites-into-this-keyboard-pcb",
      "/books/common-faq/page/will-this-be-available-in-another-color",
      "/books/common-faq/page/are-your-keyboards-waterproof",
      "/books/common-faq/page/will-this-board-be-available-with-another-type-of-usb-connector",
      "/books/common-faq/page/when-is-the-eta-of-shipment-for-this",
      "/books/common-faq/page/can-i-change-my-order-details-such-as-case-type-color-etc-after-placing-the-order",
      "/books/common-faq/page/the-project-does-not-seem-like-it-will-ship-by-the-eta-or-has-passed-the-eta-can-you-take-responsibility",
      "/books/common-faq/page/is-shipment-beforearound-the-eta-guaranteed",
      "/books/common-faq/page/will-the-color(s)-be-exactly-what-is-described",
      "/books/common-faq/page/will-this-color-be-matched-exactly-to-this-keyset",
      "/books/common-faq/page/will-the-colors-be-identical-to-a-previous-batch-or-round",
      "/books/common-faq/page/will-the-colors-be-identical-to-another-board",
      "/books/common-faq/page/do-you-take-commissions-for-pcbs-plates-or-individual-parts",
      "/books/common-faq/page/can-i-commission-you-for-a-custom-keyboard-design",
      "/books/common-faq/page/can-i-order-a-one-off-keyboard-with-custom-color-or-engravings",
      "/books/common-faq/page/are-your-keyboards-rated-for-use-under-extreme-conditions",
      "/books/common-faq/page/what-is-the-best-way-of-contacting-you-directly",
      "/books/common-faq/page/what-will-the-sale-format-be-for-this-board-with-unannounced-sales-format",
      "/books/common-faq/page/where-can-i-buy-your-keyboards",
      "/books/common-faq/page/can-i-buy-a-keyboard-which-is-out-of-stock",
      "/books/common-faq/chapter/sales",
      "/books/common-faq/chapter/features-and-compatibility",
      "/books/common-faq/chapter/information",
      "/books/common-faq/chapter/commissions-and-custom-orders",
      "/books/common-faq/chapter/non-keyboard-questions",
      "/books/project-specific-faqs",
      "/books/project-specific-faqs/page/can-i-install-gaskets-to-the-case-side-rather-than-plate-side",
      "/books/project-specific-faqs/page/the-firmware-flashing-log-results-dont-match-completely-with-the-provided-screenshots-is-this-fine",
      "/books/project-specific-faqs/page/where-should-the-gaskets-be-installed",
      "/books/project-specific-faqs/chapter/polaris",
      "/books/project-specific-faqs/chapter/equinox",
    ],
    to: "https://ai03.com/info/faq/"
  },


  // Other guides category
  {
    from: [
      "/shelves/other",
      "/books/uncategorized",
    ],
    to: "https://ai03.com/info/other-guides/"
  },


  // Alps cleaning guide
  {
    from: ["/books/uncategorized/page/alps-skcmskcl-switch-cleaning"],
    to: "https://ai03.com/info/other-guides/alps-skcm-skcl-cleaning/",
  },


  // Build guide sindex
  {
    from: ["/shelves/build-guides"],
    to: "https://ai03.com/info/build-guides/",
  },


  // Orbit build guide
  {
    from: [
      "/books/orbit-build-guide",
      "/books/orbit-build-guide/page/build-guide---english",
    ],
    to: "https://ai03.com/info/build-guides/orbit/",
  },

  {
    from: ["/books/orbit-build-guide/page/build-guide---japanese-(日本語)"],
    to: "https://ai03.com/info/build-guides/orbit/ja/"
  },


  // Vega build guide
  {
    from: [
      "/books/vega-build-guide",
      "/books/vega-build-guide/page/part-1---begin-here",
    ],
    to: "https://ai03.com/info/build-guides/vega/"
  },

  {
    from: ["/books/vega-build-guide/page/part-2---pre-build-preparations"],
    to: "https://ai03.com/info/build-guides/vega/2/"
  },

  {
    from: ["/books/vega-build-guide/page/part-3---preparing-the-case"],
    to: "https://ai03.com/info/build-guides/vega/3/"
  },

  {
    from: ["/books/vega-build-guide/page/part-4---assembling-the-internals"],
    to: "https://ai03.com/info/build-guides/vega/4/"
  },

  {
    from: ["/books/vega-build-guide/page/part-5---putting-it-all-together"],
    to: "https://ai03.com/info/build-guides/vega/5/"
  },

  {
    from: ["/books/vega-build-guide/page/part-6---keymap-editing-and-closing-words"],
    to: "https://ai03.com/info/build-guides/vega/6/"
  },


  // Lunar II build guide
  {
    from: [
      "/books/lunar-ii-build-guide",
      "/books/lunar-ii-build-guide/page/part-1---begin-here",
    ],
    to: "https://ai03.com/info/build-guides/lunar-ii/"
  },

  {
    from: ["/books/lunar-ii-build-guide/page/part-2---pre-build-preparations"],
    to: "https://ai03.com/info/build-guides/lunar-ii/2/"
  },

  {
    from: ["/books/lunar-ii-build-guide/page/part-3---assembling-the-board"],
    to: "https://ai03.com/info/build-guides/lunar-ii/3/"
  },

  {
    from: ["/books/lunar-ii-build-guide/page/part-4---keymap-editing-and-closing-words"],
    to: "https://ai03.com/info/build-guides/lunar-ii/4/"
  },


  // Polaris build guide
  {
    from: [
      "/books/polaris-build-guide",
      "/books/polaris-build-guide/page/part-1---begin-here",
    ],
    to: "https://ai03.com/info/build-guides/polaris/"
  },

  {
    from: ["/books/polaris-build-guide/page/part-2---preparing-the-pcb"],
    to: "https://ai03.com/info/build-guides/polaris/2/"
  },

  {
    from: ["/books/polaris-build-guide/page/part-3---preparing-the-case"],
    to: "https://ai03.com/info/build-guides/polaris/3/"
  },

  {
    from: ["/books/polaris-build-guide/page/part-4---installing-switches-and-stabilizers"],
    to: "https://ai03.com/info/build-guides/polaris/4/"
  },

  {
    from: ["/books/polaris-build-guide/page/part-5---putting-it-all-together"],
    to: "https://ai03.com/info/build-guides/polaris/5/"
  },

  {
    from: ["/books/polaris-build-guide/page/part-6---configuring-the-keymap"],
    to: "https://ai03.com/info/build-guides/polaris/6/"
  },

  {
    from: ["/books/polaris-build-guide/page/part-7---further-tuning-support-and-feedback"],
    to: "https://ai03.com/info/build-guides/polaris/7/"
  },


  // Andromeda build guide
  {
    from: [
      "/books/andromeda-build-guide",
      "/books/andromeda-build-guide/page/part-1-begin-here",
    ],
    to: "https://ai03.com/info/build-guides/andromeda/"
  },

  {
    from: ["/books/andromeda-build-guide/page/part-2-pre-build-preparations"],
    to: "https://ai03.com/info/build-guides/andromeda/2/"
  },

  {
    from: ["/books/andromeda-build-guide/page/part-3-preparing-the-case"],
    to: "https://ai03.com/info/build-guides/andromeda/3/"
  },

  {
    from: ["/books/andromeda-build-guide/page/part-4-assembling-the-internals"],
    to: "https://ai03.com/info/build-guides/andromeda/4/"
  },

  {
    from: ["/books/andromeda-build-guide/page/part-5-putting-it-all-together"],
    to: "https://ai03.com/info/build-guides/andromeda/5/"
  },

  {
    from: ["/books/andromeda-build-guide/page/part-6-keymap-editing-and-final-notes"],
    to: "https://ai03.com/info/build-guides/andromeda/6/"
  },


  // Newcomer guide
  {
    from: [
      "/books/how-to-keyboard",
      "/books/how-to-keyboard/page/section-1---this-mysterious-custom-keyboard-thing",
    ],
    to: "https://ai03.com/info/keyboard-newcomer-guides/"
  },

  {
    from: ["/books/how-to-keyboard/page/section-2---a-case-study"],
    to: "https://ai03.com/info/keyboard-newcomer-guides/2/"
  },

  {
    from: ["/books/how-to-keyboard/page/section-3---making-the-switch"],
    to: "https://ai03.com/info/keyboard-newcomer-guides/3/"
  },

  {
    from: ["/books/how-to-keyboard/page/section-4---the-capstone"],
    to: "https://ai03.com/info/keyboard-newcomer-guides/4/"
  },

  {
    from: ["/books/how-to-keyboard/page/section-5---the-hunt-for-endgame"],
    to: "https://ai03.com/info/keyboard-newcomer-guides/5/"
  },

]