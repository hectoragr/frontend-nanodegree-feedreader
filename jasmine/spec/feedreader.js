/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('All feeds have a well defined name and url', function(){
            // For each element in allFeeds
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined(); // Assert that name attribute is defined
                expect(feed.url).toBeDefined(); // Assert that url attribute is defined
                expect(feed.url.trim().length).not.toBe(0); // Assert that url's lenght after trimming, is gt than 0
                expect(feed.name.trim().length).not.toBe(0); // Aassert that name's lenght after trimmign is gt than 0
            }
        });

    });

    // Suite to test Menu behaviour
    describe('The Menu', function(){
        const menu = document.querySelector('.slide-menu'); // Get menu element
        const menuLink = document.querySelector('.menu-icon-link'); // Get hamburger menu

        // Menu is hidden when loaded
        it('The Menu is hidden by default', function(){
            expect(menu).toBeDefined(); // Menu element is defined
            expect(menu.parentElement.classList.contains('menu-hidden')).toBe(true); // Menu contains class that hides it
        });

        // Menu is shown when menu icon is clicked, and hidden when the latter is clicked again
        it('The Menu is shown when menu icon is clicked', function(){
            expect(menu).toBeDefined();
            menuLink.click();
            expect(menu.parentElement.classList.contains('menu-hidden')).toBe(false);
            menuLink.click(); //Return to hidden
            expect(menu.parentElement.classList.contains('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function(){
        /*
        * Given our call is asynchronous, we want to verify that the done callback is returned form
        * loadFeed when it completes, and we can then call our test which dependes on it
        */

        const feedContainer = document.querySelector('.feed'); // feed container

        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('When we call the loadFeed function, there is at least one entry in the feed', function(done){
            expect(feedContainer).toBeDefined(); // feed container is defined
            expect(feedContainer.childElementCount).not.toBe(0); // feed has child elements after async call
            for (const entryLink of feedContainer.children){ // for each link element in feed Container
                const entry = entryLink.querySelector('.entry'); // retrieve article element
                expect(entryLink.href.trim().length).not.toBe(0); // href of link must not be empty
                expect(entryLink.classList.contains('entry-link')).toBe(true); // entry link has class for entry-link
                expect(entry).toBeDefined(); // article is defined
                expect(entry.firstElementChild).toBeDefined();
                expect(entry.lastElementChild).toBeDefined();
                expect(entry.firstElementChild).not.toBe(entry.lastElementChild); // article childs are two and not same element
                expect(entry.firstElementChild.tagName.toLowerCase()).toBe('h2'); // first child is H2
                expect(entry.lastElementChild.tagName.toLowerCase()).toBe('p'); // last child is p
            }
            done(); // We complete the callback
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        // TODO: Loaded the before content
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('When a new feed is loaded, the content actually changes.', function(done){
            // TODO: Loaded the content after loadFeed has completed
            // TODO: Assert that before content is different than this content
            // TODO: Assert that this content lenght is greater than before content
            done();
        });

    });
}());
