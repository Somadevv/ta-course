const modules = Array.from(document.querySelectorAll(".modules"));
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");
const courseView = document.querySelector(".course-view");
const placeholder = document.getElementById("placeholder");
const moduleIntroContent = [
  "Candlestick charts are a technical tool that packs data for multiple time frames into single price bars. This makes them more useful than traditional open-high, low-close bars or simple lines that connect the dots of closing prices. Candlesticks build patterns that predict price direction once completed. Proper color coding adds depth to this colorful technical tool, which dates back to 18th-century Japanese rice traders.",
  "Trend trading is a trading style that attempts to capture gains through the analysis of an asset's momentum in a particular direction. When the price is moving in one overall direction, such as up or down, that is called a trend.",
  "The concepts of trading level support and resistance are undoubtedly two of the most highly discussed attributes of technical analysis. Part of analyzing chart patterns, these terms are used by traders to refer to price levels on charts that tend to act as barriers, preventing the price of an asset from getting pushed in a certain direction. At first, the explanation and idea behind identifying these levels seem easy, but as you'll find out, support and resistance can come in various forms, and the concept is more difficult to master than it first appears.",
  "In statistics, a moving average is a calculation used to analyze data points by creating a series of averages of different subsets of the full data set. In finance, a moving average (MA) is a stock indicator that is commonly used in technical analysis. The reason for calculating the moving average of a stock is to help smooth out the price data by creating a constantly updated average price. By calculating the moving average, the impacts of random, short-term fluctuations on the price of a stock over a specified time frame are mitigated.",
  "In the context of technical analysis, a flag is a price pattern that, in a shorter time frame, moves counter to the prevailing price trend observed in a longer time frame on a price chart. It is named because of the way it reminds the viewer of a flag on a flagpole. The flag pattern is used to identify the possible continuation of a previous trend from a point at which price has drifted against that same trend. Should the trend resume, the price increase could be rapid, making the timing of a trade advantageous by noticing the flag pattern.", 
  "Fibonacci retracement levels are horizontal lines that indicate where support and resistance are likely to occur. They stem from Fibonacci’s sequence, a mathematical formula that originated in the 13th century.Each level is associated with a percentage. The percentage is how much of a prior move the price has retraced. The Fibonacci retracement levels are 23.6%, 38.2%, 61.8%, and 78.6%.",
  "Fibonacci extensions are a tool that traders can use to establish profit targets or estimate how far a price may travel after a pullback is finished. Extension levels are also possible areas where the price may reverse. Fibonacci extensions don't have a formula. When the indicator is applied to a chart the trader chooses three points. The first point chosen is the start of a move, the second point is the end of a move and the third point is the end of the retracement against that move.",
  "A golden cross is a chart pattern in which a relatively short-term moving average crosses above a long-term moving average. The golden cross is a bullish breakout pattern formed from a crossover involving a security's short-term moving average (such as the 15-day moving average) breaking above its long-term moving average (such as the 50-day moving average) or resistance level. As long-term indicators carry more weight, the golden cross indicates a bull market on the horizon and is reinforced by high trading volumes.",
  "The death cross is a technical chart pattern indicating the potential for a major sell-off. The death cross appears on a chart when a stock’s short-term moving average crosses below its long-term moving average. Typically, the most common moving averages used in this pattern are the 50-day and 200-day moving averages.",
  "Capitulation is when investors give up any previous gains in any security or market by selling their positions during periods of declines. Capitulation can happen at any time, but typically happens during high volume trading and extended declines for securities. A market correction or bear market often leads investors to capitulate or panic sell. The term is a derived from a military term which refers to surrender.",
  "", 
  ""
];
const keyList = [
  // KEY 1 [CANDLESTICKS]
  `<ul class="keys">
<span class="key-title">KEY TAKEAWAYS</span>
<li>- Candlestick charts are used by traders to determine possible price movement based on past patterns.</li>
<li>- Candlesticks are useful when trading as they show four price points (open, close, high, and low) throughout the period of time the trader specifies.</li>
<li>- Many algorithms are based on the same price information shown in candlestick charts.</li>
<li>- Trading is often dictated by emotion, which can be read in candlestick charts.</p>
</li>
</ul>`,
  // KEY 2 [TREND TRADING]
  `<ul class="keys">
<span class="key-title">KEY TAKEAWAYS</span>
<li>- Trend trading is designed to take advantage of uptrends, where the price tends to make new highs, or downtrends, where the price tends to make new lows.</li>
<li>- An uptrend is a series of higher swing highs and higher swing lows. A downtrend is a series of lower swing highs and lower swing lows.</li>
<li>- In addition to looking at swing highs and lows, trend traders utilize other tools such as trendlines, moving averages, and technical indicators to help identify the trend direction and potentially provide trade signals.</li>
</li>
</ul>`,
  // KEY 3 [SUPPORT & RESISTANCE]
  `<ul class="keys">
<span class="key-title">KEY TAKEAWAYS</span>
<li>- Technical analysts use support and resistance levels to identify price points on a chart where the probabilities favor a pause or reversal of a prevailing trend.</li>
<li>- Support occurs where a downtrend is expected to pause due to a concentration of demand.</li>
<li>- Resistance occurs where an uptrend is expected to pause temporarily, due to a concentration of supply.</li>
<li>- Market psychology plays a major role as traders and investors remember the past and react to changing conditions to anticipate future market movement.</li>
<li>- Flag patterns can be identified on charts using trendlines and moving averages. </li>
</ul>`,
  // KEY 4 [MOVING AVERAGE]
  `<ul class="keys">
<span class="key-title">KEY TAKEAWAYS</span>
<li>- A moving average (MA) is a stock indicator that is commonly used in technical analysis.</li>
<li>- The reason for calculating the moving average of a stock is to help smooth out the price data over a specified period of time by creating a constantly updated average price.</li>
<li>- A simple moving average (SMA) is a calculation that takes the arithmetic mean of a given set of prices over the specific number of days in the past; for example, over the previous 15, 30, 100, or 200 days.</li>
<li>- Exponential moving averages (EMA) is a weighted average that gives greater importance to the price of a stock in more recent days, making it an indicator that is more responsive to new information.</li>
</ul>`,
  // KEY 5 [FLAG PATTERNS]
  `<ul class="keys">
<span class="key-title">KEY TAKEAWAYS</span>
"A flag pattern, in technical analysis, is a price chart characterized by a sharp countertrend (the flag) succeeding a short-lived trend (the flag pole).","Flag patterns are accompanied by representative volume indicators as well as price action.", "Flag patterns signify trend reversals or breakouts after a period of consolidation."
</ul>`,
  // KEY 6 [FIBONACCI LEVELS]
  `<ul class="keys">
<span class="key-title">KEY TAKEAWAYS</span>
"- Fibonacci retracement levels connect any two points that the trader views as relevant, typically a high point and a low point.", "- The percentage levels provided are areas where the price could stall or reverse.", "- The most commonly used ratios include 23.6%, 38.2%, 50%, 61.8%, and 78.6%.", "- These levels should not be relied on exclusively, so it is dangerous to assume the price will reverse after hitting a specific Fibonacci level."
</ul>`,
  // KEY 7 [FIBONACCI EXTENSIONS]
  `<ul class="keys">
<span class="key-title">KEY TAKEAWAYS</span>
"- Common Fibonacci extension levels are 61.8%, 100%, 161.8%, 200%, and 261.8%.","- The Fibonacci extensions show how far the next price wave could move following a pullback.","- Fibonacci ratios are common in everyday life, seen in galaxy formations, architecture, as well as how some plants grow. Therefore, some traders believe these common ratios may also have significance in the financial markets.","- Extension levels signal possible areas of importance, but should not be relied on exclusively.");
</ul>`,
  // KEY 8 [GOLDEN CROSS]
  `<ul class="keys">
<span class="key-title">KEY TAKEAWAYS</span>
"- A golden cross is a technical chart pattern indicating the potential for a major rally.","- The golden cross appears on a chart when a stock’s short-term moving average crosses above its long-term moving average.","- The golden cross can be contrasted with a death cross indicating a bearish price movement.");
</ul>`,
  // KEY 9 [DEATH CROSS]
  `<ul class="keys">
<span class="key-title">KEY TAKEAWAYS</span>
"- The death cross is a technical chart pattern indicating the potential for a major selloff and has proven to be a reliable predictor of some of the most severe bear markets of the past century, including 1929, 1938, 1974, and 2008.", "- The death cross appears on a chart when a stock’s short-term moving average, usually the 50-day, crosses below its long-term moving average, usually the 200-day.", "- The death cross can be contrasted with a golden cross indicating a bull price movement.");
</ul>`,
  // KEY 10
  `<ul class="keys">
<span class="key-title">KEY TAKEAWAYS</span>
<li>- </li>
<li>- </li>
<li>- </li>
<li>- </li>
<li>- </li>
</ul>`,
  // KEY 11
  `<ul class="keys">
<span class="key-title">KEY TAKEAWAYS</span>
<li>- </li>
<li>- </li>
<li>- </li>
<li>- </li>
<li>- </li>
</ul>`,
  // KEY 12
  `<ul class="keys">
<span class="key-title">KEY TAKEAWAYS</span>
<li>- </li>
<li>- </li>
<li>- </li>
<li>- </li>
<li>- </li>
</ul>`,
];
const moduleIntroTitle = [
  "Candlesticks",
  "Trend Patterns",
  "Support And Resistance Basics",
  "Moving Average (MA)",
  "Flag Patterns",
  "Fibonacci Retracement Levels",
  "Fibonacci Extensions", 
  "Golden Cross Definition", 
  "Death Cross Definition",
  "Capitulation",
  "",
  ""
  
];

