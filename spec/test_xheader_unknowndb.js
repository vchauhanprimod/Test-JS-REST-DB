describe("When we want to check x-header, when we want to view all rows of tables table from a non existing database", function() {
    // test case to logout via rest call
    it("Should be able to perform a successful ajax request on resource "+window.base_url+"no_db/users to check the x-header", function() {
        var asyncCallComplete, result,
        _this = this;
        // asyncCallComplete is set to true when the ajax call is complete
        asyncCallComplete = false;

        // result stores the result of the successful ajax call
        result = null;

        // SECTION 1 - call asynchronous function
        runs(function() {
            $.ajax({
                url: window.base_url+"no_db/users",
                type: "GET",
                success: function(res, status, xhr) {
                    asyncCallComplete = true;
                    result = xhr;
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
            return expect(result.getResponseHeader('X-Sql-Error-code')).toEqual('1049');
        });
    });
});