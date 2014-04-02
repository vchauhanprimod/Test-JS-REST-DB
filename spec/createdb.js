describe("When we want to create a new database", function() {
    // test case for creation of lead
    it("Should be able to perform a successful ajax request on resource database/(create db)", function() {
        var asyncCallComplete, result,
        _this = this;
        // asyncCallComplete is set to true when the ajax call is complete
        asyncCallComplete = false;

        // result stores the result of the successful ajax call
        result = null;

        // SECTION 1 - call asynchronous function
        runs(function() {
            return $.ajax({
                url: window.base_url+"database",
                type: "POST",
                data: {
                    "db_name":"test_db"
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
            return expect(result['serverStatus']).toEqual(2);
        });
    });
});