const moduleTitle = [
  "Understanding Candlesticks",
  "Understanding Trend Trading",
  "Understanding Support & Resistance Trading",
  "Understanding Moving Averages (MA)",
  "Understanding Flag Patterns",
  "Understanding Fibonacci Retracement Levels",
  "Understanding Fibonacci Extensions", 
  "Understanding A Golden Cross",
  "Understanding A Death Cross",
  "Understanding Capsilation",
  "",
  ""
];

const moduleContent = [
  keyList[0],
  keyList[1],
  keyList[2],
  keyList[3],
  keyList[4],
  keyList[5],
  keyList[6],
  keyList[7],
  keyList[8],
  keyList[9],
  keyList[10],
  keyList[11],
];

const imageSource = [
  "/static/images/candlestick.png",
  "/static/images/trends.png",
  "/static/images/SR_Levels.png",
  "/static/images/moving_average.png",
  "/static/images/flag_patterns.png",
  "/static/images/fib_levels.png",
  "/static/images/fib_extension.png",
  "/static/images/golden_cross.png",
  "/static/images/death_cross.png",
  "/static/images/capsilation.png",
  "",
  ""
];
var clicked = false;
if (clicked != false) {
  console.log("not true");
}
const elementId = "module-intro-image";
const elementAlt = elementId;

