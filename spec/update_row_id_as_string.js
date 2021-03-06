describe("When we want to update a row using id attribue whose value is specified as a string", function() {
    // test case for update lead
    it("Should be able to perform a successful ajax request on resource "+window.base_url+"users/ab to update a row", function() {
        var asyncCallComplete, result,
        _this = this;
        // asyncCallComplete is set to true when the ajax call is complete
        asyncCallComplete = false;

        // result stores the result of the successful ajax call
        result = null;

        // SECTION 1 - call asynchronous function
        runs(function() {
            return $.ajax({
                url: window.base_url+"test_db/users/ab",
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
            return expect(result['X-Sql-Error-Code']).toEqual("1054");
        });
    });
});