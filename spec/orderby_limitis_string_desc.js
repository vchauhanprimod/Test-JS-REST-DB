describe("Get a particular number of rows from a particular table from the desired database. Limit specified is a string", function() {
    // test case to logout via rest call
    it("Should be able to perform a successful ajax request on resource "+window.base_url+"/users?limit=abcd&by=amount&order=desc to Get abcd rows from the users table ordered by the salary field in descending", function() {
        var asyncCallComplete, result,
        _this = this;
        // asyncCallComplete is set to true when the ajax call is complete
        asyncCallComplete = false;

        // result stores the result of the successful ajax call
        result = null;

        // SECTION 1 - call asynchronous function
        runs(function() {
            $.ajax({
                url: window.base_url+"test_db/users?limit=abcd&by=salary&order=desc",
                type: "GET",
                success: function(data) {
                    asyncCallComplete = true;
                    result = data;
                // console.log(data)
                }
            }); 

        });

        // SECTION 2 - wait for the asynchronous call to complete
        waitsFor(function() {
            return asyncCallComplete !== false;
        });

        // SECTION 3 - perform tests
        return runs(function() {
            console.log(result);
            return expect (result['X-Sql-Error-Code']).toEqual("1327");
        });
    });
});