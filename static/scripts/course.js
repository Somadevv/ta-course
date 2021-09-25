const modules = Array.from(document.querySelectorAll(".modules"));
const courseView = document.querySelector('.course-view');
const keyPoints = document.getElementById('key-points');
const summary = document.getElementById('summary');

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
  "/static/images/platykurtic.png",
  "/static/images/head_and_shoulders.png"
];
elementId = "module-intro-image"
elementAlt = elementId

const updateDOM = (image, introTitle,introContent,title,key1,key2,key3,key4) => {
  document.querySelector(".intro-title").innerHTML = introTitle;
  document.querySelector(".intro-description").innerHTML = introContent;
  document.querySelector(".module-title").innerHTML = title;
  document.querySelector("#key1").innerHTML = key1;
  document.querySelector("#key2").innerHTML = key2;
  document.querySelector("#key3").innerHTML = key3;
  document.querySelector("#key4").innerHTML = key4;
  

};

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

const removeImage = (image) => {
  image.remove();
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
  createImage(elementId, elementAlt, imageSource[11])
];
const createMarkupString = (image,introContent,title,key1,key2,key3,key4) => {
  return `<div class="box">${image}${introContent}${title}${key1}${key2}${key3}${key4}
          </div>`;
};

const drawModule = (image,introTitle,introContent,title,key1,key2,key3,key4) => {
  updateDOM(image, introTitle, introContent, title, key1, key2, key3, key4); 
  return createMarkupString(image, introContent, title, key1, key2, key3, key4);
};
modules[0].addEventListener("click", () => {
  summary.classList.add("hidden");
  keyPoints.classList.remove("hidden");
  removeImage(document.getElementById("module-intro-image"));
  drawModule(courseView.insertAdjacentElement("afterbegin", moduleImage[0]),"Candlesticks", "Candlestick charts are a technical tool that packs data for multiple time frames into single price bars. This makes them more useful than traditional open-high, low-close bars or simple lines that connect the dots of closing prices. Candlesticks build patterns that predict price direction once completed. Proper color coding adds depth to this colorful technical tool, which dates back to 18th-century Japanese rice traders.", "", "- Candlestick charts are used by traders to determine possible price movement based on past patterns.", "- Candlesticks are useful when trading as they show four price points (open, close, high, and low) throughout the period of time the trader specifies.", "- Many algorithms are based on the same price information shown in candlestick charts.", "- Trading is often dictated by emotion, which can be read in candlestick charts.");
});
modules[1].addEventListener("click", () => {
    summary.classList.add("hidden");
  keyPoints.classList.remove("hidden");
  removeImage(document.getElementById("module-intro-image"));
  drawModule(courseView.insertAdjacentElement("afterbegin", moduleImage[1]),"Trend Patterns", "Trend trading is a trading style that attempts to capture gains through the analysis of an asset's momentum in a particular direction. When the price is moving in one overall direction, such as up or down, that is called a trend.", "", "- Trend trading is designed to take advantage of uptrends, where the price tends to make new highs, or downtrends, where the price tends to make new lows.", "- An uptrend is a series of higher swing highs and higher swing lows. A downtrend is a series of lower swing highs and lower swing lows.", "- In addition to looking at swing highs and lows, trend traders utilize other tools such as trendlines, moving averages, and technical indicators to help identify the trend direction and potentially provide trade signals.", "");
});
modules[2].addEventListener("click", () => {
    summary.classList.add("hidden");
  keyPoints.classList.remove("hidden");
  removeImage(document.getElementById("module-intro-image"));
  drawModule(courseView.insertAdjacentElement("afterbegin", moduleImage[2]),"Support And Resistance Basics", "The concepts of trading level support and resistance are undoubtedly two of the most highly discussed attributes of technical analysis. Part of analyzing chart patterns, these terms are used by traders to refer to price levels on charts that tend to act as barriers, preventing the price of an asset from getting pushed in a certain direction. At first, the explanation and idea behind identifying these levels seem easy, but as you'll find out, support and resistance can come in various forms, and the concept is more difficult to master than it first appears.", "", "- Technical analysts use support and resistance levels to identify price points on a chart where the probabilities favor a pause or reversal of a prevailing trend.", "- Support occurs where a downtrend is expected to pause due to a concentration of demand.", "- Resistance occurs where an uptrend is expected to pause temporarily, due to a concentration of supply.", "");
});
modules[3].addEventListener("click", () => {
    summary.classList.add("hidden");
  keyPoints.classList.remove("hidden");
  removeImage(document.getElementById("module-intro-image"));
  drawModule(courseView.insertAdjacentElement("afterbegin", moduleImage[3]),"Moving Average (MA)", "In statistics, a moving average is a calculation used to analyze data points by creating a series of averages of different subsets of the full data set. In finance, a moving average (MA) is a stock indicator that is commonly used in technical analysis. The reason for calculating the moving average of a stock is to help smooth out the price data by creating a constantly updated average price. By calculating the moving average, the impacts of random, short-term fluctuations on the price of a stock over a specified time frame are mitigated.", "", "- A moving average (MA) is a stock indicator that is commonly used in technical analysis.", "- The reason for calculating the moving average of a stock is to help smooth out the price data over a specified period of time by creating a constantly updated average price.", "- A simple moving average (SMA) is a calculation that takes the arithmetic mean of a given set of prices over the specific number of days in the past; for example, over the previous 15, 30, 100, or 200 days.", "- Exponential moving averages (EMA) is a weighted average that gives greater importance to the price of a stock in more recent days, making it an indicator that is more responsive to new information.");
});
modules[4].addEventListener("click", () => {
    summary.classList.add("hidden");
  keyPoints.classList.remove("hidden");
  removeImage(document.getElementById("module-intro-image"));
  drawModule(courseView.insertAdjacentElement("afterbegin", moduleImage[4]),"Flag Patterns", "In the context of technical analysis, a flag is a price pattern that, in a shorter time frame, moves counter to the prevailing price trend observed in a longer time frame on a price chart. It is named because of the way it reminds the viewer of a flag on a flagpole. The flag pattern is used to identify the possible continuation of a previous trend from a point at which price has drifted against that same trend. Should the trend resume, the price increase could be rapid, making the timing of a trade advantageous by noticing the flag pattern.", "", "- A flag pattern, in technical analysis, is a price chart characterized by a sharp countertrend (the flag) succeeding a short-lived trend (the flag pole).","- Flag patterns are accompanied by representative volume indicators as well as price action.", "- Flag patterns signify trend reversals or breakouts after a period of consolidation.", "");
});
modules[5].addEventListener("click", () => {
    summary.classList.add("hidden");
  keyPoints.classList.remove("hidden");
  removeImage(document.getElementById("module-intro-image"));
  drawModule(courseView.insertAdjacentElement("afterbegin", moduleImage[5]),"Fibonacci Retracement Levels", "Fibonacci retracement levels are horizontal lines that indicate where support and resistance are likely to occur. They stem from Fibonacci’s sequence, a mathematical formula that originated in the 13th century.Each level is associated with a percentage. The percentage is how much of a prior move the price has retraced. The Fibonacci retracement levels are 23.6%, 38.2%, 61.8%, and 78.6%.", "", "- Fibonacci retracement levels connect any two points that the trader views as relevant, typically a high point and a low point.", "- The percentage levels provided are areas where the price could stall or reverse.", "- The most commonly used ratios include 23.6%, 38.2%, 50%, 61.8%, and 78.6%.", "- These levels should not be relied on exclusively, so it is dangerous to assume the price will reverse after hitting a specific Fibonacci level.");
});
modules[6].addEventListener("click", () => {
    summary.classList.add("hidden");
  keyPoints.classList.remove("hidden");
  removeImage(document.getElementById("module-intro-image"));
  drawModule(courseView.insertAdjacentElement("afterbegin", moduleImage[6]),"Fibonacci Extensions", "Fibonacci extensions are a tool that traders can use to establish profit targets or estimate how far a price may travel after a pullback is finished. Extension levels are also possible areas where the price may reverse. Fibonacci extensions don't have a formula. When the indicator is applied to a chart the trader chooses three points. The first point chosen is the start of a move, the second point is the end of a move and the third point is the end of the retracement against that move.", "", "- Common Fibonacci extension levels are 61.8%, 100%, 161.8%, 200%, and 261.8%.","- The Fibonacci extensions show how far the next price wave could move following a pullback.","- Fibonacci ratios are common in everyday life, seen in galaxy formations, architecture, as well as how some plants grow. Therefore, some traders believe these common ratios may also have significance in the financial markets.","- Extension levels signal possible areas of importance, but should not be relied on exclusively.");
});
modules[7].addEventListener("click", () => {
    summary.classList.add("hidden");
  keyPoints.classList.remove("hidden");
  removeImage(document.getElementById("module-intro-image"));
  drawModule(courseView.insertAdjacentElement("afterbegin", moduleImage[7]),"Golden Cross Definition", "A golden cross is a chart pattern in which a relatively short-term moving average crosses above a long-term moving average. The golden cross is a bullish breakout pattern formed from a crossover involving a security's short-term moving average (such as the 15-day moving average) breaking above its long-term moving average (such as the 50-day moving average) or resistance level. As long-term indicators carry more weight, the golden cross indicates a bull market on the horizon and is reinforced by high trading volumes.", "", "- A golden cross is a technical chart pattern indicating the potential for a major rally.","- The golden cross appears on a chart when a stock’s short-term moving average crosses above its long-term moving average.","- The golden cross can be contrasted with a death cross indicating a bearish price movement.");
});
modules[8].addEventListener("click", () => {
    summary.classList.add("hidden");
  keyPoints.classList.remove("hidden");
  removeImage(document.getElementById("module-intro-image"));
  drawModule(courseView.insertAdjacentElement("afterbegin", moduleImage[8]),"Death Cross Definition", "The death cross is a technical chart pattern indicating the potential for a major sell-off. The death cross appears on a chart when a stock’s short-term moving average crosses below its long-term moving average. Typically, the most common moving averages used in this pattern are the 50-day and 200-day moving averages.", "", "- The death cross is a technical chart pattern indicating the potential for a major selloff and has proven to be a reliable predictor of some of the most severe bear markets of the past century, including 1929, 1938, 1974, and 2008.", "- The death cross appears on a chart when a stock’s short-term moving average, usually the 50-day, crosses below its long-term moving average, usually the 200-day.", "- The death cross can be contrasted with a golden cross indicating a bull price movement.");
});
modules[9].addEventListener("click", () => {
    summary.classList.add("hidden");
  keyPoints.classList.remove("hidden");
  removeImage(document.getElementById("module-intro-image"));
  drawModule(courseView.insertAdjacentElement("afterbegin", moduleImage[9]),"Capitulation", "Capitulation is when investors give up any previous gains in any security or market by selling their positions during periods of declines. Capitulation can happen at any time, but typically happens during high volume trading and extended declines for securities. A market correction or bear market often leads investors to capitulate or panic sell. The term is a derived from a military term which refers to surrender.", "", "- Capitulation is when investors give up any previous gains in any security or market by selling their positions during periods of declines.", "- Many market professionals consider it to be a sign of a bottom in prices and consequently a good time to buy stocks. ", "- However, the extent of a capitulation can only be understood after the fact.", "");
});
modules[10].addEventListener("click", () => {
    summary.classList.add("hidden");
  keyPoints.classList.remove("hidden");
  removeImage(document.getElementById("module-intro-image"));
  drawModule(courseView.insertAdjacentElement("afterbegin", moduleImage[10]),"Platykurtic", "The term 'platykurtic' refers to a statistical distribution in which the excess kurtosis value is negative. For this reason, a platykurtic distribution will have thinner tails than a normal distribution will, resulting in fewer extreme positive or negative events. The opposite of a platykurtic distribution is a leptokurtic distribution, in which excess kurtosis is positive.", "", "- Platykurtic distributions are those with negative excess kurtosis.", "- They have a lower likelihood of extreme events compared to a normal distribution.", "- To minimize the risk of large negative events, risk-averse investors can focus on investments whose returns follow a platykurtic distribution.", "");
});
modules[11].addEventListener("click", () => {
    summary.classList.add("hidden");
  keyPoints.classList.remove("hidden");
  removeImage(document.getElementById("module-intro-image"));
  drawModule(courseView.insertAdjacentElement("afterbegin", moduleImage[11]),"Head and Shoulders Pattern", "A head and shoulders pattern is a chart formation that appears as a baseline with three peaks, where the outside two are close in height and the middle is highest. In technical analysis, a head and shoulders pattern describes a specific chart formation that predicts a bullish-to-bearish trend reversal. The head and shoulders pattern is believed to be one of the most reliable trend reversal patterns. It is one of several top patterns that signal, with varying degrees of accuracy, that an upward trend is nearing its end.", "", "- A head and shoulders pattern is a technical indicator with a chart pattern of three peaks, where the outer two are close in height and the middle is the highest.", "- A head and shoulders pattern—considered one of the most reliable trend reversal patterns—is a chart formation that predicts a bullish-to-bearish trend reversal.", "", "");


const addClicks = () =>
  document
    .querySelectorAll(".modules")
    .forEach((n) => n.addEventListener("click", () => whenClick(n)));

const whenClick = (node) => {
  const element = document.querySelector(".highlighted");
  element && element.classList.remove("highlighted");
  node.classList.add("highlighted");
};
addClicks();

})

