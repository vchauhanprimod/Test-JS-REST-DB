describe("When we want to create a new row in a given table but values for non existing columns are also specified", function() {
    // test case for creation of lead
    it("Should be able to perform a successful ajax request on resource :database/users", function() {
        var asyncCallComplete, result,
        _this = this;
        // asyncCallComplete is set to true when the ajax call is complete
        asyncCallComplete = false;

        // result stores the result of the successful ajax call
        result = null;

        // SECTION 1 - call asynchronous function
        runs(function() {
            return $.ajax({
                url: window.base_url+"test_db/users",
                type: "POST",
                data:{
                    "id":"19",
                    "first_name":"victor", 
                    "salary":"12009",
                    "amount":"100000"
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
            console.log(result);
            return expect(result['X-Sql-Error-Code']).toEqual("1054");
        });
    });
});