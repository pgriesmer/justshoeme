Page can be found at https://pgriesmer.github.io/justshoeme/.

The content on this page appears in a three-column grid (notice how the right edge of the "Material" filter dropdown appears in line with the left edge of the second column of shoes). Working off the principle that whitespace is rarely excessive, I used a fair amount of whitespace to separate the rows and columns of shoes. I used sensible defaults (e.g., showing price ascending by default) and used buttons (cf. the filters and "Reset Filters" button) where I could have used links because we're simply changing state (as opposed to leaving the page, where links would have been preferred). I maintained consistency within the interface by (1) always keeping the buttons in the same position, (2) changing all the buttons to white text on the same gray background when hovered over or selected, and (3) showing the current state of the two filters in the dropdown if anything but the default for the filters was selected. The "Reset Filter" button makes it easy for users to revert to the original state of the page. The Header component contains the title of the page (which would be used as is if this page were to form the basis of a larger website with other pages). The FilteredList component contains the search bar, filter dropdowns, reset button, sort dropdowns, and (nested within it) the List component; it also contains all the functionality that filters and sorts the list. The List component inserts each shoes into the larger unordered list of shoes. Users can filter shoes by both occasion and material using the two filters on the left. (They can also filter by using search terms entered into the search bar above all the buttons.) They can sort shoes by ascending price and descending price (with ascending price used as the default display). All the aforementioned functionality can be used in conjunction with one another. By removing any search terms from the search bar, clicking the "Reset filter" button, and choosing the "Price, Low to High" option from the "Sort:" dropdown, users can revert to the state in which the page appeared when it was first loaded. This page is intended to be the basis for a web shop that sells men's shoes; it is meant to be particularly helpful to users shopping for shoes that they intend to wear for specific occasions (and hence, I included the "Occasion" filter and occasion descriptor for each shoe).