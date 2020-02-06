// SETTINGS =========================================================
// SVG setup
const widthSVG = 800;
const heightSVG = 500;

// Position of the bookcase
const marginBookcase = { top: 80, right: 0, bottom: 0, left: 150 };
const widthBookcase = 530;
const heightBookcase = 380;

// Parameters
const tickSize = 12;

// FUNCTIONS ========================================================

// Generate a random number between min and max
var randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// TOOLTIP ==========================================================

// Create the tooltip: one div with 2 divs inside
var divTooltip = d3.select("#section-1").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0)

d3.select(".tooltip").append("div") // first div for the title
    .attr("class", "tooltip-title");

d3.select(".tooltip").append("div") // second div for the author
    .attr("class", "tooltip-author");

// Show the tooltip
const showTooltip = (div, x, y, d) => {
    div.select(".tooltip-title").html(d.Title);
    div.select(".tooltip-author").html(d.Author + " (" + d.Year + ")");

    // y position
    div.style("bottom", $(window).height() - y + 5 + "px");
    // div.style("top", (y - d3.select(".tooltip").node().getBoundingClientRect().height)  + "px");

    // div.style("left", (x) + "px");

    var xsvg = d3.select("#svg-section-1").node().getBoundingClientRect().left;
    if (x < (xsvg + widthSVG / 2)) { // tooltip shown to the right of the cursor
        div.style("left", (x + d.Width/2) + "px");
        div.style("right", "auto");
    } else { // tooltip shown to the left of the cursor
        div.style("left", "auto");
        div.style("right", ($(window).width() - x - d.Width/2) + "px");
    }
    div.style("opacity", 1);

}

// Hide the tooltip
const hideTooltip = (div, d) => {
    div.style("opacity", 0);
}

