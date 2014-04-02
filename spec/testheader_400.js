describe("When we want to check status of the header if the requested table does not exist", function() {
    // test case to logout via rest call
    it("Should be able to perform a successful ajax request on resource "+window.base_url+"test_db/no_table to check the header status", function() {
        var asyncCallComplete, result,
        _this = this;
        // asyncCallComplete is set to true when the ajax call is complete
        asyncCallComplete = false;

        // result stores the result of the successful ajax call
        result = null;

        // SECTION 1 - call asynchronous function
        runs(function() {
            $.ajax({
                url: window.base_url+"test_db/no_table",
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
            return expect(result.getResponseHeader('status')).toEqual('400 Bad Request');
        });
    });
});