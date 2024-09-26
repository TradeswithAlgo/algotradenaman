const metadataProps = {
  home: {
    title:
      "Fully Automated Algo Trading Solutions for Trading & Investment - Trades with Algo",
    description: `Explore our advanced ALGO software, 
    featuring powerful strategies for seamless trading 
    across multiple brokers. Achieve maximum convenience and 
    success in your investments with Trades with Algo. &#128222; +91 9179042673`,
  },
  algoServices: {
    title:
      "Best Algo Trading Software & Algorithmic Trading Platform | Trades with Algo",
    description: `We offer powerful algorithmic trading strategies, 
    free options, and seamless integration across brokers. Explore our 
    algo trading service and simple indicators for successful stock trading. 
    Check our prices and find the best algo trading solution today!`,
    apiBridge: {
      title:
        "API Bridge - Seamless Algo Trading Integration with Amibroker, MT4, TradingView, and More - Trades with Algo",
      description: `Explore API Bridge for seamless algo trading 
      with Amibroker, MT4, TradingView, Python, and more. Start 
      trading efficiently across multiple platforms and markets with 
      Trades with Algo's API Bridge.`,
    },
    algoTrading: {
      title:
        "Best Algo Trading Platform - Automated & Error-Free Trading - Trades with Algo",
      description: `Experience the best algo trading with automated, 
      error-free execution. Save time and money with our platform, 
      using MetaTrader4 & MetaTrader5 for efficient trading.`,
    },
    autoBuyAndSell: {
      title:
        "Auto Buy Sell Algo Software for Trading Algo Trading - Trades with Algo",
      description: `Get accurate auto buy sell signal software for MCX, NSE, 
      and more. Easy to install, customizable, and supported by AI for 
      high-accuracy trading signals.`,
    },
    strategyDevelopment: {
      title: "Expert Trading Strategy Development & Automation - Trades with Algo",
      description: `Develop automated trading strategies on MT4, 
      MT5, Tradingview, and more. Enjoy expert advisor auto trading, 
      custom indicators, and secure, stress-free trading.`,
    },
  },
  itServices: {
    title:
      "Comprehensive IT Services: Digital Marketing, Web, Mobile, Software & More - Trades with Algo",
    description: `Trades with Algo offering web development, mobile development, 
    graphic design, software development, game development, and digital marketing 
    services. Contact us for expert IT solutions.`,
    webDevelopment: {
      title:
        "Expert Web Development Services - Affordable & Professional - Trades with Algo",
      description: `Our experienced team provides expert web development, design, and 
      testing services. We deliver professional and affordable solutions for all your 
      website needs.`,
    },
    mobileAppDevelopment: {
      title:
        "Custom Mobile App Development - High Performance & Unique - Trades with Algo",
      description: `Expert mobile app development with quality assurance, safety, 
      and integration. We design unique, high-performance apps to suit your business 
      needs. 100+ successful apps.`,
    },
    graphicVideoDesign: {
      title:
        "Empowering Change: Progressive Strategies for Growth - Trades with Algo",
      description: `Transform your business with innovative strategies and holistic 
      approaches. Engage in front-end e-business and redefine cross-platform materials 
      for empowered growth.`,
    },
    softwareDevelopment: {
      title: "Mastering Software Design & Development - Trades with Algo",
      description: `With over 18+ years of experience, we delivers customized software 
      solutions globally. From start-ups to enterprises, we cater to diverse client needs 
      with domain expertise.`,
    },
    gameDevelopment: {
      title:
        "Engaging Mobile Game Development for Android & iOS - Trades with Algo",
      description: `Trades with Algo crafts mobile games with captivating UI for 
      Android & iOS. From concept to reality, we focus on consumer satisfaction, 
      thorough testing, and secure in-app purchases.`,
    },
    digitalMarketing: {
      title:
        "Effective Digital Marketing Solutions - Boost Your Online Presence - Trades with Algo",
      description: `Discover powerful digital marketing strategies to enhance your online 
      presence. Our solutions drive growth and engagement for your business.`,
    },
  },
  pricing: {
    title: "Transparent Pricing for Quality Services - Trades with Algo",
    description: `Explore our transparent pricing for high-quality services. 
    Get the best value for your investment with clear and competitive pricing options.`,
  },
  payment: {
    title: "Payment  - Trades with Algo",
    description: `Get the payment details here for any services of Trades with Algo.`,
  },
  contact: {
    title: "Contact Us for Expert Assistance | Reach Out Today!",
    description: `Reach out to us for expert assistance. Contact us today for 
    any inquiries or support needs. We're here to help!`,
  },
  about: {
    title:
      "Trades with Algo: Emotionless Algo Trading Terminal  - Trades with Algo",
    description: `Learn about our innovative solutions and commitment to your success. 
    Discover how we can help you achieve your goals with cutting-edge technology.`,
  },
};

// const metadataKeys = Object.keys(metadata);
// console.log(
//   metadata.algoServices.description.replace(/\n/g, "").replace(/\s+/g, " ")
// );
// console.log(metadataKeys);

function removeNewLineCharAndExtraSpaces(metadataObj) {
  const metadataKeys = Object.keys(metadataObj);
  for (let i = 0; i < metadataKeys.length; i++) {
    const metadataKey = metadataKeys[i];
    const element = metadataObj[metadataKey];
    if (typeof element === "object") {
      removeNewLineCharAndExtraSpaces(element);
    } else if (typeof element === "string" && metadataKey === "description") {
    //   console.log(element);
    metadataObj[metadataKey] = element.replace(/\n/g, "").replace(/\s+/g, " ");
    }
  }
}

// console.log(metadata);
removeNewLineCharAndExtraSpaces(metadataProps);
// console.log(metadata);

export default metadataProps;