// RENDERING ========================================================
const renderBooks = (booksToRender) => {

    // Set up svg
    const svgPlot = d3.select("#svg-section-1")
        .attr("width", widthSVG)
        .attr("height", heightSVG)
        .append("g")
        .attr("id", "g-bookcase") // group that contains the bookcase (shelves & books)
        .attr("transform",
            `translate(${marginBookcase.left}, ${marginBookcase.top})`);

    // We rearrange data by Language & Century
    var nested_data = d3.nest()
        .key(function (d) { return d.Language; })
        .key(function (d) { return d.Century; }).sortKeys(d3.ascending)
        .sortValues(function (a, b) { return a.Year - b.Year; })
        .entries(booksToRender)

    // Scales
    const x = d3.scaleLinear()
        .rangeRound([0, widthBookcase])
        .domain([1550, 2050]);

    const languageScale = d3.scaleBand()
        .rangeRound([0, heightBookcase])
        .domain(booksToRender.map(function (d) { return d.Language; }));

    const centuryScale = d3.scaleOrdinal()
        .domain(booksToRender.map(function (d) { return d.Century; }).sort())
        .range([10, 50, 100, 220, 440]);

    const axisScale = d3.scaleOrdinal() // to center the labels within each column
        .domain(booksToRender.map(function (d) { return d.Century; }).sort())
        .range([30, 75, 160, 330, 480]);

    // For the horizontal axis
    const xAxisGenerator = d3.axisBottom(axisScale)
        .tickValues(["17ème", "18ème", "19ème", "20ème", "21ème"]);

    const axisCentury = svgPlot.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", `translate(0, ${-33})`)
        .call(xAxisGenerator);

    axisCentury.select(".domain").remove();
    axisCentury.selectAll(".tick line").remove();

    // For the vertical axis
    const yAxisGenerator = d3.axisLeft(languageScale)
        .tickSize(tickSize);

    const axisLanguage = svgPlot.append("g")
        .attr("class", "axis axis--y")
        .attr("transform", `translate(10, -5)`)
        .call(yAxisGenerator);

    axisLanguage.select(".domain").remove(); // remove the y axis
    axisLanguage.selectAll(".tick line").remove(); // remove the ticks

    // RENDER -------------------------------------------------------

    // Each row = one language = one group.
    var languageGroups = svgPlot.selectAll(".languageGroups")
        .data(nested_data)
        .enter()
        .append("g")
        .attr("class", "language")
        .attr("transform", d => `translate(0, ${languageScale(d.key) + languageScale.bandwidth() / 2})`);

    // Withing each row, one column = one century = one group.
    var centuryGroups = languageGroups.selectAll(".centuryGroups")
        .data(function (d) {
            return d.values
        })
        .enter()
        .append("g")
        .attr("class", "century")
        .attr("transform", d => `translate(${centuryScale(d.key)},0)`);

    // Within each case (language * century), we display the books.
    // One book = one group composed of the main rectangle (book) and optionally a second one (icon)
    var runningWidth = 3; // to compute the x-position of each book withing the case
    var books_enter_selection = centuryGroups.selectAll("g")
        .data(function (d) {
            return d.values
        })
        .enter()
        .append("g")
        .attr("class", ".rect")
        .attr("transform", (d, i) => {
            if (i == 0) runningWidth = 3;
            var pos = runningWidth;
            runningWidth += (d.Width + 1);

            var angle = randomNumber(2, 4); // rotate the book a little bit

            return `translate(${pos}, ${-d.Height}) rotate(${-angle})`;
        })

    // The main rect that represents the book
    books_enter_selection.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("class", ".book")
        .attr("stroke", "black")
        .attr("stroke-width", "1.3")
        .attr("fill", d => d.Color)
        .attr("width", d => d.Width)
        .attr("height", d => d.Height)
        .attr("id", d => d.Title)

    // the small rect that indicates whether the book contains some surreal narrative elements
    books_enter_selection.filter(function (d) { return d.Fantastique == "Oui"; }).append("rect")
        .attr("x", 2)
        .attr("y", 3)
        .attr("fill", "white")
        .attr("width", d => (d.Width - 2 - 1.5))
        .attr("height", d => 5);

    // We tilt the last book of each group of books.
    // If there are 2 books only, we tilt it or not (random)
    d3.selectAll('.century').each(function (d, i) {
        if (this.childElementCount > 2 | (this.childElementCount == 2 & Math.random() < 0.5)) {
            var lastChild = this.lastChild; //groupe contenant les 2 rectangle
            var xtransform = lastChild.getAttribute("transform").split(' rotate');
            lastChild.setAttribute("transform", `${xtransform[0]} rotate(${-12})`);
        }
    });

    // Interactivity
    books_enter_selection
        .on("mouseover", function (d) {
            // get the absolute position of the book group
            var x = d3.select(this).node().getBoundingClientRect().left;

            var y = d3.select(this).node().getBoundingClientRect().top;
            showTooltip(divTooltip, x, y, d);

            this.firstChild.setAttribute("fill", "lightPink"); // first child = main rectangle

            // var currentTranslation = getTranslation(d3.select(this).attr("transform"));
            // d3.select(this).attr("transform", `translate(${currentTranslation[0]}, ${currentTranslation[1]-5})`);
        })
        .on("mouseout", function (d) {
            hideTooltip(divTooltip, d);
            this.firstChild.setAttribute("fill", d.Color);
        });


    // Horizontal shelves
    for (const entry of nested_data.entries()) {
        var lang = entry[1].key
        svgPlot.append("line")
            .attr("x1", -70)
            .attr("y1", languageScale(lang) + languageScale.bandwidth() / 2)
            .attr("x2", 520)
            .attr("y2", languageScale(lang) + languageScale.bandwidth() / 2)
            .attr("stroke-width", 2)
            .attr("stroke", "black");
    }

    // We add the line at the very top
    svgPlot.append("line")
        .attr("x1", -70)
        .attr("y1", languageScale("Anglais") - languageScale.bandwidth() / 3)
        .attr("x2", 520)
        .attr("y2", languageScale("Anglais") - languageScale.bandwidth() / 3)
        .attr("stroke-width", 2)
        .attr("stroke", "black");

    // Vertical shelves: to be simplified since min(century) is known
    for (const entry of nested_data.entries()) {
        var arr = entry[1].values.map(function (d) {
            return parseInt(d.key); // we get the centuries
        });
        var min = arr.reduce(function (a, b) {
            return Math.min(a, b);
        });

        svgPlot.append("line")
            .attr("x1", centuryScale(min))
            .attr("y1", -30)
            .attr("x2", centuryScale(min))
            .attr("y2", heightBookcase - languageScale.bandwidth() / 2)
            .attr("stroke-width", 2)
            .attr("stroke", "black");
    }
}

// IMPORT DATA
Promise.all([
    d3.dsv(";", "/assets/notebooks/101books/books-utf.csv")
    // d3.dsv(';', './books-utf.csv')
    // d3.dsv(';', './books-representative.csv'), // in case we import several datasets
]).then(function ([books]) {
    books.forEach(d => {
        d.Year = +d.Year;
        d.Century = Math.floor(+d.Year / 100) * 100;
        d.Height = 20 + Math.random() * 9; // the height is random
        d.Width = 5.3 + Math.random() * 2; // same for the width
        d.Angle = 0;
        d.Color = (d.Gender == "Female" ? "Khaki" : "DarkKhaki")
    });

    renderBooks(books);
    // renderBooksGender(books);
    // renderBooksAuthor(books);
})
    .catch(function (err) {
        console.log("error in loading files");
    })

