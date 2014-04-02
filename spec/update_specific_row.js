describe("When we want to update a row in given table", function() {
    // test case for update lead
    it("Should be able to perform a successful ajax request on resource "+window.base_url+"users/2/ to update a row", function() {
        var asyncCallComplete, result,
        _this = this;
        // asyncCallComplete is set to true when the ajax call is complete
        asyncCallComplete = false;

        // result stores the result of the successful ajax call
        result = null;

        // SECTION 1 - call asynchronous function
        runs(function() {
            return $.ajax({
                url: window.base_url+"test_db/users/2",
                type: "PUT",
                data: {
                    'first_name':'testrow'
                },
                success: function(data) {
                    asyncCallComplete = true;
                    result = data;
                //     console.log(data);
                    
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
            return expect(result['data']['affectedRows']).toEqual(1);
        });
    });
});