describe("When we want to create a new row in a table that does not exist", function() {
    // test case for creation of lead
    it("Should be able to perform a successful ajax request on resource :database/no_table", function() {
        var asyncCallComplete, result,
        _this = this;
        // asyncCallComplete is set to true when the ajax call is complete
        asyncCallComplete = false;

        // result stores the result of the successful ajax call
        result = null;

        // SECTION 1 - call asynchronous function
        runs(function() {
            return $.ajax({
                url: window.base_url+"test_db/no_table",
                type: "POST",
                data:{
                    'id':'18',
                    'first_name':'Harry', 
                    'salary':'1200' 
                     },
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
            return expect(result['message']).toEqual("Bad request");
        });
    });
});