const createImage = (id, alt, src) => {
  const image = document.createElement("img");
  for (i = 0; i < imageSource.length; i++) {
    Object.assign(image, {
      id: id,
      alt: alt,
      src: src,
    });
  }
  return image;
};

const moduleImage = [
  createImage(elementId, elementAlt, imageSource[0]),
  createImage(elementId, elementAlt, imageSource[1]),
  createImage(elementId, elementAlt, imageSource[2]),
  createImage(elementId, elementAlt, imageSource[3]),
  createImage(elementId, elementAlt, imageSource[4]),
  createImage(elementId, elementAlt, imageSource[5]),
  createImage(elementId, elementAlt, imageSource[6]),
  createImage(elementId, elementAlt, imageSource[7]),
  createImage(elementId, elementAlt, imageSource[8]),
  createImage(elementId, elementAlt, imageSource[9]),
  createImage(elementId, elementAlt, imageSource[10]),
  createImage(elementId, elementAlt, imageSource[11]),
  createImage(elementId, elementAlt, imageSource[12]),
  createImage(elementId, elementAlt, imageSource[13]),
  createImage(elementId, elementAlt, imageSource[14]),
];

const addClicks = () =>
  document
    .querySelectorAll(".modules")
    .forEach((n) => n.addEventListener("click", () => whenClick(n)));

const whenClick = (node) => {
  const element = document.querySelector(".highlighted");
  element && element.classList.remove("highlighted");
  node.classList.add("highlighted");
};

modules.forEach((m, i) => {
  m.addEventListener("click", function () {
    removeImage(document.getElementById("module-intro-image"));
    drawModule(
      courseView.insertAdjacentElement("afterbegin", moduleImage[i]),
      moduleIntroTitle[i],
      moduleIntroContent[i],
      moduleTitle[i],
      moduleContent[i]
    );
  });
});

const drawModule = (image, introTitle, introContent, title, content) => {
  const moduleIntroTitleDIV = document.querySelector(".intro-title");
  const moduleIntroContentDIV = document.querySelector(".intro-description");
  const moduleTitleDIV = document.querySelector(".module-title");
  const moduleContentDIV = document.querySelector(".module-content");
  const moduleImg = document.createElement("img");
  moduleImg.setAttribute("src", imageSource[i]);
  moduleIntroTitleDIV.innerHTML = introTitle;
  moduleIntroContentDIV.innerHTML = introContent;
  moduleTitleDIV.innerHTML = title;
  moduleContentDIV.innerHTML = content;
  introTitle = `<span class="module-title">${title}</span>`;
  introContent = `<p class="module-description">${content}</p>`;
  return `<div class="box">
              ${image}
              ${introContent}
              ${title}
              ${content}
          </div>`;
};
const removeImage = (image) => {
  image.remove();
};
const boxes = Array.from(document.querySelectorAll(".box"));
boxes.forEach((box, index) => {
  // Hover on
  box.addEventListener("mouseenter", () => {
    boxes[index].style.opacity = 1;
  });
  // Hover off
  box.addEventListener("mouseleave", () => {
    boxes[index].style.opacity = 0.8;
  });
});

// Toggle logo display property for side navigation
const toggleLogo = () => {
  let logo = document.querySelector("#nav-logo");
  if (logo.classList.contains("hidden")) {
    logo.classList.remove("hidden");
  } else {
    logo.classList.add("hidden");
  }
};

// Toggle width for side navigation
const menuBtnChange = () => {
  if (sideBar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
};

// Toggle navigation sidebar
closeBtn.addEventListener("click", () => {
  sideBar.classList.toggle("open");
  menuBtnChange();
  toggleLogo();
});

// Toggle window state
const toggleWindow = (x) => {
  let mobileNav = document.querySelector("#mobile-nav");
  if (x.matches) {
    // If media query matches
    mobileNav.classList.remove("hidden");
    sideBar.classList.add("hidden");
  } else {
    mobileNav.classList.add("hidden");
    sideBar.classList.remove("hidden");
  }
};

$(document).ready(function () {
  let newWindow = window.matchMedia("(max-width: 768px)");
  $(".sidenav").sidenav();
  toggleWindow(newWindow); // Call listener function at run time
  newWindow.addListener(toggleWindow); // Attach listener function on state changes
});
