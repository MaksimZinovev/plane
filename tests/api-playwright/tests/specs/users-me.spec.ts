import { test, expect } from "@playwright/test";



test("GET users-me", async ({ request }) => {
    const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2NDA0ODc5LCJpYXQiOjE2OTU4MDAwNzksImp0aSI6Ijk1YThkYzZjZmNjNjRmNDBhZWU4ZTI4OTk0Nzk0Y2ZhIiwidXNlcl9pZCI6IjRlN2RhZDAxLTI4ZDktNGFjMy1iOGZlLWE2NTE0YTMwODNkOCJ9.MS__mkYnhmH1lgRLdl_IEeqLkUG_X2kx9UUeRzVSlYM'
    const headers = {
        headers: { Authorization: `Bearer ${TOKEN}` }
    }
    const response = await request.get("api/users/me", headers)
    expect(response.status()).toBe(200);

    const body = await response.json();
    // console.log(body);
    

});